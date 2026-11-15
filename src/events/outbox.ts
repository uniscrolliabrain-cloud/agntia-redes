import { randomUUID } from "node:crypto";
import type { SqlClient } from "../storage/db.js";

/**
 * Outbox durable (RDS-C21).
 * El evento se persiste antes del IO y en la misma transacción que el cambio de
 * estado. Entrega at-least-once; el ACK exige el fence vigente (un worker viejo
 * no puede confirmar el trabajo de otro).
 */

export interface OutboxEventRow {
  readonly event_id: string;
  readonly event_type: string;
  readonly lease_fence: number;
  readonly payload: unknown;
}

export interface EnqueueInput {
  readonly tenantId: string;
  readonly eventType: string;
  readonly payload: Record<string, unknown>;
  readonly idempotencyKey: string;
  readonly occurredAt: Date;
  readonly correlationId?: string;
}

export async function enqueueEvent(
  db: SqlClient,
  input: EnqueueInput,
): Promise<{ eventId: string; duplicate: boolean }> {
  const eventId = `evt_${randomUUID()}`;
  const inserted = await db.query<{ event_id: string }>(
    `INSERT INTO outbox_events
       (tenant_id, event_id, event_type, payload, occurred_at, idempotency_key, correlation_id)
     VALUES ($1, $2, $3, $4::jsonb, $5, $6, $7)
     ON CONFLICT (tenant_id, idempotency_key) DO NOTHING
     RETURNING event_id`,
    [
      input.tenantId,
      eventId,
      input.eventType,
      JSON.stringify(input.payload),
      input.occurredAt.toISOString(),
      input.idempotencyKey,
      input.correlationId ?? null,
    ],
  );
  if (inserted.rows.length === 1) {
    return { eventId, duplicate: false };
  }
  const existing = await db.query<{ event_id: string }>(
    `SELECT event_id FROM outbox_events WHERE tenant_id = $1 AND idempotency_key = $2`,
    [input.tenantId, input.idempotencyKey],
  );
  const found = existing.rows[0];
  if (found === undefined) {
    throw new Error("outbox: conflicto sin fila existente");
  }
  return { eventId: found.event_id, duplicate: true };
}

export interface ClaimInput {
  readonly tenantId: string;
  readonly workerId: string;
  readonly limit: number;
  readonly leaseMs: number;
  readonly now: Date;
}

export async function claimBatch(db: SqlClient, input: ClaimInput): Promise<OutboxEventRow[]> {
  const expiresAt = new Date(input.now.getTime() + input.leaseMs).toISOString();
  const result = await db.query<OutboxEventRow>(
    `WITH candidate AS (
        SELECT event_id
          FROM outbox_events
         WHERE tenant_id = $1
           AND acked_at IS NULL
           AND (lease_expires_at IS NULL OR lease_expires_at < $4)
         ORDER BY occurred_at ASC
         LIMIT $5
         FOR UPDATE SKIP LOCKED
     )
     UPDATE outbox_events o
        SET lease_owner = $2,
            lease_fence = o.lease_fence + 1,
            lease_expires_at = $3,
            attempts = o.attempts + 1
       FROM candidate c
      WHERE o.tenant_id = $1 AND o.event_id = c.event_id
      RETURNING o.event_id, o.event_type, o.lease_fence, o.payload`,
    [input.tenantId, input.workerId, expiresAt, input.now.toISOString(), input.limit],
  );
  return result.rows;
}

export type AckResult =
  | { readonly acked: true }
  | { readonly acked: false; readonly reason: "stale_fence" | "already_acked" };

export async function ackEvent(
  db: SqlClient,
  input: {
    tenantId: string;
    eventId: string;
    workerId: string;
    fence: number;
    now: Date;
  },
): Promise<AckResult> {
  const updated = await db.query<{ event_id: string }>(
    `UPDATE outbox_events
        SET acked_at = $5, lease_owner = NULL
      WHERE tenant_id = $1
        AND event_id = $2
        AND lease_owner = $3
        AND lease_fence = $4
        AND acked_at IS NULL
      RETURNING event_id`,
    [input.tenantId, input.eventId, input.workerId, input.fence, input.now.toISOString()],
  );
  if (updated.rows.length === 1) {
    return { acked: true };
  }
  const state = await db.query<{ acked_at: string | null; lease_fence: number }>(
    `SELECT acked_at, lease_fence FROM outbox_events WHERE tenant_id = $1 AND event_id = $2`,
    [input.tenantId, input.eventId],
  );
  const row = state.rows[0];
  if (row?.acked_at != null) {
    return { acked: false, reason: "already_acked" };
  }
  return { acked: false, reason: "stale_fence" };
}
