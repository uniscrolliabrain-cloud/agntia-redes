# RDS-C25 — Ingestión de inbox y webhooks autorizados

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/25-ingestion-de-inbox-y-webhooks-autorizados.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Recibir hechos sociales con firma, minimización y protección contra replay.

## Artefactos previstos
- `src/inbox/ingest.ts`
- `src/inbox/sources.ts`
- `tests/security/webhooks.test.ts`

## Invariante
Un webhook con eventId conocido y contenido distinto es conflicto, no duplicado inocuo.

## Dependencias y fuentes
Dependencias: RDS-C24. Fuentes: P03, L01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C25-T01:** Verificar producto/scopes de lectura de comentarios/DM por cuenta y no asumir acceso universal. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un webhook con eventId conocido y contenido distinto es conflicto, no duplicado inocuo.
- **RDS-C25-T02:** Autenticar webhook según contrato, raw-body signature/canonicalization, timestamp y secret ref del provider. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un webhook con eventId conocido y contenido distinto es conflicto, no duplicado inocuo.
- **RDS-C25-T03:** Deduplicar event IDs/hash por fuente/tenant y manejar out-of-order sin perder hechos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un webhook con eventId conocido y contenido distinto es conflicto, no duplicado inocuo.
- **RDS-C25-T04:** Limitar tasa/tamaño/retención/backpressure y guardar solo contexto mínimo autorizado. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un webhook con eventId conocido y contenido distinto es conflicto, no duplicado inocuo.
- **RDS-C25-T05:** Normalizar hilos, remitentes y adjuntos como datos no confiables, con refs externas sin identidad CRM inferida. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un webhook con eventId conocido y contenido distinto es conflicto, no duplicado inocuo.
- **RDS-C25-T06:** Coordinar polling incremental y webhook para evitar doble ingesta y gaps detectables. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un webhook con eventId conocido y contenido distinto es conflicto, no duplicado inocuo.
- **RDS-C25-T07:** Probar firma falsa, replay/collision, callback de otra cuenta, DM no autorizado y payload con prompt injection. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un webhook con eventId conocido y contenido distinto es conflicto, no duplicado inocuo.

## Gates previstos, NO ejecutados
- RDS-C25-G01: Payload firmado de cuentaB no puede entrar al inbox del clienteA.
- RDS-C25-G02: Caída de store no ACKea un evento no persistido y el replay no duplica el efecto.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
