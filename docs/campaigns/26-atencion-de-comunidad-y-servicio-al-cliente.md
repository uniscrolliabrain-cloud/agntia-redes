# RDS-C26 · Atención de comunidad y servicio al cliente

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia26/42.

## Objetivo y contrato

Gestionar casos propios o derivados con aceptación y contexto apropiados.

Invariante: **Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.**

## Entrada y dependencias

Requiere RDS-C25 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/community/cases.ts
- src/community/handoffs.ts
- tests/integration/community.test.ts

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C26-T01
Crear ServiceCase e hilo de soporte con responsable, SLA contratado, privacidad y estados verificables.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C26-T02
Permitir atención propia del SaaS o handoff a clientes/Chatwoot/CRM autorizado según acuerdo.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C26-T03
Distinguir pregunta comercial, incidencia, baja, derecho de datos y riesgo reputacional sin inferencias sensibles.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C26-T04
Preparar reply proposal ligada al hilo/contexto actual, fuente y tono; no enviarla como side effect de clasificación.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C26-T05
Verificar identidad por binding autorizado al vincular contacto; no fusionar por handle/nombre o simple email.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C26-T06
Registrar handoff ACK/escalado y horario humano real; no fingir transferencia o respuesta24x7.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C26-T07
Probar mensaje nuevo tras approval, solicitud de baja, case de otra empresa y proveedor de soporte no disponible.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C26-G01 — NOT_EXECUTED:** Comentario público no se convierte en contacto de ventas ni consentimiento de marketing.
- **RDS-C26-G02 — NOT_EXECUTED:** Nuevo mensaje cambia el contexto y una respuesta sensible aprobada queda pendiente de revisión.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

L01; L02. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
