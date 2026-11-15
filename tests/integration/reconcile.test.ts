import { describe, expect, it } from "vitest";
import { FakeProvider } from "../../src/adapters/fake/provider.js";
import type { PublicationIntentRecord } from "../../src/publication/commands.js";
import { reconcileIntent } from "../../src/publication/reconcile.js";

const now = new Date("2026-11-15T10:00:00Z");

function unknownIntent(overrides: Partial<PublicationIntentRecord> = {}): PublicationIntentRecord {
  return {
    tenantId: "tenant-a",
    intentId: "intent-1",
    accountBindingId: "acct-1",
    operationKey: "op-1",
    payloadHash: "a".repeat(64),
    state: "OUTCOME_UNKNOWN",
    revision: 1,
    approvalId: "approval-1",
    budgetReservationId: "rsv-1",
    providerPostId: null,
    attempt: {
      attemptId: "att-1",
      operationKey: "op-1",
      requestFingerprint: "fp-1",
      status: "unknown",
      startedAt: now.toISOString(),
      providerPostId: null,
      receiptId: null,
      errorCode: null,
    },
    ...overrides,
  };
}

describe("reconciliación", () => {
  it("confirma cuando el proveedor encuentra el efecto", async () => {
    const provider = new FakeProvider({ script: "timeout_after_accept", now: () => now });
    await provider.createDelivery({
      tenantId: "tenant-a",
      accountBindingId: "acct-1",
      payload: {
        text: "x",
        locale: "es",
        channel: "fake",
        visibility: "public",
        assetRefs: [],
        altText: null,
        disclosures: [],
      },
      operationKey: "op-1",
      requestFingerprint: "fp-1",
    }).catch(() => undefined);

    const intent = unknownIntent();
    const outcome = await reconcileIntent(intent, { provider });

    expect(outcome.status).toBe("CONFIRMED");
    expect(intent.state).toBe("PUBLISHED_CONFIRMED");
    expect(intent.providerPostId).toBe("fake_post_1");
  });

  it("no declara 'no enviado' si la búsqueda no es autoritativa", async () => {
    const provider = new FakeProvider({ lookupMode: "eventual" });
    const intent = unknownIntent();
    const outcome = await reconcileIntent(intent, { provider });

    expect(outcome).toEqual({ status: "UNKNOWN", code: "LOOKUP_NOT_AUTHORITATIVE" });
    expect(intent.state).toBe("RECONCILIATION_REQUIRED");
  });

  it("solo un proveedor con búsqueda autoritativa puede cerrar como no enviado", async () => {
    const provider = new FakeProvider({ lookupMode: "authoritative" });
    const intent = unknownIntent();
    const outcome = await reconcileIntent(intent, { provider });

    expect(outcome).toEqual({ status: "NOT_SENT" });
    expect(intent.state).toBe("FAILED_BEFORE_SEND");
  });

  it("no reconcilia dos veces el mismo intento", async () => {
    const provider = new FakeProvider({ lookupMode: "authoritative" });
    const intent = unknownIntent();
    await reconcileIntent(intent, { provider });
    const second = await reconcileIntent(intent, { provider });
    expect(second).toEqual({ status: "UNKNOWN", code: "STATE_NOT_RECONCILABLE" });
  });
});
