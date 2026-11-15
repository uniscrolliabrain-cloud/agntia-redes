/**
 * Transporte robusto (RDS-C08).
 * - SSRF: solo https, sin credenciales en URL, sin hosts privados ni metadata.
 * - Timeout y límite de tamaño de respuesta.
 * - Reintentos SOLO en lecturas; una escritura ambigua nunca se reintenta a ciegas.
 */

export type TransportErrorCode =
  | "BLOCKED_URL"
  | "TIMEOUT"
  | "RATE_LIMITED"
  | "UPSTREAM_UNAVAILABLE"
  | "PROVIDER_INVALID_RESPONSE"
  | "RESPONSE_TOO_LARGE";

export class TransportError extends Error {
  readonly code: TransportErrorCode;
  readonly retryAfterMs: number | null;

  constructor(code: TransportErrorCode, message: string, retryAfterMs: number | null = null) {
    super(message);
    this.name = "TransportError";
    this.code = code;
    this.retryAfterMs = retryAfterMs;
  }
}

export type FetchLike = (input: string, init?: RequestInit) => Promise<Response>;

const PRIVATE_HOST_SUFFIXES = [".localhost", ".local", ".internal", ".lan", ".home.arpa"];
const METADATA_HOSTS = new Set(["metadata.google.internal", "metadata", "169.254.169.254"]);

function isPrivateIpv4(host: string): boolean {
  const match = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(host);
  if (match === null) {
    return false;
  }
  const octets = match.slice(1).map((part) => Number.parseInt(part ?? "", 10));
  if (octets.some((octet) => Number.isNaN(octet) || octet < 0 || octet > 255)) {
    return false;
  }
  const [a, b] = octets as [number, number, number, number];
  if (a === 0 || a === 10 || a === 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;
  if (a >= 224) return true;
  return false;
}

function isPrivateIpv6(host: string): boolean {
  const bare = host.replace(/^\[|\]$/g, "").toLowerCase();
  if (bare === "::1" || bare === "::") return true;
  if (bare.startsWith("fc") || bare.startsWith("fd")) return true;
  if (bare.startsWith("fe80")) return true;
  if (bare.startsWith("::ffff:")) return true;
  return false;
}

export interface UrlPolicy {
  readonly allowedHosts?: readonly string[];
}

export function assertPublicHttpsUrl(rawUrl: string, policy: UrlPolicy = {}): URL {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    throw new TransportError("BLOCKED_URL", "URL no válida");
  }
  if (url.protocol !== "https:") {
    throw new TransportError("BLOCKED_URL", "solo https");
  }
  if (url.username !== "" || url.password !== "") {
    throw new TransportError("BLOCKED_URL", "credenciales en URL no permitidas");
  }
  const host = url.hostname.toLowerCase();
  if (host === "localhost" || PRIVATE_HOST_SUFFIXES.some((suffix) => host.endsWith(suffix))) {
    throw new TransportError("BLOCKED_URL", "host local no permitido");
  }
  if (METADATA_HOSTS.has(host) || isPrivateIpv4(host) || isPrivateIpv6(host)) {
    throw new TransportError("BLOCKED_URL", "host privado o metadata no permitido");
  }
  if (policy.allowedHosts !== undefined) {
    const allowed = policy.allowedHosts.some(
      (candidate) => host === candidate || host.endsWith(`.${candidate}`),
    );
    if (!allowed) {
      throw new TransportError("BLOCKED_URL", "host fuera de la allowlist");
    }
  }
  return url;
}

export interface TransportOptions {
  readonly fetchImpl?: FetchLike;
  readonly timeoutMs?: number;
  readonly maxResponseBytes?: number;
  readonly maxReadRetries?: number;
  readonly sleep?: (ms: number) => Promise<void>;
  readonly urlPolicy?: UrlPolicy;
}

export interface TransportResult {
  readonly status: number;
  readonly body: unknown;
}

const IDEMPOTENT_METHODS = new Set(["GET", "HEAD"]);

function parseRetryAfterMs(value: string | null): number | null {
  if (value === null) return null;
  const seconds = Number.parseInt(value, 10);
  if (!Number.isNaN(seconds) && seconds >= 0) {
    return seconds * 1000;
  }
  const date = Date.parse(value);
  if (!Number.isNaN(date)) {
    return Math.max(0, date - Date.now());
  }
  return null;
}

export async function requestJson(
  url: string,
  init: RequestInit,
  options: TransportOptions = {},
): Promise<TransportResult> {
  const method = (init.method ?? "GET").toUpperCase();
  const retryable = IDEMPOTENT_METHODS.has(method);
  const maxRetries = retryable ? (options.maxReadRetries ?? 2) : 0;
  const fetchImpl = options.fetchImpl ?? fetch;
  const timeoutMs = options.timeoutMs ?? 10_000;
  const maxBytes = options.maxResponseBytes ?? 1_000_000;
  const sleep = options.sleep ?? ((ms: number) => new Promise((resolve) => setTimeout(resolve, ms)));

  assertPublicHttpsUrl(url, options.urlPolicy ?? {});

  let attempt = 0;
  for (;;) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetchImpl(url, {
        ...init,
        redirect: "error",
        signal: init.signal ?? controller.signal,
      });

      if (response.status === 429 || response.status >= 500) {
        const retryAfterMs = parseRetryAfterMs(response.headers.get("retry-after"));
        if (attempt < maxRetries) {
          attempt += 1;
          const backoff = retryAfterMs ?? Math.min(250 * 2 ** (attempt - 1), 4_000);
          await sleep(backoff);
          continue;
        }
        throw new TransportError(
          response.status === 429 ? "RATE_LIMITED" : "UPSTREAM_UNAVAILABLE",
          `upstream ${response.status}`,
          retryAfterMs,
        );
      }

      if (response.status >= 300) {
        throw new TransportError("PROVIDER_INVALID_RESPONSE", `upstream ${response.status}`);
      }

      const text = await response.text();
      if (new TextEncoder().encode(text).byteLength > maxBytes) {
        throw new TransportError("RESPONSE_TOO_LARGE", "respuesta por encima del límite");
      }
      let body: unknown = null;
      if (text.length > 0) {
        try {
          body = JSON.parse(text) as unknown;
        } catch {
          throw new TransportError("PROVIDER_INVALID_RESPONSE", "JSON inválido");
        }
      }
      return { status: response.status, body };
    } catch (error) {
      if (error instanceof TransportError) {
        throw error;
      }
      // Abort/timeout o fallo de red: nunca se convierte en éxito ni se reintenta
      // si la operación era de escritura.
      throw new TransportError("TIMEOUT", "sin respuesta del proveedor");
    } finally {
      clearTimeout(timer);
    }
  }
}
