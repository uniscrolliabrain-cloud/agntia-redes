# RDS-C39 · Observabilidad, rendimiento y economía del servicio

**DESIGN_ONLY · NOT_STARTED · 39/42.** Fuente [docs/campaigns/39-observabilidad-rendimiento-y-economia-del-servicio.md](../../../campaigns/39-observabilidad-rendimiento-y-economia-del-servicio.md).

## Resultado y límites
Medir capacidad real y compromisos sin inventar SLA o margen comercial.

**Invariante:** Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.. **Dependencias:** RDS-C38.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/observability/src/costs.ts`.
- DTO y esquema: `packages/contracts/src/39.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/39.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/039.test.ts` y `tests/fixtures/039/`.
- Evidencia: `docs/evidence/c39/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/telemetry/`, `tests/performance/`, `docs/operations/capacity.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 039.01 — RDS-C39-T01

**Acción:** Emitir métricas de intent/outcome/lag/errors/approval/cost con cardinalidad/PII controladas y scopes adecuados.

**Superficie primaria:** `packages/observability/src/costs.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/39.ts` y test `tests/campaigns/039.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C38-T07.

### 039.02 — RDS-C39-T02

**Acción:** Crear trazas/correlation entre sesión, work order, revisión, job y receipt sin secretos o textos privados.

**Superficie primaria:** `packages/observability/src/costs.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/39.ts` y test `tests/campaigns/039.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C39-T01.

### 039.03 — RDS-C39-T03

**Acción:** Medir p50/p95, throughput, CPU/RAM/disco, media/egress y minutos/concurrencia por perfil y arquitectura.

**Superficie primaria:** `packages/observability/src/costs.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/39.ts` y test `tests/campaigns/039.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C39-T02.

### 039.04 — RDS-C39-T04

**Acción:** Reconciliar coste observado contra fuentes/tarifas/facturas y separar coste técnico de precio/margen retail.

**Superficie primaria:** `packages/observability/src/costs.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/39.ts` y test `tests/campaigns/039.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C39-T03.

### 039.05 — RDS-C39-T05

**Acción:** Configurar alertas operativas, DLQ/unknown y escalado humano según horario/SLA realmente acordados.

**Superficie primaria:** `packages/observability/src/costs.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/39.ts` y test `tests/campaigns/039.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C39-T04.

### 039.06 — RDS-C39-T06

**Acción:** Revisar cuota/gasto agregado entre cliente/proveedor y evitar doble reserva de recursos o cargos.

**Superficie primaria:** `packages/observability/src/costs.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/39.ts` y test `tests/campaigns/039.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C39-T05.

### 039.07 — RDS-C39-T07

**Acción:** Publicar resultados con entorno/duración/carga/limitaciones, sin presentar API vacía como capacidad de agencia completa.

**Superficie primaria:** `packages/observability/src/costs.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/39.ts` y test `tests/campaigns/039.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C39-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C39-G01 / NOT_EXECUTED:** Proveedor/collector cae y la vista marca stale/unknown sin un estado global seguro.
- **RDS-C39-G02 / NOT_EXECUTED:** Plan agotado reduce análisis opcional o admisión, no audit/aislamiento/revisión requerida.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
