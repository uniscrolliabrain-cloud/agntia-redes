# RDS-C09 · Adaptador Postiz o backend social elegido

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia9/42.

## Objetivo y contrato

Integrar un backend autohospedado como proveedor invisible y acotado.

Invariante: **El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.**

## Entrada y dependencias

Requiere RDS-C08 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/adapters/postiz/
- tests/contracts/postiz/
- docs/adr/backend-social.md

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C09-T01
Verificar versión/edición/API instalada y seleccionar Postiz o alternativa; documentar por qué no instalar ambas.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C09-T02
Leer integraciones/cuentas del workspace servidor y mapear IDs explícitos por tenant/marca.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C09-T03
Normalizar create/schedule/media/settings permitidos sin exponer API admin o tools genéricas.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C09-T04
Separar upload, job remoto y post visible; fijar scheduleAuthority remoto o local por intent.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C09-T05
Persistir links/idempotency/mapping hash y reconciliar estados del backend con receipts de canal cuando existan.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C09-T06
Revisar aislamiento, licencia, storage/OAuth apps y coste de la instancia antes de habilitar clientes.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C09-T07
Probar fixture real local autorizada, job aceptado pero no publicado, fallo parcial y replay sin crear dos schedules.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C09-G01 — NOT_EXECUTED:** Postiz devuelve job aceptado; UI permanece pendiente de confirmación remota, sin post fake.
- **RDS-C09-G02 — NOT_EXECUTED:** Worker reinicia y reconoce schedule remoto existente sin programar una segunda copia.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

A01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
