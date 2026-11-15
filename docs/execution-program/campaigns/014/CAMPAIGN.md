# RDS-C14 · YouTube y procesamiento de vídeo

**DESIGN_ONLY · NOT_STARTED · 14/42.** Fuente [docs/campaigns/14-youtube-y-procesamiento-de-video.md](../../../campaigns/14-youtube-y-procesamiento-de-video.md).

## Resultado y límites
Separar upload, processing, visibilidad y confirmación con cuotas vigentes.

**Invariante:** Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.. **Dependencias:** RDS-C13.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/adapters/src/youtube.ts`.
- DTO y esquema: `packages/contracts/src/14.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/14.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/014.test.ts` y `tests/fixtures/014/`.
- Evidencia: `docs/evidence/c14/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/adapters/youtube/`, `tests/contracts/youtube/`, `docs/providers/youtube.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 014.01 — RDS-C14-T01

**Acción:** Verificar scope/account/channel y documentación actual de upload/cuotas, sin números antiguos heredados.

**Superficie primaria:** `packages/adapters/src/youtube.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/14.ts` y test `tests/campaigns/014.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C13-T07.

### 014.02 — RDS-C14-T02

**Acción:** Validar título/description/locales/thumbnail, made-for-kids y synthetic media según hechos/policy aplicable.

**Superficie primaria:** `packages/adapters/src/youtube.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/14.ts` y test `tests/campaigns/014.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C14-T01.

### 014.03 — RDS-C14-T03

**Acción:** Exigir visibilidad explícita aprobada y confirmar defaults/privacidad con respuesta real.

**Superficie primaria:** `packages/adapters/src/youtube.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/14.ts` y test `tests/campaigns/014.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C14-T02.

### 014.04 — RDS-C14-T04

**Acción:** Gestionar resumable upload/processing y conservar upload/session/remote video IDs sin filtrar URLs de sesión.

**Superficie primaria:** `packages/adapters/src/youtube.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/14.ts` y test `tests/campaigns/014.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C14-T03.

### 014.05 — RDS-C14-T05

**Acción:** Aplicar budget/cuota por operación y límites de media antes de enviar bytes.

**Superficie primaria:** `packages/adapters/src/youtube.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/14.ts` y test `tests/campaigns/014.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C14-T04.

### 014.06 — RDS-C14-T06

**Acción:** Reconciliar upload incierto y programación/estado sin recrear otro vídeo por timeout.

**Superficie primaria:** `packages/adapters/src/youtube.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/14.ts` y test `tests/campaigns/014.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C14-T05.

### 014.07 — RDS-C14-T07

**Acción:** Probar canal equivocado, cuota, subida interrumpida, procesamiento fallido, publicación privada y rights expirados.

**Superficie primaria:** `packages/adapters/src/youtube.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/14.ts` y test `tests/campaigns/014.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C14-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C14-G01 / NOT_EXECUTED:** Upload termina pero processing falla: el intent no figura publicado y conserva receipt de fallo.
- **RDS-C14-G02 / NOT_EXECUTED:** Payload sin visibilidad explícita se rechaza en preview aunque el proveedor tenga default.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
