# RDS-C17 · Assets, derechos y Content Passport

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia17/42.

## Objetivo y contrato

Vincular medio y permiso de uso a la revisión que llegará al proveedor.

Invariante: **Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.**

## Entrada y dependencias

Requiere RDS-C16 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/media/
- src/domain/rights.ts
- tests/security/media.test.ts

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C17-T01
Crear custody refs de originales y derivados con hashes, origen y cadena de transformaciones.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C17-T02
Registrar licencia/territorio/periodo/uso comercial, imagen/voz/música y fuente de cada claim relevante.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C17-T03
Validar MIME/codec/bytes/duración/archivos especiales/bombas antes de previews y uploads.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C17-T04
Diseñar Content Passport versionado y señales de provenance opcionales sin declararlas prueba universal de verdad.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C17-T05
Generar URLs firmadas controladas cuando el proveedor las requiera, sin incluirlas en logs/eventos.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C17-T06
Propagar expiración/restricción/cambio de asset a draft/approval/jobs/exports y modelos que lo consuman.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C17-T07
Probar media sustituida, derechos caducados, SSRF por URL, MIME falso y falta de licencia conocida.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C17-G01 — NOT_EXECUTED:** Cambiar un frame/archivo después de aprobar bloquea ejecución por asset hash diferente.
- **RDS-C17-G02 — NOT_EXECUTED:** Derecho temporal vence antes del slot y el calendario exige nueva revisión.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

L01; L02. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
