import { Hono } from "hono";
import { apiError, type Principal } from "../contracts/index.js";
import type { AccountRegistry } from "../connections/registry.js";
import { accountsRoute, type ApiEnv } from "./routes/accounts.js";

export interface ApiDependencies {
  /** Verifica el bearer y devuelve el principal; lanza si no es válido. */
  authenticate(authorizationHeader: string | undefined): Promise<Principal>;
  accounts: AccountRegistry;
}

/**
 * App Hono instalable en el host (`parent.route("/redes", createApp(...))`).
 * El host inyecta `authenticate` con su sesión verificada; este servicio no
 * acepta tenant, actor ni capacidades de la petición.
 */
export function createApp(deps: ApiDependencies): Hono<ApiEnv> {
  const app = new Hono<ApiEnv>();

  app.get("/healthz", (c) => c.json({ status: "ok", service: "agntia-redes" }));

  app.use("/v1/*", async (c, next) => {
    try {
      const principal = await deps.authenticate(c.req.header("authorization"));
      c.set("principal", principal);
    } catch {
      const error = apiError("UNAUTHENTICATED", { message: "no autenticado" });
      return new Response(JSON.stringify(error.body), {
        status: error.status,
        headers: { "content-type": "application/json" },
      });
    }
    await next();
  });

  app.route("/", accountsRoute(deps.accounts));

  app.notFound((c) => {
    const error = apiError("NOT_FOUND", { message: "recurso no encontrado" });
    return new Response(JSON.stringify(error.body), {
      status: error.status,
      headers: { "content-type": "application/json" },
    });
  });

  return app;
}
