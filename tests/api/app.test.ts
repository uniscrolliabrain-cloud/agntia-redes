import { describe, expect, it } from "vitest";
import { createApp } from "../../apps/api/src/app.js";
import { HostBridgeError } from "../../src/bridge/host.js";
import { AccountRegistry } from "../../src/connections/registry.js";
import type { Capability, Principal } from "../../src/contracts/index.js";

function registry(): AccountRegistry {
  const accounts = new AccountRegistry();
  accounts.register({
    accountBindingId: "acct-a",
    tenantId: "tenant-a",
    brandRef: "brand-a",
    provider: "mastodon",
    remoteAccountId: "remote-a",
    remoteWorkspaceId: null,
    credentialRef: "cred_secret_a",
    revision: 1,
    state: "connected",
    lastVerifiedAt: "2026-11-15T09:00:00Z",
  });
  accounts.register({
    accountBindingId: "acct-b",
    tenantId: "tenant-b",
    brandRef: "brand-b",
    provider: "mastodon",
    remoteAccountId: "remote-b",
    remoteWorkspaceId: null,
    credentialRef: "cred_secret_b",
    revision: 1,
    state: "connected",
    lastVerifiedAt: "2026-11-15T09:00:00Z",
  });
  return accounts;
}

function principalWith(capabilities: Capability[]): Principal {
  return {
    tenantId: "tenant-a",
    actorId: "actor-1",
    actorKind: "human",
    capabilities,
    requestId: "req-api",
  };
}

function appWith(principal: Principal | null) {
  return createApp({
    authenticate: async ({ authorization }) => {
      if (authorization !== "Bearer good" || principal === null) {
        throw new Error("no autenticado");
      }
      return principal;
    },
    accounts: registry(),
  });
}

describe("API Hono", () => {
  it("expone salud sin autenticación", async () => {
    const app = appWith(null);
    const response = await app.request("/healthz");
    expect(response.status).toBe(200);
  });

  it("responde 401 sin bearer válido", async () => {
    const app = appWith(null);
    const response = await app.request("/v1/social/accounts");
    expect(response.status).toBe(401);
    const body = (await response.json()) as { code: string };
    expect(body.code).toBe("UNAUTHENTICATED");
  });

  it("responde 403 sin la capability requerida", async () => {
    const app = appWith(principalWith([]));
    const response = await app.request("/v1/social/accounts", {
      headers: { authorization: "Bearer good" },
    });
    expect(response.status).toBe(403);
  });

  it("recibe el contexto del host y distingue escalada (403) de sesión ausente (401)", async () => {
    const seen: unknown[] = [];
    const app = createApp({
      authenticate: async ({ host, request }) => {
        seen.push(host, request);
        throw new HostBridgeError("HOST_CAPABILITY_ESCALATION", "capacidad fuera de la membresía");
      },
      accounts: registry(),
    });

    const response = await app.request("/v1/social/accounts", {
      headers: { authorization: "Bearer good" },
    });
    expect(response.status).toBe(403);
    const body = (await response.json()) as { code: string };
    expect(body.code).toBe("FORBIDDEN");
    // El host recibe su propio contexto de petición, no solo la cabecera.
    expect(seen).toHaveLength(2);
    expect(seen.every((value) => value !== undefined && value !== null)).toBe(true);
  });

  it("devuelve solo las cuentas del tenant verificado y sin credenciales", async () => {
    const app = appWith(principalWith(["social.account.health"]));
    const response = await app.request("/v1/social/accounts", {
      headers: { authorization: "Bearer good" },
    });

    expect(response.status).toBe(200);
    const text = await response.text();
    const body = JSON.parse(text) as { accounts: Array<{ accountBindingId: string }> };
    expect(body.accounts.map((account) => account.accountBindingId)).toEqual(["acct-a"]);
    expect(text).not.toContain("cred_secret");
  });
});
