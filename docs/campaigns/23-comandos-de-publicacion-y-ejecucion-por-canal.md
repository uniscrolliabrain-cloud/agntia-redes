# RDS-C23 · Comandos de publicación y ejecución por canal

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia23/42.

## Objetivo y contrato

Tramitar solo el payload aprobado y registrar el alcance real de cada resultado.

Invariante: **Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.**

## Entrada y dependencias

Requiere RDS-C22 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/publication/commands.ts
- tests/integration/publish.test.ts
- docs/receipt-map.md

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C23-T01
Crear preview final por accountBinding con validación de payload, derechos, visibilidad y capability fresca.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C23-T02
Admitir intent idempotente con revisión/approval/budget y separar upload, backend job y post.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C23-T03
Enviar únicamente con lease/fence y revalidación de principal/kill switch/ventana.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C23-T04
Persistir receipt remoto y estado semántico sin considerar un202 o jobID como publicación confirmada.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C23-T05
Soportar éxito parcial por canal y reanudar solo los pendientes realmente seguros.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C23-T06
Emitir hechos al outbox y exponer seguimiento para humano y agente con causas/warnings.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C23-T07
Probar wrong-account, media cambiado, scope revocado, duplicado, cuota y retorno con contenido no verificable.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C23-G01 — NOT_EXECUTED:** Tres canales: dos confirmados y uno unknown; no se repiten los confirmados.
- **RDS-C23-G02 — NOT_EXECUTED:** El avatar consulta estado y solo dice publicado para receipts confirmed.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

A01; A02; A06. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
