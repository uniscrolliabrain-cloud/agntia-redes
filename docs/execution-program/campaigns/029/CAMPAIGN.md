# RDS-C29 · Modelo de métricas y snapshots semánticos

**DESIGN_ONLY · NOT_STARTED · 29/42.** Fuente [docs/campaigns/29-modelo-de-metricas-y-snapshots-semanticos.md](../../campaigns/29-modelo-de-metricas-y-snapshots-semanticos.md).

## Resultado y límites
Evitar ceros inventados y comparaciones entre magnitudes incompatibles.

**Invariante:** Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.. **Dependencias:** RDS-C28.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/analytics/src/metrics.ts`.
- DTO y esquema: `packages/contracts/src/29.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/29.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/029.test.ts` y `tests/fixtures/029/`.
- Evidencia: `docs/evidence/c29/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/analytics/metrics.ts`, `src/analytics/snapshots.ts`, `tests/domain/metrics.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 029.01 — RDS-C29-T01

**Acción:** Crear catálogo por proveedor de definición/unidad/agregación/ventana y versión de métricas.

**Superficie primaria:** `packages/analytics/src/metrics.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/29.ts` y test `tests/campaigns/029.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C28-T07.

### 029.02 — RDS-C29-T02

**Acción:** Guardar observación con fuente/frescura/hash y diferenciar0,null,not_supported,stale y error.

**Superficie primaria:** `packages/analytics/src/metrics.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/29.ts` y test `tests/campaigns/029.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C29-T01.

### 029.03 — RDS-C29-T03

**Acción:** Normalizar numerador/denominador de ratios sin sumar audiencia única entre redes.

**Superficie primaria:** `packages/analytics/src/metrics.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/29.ts` y test `tests/campaigns/029.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C29-T02.

### 029.04 — RDS-C29-T04

**Acción:** Separar orgánico/pagado/cuenta/post y marcas/clientes con filtros tenant-scoped.

**Superficie primaria:** `packages/analytics/src/metrics.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/29.ts` y test `tests/campaigns/029.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C29-T03.

### 029.05 — RDS-C29-T05

**Acción:** Registrar rectificaciones remotas y revisar reportes derivados sin reescribir histórico aprobado.

**Superficie primaria:** `packages/analytics/src/metrics.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/29.ts` y test `tests/campaigns/029.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C29-T04.

### 029.06 — RDS-C29-T06

**Acción:** Diseñar cursores y reconciliación polling/webhook para no duplicar métricas.

**Superficie primaria:** `packages/analytics/src/metrics.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/29.ts` y test `tests/campaigns/029.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C29-T05.

### 029.07 — RDS-C29-T07

**Acción:** Probar pérdida de campo/API, denominador0, periodo distinto, out-of-order y reporte con scopes insuficientes.

**Superficie primaria:** `packages/analytics/src/metrics.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/29.ts` y test `tests/campaigns/029.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C29-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C29-G01 / NOT_EXECUTED:** Cambio de definición rompe comparabilidad y queda anotado o bloqueado.
- **RDS-C29-G02 / NOT_EXECUTED:** Proveedor revoca scope de analytics y el dashboard no convierte el error en rendimiento0.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
