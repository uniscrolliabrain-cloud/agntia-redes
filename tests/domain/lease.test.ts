import { describe, expect, it } from "vitest";
import {
  LeaseError,
  acquireLease,
  assertCanAck,
  assertLeaseUsable,
} from "../../src/jobs/lease.js";

describe("leases con fencing", () => {
  it("incrementa el fence al adquirir", () => {
    const lease = acquireLease({ ownerId: "worker-1", currentFence: 4, now: 1_000, leaseMs: 30_000 });
    expect(lease.fence).toBe(5);
    expect(lease.expiresAt).toBe(31_000);
  });

  it("rechaza un lease vencido", () => {
    const lease = acquireLease({ ownerId: "worker-1", currentFence: 0, now: 1_000, leaseMs: 1_000 });
    expect(() => assertLeaseUsable(lease, 2_500)).toThrow(LeaseError);
    expect(() => assertLeaseUsable(lease, 1_500)).not.toThrow();
  });

  it("un worker con fence antiguo no confirma el efecto", () => {
    const lease = acquireLease({ ownerId: "worker-2", currentFence: 1, now: 1_000, leaseMs: 30_000 });
    expect(() =>
      assertCanAck({ lease, ackOwnerId: "worker-1", ackFence: 1 }),
    ).toThrow(LeaseError);
    expect(() =>
      assertCanAck({ lease, ackOwnerId: "worker-2", ackFence: 1 }),
    ).toThrow(LeaseError);
    expect(() =>
      assertCanAck({ lease, ackOwnerId: "worker-2", ackFence: lease.fence }),
    ).not.toThrow();
  });
});
