import { Hono } from "hono";
import { describe, expect, it } from "vitest";
import { createApp } from "../../src/api/app.js";
import {
  HostBridgeError,
  assertModelCannotSupplyIdentity,
  deriveHostPrincipal,
  scopedServiceDescriptor,
  type HostBridgePolicy,
} from "../../src/bridge/host.js";
import { AccountRegistry } from "../../src/connections/registry.js";
import type { Capability } from "../../src/contracts/index.js";

const context = {
  tenantId: "tenant-host",
  actorId: "actor-host",
  actorKind: "human" as const,
  capabilities: ["social.account.health"],
  requestId: "req-host",
};

const policy: HostBridgePolicy = {
  membershipCapabilities: ["social.account.health"],
  audience: "agente",
};

function expectHostCode(fn: () => unknown, code: string): void {
  try {
    fn();
  } catch (error) {
    expect(error).toBeInstanceOf(HostBridgeError);
    expect((error as HostBridgeError).code).toBe(code);
    return;
  }
  throw new Error(`se esperaba HostBridgeError ${code}`);
}

function registry(): AccountRegistry {
  const accounts = new AccountRegistry();
  accounts.register({
    accountBindingId: "acct-host",
    tenantId: "tenant-host",
    brandRef: "brand-host",
    provider: "mastodon",
    remoteAccountId: "remote-host",
    remoteWorkspaceId: null,
    credentialRef: "credref-host",
    revision: 1,
    state: "connected",
    lastVerifiedAt: "2026-11-23T08:00:00Z",
  });
  accounts.register({
    accountBindingId: "acct-other",
    tenantId: "tenant-other",
    brandRef: "brand-other",
    provider: "mastodon",
    remoteAccountId: "remote-other",
    remoteWorkspaceId: null,
    credentialRef: "credref-other",
    revision: 1,
    state: "connected",
    lastVerifiedAt: "2026-11-23T08:00:00Z",
  });
  return accounts;
}

describe("bridge host → servicio", () => {
  it("deriva el principal del contexto verificado y conserva la audiencia", () => {
    const principal = deriveHostPrincipal(context, policy);
    expect(principal.tenantId).toBe("tenant-host");
    expect(principal.actorId).toBe("actor-host");
    expect(principal.capabilities).toEqual(["social.account.health"]);

    const descriptor = scopedServiceDescriptor(principal, { audience: "agente" });
    expect(descriptor).toEqual({
      domain: "redes",
      audience: "agente",
      tenantId: "tenant-host",
      actorId: "actor-host",
      capabilities: ["social.account.health"],
    });
  });

  it("falla cerrado sin contexto válido, con capacidad desconocida o ajena a la membresía", () => {
    expectHostCode(
      () => deriveHostPrincipal({ ...context, tenantId: "" }, policy),
      "HOST_CONTEXT_INVALID",
    );
    expectHostCode(
      () =>
        deriveHostPrincipal(
          { ...context, capabilities: ["social.nope"] },
          { ...policy, membershipCapabilities: ["social.nope" as Capability] },
        ),
      "HOST_CAPABILITY_UNKNOWN",
    );
    expectHostCode(
      () =>
        deriveHostPrincipal(
          { ...context, capabilities: ["social.publication.execute"] },
          policy,
        ),
      "HOST_CAPABILITY_ESCALATION",
    );
    expectHostCode(
      () => scopedServiceDescriptor(deriveHostPrincipal(context, policy), {
        audience: "agente",
        capabilities: ["social.publication.execute"],
      }),
      "HOST_CAPABILITY_ESCALATION",
    );
  });

  it("no acepta identidad redactada por el modelo", () => {
    expectModelArgs({ texto: "hola" });
    expectHostCode(
      () => assertModelCannotSupplyIdentity({ text: "hola", tenantId: "tenant-evil" }),
      "HOST_MODEL_IDENTITY",
    );
    expectHostCode(
      () => assertModelCannotSupplyIdentity({ capabilities: ["social.remote.delete"] }),
      "HOST_MODEL_IDENTITY",
    );
  });

  it("se monta bajo un prefijo del host y no filtra credenciales", async () => {
    const parent = new Hono();
    parent.route(
      "/redes",
      createApp({
        authenticate: async ({ authorization }) => {
          if (authorization !== "Bearer host-session") throw new Error("no autenticado");
          return deriveHostPrincipal(context, policy);
        },
        accounts: registry(),
      }),
    );

    const unauthorized = await parent.request("/redes/v1/social/accounts");
    expect(unauthorized.status).toBe(401);

    const response = await parent.request("/redes/v1/social/accounts", {
      headers: { authorization: "Bearer host-session" },
    });
    expect(response.status).toBe(200);

    const text = await response.text();
    const body = JSON.parse(text) as { accounts: Array<{ accountBindingId: string }> };
    expect(body.accounts.map((account) => account.accountBindingId)).toEqual(["acct-host"]);
    expect(text).not.toContain("credref-");
  });
});

function expectModelArgs(args: Record<string, unknown>): void {
  expect(() => assertModelCannotSupplyIdentity(args)).not.toThrow();
}
