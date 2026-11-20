import { readFile } from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { ackEvent, claimBatch, enqueueEvent } from "../../src/events/outbox.js";
import { withTenantScope, type SqlClient } from "../../src/storage/db.js";
import { PgliteSqlClient } from "../../src/storage/pglite.js";

const migrationSql = await readFile(
  new URL("../../src/storage/migrations/0001_init.sql", import.meta.url),
  "utf8",
);

let client: PgliteSqlClient;
let db: PGlite;
const tenantId = "tenant-a";
const occurredAt = new Date("2026-11-15T10:00:00Z");

beforeAll(async () => {
  db = new PGlite();
  await db.exec(migrationSql);
  await db.exec("SET ROLE app_runtime");
  client = new PgliteSqlClient(db);
});

afterAll(async () => {
  await db.close();
});

async function inTenant<T>(fn: (tx: SqlClient) => Promise<T>, tenant: string = tenantId): Promise<T> {
  return withTenantScope(client, tenant, fn);
}

describe("outbox durable", () => {
  it("deduplica por idempotency key dentro del mismo tenant", async () => {
    const first = await inTenant((tx) =>
      enqueueEvent(tx, {
        tenantId,
        eventType: "publication.scheduled",
        payload: { intentId: "intent-1" },
        idempotencyKey: "op-1",
        occurredAt,
      }),
    );
    const replay = await inTenant((tx) =>
      enqueueEvent(tx, {
        tenantId,
        eventType: "publication.scheduled",
        payload: { intentId: "intent-1" },
        idempotencyKey: "op-1",
        occurredAt,
      }),
    );

    expect(first.duplicate).toBe(false);
    expect(replay.duplicate).toBe(true);
    expect(replay.eventId).toBe(first.eventId);

    const count = await inTenant((tx) =>
      tx.query<{ count: string }>("SELECT count(*)::text AS count FROM outbox_events"),
    );
    expect(count.rows[0]?.count).toBe("1");
  });

  it("un lease vigente impide que otro worker reclame el evento", async () => {
    const firstClaim = await inTenant((tx) =>
      claimBatch(tx, {
        tenantId,
        workerId: "worker-1",
        limit: 10,
        leaseMs: 30_000,
        now: occurredAt,
      }),
    );
    expect(firstClaim).toHaveLength(1);
    expect(firstClaim[0]?.lease_fence).toBe(1);

    const secondClaim = await inTenant((tx) =>
      claimBatch(tx, {
        tenantId,
        workerId: "worker-2",
        limit: 10,
        leaseMs: 30_000,
        now: new Date(occurredAt.getTime() + 1_000),
      }),
    );
    expect(secondClaim).toHaveLength(0);
  });

  // Caso nombrado del gate RDS-C21-G02: el ACK con fence antiguo no confirma un intent reclamado por otro.
  // Es autocontenido y usa un tenant propio para poder seleccionarse aislado con
  // `npx vitest run tests/integration/replay.test.ts -t "RDS-C21-G02"`.
  it("RDS-C21-G02 · solo el fence vigente puede confirmar; el ACK viejo no cierra el trabajo", async () => {
    const gateTenant = "tenant-c21";
    await inTenant(
      (tx) =>
        enqueueEvent(tx, {
          tenantId: gateTenant,
          eventType: "publication.scheduled",
          payload: { intentId: "intent-c21" },
          idempotencyKey: "op-c21",
          occurredAt,
        }),
      gateTenant,
    );

    const firstLease = await inTenant(
      (tx) =>
        claimBatch(tx, {
          tenantId: gateTenant,
          workerId: "worker-1",
          limit: 10,
          leaseMs: 30_000,
          now: occurredAt,
        }),
      gateTenant,
    );
    expect(firstLease[0]?.lease_fence).toBe(1);

    const expired = new Date(occurredAt.getTime() + 60_000);
    const reclaim = await inTenant(
      (tx) =>
        claimBatch(tx, {
          tenantId: gateTenant,
          workerId: "worker-2",
          limit: 10,
          leaseMs: 30_000,
          now: expired,
        }),
      gateTenant,
    );
    const event = reclaim[0];
    expect(event?.lease_fence).toBe(2);

    const staleAck = await inTenant(
      (tx) =>
        ackEvent(tx, {
          tenantId: gateTenant,
          eventId: event?.event_id ?? "",
          workerId: "worker-2",
          fence: 1,
          now: expired,
        }),
      gateTenant,
    );
    expect(staleAck).toEqual({ acked: false, reason: "stale_fence" });

    const validAck = await inTenant(
      (tx) =>
        ackEvent(tx, {
          tenantId: gateTenant,
          eventId: event?.event_id ?? "",
          workerId: "worker-2",
          fence: 2,
          now: expired,
        }),
      gateTenant,
    );
    expect(validAck).toEqual({ acked: true });

    const afterAck = await inTenant(
      (tx) =>
        claimBatch(tx, {
          tenantId: gateTenant,
          workerId: "worker-3",
          limit: 10,
          leaseMs: 30_000,
          now: new Date(expired.getTime() + 120_000),
        }),
      gateTenant,
    );
    expect(afterAck).toHaveLength(0);
  });
});
