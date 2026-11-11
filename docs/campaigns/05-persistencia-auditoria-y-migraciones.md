# RDS-C05 · Persistencia, auditoría y migraciones

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia5/42.

## Objetivo y contrato

Guardar hechos y estado por cliente con transacciones locales verificables.

Invariante: **SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.**

## Entrada y dependencias

Requiere RDS-C04 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/storage/migrations/
- src/storage/audit.ts
- tests/integration/migrations.test.ts

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C05-T01
Crear tablas tenant-scoped de acuerdos, cuentas, contenido, revisiones, intents, attempts, receipts y presupuesto.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C05-T02
Añadir inbox/outbox, dedup, external links y restricciones compuestas que impidan asociaciones cruzadas.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C05-T03
Guardar mutación, historial, idempotency y evento en una transacción con política de concurrencia documentada.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C05-T04
Implementar audit append-only con actor/capacidad/correlación, hashes y verificador sin payloads sensibles.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C05-T05
Preparar backups antes de DDL, migración fresh/upgrade, rollback ante fallo y lectura de versiones compatibles.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C05-T06
Limitar retención/volumen y acceso a datos/documentos; separar referencias de claves y contenido original.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C05-T07
Probar dos escritores, conflicto de revisión, caída de DB y preservación de historia de un esquema anterior.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: SQLite o Postgres no comparten transacción con el HTTP social; la cola no prueba el efecto remoto.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C05-G01 — NOT_EXECUTED:** Falla el append de auditoría y no quedan mutación, saldo ni outbox de éxito.
- **RDS-C05-G02 — NOT_EXECUTED:** Una migración falla y conserva datos previos, versión y cadena auditables.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

H01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
