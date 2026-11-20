# Checkpoint C05 — Redes (tras C01–C05)

**Fecha:** 2026-11-15 · **Commit:** `bc293688d95b0ef99bf5b4e91c686d3d1d259b7d` · **Rama:** `freebuff/8c2f53324d9548cdf6139c22`

## Objetivo del bloque

Convertir un repositorio exclusivamente documental en un runtime tipado con los controles transversales que el diseño considera no negociables (identidad verificada, aislamiento por tenant, aprobación vinculada, idempotencia y resultado incierto), sin conectar proveedores ni cuentas reales.

## Entregado

| Campaña | Resultado | Evidencia |
|---|---|---|
| C01 Baseline | SHA congelado, manifiesto validado por test; cotejo del padre **PARTIAL** (sin checkout) | `docs/baseline.md`, `docs/evidence/c001/` |
| C02 Acuerdos | Modelo de acuerdo/orden + ADR 0001; tres aceptaciones branded incompatibles | `src/domain/*`, `docs/adr/0001-saas.md` |
| C03 Identidad | JWT Supabase verificado + membresía + PEP + ruta de cuentas | `src/auth/*`, `apps/api/*` |
| C04 Contratos | Zod estricto, envelope y modelo de error con retry/reconciliación | `src/contracts/index.ts` |
| C05 Persistencia | Migración con RLS forzada, auditoría encadenada, adaptador PGlite | `src/storage/*` |

Además se adelantaron piezas de C06, C07, C08, C17, C19, C21, C22, C23 y C24 por dependencia directa de la cadena de efecto (ver sus reportes en `docs/execution-program/campaigns/`).

## Comandos y resultados reales

```
npm install                              -> OK (50 paquetes, package-lock.json versionado)
npm run typecheck                        -> PASS (tsc --noEmit, strict)
npx vitest run                           -> PASS (17 archivos, 87 tests, ~8 s)
```

No hay tests omitidos ni marcados como PASS sin ejecutar. Las pruebas de base de datos se ejecutan sobre PGlite (Postgres 16 WASM) con rol no superusuario `app_runtime`.

## Decisiones

1. **Runtime único** para `integrated` y `standalone` (ADR 0001).
2. **`npm` en lugar de `pnpm`**: el entorno no tiene pnpm instalado; se conserva `package-lock.json` y el `engines.node >= 22.6.0`.
3. **RLS probada con rol no propietario**: sin `SET ROLE app_runtime` la prueba no demostraría aislamiento (un superusuario la omite).
4. **`OUTCOME_UNKNOWN` como estado de primera clase**: un timeout jamás se devuelve como reintentable.
5. **Capabilities de proveedor conservadoras**: ninguna `VERIFIED_RUNTIME`; los adaptadores reales quedan BLOQUEADOS.

## Limitaciones declaradas

- **Cotejo del padre `NOT_VERIFIED`**: no hay checkout de `agente` en este workspace; no se declara compatibilidad.
- **Sin proveedores reales**: OAuth social, publicación y métricas se prueban con proveedor falso determinista.
- **Sin despliegue**: no hay contenedores, staging ni runbook ejecutable; el empaquetado es C41.
- **`TwinBinding` y bridge al padre**: documentados, no implementados (C36).
- **Gate conceptual de fábrica**: `docs/factory/00-README.md` y el handoff reconciliado piden aprobación del founder antes de granularizar código; esa aprobación no consta en el repositorio. La ejecución de esta fase se apoya en la instrucción expresa del fundador del **2026-11-15** que autoriza implementar de forma autónoma; queda registrada aquí para que el arquitecto la valide o la revoque.

## Siguiente paso

1. Revisión del fundador/arquitecto sobre el gate conceptual y sobre las decisiones 2–5.
2. Continuar por C09–C16 solo hasta donde el catálogo permita (adaptadores Postiz/Mastodon con contrato documentado; Meta/Pinterest/X/Buffer permanecen BLOCKED).
3. C18 (briefs y variantes) y C20 (calendario) antes de conectar la ejecución con la UI.
4. C34 (SDK/MCP) y C35 (portal) para que el flujo sea operable por un humano, no solo por tests.
