# RDS-C28 · Escucha y contexto de mercado autorizado

**DESIGN_ONLY · NOT_STARTED · 28/42.** Fuente [docs/campaigns/28-escucha-y-contexto-de-mercado-autorizado.md](../../campaigns/28-escucha-y-contexto-de-mercado-autorizado.md).

## Resultado y límites
Producir señales con cobertura/fuentes sin scraping o vigilancia universal.

**Invariante:** Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.. **Dependencias:** RDS-C27.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/domain/src/listening.ts`.
- DTO y esquema: `packages/contracts/src/28.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/28.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/028.test.ts` y `tests/fixtures/028/`.
- Evidencia: `docs/evidence/c28/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/listening/`, `tests/contracts/listening/`, `docs/listening-scope.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 028.01 — RDS-C28-T01

**Acción:** Definir tópicos/fuentes autorizadas y su base/entitlement, periodo, idioma y límites de acceso.

**Superficie primaria:** `packages/domain/src/listening.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/28.ts` y test `tests/campaigns/028.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C27-T07.

### 028.02 — RDS-C28-T02

**Acción:** Diseñar colecta incremental minimizada con source IDs/fecha/hash y detección de gaps/stale.

**Superficie primaria:** `packages/domain/src/listening.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/28.ts` y test `tests/campaigns/028.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C28-T01.

### 028.03 — RDS-C28-T03

**Acción:** Separar mención observada, hipótesis de tendencia y supuesto riesgo de crisis con evidencia.

**Superficie primaria:** `packages/domain/src/listening.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/28.ts` y test `tests/campaigns/028.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C28-T02.

### 028.04 — RDS-C28-T04

**Acción:** Bloquear perfilado sensible, vigilancia personal y bypass de APIs no disponibles.

**Superficie primaria:** `packages/domain/src/listening.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/28.ts` y test `tests/campaigns/028.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C28-T03.

### 028.05 — RDS-C28-T05

**Acción:** Controlar budget de búsquedas/listening pagado y ventanas de retención para resultados externos.

**Superficie primaria:** `packages/domain/src/listening.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/28.ts` y test `tests/campaigns/028.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C28-T04.

### 028.06 — RDS-C28-T06

**Acción:** Generar briefing con citas/periodo/cobertura y revisión, sin promocionar contenido a policy o memoria confiable.

**Superficie primaria:** `packages/domain/src/listening.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/28.ts` y test `tests/campaigns/028.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C28-T05.

### 028.07 — RDS-C28-T07

**Acción:** Probar fuente caída, muestra sesgada, evento duplicado, orden temporal e instrucción adversarial en un post.

**Superficie primaria:** `packages/domain/src/listening.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/28.ts` y test `tests/campaigns/028.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C28-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C28-G01 / NOT_EXECUTED:** Sin fuente o cobertura suficiente el reporte marca insufficient_information, no tendencia cierta.
- **RDS-C28-G02 / NOT_EXECUTED:** Un resultado externo pide cambiar policy y solo se conserva como dato no confiable.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
