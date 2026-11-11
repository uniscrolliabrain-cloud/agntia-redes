# RDS-C01 · Baseline, alcance y cotejo del padre

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia1/42.

## Objetivo y contrato

Congelar lo observado antes de introducir implementación y diferencias de contrato.

Invariante: **El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.**

## Entrada y dependencias

Requiere autorización futura de implementación y checkout real; esta entrega solo documenta. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- docs/baseline.md
- docs/parent-diff.md
- docs/versions.json

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C01-T01
Anotar SHA, fecha, estado del checkout e instrucciones propias y de cada dependencia que se vaya a leer.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C01-T02
Cotejar el padre vigente con54b8d5407a8576459448c4d059a877297d18ca7a, registrar cambios y no modificarlo.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C01-T03
Inventariar TenantPrincipal, ambos PolicyContext, aprobación nativa, eventos sociales y SocialClient stub.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C01-T04
Definir alcance integrado y standalone, cliente objetivo y la aclaración de empresa SaaS con Anam.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C01-T05
Capturar SO, arquitectura, Node/pnpm/DB y licencias sin imprimir variables secretas del entorno.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C01-T06
Distinguir checks de documentación, tests existentes y pruebas nuevas no ejecutadas; conservar fallos de baseline.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C01-T07
Entregar mapa de discrepancias y gates del laboratorio antes de afirmar compatibilidad o escoger runtime.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C01-G01 — NOT_EXECUTED:** El SHA padre ha cambiado: el informe identifica interfaces afectadas y no hereda compatibilidad.
- **RDS-C01-G02 — NOT_EXECUTED:** Checkout con cambios ajenos: se conservan y el baseline los separa sin reset.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

H01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
