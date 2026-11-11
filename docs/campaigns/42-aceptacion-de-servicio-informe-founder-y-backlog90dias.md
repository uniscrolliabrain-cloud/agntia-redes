# RDS-C42 · Aceptación de servicio, informe founder y backlog90días

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia42/42.

## Objetivo y contrato

Cerrar con capacidades, límites y aceptación reales, sin convertir42 campañas en paridad universal.

Invariante: **La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.**

## Entrada y dependencias

Requiere RDS-C41 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- docs/release/FOUNDER-REPORT.md
- docs/release/ACCEPTANCE.md
- docs/release/NEXT-90-DAYS.md

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C42-T01
Consolidar42 campañas/294 tareas y84 gates con PASS/BLOCKED/NOT_VERIFIED y enlaces a evidencia del SHA.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C42-T02
Comparar alcance real con líderes por dominio, incluidos portal, especialistas, Anam y clientes externos.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C42-T03
Informar número de tests distintos, fallos/skips, comandos, plataformas, costes medidos y supuestos no verificados.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C42-T04
Revisar licencia propia, términos/datasets/proveedores, contratos/DPA, canal de seguridad y responsables humanos pendientes.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C42-T05
Clasificar entrega como documentación/demo/piloto/producción según gates reales y aceptación del cliente/owner independiente.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C42-T06
Proponer backlog30/60/90 para calidad/escala/licencias/operación y mejoras del servicio sin comprar ni habilitar efectos.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C42-T07
Publicar PR/artefactos/evidencia sanitizada y pedir aceptación únicamente sobre entregable concreto, sin merge/deploy automático.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C42-G01 — NOT_EXECUTED:** Cada claim comercial tiene evidencia o una etiqueta de alcance pendiente/no verificado.
- **RDS-C42-G02 — NOT_EXECUTED:** Un cliente externo y el owner comprenden qué está entregado y qué falta sin leer todo el código.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

H01; N01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
