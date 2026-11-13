# RDS-C28 — Escucha y contexto de mercado autorizado

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/28-escucha-y-contexto-de-mercado-autorizado.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Producir señales con cobertura/fuentes sin scraping o vigilancia universal.

## Artefactos previstos
- `src/listening/`
- `tests/contracts/listening/`
- `docs/listening-scope.md`

## Invariante
Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.

## Dependencias y fuentes
Dependencias: RDS-C27. Fuentes: P01, P04. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C28-T01:** Definir tópicos/fuentes autorizadas y su base/entitlement, periodo, idioma y límites de acceso. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.
- **RDS-C28-T02:** Diseñar colecta incremental minimizada con source IDs/fecha/hash y detección de gaps/stale. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.
- **RDS-C28-T03:** Separar mención observada, hipótesis de tendencia y supuesto riesgo de crisis con evidencia. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.
- **RDS-C28-T04:** Bloquear perfilado sensible, vigilancia personal y bypass de APIs no disponibles. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.
- **RDS-C28-T05:** Controlar budget de búsquedas/listening pagado y ventanas de retención para resultados externos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.
- **RDS-C28-T06:** Generar briefing con citas/periodo/cobertura y revisión, sin promocionar contenido a policy o memoria confiable. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.
- **RDS-C28-T07:** Probar fuente caída, muestra sesgada, evento duplicado, orden temporal e instrucción adversarial en un post. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.

## Gates previstos, NO ejecutados
- RDS-C28-G01: Sin fuente o cobertura suficiente el reporte marca insufficient_information, no tendencia cierta.
- RDS-C28-G02: Un resultado externo pide cambiar policy y solo se conserva como dato no confiable.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
