# Evidencia · RDS-C021 — Outbox, workers, leases e inbox durable

**Commit:** `bc293688d95b0ef99bf5b4e91c686d3d1d259b7d` · **Ejecutado:** 2026-11-15 · **Entorno:** Node 26.13.0, npm 11.20.0, Linux cloud, PGlite (Postgres 16 WASM)
**Estado:** IMPLEMENTED_VERIFIED (outbox SQL con leases/fencing); sin worker de producción.

## Archivos de la fase

- `src/events/outbox.ts`
- `src/jobs/lease.ts`
- `tests/integration/replay.test.ts`
- `tests/domain/lease.test.ts`

## Comandos y resultados

```
npm run typecheck
  -> PASS (tsc --noEmit, strict, sin errores)
npx vitest run
  -> PASS (17 archivos, 87 tests)
npx vitest run tests/integration/replay.test.ts -> 3/3 PASS; npx vitest run tests/domain/lease.test.ts -> 3/3 PASS
```

## Gates

- Misma idempotency key no duplica evento y el replay devuelve el mismo eventId (PASS).
- Un lease vigente impide que otro worker reclame el evento (PASS).
- ACK con fence antiguo -> stale_fence y el trabajo sigue pendiente (PASS).

## Límites declarados

Pruebas sobre PGlite local; no hay worker desplegado ni cola externa.
