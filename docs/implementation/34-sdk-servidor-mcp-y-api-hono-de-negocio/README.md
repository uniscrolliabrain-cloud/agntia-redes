# RDS-C34 — SDK servidor, MCP y API Hono de negocio

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/34-sdk-servidor-mcp-y-api-hono-de-negocio.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Exponer al host y a clientes externos capacidades nominadas con validación runtime.

## Artefactos previstos
- `packages/sdk/`
- `src/http/`
- `src/tools/`
- `tests/contracts/sdk/`

## Invariante
El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.

## Dependencias y fuentes
Dependencias: RDS-C33. Fuentes: H01, N02. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C34-T01:** Definir cliente TS servidor con DTOs cerrados, errores, timeout/paginación y approved origins del servicio. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.
- **RDS-C34-T02:** Implementar rutas Hono exactas con sesión/IdP o partner principal verificados, sin tokens al navegador. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.
- **RDS-C34-T03:** Exponer tools de lectura/propuesta iniciales; excluir approve/admin/budget-write/delete/publish libre. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.
- **RDS-C34-T04:** Usar la misma policy para MCP, Anam, API y SDK para que ningún canal sea bypass. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.
- **RDS-C34-T05:** Diseñar outbox polling/ACK y consumidor sintético durable para integración B2B/host. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.
- **RDS-C34-T06:** Proponer patchset de host y ejemplos de cliente standalone sin aplicarlos a otros repos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.
- **RDS-C34-T07:** Probar contrato SDK/API, malformed/unknown fields,404 cruzado, error seguro y modelo que suministra identity o ruta arbitraria. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.

## Gates previstos, NO ejecutados
- RDS-C34-G01: Tool de Anam y MCP equivalente reciben la misma denegación de policy.
- RDS-C34-G02: Cliente externo opera con su sesión sin necesitar una credencial del repo padre.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
