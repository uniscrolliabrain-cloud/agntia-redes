import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { describe, expect, it } from "vitest";

/**
 * Invariantes documentales del programa RDS, ejecutables en CI.
 *
 * El contrato `gate_evidence_contract` del manifiesto exige, para declarar un
 * gate en PASS, un caso con su identificador como nombre, su propio artefacto de
 * evidencia y la salida del comando. Este test no ejecuta los gates: comprueba
 * que ninguna declaración del manifiesto quede por delante de la evidencia real.
 */

const root = new URL("../../", import.meta.url);

const STATUS_VALUES = ["NOT_EXECUTED", "PASS", "FAIL", "BLOCKED", "NOT_VERIFIED"] as const;

interface GateVerification {
  suite: string;
  case: string;
  artifact: string;
  assertion: string;
}

interface Gate {
  id: string;
  scenario: string;
  status: (typeof STATUS_VALUES)[number];
  evidence_refs: string[];
  verification: GateVerification;
}

interface Task {
  id: string;
  evidence_refs: string[];
}

interface Campaign {
  id: string;
  verification_suite: string;
  implementation_test_status: string;
  tasks: Task[];
  gate_scenarios: Gate[];
}

interface Manifest {
  campaign_count: number;
  task_count: number;
  gate_scenario_count: number;
  campaigns: Campaign[];
  gate_evidence_contract: { status_values: string[] };
  gate_case_coverage: {
    gates_total: number;
    gates_with_named_case: number;
    gates_executed_pass: number;
    gates_unexecuted: number;
    unexecuted_reasons: Record<string, number>;
  };
}

async function readJson<T>(path: string): Promise<T> {
  return JSON.parse(await readFile(new URL(path, root), "utf8")) as T;
}

async function readText(path: string): Promise<string> {
  return readFile(new URL(path, root), "utf8");
}

async function exists(path: string): Promise<boolean> {
  return stat(new URL(path, root)).then(
    () => true,
    () => false,
  );
}

function sha256(text: string): string {
  return createHash("sha256").update(text).digest("hex");
}

const manifest = await readJson<Manifest>("docs/campaigns/campaign.json");
const gates = manifest.campaigns.flatMap((campaign) =>
  campaign.gate_scenarios.map((gate) => ({ campaign, gate })),
);
const isSuitePath = (suite: string) => !suite.includes(":");

describe("contrato gate ↔ caso ↔ evidencia", () => {
  it("conserva 42 campanas, 294 tareas y 84 gates con evidencia propia", () => {
    expect(manifest.campaigns).toHaveLength(42);
    expect(manifest.campaign_count).toBe(42);
    expect(manifest.task_count).toBe(294);
    expect(manifest.gate_scenario_count).toBe(84);
    expect(gates).toHaveLength(84);

    const tasks = manifest.campaigns.flatMap((campaign) => campaign.tasks);
    expect(tasks).toHaveLength(294);
    expect(new Set(tasks.flatMap((task) => task.evidence_refs)).size).toBe(294);
    for (const task of tasks) {
      expect(task.evidence_refs).toHaveLength(1);
    }
  });

  it("cada gate nombra su propio caso y su propio artefacto", () => {
    for (const { campaign, gate } of gates) {
      expect(STATUS_VALUES).toContain(gate.status);
      expect(gate.verification.case).toBe(gate.id);
      expect(gate.verification.suite.length).toBeGreaterThan(0);
      expect(gate.evidence_refs).toEqual([gate.verification.artifact]);
      expect(gate.verification.artifact).toMatch(
        new RegExp(`^docs/evidence/c${campaign.id.slice(5).padStart(3, "0")}/g\\d{2}\\.json$`),
      );
      expect(gate.verification.assertion).toBe(gate.scenario);
    }
  });

  it("un gate PASS tiene evidencia ejecutada, seleccionable y vigente", async () => {
    const passing = gates.filter(({ gate }) => gate.status === "PASS");
    expect(passing.length).toBeGreaterThan(0);

    for (const { gate } of passing) {
      const artifactPath = gate.verification.artifact;
      expect(await exists(artifactPath)).toBe(true);
      const evidence = JSON.parse(await readText(artifactPath)) as Record<string, unknown>;
      expect(evidence["gate_id"]).toBe(gate.id);
      expect(evidence["case"]).toBe(gate.id);
      expect(evidence["suite"]).toBe(gate.verification.suite);
      expect(evidence["result"]).toBe("PASS");
      expect(evidence["command"]).toBe(
        `npx vitest run ${gate.verification.suite} -t "${gate.id}"`,
      );
      expect(evidence["artifacts"]).toContain(artifactPath);
      expect(String(evidence["sha_at_execution"])).toMatch(/^[0-9a-f]{40}$/);

      // El caso sigue existiendo con el mismo contenido que cuando se ejecutó.
      const suiteSource = await readText(gate.verification.suite);
      expect(evidence["suite_sha256"]).toBe(sha256(suiteSource));
      expect(suiteSource).toContain(`"${gate.id} ·`);
    }
  });

  it("ningun gate sin caso escrito declara PASS", async () => {
    for (const { gate } of gates) {
      if (gate.status === "PASS") continue;
      // Un gate cuya suite no existe no puede tener caso ejecutable.
      if (isSuitePath(gate.verification.suite)) {
        const suiteExists = await exists(gate.verification.suite);
        if (!suiteExists) expect(gate.status).toBe("NOT_EXECUTED");
      }
      // Un artefacto PASS residual describiría una ejecución que el manifiesto niega.
      if (await exists(gate.verification.artifact)) {
        const evidence = JSON.parse(await readText(gate.verification.artifact)) as Record<
          string,
          unknown
        >;
        expect(evidence["result"]).not.toBe("PASS");
      }
    }
  });

  it("gate_case_coverage cuadra con el recuento real", () => {
    const coverage = manifest.gate_case_coverage;
    const named = gates.filter(({ gate }) => gate.status === "PASS");
    const unexecuted = gates.filter(({ gate }) => gate.status === "NOT_EXECUTED");

    expect(coverage.gates_total).toBe(gates.length);
    expect(coverage.gates_with_named_case).toBe(named.length);
    expect(coverage.gates_executed_pass).toBe(named.length);
    expect(coverage.gates_unexecuted).toBe(unexecuted.length);
    expect(named.length + unexecuted.length).toBe(gates.length);
    expect(coverage.gates_unexecuted).toBe(
      Object.values(coverage.unexecuted_reasons).reduce((sum, count) => sum + count, 0),
    );
    expect(manifest.gate_evidence_contract.status_values).toEqual([...STATUS_VALUES]);
  });

  it("cada CAMPAIGN.md declara el estado que consta en el manifiesto", async () => {
    for (const { campaign, gate } of gates) {
      const path = `docs/execution-program/campaigns/${campaign.id.slice(5).padStart(3, "0")}/CAMPAIGN.md`;
      const document = await readText(path);
      expect(document).toContain(`- **${gate.id} / ${gate.status}:**`);
      expect(document).toContain(`**Caso:** \`${gate.id}\` en \`${gate.verification.suite}\``);
      expect(document).toContain(`**Evidencia:** \`${gate.verification.artifact}\``);
    }
  });

  it("el recibo vigente sella el hash del manifiesto", async () => {
    const receipt = await readJson<{ campaign_manifest_sha256: string; status: string }>(
      "docs/release/document-validation-2026-11-20.json",
    );
    expect(receipt.campaign_manifest_sha256).toBe(sha256(await readText("docs/campaigns/campaign.json")));
    expect(receipt.status).toBe("PASS");
  });
});
