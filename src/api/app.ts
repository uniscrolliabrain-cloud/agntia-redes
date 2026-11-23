import { Hono } from "hono";
import { HostBridgeError } from "../bridge/host.js";
import { apiError, type Principal } from "../contracts/index.js";
import type { AccountRegistry } from "../connections/registry.js";
import { accountsRoute, type ApiEnv } from "./routes/accounts.js";

/**
 * Contexto de autenticación que recibe el host.
 *
 * `host` es el contexto del framework cuando la app se monta dentro del router
 * del padre (en Hono, el `Context` de la petición). Así el host reutiliza la
 * sesión, el tenant y el actor que YA verificó su middleware, en vez de que este
 * servicio repita la resolución de identidad.
 */
export interface ApiAuthContext {
  readonly authorization: string | undefined;
  readonly request: Request;
  readonly host: unknown;
}

export interface ApiDependencies {
  /** Verifica el bearer (o lee el contexto del host) y devuelve el principal. */
  authenticate(context: ApiAuthContext): Promise<Principal>;
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
      const principal = await deps.authenticate({
        authorization: c.req.header("authorization"),
        request: c.req.raw,
        host: c,
      });
      c.set("principal", principal);
    } catch (error) {
      // Una escalada de capacidad es una sesión válida sin permiso, no una
      // sesión ausente: el cliente necesita distinguir 403 de 401.
      const denied =
        error instanceof HostBridgeError &&
        (error.code === "HOST_CAPABILITY_ESCALATION" ||
          error.code === "HOST_CAPABILITY_UNKNOWN");
      const failure = apiError(denied ? "FORBIDDEN" : "UNAUTHENTICATED", {
        message: denied ? "capacidad no concedida" : "no autenticado",
      });
      return new Response(JSON.stringify(failure.body), {
        status: failure.status,
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
