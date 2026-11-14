# RDS-C25 · Ingestión de inbox y webhooks autorizados

**DESIGN_ONLY · NOT_STARTED · 25/42.** Fuente [docs/campaigns/25-ingestion-de-inbox-y-webhooks-autorizados.md](../../campaigns/25-ingestion-de-inbox-y-webhooks-autorizados.md).

## Resultado y límites
Recibir hechos sociales con firma, minimización y protección contra replay.

**Invariante:** Un webhook con eventId conocido y contenido distinto es conflicto, no duplicado inocuo.. **Dependencias:** RDS-C24.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/inbox/src/webhooks.ts`.
- DTO y esquema: `packages/contracts/src/25.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/25.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/025.test.ts` y `tests/fixtures/025/`.
- Evidencia: `docs/evidence/c25/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/inbox/ingest.ts`, `src/inbox/sources.ts`, `tests/security/webhooks.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 025.01 — RDS-C25-T01

**Acción:** Verificar producto/scopes de lectura de comentarios/DM por cuenta y no asumir acceso universal.

**Superficie primaria:** `packages/inbox/src/webhooks.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/25.ts` y test `tests/campaigns/025.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un webhook con eventId conocido y contenido distinto es conflicto, no duplicado inocuo.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C24-T07.

### 025.02 — RDS-C25-T02

**Acción:** Autenticar webhook según contrato, raw-body signature/canonicalization, timestamp y secret ref del provider.

**Superficie primaria:** `packages/inbox/src/webhooks.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/25.ts` y test `tests/campaigns/025.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un webhook con eventId conocido y contenido distinto es conflicto, no duplicado inocuo.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C25-T01.

### 025.03 — RDS-C25-T03

**Acción:** Deduplicar event IDs/hash por fuente/tenant y manejar out-of-order sin perder hechos.

**Superficie primaria:** `packages/inbox/src/webhooks.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/25.ts` y test `tests/campaigns/025.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un webhook con eventId conocido y contenido distinto es conflicto, no duplicado inocuo.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C25-T02.

### 025.04 — RDS-C25-T04

**Acción:** Limitar tasa/tamaño/retención/backpressure y guardar solo contexto mínimo autorizado.

**Superficie primaria:** `packages/inbox/src/webhooks.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/25.ts` y test `tests/campaigns/025.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un webhook con eventId conocido y contenido distinto es conflicto, no duplicado inocuo.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C25-T03.

### 025.05 — RDS-C25-T05

**Acción:** Normalizar hilos, remitentes y adjuntos como datos no confiables, con refs externas sin identidad CRM inferida.

**Superficie primaria:** `packages/inbox/src/webhooks.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/25.ts` y test `tests/campaigns/025.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un webhook con eventId conocido y contenido distinto es conflicto, no duplicado inocuo.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C25-T04.

### 025.06 — RDS-C25-T06

**Acción:** Coordinar polling incremental y webhook para evitar doble ingesta y gaps detectables.

**Superficie primaria:** `packages/inbox/src/webhooks.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/25.ts` y test `tests/campaigns/025.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un webhook con eventId conocido y contenido distinto es conflicto, no duplicado inocuo.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C25-T05.

### 025.07 — RDS-C25-T07

**Acción:** Probar firma falsa, replay/collision, callback de otra cuenta, DM no autorizado y payload con prompt injection.

**Superficie primaria:** `packages/inbox/src/webhooks.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/25.ts` y test `tests/campaigns/025.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un webhook con eventId conocido y contenido distinto es conflicto, no duplicado inocuo.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C25-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C25-G01 / NOT_EXECUTED:** Payload firmado de cuentaB no puede entrar al inbox del clienteA.
- **RDS-C25-G02 / NOT_EXECUTED:** Caída de store no ACKea un evento no persistido y el replay no duplica el efecto.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
