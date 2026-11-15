# Evidencia · RDS-C006 — Licencias, catálogo comercial y discovery de capacidades

**Commit:** `d2a0447f6a4aaa729a24fd49d1c3808796696a87` · **Ejecutado:** 2026-11-15 · **Entorno:** Node 26.13.0, npm 11.20.0, Linux cloud, PGlite (Postgres 16 WASM)
**Estado:** IMPLEMENTED_PARTIAL: discovery de capacidades por operación; faltan entitlements mensuales y catálogo comercial.

## Archivos de la fase

- `src/providers/catalog.ts`
- `tests/contracts/catalog.test.ts`

## Comandos y resultados

```
npm run typecheck
  -> PASS (tsc --noEmit, strict, sin errores)
npx vitest run
  -> PASS (17 archivos, 87 tests)
npx vitest run tests/contracts/catalog.test.ts -> 4/4 PASS
```

## Gates

- Documentado no habilita runtime: mastodon, linkedin y youtube siguen en DOCUMENTED (PASS).
- Verificación caducada vuelve a UNKNOWN y bloquea (PASS).
- Verificación vigente habilita solo la operación probada, no el proveedor entero (PASS).

## Límites declarados

Ninguna capability está VERIFIED_RUNTIME: todas las integraciones reales siguen bloqueadas.
