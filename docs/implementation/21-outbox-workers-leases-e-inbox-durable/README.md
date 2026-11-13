# RDS-C21 — Outbox, workers, leases e inbox durable

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/21-outbox-workers-leases-e-inbox-durable.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Ejecutar intents de forma recuperable sin convertir HTTP en exactly-once.

## Artefactos previstos
- `src/jobs/`
- `src/events/outbox.ts`
- `tests/integration/replay.test.ts`

## Invariante
Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.

## Dependencias y fuentes
Dependencias: RDS-C20. Fuentes: A02, H01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C21-T01:** Persistir intent y outbox antes de IO con dedup ligada a operación/revisión/cuenta. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.
- **RDS-C21-T02:** Reclamar jobs con leases/fencing, presupuesto de retries y límites global/tenant/proveedor. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.
- **RDS-C21-T03:** Revalidar principal/approval/policy/quota/rights y cancellation antes de enviar el intento. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.
- **RDS-C21-T04:** Guardar request fingerprint, timestamps y receipts mínimos sin headers secretos ni cuerpos completos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.
- **RDS-C21-T05:** Caducar lease a reconciliation_required cuando el efecto puede haberse enviado, sin replay automático. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.
- **RDS-C21-T06:** Implementar consumidor con inbox+efecto transaccionales y ACK después de commit; DLQ visible. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.
- **RDS-C21-T07:** Probar caída pre-HTTP/post-HTTP/pre-ACK, worker viejo, duplicado/out-of-order y recuperación de proceso. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.

## Gates previstos, NO ejecutados
- RDS-C21-G01: Crash tras envío conserva unknown, saldo y evidencia sin crear un segundo post.
- RDS-C21-G02: ACK de worker con fence antiguo no cambia un intent ya reclamado por otro.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
