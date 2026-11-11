# RDS-C39 · Observabilidad, rendimiento y economía del servicio

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia39/42.

## Objetivo y contrato

Medir capacidad real y compromisos sin inventar SLA o margen comercial.

Invariante: **Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.**

## Entrada y dependencias

Requiere RDS-C38 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/telemetry/
- tests/performance/
- docs/operations/capacity.md

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C39-T01
Emitir métricas de intent/outcome/lag/errors/approval/cost con cardinalidad/PII controladas y scopes adecuados.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C39-T02
Crear trazas/correlation entre sesión, work order, revisión, job y receipt sin secretos o textos privados.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C39-T03
Medir p50/p95, throughput, CPU/RAM/disco, media/egress y minutos/concurrencia por perfil y arquitectura.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C39-T04
Reconciliar coste observado contra fuentes/tarifas/facturas y separar coste técnico de precio/margen retail.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C39-T05
Configurar alertas operativas, DLQ/unknown y escalado humano según horario/SLA realmente acordados.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C39-T06
Revisar cuota/gasto agregado entre cliente/proveedor y evitar doble reserva de recursos o cargos.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C39-T07
Publicar resultados con entorno/duración/carga/limitaciones, sin presentar API vacía como capacidad de agencia completa.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C39-G01 — NOT_EXECUTED:** Proveedor/collector cae y la vista marca stale/unknown sin un estado global seguro.
- **RDS-C39-G02 — NOT_EXECUTED:** Plan agotado reduce análisis opcional o admisión, no audit/aislamiento/revisión requerida.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

N04; A08. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
