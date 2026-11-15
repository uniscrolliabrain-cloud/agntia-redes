# Evidencia · RDS-C005 — Persistencia, auditoría y migraciones

**Commit:** `bc293688d95b0ef99bf5b4e91c686d3d1d259b7d` · **Ejecutado:** 2026-11-15 · **Entorno:** Node 26.13.0, npm 11.20.0, Linux cloud, PGlite (Postgres 16 WASM)
**Estado:** IMPLEMENTED_VERIFIED (migración + RLS + auditoría) sobre Postgres WASM local.

## Archivos de la fase

- `src/storage/migrations/0001_init.sql`
- `src/storage/db.ts`
- `src/storage/pglite.ts`
- `src/storage/audit.ts`
- `tests/integration/migrations.test.ts`
- `tests/integration/audit.test.ts`

## Comandos y resultados

```
npm run typecheck
  -> PASS (tsc --noEmit, strict, sin errores)
npx vitest run
  -> PASS (17 archivos, 87 tests)
npx vitest run tests/integration/migrations.test.ts -> 5/5 PASS; npx vitest run tests/integration/audit.test.ts -> 3/3 PASS
```

## Gates

- tenant-a no ve filas de tenant-b y el WITH CHECK rechaza escribir en otro tenant (PASS).
- Sin app.tenant_id no se ve ninguna fila (fail closed) (PASS).
- Unicidad de idempotency_key en outbox (PASS).
- La cadena de auditoría detecta un evento manipulado tras restore (PASS).

## Límites declarados

Laboratorio local en WASM; ninguna prueba contra Postgres gestionado.
