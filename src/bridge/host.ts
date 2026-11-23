import { z } from "zod";
import {
  ActorKindSchema,
  CAPABILITIES,
  OpaqueIdSchema,
  PrincipalSchema,
  type Capability,
  type Principal,
} from "../contracts/index.js";

/**
 * Puente host → middleware (instalación en `/agente`).
 *
 * El host ya verificó la sesión (JWT Supabase + membresía + PDP). Este módulo
 * convierte ese contexto en el `Principal` del servicio sin aceptar identidad
 * del modelo ni escalar capacidades por encima de la membresía. No firma nada:
 * el descriptor de servicio lo firma el host con su propia custodia de claves.
 */

export type HostBridgeErrorCode =
  | "HOST_CONTEXT_INVALID"
  | "HOST_CAPABILITY_UNKNOWN"
  | "HOST_CAPABILITY_ESCALATION"
  | "HOST_MODEL_IDENTITY";

export class HostBridgeError extends Error {
  readonly code: HostBridgeErrorCode;

  constructor(code: HostBridgeErrorCode, message: string) {
    super(message);
    this.name = "HostBridgeError";
    this.code = code;
  }
}

const KNOWN_CAPABILITIES = new Set<string>(CAPABILITIES);

const HostContextSchema = z
  .object({
    tenantId: OpaqueIdSchema,
    actorId: OpaqueIdSchema,
    actorKind: ActorKindSchema,
    capabilities: z.array(z.string().min(1).max(120)),
    requestId: OpaqueIdSchema,
    ownerActorId: OpaqueIdSchema.optional(),
  })
  .strict();

export interface HostBridgePolicy {
  /** Capacidades de la membresía ya verificada en el host. */
  readonly membershipCapabilities: readonly Capability[];
  /** Audiencia del servicio social (host, no navegador). */
  readonly audience: string;
}

/**
 * Deriva el principal del servicio desde el contexto verificado del host.
 * Fail-closed: contexto incompleto, capacidad desconocida o capacidad fuera de
 * la membresía no producen principal.
 */
export function deriveHostPrincipal(context: unknown, policy: HostBridgePolicy): Principal {
  const parsed = HostContextSchema.safeParse(context);
  if (!parsed.success) {
    throw new HostBridgeError("HOST_CONTEXT_INVALID", "contexto del host incompleto o inválido");
  }
  if (policy.audience.trim().length === 0) {
    throw new HostBridgeError("HOST_CONTEXT_INVALID", "audiencia del servicio vacía");
  }

  const capabilities: Capability[] = [];
  for (const raw of parsed.data.capabilities) {
    if (!KNOWN_CAPABILITIES.has(raw)) {
      throw new HostBridgeError("HOST_CAPABILITY_UNKNOWN", `capacidad desconocida: ${raw}`);
    }
    const capability = raw as Capability;
    if (!policy.membershipCapabilities.includes(capability)) {
      throw new HostBridgeError(
        "HOST_CAPABILITY_ESCALATION",
        `capacidad fuera de la membresía: ${raw}`,
      );
    }
    capabilities.push(capability);
  }

  return PrincipalSchema.parse({
    tenantId: parsed.data.tenantId,
    actorId: parsed.data.actorId,
    actorKind: parsed.data.actorKind,
    capabilities,
    requestId: parsed.data.requestId,
  });
}

const IDENTITY_ARGUMENT_KEYS = [
  "tenantId",
  "tenant_id",
  "actorId",
  "actor_id",
  "actorKind",
  "actor_kind",
  "capabilities",
  "requestId",
  "request_id",
  "owner",
  "ownerActorId",
] as const;

/**
 * Los argumentos que redacta el modelo no conceden identidad. Llamar a esta
 * comprobación antes de despachar una tool evita que un payload elegido por el
 * LLM fije tenant, actor o capacidades.
 */
export function assertModelCannotSupplyIdentity(modelArgs: Record<string, unknown>): void {
  for (const key of IDENTITY_ARGUMENT_KEYS) {
    if (Object.prototype.hasOwnProperty.call(modelArgs, key)) {
      throw new HostBridgeError(
        "HOST_MODEL_IDENTITY",
        `argumento de identidad no permitido desde el modelo: ${key}`,
      );
    }
  }
}

export interface ScopedServiceDescriptor {
  readonly domain: "redes";
  readonly audience: string;
  readonly tenantId: string;
  readonly actorId: string;
  readonly capabilities: readonly Capability[];
}

/**
 * Descriptor acotado de la credencial de servicio. El host decide formato,
 * firma y custodia; aquí solo se comprueba que no pide más de lo concedido.
 */
export function scopedServiceDescriptor(
  principal: Principal,
  options: { readonly audience: string; readonly capabilities?: readonly Capability[] },
): ScopedServiceDescriptor {
  if (options.audience.trim().length === 0) {
    throw new HostBridgeError("HOST_CONTEXT_INVALID", "audiencia del servicio vacía");
  }
  const requested = options.capabilities ?? principal.capabilities;
  for (const capability of requested) {
    if (!principal.capabilities.includes(capability)) {
      throw new HostBridgeError(
        "HOST_CAPABILITY_ESCALATION",
        `capacidad no concedida al principal: ${capability}`,
      );
    }
  }
  return {
    domain: "redes",
    audience: options.audience,
    tenantId: principal.tenantId,
    actorId: principal.actorId,
    capabilities: requested,
  };
}
