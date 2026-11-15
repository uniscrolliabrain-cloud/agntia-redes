import { describe, expect, it } from "vitest";
import {
  ApprovalBindingSchema,
  canonicalPayloadHash,
  stableStringify,
  verifyApproval,
  type ApprovalBinding,
  type ApprovalContext,
} from "../../src/approvals/index.js";
import { invalidatesApproval } from "../../src/runtime/fsm.js";

const now = new Date("2026-11-15T10:00:00Z");
const payload = { text: "Lanzamiento", cta: "https://example.test/x", assets: ["asset-1"] };
const payloadHash = canonicalPayloadHash(payload);
const rightsHash = canonicalPayloadHash({ license: "L-1" });
const policyHash = canonicalPayloadHash({ brand: "B-1" });
const slotHash = canonicalPayloadHash({ at: "2026-11-16T09:00:00+01:00" });

function binding(overrides: Partial<ApprovalBinding> = {}): ApprovalBinding {
  return ApprovalBindingSchema.parse({
    approvalId: "approval-1",
    tenantId: "tenant-a",
    accountBindingId: "acct-1",
    payloadHash,
    rightsHash,
    policyHash,
    slotHash,
    costCeilingCents: 500,
    expectedRevision: 3,
    signerRefs: [{ actorId: "human-1", kind: "human", signedAt: "2026-11-15T09:59:00Z" }],
    issuedAt: "2026-11-15T09:59:00Z",
    expiresAt: "2026-11-15T11:00:00Z",
    revocationVersion: 7,
    ...overrides,
  });
}

function context(overrides: Partial<ApprovalContext> = {}): ApprovalContext {
  return {
    tenantId: "tenant-a",
    accountBindingId: "acct-1",
    payloadHash,
    rightsHash,
    policyHash,
    slotHash,
    costCents: 200,
    expectedRevision: 3,
    now,
    revocationVersion: 7,
    proposerActorId: "agent-1",
    ...overrides,
  };
}

describe("aprobación vinculada", () => {
  it("hashes canónicos no dependen del orden de claves", () => {
    const a = canonicalPayloadHash({ b: 1, a: [1, 2] });
    const b = canonicalPayloadHash({ a: [1, 2], b: 1 });
    expect(a).toBe(b);
    expect(stableStringify({ b: 1, a: 2 })).toBe('{"a":2,"b":1}');
    expect(canonicalPayloadHash({ a: 1 })).not.toBe(canonicalPayloadHash({ a: 2 }));
  });

  it("acepta una aprobación válida", () => {
    expect(verifyApproval(binding(), context())).toEqual({ ok: true });
  });

  it("rechaza payload cambiado tras aprobar", () => {
    const changed = canonicalPayloadHash({ ...payload, cta: "https://example.test/otro" });
    expect(verifyApproval(binding(), context({ payloadHash: changed }))).toEqual({
      ok: false,
      code: "PAYLOAD_HASH_MISMATCH",
    });
  });

  it("rechaza aprobación caducada o revocada", () => {
    expect(verifyApproval(binding({ expiresAt: "2026-11-15T09:59:59Z" }), context())).toEqual({
      ok: false,
      code: "EXPIRED",
    });
    expect(verifyApproval(binding(), context({ revocationVersion: 8 }))).toEqual({
      ok: false,
      code: "REVOKED",
    });
  });

  it("exige firma humana real", () => {
    expect(
      verifyApproval(
        binding({ signerRefs: [{ actorId: "agent-9", kind: "agent", signedAt: "2026-11-15T09:59:00Z" }] }),
        context(),
      ),
    ).toEqual({ ok: false, code: "MISSING_HUMAN_SIGNER" });
  });

  it("impide que el proponente firme su propio efecto", () => {
    expect(verifyApproval(binding(), context({ proposerActorId: "human-1" }))).toEqual({
      ok: false,
      code: "SELF_APPROVAL",
    });
  });

  it("rechaza coste por encima del techo aprobado", () => {
    expect(verifyApproval(binding(), context({ costCents: 501 }))).toEqual({
      ok: false,
      code: "COST_EXCEEDED",
    });
  });

  it("cualquier cambio material invalida la aprobación", () => {
    expect(invalidatesApproval("asset")).toBe(true);
    expect(invalidatesApproval("schedule")).toBe(true);
    expect(invalidatesApproval("whitespace")).toBe(false);
  });
});
