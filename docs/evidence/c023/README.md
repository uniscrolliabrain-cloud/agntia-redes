# Evidencia · RDS-C023 — Comandos de publicación y ejecución por canal

**Commit:** `bc293688d95b0ef99bf5b4e91c686d3d1d259b7d` · **Ejecutado:** 2026-11-15 · **Entorno:** Node 26.13.0, npm 11.20.0, Linux cloud, PGlite (Postgres 16 WASM)
**Estado:** IMPLEMENTED_VERIFIED con proveedor falso; proveedor real BLOQUEADO por capabilities.

## Archivos de la fase

- `src/publication/commands.ts`
- `tests/integration/publish.test.ts`

## Comandos y resultados

```
npm run typecheck
  -> PASS (tsc --noEmit, strict, sin errores)
npx vitest run
  -> PASS (17 archivos, 87 tests)
npx vitest run tests/integration/publish.test.ts -> 6/6 PASS
```

## Gates

- Aprobación válida -> un solo envío y recibo (PASS).
- Replay del mismo operation key -> recibo durable sin nuevo IO (PASS).
- Timeout tras aceptación -> OUTCOME_UNKNOWN sin retry y presupuesto incierto (PASS).
- Sin aprobación, kill switch, capability deshabilitada o presupuesto insuficiente -> bloqueo sin IO (PASS).

## Límites declarados

Solo proveedor falso determinista; ninguna publicación real.
