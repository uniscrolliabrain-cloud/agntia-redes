/**
 * Puerto SQL mínimo (RDS-C05). Compatible con `pg` en producción y con
 * PGlite (Postgres en WASM) en tests locales, sin cambiar el código de dominio.
 */

export interface QueryResult<T> {
  rows: T[];
}

export interface SqlClient {
  query<T = unknown>(sql: string, params?: readonly unknown[]): Promise<QueryResult<T>>;
  /** Ejecuta un script con varias sentencias (migraciones). */
  exec?(sql: string): Promise<void>;
}

export interface TransactionRunner {
  withTenantScope<T>(tenantId: string, fn: (tx: SqlClient) => Promise<T>): Promise<T>;
}

export class TenantScopeError extends Error {
  readonly code = "TENANT_SCOPE_MISSING";

  constructor() {
    super("tenant vacío: no se abre transacción sin tenant verificado");
    this.name = "TenantScopeError";
  }
}

/**
 * Abre una transacción y publica el tenant para RLS con set_config local.
 * Sin tenant no hay transacción: no existe un modo "owner/default".
 */
export async function withTenantScope<T>(
  db: SqlClient,
  tenantId: string,
  fn: (tx: SqlClient) => Promise<T>,
): Promise<T> {
  if (tenantId.trim().length === 0) {
    throw new TenantScopeError();
  }
  await db.query("BEGIN");
  try {
    await db.query("SELECT set_config('app.tenant_id', $1, true)", [tenantId]);
    const result = await fn(db);
    await db.query("COMMIT");
    return result;
  } catch (error) {
    await db.query("ROLLBACK");
    throw error;
  }
}
