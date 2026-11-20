# RDS-C14 · YouTube y procesamiento de vídeo

**DESIGN_ONLY · NOT_STARTED · 14/42.** Fuente [docs/campaigns/14-youtube-y-procesamiento-de-video.md](../../../campaigns/14-youtube-y-procesamiento-de-video.md).

## Resultado y límites
Separar upload, processing, visibilidad y confirmación con cuotas vigentes.

**Invariante:** Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.. **Dependencias:** RDS-C13.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/adapters/youtube/`, `tests/contracts/youtube/`, `docs/providers/youtube.md`.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/contracts/youtube/` y `tests/fixtures/c14/`.
- Evidencia: `docs/evidence/c14/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/adapters/youtube/`, `tests/contracts/youtube/`, `docs/providers/youtube.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 014.01 — RDS-C14-T01

**Acción:** Verificar scope/account/channel y documentación actual de upload/cuotas, sin números antiguos heredados.

**Superficie:** `src/adapters/youtube/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/youtube/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.

**Verificación:** caso `RDS-C14-T01` sobre `tests/contracts/youtube/`; evidencia `docs/evidence/c14/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C13-T07.

### 014.02 — RDS-C14-T02

**Acción:** Validar título/description/locales/thumbnail, made-for-kids y synthetic media según hechos/policy aplicable.

**Superficie:** `tests/contracts/youtube/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/youtube/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.

**Verificación:** caso `RDS-C14-T02` sobre `tests/contracts/youtube/`; evidencia `docs/evidence/c14/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C14-T01.

### 014.03 — RDS-C14-T03

**Acción:** Exigir visibilidad explícita aprobada y confirmar defaults/privacidad con respuesta real.

**Superficie:** `docs/providers/youtube.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/youtube/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.

**Verificación:** caso `RDS-C14-T03` sobre `tests/contracts/youtube/`; evidencia `docs/evidence/c14/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C14-T02.

### 014.04 — RDS-C14-T04

**Acción:** Gestionar resumable upload/processing y conservar upload/session/remote video IDs sin filtrar URLs de sesión.

**Superficie:** `src/adapters/youtube/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/youtube/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.

**Verificación:** caso `RDS-C14-T04` sobre `tests/contracts/youtube/`; evidencia `docs/evidence/c14/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C14-T03.

### 014.05 — RDS-C14-T05

**Acción:** Aplicar budget/cuota por operación y límites de media antes de enviar bytes.

**Superficie:** `tests/contracts/youtube/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/youtube/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.

**Verificación:** caso `RDS-C14-T05` sobre `tests/contracts/youtube/`; evidencia `docs/evidence/c14/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C14-T04.

### 014.06 — RDS-C14-T06

**Acción:** Reconciliar upload incierto y programación/estado sin recrear otro vídeo por timeout.

**Superficie:** `docs/providers/youtube.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/youtube/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.

**Verificación:** caso `RDS-C14-T06` sobre `tests/contracts/youtube/`; evidencia `docs/evidence/c14/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C14-T05.

### 014.07 — RDS-C14-T07

**Acción:** Probar canal equivocado, cuota, subida interrumpida, procesamiento fallido, publicación privada y rights expirados.

**Superficie:** `src/adapters/youtube/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/youtube/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.

**Verificación:** caso `RDS-C14-T07` sobre `tests/contracts/youtube/`; evidencia `docs/evidence/c14/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C14-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C14-G01 / NOT_EXECUTED:** Upload termina pero processing falla: el intent no figura publicado y conserva receipt de fallo. **Caso:** `RDS-C14-G01` en `tests/contracts/youtube/`. **Evidencia:** `docs/evidence/c14/g01.json`.
- **RDS-C14-G02 / NOT_EXECUTED:** Payload sin visibilidad explícita se rechaza en preview aunque el proveedor tenga default. **Caso:** `RDS-C14-G02` en `tests/contracts/youtube/`. **Evidencia:** `docs/evidence/c14/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
