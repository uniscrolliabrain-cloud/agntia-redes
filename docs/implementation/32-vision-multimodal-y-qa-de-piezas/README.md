# RDS-C32 — Visión multimodal y QA de piezas

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/32-vision-multimodal-y-qa-de-piezas.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Revisar activos y coherencia de contenido sin convertir visión en oráculo legal.

## Artefactos previstos
- `src/models/vision.ts`
- `src/editorial/qa.ts`
- `tests/evaluations/media-qa/`

## Invariante
Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.

## Dependencias y fuentes
Dependencias: RDS-C31. Fuentes: P01, L01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C32-T01:** Definir puertos de visión y seleccionar proveedor/modelo por política de datos, coste y modalidad autorizada. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.
- **RDS-C32-T02:** Minimizar frames/audio/texto y verificar autorización de transferencia antes de enviar a tercero. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.
- **RDS-C32-T03:** Generar QA de formato, legibilidad, tono y coherencia con brief con referencias a frames/regiones. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.
- **RDS-C32-T04:** Separar sugerencia visual de permisos de imagen/música, veracidad de claims e identidad de personas. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.
- **RDS-C32-T05:** Comparar output contra schema/policy y mantener abstención ante media ambiguo o insuficiente. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.
- **RDS-C32-T06:** Ligarlo al Content Passport y al hash final; cambios de render invalidan QA/aprobación vinculados. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.
- **RDS-C32-T07:** Probar prompt oculto en imagen/subtítulo, media restringida, fixture adversarial y fallo/coste de proveedor. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.

## Gates previstos, NO ejecutados
- RDS-C32-G01: Media contiene instrucciones: el modelo no cambia cuenta, scope o política del servicio.
- RDS-C32-G02: No hay base para enviar un DM/imagen al modelo y se ofrece revisión local sin transferencia.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
