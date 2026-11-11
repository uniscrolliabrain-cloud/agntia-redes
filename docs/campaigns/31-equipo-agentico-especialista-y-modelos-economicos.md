# RDS-C31 · Equipo agéntico especialista y modelos económicos

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia31/42.

## Objetivo y contrato

Organizar trabajo propio de la empresa SaaS con tools y memoria de confianza limitada.

Invariante: **Mayor modelo o más agentes no significan más permiso ni una revisión humana real.**

## Entrada y dependencias

Requiere RDS-C30 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/specialists/
- src/models/router.ts
- tests/evaluations/team/

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C31-T01
Definir coordinador/editor/diseñador/analista/community/QA como roles con capacidades y colas auditables.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C31-T02
Permitir un agente cubra varios roles bajo policy sin saltarse separación de revisiones humanas requerida.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C31-T03
Integrar modelos de texto por tarea/coste/DPA, con timeout/fallback y sin secreto de proveedor social.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C31-T04
Convertir cada salida en propuesta tipada con fuentes, incertidumbre y model/policy/version registradas.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C31-T05
Separar memoria de cliente/proyecto y promoción revisada a política; contenido externo nunca se vuelve instrucción fiable solo por persistir.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C31-T06
Contabilizar tokens/coste/calidad y medir tareas legítimas junto con ataques, no solo rechazo.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C31-T07
Probar delegación fuera de alcance, loop de agentes, memoria contaminada y modelo que intenta aprobar su propio trabajo.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C31-G01 — NOT_EXECUTED:** Agente barato produce tool inválida: falla schema sin obtener shell/HTTP alternativo.
- **RDS-C31-G02 — NOT_EXECUTED:** El sistema bloquea un ataque y aun así completa el resumen legítimo con fuentes permitidas.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

P03; P04; P05. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
