# RDS-C38 — Concurrencia, fallos distribuidos y propiedades

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/38-concurrencia-fallos-distribuidos-y-propiedades.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Demostrar que las fronteras sobreviven más allá del camino feliz.

## Artefactos previstos
- `tests/faults/`
- `tests/property/`
- `docs/verification/faults.md`

## Invariante
Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.

## Dependencias y fuentes
Dependencias: RDS-C37. Fuentes: P03, P05. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C38-T01:** Construir fixtures deterministas, semillas y property tests de contratos/transiciones/hashes/scope. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.
- **RDS-C38-T02:** Inyectar caída pre/post-HTTP, pre-ACK, DB/worker/cola/proveedor, throttling y cambio concurrente. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.
- **RDS-C38-T03:** Ensayar leases/fencing, idempotency collisions y respuestas fuera de orden con varios trabajadores. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.
- **RDS-C38-T04:** Verificar revocación entre enqueue/claim/envío y actualización de cuenta/policy/rights tras aprobación. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.
- **RDS-C38-T05:** Simular sesión Anam interrumpida con callback repetido y consumo incierto sin reaprobación automática. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.
- **RDS-C38-T06:** Probar backup consistente y restore aislado con claves externas y reconciliación de permisos actuales. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.
- **RDS-C38-T07:** Detener release ante cross-tenant, secreto, doble efecto ambiguo, gasto sin control o pérdida de audit y conservar defecto. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.

## Gates previstos, NO ejecutados
- RDS-C38-G01: Worker antiguo despierta y no puede ACKear ni gastar/publicar con lease/fence vencidos.
- RDS-C38-G02: Caída tras efecto conserva unknown; no se cuentan dos éxitos por un único receipt.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
