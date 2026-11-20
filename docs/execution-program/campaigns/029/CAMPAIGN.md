# RDS-C29 · Modelo de métricas y snapshots semánticos

**DESIGN_ONLY · NOT_STARTED · 29/42.** Fuente [docs/campaigns/29-modelo-de-metricas-y-snapshots-semanticos.md](../../../campaigns/29-modelo-de-metricas-y-snapshots-semanticos.md).

## Resultado y límites
Evitar ceros inventados y comparaciones entre magnitudes incompatibles.

**Invariante:** Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.. **Dependencias:** RDS-C28.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/analytics/metrics.ts`, `src/analytics/snapshots.ts`, `tests/domain/metrics.test.ts`.
- Presente en el repositorio hoy: ninguna; la campaña no está implementada.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/domain/metrics.test.ts` y `tests/fixtures/c29/`.
- Evidencia: `docs/evidence/c029/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/analytics/metrics.ts`, `src/analytics/snapshots.ts`, `tests/domain/metrics.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 029.01 — RDS-C29-T01

**Acción:** Crear catálogo por proveedor de definición/unidad/agregación/ventana y versión de métricas.

**Superficie:** `src/analytics/metrics.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/metrics.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.

**Verificación:** caso `RDS-C29-T01` sobre `tests/domain/metrics.test.ts`; evidencia `docs/evidence/c029/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C28-T07.

### 029.02 — RDS-C29-T02

**Acción:** Guardar observación con fuente/frescura/hash y diferenciar0,null,not_supported,stale y error.

**Superficie:** `src/analytics/snapshots.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/metrics.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.

**Verificación:** caso `RDS-C29-T02` sobre `tests/domain/metrics.test.ts`; evidencia `docs/evidence/c029/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C29-T01.

### 029.03 — RDS-C29-T03

**Acción:** Normalizar numerador/denominador de ratios sin sumar audiencia única entre redes.

**Superficie:** `tests/domain/metrics.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/metrics.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.

**Verificación:** caso `RDS-C29-T03` sobre `tests/domain/metrics.test.ts`; evidencia `docs/evidence/c029/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C29-T02.

### 029.04 — RDS-C29-T04

**Acción:** Separar orgánico/pagado/cuenta/post y marcas/clientes con filtros tenant-scoped.

**Superficie:** `src/analytics/metrics.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/metrics.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.

**Verificación:** caso `RDS-C29-T04` sobre `tests/domain/metrics.test.ts`; evidencia `docs/evidence/c029/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C29-T03.

### 029.05 — RDS-C29-T05

**Acción:** Registrar rectificaciones remotas y revisar reportes derivados sin reescribir histórico aprobado.

**Superficie:** `src/analytics/snapshots.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/metrics.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.

**Verificación:** caso `RDS-C29-T05` sobre `tests/domain/metrics.test.ts`; evidencia `docs/evidence/c029/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C29-T04.

### 029.06 — RDS-C29-T06

**Acción:** Diseñar cursores y reconciliación polling/webhook para no duplicar métricas.

**Superficie:** `tests/domain/metrics.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/metrics.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.

**Verificación:** caso `RDS-C29-T06` sobre `tests/domain/metrics.test.ts`; evidencia `docs/evidence/c029/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C29-T05.

### 029.07 — RDS-C29-T07

**Acción:** Probar pérdida de campo/API, denominador0, periodo distinto, out-of-order y reporte con scopes insuficientes.

**Superficie:** `src/analytics/metrics.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/metrics.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.

**Verificación:** caso `RDS-C29-T07` sobre `tests/domain/metrics.test.ts`; evidencia `docs/evidence/c029/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C29-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C29-G01 / NOT_EXECUTED:** Cambio de definición rompe comparabilidad y queda anotado o bloqueado. **Caso:** `RDS-C29-G01` en `tests/domain/metrics.test.ts`. **Evidencia:** `docs/evidence/c029/g01.json`.
- **RDS-C29-G02 / NOT_EXECUTED:** Proveedor revoca scope de analytics y el dashboard no convierte el error en rendimiento0. **Caso:** `RDS-C29-G02` en `tests/domain/metrics.test.ts`. **Evidencia:** `docs/evidence/c029/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
