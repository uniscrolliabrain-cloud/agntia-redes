/**
 * Catálogo de capacidades de proveedor (RDS-C06).
 *
 * `supported_documented` no equivale a `enabled_runtime`: solo una capability
 * verificada en ejecución, con evidencia y sin caducar, puede habilitar IO.
 */

export const CAPABILITY_STATES = [
  "DOCUMENTED",
  "OBSERVED",
  "VERIFIED_RUNTIME",
  "UNKNOWN",
  "BLOCKED",
] as const;

export type CapabilityState = (typeof CAPABILITY_STATES)[number];

export interface ProviderCapability {
  readonly operation:
    | "readAccount"
    | "validatePayload"
    | "prepareMedia"
    | "createDelivery"
    | "reconcileDelivery"
    | "readMetrics";
  readonly state: CapabilityState;
  readonly verifiedAt: string | null;
  readonly expiresAt: string | null;
  readonly evidenceRef: string | null;
}

export interface ProviderRecord {
  readonly provider: string;
  readonly apiVersion: string;
  readonly capabilities: readonly ProviderCapability[];
}

export type ProviderUnavailableCode = "DEPENDENCY_UNAVAILABLE" | "CAPABILITY_UNKNOWN";

export class ProviderUnavailableError extends Error {
  readonly code: ProviderUnavailableCode;

  constructor(code: ProviderUnavailableCode, message: string) {
    super(message);
    this.name = "ProviderUnavailableError";
    this.code = code;
  }
}

export interface CapabilityResolution {
  readonly state: CapabilityState;
  readonly enabled: boolean;
  readonly reason: string;
}

export function resolveCapability(
  record: ProviderRecord,
  operation: ProviderCapability["operation"],
  now: Date,
): CapabilityResolution {
  const capability = record.capabilities.find((candidate) => candidate.operation === operation);
  if (capability === undefined) {
    return { state: "UNKNOWN", enabled: false, reason: "operation_not_declared" };
  }
  if (capability.state !== "VERIFIED_RUNTIME") {
    return { state: capability.state, enabled: false, reason: `state_${capability.state}` };
  }
  if (capability.expiresAt === null) {
    return { state: capability.state, enabled: false, reason: "verification_without_expiry" };
  }
  if (new Date(capability.expiresAt).getTime() <= now.getTime()) {
    return { state: "UNKNOWN", enabled: false, reason: "verification_expired" };
  }
  return { state: capability.state, enabled: true, reason: "verified_runtime" };
}

export function assertRuntimeEnabled(
  record: ProviderRecord,
  operation: ProviderCapability["operation"],
  now: Date,
): void {
  const resolution = resolveCapability(record, operation, now);
  if (!resolution.enabled) {
    throw new ProviderUnavailableError(
      "DEPENDENCY_UNAVAILABLE",
      `${record.provider}.${operation} no habilitada (${resolution.reason})`,
    );
  }
}

/**
 * Catálogo inicial: estados observados en la investigación documental del repo.
 * Nada está VERIFIED_RUNTIME todavía; Mastodon figura como referencia DOCUMENTED
 * y Meta/Pinterest como UNKNOWN por falta de auditoría primaria.
 */
export const DOCUMENTED_PROVIDERS: readonly ProviderRecord[] = [
  {
    provider: "mastodon",
    apiVersion: "documented-2026-11",
    capabilities: [
      { operation: "createDelivery", state: "DOCUMENTED", verifiedAt: null, expiresAt: null, evidenceRef: "SRC-MASTODON-STATUSES" },
      { operation: "reconcileDelivery", state: "DOCUMENTED", verifiedAt: null, expiresAt: null, evidenceRef: null },
      { operation: "readAccount", state: "DOCUMENTED", verifiedAt: null, expiresAt: null, evidenceRef: null },
    ],
  },
  {
    provider: "postiz",
    apiVersion: "documented-2026-11",
    capabilities: [
      { operation: "createDelivery", state: "DOCUMENTED", verifiedAt: null, expiresAt: null, evidenceRef: "SRC-POSTIZ-API" },
      { operation: "readMetrics", state: "DOCUMENTED", verifiedAt: null, expiresAt: null, evidenceRef: null },
    ],
  },
  {
    provider: "linkedin",
    apiVersion: "202606",
    capabilities: [
      // 202511 se retira el 2026-11-16: no se declara soportada.
      { operation: "createDelivery", state: "DOCUMENTED", verifiedAt: null, expiresAt: null, evidenceRef: "SRC-LINKEDIN-POSTS-202606" },
    ],
  },
  {
    provider: "meta",
    apiVersion: "unknown",
    capabilities: [
      { operation: "createDelivery", state: "UNKNOWN", verifiedAt: null, expiresAt: null, evidenceRef: null },
    ],
  },
  {
    provider: "tiktok",
    apiVersion: "documented-2026-11",
    capabilities: [
      { operation: "createDelivery", state: "DOCUMENTED", verifiedAt: null, expiresAt: null, evidenceRef: "SRC-TIKTOK-DIRECT-POST" },
    ],
  },
  {
    provider: "youtube",
    apiVersion: "documented-2026-11",
    capabilities: [
      { operation: "createDelivery", state: "DOCUMENTED", verifiedAt: null, expiresAt: null, evidenceRef: "SRC-YOUTUBE-INSERT" },
    ],
  },
  {
    provider: "x",
    apiVersion: "documented-2026-11",
    capabilities: [
      { operation: "createDelivery", state: "BLOCKED", verifiedAt: null, expiresAt: null, evidenceRef: "SRC-X-PAY-PER-USE" },
    ],
  },
  {
    provider: "pinterest",
    apiVersion: "unknown",
    capabilities: [
      { operation: "createDelivery", state: "UNKNOWN", verifiedAt: null, expiresAt: null, evidenceRef: null },
    ],
  },
];

export function findProviderRecord(provider: string): ProviderRecord | undefined {
  return DOCUMENTED_PROVIDERS.find((record) => record.provider === provider);
}
