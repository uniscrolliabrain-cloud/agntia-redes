import { readFile } from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

const migrationSql = await readFile(
  new URL("../../src/storage/migrations/0001_init.sql", import.meta.url),
  "utf8",
);

let db: PGlite;

beforeAll(async () => {
  db = new PGlite();
  await db.exec(migrationSql);
  // Rol sin privilegios de superusuario: es el único modo de probar RLS de verdad.
  await db.exec("SET ROLE app_runtime");
});

afterAll(async () => {
  await db.close();
});

async function asTenant<T>(tenantId: string, fn: () => Promise<T>): Promise<T> {
  await db.exec("BEGIN");
  await db.query("SELECT set_config('app.tenant_id', $1, true)", [tenantId]);
  try {
    const result = await fn();
    await db.exec("COMMIT");
    return result;
  } catch (error) {
    await db.exec("ROLLBACK");
    throw error;
  }
}

function insertBinding(tenantId: string, accountBindingId: string) {
  return db.query(
    `INSERT INTO account_bindings
       (tenant_id, account_binding_id, brand_ref, provider, remote_account_id,
        credential_ref, revision, state, last_verified_at)
     VALUES ($1, $2, 'brand-1', 'mastodon', $3, 'cred_ref', 1, 'connected', now())`,
    [tenantId, accountBindingId, `remote-${accountBindingId}`],
  );
}

async function countBindings(): Promise<number> {
  const result = await db.query<{ count: string }>(
    "SELECT count(*)::text AS count FROM account_bindings",
  );
  return Number(result.rows[0]?.count ?? 0);
}

describe("migraciones y RLS", () => {
  it("aplica el esquema y registra la versión", async () => {
    const version = await db.query<{ version: number }>("SELECT version FROM schema_migrations");
    expect(version.rows[0]?.version).toBe(1);
  });

  it("aísla filas por tenant", async () => {
    await asTenant("tenant-a", async () => {
      await insertBinding("tenant-a", "acct-a");
      expect(await countBindings()).toBe(1);
    });

    await asTenant("tenant-b", async () => {
      expect(await countBindings()).toBe(0);
      await insertBinding("tenant-b", "acct-b");
      expect(await countBindings()).toBe(1);
    });

    await asTenant("tenant-a", async () => {
      const rows = await db.query<{ account_binding_id: string }>(
        "SELECT account_binding_id FROM account_bindings",
      );
      expect(rows.rows.map((row) => row.account_binding_id)).toEqual(["acct-a"]);
    });
  });

  it("rechaza escribir en un tenant distinto al de la transacción", async () => {
    await expect(
      asTenant("tenant-a", async () => {
        await insertBinding("tenant-b", "acct-c");
      }),
    ).rejects.toThrow();
  });

  it("sin tenant publicado no se ve nada (fail closed)", async () => {
    expect(await countBindings()).toBe(0);
  });

  it("mantiene unicidad de idempotencia en outbox", async () => {
    await asTenant("tenant-a", async () => {
      await db.query(
        `INSERT INTO outbox_events (tenant_id, event_id, event_type, payload, occurred_at, idempotency_key)
         VALUES ('tenant-a', 'evt-1', 'publication.confirmed', '{}'::jsonb, now(), 'op-1')`,
      );
      await expect(
        db.query(
          `INSERT INTO outbox_events (tenant_id, event_id, event_type, payload, occurred_at, idempotency_key)
           VALUES ('tenant-a', 'evt-2', 'publication.confirmed', '{}'::jsonb, now(), 'op-1')`,
        ),
      ).rejects.toThrow();
    });
  });
});
