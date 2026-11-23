import { Hono } from "hono";
import { authorize } from "../../auth/policy.js";
import { apiError, type Principal } from "../../contracts/index.js";
import { toPublicBinding, type AccountRegistry } from "../../connections/registry.js";

export interface ApiEnv {
  Variables: {
    principal: Principal;
  };
}

function errorResponse(code: Parameters<typeof apiError>[0], message: string): Response {
  const error = apiError(code, { message });
  return new Response(JSON.stringify(error.body), {
    status: error.status,
    headers: { "content-type": "application/json" },
  });
}

export function accountsRoute(registry: AccountRegistry): Hono<ApiEnv> {
  const route = new Hono<ApiEnv>();

  route.get("/v1/social/accounts", (c) => {
    const principal = c.get("principal");
    const decision = authorize({ principal, capability: "social.account.health" });
    if (!decision.allowed) {
      return errorResponse(
        decision.code === "MISSING_CAPABILITY" ? "FORBIDDEN" : "NOT_FOUND",
        "no autorizado",
      );
    }
    // El tenant sale del principal verificado, nunca de query/body.
    const accounts = registry.listForTenant(principal.tenantId).map(toPublicBinding);
    return c.json({ accounts });
  });

  return route;
}
