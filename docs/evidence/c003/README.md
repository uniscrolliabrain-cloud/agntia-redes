# Evidencia · RDS-C003 — Identidad, tenancy y capacidades del servicio

**Commit:** `d2a0447f6a4aaa729a24fd49d1c3808796696a87` · **Ejecutado:** 2026-11-15 · **Entorno:** Node 26.13.0, npm 11.20.0, Linux cloud, PGlite (Postgres 16 WASM)
**Estado:** IMPLEMENTED_VERIFIED (identidad, tenancy y PEP). JWKS remoto no probado contra Supabase real.

## Archivos de la fase

- `src/auth/principal.ts`
- `src/auth/policy.ts`
- `apps/api/src/routes/03.ts`
- `apps/api/src/app.ts`
- `tests/security/tenancy.test.ts`
- `tests/api/app.test.ts`

## Comandos y resultados

```
npm run typecheck
  -> PASS (tsc --noEmit, strict, sin errores)
npx vitest run
  -> PASS (17 archivos, 87 tests)
npx vitest run tests/security/tenancy.test.ts -> 11/11 PASS; npx vitest run tests/api/app.test.ts -> 4/4 PASS
```

## Gates

- JWT expirado, issuer erróneo, user_metadata hostil, claims contradictorios o membresía suspendida -> rechazo (PASS).
- Recurso y listado cross-tenant -> 403/404 sin fuga de existencia (PASS).
- Agente con capability de aprobación o conexión -> HUMAN_ONLY (PASS).

## Límites declarados

No se ha probado un JWT real de Supabase ni la descarga de JWKS por red.
