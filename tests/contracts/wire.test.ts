import { describe, expect, it } from "vitest";
import {
  ContractError,
  MoneyCentsSchema,
  OperationEnvelopeSchema,
  apiError,
  assertEnvelopeMatchesPrincipal,
  parseStrict,
  type Principal,
} from "../../src/contracts/index.js";

const envelope = {
  schemaVersion: 1,
  operationId: "11111111-1111-4111-8111-111111111111",
  tenantId: "tenant-a",
  actorId: "actor-1",
  actorKind: "agent",
  capability: "social.draft.propose",
  correlationId: "22222222-2222-4222-8222-222222222222",
  causationId: null,
  idempotencyKey: "draft:tenant-a:0001",
  expectedRevision: 0,
  approvalRef: null,
  dryRun: true,
  payload: { draftId: "draft-1" },
};

const principal: Principal = {
  tenantId: "tenant-a",
  actorId: "actor-1",
  actorKind: "agent",
  capabilities: ["social.draft.propose"],
  requestId: "req-1",
};

describe("contratos de frontera", () => {
  it("acepta un envelope válido", () => {
    const parsed = parseStrict(OperationEnvelopeSchema, envelope, "envelope");
    expect(parsed.capability).toBe("social.draft.propose");
  });

  // Caso nombrado del gate RDS-C04-G01: el DTO estricto rechaza campos y capabilities fuera de contrato.
  it("RDS-C04-G01 · rechaza campos desconocidos y capabilities inventadas", () => {
    expect(() =>
      parseStrict(OperationEnvelopeSchema, { ...envelope, extra: true }, "envelope"),
    ).toThrow(ContractError);

    expect(() =>
      parseStrict(OperationEnvelopeSchema, { ...envelope, capability: "social.execute.anything" }, "envelope"),
    ).toThrow(ContractError);
  });

  it("no acepta identidad declarada distinta del principal", () => {
    const parsed = parseStrict(OperationEnvelopeSchema, envelope, "envelope");
    expect(() => assertEnvelopeMatchesPrincipal(parsed, principal)).not.toThrow();
    expect(() => assertEnvelopeMatchesPrincipal(parsed, { ...principal, tenantId: "tenant-b" })).toThrow(
      ContractError,
    );
  });

  it("el dinero es entero en céntimos", () => {
    expect(MoneyCentsSchema.parse(1999)).toBe(1999);
    expect(() => MoneyCentsSchema.parse(19.99)).toThrow();
    expect(() => MoneyCentsSchema.parse(-1)).toThrow();
  });

  it("un outcome incierto no se ofrece como reintento ciego", () => {
    const response = apiError("OUTCOME_UNKNOWN", { message: "resultado incierto" });
    expect(response.status).toBe(504);
    expect(response.body.reconciliationRequired).toBe(true);
    expect(response.body.retryable).toBe(false);
    // El cuerpo no filtra detalles internos.
    expect(Object.keys(response.body).sort()).toEqual([
      "code",
      "correlationId",
      "message",
      "reconciliationRequired",
      "retryable",
    ]);
  });
});
