import { z } from "zod";
import { MoneyCentsSchema, OpaqueIdSchema, TimestampSchema } from "../contracts/index.js";
import { DomainError, type ServiceAgreement } from "./service-agreement.js";

/**
 * Órdenes de trabajo y aceptaciones (RDS-C02).
 * Los tres tipos de aceptación están marcados con brands incompatibles para que
 * el compilador impida confundir "contratado" con "aprobado" o "entregado".
 */

declare const acceptanceBrand: unique symbol;
type Branded<T, B extends string> = T & { readonly [acceptanceBrand]: B };

export const WorkOrderSchema = z
  .object({
    workOrderId: OpaqueIdSchema,
    tenantId: OpaqueIdSchema,
    agreementId: OpaqueIdSchema,
    projectId: OpaqueIdSchema,
    objective: z.string().min(1).max(2000),
    sources: z.array(OpaqueIdSchema).default([]),
    deliverables: z.array(z.string().min(1).max(200)).min(1),
    budgetMandateCents: MoneyCentsSchema,
    dueAt: TimestampSchema,
    status: z.enum(["draft", "accepted", "in_progress", "delivered", "closed"]),
    revision: z.number().int().positive(),
  })
  .strict();

export type WorkOrder = z.infer<typeof WorkOrderSchema>;

export interface CommercialAcceptanceFact {
  readonly agreementId: string;
  readonly acceptedAt: string;
  readonly acceptedByActorId: string;
  readonly amountCents: number;
}

export interface EditorialApprovalFact {
  readonly draftRevision: number;
  readonly payloadHash: string;
  readonly approvedAt: string;
  readonly approvedByActorId: string;
}

export interface DeliverableAcceptanceFact {
  readonly workOrderId: string;
  readonly deliverableVersion: number;
  readonly acceptedAt: string;
  readonly acceptedByActorId: string;
}

export type CommercialAcceptance = Branded<CommercialAcceptanceFact, "commercial">;
export type EditorialApproval = Branded<EditorialApprovalFact, "editorial">;
export type DeliverableAcceptance = Branded<DeliverableAcceptanceFact, "deliverable">;

export function commercialAcceptance(fact: CommercialAcceptanceFact): CommercialAcceptance {
  return fact as CommercialAcceptance;
}

export function editorialApproval(fact: EditorialApprovalFact): EditorialApproval {
  return fact as EditorialApproval;
}

export function deliverableAcceptance(fact: DeliverableAcceptanceFact): DeliverableAcceptance {
  return fact as DeliverableAcceptance;
}

/**
 * Una orden de trabajo solo se ejecuta bajo un acuerdo activo de la misma
 * organización cliente y con mandato de gasto suficiente.
 */
export function assertWorkOrderExecutable(
  workOrder: WorkOrder,
  agreement: ServiceAgreement,
  requestedSpendCents: number,
): void {
  if (agreement.agreementId !== workOrder.agreementId) {
    throw new DomainError("WORK_ORDER_OUT_OF_SCOPE", "la orden no pertenece al acuerdo");
  }
  if (agreement.customerWorkspaceId !== workOrder.tenantId) {
    throw new DomainError("WORK_ORDER_OUT_OF_SCOPE", "workspace distinto del acuerdo");
  }
  if (workOrder.status !== "accepted" && workOrder.status !== "in_progress") {
    throw new DomainError("WORK_ORDER_OUT_OF_SCOPE", `orden ${workOrder.status}`);
  }
  if (requestedSpendCents > workOrder.budgetMandateCents) {
    throw new DomainError("BUDGET_MANDATE_EXCEEDED", "gasto por encima del mandato");
  }
  if (requestedSpendCents > agreement.spendCeilingCents) {
    throw new DomainError("BUDGET_MANDATE_EXCEEDED", "gasto por encima del techo del acuerdo");
  }
}
