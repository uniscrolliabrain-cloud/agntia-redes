import { createHash, randomBytes } from "node:crypto";

/**
 * OAuth de conexión de cuentas (RDS-C07).
 * State de un solo uso, PKCE S256, allowlist exacta de redirects.
 */

export type OAuthErrorCode =
  | "INVALID_REDIRECT_URI"
  | "STATE_REPLAY"
  | "STATE_UNKNOWN"
  | "UNSUPPORTED_CHALLENGE_METHOD";

export class OAuthError extends Error {
  readonly code: OAuthErrorCode;

  constructor(code: OAuthErrorCode, message: string) {
    super(message);
    this.name = "OAuthError";
    this.code = code;
  }
}

export interface PkcePair {
  readonly verifier: string;
  readonly challenge: string;
  readonly method: "S256";
}

export function createPkcePair(): PkcePair {
  const verifier = randomBytes(32).toString("base64url");
  const challenge = createHash("sha256").update(verifier).digest("base64url");
  return { verifier, challenge, method: "S256" };
}

export interface OAuthStateStore {
  issue(state: string): void;
  /** Devuelve true la primera vez y false en cualquier replay. */
  consume(state: string): boolean;
}

export class InMemoryOAuthStateStore implements OAuthStateStore {
  private readonly live = new Set<string>();

  issue(state: string): void {
    this.live.add(state);
  }

  consume(state: string): boolean {
    return this.live.delete(state);
  }
}

export interface AuthorizationRequestInput {
  readonly authorizeEndpoint: string;
  readonly clientId: string;
  readonly redirectUri: string;
  readonly scopes: readonly string[];
  readonly stateStore: OAuthStateStore;
}

export interface AuthorizationRequest {
  readonly url: string;
  readonly state: string;
  readonly verifier: string;
}

export function assertRedirectAllowed(redirectUri: string, allowlist: readonly string[]): void {
  if (!allowlist.includes(redirectUri)) {
    throw new OAuthError("INVALID_REDIRECT_URI", "redirect fuera de la allowlist");
  }
  const url = new URL(redirectUri);
  if (url.protocol !== "https:") {
    throw new OAuthError("INVALID_REDIRECT_URI", "redirect debe ser https");
  }
}

export function createAuthorizationRequest(
  input: AuthorizationRequestInput,
  allowlist: readonly string[],
): AuthorizationRequest {
  assertRedirectAllowed(input.redirectUri, allowlist);
  const state = randomBytes(24).toString("base64url");
  const pkce = createPkcePair();
  input.stateStore.issue(state);

  const url = new URL(input.authorizeEndpoint);
  if (url.protocol !== "https:") {
    throw new OAuthError("INVALID_REDIRECT_URI", "authorize endpoint debe ser https");
  }
  url.searchParams.set("response_type", "code");
  url.searchParams.set("client_id", input.clientId);
  url.searchParams.set("redirect_uri", input.redirectUri);
  url.searchParams.set("scope", input.scopes.join(" "));
  url.searchParams.set("state", state);
  url.searchParams.set("code_challenge", pkce.challenge);
  url.searchParams.set("code_challenge_method", pkce.method);

  return { url: url.toString(), state, verifier: pkce.verifier };
}

/** Consume el state del callback. Replay o state desconocido = fallo cerrado. */
export function completeAuthorization(input: {
  state: string;
  stateStore: OAuthStateStore;
}): void {
  if (!input.stateStore.consume(input.state)) {
    throw new OAuthError("STATE_REPLAY", "state ya consumido o desconocido");
  }
}
