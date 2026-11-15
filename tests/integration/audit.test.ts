import { describe, expect, it } from "vitest";
import { AuditLog, GENESIS_HASH, type AuditEvent } from "../../src/storage/audit.js";

const payloadHash = "c".repeat(64);
const occurredAt = new Date("2026-11-15T10:00:00Z");

function appendAll(log: AuditLog) {
  return [
    log.append({
      tenantId: "tenant-a",
      actorId: "actor-1",
      actorKind: "human",
      action: "social.publication.execute",
      resourceRef: "intent-1",
      outcome: "allowed",
      payloadHash,
      occurredAt,
    }),
    log.append({
      tenantId: "tenant-a",
      actorId: "actor-1",
      actorKind: "human",
      action: "social.publication.confirmed",
      resourceRef: "intent-1",
      outcome: "allowed",
      payloadHash,
      occurredAt: new Date(occurredAt.getTime() + 1_000),
    }),
  ];
}

describe("auditoría", () => {
  it("encadena eventos y verifica la cadena", () => {
    const log = new AuditLog();
    const [first, second] = appendAll(log);

    expect(first?.prevHash).toBe(GENESIS_HASH);
    expect(second?.prevHash).toBe(first?.eventHash);
    expect(log.verifyChain("tenant-a")).toEqual({ valid: true, brokenAt: null });
  });

  it("detecta manipulación de un evento importado", () => {
    const log = new AuditLog();
    const [first, second] = appendAll(log);
    if (first === undefined || second === undefined) throw new Error("fixture incompleta");

    const tampered: AuditEvent = { ...second, payloadHash: "d".repeat(64) };
    const restored = new AuditLog([first, tampered]);

    expect(restored.verifyChain("tenant-a")).toEqual({ valid: false, brokenAt: second.eventId });
  });

  it("aísla la auditoría por tenant", () => {
    const log = new AuditLog();
    appendAll(log);
    expect(log.list("tenant-b")).toHaveLength(0);
    expect(log.verifyChain("tenant-b")).toEqual({ valid: true, brokenAt: null });
  });
});
