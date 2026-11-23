import { describe, expect, it } from "vitest";
import { runPublicationVertical } from "../../src/verticals/publication.js";
import { runReconciliationVertical } from "../../src/verticals/reconciliation.js";

describe("verticales activables sobre proveedor falso", () => {
  it("publicación: derechos, aprobación, receipt, métricas y aislamiento de tenant", async () => {
    const report = await runPublicationVertical();

    expect(report.steps).toEqual([
      "accounts.registered",
      "rights.allowed",
      "approval.bound",
      "tenant.isolation.checked",
      "publication.executed",
      "metrics.read",
    ]);
    expect(report.outcome).toBe("ACCEPTED");
    expect(report.state).toBe("PROVIDER_ACCEPTED");
    expect(report.receiptId).toMatch(/^fake_receipt_/);
    expect(report.providerPostId).toMatch(/^fake_post_/);
    expect(report.approvalId).toBe("approval-vertical-1");
    expect(report.rightsReasons).toEqual([]);
    expect(report.metrics).toHaveLength(1);
    expect(report.metrics[0]?.coverage).toBe("partial");
    expect(report.metrics[0]?.windowStart).toBe("2026-11-23T09:00:00Z");

    // El otro tenant existe y no se mezcla: su cuenta no se usa ni se lista.
    expect(report.otherTenantAccounts).toBe(1);
    expect(report.crossTenantBlocked).toBe(true);
    expect(report.budgetCommittedCents).toBe(100);

    // La referencia de credencial nunca sale en el resultado de la vertical.
    expect(JSON.stringify(report)).not.toContain("credref-");
  });

  it("reconciliación: no reintenta a ciegas y confirma con búsqueda autoritativa", async () => {
    const report = await runReconciliationVertical();

    expect(report.firstOutcome).toBe("OUTCOME_UNKNOWN");
    expect(report.retryOutcome).toBe("OUTCOME_UNKNOWN");
    // Un solo envío: el reintento devuelve el estado durable, no otro POST.
    expect(report.providerCalls).toBe(1);
    expect(report.reconcileStatus).toBe("CONFIRMED");
    expect(report.finalState).toBe("PUBLISHED_CONFIRMED");
    expect(report.providerPostId).toBe("fake_post_1");
    // El resultado incierto conserva el importe comprometido hasta conciliar.
    expect(report.budgetState).toBe("uncertain");
    expect(report.receiptConsistent).toBe(true);
  });
});
