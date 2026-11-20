# RDS-C21 · Outbox, workers, leases e inbox durable

**DESIGN_ONLY · NOT_STARTED · 21/42.** Fuente [docs/campaigns/21-outbox-workers-leases-e-inbox-durable.md](../../../campaigns/21-outbox-workers-leases-e-inbox-durable.md).

## Resultado y límites
Ejecutar intents de forma recuperable sin convertir HTTP en exactly-once.

**Invariante:** Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.. **Dependencias:** RDS-C20.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/jobs/`, `src/events/outbox.ts`, `tests/integration/replay.test.ts`.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/integration/replay.test.ts` y `tests/fixtures/c21/`.
- Evidencia: `docs/evidence/c21/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/jobs/`, `src/events/outbox.ts`, `tests/integration/replay.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 021.01 — RDS-C21-T01

**Acción:** Persistir intent y outbox antes de IO con dedup ligada a operación/revisión/cuenta.

**Superficie:** `src/jobs/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/replay.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.

**Verificación:** caso `RDS-C21-T01` sobre `tests/integration/replay.test.ts`; evidencia `docs/evidence/c21/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C20-T07.

### 021.02 — RDS-C21-T02

**Acción:** Reclamar jobs con leases/fencing, presupuesto de retries y límites global/tenant/proveedor.

**Superficie:** `src/events/outbox.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/replay.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.

**Verificación:** caso `RDS-C21-T02` sobre `tests/integration/replay.test.ts`; evidencia `docs/evidence/c21/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C21-T01.

### 021.03 — RDS-C21-T03

**Acción:** Revalidar principal/approval/policy/quota/rights y cancellation antes de enviar el intento.

**Superficie:** `tests/integration/replay.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/replay.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.

**Verificación:** caso `RDS-C21-T03` sobre `tests/integration/replay.test.ts`; evidencia `docs/evidence/c21/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C21-T02.

### 021.04 — RDS-C21-T04

**Acción:** Guardar request fingerprint, timestamps y receipts mínimos sin headers secretos ni cuerpos completos.

**Superficie:** `src/jobs/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/replay.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.

**Verificación:** caso `RDS-C21-T04` sobre `tests/integration/replay.test.ts`; evidencia `docs/evidence/c21/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C21-T03.

### 021.05 — RDS-C21-T05

**Acción:** Caducar lease a reconciliation_required cuando el efecto puede haberse enviado, sin replay automático.

**Superficie:** `src/events/outbox.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/replay.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.

**Verificación:** caso `RDS-C21-T05` sobre `tests/integration/replay.test.ts`; evidencia `docs/evidence/c21/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C21-T04.

### 021.06 — RDS-C21-T06

**Acción:** Implementar consumidor con inbox+efecto transaccionales y ACK después de commit; DLQ visible.

**Superficie:** `tests/integration/replay.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/replay.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.

**Verificación:** caso `RDS-C21-T06` sobre `tests/integration/replay.test.ts`; evidencia `docs/evidence/c21/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C21-T05.

### 021.07 — RDS-C21-T07

**Acción:** Probar caída pre-HTTP/post-HTTP/pre-ACK, worker viejo, duplicado/out-of-order y recuperación de proceso.

**Superficie:** `src/jobs/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/replay.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Exactly-once no se promete cuando el proveedor carece de idempotency/lookup inequívoco.

**Verificación:** caso `RDS-C21-T07` sobre `tests/integration/replay.test.ts`; evidencia `docs/evidence/c21/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C21-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C21-G01 / NOT_EXECUTED:** Crash tras envío conserva unknown, saldo y evidencia sin crear un segundo post. **Caso:** `RDS-C21-G01` en `tests/integration/replay.test.ts`. **Evidencia:** `docs/evidence/c21/g01.json`.
- **RDS-C21-G02 / NOT_EXECUTED:** ACK de worker con fence antiguo no cambia un intent ya reclamado por otro. **Caso:** `RDS-C21-G02` en `tests/integration/replay.test.ts`. **Evidencia:** `docs/evidence/c21/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_VERIFIED (outbox SQL con leases/fencing); sin worker de producción.
**SHA:** bc293688d95b0ef99bf5b4e91c686d3d1d259b7d
**Archivos y diff:** src/events/outbox.ts, src/jobs/lease.ts, tests/integration/replay.test.ts, tests/domain/lease.test.ts
**Tests/comandos/fixtures:** npx vitest run tests/integration/replay.test.ts -> 3/3 PASS; npx vitest run tests/domain/lease.test.ts -> 3/3 PASS. Fixtures sintéticas propias; sin cuentas ni APIs reales.
**Gates:**
- Misma idempotency key no duplica evento y el replay devuelve el mismo eventId (PASS).
- Un lease vigente impide que otro worker reclame el evento (PASS).
- ACK con fence antiguo -> stale_fence y el trabajo sigue pendiente (PASS).
**Incoherencias y decisiones:** El evento se persiste antes del IO y el ACK exige el fence vigente. Un lease vencido no se interpreta como prueba de que el proveedor no recibió la llamada.
**Deuda y riesgos:** Sin inbox durable de webhooks, sin dead-letter visible ni métricas de lag; el worker real llega con C23/C38.
**Aprendizajes para siguientes campañas:** El fence protege el ACK, no revierte el efecto remoto: por eso la reconciliación es obligatoria.

Evidencia extendida: docs/evidence/c021/README.md
