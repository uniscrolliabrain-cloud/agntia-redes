# RDS-C21 · Outbox, workers, leases e inbox durable

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia21/42.

## Objetivo y contrato

Ejecutar intents de forma recuperable sin convertir HTTP en exactly-once.

Invariante: **Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.**

## Entrada y dependencias

Requiere RDS-C20 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/jobs/
- src/events/outbox.ts
- tests/integration/replay.test.ts

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C21-T01
Persistir intent y outbox antes de IO con dedup ligada a operación/revisión/cuenta.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C21-T02
Reclamar jobs con leases/fencing, presupuesto de retries y límites global/tenant/proveedor.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C21-T03
Revalidar principal/approval/policy/quota/rights y cancellation antes de enviar el intento.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C21-T04
Guardar request fingerprint, timestamps y receipts mínimos sin headers secretos ni cuerpos completos.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C21-T05
Caducar lease a reconciliation_required cuando el efecto puede haberse enviado, sin replay automático.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C21-T06
Implementar consumidor con inbox+efecto transaccionales y ACK después de commit; DLQ visible.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C21-T07
Probar caída pre-HTTP/post-HTTP/pre-ACK, worker viejo, duplicado/out-of-order y recuperación de proceso.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C21-G01 — NOT_EXECUTED:** Crash tras envío conserva unknown, saldo y evidencia sin crear un segundo post.
- **RDS-C21-G02 — NOT_EXECUTED:** ACK de worker con fence antiguo no cambia un intent ya reclamado por otro.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

A02; H01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
