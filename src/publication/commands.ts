import { randomUUID } from "node:crypto";
import { verifyApproval, type ApprovalBinding, type ApprovalContext } from "../approvals/index.js";
import type { BudgetLedger } from "../budget/index.js";
import type { AccountRegistry } from "../connections/registry.js";
import type { PublicationPayload, SocialPublisherPort } from "../providers/port.js";
import { assertTransition, type PublicationState } from "../runtime/fsm.js";

/**
 * Ejecución de un intent aprobado (RDS-C23).
 * Un intento por operation_key: si el resultado es incierto no se reintenta;
 * se reconcilia. Nunca se envía sin aprobación vinculada y capability fresca.
 */

export interface KillSwitch {
  engaged: boolean;
}

export interface PublicationAttempt {
  attemptId: string;
  operationKey: string;
  requestFingerprint: string;
  status: "accepted" | "rejected" | "unknown";
  startedAt: string;
  providerPostId: string | null;
  receiptId: string | null;
  errorCode: string | null;
}

export interface PublicationIntentRecord {
  tenantId: string;
  intentId: string;
  accountBindingId: string;
  operationKey: string;
  payloadHash: string;
  state: PublicationState;
  revision: number;
  approvalId: string | null;
  budgetReservationId: string | null;
  providerPostId: string | null;
  attempt: PublicationAttempt | null;
}

export class IntentStore {
  private readonly intents = new Map<string, PublicationIntentRecord>();

  put(intent: PublicationIntentRecord): void {
    this.intents.set(`${intent.tenantId}/${intent.intentId}`, intent);
  }

  get(tenantId: string, intentId: string): PublicationIntentRecord | undefined {
    return this.intents.get(`${tenantId}/${intentId}`);
  }
}

export interface PublicationDependencies {
  readonly provider: SocialPublisherPort;
  readonly registry: AccountRegistry;
  readonly budget: BudgetLedger;
  readonly intents: IntentStore;
  readonly killSwitch: KillSwitch;
  readonly clock?: () => Date;
}

export interface ExecuteIntentInput {
  readonly tenantId: string;
  readonly intentId: string;
  readonly operationKey: string;
  readonly requestFingerprint: string;
  readonly payload: PublicationPayload;
  readonly payloadHash: string;
  readonly costCents: number;
  readonly approval: ApprovalBinding | null;
  readonly approvalContext: Omit<
    ApprovalContext,
    "now" | "payloadHash" | "tenantId" | "accountBindingId" | "costCents"
  >;
  readonly capabilityEnabled: boolean;
  readonly signal?: AbortSignal;
}

export type BlockedReason =
  | "INTENT_NOT_FOUND"
  | "OPERATION_KEY_MISMATCH"
  | "PAYLOAD_DRIFT"
  | "KILL_SWITCH"
  | "CAPABILITY_DISABLED"
  | "APPROVAL_MISSING"
  | "APPROVAL_INVALID"
  | "ACCOUNT_UNAVAILABLE"
  | "BUDGET_INSUFFICIENT";

export type ExecuteOutcome =
  | { readonly status: "ACCEPTED"; readonly receiptId: string; readonly providerPostId: string | null }
  | { readonly status: "PROVIDER_REJECTED"; readonly errorCode: string }
  | { readonly status: "OUTCOME_UNKNOWN"; readonly attemptId: string }
  | {
      readonly status: "DUPLICATE";
      readonly receiptId: string;
      readonly providerPostId: string | null;
    }
  | { readonly status: "BLOCKED"; readonly reason: BlockedReason };

