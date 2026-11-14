# RDS-C18 — Work orders, briefs y variantes editoriales

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/18-work-orders-briefs-y-variantes-editoriales.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Convertir conversación en entregable trazable sin ejecutar lo que el modelo redacta.

## Artefactos previstos
- `src/editorial/brief.ts`
- `src/editorial/variants.ts`
- `tests/domain/brief.test.ts`

## Invariante
La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.

## Dependencias y fuentes
Dependencias: RDS-C17. Fuentes: P01, H01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C18-T01:** Crear WorkOrder con alcance, objetivo, deadline, entregables, fuentes, responsables y criterio de aceptación. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.
- **RDS-C18-T02:** Validar ServiceAgreement/entitlements y distinguir propuesta de cambio de alcance de trabajo ya contratado. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.
- **RDS-C18-T03:** Producir variantes por canal y ES/EN/FR ligadas a brand policy propia o importada y fuentes declaradas. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.
- **RDS-C18-T04:** Comprobar límites de texto/CTA/enlaces/alt/disclosures y conservar incertidumbre de claims. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.
- **RDS-C18-T05:** Guardar cada revisión y diff material, incluidos traducción, hashtags, media y destinatario/visibilidad. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.
- **RDS-C18-T06:** Permitir revisión y aceptación de entregable distintas de la autorización de publicación/cobro. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.
- **RDS-C18-T07:** Probar brief contradictorio, fuente caducada, cambio de marca, copy sin evidencia y variante que altera significado. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.

## Gates previstos, NO ejecutados
- RDS-C18-G01: Cliente dice que cambie el alcance y se abre ChangeRequest, sin elevar cuota/cargo automáticamente.
- RDS-C18-G02: Traducción cambia una afirmación comercial y requiere revisión nueva con fuente.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
