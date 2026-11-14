# RDS-C31 — Equipo agéntico especialista y modelos económicos

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/31-equipo-agentico-especialista-y-modelos-economicos.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Organizar trabajo propio de la empresa SaaS con tools y memoria de confianza limitada.

## Artefactos previstos
- `src/specialists/`
- `src/models/router.ts`
- `tests/evaluations/team/`

## Invariante
Mayor modelo o más agentes no significan más permiso ni una revisión humana real.

## Dependencias y fuentes
Dependencias: RDS-C30. Fuentes: P03, P04, P05. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C31-T01:** Definir coordinador/editor/diseñador/analista/community/QA como roles con capacidades y colas auditables. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.
- **RDS-C31-T02:** Permitir un agente cubra varios roles bajo policy sin saltarse separación de revisiones humanas requerida. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.
- **RDS-C31-T03:** Integrar modelos de texto por tarea/coste/DPA, con timeout/fallback y sin secreto de proveedor social. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.
- **RDS-C31-T04:** Convertir cada salida en propuesta tipada con fuentes, incertidumbre y model/policy/version registradas. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.
- **RDS-C31-T05:** Separar memoria de cliente/proyecto y promoción revisada a política; contenido externo nunca se vuelve instrucción fiable solo por persistir. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.
- **RDS-C31-T06:** Contabilizar tokens/coste/calidad y medir tareas legítimas junto con ataques, no solo rechazo. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.
- **RDS-C31-T07:** Probar delegación fuera de alcance, loop de agentes, memoria contaminada y modelo que intenta aprobar su propio trabajo. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.

## Gates previstos, NO ejecutados
- RDS-C31-G01: Agente barato produce tool inválida: falla schema sin obtener shell/HTTP alternativo.
- RDS-C31-G02: El sistema bloquea un ataque y aun así completa el resumen legítimo con fuentes permitidas.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
