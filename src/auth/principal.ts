import type { ActorKind, Capability } from "../contracts/index.js";

/**
 * Verificación del JWT de Supabase y resolución del principal (RDS-C03).
 *
 * Contrato transversal docs/architecture/04-twins-supabase-y-trazabilidad.md:
 * - Firma/issuer/audience/exp/nbf verificados; nada de "solo decodificar".
 * - `user_metadata.tenant_id` NO es autoridad: es editable por el usuario.
 * - Las capabilities proceden de la membresía verificada en servidor, no del token.
 * - Token de sesión, token de Anam y OAuth social son cosas distintas.
 */
import { createRemoteJWKSet, jwtVerify } from "jose";
import type { JWTVerifyGetKey, KeyLike } from "jose";
import { ActorKindSchema, PrincipalSchema, type Principal } from "../contracts/index.js";

/** Clave simétrica (desarrollo), clave asimétrica o JWKS remoto aprobado. */
export type VerifyKey = Uint8Array | KeyLike | JWTVerifyGetKey;

export interface SupabaseJwtOptions {
  key: VerifyKey;
  issuer: string;
  audience: string;
  algorithms?: string[];
  clockToleranceSeconds?: number;
}

export type AuthErrorCode =
  | "UNAUTHENTICATED"
  | "TENANT_CLAIM_MISSING"
  | "TENANT_CLAIM_CONFLICT"
  | "MEMBERSHIP_MISSING"
  | "MEMBERSHIP_INACTIVE"
  | "PRINCIPAL_MISMATCH";

export class AuthError extends Error {
  readonly code: AuthErrorCode;

  constructor(code: AuthErrorCode, message: string) {
    super(message);
    this.name = "AuthError";
    this.code = code;
  }
}

export interface VerifiedSupabaseClaims {
  sub: string;
  tenantId: string;
  issuer: string;
  audience: string[];
  expiresAt: number;
  notBefore: number | null;
  sessionRole: string | null;
}

function readTenantClaim(payload: Record<string, unknown>): {
  root: string | undefined;
  app: string | undefined;
} {
  const root = typeof payload["tenant_id"] === "string" ? payload["tenant_id"] : undefined;
  const appMetadata = payload["app_metadata"];
  const app =
    appMetadata && typeof appMetadata === "object" && !Array.isArray(appMetadata)
      ? (appMetadata as Record<string, unknown>)["tenant_id"]
      : undefined;
  return {
    root,
    app: typeof app === "string" ? app : undefined,
  };
}

export async function verifySupabaseJwt(
  token: string,
  options: SupabaseJwtOptions,
  now: Date = new Date(),
): Promise<VerifiedSupabaseClaims> {
  if (token.trim().length === 0) {
    throw new AuthError("UNAUTHENTICATED", "token ausente");
  }
  let payload: Record<string, unknown>;
  let protectedHeader: Record<string, unknown>;
  const verifyOptions = {
    issuer: options.issuer,
    audience: options.audience,
    algorithms: options.algorithms ?? ["HS256", "RS256", "ES256"],
    clockTolerance: options.clockToleranceSeconds ?? 5,
    currentDate: now,
  };
  try {
    // La clave puede ser un JWKS remoto (función) o una clave local.
    const key = options.key;
    const verified =
      typeof key === "function"
        ? await jwtVerify(token, key, verifyOptions)
        : await jwtVerify(token, key, verifyOptions);
    payload = verified.payload as Record<string, unknown>;
    protectedHeader = verified.protectedHeader as Record<string, unknown>;
  } catch {
    // No se propaga el error de la librería: puede incluir detalles de la firma.
    throw new AuthError("UNAUTHENTICATED", "token no verificado");
  }

  const sub = payload["sub"];
  if (typeof sub !== "string" || sub.length === 0) {
    throw new AuthError("UNAUTHENTICATED", "token sin sub");
  }

  const { root, app } = readTenantClaim(payload);
  if (root !== undefined && app !== undefined && root !== app) {
    throw new AuthError("TENANT_CLAIM_CONFLICT", "tenant_id y app_metadata.tenant_id difieren");
  }
  const tenantId = root ?? app;
  if (tenantId === undefined) {
    // No se acepta user_metadata.tenant_id como sustituto.
    throw new AuthError("TENANT_CLAIM_MISSING", "token sin claim de tenant verificado");
  }

  const expiresAt = typeof payload["exp"] === "number" ? payload["exp"] : 0;
  const notBefore = typeof payload["nbf"] === "number" ? payload["nbf"] : null;
  const audience = typeof payload["aud"] === "string" ? [payload["aud"]] : [];
  const sessionRole = typeof payload["role"] === "string" ? payload["role"] : null;

  void protectedHeader;

  return {
    sub,
    tenantId,
    issuer: typeof payload["iss"] === "string" ? payload["iss"] : "",
    audience,
    expiresAt,
    notBefore,
    sessionRole,
  };
}

export interface Membership {
  tenantId: string;
  actorId: string;
  actorKind: ActorKind;
  status: "active" | "suspended" | "revoked";
  capabilities: Capability[];
  roles: string[];
}

export interface MembershipStore {
  find(tenantId: string, actorId: string): Promise<Membership | null>;
}

export interface ResolvePrincipalInput {
  token: string;
  jwt: SupabaseJwtOptions;
  memberships: MembershipStore;
  requestId: string;
  now?: Date;
}

/**
 * Resuelve el principal real. Fail-closed en todos los caminos: sin claim de
 * tenant, sin membresía activa o con actor distinto no hay principal.
 */
export async function resolvePrincipal(input: ResolvePrincipalInput): Promise<Principal> {
  const claims = await verifySupabaseJwt(input.token, input.jwt, input.now);

  const membership = await input.memberships.find(claims.tenantId, claims.sub);
  if (membership === null) {
    throw new AuthError("MEMBERSHIP_MISSING", "sin membresía verificada para el tenant");
  }
  if (membership.status !== "active") {
    throw new AuthError("MEMBERSHIP_INACTIVE", `membresía ${membership.status}`);
  }
  if (membership.tenantId !== claims.tenantId || membership.actorId !== claims.sub) {
    throw new AuthError("PRINCIPAL_MISMATCH", "la membresía no corresponde al token");
  }

  const principal = PrincipalSchema.parse({
    tenantId: membership.tenantId,
    actorId: membership.actorId,
    actorKind: ActorKindSchema.parse(membership.actorKind),
    // Nunca desde el token: solo desde el registro de membresías.
    capabilities: membership.capabilities,
    requestId: input.requestId,
  });

  return principal;
}

export function remoteJwks(url: URL | string): VerifyKey {
  return createRemoteJWKSet(new URL(url));
}
