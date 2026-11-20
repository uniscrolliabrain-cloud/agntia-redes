import { describe, expect, it } from "vitest";
import { BudgetError, BudgetLedger } from "../../src/budget/index.js";

describe("presupuesto", () => {
  it("no permite reservar por encima del techo", () => {
    const ledger = new BudgetLedger(100);
    ledger.reserve({ tenantId: "tenant-a", idempotencyKey: "op-1", amountCents: 60 });
    expect(() =>
      ledger.reserve({ tenantId: "tenant-a", idempotencyKey: "op-2", amountCents: 60 }),
    ).toThrow(BudgetError);
  });

  it("la misma idempotency key no reserva dos veces", () => {
    const ledger = new BudgetLedger(100);
    const first = ledger.reserve({ tenantId: "tenant-a", idempotencyKey: "op-1", amountCents: 60 });
    const second = ledger.reserve({ tenantId: "tenant-a", idempotencyKey: "op-1", amountCents: 60 });

    expect(first.duplicate).toBe(false);
    expect(second.duplicate).toBe(true);
    expect(ledger.committedCents("tenant-a")).toBe(60);
  });

  // Caso nombrado del gate RDS-C22-G02: el coste incierto permanece reservado hasta reconciliar.
  it("RDS-C22-G02 · un resultado incierto conserva el pasivo", () => {
    const ledger = new BudgetLedger(100);
    ledger.reserve({ tenantId: "tenant-a", idempotencyKey: "op-1", amountCents: 100 });
    ledger.markUncertain("tenant-a", "op-1");

    expect(ledger.committedCents("tenant-a")).toBe(100);
    expect(() =>
      ledger.reserve({ tenantId: "tenant-a", idempotencyKey: "op-2", amountCents: 1 }),
    ).toThrow(BudgetError);
    expect(() => ledger.release("tenant-a", "op-1")).toThrow(BudgetError);
  });

  it("liquidar a cero libera capacidad; liquidar el importe la consume", () => {
    const ledger = new BudgetLedger(100);
    ledger.reserve({ tenantId: "tenant-a", idempotencyKey: "op-1", amountCents: 80 });
    ledger.settle("tenant-a", "op-1", 0);
    expect(ledger.committedCents("tenant-a")).toBe(0);
    expect(() =>
      ledger.reserve({ tenantId: "tenant-a", idempotencyKey: "op-2", amountCents: 100 }),
    ).not.toThrow();
  });

  // Caso nombrado del gate RDS-C22-G01: dos reservas concurrentes no consumen el mismo saldo.
  it("RDS-C22-G01 · reservas concurrentes no duplican gasto", async () => {
    const ledger = new BudgetLedger(100);
    const results = await Promise.allSettled([
      Promise.resolve().then(() =>
        ledger.reserve({ tenantId: "tenant-a", idempotencyKey: "op-a", amountCents: 60 }),
      ),
      Promise.resolve().then(() =>
        ledger.reserve({ tenantId: "tenant-a", idempotencyKey: "op-b", amountCents: 60 }),
      ),
    ]);

    const fulfilled = results.filter((result) => result.status === "fulfilled");
    const rejected = results.filter((result) => result.status === "rejected");
    expect(fulfilled).toHaveLength(1);
    expect(rejected).toHaveLength(1);
    expect(ledger.committedCents("tenant-a")).toBe(60);
  });

  it("el presupuesto se aísla por tenant", () => {
    const ledger = new BudgetLedger(100);
    ledger.reserve({ tenantId: "tenant-a", idempotencyKey: "op-1", amountCents: 100 });
    expect(() =>
      ledger.reserve({ tenantId: "tenant-b", idempotencyKey: "op-1", amountCents: 100 }),
    ).not.toThrow();
  });
});
