import { createHash } from "node:crypto";
import { z } from "zod";
import { MoneyCentsSchema, OpaqueIdSchema, TimestampSchema } from "../contracts/index.js";

/**
 * Aprobación vinculada al payload exacto (RDS-C19).
 * El approval_id por sí solo no prueba identidad, firma ni contenido aprobado.
 */

export function stableStringify(value: unknown): string {
  if (value === null || typeof value === "boolean" || typeof value === "string") {
    return JSON.stringify(value);
  }
  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      throw new Error("número no finito en payload canónico");
    }
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return `[${value.map((item) => stableStringify(item)).join(",")}]`;
  }
  if (typeof value === "object") {
    const record = value as Record<string, unknown>;
    const keys = Object.keys(record)
      .filter((key) => record[key] !== undefined)
      .sort();
    const entries = keys.map((key) => `${JSON.stringify(key)}:${stableStringify(record[key])}`);
    return `{${entries.join(",")}}`;
  }
  throw new Error(`tipo no serializable en payload canónico: ${typeof value}`);
}

export function sha256Hex(value: string): string {
  return createHash("sha256").update(value, "utf8").digest("hex");
}

export function canonicalPayloadHash(payload: unknown): string {
  return sha256Hex(stableStringify(payload));
}

export const SignerRefSchema = z
  .object({
    actorId: OpaqueIdSchema,
    kind: z.enum(["human", "agent", "service"]),
    signedAt: TimestampSchema,
  })
  .strict();

export const ApprovalBindingSchema = z
  .object({
    approvalId: OpaqueIdSchema,
    tenantId: OpaqueIdSchema,
    accountBindingId: OpaqueIdSchema,
    payloadHash: z.string().regex(/^[0-9a-f]{64}$/),
    rightsHash: z.string().regex(/^[0-9a-f]{64}$/),
    policyHash: z.string().regex(/^[0-9a-f]{64}$/),
    slotHash: z.string().regex(/^[0-9a-f]{64}$/),
    costCeilingCents: MoneyCentsSchema,
    expectedRevision: z.number().int().nonnegative(),
    signerRefs: z.array(SignerRefSchema).min(1),
    issuedAt: TimestampSchema,
    expiresAt: TimestampSchema,
    revocationVersion: z.number().int().nonnegative(),
  })
  .strict();

export type ApprovalBinding = z.infer<typeof ApprovalBindingSchema>;
export type SignerRef = z.infer<typeof SignerRefSchema>;

export type ApprovalDenyCode =
  | "TENANT_MISMATCH"
  | "ACCOUNT_MISMATCH"
  | "PAYLOAD_HASH_MISMATCH"
  | "RIGHTS_HASH_MISMATCH"
  | "POLICY_HASH_MISMATCH"
  | "SLOT_HASH_MISMATCH"
  | "REVISION_MISMATCH"
  | "NOT_YET_VALID"
  | "EXPIRED"
  | "REVOKED"
  | "COST_EXCEEDED"
  | "MISSING_HUMAN_SIGNER"
  | "SELF_APPROVAL";

export type ApprovalVerification = { readonly ok: true } | { readonly ok: false; readonly code: ApprovalDenyCode };

export interface ApprovalContext {
  readonly tenantId: string;
  readonly accountBindingId: string;
  readonly payloadHash: string;
  readonly rightsHash: string;
  readonly policyHash: string;
  readonly slotHash: string;
  readonly costCents: number;
  readonly expectedRevision: number;
  readonly now: Date;
  readonly revocationVersion: number;
  readonly proposerActorId?: string;
  readonly requiredHumanSigners?: number;
}

const CLOCK_SKEW_MS = 60_000;

export function verifyApproval(
  binding: ApprovalBinding,
  context: ApprovalContext,
): ApprovalVerification {
  const deny = (code: ApprovalDenyCode): ApprovalVerification => ({ ok: false, code });

  if (binding.tenantId !== context.tenantId) return deny("TENANT_MISMATCH");
  if (binding.accountBindingId !== context.accountBindingId) return deny("ACCOUNT_MISMATCH");
  if (binding.payloadHash !== context.payloadHash) return deny("PAYLOAD_HASH_MISMATCH");
  if (binding.rightsHash !== context.rightsHash) return deny("RIGHTS_HASH_MISMATCH");
  if (binding.policyHash !== context.policyHash) return deny("POLICY_HASH_MISMATCH");
  if (binding.slotHash !== context.slotHash) return deny("SLOT_HASH_MISMATCH");
  if (binding.expectedRevision !== context.expectedRevision) return deny("REVISION_MISMATCH");
  if (binding.revocationVersion !== context.revocationVersion) return deny("REVOKED");

  const now = context.now.getTime();
  if (new Date(binding.issuedAt).getTime() > now + CLOCK_SKEW_MS) return deny("NOT_YET_VALID");
  if (new Date(binding.expiresAt).getTime() <= now) return deny("EXPIRED");
  if (context.costCents > binding.costCeilingCents) return deny("COST_EXCEEDED");

  const humans = binding.signerRefs.filter((signer) => signer.kind === "human");
  const required = context.requiredHumanSigners ?? 1;
  if (humans.length < required) return deny("MISSING_HUMAN_SIGNER");

  if (
    context.proposerActorId !== undefined &&
    humans.some((signer) => signer.actorId === context.proposerActorId)
  ) {
    return deny("SELF_APPROVAL");
  }

  return { ok: true };
}
