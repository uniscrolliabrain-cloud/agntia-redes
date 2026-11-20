import { describe, expect, it } from "vitest";
import {
  DomainError,
  ServiceAgreementSchema,
  assertAgreementUsable,
  type ServiceAgreement,
} from "../../src/domain/service-agreement.js";
import {
  WorkOrderSchema,
  assertWorkOrderExecutable,
  commercialAcceptance,
  deliverableAcceptance,
  editorialApproval,
  type WorkOrder,
} from "../../src/domain/work-order.js";

const now = new Date("2026-11-15T10:00:00Z");

function agreement(overrides: Partial<ServiceAgreement> = {}): ServiceAgreement {
  return ServiceAgreementSchema.parse({
    agreementId: "agreement-1",
    providerOrgId: "org-provider",
    customerOrgId: "org-customer",
    customerWorkspaceId: "tenant-a",
    mode: "standalone",
    revision: 1,
    status: "active",
    validFrom: "2026-01-01T00:00:00Z",
    validUntil: "2027-01-01T00:00:00Z",
    spendCeilingCents: 50_000,
    entitlements: [
      { capability: "social.draft.propose", monthlyLimit: 100 },
      { capability: "social.publication.execute", monthlyLimit: 40 },
    ],
    dataPolicy: { dpaRef: "dpa-1", retentionDays: 365 },
    approvalPolicy: { requireHumanApprovalForEffects: true, separationOfDuties: true },
    ...overrides,
  });
}

const workOrder: WorkOrder = WorkOrderSchema.parse({
  workOrderId: "wo-1",
  tenantId: "tenant-a",
  agreementId: "agreement-1",
  projectId: "project-1",
  objective: "Preparar una semana de contenido",
  sources: ["source-1"],
  deliverables: ["calendario", "variantes"],
  budgetMandateCents: 10_000,
  dueAt: "2026-11-20T17:00:00+01:00",
  status: "accepted",
  revision: 1,
});

describe("acuerdos de servicio", () => {
  it("no admite un acuerdo que permita efectos sin aprobación humana", () => {
    expect(() =>
      ServiceAgreementSchema.parse({
        ...agreement(),
        approvalPolicy: { requireHumanApprovalForEffects: false, separationOfDuties: true },
      }),
    ).toThrow();
  });

  it("exige acuerdo activo, vigente y con la capability contratada", () => {
    expect(() =>
      assertAgreementUsable(agreement(), { capability: "social.draft.propose", now }),
    ).not.toThrow();

    expect(() =>
      assertAgreementUsable(agreement({ status: "suspended" }), {
        capability: "social.draft.propose",
        now,
      }),
    ).toThrow(DomainError);

    expect(() =>
      assertAgreementUsable(agreement({ validUntil: "2026-06-01T00:00:00Z" }), {
        capability: "social.draft.propose",
        now,
      }),
    ).toThrow(DomainError);

    expect(() =>
      assertAgreementUsable(agreement(), { capability: "social.report.read", now }),
    ).toThrow(DomainError);
  });

  // Caso nombrado del gate RDS-C02-G01: el encargo standalone se ejecuta con el acuerdo propio.
  it("RDS-C02-G01 · una orden de trabajo no se ejecuta fuera de su acuerdo o mandato", () => {
    expect(() => assertWorkOrderExecutable(workOrder, agreement(), 5_000)).not.toThrow();

    expect(() => assertWorkOrderExecutable(workOrder, agreement(), 20_000)).toThrow(DomainError);
    expect(() =>
      assertWorkOrderExecutable({ ...workOrder, agreementId: "otro" }, agreement(), 1),
    ).toThrow(DomainError);
    expect(() =>
      assertWorkOrderExecutable({ ...workOrder, tenantId: "tenant-b" }, agreement(), 1),
    ).toThrow(DomainError);
  });

  it("contratar, aprobar contenido y aceptar entrega son hechos separados", () => {
    const commercial = commercialAcceptance({
      agreementId: "agreement-1",
      acceptedAt: "2026-11-01T10:00:00Z",
      acceptedByActorId: "human-1",
      amountCents: 49_000,
    });
    const editorial = editorialApproval({
      draftRevision: 3,
      payloadHash: "b".repeat(64),
      approvedAt: "2026-11-15T09:00:00Z",
      approvedByActorId: "human-2",
    });
    const deliverable = deliverableAcceptance({
      workOrderId: "wo-1",
      deliverableVersion: 1,
      acceptedAt: "2026-11-20T12:00:00Z",
      acceptedByActorId: "human-1",
    });

    expect(commercial.amountCents).toBe(49_000);
    expect(editorial.draftRevision).toBe(3);
    expect(deliverable.deliverableVersion).toBe(1);
  });
});
