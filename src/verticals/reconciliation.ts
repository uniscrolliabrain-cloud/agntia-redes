import { FakeProvider } from "../adapters/fake/provider.js";
import {
  ApprovalBindingSchema,
  canonicalPayloadHash,
  type ApprovalBinding,
} from "../approvals/index.js";
import { BudgetLedger, type ReservationState } from "../budget/index.js";
import { AccountRegistry } from "../connections/registry.js";
import {
  executeIntent,
  IntentStore,
  type ExecuteOutcome,
  type PublicationDependencies,
} from "../publication/commands.js";
import { reconcileIntent } from "../publication/reconcile.js";
import type { PublicationPayload } from "../providers/port.js";
import type { PublicationState } from "../runtime/fsm.js";

/**
 * Vertical de resultado incierto (RDS-C24): el proveedor acepta y la respuesta
 * se pierde. Se conserva el estado, no se reintenta a ciegas, se reconcilia con
 * búsqueda autoritativa y solo entonces se confirma el post.
 */

const TENANT = "tenant-vertical-reconcile";
const ACCOUNT = "acct-vertical-reconcile";
const NOW = "2026-11-23T11:00:00Z";

export interface ReconciliationVerticalOptions {
  readonly now?: Date;
}

export interface ReconciliationVerticalReport {
  readonly vertical: "reconciliation";
  readonly tenantId: string;
  readonly steps: readonly string[];
  readonly firstOutcome: ExecuteOutcome["status"];
  readonly retryOutcome: ExecuteOutcome["status"];
  readonly providerCalls: number;
  readonly reconcileStatus: string;
  readonly finalState: PublicationState;
  readonly providerPostId: string | null;
  readonly budgetState: ReservationState | null;
  readonly receiptConsistent: boolean;
}

export async function runReconciliationVertical(
  options: ReconciliationVerticalOptions = {},
): Promise<ReconciliationVerticalReport> {
  const now = options.now ?? new Date(NOW);
  const steps: string[] = [];

  const registry = new AccountRegistry();
  registry.register({
    accountBindingId: ACCOUNT,
    tenantId: TENANT,
    brandRef: "brand-vertical-reconcile",
    provider: "fake",
    remoteAccountId: "remote-vertical-reconcile",
    remoteWorkspaceId: null,
    credentialRef: "credref-vertical-reconcile",
    revision: 1,
    state: "connected",
    lastVerifiedAt: "2026-11-23T10:00:00Z",
  });
  steps.push("accounts.registered");

  const payload: PublicationPayload = {
    text: "Publicación con respuesta perdida",
    locale: "es",
    channel: "mastodon",
    visibility: "public",
    assetRefs: [],
    altText: null,
    disclosures: [],
  };
  const payloadHash = canonicalPayloadHash(payload);
  const approval: ApprovalBinding = ApprovalBindingSchema.parse({
    approvalId: "approval-vertical-reconcile",
    tenantId: TENANT,
    accountBindingId: ACCOUNT,
    payloadHash,
    rightsHash: canonicalPayloadHash({ license: "none-needed" }),
    policyHash: canonicalPayloadHash({ brand: "brand-vertical-reconcile" }),
    slotHash: canonicalPayloadHash({ at: "2026-11-23T12:00:00+01:00" }),
    costCeilingCents: 500,
    expectedRevision: 1,
    signerRefs: [
      { actorId: "human-vertical", kind: "human", signedAt: "2026-11-23T10:59:00Z" },
    ],
    issuedAt: "2026-11-23T10:59:00Z",
    expiresAt: "2026-11-23T12:00:00Z",
    revocationVersion: 1,
  });

  const provider = new FakeProvider({ script: "timeout_after_accept", now: () => now });
  const budget = new BudgetLedger(1_000);
  const intents = new IntentStore();
  intents.put({
    tenantId: TENANT,
    intentId: "intent-vertical-reconcile",
    accountBindingId: ACCOUNT,
    operationKey: "op-vertical-reconcile",
    payloadHash,
    state: "APPROVED",
    revision: 1,
    approvalId: approval.approvalId,
    budgetReservationId: null,
    providerPostId: null,
    attempt: null,
  });
  steps.push("approval.bound");

  const deps: PublicationDependencies = {
    provider,
    registry,
    budget,
    intents,
    killSwitch: { engaged: false },
    clock: () => now,
  };

  const request = {
    tenantId: TENANT,
    intentId: "intent-vertical-reconcile",
    operationKey: "op-vertical-reconcile",
    requestFingerprint: "fp-vertical-reconcile",
    payload,
    payloadHash,
    costCents: 100,
    approval,
    approvalContext: {
      rightsHash: canonicalPayloadHash({ license: "none-needed" }),
      policyHash: canonicalPayloadHash({ brand: "brand-vertical-reconcile" }),
      slotHash: canonicalPayloadHash({ at: "2026-11-23T12:00:00+01:00" }),
      expectedRevision: 1,
      revocationVersion: 1,
      proposerActorId: "agent-vertical",
    },
    capabilityEnabled: true,
  };

  const first = await executeIntent(deps, request);
  steps.push("outcome.unknown");
  const retry = await executeIntent(deps, request);
  steps.push("retry.refused");

  const intent = intents.get(TENANT, "intent-vertical-reconcile");
  if (intent === undefined) {
    throw new Error("vertical de reconciliación sin intent durable");
  }

  const reconciled = await reconcileIntent(intent, { provider, clock: () => now });
  steps.push("reconciliation.completed");

  const budgetState = budget.get(TENANT, "op-vertical-reconcile")?.state ?? null;

  return {
    vertical: "reconciliation",
    tenantId: TENANT,
    steps,
    firstOutcome: first.status,
    retryOutcome: retry.status,
    providerCalls: provider.calls.length,
    reconcileStatus: reconciled.status,
    finalState: intent.state,
    providerPostId: intent.providerPostId,
    budgetState,
    receiptConsistent:
      reconciled.status === "CONFIRMED" && reconciled.providerPostId === intent.providerPostId,
  };
}
