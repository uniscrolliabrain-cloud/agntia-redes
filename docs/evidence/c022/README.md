# Evidencia · RDS-C022 — Presupuesto, entitlements, minutos y facturación del servicio

**Commit:** `d2a0447f6a4aaa729a24fd49d1c3808796696a87` · **Ejecutado:** 2026-11-15 · **Entorno:** Node 26.13.0, npm 11.20.0, Linux cloud, PGlite (Postgres 16 WASM)
**Estado:** IMPLEMENTED_VERIFIED (ledger en memoria) con tabla SQL presupuestaria preparada.

## Archivos de la fase

- `src/budget/index.ts`
- `tests/integration/cost-concurrency.test.ts`

## Comandos y resultados

```
npm run typecheck
  -> PASS (tsc --noEmit, strict, sin errores)
npx vitest run
  -> PASS (17 archivos, 87 tests)
npx vitest run tests/integration/cost-concurrency.test.ts -> 6/6 PASS
```

## Gates

- Reserva por encima del techo -> BUDGET_EXCEEDED (PASS).
- Resultado incierto conserva el pasivo y bloquea nuevas reservas (PASS).
- Dos reservas concurrentes: solo una pasa (PASS).
- Liquidar a cero libera capacidad (PASS).

## Límites declarados

Concurrencia probada en un solo proceso Node; no hay prueba multi-proceso sobre la tabla.
