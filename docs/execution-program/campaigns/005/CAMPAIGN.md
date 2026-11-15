# RDS-C05 · Persistencia, auditoría y migraciones

**DESIGN_ONLY · NOT_STARTED · 5/42.** Fuente [docs/campaigns/05-persistencia-auditoria-y-migraciones.md](../../../campaigns/05-persistencia-auditoria-y-migraciones.md).

## Resultado y límites
Guardar hechos y estado por cliente con transacciones locales verificables.

**Invariante:** SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.. **Dependencias:** RDS-C04.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/db/migrations/001_init.sql`.
- DTO y esquema: `packages/contracts/src/05.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/05.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/005.test.ts` y `tests/fixtures/005/`.
- Evidencia: `docs/evidence/c05/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/storage/migrations/`, `src/storage/audit.ts`, `tests/integration/migrations.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 005.01 — RDS-C05-T01

**Acción:** Crear tablas tenant-scoped de acuerdos, cuentas, contenido, revisiones, intents, attempts, receipts y presupuesto.

**Superficie primaria:** `packages/db/migrations/001_init.sql`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/05.ts` y test `tests/campaigns/005.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C04-T07.

### 005.02 — RDS-C05-T02

**Acción:** Añadir inbox/outbox, dedup, external links y restricciones compuestas que impidan asociaciones cruzadas.

**Superficie primaria:** `packages/db/migrations/001_init.sql`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/05.ts` y test `tests/campaigns/005.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C05-T01.

### 005.03 — RDS-C05-T03

**Acción:** Guardar mutación, historial, idempotency y evento en una transacción con política de concurrencia documentada.

**Superficie primaria:** `packages/db/migrations/001_init.sql`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/05.ts` y test `tests/campaigns/005.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C05-T02.

### 005.04 — RDS-C05-T04

**Acción:** Implementar audit append-only con actor/capacidad/correlación, hashes y verificador sin payloads sensibles.

**Superficie primaria:** `packages/db/migrations/001_init.sql`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/05.ts` y test `tests/campaigns/005.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C05-T03.

### 005.05 — RDS-C05-T05

**Acción:** Preparar backups antes de DDL, migración fresh/upgrade, rollback ante fallo y lectura de versiones compatibles.

**Superficie primaria:** `packages/db/migrations/001_init.sql`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/05.ts` y test `tests/campaigns/005.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C05-T04.

### 005.06 — RDS-C05-T06

**Acción:** Limitar retención/volumen y acceso a datos/documentos; separar referencias de claves y contenido original.

**Superficie primaria:** `packages/db/migrations/001_init.sql`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/05.ts` y test `tests/campaigns/005.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C05-T05.

### 005.07 — RDS-C05-T07

**Acción:** Probar dos escritores, conflicto de revisión, caída de DB y preservación de historia de un esquema anterior.

**Superficie primaria:** `packages/db/migrations/001_init.sql`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/05.ts` y test `tests/campaigns/005.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C05-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C05-G01 / NOT_EXECUTED:** Falla el append de auditoría y no quedan mutación, saldo ni outbox de éxito.
- **RDS-C05-G02 / NOT_EXECUTED:** Una migración falla y conserva datos previos, versión y cadena auditables.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
