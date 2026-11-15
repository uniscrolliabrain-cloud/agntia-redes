# Evidencia · RDS-C017 — Assets, derechos y Content Passport

**Commit:** `d2a0447f6a4aaa729a24fd49d1c3808796696a87` · **Ejecutado:** 2026-11-15 · **Entorno:** Node 26.13.0, npm 11.20.0, Linux cloud, PGlite (Postgres 16 WASM)
**Estado:** IMPLEMENTED_VERIFIED (derechos de activos y validación de medios).

## Archivos de la fase

- `src/domain/rights.ts`
- `src/media/index.ts`
- `tests/security/media.test.ts`

## Comandos y resultados

```
npm run typecheck
  -> PASS (tsc --noEmit, strict, sin errores)
npx vitest run
  -> PASS (17 archivos, 87 tests)
npx vitest run tests/security/media.test.ts -> 9/9 PASS
```

## Gates

- Sin licencia -> RIGHTS_UNKNOWN, no permiso (PASS).
- Licencia vencida, territorio no cubierto, uso comercial o música sin derechos -> denegado (PASS).
- SVG/HTML rechazados, MIME declarado distinto del contenido rechazado y traversal neutralizado (PASS).

## Límites declarados

Cobertura limitada a png/jpeg/gif/webp/mp4/webm/pdf; no hay probe de codecs ni de duración.
