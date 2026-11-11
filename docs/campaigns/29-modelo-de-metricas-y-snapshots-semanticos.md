# RDS-C29 · Modelo de métricas y snapshots semánticos

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia29/42.

## Objetivo y contrato

Evitar ceros inventados y comparaciones entre magnitudes incompatibles.

Invariante: **Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.**

## Entrada y dependencias

Requiere RDS-C28 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/analytics/metrics.ts
- src/analytics/snapshots.ts
- tests/domain/metrics.test.ts

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C29-T01
Crear catálogo por proveedor de definición/unidad/agregación/ventana y versión de métricas.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C29-T02
Guardar observación con fuente/frescura/hash y diferenciar0,null,not_supported,stale y error.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C29-T03
Normalizar numerador/denominador de ratios sin sumar audiencia única entre redes.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C29-T04
Separar orgánico/pagado/cuenta/post y marcas/clientes con filtros tenant-scoped.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C29-T05
Registrar rectificaciones remotas y revisar reportes derivados sin reescribir histórico aprobado.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C29-T06
Diseñar cursores y reconciliación polling/webhook para no duplicar métricas.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C29-T07
Probar pérdida de campo/API, denominador0, periodo distinto, out-of-order y reporte con scopes insuficientes.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Métrica ausente no es0 y views de distintas redes no son personas deduplicadas.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C29-G01 — NOT_EXECUTED:** Cambio de definición rompe comparabilidad y queda anotado o bloqueado.
- **RDS-C29-G02 — NOT_EXECUTED:** Proveedor revoca scope de analytics y el dashboard no convierte el error en rendimiento0.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

A01; P01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
