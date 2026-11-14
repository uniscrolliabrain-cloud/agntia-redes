# RDS-C29 — Modelo de métricas y snapshots semánticos

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/29-modelo-de-metricas-y-snapshots-semanticos.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Evitar ceros inventados y comparaciones entre magnitudes incompatibles.

## Artefactos previstos
- `src/analytics/metrics.ts`
- `src/analytics/snapshots.ts`
- `tests/domain/metrics.test.ts`

## Invariante
Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.

## Dependencias y fuentes
Dependencias: RDS-C28. Fuentes: A01, P01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C29-T01:** Crear catálogo por proveedor de definición/unidad/agregación/ventana y versión de métricas. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.
- **RDS-C29-T02:** Guardar observación con fuente/frescura/hash y diferenciar0,null,not_supported,stale y error. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.
- **RDS-C29-T03:** Normalizar numerador/denominador de ratios sin sumar audiencia única entre redes. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.
- **RDS-C29-T04:** Separar orgánico/pagado/cuenta/post y marcas/clientes con filtros tenant-scoped. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.
- **RDS-C29-T05:** Registrar rectificaciones remotas y revisar reportes derivados sin reescribir histórico aprobado. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.
- **RDS-C29-T06:** Diseñar cursores y reconciliación polling/webhook para no duplicar métricas. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.
- **RDS-C29-T07:** Probar pérdida de campo/API, denominador0, periodo distinto, out-of-order y reporte con scopes insuficientes. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.

## Gates previstos, NO ejecutados
- RDS-C29-G01: Cambio de definición rompe comparabilidad y queda anotado o bloqueado.
- RDS-C29-G02: Proveedor revoca scope de analytics y el dashboard no convierte el error en rendimiento0.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
