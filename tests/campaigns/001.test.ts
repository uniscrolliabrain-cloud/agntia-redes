import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

const root = new URL("../../", import.meta.url);

async function readJson<T>(path: string): Promise<T> {
  const raw = await readFile(new URL(path, root), "utf8");
  return JSON.parse(raw) as T;
}

describe("RDS-C01 baseline", () => {
  it("congela SHA propio y SHA de referencia del padre", async () => {
    const versions = await readJson<{
      own_sha_at_baseline: string;
      parent_reference_sha: string;
      parent_comparison: string;
    }>("docs/versions.json");

    expect(versions.own_sha_at_baseline).toMatch(/^[0-9a-f]{40}$/);
    expect(versions.parent_reference_sha).toMatch(/^[0-9a-f]{40}$/);
    // El cotejo del padre no está hecho: no se declara compatibilidad.
    expect(versions.parent_comparison).toBe("NOT_VERIFIED");
  });

  it("el baseline coincide con el manifiesto de campañas", async () => {
    const manifest = await readJson<{
      campaign_count: number;
      task_count: number;
      gate_scenario_count: number;
      parent_reference_sha: string;
      campaigns: unknown[];
    }>("docs/campaigns/campaign.json");
    const versions = await readJson<{ parent_reference_sha: string; manifest: { campaigns: number } }>(
      "docs/versions.json",
    );

    expect(manifest.campaigns).toHaveLength(42);
    expect(manifest.campaign_count).toBe(42);
    expect(manifest.task_count).toBe(294);
    expect(manifest.gate_scenario_count).toBe(84);
    expect(versions.manifest.campaigns).toBe(manifest.campaign_count);
    expect(versions.parent_reference_sha).toBe(manifest.parent_reference_sha);
  });

  it("el mapa de fuentes del padre conserva su SHA y alcance de lectura", async () => {
    const map = await readJson<{
      ref: string;
      scope: string;
      files: Array<{ path: string }>;
    }>("docs/research/parent-source-map.json");

    expect(map.ref).toMatch(/^[0-9a-f]{40}$/);
    expect(map.files.length).toBeGreaterThan(0);
    expect(map.scope.toLowerCase()).toContain("selective");
  });
});
