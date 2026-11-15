import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import {
  completeAuthorization,
  createAuthorizationRequest,
  InMemoryOAuthStateStore,
  OAuthError,
} from "../../src/connections/oauth.js";
import { AccountRegistry, AccountRegistryError, toPublicBinding } from "../../src/connections/registry.js";

const allowlist = ["https://app.example.test/oauth/callback"];

describe("conexión OAuth", () => {
  it("genera PKCE S256 y un state de un solo uso", () => {
    const stateStore = new InMemoryOAuthStateStore();
    const request = createAuthorizationRequest(
      {
        authorizeEndpoint: "https://social.example.test/oauth/authorize",
        clientId: "client-1",
        redirectUri: allowlist[0] as string,
        scopes: ["write:statuses"],
        stateStore,
      },
      allowlist,
    );

    const url = new URL(request.url);
    const expectedChallenge = createHash("sha256").update(request.verifier).digest("base64url");
    expect(url.searchParams.get("code_challenge")).toBe(expectedChallenge);
    expect(url.searchParams.get("code_challenge_method")).toBe("S256");
    expect(url.searchParams.get("state")).toBe(request.state);

    completeAuthorization({ state: request.state, stateStore });
    expect(() => completeAuthorization({ state: request.state, stateStore })).toThrow(OAuthError);
  });

  it("rechaza redirects fuera de la allowlist", () => {
    const stateStore = new InMemoryOAuthStateStore();
    expect(() =>
      createAuthorizationRequest(
        {
          authorizeEndpoint: "https://social.example.test/oauth/authorize",
          clientId: "client-1",
          redirectUri: "https://evil.test/callback",
          scopes: ["write:statuses"],
          stateStore,
        },
        allowlist,
      ),
    ).toThrow(OAuthError);
  });
});

describe("registro de cuentas", () => {
  const binding = {
    accountBindingId: "acct-1",
    tenantId: "tenant-a",
    brandRef: "brand-1",
    provider: "mastodon",
    remoteAccountId: "remote-1",
    remoteWorkspaceId: null,
    credentialRef: "cred_opaque_ref",
    revision: 1,
    state: "connected" as const,
    lastVerifiedAt: "2026-11-15T09:00:00Z",
  };

  it("no expone la referencia de credencial", () => {
    const publicBinding = toPublicBinding(binding);
    expect(JSON.stringify(publicBinding)).not.toContain("cred_opaque_ref");
  });

  it("una cuenta revocada falla cerrado y no cae a otra cuenta", () => {
    const registry = new AccountRegistry();
    registry.register(binding);
    registry.revoke("tenant-a", "acct-1");
    expect(() => registry.assertActive("tenant-a", "acct-1")).toThrow(AccountRegistryError);
    // Otro tenant no ve la cuenta ni por ID.
    expect(() => registry.assertActive("tenant-b", "acct-1")).toThrow(AccountRegistryError);
    expect(registry.listForTenant("tenant-b")).toHaveLength(0);
  });
});
