import { SignJWT } from "jose";
import { describe, expect, it } from "vitest";
import {
  AuthError,
  resolvePrincipal,
  type Membership,
  type MembershipStore,
  type SupabaseJwtOptions,
} from "../../src/auth/principal.js";
import { assertSeparateSigner, authorize, PolicyError } from "../../src/auth/policy.js";
import type { Capability, Principal } from "../../src/contracts/index.js";

const SECRET = new TextEncoder().encode("unit-test-secret-unit-test-secret-32");
const ISSUER = "https://project.supabase.test/auth/v1";
const AUDIENCE = "agntia-redes";

const jwtOptions: SupabaseJwtOptions = {
  key: SECRET,
  issuer: ISSUER,
  audience: AUDIENCE,
  algorithms: ["HS256"],
};

async function sign(payload: Record<string, unknown>, options: { issuer?: string; expiresIn?: number } = {}) {
  const now = Math.floor(Date.now() / 1000);
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuer(options.issuer ?? ISSUER)
    .setAudience(AUDIENCE)
    .setSubject(typeof payload["sub"] === "string" ? (payload["sub"] as string) : "actor-1")
    .setIssuedAt(now)
    .setExpirationTime(now + (options.expiresIn ?? 300))
    .sign(SECRET);
}

function membershipStore(membership: Membership | null): MembershipStore {
  return { find: async () => membership };
}

const activeAgent: Membership = {
  tenantId: "tenant-a",
  actorId: "actor-1",
  actorKind: "agent",
  status: "active",
  capabilities: ["social.draft.propose", "social.publication.execute"],
  roles: ["editor"],
};

async function expectAuthError(promise: Promise<unknown>, code: string) {
  await expect(promise).rejects.toBeInstanceOf(AuthError);
  await promise.catch((error: unknown) => {
    expect((error as AuthError).code).toBe(code);
  });
}

describe("identidad y tenancy", () => {
  it("resuelve principal con claims y membresía verificados", async () => {
    const token = await sign({ tenant_id: "tenant-a", role: "authenticated" });
    const principal = await resolvePrincipal({
      token,
      jwt: jwtOptions,
      memberships: membershipStore(activeAgent),
      requestId: "req-1",
    });

    expect(principal.tenantId).toBe("tenant-a");
    expect(principal.actorKind).toBe("agent");
    expect(principal.capabilities).toEqual(activeAgent.capabilities);
  });

  it("ignora capabilities escritas en el token", async () => {
    const token = await sign({
      tenant_id: "tenant-a",
      capabilities: ["social.admin.provider", "social.approval.grant"],
    });
    const principal = await resolvePrincipal({
      token,
      jwt: jwtOptions,
      memberships: membershipStore(activeAgent),
      requestId: "req-2",
    });
    expect(principal.capabilities).not.toContain("social.admin.provider");
  });

  it("rechaza token expirado", async () => {
    const token = await sign({ tenant_id: "tenant-a" }, { expiresIn: -60 });
    await expectAuthError(
      resolvePrincipal({ token, jwt: jwtOptions, memberships: membershipStore(activeAgent), requestId: "r" }),
      "UNAUTHENTICATED",
    );
  });

  it("rechaza issuer distinto al configurado", async () => {
    const token = await sign({ tenant_id: "tenant-a" }, { issuer: "https://evil.test" });
    await expectAuthError(
      resolvePrincipal({ token, jwt: jwtOptions, memberships: membershipStore(activeAgent), requestId: "r" }),
      "UNAUTHENTICATED",
    );
  });

  it("no acepta user_metadata como claim de tenant", async () => {
    const token = await sign({ user_metadata: { tenant_id: "tenant-a" } });
    await expectAuthError(
      resolvePrincipal({ token, jwt: jwtOptions, memberships: membershipStore(activeAgent), requestId: "r" }),
      "TENANT_CLAIM_MISSING",
    );
  });

  it("rechaza claims de tenant contradictorios", async () => {
    const token = await sign({ tenant_id: "tenant-a", app_metadata: { tenant_id: "tenant-b" } });
    await expectAuthError(
      resolvePrincipal({ token, jwt: jwtOptions, memberships: membershipStore(activeAgent), requestId: "r" }),
      "TENANT_CLAIM_CONFLICT",
    );
  });

  // Caso nombrado del gate RDS-C03-G02: la membresía ausente/inactiva falla cerrado, nunca a owner/default.
  it("RDS-C03-G02 · falla cerrado sin membresía o con membresía suspendida", async () => {
    const token = await sign({ tenant_id: "tenant-a" });
    await expectAuthError(
      resolvePrincipal({ token, jwt: jwtOptions, memberships: membershipStore(null), requestId: "r" }),
      "MEMBERSHIP_MISSING",
    );
    await expectAuthError(
      resolvePrincipal({
        token,
        jwt: jwtOptions,
        memberships: membershipStore({ ...activeAgent, status: "suspended" }),
        requestId: "r",
      }),
      "MEMBERSHIP_INACTIVE",
    );
  });
});

describe("policy enforcement point", () => {
  const agent: Principal = {
    tenantId: "tenant-a",
    actorId: "actor-1",
    actorKind: "agent",
    capabilities: ["social.draft.propose", "social.publication.execute"] as Capability[],
    requestId: "req-1",
  };
  const human: Principal = {
    ...agent,
    actorId: "human-1",
    actorKind: "human",
    capabilities: ["social.approval.grant", "social.account.health"],
  };

  it("deniega por defecto sin capability", () => {
    expect(authorize({ principal: agent, capability: "social.report.read" })).toEqual({
      allowed: false,
      code: "MISSING_CAPABILITY",
    });
  });

  // Caso nombrado del gate RDS-C03-G01: no se accede a un recurso de otro tenant.
  it("RDS-C03-G01 · deniega recursos de otro tenant", () => {
    expect(
      authorize({
        principal: agent,
        capability: "social.draft.propose",
        resource: { kind: "draft", id: "draft-1", tenantId: "tenant-b" },
      }),
    ).toEqual({ allowed: false, code: "TENANT_MISMATCH" });
  });

  it("un agente no aprueba ni conecta credenciales", () => {
    const privileged: Principal = { ...agent, capabilities: ["social.approval.grant", "social.credentials.connect"] };
    expect(authorize({ principal: privileged, capability: "social.approval.grant" })).toEqual({
      allowed: false,
      code: "HUMAN_ONLY",
    });
    expect(authorize({ principal: privileged, capability: "social.credentials.connect" })).toEqual({
      allowed: false,
      code: "HUMAN_ONLY",
    });
    expect(authorize({ principal: human, capability: "social.approval.grant" }).allowed).toBe(true);
  });

  it("no admite autoaprobación", () => {
    expect(() =>
      assertSeparateSigner({ proposerActorId: "actor-1", approverActorId: "actor-1" }),
    ).toThrow(PolicyError);
    expect(() =>
      assertSeparateSigner({ proposerActorId: "actor-1", approverActorId: "human-1" }),
    ).not.toThrow();
  });
});
