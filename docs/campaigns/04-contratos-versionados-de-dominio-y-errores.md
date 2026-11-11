# RDS-C04 · Contratos versionados de dominio y errores

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia4/42.

## Objetivo y contrato

Fijar fronteras tipadas antes de escribir adaptadores o UI.

Invariante: **Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.**

## Entrada y dependencias

Requiere RDS-C03 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/contracts/index.ts
- docs/contracts/schemas/
- tests/contracts/wire.test.ts

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C04-T01
Crear DTOs cerrados de cuenta, brief, work order, variante, intent, approval binding y receipt.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C04-T02
Representar IDs remotos como opacos y dinero/ratios sin floats no finitos; limitar strings, listas y bytes.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C04-T03
Versionar payloads, política, mapping y schemas; diferenciar instanteUTC, zonaIANA y tiempo local.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C04-T04
Definir errores uniformes seguros, incluyendo outcome_unknown y no retry de efectos inciertos.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C04-T05
Definir paginación, cursores, correlation/causation e idempotency key sin aceptar identidad declarada por modelo.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C04-T06
Diseñar contratos de sesión Anam, service plan y aceptación sin introducir API keys en DTOs públicos.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C04-T07
Ejecutar round-trip, schema drift, campos desconocidos, NaN/Infinity, fechas ambiguas e IDs cruzados.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C04-G01 — NOT_EXECUTED:** Payload con tenant/role/URL arbitrarios fuera del DTO es rechazado antes de IO.
- **RDS-C04-G02 — NOT_EXECUTED:** Contrato viejo no compatible devuelve error explícito; no elimina campos silenciosamente.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

H01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
