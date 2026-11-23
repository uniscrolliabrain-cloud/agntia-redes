#!/usr/bin/env node
/**
 * Smoke de instalación limpia (parcial para RDS-C41-G01, no cierra el gate).
 *
 * Compila, empaqueta con `npm pack`, instala el tarball en un directorio
 * temporal FUERA del checkout e importa `agntia-redes` desde allí. Comprueba
 * que el paquete publicado no arrastra `src/`, `tests/` ni `apps/` y que las
 * dos verticales se ejecutan con el artefacto instalado.
 */
import { execFileSync } from "node:child_process";
import { mkdtemp, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

function run(command, args, cwd) {
  return execFileSync(command, args, {
    cwd,
    encoding: "utf8",
    env: process.env,
    stdio: ["ignore", "pipe", "inherit"],
  });
}

function runInherit(command, args, cwd) {
  execFileSync(command, args, { cwd, env: process.env, stdio: "inherit" });
}

const packDir = await mkdtemp(join(tmpdir(), "redes-pack-"));
const consumerDir = await mkdtemp(join(tmpdir(), "redes-consumer-"));

try {
  console.log("1/5 build");
  runInherit("npm", ["run", "build"], root);

  console.log("2/5 pack");
  const packed = JSON.parse(run("npm", ["pack", "--json", "--pack-destination", packDir], root));
  const entry = packed[0];
  if (entry === undefined) throw new Error("npm pack no devolvió artefacto");
  const tarball = join(packDir, entry.filename);

  console.log("3/5 consumidor aislado");
  await writeFile(
    join(consumerDir, "package.json"),
    `${JSON.stringify({ name: "redes-install-check", private: true, type: "module" }, null, 2)}\n`,
  );
  runInherit(
    "npm",
    ["install", tarball, "--no-audit", "--no-fund", "--prefer-offline", "--loglevel=error"],
    consumerDir,
  );

  await writeFile(
    join(consumerDir, "consumer.mjs"),
    `import {
  createApp,
  deriveHostPrincipal,
  runPublicationVertical,
  runReconciliationVertical,
} from "agntia-redes";

const principal = deriveHostPrincipal(
  {
    tenantId: "tenant-install",
    actorId: "actor-install",
    actorKind: "human",
    capabilities: ["social.account.health"],
    requestId: "req-install",
  },
  { membershipCapabilities: ["social.account.health"], audience: "agente" },
);

const publication = await runPublicationVertical();
const reconciliation = await runReconciliationVertical();

const ok =
  typeof createApp === "function" &&
  principal.tenantId === "tenant-install" &&
  publication.outcome === "ACCEPTED" &&
  reconciliation.finalState === "PUBLISHED_CONFIRMED" &&
  reconciliation.providerCalls === 1;

console.log(
  JSON.stringify({
    ok,
    publication: publication.outcome,
    reconciliation: reconciliation.finalState,
    tenant: principal.tenantId,
  }),
);
`,
  );

  console.log("4/5 ejecución desde node_modules");
  const output = JSON.parse(run(process.execPath, ["consumer.mjs"], consumerDir));
  if (output.ok !== true) throw new Error("el consumidor no completó las verticales");

  console.log("5/5 superficie del paquete");
  const installed = await readdir(join(consumerDir, "node_modules", "agntia-redes"));
  if (!installed.includes("dist")) throw new Error("el paquete instalado no contiene dist/");
  for (const forbidden of ["src", "tests", "apps", "scripts"]) {
    if (installed.includes(forbidden)) {
      throw new Error(`el paquete instalado arrastra ${forbidden}/`);
    }
  }

  console.log(
    JSON.stringify(
      {
        result: "PASS",
        covers: "RDS-C41-G01 (parcial): instalación limpia fuera del checkout",
        gate_status_unchanged: "NOT_EXECUTED",
        tarball: entry.filename,
        bytes: entry.size,
        installed_outside_checkout: true,
        consumer: output,
        verticals: ["publication", "reconciliation"],
      },
      null,
      2,
    ),
  );
} finally {
  await rm(packDir, { recursive: true, force: true });
  await rm(consumerDir, { recursive: true, force: true });
}
