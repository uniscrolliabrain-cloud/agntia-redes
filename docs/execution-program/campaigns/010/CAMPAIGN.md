# RDS-C10 · Adaptador Mastodon de referencia

**DESIGN_ONLY · NOT_STARTED · 10/42.** Fuente [docs/campaigns/10-adaptador-mastodon-de-referencia.md](../../../campaigns/10-adaptador-mastodon-de-referencia.md).

## Resultado y límites
Demostrar publicación controlada en instancia de laboratorio con semántica real.

**Invariante:** La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.. **Dependencias:** RDS-C09.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/adapters/src/mastodon.ts`.
- DTO y esquema: `packages/contracts/src/10.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/10.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/010.test.ts` y `tests/fixtures/010/`.
- Evidencia: `docs/evidence/c10/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/adapters/mastodon/`, `tests/integration/mastodon/`, `docs/providers/mastodon.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 010.01 — RDS-C10-T01

**Acción:** Fijar instancia/version y comprobar scopes de usuario y límites reportados por su API.

**Superficie primaria:** `packages/adapters/src/mastodon.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/10.ts` y test `tests/campaigns/010.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C09-T07.

### 010.02 — RDS-C10-T02

**Acción:** Normalizar contenido, visibilidad, idioma, media y contexto sin defaults públicos no aprobados.

**Superficie primaria:** `packages/adapters/src/mastodon.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/10.ts` y test `tests/campaigns/010.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C10-T01.

### 010.03 — RDS-C10-T03

**Acción:** Usar idempotency nativa según TTL documentado y ledger durable local para replay posterior.

**Superficie primaria:** `packages/adapters/src/mastodon.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/10.ts` y test `tests/campaigns/010.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C10-T02.

### 010.04 — RDS-C10-T04

**Acción:** Diferenciar ScheduledStatus/Status y recepción del job frente a publicación confirmada.

**Superficie primaria:** `packages/adapters/src/mastodon.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/10.ts` y test `tests/campaigns/010.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C10-T03.

### 010.05 — RDS-C10-T05

**Acción:** Preparar reconciliación, edición/borrado como nuevos comandos y controles de instancia/SSRF.

**Superficie primaria:** `packages/adapters/src/mastodon.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/10.ts` y test `tests/campaigns/010.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C10-T04.

### 010.06 — RDS-C10-T06

**Acción:** Crear cuenta/fixture local sintética autorizada; no publicar en una comunidad pública para probar.

**Superficie primaria:** `packages/adapters/src/mastodon.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/10.ts` y test `tests/campaigns/010.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C10-T05.

### 010.07 — RDS-C10-T07

**Acción:** Probar duplicate request, TTL remoto vencido, timeout, scope insuficiente y cambio de visibilidad.

**Superficie primaria:** `packages/adapters/src/mastodon.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/10.ts` y test `tests/campaigns/010.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C10-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C10-G01 / NOT_EXECUTED:** Replay días después devuelve el intent previo y no crea otro post porque expiró key remota.
- **RDS-C10-G02 / NOT_EXECUTED:** Respuesta de scheduled status no se interpreta como publicación pública ya confirmada.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
