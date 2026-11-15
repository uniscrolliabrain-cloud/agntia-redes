# Evidencia · RDS-C007 — Conexión OAuth y ciclo de credenciales

**Commit:** `bc293688d95b0ef99bf5b4e91c686d3d1d259b7d` · **Ejecutado:** 2026-11-15 · **Entorno:** Node 26.13.0, npm 11.20.0, Linux cloud, PGlite (Postgres 16 WASM)
**Estado:** IMPLEMENTED_PARTIAL: state/PKCE y registro de cuentas; sin intercambio de código ni custodia de credenciales.

## Archivos de la fase

- `src/connections/oauth.ts`
- `src/connections/registry.ts`
- `tests/security/oauth.test.ts`

## Comandos y resultados

```
npm run typecheck
  -> PASS (tsc --noEmit, strict, sin errores)
npx vitest run
  -> PASS (17 archivos, 87 tests)
npx vitest run tests/security/oauth.test.ts -> 4/4 PASS
```

## Gates

- PKCE S256 correcto y state de un solo uso; replay rechazado (PASS).
- Redirect fuera de allowlist rechazado (PASS).
- Cuenta revocada falla cerrado, el cross-tenant no la ve y la proyección pública no incluye credentialRef (PASS).

## Límites declarados

No se ha conectado ninguna cuenta real ni realizado un callback OAuth real.
