# RDS-C34 · SDK servidor, MCP y API Hono de negocio

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia34/42.

## Objetivo y contrato

Exponer al host y a clientes externos capacidades nominadas con validación runtime.

Invariante: **El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.**

## Entrada y dependencias

Requiere RDS-C33 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- packages/sdk/
- src/http/
- src/tools/
- tests/contracts/sdk/

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C34-T01
Definir cliente TS servidor con DTOs cerrados, errores, timeout/paginación y approved origins del servicio.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C34-T02
Implementar rutas Hono exactas con sesión/IdP o partner principal verificados, sin tokens al navegador.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C34-T03
Exponer tools de lectura/propuesta iniciales; excluir approve/admin/budget-write/delete/publish libre.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C34-T04
Usar la misma policy para MCP, Anam, API y SDK para que ningún canal sea bypass.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C34-T05
Diseñar outbox polling/ACK y consumidor sintético durable para integración B2B/host.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C34-T06
Proponer patchset de host y ejemplos de cliente standalone sin aplicarlos a otros repos.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C34-T07
Probar contrato SDK/API, malformed/unknown fields,404 cruzado, error seguro y modelo que suministra identity o ruta arbitraria.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El resolver autenticado selecciona el workspace; un header o input de modelo no lo demuestra.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C34-G01 — NOT_EXECUTED:** Tool de Anam y MCP equivalente reciben la misma denegación de policy.
- **RDS-C34-G02 — NOT_EXECUTED:** Cliente externo opera con su sesión sin necesitar una credencial del repo padre.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

H01; N02. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
