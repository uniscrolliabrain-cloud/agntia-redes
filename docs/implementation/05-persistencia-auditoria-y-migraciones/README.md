# RDS-C05 — Persistencia, auditoría y migraciones

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/05-persistencia-auditoria-y-migraciones.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Guardar hechos y estado por cliente con transacciones locales verificables.

## Artefactos previstos
- `src/storage/migrations/`
- `src/storage/audit.ts`
- `tests/integration/migrations.test.ts`

## Invariante
SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.

## Dependencias y fuentes
Dependencias: RDS-C04. Fuentes: H01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C05-T01:** Crear tablas tenant-scoped de acuerdos, cuentas, contenido, revisiones, intents, attempts, receipts y presupuesto. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.
- **RDS-C05-T02:** Añadir inbox/outbox, dedup, external links y restricciones compuestas que impidan asociaciones cruzadas. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.
- **RDS-C05-T03:** Guardar mutación, historial, idempotency y evento en una transacción con política de concurrencia documentada. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.
- **RDS-C05-T04:** Implementar audit append-only con actor/capacidad/correlación, hashes y verificador sin payloads sensibles. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.
- **RDS-C05-T05:** Preparar backups antes de DDL, migración fresh/upgrade, rollback ante fallo y lectura de versiones compatibles. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.
- **RDS-C05-T06:** Limitar retención/volumen y acceso a datos/documentos; separar referencias de claves y contenido original. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.
- **RDS-C05-T07:** Probar dos escritores, conflicto de revisión, caída de DB y preservación de historia de un esquema anterior. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.

## Gates previstos, NO ejecutados
- RDS-C05-G01: Falla el append de auditoría y no quedan mutación, saldo ni outbox de éxito.
- RDS-C05-G02: Una migración falla y conserva datos previos, versión y cadena auditables.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
