# RDS-C36 — Integración preferente con agente y cooperación entre servicios

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/36-integracion-preferente-con-agente-y-cooperacion-entre-servicios.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Conectar la empresa SaaS manteniendo independencia y solapamiento funcional autorizado.

## Artefactos previstos
- `src/bridges/agente/`
- `docs/integration/PATCHSET-AGENTE.md`
- `tests/contracts/parent/`

## Invariante
La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.

## Dependencias y fuentes
Dependencias: RDS-C35. Fuentes: H01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C36-T01:** Releer SHA/tipos/events y mapear Principal/Approval/WorkOrder del host a contratos propios con pruebas. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.
- **RDS-C36-T02:** Verificar fuente de aprobación nativa; no reutilizar signedAt de una proyección como prueba de firma. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.
- **RDS-C36-T03:** Traducir eventos solo a schemas reales registrados y comprobar persisted antes de ACK del bridge. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.
- **RDS-C36-T04:** Conservar dedup durable más allá del TTL de ruido y registrar domainEventId/receipt de consumo. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.
- **RDS-C36-T05:** Definir handoffs voluntarios a branding/clientes/ventas/finanzas/legal/seguros/gestoría y resolver conflictos por encargo. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.
- **RDS-C36-T06:** Garantizar que desconectar host no convierte al cliente standalone en otro tenant ni invalida falsamente sus permisos locales. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.
- **RDS-C36-T07:** Entregar patchset propuesto y test consumidor simulado, sin modificar agente o hermanos hasta aprobación expresa. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.

## Gates previstos, NO ejecutados
- RDS-C36-G01: EventBus devuelve persisted=false y el bridge conserva outbox sin ACK falso.
- RDS-C36-G02: Dos especialistas proponen lo mismo y la entrega final conserva una autoridad e intent idempotente.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
