# RDS-C27 — Moderación contextual revisable

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/27-moderacion-contextual-revisable.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Usar reglas específicas de comunidad, lengua y riesgo con abstención.

## Artefactos previstos
- `src/community/moderation.ts`
- `tests/evaluations/moderation/`
- `docs/moderation-policy.md`

## Invariante
Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.

## Dependencias y fuentes
Dependencias: RDS-C26. Fuentes: P02. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C27-T01:** Versionar reglas de comunidad/marca, jurisdicción y lengua con responsable y evidence refs. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.
- **RDS-C27-T02:** Construir clasificación de propuesta y explicación con regla/contexto, separada del borrado/sanción. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.
- **RDS-C27-T03:** Definir abstención y escalado para sarcasmo, contexto incompleto, lenguaje mixto y contenido sensible. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.
- **RDS-C27-T04:** Prohibir inferencias protegidas y acciones punitivas automáticas en MVP. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.
- **RDS-C27-T05:** Exigir review/approval y capacidad real para ocultar/eliminar si se habilita más adelante. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.
- **RDS-C27-T06:** Preparar fixtures propios ES/EN/FR y términos/licencias antes de usar datasets de investigación. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.
- **RDS-C27-T07:** Evaluar falso positivo/negativo por regla/idioma y utilidad de revisión, sin usar solo un score global. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.

## Gates previstos, NO ejecutados
- RDS-C27-G01: Sarcasmo o contexto incompleto produce needs_review, no eliminación silenciosa.
- RDS-C27-G02: Dos comunidades con reglas diferentes no comparten automáticamente la misma decisión.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
