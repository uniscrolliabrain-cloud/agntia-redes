// REDES_HOST_ADAPTER_V1 — instalado por agntia-redes.
// Destino: apps/server/src/redes-host.ts (repo `agente`).
//
// Monta el servicio social bajo /api/redes reutilizando el `ctx` que el
// middleware de apps/server/src/app.ts YA resolvió (tenant, actor, requestId).
// Este adaptador no vuelve a verificar el token, no lee tenant de la petición y
// no concede capacidades por rol: la allowlist es explícita y fail-closed.

import { AccountRegistry, CAPABILITIES, type Capability, createApp, deriveHostPrincipal } from "agntia-redes";
import type { Context, Env, Hono, Schema } from "hono";

export const REDES_MOUNT_PATH = "/api/redes";

/** Forma mínima del Actor del padre que este adaptador consume. */
export interface HostActor {
  readonly kind: "human" | "agent";
  readonly id: string;
  readonly tenantId: string;
  readonly userId?: string;
  readonly roles?: readonly string[];
}

/** Variables que el middleware de app.ts deja en el contexto de Hono. */
interface HostVariables {
  ctx?: {
    readonly tenantId: string;
    readonly actor: HostActor;
    readonly requestId?: string;
  };
  owner?: string;
}

export interface RedesMountOptions {
  /** Registro de cuentas del host; vacío si aún no hay cuentas conectadas. */
  readonly accounts?: AccountRegistry;
  /**
   * Techo de capacidades de la membresía verificada para este actor. Es la
   * única fuente de permisos: un rol (`admin`, `owner`) no concede nada aquí.
   */
  membershipCapabilitiesFor(actor: HostActor): readonly Capability[];
  /** Capacidades concedidas a la petición; por defecto, el techo completo. */
  capabilitiesFor?(actor: HostActor, ceiling: readonly Capability[]): readonly Capability[];
  /** Audiencia del servicio social. Por defecto `agente`. */
  readonly audience?: string;
}

/**
 * Router listo para montar. Espera ejecutarse detrás del middleware de app.ts:
 * sin `ctx` verificado responde 401 en vez de inventar identidad.
 */
export function createRedesApp(options: RedesMountOptions) {
  return createApp({
    accounts: options.accounts ?? new AccountRegistry(),
    authenticate: async ({ host }) => {
      const c = host as Context<{ Variables: HostVariables }>;
      const verified = c.get("ctx");
      if (verified === undefined || verified.actor === undefined) {
        throw new Error("REDES_SIN_CTX_VERIFICADO: /api/redes debe montarse detrás del middleware de app.ts");
      }
      const ceiling = options.membershipCapabilitiesFor(verified.actor);
      const granted = options.capabilitiesFor?.(verified.actor, ceiling) ?? ceiling;
      const requestId =
        verified.requestId !== undefined && verified.requestId.length > 0
          ? verified.requestId
          : `req-redes-${Date.now()}`;
      return deriveHostPrincipal(
        {
          tenantId: verified.tenantId,
          actorId: verified.actor.id,
          actorKind: verified.actor.kind,
          capabilities: [...granted],
          requestId,
        },
        { membershipCapabilities: ceiling, audience: options.audience ?? "agente" },
      );
    },
  });
}

/** Monta el router en el path canónico del padre. */
export function mountRedes<E extends Env, S extends Schema, P extends string>(
  app: Hono<E, S, P>,
  options: RedesMountOptions,
): void {
  app.route(REDES_MOUNT_PATH, createRedesApp(options));
}

const KNOWN = new Set<string>(CAPABILITIES);

/**
 * Lista separada por comas -> capacidades del catálogo. Un valor desconocido
 * aborta el arranque en vez de conceder algo que el servicio no entiende.
 */
export function parseRedesCapabilities(raw: string | undefined): readonly Capability[] {
  if (raw === undefined || raw.trim() === "") return [];
  const values = raw
    .split(",")
    .map((value) => value.trim())
    .filter((value) => value.length > 0);
  for (const value of values) {
    if (!KNOWN.has(value)) {
      throw new Error(`REDES_CAPABILITY_DESCONOCIDA: ${value}`);
    }
  }
  return values as readonly Capability[];
}

/**
 * Montaje por entorno para apps/server/src/index.ts:
 *   REDES_ENABLED=1
 *   REDES_CAPABILITIES=social.account.health,social.publication.status
 * Sin `REDES_ENABLED=1` no se monta nada y el host arranca igual que antes.
 */
export function mountRedesFromEnv<E extends Env, S extends Schema, P extends string>(app: Hono<E, S, P>): boolean {
  if (process.env.REDES_ENABLED !== "1") return false;

  const capabilities = parseRedesCapabilities(process.env.REDES_CAPABILITIES);
  mountRedes(app, {
    membershipCapabilitiesFor: () => capabilities,
    capabilitiesFor: () => capabilities,
    ...(process.env.REDES_AUDIENCE ? { audience: process.env.REDES_AUDIENCE } : {}),
  });
  console.log(`[redes] montado en ${REDES_MOUNT_PATH} · ${capabilities.length} capacidad(es) · proveedor fake`);
  if (capabilities.length === 0) {
    console.warn("[redes] REDES_ENABLED=1 sin REDES_CAPABILITIES: las rutas /v1 responderán 403 (deny-by-default)");
  }
  return true;
}
