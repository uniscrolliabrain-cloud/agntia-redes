# RDS-C34 · SDK servidor, MCP y API Hono de negocio

**DESIGN_ONLY · NOT_STARTED · 34/42.** Fuente [docs/campaigns/34-sdk-servidor-mcp-y-api-hono-de-negocio.md](../../../campaigns/34-sdk-servidor-mcp-y-api-hono-de-negocio.md).

## Resultado y límites
Exponer al host y a clientes externos capacidades nominadas con validación runtime.

**Invariante:** El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.. **Dependencias:** RDS-C33.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/sdk/src/index.ts`.
- DTO y esquema: `packages/contracts/src/34.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/34.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/034.test.ts` y `tests/fixtures/034/`.
- Evidencia: `docs/evidence/c34/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `packages/sdk/`, `src/http/`, `src/tools/`, `tests/contracts/sdk/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 034.01 — RDS-C34-T01

**Acción:** Definir cliente TS servidor con DTOs cerrados, errores, timeout/paginación y approved origins del servicio.

**Superficie primaria:** `packages/sdk/src/index.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/34.ts` y test `tests/campaigns/034.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C33-T07.

### 034.02 — RDS-C34-T02

**Acción:** Implementar rutas Hono exactas con sesión/IdP o partner principal verificados, sin tokens al navegador.

**Superficie primaria:** `packages/sdk/src/index.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/34.ts` y test `tests/campaigns/034.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C34-T01.

### 034.03 — RDS-C34-T03

**Acción:** Exponer tools de lectura/propuesta iniciales; excluir approve/admin/budget-write/delete/publish libre.

**Superficie primaria:** `packages/sdk/src/index.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/34.ts` y test `tests/campaigns/034.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C34-T02.

### 034.04 — RDS-C34-T04

**Acción:** Usar la misma policy para MCP, Anam, API y SDK para que ningún canal sea bypass.

**Superficie primaria:** `packages/sdk/src/index.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/34.ts` y test `tests/campaigns/034.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C34-T03.

### 034.05 — RDS-C34-T05

**Acción:** Diseñar outbox polling/ACK y consumidor sintético durable para integración B2B/host.

**Superficie primaria:** `packages/sdk/src/index.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/34.ts` y test `tests/campaigns/034.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C34-T04.

### 034.06 — RDS-C34-T06

**Acción:** Proponer patchset de host y ejemplos de cliente standalone sin aplicarlos a otros repos.

**Superficie primaria:** `packages/sdk/src/index.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/34.ts` y test `tests/campaigns/034.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C34-T05.

### 034.07 — RDS-C34-T07

**Acción:** Probar contrato SDK/API, malformed/unknown fields,404 cruzado, error seguro y modelo que suministra identity o ruta arbitraria.

**Superficie primaria:** `packages/sdk/src/index.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/34.ts` y test `tests/campaigns/034.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C34-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C34-G01 / NOT_EXECUTED:** Tool de Anam y MCP equivalente reciben la misma denegación de policy.
- **RDS-C34-G02 / NOT_EXECUTED:** Cliente externo opera con su sesión sin necesitar una credencial del repo padre.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
