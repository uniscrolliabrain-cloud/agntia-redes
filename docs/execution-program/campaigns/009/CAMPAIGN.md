# RDS-C09 · Adaptador Postiz o backend social elegido

**DESIGN_ONLY · NOT_STARTED · 9/42.** Fuente [docs/campaigns/09-adaptador-postiz-o-backend-social-elegido.md](../../campaigns/09-adaptador-postiz-o-backend-social-elegido.md).

## Resultado y límites
Integrar un backend autohospedado como proveedor invisible y acotado.

**Invariante:** El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.. **Dependencias:** RDS-C08.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/adapters/src/postiz.ts`.
- DTO y esquema: `packages/contracts/src/09.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/09.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/009.test.ts` y `tests/fixtures/009/`.
- Evidencia: `docs/evidence/c09/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/adapters/postiz/`, `tests/contracts/postiz/`, `docs/adr/backend-social.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 009.01 — RDS-C09-T01

**Acción:** Verificar versión/edición/API instalada y seleccionar Postiz o alternativa; documentar por qué no instalar ambas.

**Superficie primaria:** `packages/adapters/src/postiz.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/09.ts` y test `tests/campaigns/009.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C08-T07.

### 009.02 — RDS-C09-T02

**Acción:** Leer integraciones/cuentas del workspace servidor y mapear IDs explícitos por tenant/marca.

**Superficie primaria:** `packages/adapters/src/postiz.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/09.ts` y test `tests/campaigns/009.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C09-T01.

### 009.03 — RDS-C09-T03

**Acción:** Normalizar create/schedule/media/settings permitidos sin exponer API admin o tools genéricas.

**Superficie primaria:** `packages/adapters/src/postiz.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/09.ts` y test `tests/campaigns/009.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C09-T02.

### 009.04 — RDS-C09-T04

**Acción:** Separar upload, job remoto y post visible; fijar scheduleAuthority remoto o local por intent.

**Superficie primaria:** `packages/adapters/src/postiz.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/09.ts` y test `tests/campaigns/009.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C09-T03.

### 009.05 — RDS-C09-T05

**Acción:** Persistir links/idempotency/mapping hash y reconciliar estados del backend con receipts de canal cuando existan.

**Superficie primaria:** `packages/adapters/src/postiz.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/09.ts` y test `tests/campaigns/009.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C09-T04.

### 009.06 — RDS-C09-T06

**Acción:** Revisar aislamiento, licencia, storage/OAuth apps y coste de la instancia antes de habilitar clientes.

**Superficie primaria:** `packages/adapters/src/postiz.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/09.ts` y test `tests/campaigns/009.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C09-T05.

### 009.07 — RDS-C09-T07

**Acción:** Probar fixture real local autorizada, job aceptado pero no publicado, fallo parcial y replay sin crear dos schedules.

**Superficie primaria:** `packages/adapters/src/postiz.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/09.ts` y test `tests/campaigns/009.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C09-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C09-G01 / NOT_EXECUTED:** Postiz devuelve job aceptado; UI permanece pendiente de confirmación remota, sin post fake.
- **RDS-C09-G02 / NOT_EXECUTED:** Worker reinicia y reconoce schedule remoto existente sin programar una segunda copia.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
