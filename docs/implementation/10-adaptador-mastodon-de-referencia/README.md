# RDS-C10 — Adaptador Mastodon de referencia

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/10-adaptador-mastodon-de-referencia.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Demostrar publicación controlada en instancia de laboratorio con semántica real.

## Artefactos previstos
- `src/adapters/mastodon/`
- `tests/integration/mastodon/`
- `docs/providers/mastodon.md`

## Invariante
La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.

## Dependencias y fuentes
Dependencias: RDS-C09. Fuentes: A02. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C10-T01:** Fijar instancia/version y comprobar scopes de usuario y límites reportados por su API. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.
- **RDS-C10-T02:** Normalizar contenido, visibilidad, idioma, media y contexto sin defaults públicos no aprobados. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.
- **RDS-C10-T03:** Usar idempotency nativa según TTL documentado y ledger durable local para replay posterior. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.
- **RDS-C10-T04:** Diferenciar ScheduledStatus/Status y recepción del job frente a publicación confirmada. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.
- **RDS-C10-T05:** Preparar reconciliación, edición/borrado como nuevos comandos y controles de instancia/SSRF. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.
- **RDS-C10-T06:** Crear cuenta/fixture local sintética autorizada; no publicar en una comunidad pública para probar. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.
- **RDS-C10-T07:** Probar duplicate request, TTL remoto vencido, timeout, scope insuficiente y cambio de visibilidad. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.

## Gates previstos, NO ejecutados
- RDS-C10-G01: Replay días después devuelve el intent previo y no crea otro post porque expiró key remota.
- RDS-C10-G02: Respuesta de scheduled status no se interpreta como publicación pública ya confirmada.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
