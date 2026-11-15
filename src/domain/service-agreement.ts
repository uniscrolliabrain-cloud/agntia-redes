import { z } from "zod";
import {
  CapabilitySchema,
  MoneyCentsSchema,
  OpaqueIdSchema,
  TimestampSchema,
} from "../contracts/index.js";

/**
 * Acuerdos de servicio y órdenes de trabajo (RDS-C02).
 * Tres hechos separados e irreducibles: contratar, aprobar contenido y aceptar entrega.
 */

export const ServiceModeSchema = z.enum(["integrated", "standalone"]);
export type ServiceMode = z.infer<typeof ServiceModeSchema>;

export const EntitlementSchema = z
  .object({
    capability: CapabilitySchema,
    monthlyLimit: z.number().int().nonnegative().nullable(),
  })
  .strict();

export const ServiceAgreementSchema = z
  .object({
    agreementId: OpaqueIdSchema,
    providerOrgId: OpaqueIdSchema,
    customerOrgId: OpaqueIdSchema,
    customerWorkspaceId: OpaqueIdSchema,
    mode: ServiceModeSchema,
    revision: z.number().int().positive(),
    status: z.enum(["proposed", "active", "suspended", "terminated"]),
    validFrom: TimestampSchema,
    validUntil: TimestampSchema.nullable(),
    spendCeilingCents: MoneyCentsSchema,
    entitlements: z.array(EntitlementSchema).min(1),
    dataPolicy: z
      .object({
        dpaRef: OpaqueIdSchema,
        retentionDays: z.number().int().positive(),
      })
      .strict(),
    approvalPolicy: z
      .object({
        // Un acuerdo que permita efectos sin aprobación humana es inválido por contrato.
        requireHumanApprovalForEffects: z.literal(true),
        separationOfDuties: z.boolean(),
      })
      .strict(),
  })
  .strict();

export type ServiceAgreement = z.infer<typeof ServiceAgreementSchema>;

export type DomainErrorCode =
  | "AGREEMENT_NOT_ACTIVE"
  | "AGREEMENT_EXPIRED"
  | "CAPABILITY_NOT_ENTITLED"
  | "WORK_ORDER_OUT_OF_SCOPE"
  | "BUDGET_MANDATE_EXCEEDED";

export class DomainError extends Error {
  readonly code: DomainErrorCode;

  constructor(code: DomainErrorCode, message: string) {
    super(message);
    this.name = "DomainError";
    this.code = code;
  }
}

export function assertAgreementUsable(
  agreement: ServiceAgreement,
  input: { capability: string; now: Date },
): void {
  if (agreement.status !== "active") {
    throw new DomainError("AGREEMENT_NOT_ACTIVE", `acuerdo ${agreement.status}`);
  }
  if (new Date(agreement.validFrom).getTime() > input.now.getTime()) {
    throw new DomainError("AGREEMENT_NOT_ACTIVE", "acuerdo aún no vigente");
  }
  if (
    agreement.validUntil !== null &&
    new Date(agreement.validUntil).getTime() <= input.now.getTime()
  ) {
    throw new DomainError("AGREEMENT_EXPIRED", "acuerdo vencido");
  }
  const entitled = agreement.entitlements.some(
    (entitlement) => entitlement.capability === input.capability,
  );
  if (!entitled) {
    throw new DomainError("CAPABILITY_NOT_ENTITLED", "capability no incluida en el acuerdo");
  }
}
