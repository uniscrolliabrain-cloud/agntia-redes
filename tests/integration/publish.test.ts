import { describe, expect, it } from "vitest";
import {
  ApprovalBindingSchema,
  canonicalPayloadHash,
  type ApprovalBinding,
} from "../../src/approvals/index.js";
import { BudgetLedger } from "../../src/budget/index.js";
import { AccountRegistry } from "../../src/connections/registry.js";
import { FakeProvider, type FakeScript } from "../../src/adapters/fake/provider.js";
import {
  IntentStore,
  executeIntent,
  type  PublicationDependencies,
} from "../../src/publication/commands.js";
import type { PublicationPayload } from "../../src/providers/port.js";
import type { PublicationState } from "../../src/runtime/fsm.js";

const now = new Date("2026-11-15T10:00:00Z");
const payload: PublicationPayload = {
  text: "Lanzamiento",
  locale: "es",
  channel: "mastodon",
  visibility: "public",
  assetRefs: ["asset-1"],
  altText: "Producto sobre mesa",
  disclosures: [],
};
const payloadHash = canonicalPayloadHash(payload);
const rightsHash = canonicalPayloadHash({ license: "L-1" });
const policyHash = canonicalPayloadHash({ brand: "B-1" });
const slotHash = canonicalPayloadHash({ at: "2026-11-16T09:00:00+01:00" });

const binding: ApprovalBinding = ApprovalBindingSchema.parse({
  approvalId: "approval-1",
  tenantId: "tenant-a",
  accountBindingId: "acct-1",
  payloadHash,
  rightsHash,
  policyHash,
  slotHash,
  costCeilingCents: 500,
  expectedRevision: 1,
  signerRefs: [{ actorId: "human-1", kind: "human", signedAt: "2026-11-15T09:59:00Z" }],
  issuedAt: "2026-11-15T09:59:00Z",
  expiresAt: "2026-11-15T11:00:00Z",
  revocationVersion: 7,
});

function setup(options: { script?: FakeScript; capCents?: number; kill?: boolean; state?: PublicationState } = {}) {
  const registry = new AccountRegistry();
  registry.register({
    accountBindingId: "acct-1",
    tenantId: "tenant-a",
    brandRef: "brand-1",
    provider: "fake",
    remoteAccountId: "remote-1",
    remoteWorkspaceId: null,
    credentialRef: "cred_opaque",
    revision: 1,
    state: "connected",
    lastVerifiedAt: "2026-11-15T09:00:00Z",
  });
  const budget = new BudgetLedger(options.capCents ?? 1_000);
  const intents = new IntentStore();
  intents.put({
    tenantId: "tenant-a",
    intentId: "intent-1",
    accountBindingId: "acct-1",
    operationKey: "op-1",
    payloadHash,
    state: options.state ?? "APPROVED",
    revision: 1,
    approvalId: "approval-1",
    budgetReservationId: null,
    providerPostId: null,
    attempt: null,
  });
  const provider = new FakeProvider({ script: options.script ?? "accept", now: () => now });
  const deps: PublicationDependencies = {
    provider,
    registry,
    budget,
    intents,
    killSwitch: { engaged: options.kill ?? false },
    clock: () => now,
  };
  return { deps, budget, intents, provider };
}

function input(overrides: Record<string, unknown> = {}) {
  return {
    tenantId: "tenant-a",
    intentId: "intent-1",
    operationKey: "op-1",
    requestFingerprint: "fp-1",
    payload,
    payloadHash,
    costCents: 100,
    approval: binding as ApprovalBinding | null,
    approvalContext: {
      rightsHash,
      policyHash,
      slotHash,
      expectedRevision: 1,
      revocationVersion: 7,
      proposerActorId: "agent-1",
    },
    capabilityEnabled: true,
    ...overrides,
  };
}

describe("ejecución de publicación", () => {
  it("ejecuta una vez con aprobación válida y liquida el presupuesto", async () => {
    const { deps, budget, intents, provider } = setup();
    const outcome = await executeIntent(deps, input());

    expect(outcome.status).toBe("ACCEPTED");
    expect(provider.calls).toHaveLength(1);
    expect(intents.get("tenant-a", "intent-1")?.state).toBe("PROVIDER_ACCEPTED");
    expect(budget.get("tenant-a", "op-1")?.state).toBe("settled");
    expect(budget.committedCents("tenant-a")).toBe(100);
  });

  it("replay del mismo operation key devuelve el recibo sin nuevo IO", async () => {
    const { deps, provider } = setup();
    await executeIntent(deps, input());
    const replay = await executeIntent(deps, input());

    expect(replay.status).toBe("DUPLICATE");
    expect(provider.calls).toHaveLength(1);
  });

  it("timeout tras aceptación queda incierto y no se reintenta", async () => {
    const { deps, budget, provider } = setup({ script: "timeout_after_accept" });
    const first = await executeIntent(deps, input());
    expect(first.status).toBe("OUTCOME_UNKNOWN");
    expect(provider.calls).toHaveLength(1);
    expect(budget.get("tenant-a", "op-1")?.state).toBe("uncertain");
    // El pasivo sigue comprometido: no se libera por "haber muerto el worker".
    expect(budget.committedCents("tenant-a")).toBe(100);

    const retry = await executeIntent(deps, input());
    expect(retry.status).toBe("OUTCOME_UNKNOWN");
    expect(provider.calls).toHaveLength(1);
  });

  it("bloquea sin aprobación, con aprobación caducada o con payload cambiado", async () => {
    const missing = setup();
    expect((await executeIntent(missing.deps, input({ approval: null }))).status).toBe("BLOCKED");
    expect(missing.provider.calls).toHaveLength(0);

    const expired = setup();
    const expiredBinding = ApprovalBindingSchema.parse({
      ...binding,
      expiresAt: "2026-11-15T09:00:00Z",
    });
    const blocked = await executeIntent(expired.deps, input({ approval: expiredBinding }));
    expect(blocked).toEqual({ status: "BLOCKED", reason: "APPROVAL_INVALID" });
    expect(expired.provider.calls).toHaveLength(0);

    const drift = setup();
    const drifted = await executeIntent(
      drift.deps,
      input({ payloadHash: canonicalPayloadHash({ ...payload, text: "otro" }) }),
    );
    expect(drifted).toEqual({ status: "BLOCKED", reason: "PAYLOAD_DRIFT" });
  });

  it("kill switch, capability deshabilitada y presupuesto insuficiente detienen el envío", async () => {
    const killed = setup({ kill: true });
    expect(await executeIntent(killed.deps, input())).toEqual({
      status: "BLOCKED",
      reason: "KILL_SWITCH",
    });

    const disabled = setup();
    expect(await executeIntent(disabled.deps, input({ capabilityEnabled: false }))).toEqual({
      status: "BLOCKED",
      reason: "CAPABILITY_DISABLED",
    });

    const poor = setup({ capCents: 50 });
    expect(await executeIntent(poor.deps, input({ costCents: 100 }))).toEqual({
      status: "BLOCKED",
      reason: "BUDGET_INSUFFICIENT",
    });
    expect(poor.provider.calls).toHaveLength(0);
  });

  it("un rechazo del proveedor no se disfraza de éxito ni consume presupuesto", async () => {
    const { deps, budget } = setup({ script: "reject" });
    const outcome = await executeIntent(deps, input());
    expect(outcome).toEqual({ status: "PROVIDER_REJECTED", errorCode: "content_policy" });
    expect(budget.get("tenant-a", "op-1")?.state).toBe("settled");
    expect(budget.committedCents("tenant-a")).toBe(0);
  });
});
