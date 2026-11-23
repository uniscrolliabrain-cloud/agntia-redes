// REDES_INSTALL_VERIFY_V1 — instalado por agntia-redes.
// Destino: scripts/verify-redes-install.ts (repo `agente`).
//
// Arranca la app REAL del padre contra un store temporal, monta /api/redes y
// comprueba: sin sesión 401 · con sesión 200 · aislamiento por tenant · sin
// capacidad 403 · las dos verticales del paquete. Sin red y sin proveedores.
//
// Uso: pnpm exec tsx scripts/verify-redes-install.ts
//      pnpm exec tsx scripts/verify-redes-install.ts --json
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

process.env.WORKSPACE_MODE = "sample";
process.env.HOST = "127.0.0.1";
process.env.TASK_WORKER_ENABLED = "false";
process.env.ALLOW_NETWORK = "0";

interface Check {
  name: string;
  ok: boolean;
  detail: string;
}

const checks: Check[] = [];
const check = (name: string, ok: boolean, detail: string): void => {
  checks.push({ name, ok, detail });
};

const directory = await mkdtemp(join(tmpdir(), "agente-redes-"));
process.env.DATA_DIR = directory;

const cleanup: Array<() => Promise<unknown> | unknown> = [];
const json = process.argv.includes("--json");
const reportIndex = process.argv.indexOf("--report");
const reportPath = reportIndex === -1 ? null : process.argv[reportIndex + 1];

