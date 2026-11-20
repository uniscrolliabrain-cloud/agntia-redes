import { readFile, readdir, stat } from "node:fs/promises";
import { join, normalize, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

/**
 * Invariantes documentales de bajo coste para CI: la documentación no puede
 * acumular enlaces locales rotos ni JSON inválido sin que el pipeline lo note.
 * Los enlaces externos no se consultan aquí (no hay red en CI por diseño).
 */

const root = fileURLToPath(new URL("../../", import.meta.url));
const SKIP_DIRS = new Set(["node_modules", ".git", "dist", "coverage"]);

async function walk(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      files.push(...(await walk(join(directory, entry.name))));
    } else {
      files.push(join(directory, entry.name));
    }
  }
  return files;
}

const files = await walk(root);
const markdown = files.filter((file) => file.endsWith(".md"));
const json = files.filter((file) => file.endsWith(".json"));

describe("documentación", () => {
  it("no tiene enlaces locales rotos", async () => {
    const broken: string[] = [];
    let checked = 0;

    for (const file of markdown) {
      const source = await readFile(file, "utf8");
      for (const match of source.matchAll(/\]\(([^)\s]+)\)/g)) {
        const target = match[1] as string;
        if (target.startsWith(("http") as string) || target.startsWith("mailto")) continue;
        const path = target.split("#")[0] ?? "";
        if (path.length === 0) continue;
        checked += 1;
        const resolved = normalize(join(dirname(file), path));
        const found = await stat(resolved).then(
          () => true,
          () => false,
        );
        if (!found) broken.push(`${file.slice(root.length)} -> ${target}`);
      }
    }

    expect(checked).toBeGreaterThan(0);
    expect(broken).toEqual([]);
  });

  it("todo JSON versionado parsea", async () => {
    const invalid: string[] = [];
    for (const file of json) {
      try {
        JSON.parse(await readFile(file, "utf8"));
      } catch {
        invalid.push(file.slice(root.length));
      }
    }
    expect(json.length).toBeGreaterThan(0);
    expect(invalid).toEqual([]);
  });
});
