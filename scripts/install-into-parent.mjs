#!/usr/bin/env node
/**
 * Instala `agntia-redes` en un checkout del repo padre (`agente`).
 *
 *   node scripts/install-into-parent.mjs --parent /ruta/agente
 *   node scripts/install-into-parent.mjs --parent /ruta/agente --dry-run
 *   node scripts/install-into-parent.mjs --parent /ruta/agente --revert
 *
 * Qué hace, en orden y de forma idempotente:
 *   1. Preflight: HEAD del padre, blobs críticos del cotejo y anclas de montaje.
 *   2. Build + `npm pack` del paquete.
 *   3. Copia el tarball a `<padre>/vendor/` y lo añade con el gestor del padre
 *      (mismo patrón que `@agntia/ciberseguridad`: tarball vendorizado).
 *   4. Copia `apps/server/src/redes-host.ts` y `scripts/verify-redes-install.ts`.
 *   5. Inserta el bloque de montaje en `apps/server/src/index.ts` entre marcas.
 *   6. Ejecuta la verificación en el padre y escribe un recibo JSON.
 *
 * No publica en ningún registro, no despliega y no toca git del padre.
 */
import { execFileSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const PACKAGE_NAME = "agntia-redes";
const PACKAGE_VERSION = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8")).version;
const TARBALL_NAME = `${PACKAGE_NAME}-${PACKAGE_VERSION}.tgz`;

/** HEAD del padre contra el que se cotejaron los 24 archivos (2026-11-23). */
const VERIFIED_REF = "9c4c309c9c05d26527563dd7ef094eebb7fbe276";

/** Blobs que sostienen el adaptador; si cambian, el cotejo deja de valer. */
const VERIFIED_BLOBS = {
  "apps/server/src/tenant-principal.ts": "0c86ba327277d55b322fe384605af3ef42d6a3fa",
  "apps/server/src/engine/authz/pdp.ts": "44e84885f5a12c5245bd526abe1a71ed5b6a20e8",
  "apps/server/src/tenant-scope.ts": "0879be0aa7f178a027e5684f4aedf2226bde4e9d",
  "packages/domain/src/actor.ts": "f19cb21989b1560c8c1a6137576d0459d9e91d05",
};

const MOUNT_START = "// REDES_MOUNT_V1";
const MOUNT_END = "// REDES_MOUNT_END_V1";
const MOUNT_BLOCK = `${MOUNT_START} — agntia-redes: /api/redes detrás del ctx ya verificado.
if (process.env.REDES_ENABLED === "1") {
  const { mountRedesFromEnv } = await import("./redes-host.ts");
  mountRedesFromEnv(app);
}
${MOUNT_END}`;

const files = {
  adapter: {
    source: join(ROOT, "install", "parent", "redes-host.ts"),
    target: "apps/server/src/redes-host.ts",
  },
  verify: {
    source: join(ROOT, "install", "parent", "verify-redes-install.ts"),
    target: "scripts/verify-redes-install.ts",
  },
};

function parseArgs(argv) {
  const options = {
    parent: process.env.REDES_PARENT_DIR ?? "/agente",
    dryRun: false,
    revert: false,
    verify: true,
    mount: true,
    allowOtherRef: false,
    report: null,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--parent" || arg === "--dir") options.parent = argv[++index];
    else if (arg === "--dry-run") options.dryRun = true;
    else if (arg === "--revert" || arg === "--rollback") options.revert = true;
    else if (arg === "--skip-verify") options.verify = false;
    else if (arg === "--no-mount") options.mount = false;
    else if (arg === "--allow-other-ref") options.allowOtherRef = true;
    else if (arg === "--report") options.report = argv[++index];
    else if (arg === "--help" || arg === "-h") {
      console.log(
        [
          "uso: node scripts/install-into-parent.mjs --parent <checkout> [flags]",
          "  --dry-run          no escribe nada; imprime el plan",
          "  --revert           desmonta y retira el paquete del padre",
          "  --no-mount         instala y verifica sin tocar index.ts",
          "  --skip-verify      no ejecuta la verificación en el padre",
          "  --allow-other-ref  permite un HEAD distinto del cotejado (queda NOT_VERIFIED)",
          "  --report <ruta>    escribe el recibo JSON en esa ruta",
        ].join("\n"),
      );
      process.exit(0);
    } else {
      console.error(`argumento desconocido: ${arg}`);
      process.exit(2);
    }
  }
  return options;
}

function run(command, args, cwd) {
  return execFileSync(command, args, {
    cwd,
    encoding: "utf8",
    env: process.env,
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function runInherit(command, args, cwd) {
  execFileSync(command, args, { cwd, env: process.env, stdio: "inherit" });
}

function gitSha(dir, path) {
  try {
    return run("git", ["-C", dir, "ls-tree", "HEAD", "--", path], dir)
      .trim()
      .split(/\s+/)[2];
  } catch {
    return undefined;
  }
}

function preflight(parent, options) {
  const problems = [];
  if (!existsSync(join(parent, ".git"))) problems.push(`${parent} no es un checkout git`);
  if (!existsSync(join(parent, "apps/server/src/app.ts"))) {
    problems.push("no encuentro apps/server/src/app.ts: ¿es el repo `agente`?");
  }

  let head;
  try {
    head = run("git", ["-C", parent, "rev-parse", "HEAD"], parent).trim();
  } catch {
    problems.push("no puedo leer el HEAD del padre");
  }

  if (head !== undefined && head !== VERIFIED_REF && !options.allowOtherRef) {
    problems.push(
      `HEAD ${head} no es el SHA cotejado ${VERIFIED_REF}; repite el cotejo y usa --allow-other-ref`,
    );
  }

  for (const [path, expected] of Object.entries(VERIFIED_BLOBS)) {
    const actual = gitSha(parent, path);
    if (actual !== expected) {
      problems.push(`blob distinto en ${path}: esperado ${expected}, encontrado ${actual ?? "nada"}`);
    }
  }

  const appSource = existsSync(join(parent, "apps/server/src/app.ts"))
    ? readFileSync(join(parent, "apps/server/src/app.ts"), "utf8")
    : "";
  for (const anchor of ['app.use("/api/*"', 'c.set("ctx"']) {
    if (!appSource.includes(anchor)) problems.push(`ancla ausente en app.ts: ${anchor}`);
  }

  const indexSource = existsSync(join(parent, "apps/server/src/index.ts"))
    ? readFileSync(join(parent, "apps/server/src/index.ts"), "utf8")
    : "";
  if (!indexSource.includes("const server = serveHttp")) {
    problems.push("ancla ausente en index.ts: const server = serveHttp");
  }

  const packageJson = JSON.parse(readFileSync(join(parent, "package.json"), "utf8"));
  return { problems, head, packageManager: packageJson.packageManager ?? "" };
}

function pnpmCommand(packageManager) {
  if (process.env.REDES_PNPM_BIN) return [process.env.REDES_PNPM_BIN];
  const version = packageManager.startsWith("pnpm@") ? packageManager.slice(5) : "11.19.0";
  try {
    run("pnpm", ["--version"], ROOT);
    return ["pnpm"];
  } catch {
    return ["npx", "--yes", `pnpm@${version}`];
  }
}

function buildAndPack(dryRun) {
  const packDir = mkdtempSync(join(tmpdir(), "redes-parent-pack-"));
  if (dryRun) return join(packDir, TARBALL_NAME);
  runInherit("npm", ["run", "build"], ROOT);
  const packed = JSON.parse(
    run("npm", ["pack", "--json", "--pack-destination", packDir], ROOT),
  );
  const entry = packed[0];
  if (entry === undefined) throw new Error("npm pack no devolvió artefacto");
  return join(packDir, entry.filename);
}

function mountBlockPresent(source) {
  return source.includes(MOUNT_START);
}

function applyMount(parent, options) {
  const target = join(parent, "apps/server/src/index.ts");
  const source = readFileSync(target, "utf8");
  if (mountBlockPresent(source)) return "already-mounted";

  const anchor = "const server = serveHttp";
  const position = source.indexOf(anchor);
  if (position === -1) throw new Error("no encuentro el ancla de montaje en index.ts");

  const next = `${source.slice(0, position)}${MOUNT_BLOCK}\n\n${source.slice(position)}`;
  if (options.dryRun) return "would-mount";
  writeFileSync(`${target}.redes-install.bak`, source);
  writeFileSync(target, next);
  return "mounted";
}

function removeMount(parent, options) {
  const target = join(parent, "apps/server/src/index.ts");
  const source = readFileSync(target, "utf8");
  const start = source.indexOf(MOUNT_START);
  const end = source.indexOf(MOUNT_END);
  if (start === -1 || end === -1) return "not-mounted";
  const after = source.slice(end + MOUNT_END.length).replace(/^\n{1,2}/, "");
  if (options.dryRun) return "would-unmount";
  writeFileSync(target, `${source.slice(0, start)}${after}`);
  return "unmounted";
}

const options = parseArgs(process.argv.slice(2));
const parent = resolve(options.parent);
const report = {
  tool: "install-into-parent",
  package: `${PACKAGE_NAME}@${PACKAGE_VERSION}`,
  parent,
  verified_ref: VERIFIED_REF,
  dry_run: options.dryRun,
  steps: [],
};

if (!existsSync(parent)) {
  console.error(`no existe el checkout del padre: ${parent}`);
  process.exit(2);
}

const { problems, head, packageManager } = preflight(parent, options);
report.parent_head = head ?? null;
report.parent_head_matches_verified = head === VERIFIED_REF;
if (problems.length > 0) {
  report.result = "BLOCKED";
  report.problems = problems;
  console.error(JSON.stringify(report, null, 2));
  process.exit(1);
}

if (options.revert) {
  const unmounted = removeMount(parent, options);
  report.steps.push({ step: "unmount", result: unmounted });
  const indexBackup = join(parent, "apps/server/src/index.ts.redes-install.bak");
  if (existsSync(indexBackup) && !options.dryRun) rmSync(indexBackup);
  for (const file of Object.values(files)) {
    const path = join(parent, file.target);
    if (existsSync(path)) {
      if (!options.dryRun) rmSync(path);
      report.steps.push({ step: "remove", file: file.target, result: "removed" });
    }
    const backup = `${path}.redes-install.bak`;
    if (existsSync(backup) && !options.dryRun) rmSync(backup);
  }
  const vendor = join(parent, "vendor", TARBALL_NAME);
  if (existsSync(vendor) && !options.dryRun) rmSync(vendor);
  const strayReport = join(parent, ".redes-install-report.json");
  if (existsSync(strayReport) && !options.dryRun) rmSync(strayReport);
  const [command, ...args] = pnpmCommand(packageManager);
  if (!options.dryRun) {
    try {
      // Sin heredar stdio: el recibo de reversión debe ser JSON limpio.
      run(command, [...args, "-w", "remove", PACKAGE_NAME], parent);
      report.steps.push({ step: "dependency", result: "removed" });
    } catch {
      report.steps.push({ step: "dependency", result: "not-present" });
    }
  }
  report.result = "REVERTED";
  report.note =
    "La reversión no revierte pnpm-lock.yaml; revísalo con `git -C <padre> diff pnpm-lock.yaml`.";
  if (options.report !== null) writeFileSync(options.report, `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify(report, null, 2));
  process.exit(0);
}

try {
const tarball = buildAndPack(options.dryRun);
report.tarball = { name: TARBALL_NAME, source: tarball };

// 1. tarball vendorizado en el padre (mismo patrón que @agntia/ciberseguridad).
const vendorDir = join(parent, "vendor");
const vendor = join(vendorDir, TARBALL_NAME);
if (options.dryRun) {
  report.steps.push({ step: "vendor", result: "would-copy", target: `vendor/${TARBALL_NAME}` });
} else {
  mkdirSync(vendorDir, { recursive: true });
  copyFileSync(tarball, vendor);
  report.steps.push({ step: "vendor", result: "copied", target: `vendor/${TARBALL_NAME}` });
}

// 2. dependencia con el gestor del padre.
const [command, ...args] = pnpmCommand(packageManager);
if (options.dryRun) {
  report.steps.push({
    step: "dependency",
    result: "would-add",
    command: `${command} ${args.join(" ")} -w add file:vendor/${TARBALL_NAME}`.trim(),
  });
} else {
  // `-w` es obligatorio en un workspaces pnpm: el paquete vive en el root,
  // igual que @agntia/ciberseguridad.
  runInherit(
    command,
    [...args, "-w", "add", `file:vendor/${TARBALL_NAME}`, "--ignore-scripts"],
    parent,
  );
  report.steps.push({ step: "dependency", result: "added" });
}

// 3. adaptador y verificador.
for (const [name, file] of Object.entries(files)) {
  const target = join(parent, file.target);
  if (options.dryRun) {
    report.steps.push({ step: name, result: "would-copy", target: file.target });
    continue;
  }
  mkdirSync(dirname(target), { recursive: true });
  if (existsSync(target)) writeFileSync(`${target}.redes-install.bak`, readFileSync(target));
  copyFileSync(file.source, target);
  report.steps.push({ step: name, result: "copied", target: file.target });
}

// 4. montaje en index.ts.
report.steps.push({
  step: "mount",
  result: options.mount ? applyMount(parent, options) : "skipped",
});

// 5. verificación real dentro del padre.
if (options.verify && !options.dryRun) {
  const reportPath = join(parent, ".redes-install-report.json");
  try {
    runInherit(command, [...args, "exec", "tsx", "scripts/verify-redes-install.ts", "--report", reportPath], parent);
    const verification = JSON.parse(readFileSync(reportPath, "utf8"));
    report.verification = verification;
    report.steps.push({ step: "verify", result: verification.result });
    rmSync(reportPath, { force: true });
  } catch (error) {
    report.steps.push({
      step: "verify",
      result: "FAIL",
      detail: error instanceof Error ? error.message.split("\n")[0] : String(error),
    });
    if (existsSync(reportPath)) {
      try {
        report.verification = JSON.parse(readFileSync(reportPath, "utf8"));
      } catch {
        // Recibo ilegible: el fallo ya está registrado arriba.
      }
    }
  }
}

} catch (error) {
  // Un fallo del instalador se reporta como recibo, no como traza suelta.
  const detail = error instanceof Error ? (error.message.split("\n")[0] ?? error.message) : String(error);
  report.steps.push({ step: "install", result: "FAIL", detail });
}

report.result = report.steps.some((step) => step.result === "FAIL") ? "FAIL" : "PASS";
if (options.report !== null) writeFileSync(options.report, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
process.exit(report.result === "PASS" ? 0 : 1);
