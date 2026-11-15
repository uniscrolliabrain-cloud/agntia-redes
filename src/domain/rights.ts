import { z } from "zod";
import { OpaqueIdSchema, TimestampSchema } from "../contracts/index.js";

/**
 * Derechos de activos (RDS-C17). Un metadato ausente no es un permiso:
 * sin licencia verificable se deniega el uso.
 */

export const AssetRightsSchema = z
  .object({
    assetRef: OpaqueIdSchema,
    tenantId: OpaqueIdSchema,
    licensor: z.string().min(1).max(200),
    licenseRef: OpaqueIdSchema,
    territories: z.array(z.string().regex(/^[A-Z]{2}$/)).min(1),
    validFrom: TimestampSchema,
    validUntil: TimestampSchema.nullable(),
    commercialUse: z.boolean(),
    derivativeWorks: z.boolean(),
    musicRights: z.boolean().nullable(),
    modelReleaseRef: OpaqueIdSchema.nullable(),
    syntheticMedia: z.boolean(),
    sourceRef: OpaqueIdSchema,
  })
  .strict();

export type AssetRights = z.infer<typeof AssetRightsSchema>;

export type RightsDenyReason =
  | "RIGHTS_UNKNOWN"
  | "RIGHTS_NOT_YET_VALID"
  | "RIGHTS_EXPIRED"
  | "TERRITORY_NOT_COVERED"
  | "COMMERCIAL_USE_NOT_LICENSED"
  | "DERIVATIVE_NOT_LICENSED"
  | "MUSIC_RIGHTS_UNKNOWN"
  | "MODEL_RELEASE_MISSING";

export type RightsDecision =
  | { readonly allowed: true }
  | { readonly allowed: false; readonly reasons: RightsDenyReason[] };

export interface EvaluateRightsInput {
  readonly rights: AssetRights | null | undefined;
  readonly now: Date;
  readonly territory: string;
  readonly paidPromotion: boolean;
  readonly hasMusic: boolean;
  readonly depictsPerson: boolean;
  readonly isDerivative: boolean;
}

export function evaluateRights(input: EvaluateRightsInput): RightsDecision {
  const rights = input.rights;
  if (rights === null || rights === undefined) {
    return { allowed: false, reasons: ["RIGHTS_UNKNOWN"] };
  }

  const reasons: RightsDenyReason[] = [];

  if (new Date(rights.validFrom).getTime() > input.now.getTime()) {
    reasons.push("RIGHTS_NOT_YET_VALID");
  }
  if (
    rights.validUntil !== null &&
    new Date(rights.validUntil).getTime() <= input.now.getTime()
  ) {
    reasons.push("RIGHTS_EXPIRED");
  }
  if (!rights.territories.includes(input.territory)) {
    reasons.push("TERRITORY_NOT_COVERED");
  }
  if (input.paidPromotion && !rights.commercialUse) {
    reasons.push("COMMERCIAL_USE_NOT_LICENSED");
  }
  if (input.isDerivative && !rights.derivativeWorks) {
    reasons.push("DERIVATIVE_NOT_LICENSED");
  }
  if (input.hasMusic && rights.musicRights !== true) {
    reasons.push("MUSIC_RIGHTS_UNKNOWN");
  }
  if (input.depictsPerson && rights.modelReleaseRef === null) {
    reasons.push("MODEL_RELEASE_MISSING");
  }

  return reasons.length === 0 ? { allowed: true } : { allowed: false, reasons };
}
