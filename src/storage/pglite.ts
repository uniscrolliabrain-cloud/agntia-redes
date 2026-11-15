import type { PGlite } from "@electric-sql/pglite";
import type { QueryResult, SqlClient } from "./db.js";

/**
 * Adaptador de PGlite para laboratorio local autorizado.
 * No sustituye una prueba contra PostgreSQL gestionado: se etiqueta como local.
 */
export class PgliteSqlClient implements SqlClient {
  constructor(private readonly client: PGlite) {}

  async query<T = unknown>(sql: string, params?: readonly unknown[]): Promise<QueryResult<T>> {
    const result = await this.client.query<T>(sql, params === undefined ? undefined : [...params]);
    return { rows: result.rows };
  }

  async exec(sql: string): Promise<void> {
    await this.client.exec(sql);
  }

  /** Ejecuta como rol de aplicación no superusuario para que RLS aplique. */
  async asRole<T>(role: string, fn: () => Promise<T>): Promise<T> {
    await this.client.exec(`SET ROLE ${role}`);
    try {
      return await fn();
    } finally {
      await this.client.exec("RESET ROLE");
    }
  }
}
