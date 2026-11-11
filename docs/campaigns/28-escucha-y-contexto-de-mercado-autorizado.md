# RDS-C28 · Escucha y contexto de mercado autorizado

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia28/42.

## Objetivo y contrato

Producir señales con cobertura/fuentes sin scraping o vigilancia universal.

Invariante: **Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.**

## Entrada y dependencias

Requiere RDS-C27 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/listening/
- tests/contracts/listening/
- docs/listening-scope.md

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C28-T01
Definir tópicos/fuentes autorizadas y su base/entitlement, periodo, idioma y límites de acceso.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C28-T02
Diseñar colecta incremental minimizada con source IDs/fecha/hash y detección de gaps/stale.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C28-T03
Separar mención observada, hipótesis de tendencia y supuesto riesgo de crisis con evidencia.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C28-T04
Bloquear perfilado sensible, vigilancia personal y bypass de APIs no disponibles.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C28-T05
Controlar budget de búsquedas/listening pagado y ventanas de retención para resultados externos.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C28-T06
Generar briefing con citas/periodo/cobertura y revisión, sin promocionar contenido a policy o memoria confiable.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C28-T07
Probar fuente caída, muestra sesgada, evento duplicado, orden temporal e instrucción adversarial en un post.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Listening parcial no equivale a escuchar toda Internet ni a saber la intención de una persona.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C28-G01 — NOT_EXECUTED:** Sin fuente o cobertura suficiente el reporte marca insufficient_information, no tendencia cierta.
- **RDS-C28-G02 — NOT_EXECUTED:** Un resultado externo pide cambiar policy y solo se conserva como dato no confiable.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

P01; P04. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
