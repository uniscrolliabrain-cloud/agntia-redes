# RDS-C01 · Baseline, alcance y cotejo del padre

**DESIGN_ONLY · NOT_STARTED · 1/42.** Fuente [docs/campaigns/01-baseline-alcance-y-cotejo-del-padre.md](../../campaigns/01-baseline-alcance-y-cotejo-del-padre.md).

## Resultado y límites
Congelar lo observado antes de introducir implementación y diferencias de contrato.

**Invariante:** El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.. **Dependencias:** ninguna.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `docs/baseline.md`.
- DTO y esquema: `packages/contracts/src/01.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/01.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/001.test.ts` y `tests/fixtures/001/`.
- Evidencia: `docs/evidence/c01/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `docs/baseline.md`, `docs/parent-diff.md`, `docs/versions.json`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 001.01 — RDS-C01-T01

**Acción:** Anotar SHA, fecha, estado del checkout e instrucciones propias y de cada dependencia que se vaya a leer.

**Superficie primaria:** `docs/baseline.md`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/01.ts` y test `tests/campaigns/001.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** inicio.

### 001.02 — RDS-C01-T02

**Acción:** Cotejar el padre vigente con54b8d5407a8576459448c4d059a877297d18ca7a, registrar cambios y no modificarlo.

**Superficie primaria:** `docs/baseline.md`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/01.ts` y test `tests/campaigns/001.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C01-T01.

### 001.03 — RDS-C01-T03

**Acción:** Inventariar TenantPrincipal, ambos PolicyContext, aprobación nativa, eventos sociales y SocialClient stub.

**Superficie primaria:** `docs/baseline.md`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/01.ts` y test `tests/campaigns/001.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C01-T02.

### 001.04 — RDS-C01-T04

**Acción:** Definir alcance integrado y standalone, cliente objetivo y la aclaración de empresa SaaS con Anam.

**Superficie primaria:** `docs/baseline.md`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/01.ts` y test `tests/campaigns/001.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C01-T03.

### 001.05 — RDS-C01-T05

**Acción:** Capturar SO, arquitectura, Node/pnpm/DB y licencias sin imprimir variables secretas del entorno.

**Superficie primaria:** `docs/baseline.md`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/01.ts` y test `tests/campaigns/001.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C01-T04.

### 001.06 — RDS-C01-T06

**Acción:** Distinguir checks de documentación, tests existentes y pruebas nuevas no ejecutadas; conservar fallos de baseline.

**Superficie primaria:** `docs/baseline.md`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/01.ts` y test `tests/campaigns/001.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C01-T05.

### 001.07 — RDS-C01-T07

**Acción:** Entregar mapa de discrepancias y gates del laboratorio antes de afirmar compatibilidad o escoger runtime.

**Superficie primaria:** `docs/baseline.md`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/01.ts` y test `tests/campaigns/001.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C01-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C01-G01 / NOT_EXECUTED:** El SHA padre ha cambiado: el informe identifica interfaces afectadas y no hereda compatibilidad.
- **RDS-C01-G02 / NOT_EXECUTED:** Checkout con cambios ajenos: se conservan y el baseline los separa sin reset.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
