# RDS-C39 — Observabilidad, rendimiento y economía del servicio

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/39-observabilidad-rendimiento-y-economia-del-servicio.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Medir capacidad real y compromisos sin inventar SLA o margen comercial.

## Artefactos previstos
- `src/telemetry/`
- `tests/performance/`
- `docs/operations/capacity.md`

## Invariante
Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.

## Dependencias y fuentes
Dependencias: RDS-C38. Fuentes: N04, A08. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C39-T01:** Emitir métricas de intent/outcome/lag/errors/approval/cost con cardinalidad/PII controladas y scopes adecuados. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.
- **RDS-C39-T02:** Crear trazas/correlation entre sesión, work order, revisión, job y receipt sin secretos o textos privados. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.
- **RDS-C39-T03:** Medir p50/p95, throughput, CPU/RAM/disco, media/egress y minutos/concurrencia por perfil y arquitectura. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.
- **RDS-C39-T04:** Reconciliar coste observado contra fuentes/tarifas/facturas y separar coste técnico de precio/margen retail. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.
- **RDS-C39-T05:** Configurar alertas operativas, DLQ/unknown y escalado humano según horario/SLA realmente acordados. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.
- **RDS-C39-T06:** Revisar cuota/gasto agregado entre cliente/proveedor y evitar doble reserva de recursos o cargos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.
- **RDS-C39-T07:** Publicar resultados con entorno/duración/carga/limitaciones, sin presentar API vacía como capacidad de agencia completa. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.

## Gates previstos, NO ejecutados
- RDS-C39-G01: Proveedor/collector cae y la vista marca stale/unknown sin un estado global seguro.
- RDS-C39-G02: Plan agotado reduce análisis opcional o admisión, no audit/aislamiento/revisión requerida.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
