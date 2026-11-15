# RDS-C24 · Reconciliación, edición, retirada y kill switch

**DESIGN_ONLY · NOT_STARTED · 24/42.** Fuente [docs/campaigns/24-reconciliacion-edicion-retirada-y-kill-switch.md](../../../campaigns/24-reconciliacion-edicion-retirada-y-kill-switch.md).

## Resultado y límites
Resolver incertidumbre sin borrar historia ni inventar rollback remoto.

**Invariante:** Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.. **Dependencias:** RDS-C23.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/domain/src/reconciliation.ts`.
- DTO y esquema: `packages/contracts/src/24.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/24.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/024.test.ts` y `tests/fixtures/024/`.
- Evidencia: `docs/evidence/c24/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/publication/reconcile.ts`, `src/publication/changes.ts`, `tests/integration/reconcile.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 024.01 — RDS-C24-T01

**Acción:** Consultar por receipt/operation ref inequívoca cuando el proveedor lo permite y registrar limitaciones.

**Superficie primaria:** `packages/domain/src/reconciliation.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/24.ts` y test `tests/campaigns/024.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C23-T07.

### 024.02 — RDS-C24-T02

**Acción:** Crear cola de revisión ante lookup ambiguo; no buscar solo texto/hora para asumir identidad del post.

**Superficie primaria:** `packages/domain/src/reconciliation.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/24.ts` y test `tests/campaigns/024.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C24-T01.

### 024.03 — RDS-C24-T03

**Acción:** Tramitar edición/borrado como nuevas operaciones aprobadas y con expected remote revision cuando exista.

**Superficie primaria:** `packages/domain/src/reconciliation.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/24.ts` y test `tests/campaigns/024.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C24-T02.

### 024.04 — RDS-C24-T04

**Acción:** Conservar tombstone y evidencia mínima de remoto eliminado/privado/modificado fuera del servicio.

**Superficie primaria:** `packages/domain/src/reconciliation.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/24.ts` y test `tests/campaigns/024.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C24-T03.

### 024.05 — RDS-C24-T05

**Acción:** Implementar kill switch por cliente/cuenta/proveedor y distinguir cancelar admisión de cancelar remoto.

**Superficie primaria:** `packages/domain/src/reconciliation.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/24.ts` y test `tests/campaigns/024.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C24-T04.

### 024.06 — RDS-C24-T06

**Acción:** Coordinar saldo/intent/policy tras restore o reintento manual autorizado.

**Superficie primaria:** `packages/domain/src/reconciliation.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/24.ts` y test `tests/campaigns/024.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C24-T05.

### 024.07 — RDS-C24-T07

**Acción:** Probar timeout tras create, delete ya realizado, post ajeno parecido y pausa posterior a aceptación remota.

**Superficie primaria:** `packages/domain/src/reconciliation.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/24.ts` y test `tests/campaigns/024.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C24-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C24-G01 / NOT_EXECUTED:** Sin lookup fiable el intent permanece unknown y no se reenvía para cerrar un dashboard.
- **RDS-C24-G02 / NOT_EXECUTED:** Otro usuario modifica el post remoto y una actualización local se bloquea en conflicto.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
