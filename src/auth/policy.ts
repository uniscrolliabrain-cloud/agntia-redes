import {
  CAPABILITIES,
  HUMAN_ONLY_CAPABILITIES,
  type Capability,
  type Principal,
} from "../contracts/index.js";

/**
 * Policy Enforcement Point único (RDS-C03).
 * Un solo PEP para SDK, API, MCP, visio y worker; deny-by-default.
 */

export type PolicyDenyCode =
  | "UNKNOWN_CAPABILITY"
  | "MISSING_CAPABILITY"
  | "TENANT_MISMATCH"
  | "HUMAN_ONLY"
  | "SELF_APPROVAL";

export type PolicyDecision =
  | { readonly allowed: true }
  | { readonly allowed: false; readonly code: PolicyDenyCode };

export interface ResourceScope {
  readonly kind: "account" | "draft" | "intent" | "report" | "inbox" | "agreement";
  readonly id: string;
  readonly tenantId: string;
  readonly ownerActorId?: string;
}

export interface AuthorizeInput {
  readonly principal: Principal;
  readonly capability: Capability;
  readonly resource?: ResourceScope;
}

const KNOWN = new Set<string>(CAPABILITIES);

export function authorize(input: AuthorizeInput): PolicyDecision {
  const { principal, capability, resource } = input;

  if (!KNOWN.has(capability)) {
    return { allowed: false, code: "UNKNOWN_CAPABILITY" };
  }

  if (!principal.capabilities.includes(capability)) {
    return { allowed: false, code: "MISSING_CAPABILITY" };
  }

  if (resource !== undefined && resource.tenantId !== principal.tenantId) {
    return { allowed: false, code: "TENANT_MISMATCH" };
  }

  if (HUMAN_ONLY_CAPABILITIES.has(capability) && principal.actorKind !== "human") {
    return { allowed: false, code: "HUMAN_ONLY" };
  }

  return { allowed: true };
}

export class PolicyError extends Error {
  readonly code: PolicyDenyCode;

  constructor(code: PolicyDenyCode) {
    super(`policy denied: ${code}`);
    this.name = "PolicyError";
    this.code = code;
  }
}

export function requireAllowed(decision: PolicyDecision): void {
  if (!decision.allowed) {
    throw new PolicyError(decision.code);
  }
}

/**
 * Separación de funciones: quien propone un efecto sensible no puede firmarlo.
 * Un agente nunca aprueba, ni siquiera su propio borrador.
 */
export function assertSeparateSigner(input: {
  proposerActorId: string;
  approverActorId: string;
}): void {
  if (input.proposerActorId === input.approverActorId) {
    throw new PolicyError("SELF_APPROVAL");
  }
}
