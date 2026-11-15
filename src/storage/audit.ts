import { createHash, randomUUID } from "node:crypto";
import { z } from "zod";
import { ActorKindSchema, OpaqueIdSchema, TimestampSchema } from "../contracts/index.js";

/**
 * Auditoría con cadena de hashes (RDS-C05).
 * Cada evento incluye el hash del anterior: borrar o reordenar se detecta.
 * Nunca se guarda el payload, solo su hash y referencias.
 */

export const AuditEventSchema = z
  .object({
    eventId: z.string().uuid(),
    tenantId: OpaqueIdSchema,
    actorId: OpaqueIdSchema,
    actorKind: ActorKindSchema,
    action: z.string().min(1).max(120),
    resourceRef: OpaqueIdSchema,
    outcome: z.enum(["allowed", "denied", "unknown", "failed"]),
    occurredAt: TimestampSchema,
    payloadHash: z.string().regex(/^[0-9a-f]{64}$/),
    prevHash: z.string().regex(/^[0-9a-f]{64}$/),
    eventHash: z.string().regex(/^[0-9a-f]{64}$/),
  })
  .strict();

export type AuditEvent = z.infer<typeof AuditEventSchema>;

export const GENESIS_HASH = "0".repeat(64);

export function hashAuditEvent(
  event: Omit<AuditEvent, "eventHash">,
): string {
  const canonical = [
    event.eventId,
    event.tenantId,
    event.actorId,
    event.actorKind,
    event.action,
    event.resourceRef,
    event.outcome,
    event.occurredAt,
    event.payloadHash,
    event.prevHash,
  ].join("|");
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}

export interface AppendAuditInput {
  readonly tenantId: string;
  readonly actorId: string;
  readonly actorKind: "human" | "agent" | "service";
  readonly action: string;
  readonly resourceRef: string;
  readonly outcome: "allowed" | "denied" | "unknown" | "failed";
  readonly payloadHash: string;
  readonly occurredAt?: Date;
}

export class AuditLog {
  private readonly events: AuditEvent[];

  /** `initial` permite verificar un log importado tras un restore. */
  constructor(initial: readonly AuditEvent[] = []) {
    this.events = [...initial];
  }

  append(input: AppendAuditInput): AuditEvent {
    const previous = this.events.at(-1);
    const draft: Omit<AuditEvent, "eventHash"> = {
      eventId: randomUUID(),
      tenantId: input.tenantId,
      actorId: input.actorId,
      actorKind: input.actorKind,
      action: input.action,
      resourceRef: input.resourceRef,
      outcome: input.outcome,
      occurredAt: (input.occurredAt ?? new Date()).toISOString(),
      payloadHash: input.payloadHash,
      prevHash: previous?.eventHash ?? GENESIS_HASH,
    };
    const event: AuditEvent = { ...draft, eventHash: hashAuditEvent(draft) };
    this.events.push(event);
    return event;
  }

  list(tenantId: string): AuditEvent[] {
    return this.events.filter((event) => event.tenantId === tenantId);
  }

  /** Verifica la cadena completa; cualquier hueco o alteración invalida todo. */
  verifyChain(tenantId: string): { valid: boolean; brokenAt: string | null } {
    const events = this.list(tenantId);
    let expectedPrev = GENESIS_HASH;
    for (const event of events) {
      if (event.prevHash !== expectedPrev) {
        return { valid: false, brokenAt: event.eventId };
      }
      const { eventHash, ...rest } = event;
      if (hashAuditEvent(rest) !== eventHash) {
        return { valid: false, brokenAt: event.eventId };
      }
      expectedPrev = eventHash;
    }
    return { valid: true, brokenAt: null };
  }
}
