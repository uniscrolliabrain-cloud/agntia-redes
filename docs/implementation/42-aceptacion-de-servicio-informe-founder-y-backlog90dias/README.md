# RDS-C42 — Aceptación de servicio, informe founder y backlog90días

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/42-aceptacion-de-servicio-informe-founder-y-backlog90dias.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Cerrar con capacidades, límites y aceptación reales, sin convertir42 campañas en paridad universal.

## Artefactos previstos
- `docs/release/FOUNDER-REPORT.md`
- `docs/release/ACCEPTANCE.md`
- `docs/release/NEXT-90-DAYS.md`

## Invariante
La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.

## Dependencias y fuentes
Dependencias: RDS-C41. Fuentes: H01, N01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C42-T01:** Consolidar42 campañas/294 tareas y84 gates con PASS/BLOCKED/NOT_VERIFIED y enlaces a evidencia del SHA. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.
- **RDS-C42-T02:** Comparar alcance real con líderes por dominio, incluidos portal, especialistas, Anam y clientes externos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.
- **RDS-C42-T03:** Informar número de tests distintos, fallos/skips, comandos, plataformas, costes medidos y supuestos no verificados. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.
- **RDS-C42-T04:** Revisar licencia propia, términos/datasets/proveedores, contratos/DPA, canal de seguridad y responsables humanos pendientes. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.
- **RDS-C42-T05:** Clasificar entrega como documentación/demo/piloto/producción según gates reales y aceptación del cliente/owner independiente. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.
- **RDS-C42-T06:** Proponer backlog30/60/90 para calidad/escala/licencias/operación y mejoras del servicio sin comprar ni habilitar efectos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.
- **RDS-C42-T07:** Publicar PR/artefactos/evidencia sanitizada y pedir aceptación únicamente sobre entregable concreto, sin merge/deploy automático. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.

## Gates previstos, NO ejecutados
- RDS-C42-G01: Cada claim comercial tiene evidencia o una etiqueta de alcance pendiente/no verificado.
- RDS-C42-G02: Un cliente externo y el owner comprenden qué está entregado y qué falta sin leer todo el código.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
