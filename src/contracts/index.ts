import { z } from "zod";

/**
 * Contratos v1 del servicio social (RDS-C04).
 *
 * Reglas del contrato transversal docs/contracts/01-contratos.md:
 * - Identidad, capability y correlación se verifican en servidor; el JSON nunca es la autoridad.
 * - Objetos estrictos: campos desconocidos se rechazan en la frontera.
 * - Dinero en céntimos enteros; fechas UTC con offset y zona IANA separada.
 * - Errores sin traceback, DSN ni payload sensible.
 */

export const SCHEMA_VERSION = 1 as const;

export const OpaqueIdSchema = z
  .string()
  .min(1)
  .max(128)
  .regex(/^[A-Za-z0-9][A-Za-z0-9._:-]*$/, "identificador opaco no válido");

export type OpaqueId = z.infer<typeof OpaqueIdSchema>;

export const MoneyCentsSchema = z.number().int().nonnegative().max(Number.MAX_SAFE_INTEGER);

export const TimestampSchema = z.string().datetime({ offset: true });

export const ActorKindSchema = z.enum(["human", "agent", "service"]);
export type ActorKind = z.infer<typeof ActorKindSchema>;

/**
 * Catálogo inicial de capacidades (docs/contracts/01-contratos.md §Catálogo agéntico).
 * Las de lectura/propuesta son delegables a un agente; las de efecto externo
 * exigen humano o delegación verificable.
 */
export const CAPABILITIES = [
  "social.account.health",
  "social.calendar.read",
  "social.publication.status",
  "social.report.read",
  "social.draft.propose",
  "social.reply.propose",
  "social.explain.block",
  "social.publication.execute",
  "social.approval.grant",
  "social.credentials.connect",
  "social.remote.delete",
  "social.budget.change",
  "social.admin.provider",
] as const;

export type Capability = (typeof CAPABILITIES)[number];

export const CapabilitySchema = z.enum(CAPABILITIES);

export const EFFECT_CAPABILITIES: ReadonlySet<Capability> = new Set<Capability>([
  "social.publication.execute",
  "social.remote.delete",
]);

export const HUMAN_ONLY_CAPABILITIES: ReadonlySet<Capability> = new Set<Capability>([
  "social.approval.grant",
  "social.credentials.connect",
  "social.remote.delete",
  "social.budget.change",
  "social.admin.provider",
]);

export function isEffectCapability(capability: Capability): boolean {
  return EFFECT_CAPABILITIES.has(capability);
}

export const PrincipalSchema = z
  .object({
    tenantId: OpaqueIdSchema,
    actorId: OpaqueIdSchema,
    actorKind: ActorKindSchema,
    capabilities: z.array(CapabilitySchema),
    requestId: OpaqueIdSchema,
    originTenantId: OpaqueIdSchema.optional(),
  })
  .strict();

export type Principal = z.infer<typeof PrincipalSchema>;

export const OperationEnvelopeSchema = z
  .object({
    schemaVersion: z.literal(SCHEMA_VERSION),
    operationId: z.string().uuid(),
    tenantId: OpaqueIdSchema,
    actorId: OpaqueIdSchema,
    actorKind: ActorKindSchema,
    capability: CapabilitySchema,
    correlationId: z.string().uuid(),
    causationId: z.string().uuid().nullable(),
    idempotencyKey: z
      .string()
      .min(8)
      .max(200)
      .regex(/^[A-Za-z0-9._:-]+$/, "idempotencyKey no válida"),
    expectedRevision: z.number().int().nonnegative(),
    approvalRef: OpaqueIdSchema.nullable(),
    dryRun: z.boolean(),
    payload: z.record(z.unknown()),
  })
  .strict();

export type OperationEnvelope = z.infer<typeof OperationEnvelopeSchema>;

export class ContractError extends Error {
  readonly code: "VALIDATION_FAILED" | "PRINCIPAL_MISMATCH" | "IDEMPOTENCY_CONFLICT";

  constructor(code: ContractError["code"], message: string) {
    super(message);
    this.name = "ContractError";
    this.code = code;
  }
}