export async function executeIntent(
  deps: PublicationDependencies,
  input: ExecuteIntentInput,
): Promise<ExecuteOutcome> {
  const now = deps.clock?.() ?? new Date();
  const intent = deps.intents.get(input.tenantId, input.intentId);
  if (intent === undefined) {
    return { status: "BLOCKED", reason: "INTENT_NOT_FOUND" };
  }
  if (intent.operationKey !== input.operationKey) {
    return { status: "BLOCKED", reason: "OPERATION_KEY_MISMATCH" };
  }

  // Replay del mismo efecto: se devuelve el resultado durable, sin nuevo IO.
  if (intent.attempt !== null) {
    if (intent.attempt.status === "accepted") {
      return {
        status: "DUPLICATE",
        receiptId: intent.attempt.receiptId ?? "",
        providerPostId: intent.providerPostId,
      };
    }
    if (intent.attempt.status === "unknown") {
      return { status: "OUTCOME_UNKNOWN", attemptId: intent.attempt.attemptId };
    }
    return { status: "PROVIDER_REJECTED", errorCode: intent.attempt.errorCode ?? "unknown" };
  }

  if (intent.payloadHash !== input.payloadHash) {
    return { status: "BLOCKED", reason: "PAYLOAD_DRIFT" };
  }
  if (deps.killSwitch.engaged) {
    return { status: "BLOCKED", reason: "KILL_SWITCH" };
  }
  if (!input.capabilityEnabled) {
    return { status: "BLOCKED", reason: "CAPABILITY_DISABLED" };
  }
  if (input.approval === null) {
    return { status: "BLOCKED", reason: "APPROVAL_MISSING" };
  }

  const verification = verifyApproval(input.approval, {
    ...input.approvalContext,
    tenantId: input.tenantId,
    accountBindingId: intent.accountBindingId,
    payloadHash: input.payloadHash,
    costCents: input.costCents,
    now,
  });
  if (!verification.ok) {
    return { status: "BLOCKED", reason: "APPROVAL_INVALID" };
  }

  try {
    deps.registry.assertActive(input.tenantId, intent.accountBindingId);
  } catch {
    return { status: "BLOCKED", reason: "ACCOUNT_UNAVAILABLE" };
  }

  assertTransition(intent.state, "RESERVED");

  let reservationId: string;
  try {
    const reservation = deps.budget.reserve({
      tenantId: input.tenantId,
      idempotencyKey: intent.operationKey,
      amountCents: input.costCents,
    });
    reservationId = reservation.reservation.reservationId;
  } catch {
    return { status: "BLOCKED", reason: "BUDGET_INSUFFICIENT" };
  }
  intent.budgetReservationId = reservationId;
  intent.state = "RESERVED";

  assertTransition(intent.state, "QUEUED");
  intent.state = "QUEUED";
  assertTransition(intent.state, "EXECUTING");
  intent.state = "EXECUTING";

  const attempt: PublicationAttempt = {
    attemptId: `att_${randomUUID()}`,
    operationKey: intent.operationKey,
    requestFingerprint: input.requestFingerprint,
    status: "unknown",
    startedAt: now.toISOString(),
    providerPostId: null,
    receiptId: null,
    errorCode: null,
  };
  intent.attempt = attempt;

  try {
    const result = await deps.provider.createDelivery({
      tenantId: input.tenantId,
      accountBindingId: intent.accountBindingId,
      payload: input.payload,
      operationKey: intent.operationKey,
      requestFingerprint: input.requestFingerprint,
      ...(input.signal === undefined ? {} : { signal: input.signal }),
    });

    if (result.kind === "accepted") {
      intent.state = "PROVIDER_ACCEPTED";
      attempt.status = "accepted";
      attempt.receiptId = result.receiptId;
      attempt.providerPostId = result.providerPostId;
      intent.providerPostId = result.providerPostId;
      deps.budget.settle(input.tenantId, intent.operationKey, input.costCents);
      return {
        status: "ACCEPTED",
        receiptId: result.receiptId,
        providerPostId: result.providerPostId,
      };
    }

    intent.state = "PROVIDER_REJECTED";
    attempt.status = "rejected";
    attempt.errorCode = result.errorCode;
    deps.budget.settle(input.tenantId, intent.operationKey, 0);
    return { status: "PROVIDER_REJECTED", errorCode: result.errorCode };
  } catch {
    // Timeout o fallo tras enviar: el proveedor pudo aceptarlo. No hay retry ciego.
    intent.state = "OUTCOME_UNKNOWN";
    attempt.status = "unknown";
    deps.budget.markUncertain(input.tenantId, intent.operationKey);
    return { status: "OUTCOME_UNKNOWN", attemptId: attempt.attemptId };
  }
}
