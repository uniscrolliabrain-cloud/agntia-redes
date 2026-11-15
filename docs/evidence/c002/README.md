# Evidencia · RDS-C002 — Arquitectura de empresa SaaS y acuerdos de servicio

**Commit:** `bc293688d95b0ef99bf5b4e91c686d3d1d259b7d` · **Ejecutado:** 2026-11-15 · **Entorno:** Node 26.13.0, npm 11.20.0, Linux cloud, PGlite (Postgres 16 WASM)
**Estado:** IMPLEMENTED_VERIFIED (modelo de dominio + ADR). Persistencia y rutas de negocio pendientes.

## Archivos de la fase

- `docs/adr/0001-saas.md`
- `src/domain/service-agreement.ts`
- `src/domain/work-order.ts`
- `tests/domain/agreement.test.ts`

## Comandos y resultados

```
npm run typecheck
  -> PASS (tsc --noEmit, strict, sin errores)
npx vitest run
  -> PASS (17 archivos, 87 tests)
npm run typecheck -> PASS; npx vitest run tests/domain/agreement.test.ts -> 4/4 PASS
```

## Gates

- Acuerdo con requireHumanApprovalForEffects=false rechazado por schema (PASS).
- Orden de trabajo con gasto por encima del mandato o fuera del acuerdo -> DomainError (PASS).

## Límites declarados

No hay contrato comercial real ni firma verificada: solo el modelo y sus invariantes.