try {
  const { createApp } = await import("../apps/server/src/app.ts");
  const { createStore } = await import("../apps/server/src/db.ts");
  const { readConfig } = await import("../apps/server/src/config.ts");
  const { UserService } = await import("../apps/server/src/users.ts");
  const { TenantService } = await import("../apps/server/src/engine/tenant.ts");
  const { pathToFileURL } = await import("node:url");
  const redes = await import(pathToFileURL(join(process.cwd(), "apps/server/src/redes-host.ts")).href);
  const pkg = await import("agntia-redes");

  const db = await createStore({ dataDir: join(directory, "db") });
  cleanup.push(() => db.close());

  const config = readConfig();
  check("modo sample", config.mode === "sample", `mode=${config.mode}`);

  const server = await createApp(db, config);
  cleanup.push(() => server.agent.stop());

  const users = new UserService(db);
  const tenants = new TenantService(db, config);
  const password = "contrasena-larga-1";
  const makeUser = async (email: string, name: string, tenantId: string) => {
    const user = await users.create({ email, password, name, role: "admin" });
    await tenants.setMembership(user.id, tenantId);
    return user;
  };

  await makeUser("redes-a@tenant-slice.local", "Redes A", "tenant-redes-a");
  await makeUser("redes-b@tenant-slice.local", "Redes B", "tenant-redes-b");
  const sinCapacidad = await makeUser("redes-c@tenant-slice.local", "Redes C", "tenant-redes-a");

  const accounts = new pkg.AccountRegistry();
  const binding = (tenantId: string, accountBindingId: string) => ({
    accountBindingId,
    tenantId,
    brandRef: `brand-${tenantId}`,
    provider: "fake" as const,
    remoteAccountId: `remote-${tenantId}`,
    remoteWorkspaceId: null,
    credentialRef: `credref-${accountBindingId}`,
    revision: 1,
    state: "connected" as const,
    lastVerifiedAt: "2026-11-23T08:00:00Z",
  });
  accounts.register(binding("tenant-redes-a", "acct-redes-a"));
  accounts.register(binding("tenant-redes-b", "acct-redes-b"));

  // Allowlist explícita: C no tiene capacidad aunque sea admin de su tenant.
  const granted = ["social.account.health"] as const;
  redes.mountRedes(server.app, {
    accounts,
    membershipCapabilitiesFor: () => [...granted],
    capabilitiesFor: (actor: { id: string }) => (actor.id === sinCapacidad.id ? [] : [...granted]),
  });

  const login = async (email: string): Promise<string | undefined> => {
    const response = await server.app.request("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (response.status !== 200) return undefined;
    const body = (await response.json()) as { token?: string };
    return body.token;
  };

  const anonimo = await server.app.request("/api/redes/v1/social/accounts");
  check("sin sesión no entra", anonimo.status === 401, `status=${anonimo.status}`);

  const tokenA = await login("redes-a@tenant-slice.local");
  const tokenB = await login("redes-b@tenant-slice.local");
  const tokenC = await login("redes-c@tenant-slice.local");
  check(
    "login devuelve token",
    typeof tokenA === "string" && typeof tokenB === "string" && typeof tokenC === "string",
    `a=${typeof tokenA} b=${typeof tokenB} c=${typeof tokenC}`,
  );

  const auth = (token: string | undefined) => ({ Authorization: `Bearer ${token ?? ""}` });

  const health = await server.app.request("/api/redes/healthz", { headers: auth(tokenA) });
  const healthBody = health.status === 200 ? ((await health.json()) as { status?: string }) : {};
  check("montaje responde healthz", health.status === 200 && healthBody.status === "ok", `status=${health.status}`);

  const listA = await server.app.request("/api/redes/v1/social/accounts", {
    headers: auth(tokenA),
  });
  const textA = await listA.text();
  const bodyA = JSON.parse(textA) as { accounts: Array<{ accountBindingId: string }> };
  check(
    "tenant A ve solo su cuenta",
    listA.status === 200 && bodyA.accounts.length === 1 && bodyA.accounts[0]?.accountBindingId === "acct-redes-a",
    `status=${listA.status} accounts=${bodyA.accounts.map((a) => a.accountBindingId).join(",")}`,
  );
  check("no filtra credentialRef", !textA.includes("credref-"), "sin credref en la respuesta");

  const listB = await server.app.request("/api/redes/v1/social/accounts", {
    headers: auth(tokenB),
  });
  const bodyB = (await listB.json()) as { accounts: Array<{ accountBindingId: string }> };
  check(
    "aislamiento por tenant",
    listB.status === 200 && bodyB.accounts.length === 1 && bodyB.accounts[0]?.accountBindingId === "acct-redes-b",
    `status=${listB.status} accounts=${bodyB.accounts.map((a) => a.accountBindingId).join(",")}`,
  );

  const listC = await server.app.request("/api/redes/v1/social/accounts", {
    headers: auth(tokenC),
  });
  check("sin capacidad responde 403", listC.status === 403, `status=${listC.status}`);

  const publication = await pkg.runPublicationVertical();
  check(
    "vertical publicación",
    publication.outcome === "ACCEPTED" &&
      publication.state === "PROVIDER_ACCEPTED" &&
      publication.crossTenantBlocked === true,
    `outcome=${publication.outcome} state=${publication.state}`,
  );

  const reconciliation = await pkg.runReconciliationVertical();
  check(
    "vertical resultado incierto",
    reconciliation.finalState === "PUBLISHED_CONFIRMED" && reconciliation.providerCalls === 1,
    `state=${reconciliation.finalState} calls=${reconciliation.providerCalls}`,
  );
} catch (error) {
  check("arranque", false, error instanceof Error ? error.message : String(error));
} finally {
  for (const fn of cleanup.reverse()) {
    try {
      await fn();
    } catch {
      // Limpieza best-effort: un fallo al cerrar no debe tapar el resultado.
    }
  }
  await rm(directory, { recursive: true, force: true }).catch(() => {});
}

const failed = checks.filter((entry) => !entry.ok);
let parentSha = "unknown";
try {
  parentSha = execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
} catch {
  // Fuera de un checkout: el SHA queda como desconocido, no se inventa.
}

const report = {
  result: failed.length === 0 ? "PASS" : "FAIL",
  command: "pnpm exec tsx scripts/verify-redes-install.ts",
  parent_sha: parentSha,
  environment: `${process.platform}-${process.arch} node ${process.version}`,
  checks,
};

if (reportPath !== null && reportPath !== undefined) {
  writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
}

if (json) {
  console.log(JSON.stringify(report, null, 2));
} else if (reportPath === null) {
  for (const entry of checks) {
    console.log(`[redes] ${entry.ok ? "OK  " : "FAIL"} ${entry.name}  ${entry.detail}`);
  }
  console.log(`\n[redes] ${checks.length - failed.length}/${checks.length} comprobaciones OK · sha ${parentSha}`);
}

process.exit(failed.length === 0 ? 0 : 1);
