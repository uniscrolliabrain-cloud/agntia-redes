# RDS-C10 · Adaptador Mastodon de referencia

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia10/42.

## Objetivo y contrato

Demostrar publicación controlada en instancia de laboratorio con semántica real.

Invariante: **La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.**

## Entrada y dependencias

Requiere RDS-C09 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/adapters/mastodon/
- tests/integration/mastodon/
- docs/providers/mastodon.md

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C10-T01
Fijar instancia/version y comprobar scopes de usuario y límites reportados por su API.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C10-T02
Normalizar contenido, visibilidad, idioma, media y contexto sin defaults públicos no aprobados.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C10-T03
Usar idempotency nativa según TTL documentado y ledger durable local para replay posterior.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C10-T04
Diferenciar ScheduledStatus/Status y recepción del job frente a publicación confirmada.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C10-T05
Preparar reconciliación, edición/borrado como nuevos comandos y controles de instancia/SSRF.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C10-T06
Crear cuenta/fixture local sintética autorizada; no publicar en una comunidad pública para probar.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C10-T07
Probar duplicate request, TTL remoto vencido, timeout, scope insuficiente y cambio de visibilidad.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La idempotency temporal de una API no equivale a exactly-once indefinido del negocio.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C10-G01 — NOT_EXECUTED:** Replay días después devuelve el intent previo y no crea otro post porque expiró key remota.
- **RDS-C10-G02 — NOT_EXECUTED:** Respuesta de scheduled status no se interpreta como publicación pública ya confirmada.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

A02. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