/** Parsea sin devolver el input en el mensaje (evita filtrar datos a logs). */
export function parseStrict<T>(schema: z.ZodType<T>, input: unknown, label: string): T {
  const result = schema.safeParse(input);
  if (!result.success) {
    const paths = result.error.issues
      .map((issue) => `${issue.path.join(".") || "<root>"}:${issue.code}`)
      .join(",");
    throw new ContractError("VALIDATION_FAILED", `${label} inválido (${paths})`);
  }
  return result.data;
}

/**
 * El envelope lo puede escribir un LLM; la identidad real es la del principal.
 * Cualquier discrepancia anula la operación.
 */
export function assertEnvelopeMatchesPrincipal(
  envelope: OperationEnvelope,
  principal: Principal,
): void {
  if (envelope.tenantId !== principal.tenantId) {
    throw new ContractError("PRINCIPAL_MISMATCH", "tenantId no coincide con el principal");
  }
  if (envelope.actorId !== principal.actorId) {
    throw new ContractError("PRINCIPAL_MISMATCH", "actorId no coincide con el principal");
  }
  if (envelope.actorKind !== principal.actorKind) {
    throw new ContractError("PRINCIPAL_MISMATCH", "actorKind no coincide con el principal");
  }
}

export const ERROR_CODES = [
  "VALIDATION_FAILED", // 400/422
  "UNAUTHENTICATED", // 401
  "FORBIDDEN", // 403
  "NOT_FOUND", // 404
  "REVISION_CONFLICT", // 409
  "IDEMPOTENCY_CONFLICT", // 409
  "DEPENDENCY_UNAVAILABLE", // 424
  "RATE_LIMITED", // 429
  "PROVIDER_INVALID_RESPONSE", // 502
  "UNAVAILABLE", // 503
  "TIMEOUT", // 504
  "OUTCOME_UNKNOWN", // 504 + reconciliationRequired
] as const;

export type ErrorCode = (typeof ERROR_CODES)[number];

const STATUS_BY_CODE: Record<ErrorCode, number> = {
  VALIDATION_FAILED: 400,
  UNAUTHENTICATED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  REVISION_CONFLICT: 409,
  IDEMPOTENCY_CONFLICT: 409,
  DEPENDENCY_UNAVAILABLE: 424,
  RATE_LIMITED: 429,
  PROVIDER_INVALID_RESPONSE: 502,
  UNAVAILABLE: 503,
  TIMEOUT: 504,
  OUTCOME_UNKNOWN: 504,
};

const RETRYABLE_BY_CODE: Record<ErrorCode, boolean> = {
  VALIDATION_FAILED: false,
  UNAUTHENTICATED: false,
  FORBIDDEN: false,
  NOT_FOUND: false,
  REVISION_CONFLICT: false,
  IDEMPOTENCY_CONFLICT: false,
  DEPENDENCY_UNAVAILABLE: false,
  RATE_LIMITED: true,
  PROVIDER_INVALID_RESPONSE: false,
  UNAVAILABLE: true,
  TIMEOUT: true,
  OUTCOME_UNKNOWN: false,
};

const RECONCILIATION_BY_CODE: Record<ErrorCode, boolean> = {
  VALIDATION_FAILED: false,
  UNAUTHENTICATED: false,
  FORBIDDEN: false,
  NOT_FOUND: false,
  REVISION_CONFLICT: false,
  IDEMPOTENCY_CONFLICT: false,
  DEPENDENCY_UNAVAILABLE: false,
  RATE_LIMITED: false,
  PROVIDER_INVALID_RESPONSE: false,
  UNAVAILABLE: false,
  TIMEOUT: false,
  OUTCOME_UNKNOWN: true,
};

export interface ApiErrorBody {
  code: ErrorCode;
  message: string;
  correlationId: string | null;
  retryable: boolean;
  reconciliationRequired: boolean;
}

export interface ApiErrorResponse {
  status: number;
  body: ApiErrorBody;
}

export function apiError(
  code: ErrorCode,
  options: { message: string; correlationId?: string | null },
): ApiErrorResponse {
  return {
    status: STATUS_BY_CODE[code],
    body: {
      code,
      message: options.message,
      correlationId: options.correlationId ?? null,
      retryable: RETRYABLE_BY_CODE[code],
      reconciliationRequired: RECONCILIATION_BY_CODE[code],
    },
  };
}

export function statusForError(code: ErrorCode): number {
  return STATUS_BY_CODE[code];
}
