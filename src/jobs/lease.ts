/**
 * Leases con fencing (RDS-C21).
 * Un lease vencido no prueba que el proveedor no recibió la llamada; solo impide
 * que un worker antiguo confirme el trabajo de otro.
 */

export interface LeaseToken {
  readonly ownerId: string;
  readonly fence: number;
  readonly expiresAt: number;
}

export class LeaseError extends Error {
  readonly code: "LEASE_EXPIRED" | "FENCE_STALE";

  constructor(code: LeaseError["code"], message: string) {
    super(message);
    this.name = "LeaseError";
    this.code = code;
  }
}

export function acquireLease(input: {
  ownerId: string;
  currentFence: number;
  now: number;
  leaseMs: number;
}): LeaseToken {
  return {
    ownerId: input.ownerId,
    fence: input.currentFence + 1,
    expiresAt: input.now + input.leaseMs,
  };
}

export function assertLeaseUsable(lease: LeaseToken, now: number): void {
  if (lease.expiresAt <= now) {
    throw new LeaseError("LEASE_EXPIRED", "lease vencido");
  }
}

/** Solo el dueño con el fence vigente puede confirmar un efecto. */
export function assertCanAck(input: {
  lease: LeaseToken;
  ackOwnerId: string;
  ackFence: number;
}): void {
  if (input.lease.ownerId !== input.ackOwnerId || input.lease.fence !== input.ackFence) {
    throw new LeaseError("FENCE_STALE", "ACK de un worker con fence antiguo");
  }
}
