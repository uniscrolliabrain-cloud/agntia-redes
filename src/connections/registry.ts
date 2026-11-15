/**
 * Registro de cuentas conectadas (RDS-C07).
 * `credentialRef` es una referencia opaca: nunca se devuelve al navegador ni al modelo.
 */

export type AccountState = "connected" | "degraded" | "revoked";

export interface AccountBinding {
  readonly accountBindingId: string;
  readonly tenantId: string;
  readonly brandRef: string;
  readonly provider: string;
  readonly remoteAccountId: string;
  readonly remoteWorkspaceId: string | null;
  readonly credentialRef: string;
  readonly revision: number;
  readonly state: AccountState;
  readonly lastVerifiedAt: string;
}

export type AccountRegistryErrorCode = "ACCOUNT_NOT_FOUND" | "ACCOUNT_REVOKED" | "ACCOUNT_DEGRADED";

export class AccountRegistryError extends Error {
  readonly code: AccountRegistryErrorCode;

  constructor(code: AccountRegistryErrorCode, message: string) {
    super(message);
    this.name = "AccountRegistryError";
    this.code = code;
  }
}

export interface PublicAccountBinding {
  readonly accountBindingId: string;
  readonly brandRef: string;
  readonly provider: string;
  readonly remoteAccountId: string;
  readonly state: AccountState;
  readonly revision: number;
  readonly lastVerifiedAt: string;
}

export class AccountRegistry {
  private readonly bindings = new Map<string, AccountBinding>();

  register(binding: AccountBinding): AccountBinding {
    this.bindings.set(`${binding.tenantId}/${binding.accountBindingId}`, binding);
    return binding;
  }

  markDegraded(tenantId: string, accountBindingId: string): void {
    const binding = this.get(tenantId, accountBindingId);
    this.bindings.set(`${tenantId}/${accountBindingId}`, { ...binding, state: "degraded" });
  }

  revoke(tenantId: string, accountBindingId: string): void {
    const binding = this.get(tenantId, accountBindingId);
    this.bindings.set(`${tenantId}/${accountBindingId}`, { ...binding, state: "revoked" });
  }

  /** Un intento sobre una cuenta revogada falla cerrado, no cae a otra cuenta. */
  assertActive(tenantId: string, accountBindingId: string): AccountBinding {
    const binding = this.get(tenantId, accountBindingId);
    if (binding.state === "revoked") {
      throw new AccountRegistryError("ACCOUNT_REVOKED", "cuenta revocada");
    }
    if (binding.state === "degraded") {
      throw new AccountRegistryError("ACCOUNT_DEGRADED", "cuenta degradada: requiere reconexión");
    }
    return binding;
  }

  listForTenant(tenantId: string): AccountBinding[] {
    return [...this.bindings.values()].filter((binding) => binding.tenantId === tenantId);
  }

  private get(tenantId: string, accountBindingId: string): AccountBinding {
    const binding = this.bindings.get(`${tenantId}/${accountBindingId}`);
    if (binding === undefined) {
      // No se distingue "ajeno" de "inexistente".
      throw new AccountRegistryError("ACCOUNT_NOT_FOUND", "cuenta no encontrada");
    }
    return binding;
  }
}

export function toPublicBinding(binding: AccountBinding): PublicAccountBinding {
  return {
    accountBindingId: binding.accountBindingId,
    brandRef: binding.brandRef,
    provider: binding.provider,
    remoteAccountId: binding.remoteAccountId,
    state: binding.state,
    revision: binding.revision,
    lastVerifiedAt: binding.lastVerifiedAt,
  };
}
