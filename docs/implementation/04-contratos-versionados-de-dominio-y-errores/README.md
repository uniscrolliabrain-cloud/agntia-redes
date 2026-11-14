# RDS-C04 — Contratos versionados de dominio y errores

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/04-contratos-versionados-de-dominio-y-errores.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Fijar fronteras tipadas antes de escribir adaptadores o UI.

## Artefactos previstos
- `src/contracts/index.ts`
- `docs/contracts/schemas/`
- `tests/contracts/wire.test.ts`

## Invariante
Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.

## Dependencias y fuentes
Dependencias: RDS-C03. Fuentes: H01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C04-T01:** Crear DTOs cerrados de cuenta, brief, work order, variante, intent, approval binding y receipt. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.
- **RDS-C04-T02:** Representar IDs remotos como opacos y dinero/ratios sin floats no finitos; limitar strings, listas y bytes. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.
- **RDS-C04-T03:** Versionar payloads, política, mapping y schemas; diferenciar instanteUTC, zonaIANA y tiempo local. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.
- **RDS-C04-T04:** Definir errores uniformes seguros, incluyendo outcome_unknown y no retry de efectos inciertos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.
- **RDS-C04-T05:** Definir paginación, cursores, correlation/causation e idempotency key sin aceptar identidad declarada por modelo. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.
- **RDS-C04-T06:** Diseñar contratos de sesión Anam, service plan y aceptación sin introducir API keys en DTOs públicos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.
- **RDS-C04-T07:** Ejecutar round-trip, schema drift, campos desconocidos, NaN/Infinity, fechas ambiguas e IDs cruzados. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.

## Gates previstos, NO ejecutados
- RDS-C04-G01: Payload con tenant/role/URL arbitrarios fuera del DTO es rechazado antes de IO.
- RDS-C04-G02: Contrato viejo no compatible devuelve error explícito; no elimina campos silenciosamente.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
