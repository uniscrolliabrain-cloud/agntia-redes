# RDS-C21 · Outbox, workers, leases e inbox durable

**DESIGN_ONLY · NOT_STARTED · 21/42.** Fuente [docs/campaigns/21-outbox-workers-leases-e-inbox-durable.md](../../../campaigns/21-outbox-workers-leases-e-inbox-durable.md).

## Resultado y límites
Ejecutar intents de forma recuperable sin convertir HTTP en exactly-once.

**Invariante:** Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.. **Dependencias:** RDS-C20.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/jobs/src/outbox.ts`.
- DTO y esquema: `packages/contracts/src/21.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/21.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/021.test.ts` y `tests/fixtures/021/`.
- Evidencia: `docs/evidence/c21/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/jobs/`, `src/events/outbox.ts`, `tests/integration/replay.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 021.01 — RDS-C21-T01

**Acción:** Persistir intent y outbox antes de IO con dedup ligada a operación/revisión/cuenta.

**Superficie primaria:** `packages/jobs/src/outbox.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/21.ts` y test `tests/campaigns/021.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C20-T07.

### 021.02 — RDS-C21-T02

**Acción:** Reclamar jobs con leases/fencing, presupuesto de retries y límites global/tenant/proveedor.

**Superficie primaria:** `packages/jobs/src/outbox.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/21.ts` y test `tests/campaigns/021.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C21-T01.

### 021.03 — RDS-C21-T03

**Acción:** Revalidar principal/approval/policy/quota/rights y cancellation antes de enviar el intento.

**Superficie primaria:** `packages/jobs/src/outbox.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/21.ts` y test `tests/campaigns/021.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C21-T02.

### 021.04 — RDS-C21-T04

**Acción:** Guardar request fingerprint, timestamps y receipts mínimos sin headers secretos ni cuerpos completos.

**Superficie primaria:** `packages/jobs/src/outbox.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/21.ts` y test `tests/campaigns/021.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C21-T03.

### 021.05 — RDS-C21-T05

**Acción:** Caducar lease a reconciliation_required cuando el efecto puede haberse enviado, sin replay automático.

**Superficie primaria:** `packages/jobs/src/outbox.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/21.ts` y test `tests/campaigns/021.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C21-T04.

### 021.06 — RDS-C21-T06

**Acción:** Implementar consumidor con inbox+efecto transaccionales y ACK después de commit; DLQ visible.

**Superficie primaria:** `packages/jobs/src/outbox.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/21.ts` y test `tests/campaigns/021.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C21-T05.

### 021.07 — RDS-C21-T07

**Acción:** Probar caída pre-HTTP/post-HTTP/pre-ACK, worker viejo, duplicado/out-of-order y recuperación de proceso.

**Superficie primaria:** `packages/jobs/src/outbox.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/21.ts` y test `tests/campaigns/021.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C21-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C21-G01 / NOT_EXECUTED:** Crash tras envío conserva unknown, saldo y evidencia sin crear un segundo post.
- **RDS-C21-G02 / NOT_EXECUTED:** ACK de worker con fence antiguo no cambia un intent ya reclamado por otro.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
