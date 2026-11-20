# RDS-C05 · Persistencia, auditoría y migraciones

**DESIGN_ONLY · NOT_STARTED · 5/42.** Fuente [docs/campaigns/05-persistencia-auditoria-y-migraciones.md](../../../campaigns/05-persistencia-auditoria-y-migraciones.md).

## Resultado y límites
Guardar hechos y estado por cliente con transacciones locales verificables.

**Invariante:** SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.. **Dependencias:** RDS-C04.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/storage/migrations/`, `src/storage/audit.ts`, `tests/integration/migrations.test.ts`.
- Presente en el repositorio hoy: `src/storage/migrations/`, `src/storage/audit.ts`, `tests/integration/migrations.test.ts` (3/3 superficies).
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/integration/migrations.test.ts` y `tests/fixtures/c05/`.
- Evidencia: `docs/evidence/c005/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/storage/migrations/`, `src/storage/audit.ts`, `tests/integration/migrations.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 005.01 — RDS-C05-T01

**Acción:** Crear tablas tenant-scoped de acuerdos, cuentas, contenido, revisiones, intents, attempts, receipts y presupuesto.

**Superficie:** `src/storage/migrations/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/migrations.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.

**Verificación:** caso `RDS-C05-T01` sobre `tests/integration/migrations.test.ts`; evidencia `docs/evidence/c005/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C04-T07.

### 005.02 — RDS-C05-T02

**Acción:** Añadir inbox/outbox, dedup, external links y restricciones compuestas que impidan asociaciones cruzadas.

**Superficie:** `src/storage/audit.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/migrations.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.

**Verificación:** caso `RDS-C05-T02` sobre `tests/integration/migrations.test.ts`; evidencia `docs/evidence/c005/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C05-T01.

### 005.03 — RDS-C05-T03

**Acción:** Guardar mutación, historial, idempotency y evento en una transacción con política de concurrencia documentada.

**Superficie:** `tests/integration/migrations.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/migrations.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.

**Verificación:** caso `RDS-C05-T03` sobre `tests/integration/migrations.test.ts`; evidencia `docs/evidence/c005/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C05-T02.

### 005.04 — RDS-C05-T04

**Acción:** Implementar audit append-only con actor/capacidad/correlación, hashes y verificador sin payloads sensibles.

**Superficie:** `src/storage/migrations/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/migrations.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.

**Verificación:** caso `RDS-C05-T04` sobre `tests/integration/migrations.test.ts`; evidencia `docs/evidence/c005/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C05-T03.

### 005.05 — RDS-C05-T05

**Acción:** Preparar backups antes de DDL, migración fresh/upgrade, rollback ante fallo y lectura de versiones compatibles.

**Superficie:** `src/storage/audit.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/migrations.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.

**Verificación:** caso `RDS-C05-T05` sobre `tests/integration/migrations.test.ts`; evidencia `docs/evidence/c005/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C05-T04.

### 005.06 — RDS-C05-T06

**Acción:** Limitar retención/volumen y acceso a datos/documentos; separar referencias de claves y contenido original.

**Superficie:** `tests/integration/migrations.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/migrations.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.

**Verificación:** caso `RDS-C05-T06` sobre `tests/integration/migrations.test.ts`; evidencia `docs/evidence/c005/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C05-T05.

### 005.07 — RDS-C05-T07

**Acción:** Probar dos escritores, conflicto de revisión, caída de DB y preservación de historia de un esquema anterior.

**Superficie:** `src/storage/migrations/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/migrations.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.

**Verificación:** caso `RDS-C05-T07` sobre `tests/integration/migrations.test.ts`; evidencia `docs/evidence/c005/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C05-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C05-G01 / NOT_EXECUTED:** Falla el append de auditoría y no quedan mutación, saldo ni outbox de éxito. **Caso:** `RDS-C05-G01` en `tests/integration/migrations.test.ts`. **Evidencia:** `docs/evidence/c005/g01.json`.
- **RDS-C05-G02 / NOT_EXECUTED:** Una migración falla y conserva datos previos, versión y cadena auditables. **Caso:** `RDS-C05-G02` en `tests/integration/migrations.test.ts`. **Evidencia:** `docs/evidence/c005/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_VERIFIED (migración + RLS + auditoría) sobre Postgres WASM local.
**SHA:** bc293688d95b0ef99bf5b4e91c686d3d1d259b7d
**Archivos y diff:** src/storage/migrations/0001_init.sql, src/storage/db.ts, src/storage/pglite.ts, src/storage/audit.ts, tests/integration/migrations.test.ts, tests/integration/audit.test.ts
**Tests/comandos/fixtures:** npx vitest run tests/integration/migrations.test.ts -> 5/5 PASS; npx vitest run tests/integration/audit.test.ts -> 3/3 PASS. Fixtures sintéticas propias; sin cuentas ni APIs reales.
**Gates:**
- tenant-a no ve filas de tenant-b y el WITH CHECK rechaza escribir en otro tenant (PASS).
- Sin app.tenant_id no se ve ninguna fila (fail closed) (PASS).
- Unicidad de idempotency_key en outbox (PASS).
- La cadena de auditoría detecta un evento manipulado tras restore (PASS).
**Incoherencias y decisiones:** RLS forzada y pruebas con rol no superusuario app_runtime: sin ese rol la prueba no demostraría nada. El tenant se publica con set_config local dentro de la transacción.
**Deuda y riesgos:** Sin runner de migraciones incremental ni backup/restore real; faltan políticas por rol de worker y pruebas de concurrencia en la base.
**Aprendizajes para siguientes campañas:** PGlite permite probar RLS de verdad en CI sin infraestructura, pero no acredita un Postgres gestionado.

Evidencia extendida: docs/evidence/c005/README.md
