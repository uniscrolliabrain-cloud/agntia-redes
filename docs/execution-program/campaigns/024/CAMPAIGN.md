# RDS-C24 · Reconciliación, edición, retirada y kill switch

**DESIGN_ONLY · NOT_STARTED · 24/42.** Fuente [docs/campaigns/24-reconciliacion-edicion-retirada-y-kill-switch.md](../../../campaigns/24-reconciliacion-edicion-retirada-y-kill-switch.md).

## Resultado y límites
Resolver incertidumbre sin borrar historia ni inventar rollback remoto.

**Invariante:** Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.. **Dependencias:** RDS-C23.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/publication/reconcile.ts`, `src/publication/changes.ts`, `tests/integration/reconcile.test.ts`.
- Presente en el repositorio hoy: `src/publication/reconcile.ts`, `tests/integration/reconcile.test.ts` (2/3 superficies).
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: `apps/api/src/routes/publication-reconcile.ts` (solo con operación externa autorizada).
- Tests: `tests/integration/reconcile.test.ts` y `tests/fixtures/c24/`.
- Evidencia: `docs/evidence/c024/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/publication/reconcile.ts`, `src/publication/changes.ts`, `tests/integration/reconcile.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 024.01 — RDS-C24-T01

**Acción:** Consultar por receipt/operation ref inequívoca cuando el proveedor lo permite y registrar limitaciones.

**Superficie:** `src/publication/reconcile.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/reconcile.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.

**Verificación:** caso `RDS-C24-T01` sobre `tests/integration/reconcile.test.ts`; evidencia `docs/evidence/c024/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C23-T07.

### 024.02 — RDS-C24-T02

**Acción:** Crear cola de revisión ante lookup ambiguo; no buscar solo texto/hora para asumir identidad del post.

**Superficie:** `src/publication/changes.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/reconcile.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.

**Verificación:** caso `RDS-C24-T02` sobre `tests/integration/reconcile.test.ts`; evidencia `docs/evidence/c024/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C24-T01.

### 024.03 — RDS-C24-T03

**Acción:** Tramitar edición/borrado como nuevas operaciones aprobadas y con expected remote revision cuando exista.

**Superficie:** `tests/integration/reconcile.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/reconcile.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.

**Verificación:** caso `RDS-C24-T03` sobre `tests/integration/reconcile.test.ts`; evidencia `docs/evidence/c024/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C24-T02.

### 024.04 — RDS-C24-T04

**Acción:** Conservar tombstone y evidencia mínima de remoto eliminado/privado/modificado fuera del servicio.

**Superficie:** `src/publication/reconcile.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/reconcile.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.

**Verificación:** caso `RDS-C24-T04` sobre `tests/integration/reconcile.test.ts`; evidencia `docs/evidence/c024/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C24-T03.

### 024.05 — RDS-C24-T05

**Acción:** Implementar kill switch por cliente/cuenta/proveedor y distinguir cancelar admisión de cancelar remoto.

**Superficie:** `src/publication/changes.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/reconcile.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.

**Verificación:** caso `RDS-C24-T05` sobre `tests/integration/reconcile.test.ts`; evidencia `docs/evidence/c024/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C24-T04.

### 024.06 — RDS-C24-T06

**Acción:** Coordinar saldo/intent/policy tras restore o reintento manual autorizado.

**Superficie:** `tests/integration/reconcile.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/reconcile.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.

**Verificación:** caso `RDS-C24-T06` sobre `tests/integration/reconcile.test.ts`; evidencia `docs/evidence/c024/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C24-T05.

### 024.07 — RDS-C24-T07

**Acción:** Probar timeout tras create, delete ya realizado, post ajeno parecido y pausa posterior a aceptación remota.

**Superficie:** `src/publication/reconcile.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/reconcile.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.

**Verificación:** caso `RDS-C24-T07` sobre `tests/integration/reconcile.test.ts`; evidencia `docs/evidence/c024/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C24-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C24-G01 / PASS:** Sin lookup fiable el intent permanece unknown y no se reenvía para cerrar un dashboard. **Caso:** `RDS-C24-G01` en `tests/integration/reconcile.test.ts`. **Evidencia:** `docs/evidence/c024/g01.json`.
- **RDS-C24-G02 / NOT_EXECUTED:** Otro usuario modifica el post remoto y una actualización local se bloquea en conflicto. **Caso:** `RDS-C24-G02` en `tests/integration/reconcile.test.ts`. **Evidencia:** `docs/evidence/c024/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_VERIFIED (reconciliación) sin edición ni retirada remota.
**SHA:** bc293688d95b0ef99bf5b4e91c686d3d1d259b7d
**Archivos y diff:** src/publication/reconcile.ts, tests/integration/reconcile.test.ts
**Tests/comandos/fixtures:** npx vitest run tests/integration/reconcile.test.ts -> 4/4 PASS. Fixtures sintéticas propias; sin cuentas ni APIs reales.
**Gates:**
- El proveedor encuentra el efecto -> PUBLISHED_CONFIRMED (PASS).
- Búsqueda no autoritativa sin resultado -> RECONCILIATION_REQUIRED, nunca no enviado (PASS).
- Búsqueda autoritativa sin resultado -> FAILED_BEFORE_SEND (PASS).
- No se reconcilia dos veces el mismo intento (PASS).
**Incoherencias y decisiones:** Solo una búsqueda autoritativa permite declarar no enviado; lo demás queda en revisión humana.
**Deuda y riesgos:** El kill switch existe como flag sin endpoint ni conciliación de tránsito; edición y retirada son efectos nuevos sin implementar.
**Aprendizajes para siguientes campañas:** La ambigüedad es un estado de primera clase, no un error que se reintenta.

Evidencia extendida: docs/evidence/c024/README.md
