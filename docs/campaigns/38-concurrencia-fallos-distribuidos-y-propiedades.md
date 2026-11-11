# RDS-C38 · Concurrencia, fallos distribuidos y propiedades

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia38/42.

## Objetivo y contrato

Demostrar que las fronteras sobreviven más allá del camino feliz.

Invariante: **Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.**

## Entrada y dependencias

Requiere RDS-C37 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- tests/faults/
- tests/property/
- docs/verification/faults.md

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C38-T01
Construir fixtures deterministas, semillas y property tests de contratos/transiciones/hashes/scope.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C38-T02
Inyectar caída pre/post-HTTP, pre-ACK, DB/worker/cola/proveedor, throttling y cambio concurrente.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C38-T03
Ensayar leases/fencing, idempotency collisions y respuestas fuera de orden con varios trabajadores.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C38-T04
Verificar revocación entre enqueue/claim/envío y actualización de cuenta/policy/rights tras aprobación.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C38-T05
Simular sesión Anam interrumpida con callback repetido y consumo incierto sin reaprobación automática.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C38-T06
Probar backup consistente y restore aislado con claves externas y reconciliación de permisos actuales.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C38-T07
Detener release ante cross-tenant, secreto, doble efecto ambiguo, gasto sin control o pérdida de audit y conservar defecto.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C38-G01 — NOT_EXECUTED:** Worker antiguo despierta y no puede ACKear ni gastar/publicar con lease/fence vencidos.
- **RDS-C38-G02 — NOT_EXECUTED:** Caída tras efecto conserva unknown; no se cuentan dos éxitos por un único receipt.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

P03; P05. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
