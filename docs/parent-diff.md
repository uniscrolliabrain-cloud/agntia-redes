# Cotejo con el repositorio padre — RDS-C01 / RDS-C41

**Estado 23-11-2026: cotejado y ensayado, no aplicado al checkout del fundador.**

El cotejo anterior se hizo contra `54b8d5407a8576459448c4d059a877297d18ca7a`. El `main` del padre ya está en `9c4c309c9c05d26527563dd7ef094eebb7fbe276`, así que se repitió la lectura de los 24 archivos de `docs/research/parent-source-map.json` sobre el SHA nuevo, mediante un clon de solo lectura en este workspace (`/tmp`). No se modificó el repositorio del fundador ni `/agente`.

## Resultado del re-cotejo

| Archivos del mapa | Resultado |
|---|---|
| 20 de 24 | blob idéntico al cotejo anterior |
| 4 de 24 | cambiados |

Cambios observados, por archivo:

- `package.json` — nuevas dependencias de modelos (`@ai-sdk/*`), el tarball vendorizado `@agntia/ciberseguridad` y scripts de `cognition-v2`. Se mantiene `pnpm@11.19.0`, Hono `^4.11` y Zod `^4.1`.
- `apps/server/src/engine/events/types.ts` — tres ids nuevos `cognition.v2.*` en el catálogo de eventos.
- `apps/server/src/engine/events/bus.ts` — emisión transaccional con `afterCommit` y estados `pendingCommit` / `commitOutcome: "unknown"`.
- `apps/server/src/db-tenant.ts` — pasarela de transacción (`usesTransactionStore`, `afterCommit`, `inTransaction`) sobre el store raíz.

Los blobs que sostienen el adaptador no cambiaron: `tenant-principal.ts`, `engine/authz/pdp.ts`, `tenant-scope.ts` y `packages/domain/src/actor.ts`. El middleware de `apps/server/src/app.ts` sigue dejando `ctx` (`tenantId`, `actor`, `requestId`) y `owner` en el contexto de Hono bajo `/api/*`, que es lo que consume el adaptador.

## Qué se ejecutó

En el clon del SHA `9c4c309…`, con dependencias instaladas desde `pnpm-lock.yaml`:

1. Instalación del paquete con `scripts/install-into-parent.mjs` (tarball vendorizado, adaptador, verificador, bloque de montaje).
2. Arranque real del servidor del padre en modo `sample` y peticiones HTTP autenticadas a `/api/redes/*`.
3. `tsc --noEmit` del padre y `biome check` de los archivos añadidos.
4. Reversión completa y reinstalación.

Resultado: 10/10 comprobaciones, typecheck exit 0, lint sin errores. Detalle en [install-parent-2026-11-23.json](evidence/c041/install-parent-2026-11-23.json) y guía en [INSTALACION.md](operations/INSTALACION.md).

## Lectura de compatibilidad

- La emisión transaccional nueva del bus del padre es coherente con la semántica de resultado incierto del servicio: un commit cuyo desenlace no se conoce no se reintenta a ciegas. El servicio mantiene su propio outbox y su propia reconciliación; no hereda el bus del padre como contrato.
- El padre usa Zod 4 y Hono 4.13. El paquete los declara como peer dependencies y la verificación corrió con esas versiones, no con las de desarrollo.
- Los cambios en `db-tenant.ts` no afectan al puerto del servicio: el adaptador no usa el store del padre.

## Qué no se afirma

- No se aplicó nada al `/agente` del fundador: el ensayo fue sobre un clon.
- No se ejecutaron tests, seeders ni migraciones del padre; solo typecheck, lint de dos archivos y el arranque del slice.
- No se declara compatibilidad con un HEAD futuro: si el padre se mueve, el instalador aborta hasta repetir este cotejo.
- No se heredan permisos, tipos ni eventos del padre como contrato vigente.

## Cómo se cierra del todo

1. El fundador ejecuta el instalador sobre su checkout real y anota el SHA.
2. Se revisa `pnpm-lock.yaml` y el diff de los cinco puntos de escritura.
3. Se repite la verificación en ese checkout y en Windows antes de afirmar instalación multiplataforma.
