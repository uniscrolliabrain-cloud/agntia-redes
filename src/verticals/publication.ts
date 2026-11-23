import { FakeProvider } from "../adapters/fake/provider.js";
import {
  ApprovalBindingSchema,
  canonicalPayloadHash,
  type ApprovalBinding,
} from "../approvals/index.js";
import { BudgetLedger } from "../budget/index.js";
import { AccountRegistry, type AccountBinding } from "../connections/registry.js";
import { AssetRightsSchema, evaluateRights } from "../domain/rights.js";
import {
  executeIntent,
  IntentStore,
  type PublicationDependencies,
} from "../publication/commands.js";
import type { MetricReading, PublicationPayload } from "../providers/port.js";
import type { PublicationState } from "../runtime/fsm.js";

/**
 * Vertical P0 reproducible (RDS-C23): cuenta → derechos → payload → aprobación
 * vinculada → ejecución en proveedor falso → receipt → métricas.
 *
 * No toca red ni proveedores reales: el adaptador es determinista y el reloj es
 * fijo. Un mock demuestra el contrato local, no permiso ni publicación real.
 */

const TENANT_A = "tenant-vertical-a";
const TENANT_B = "tenant-vertical-b";
const ACCOUNT_A = "acct-vertical-a";
const ACCOUNT_B = "acct-vertical-b";
const NOW = "2026-11-23T09:00:00Z";

export interface PublicationVerticalOptions {
  readonly now?: Date;
}

export interface PublicationVerticalReport {
  readonly vertical: "publication";
  readonly tenantId: string;
  readonly steps: readonly string[];
  readonly outcome: string;
  readonly state: PublicationState;
  readonly receiptId: string | null;
  readonly providerPostId: string | null;
  readonly metrics: readonly MetricReading[];
  readonly approvalId: string | null;
  readonly rightsReasons: readonly string[];
  readonly otherTenantAccounts: number;
  readonly crossTenantBlocked: boolean;
  readonly budgetCommittedCents: number;
}

function account(tenantId: string, accountBindingId: string): AccountBinding {
  return {
    accountBindingId,
    tenantId,
    brandRef: `brand-${tenantId}`,
    provider: "fake",
    remoteAccountId: `remote-${tenantId}`,
    remoteWorkspaceId: null,
    // Referencia opaca: el valor real vive en la custodia del host.
    credentialRef: `credref-${tenantId}`,
    revision: 1,
    state: "connected",
    lastVerifiedAt: "2026-11-23T08:00:00Z",
  };
}

