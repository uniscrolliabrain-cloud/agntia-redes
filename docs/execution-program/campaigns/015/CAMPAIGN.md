# RDS-C15 · TikTok y consentimiento específico de publicación

**DESIGN_ONLY · NOT_STARTED · 15/42.** Fuente [docs/campaigns/15-tiktok-y-consentimiento-especifico-de-publicacion.md](../../../campaigns/15-tiktok-y-consentimiento-especifico-de-publicacion.md).

## Resultado y límites
Respetar creator settings, audit del cliente y elección real del usuario.

**Invariante:** Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.. **Dependencias:** RDS-C14.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/adapters/tiktok/`, `docs/providers/tiktok.md`, `tests/contracts/tiktok/`.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/contracts/tiktok/` y `tests/fixtures/c15/`.
- Evidencia: `docs/evidence/c15/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/adapters/tiktok/`, `docs/providers/tiktok.md`, `tests/contracts/tiktok/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 015.01 — RDS-C15-T01

**Acción:** Verificar app, producto, scopes y estado de auditoría mediante cuenta/entorno autorizados.

**Superficie:** `src/adapters/tiktok/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/tiktok/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.

**Verificación:** caso `RDS-C15-T01` sobre `tests/contracts/tiktok/`; evidencia `docs/evidence/c15/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C14-T07.

### 015.02 — RDS-C15-T02

**Acción:** Obtener creator info y opciones actuales antes de formar preview, sin ocultar elecciones obligatorias.

**Superficie:** `docs/providers/tiktok.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/tiktok/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.

**Verificación:** caso `RDS-C15-T02` sobre `tests/contracts/tiktok/`; evidencia `docs/evidence/c15/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C15-T01.

### 015.03 — RDS-C15-T03

**Acción:** Capturar consentimiento de upload/publicación y metadata exacta del usuario, separado del contrato SaaS.

**Superficie:** `tests/contracts/tiktok/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/tiktok/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.

**Verificación:** caso `RDS-C15-T03` sobre `tests/contracts/tiktok/`; evidencia `docs/evidence/c15/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C15-T02.

### 015.04 — RDS-C15-T04

**Acción:** Implementar la ruta elegida Direct Post/upload con límites reales y sin opciones privadas inventadas.

**Superficie:** `src/adapters/tiktok/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/tiktok/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.

**Verificación:** caso `RDS-C15-T04` sobre `tests/contracts/tiktok/`; evidencia `docs/evidence/c15/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C15-T03.

### 015.05 — RDS-C15-T05

**Acción:** Distinguir restricciones de apps no auditadas de errores de token/cuenta y bloquear público cuando aplique.

**Superficie:** `docs/providers/tiktok.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/tiktok/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.

**Verificación:** caso `RDS-C15-T05` sobre `tests/contracts/tiktok/`; evidencia `docs/evidence/c15/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C15-T04.

### 015.06 — RDS-C15-T06

**Acción:** Registrar upload/publish refs y consultar outcome; no reintentar una creación incierta automáticamente.

**Superficie:** `tests/contracts/tiktok/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/tiktok/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.

**Verificación:** caso `RDS-C15-T06` sobre `tests/contracts/tiktok/`; evidencia `docs/evidence/c15/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C15-T05.

### 015.07 — RDS-C15-T07

**Acción:** Probar usuario que revoca consentimiento, app no auditada, cap alcanzado, opciones cambiadas y account cross-tenant.

**Superficie:** `src/adapters/tiktok/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/tiktok/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.

**Verificación:** caso `RDS-C15-T07` sobre `tests/contracts/tiktok/`; evidencia `docs/evidence/c15/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C15-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C15-G01 / NOT_EXECUTED:** App sin audit no publica público ni evade la restricción mediante browser. **Caso:** `RDS-C15-G01` en `tests/contracts/tiktok/`. **Evidencia:** `docs/evidence/c15/g01.json`.
- **RDS-C15-G02 / NOT_EXECUTED:** Creator cambia opciones tras preview: aprobación/payload se invalida antes de upload. **Caso:** `RDS-C15-G02` en `tests/contracts/tiktok/`. **Evidencia:** `docs/evidence/c15/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
