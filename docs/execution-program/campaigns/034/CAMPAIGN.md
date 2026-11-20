# RDS-C34 · SDK servidor, MCP y API Hono de negocio

**DESIGN_ONLY · NOT_STARTED · 34/42.** Fuente [docs/campaigns/34-sdk-servidor-mcp-y-api-hono-de-negocio.md](../../../campaigns/34-sdk-servidor-mcp-y-api-hono-de-negocio.md).

## Resultado y límites
Exponer al host y a clientes externos capacidades nominadas con validación runtime.

**Invariante:** El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.. **Dependencias:** RDS-C33.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `packages/sdk/`, `src/http/`, `src/tools/`, `tests/contracts/sdk/`.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: `apps/api/src/routes/sdk.ts` (solo con operación externa autorizada).
- Tests: `tests/contracts/sdk/` y `tests/fixtures/c34/`.
- Evidencia: `docs/evidence/c34/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `packages/sdk/`, `src/http/`, `src/tools/`, `tests/contracts/sdk/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 034.01 — RDS-C34-T01

**Acción:** Definir cliente TS servidor con DTOs cerrados, errores, timeout/paginación y approved origins del servicio.

**Superficie:** `packages/sdk/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/sdk/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.

**Verificación:** caso `RDS-C34-T01` sobre `tests/contracts/sdk/`; evidencia `docs/evidence/c34/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C33-T07.

### 034.02 — RDS-C34-T02

**Acción:** Implementar rutas Hono exactas con sesión/IdP o partner principal verificados, sin tokens al navegador.

**Superficie:** `src/http/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/sdk/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.

**Verificación:** caso `RDS-C34-T02` sobre `tests/contracts/sdk/`; evidencia `docs/evidence/c34/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C34-T01.

### 034.03 — RDS-C34-T03

**Acción:** Exponer tools de lectura/propuesta iniciales; excluir approve/admin/budget-write/delete/publish libre.

**Superficie:** `src/tools/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/sdk/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.

**Verificación:** caso `RDS-C34-T03` sobre `tests/contracts/sdk/`; evidencia `docs/evidence/c34/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C34-T02.

### 034.04 — RDS-C34-T04

**Acción:** Usar la misma policy para MCP, Anam, API y SDK para que ningún canal sea bypass.

**Superficie:** `tests/contracts/sdk/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/sdk/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.

**Verificación:** caso `RDS-C34-T04` sobre `tests/contracts/sdk/`; evidencia `docs/evidence/c34/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C34-T03.

### 034.05 — RDS-C34-T05

**Acción:** Diseñar outbox polling/ACK y consumidor sintético durable para integración B2B/host.

**Superficie:** `packages/sdk/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/sdk/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.

**Verificación:** caso `RDS-C34-T05` sobre `tests/contracts/sdk/`; evidencia `docs/evidence/c34/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C34-T04.

### 034.06 — RDS-C34-T06

**Acción:** Proponer patchset de host y ejemplos de cliente standalone sin aplicarlos a otros repos.

**Superficie:** `src/http/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/sdk/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.

**Verificación:** caso `RDS-C34-T06` sobre `tests/contracts/sdk/`; evidencia `docs/evidence/c34/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C34-T05.

### 034.07 — RDS-C34-T07

**Acción:** Probar contrato SDK/API, malformed/unknown fields,404 cruzado, error seguro y modelo que suministra identity o ruta arbitraria.

**Superficie:** `src/tools/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/sdk/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.

**Verificación:** caso `RDS-C34-T07` sobre `tests/contracts/sdk/`; evidencia `docs/evidence/c34/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C34-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C34-G01 / NOT_EXECUTED:** Tool de Anam y MCP equivalente reciben la misma denegación de policy. **Caso:** `RDS-C34-G01` en `tests/contracts/sdk/`. **Evidencia:** `docs/evidence/c34/g01.json`.
- **RDS-C34-G02 / NOT_EXECUTED:** Cliente externo opera con su sesión sin necesitar una credencial del repo padre. **Caso:** `RDS-C34-G02` en `tests/contracts/sdk/`. **Evidencia:** `docs/evidence/c34/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
