# Evidencia · RDS-C004 — Contratos versionados de dominio y errores

**Commit:** `d2a0447f6a4aaa729a24fd49d1c3808796696a87` · **Ejecutado:** 2026-11-15 · **Entorno:** Node 26.13.0, npm 11.20.0, Linux cloud, PGlite (Postgres 16 WASM)
**Estado:** IMPLEMENTED_PARTIAL: contratos y errores verificados; falta JSON Schema exportado y envelope en rutas de escritura.

## Archivos de la fase

- `src/contracts/index.ts`
- `tests/contracts/wire.test.ts`

## Comandos y resultados

```
npm run typecheck
  -> PASS (tsc --noEmit, strict, sin errores)
npx vitest run
  -> PASS (17 archivos, 87 tests)
npx vitest run tests/contracts/wire.test.ts -> 5/5 PASS
```

## Gates

- Campos desconocidos y capabilities inventadas rechazados (PASS).
- Envelope con tenant/actor distinto del principal -> PRINCIPAL_MISMATCH (PASS).
- OUTCOME_UNKNOWN -> reconciliationRequired=true y retryable=false (PASS).

## Límites declarados

Contratos escritos y probados en aislamiento, no contra consumidores reales.