export async function runPublicationVertical(
  options: PublicationVerticalOptions = {},
): Promise<PublicationVerticalReport> {
  const now = options.now ?? new Date(NOW);
  const steps: string[] = [];

  const registry = new AccountRegistry();
  registry.register(account(TENANT_A, ACCOUNT_A));
  registry.register(account(TENANT_B, ACCOUNT_B));
  const otherTenantAccounts = registry.listForTenant(TENANT_B).length;
  steps.push("accounts.registered");

  const assetRights = AssetRightsSchema.parse({
    assetRef: "asset-vertical-1",
    tenantId: TENANT_A,
    licensor: "Titular sintético",
    licenseRef: "license-vertical-1",
    territories: ["ES"],
    validFrom: "2026-11-01T00:00:00Z",
    validUntil: "2027-11-01T00:00:00Z",
    commercialUse: false,
    derivativeWorks: false,
    musicRights: null,
    modelReleaseRef: null,
    syntheticMedia: false,
    sourceRef: "source-vertical-1",
  });

  const rights = evaluateRights({
    rights: assetRights,
    now,
    territory: "ES",
    paidPromotion: false,
    hasMusic: false,
    depictsPerson: false,
    isDerivative: false,
  });
  if (!rights.allowed) {
    return {
      vertical: "publication",
      tenantId: TENANT_A,
      steps,
      outcome: "RIGHTS_DENIED",
      state: "BLOCKED",
      receiptId: null,
      providerPostId: null,
      metrics: [],
      approvalId: null,
      rightsReasons: rights.reasons,
      otherTenantAccounts,
      crossTenantBlocked: false,
      budgetCommittedCents: 0,
    };
  }
  steps.push("rights.allowed");

  const payload: PublicationPayload = {
    text: "Vertical de publicación aprobada",
    locale: "es",
    channel: "mastodon",
    visibility: "public",
    assetRefs: [assetRights.assetRef],
    altText: "Producto sobre una mesa",
    disclosures: [],
  };
  const payloadHash = canonicalPayloadHash(payload);
  const rightsHash = canonicalPayloadHash(assetRights);
  const policyHash = canonicalPayloadHash({ brand: "brand-tenant-vertical-a" });
  const slotHash = canonicalPayloadHash({ at: "2026-11-24T09:00:00+01:00" });

  const approval: ApprovalBinding = ApprovalBindingSchema.parse({
    approvalId: "approval-vertical-1",
    tenantId: TENANT_A,
    accountBindingId: ACCOUNT_A,
    payloadHash,
    rightsHash,
    policyHash,
    slotHash,
    costCeilingCents: 500,
    expectedRevision: 1,
    signerRefs: [
      { actorId: "human-vertical", kind: "human", signedAt: "2026-11-23T08:59:00Z" },
    ],
    issuedAt: "2026-11-23T08:59:00Z",
    expiresAt: "2026-11-23T10:00:00Z",
    revocationVersion: 1,
  });

  const metrics: readonly MetricReading[] = [
    {
      metric: "impressions",
      definitionVersion: "fake-v1",
      windowStart: "2026-11-23T09:00:00Z",
      windowEnd: "2026-11-23T10:00:00Z",
      observedAt: "2026-11-23T10:00:00Z",
      value: 120,
      unit: "count",
      coverage: "partial",
    },
  ];

  const provider = new FakeProvider({ now: () => now, metrics });
  const budget = new BudgetLedger(1_000);
  const intents = new IntentStore();

  intents.put({
    tenantId: TENANT_A,
    intentId: "intent-vertical-a",
    accountBindingId: ACCOUNT_A,
    operationKey: "op-vertical-a",
    payloadHash,
    state: "APPROVED",
    revision: 1,
    approvalId: approval.approvalId,
    budgetReservationId: null,
    providerPostId: null,
    attempt: null,
  });
  intents.put({
    tenantId: TENANT_A,
    intentId: "intent-vertical-isolation",
    accountBindingId: ACCOUNT_A,
    operationKey: "op-vertical-isolation",
    payloadHash,
    state: "APPROVED",
    revision: 1,
    approvalId: null,
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

  const approvalContext = {
    rightsHash,
    policyHash,
    slotHash,
    expectedRevision: 1,
    revocationVersion: 1,
    proposerActorId: "agent-vertical",
  };

  // Una aprobación de otro tenant no puede ejecutar el intent de este tenant.
  const foreignApproval = ApprovalBindingSchema.parse({
    ...approval,
    tenantId: TENANT_B,
    accountBindingId: ACCOUNT_B,
  });
  const crossTenant = await executeIntent(deps, {
    tenantId: TENANT_A,
    intentId: "intent-vertical-isolation",
    operationKey: "op-vertical-isolation",
    requestFingerprint: "fp-vertical-isolation",
    payload,
    payloadHash,
    costCents: 100,
    approval: foreignApproval,
    approvalContext,
    capabilityEnabled: true,
  });
  const crossTenantBlocked = crossTenant.status === "BLOCKED";
  steps.push("tenant.isolation.checked");

  const execution = await executeIntent(deps, {
    tenantId: TENANT_A,
    intentId: "intent-vertical-a",
    operationKey: "op-vertical-a",
    requestFingerprint: "fp-vertical-a",
    payload,
    payloadHash,
    costCents: 100,
    approval,
    approvalContext,
    capabilityEnabled: true,
  });

  const intent = intents.get(TENANT_A, "intent-vertical-a");
  if (intent === undefined) {
    throw new Error("vertical de publicación sin intent durable");
  }
  steps.push("publication.executed");

  const accepted = execution.status === "ACCEPTED" || execution.status === "DUPLICATE";
  const receiptId = accepted ? execution.receiptId : null;
  const providerPostId = accepted ? execution.providerPostId : null;

  const read = await provider.readMetrics({
    accountBindingId: ACCOUNT_A,
    providerPostId: providerPostId ?? "",
  });
  steps.push("metrics.read");

  return {
    vertical: "publication",
    tenantId: TENANT_A,
    steps,
    outcome: execution.status,
    state: intent.state,
    receiptId,
    providerPostId,
    metrics: read,
    approvalId: approval.approvalId,
    rightsReasons: [],
    otherTenantAccounts,
    crossTenantBlocked,
    budgetCommittedCents: budget.committedCents(TENANT_A),
  };
}
