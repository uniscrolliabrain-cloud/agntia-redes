# Evidencia · RDS-C019 — Máquina de estados y aprobación vinculada

**Commit:** `bc293688d95b0ef99bf5b4e91c686d3d1d259b7d` · **Ejecutado:** 2026-11-15 · **Entorno:** Node 26.13.0, npm 11.20.0, Linux cloud, PGlite (Postgres 16 WASM)
**Estado:** IMPLEMENTED_VERIFIED (FSM y aprobación vinculada).

## Archivos de la fase

- `src/runtime/fsm.ts`
- `src/approvals/index.ts`
- `tests/security/approval.test.ts`

## Comandos y resultados

```
npm run typecheck
  -> PASS (tsc --noEmit, strict, sin errores)
npx vitest run
  -> PASS (17 archivos, 87 tests)
npx vitest run tests/security/approval.test.ts -> 8/8 PASS
```

## Gates

- Payload cambiado tras aprobar -> PAYLOAD_HASH_MISMATCH (PASS).
- Aprobación caducada o revocada -> denegada (PASS).
- Solo firmantes agente -> MISSING_HUMAN_SIGNER (PASS).
- Proponente firmando su propio efecto -> SELF_APPROVAL (PASS).
- Coste por encima del techo -> COST_EXCEEDED (PASS).

## Límites declarados

No hay firma criptográfica de la aprobación humana; se modela como hecho con firmantes y sello temporal.
