# Evidencia · RDS-C008 — Transporte robusto y puertos de proveedor

**Commit:** `d2a0447f6a4aaa729a24fd49d1c3808796696a87` · **Ejecutado:** 2026-11-15 · **Entorno:** Node 26.13.0, npm 11.20.0, Linux cloud, PGlite (Postgres 16 WASM)
**Estado:** IMPLEMENTED_VERIFIED contra proveedor falso; adaptadores reales BLOQUEADOS.

## Archivos de la fase

- `src/providers/port.ts`
- `src/providers/transport.ts`
- `src/adapters/fake/provider.ts`
- `tests/contracts/transport.test.ts`

## Comandos y resultados

```
npm run typecheck
  -> PASS (tsc --noEmit, strict, sin errores)
npx vitest run
  -> PASS (17 archivos, 87 tests)
npx vitest run tests/contracts/transport.test.ts -> 5/5 PASS
```

## Gates

- Reintentos solo en lecturas; un POST con 503 no se reintenta (PASS).
- Hosts privados, metadata, http plano y fuera de allowlist bloqueados (PASS).
- Respuesta gigante o no-JSON rechazada sin propagar el cuerpo (PASS).

## Límites declarados

Un mock no demuestra proveedor real: ninguna capability se marca habilitada por estas pruebas.
