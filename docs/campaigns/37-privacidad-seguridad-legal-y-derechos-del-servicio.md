# RDS-C37 · Privacidad, seguridad, legal y derechos del servicio

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia37/42.

## Objetivo y contrato

Tratar datos de clientes y conversación AV sin vender certificación automática.

Invariante: **Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.**

## Entrada y dependencias

Requiere RDS-C36 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/privacy/
- docs/threat-model.md
- tests/security/privacy/

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C37-T01
Documentar responsable/encargado, finalidad/base, DPA, transferencias, proveedores y retención por dato/cliente.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C37-T02
Proteger secretos, prompts/logs/events/reportes y media con minimización, cifrado y necesidad de saber.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C37-T03
Propagar restricciones/bajas/derechos a derivados, memoria, inbox, AV/transcripts y backups según procedimiento.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C37-T04
Verificar derechos de voz/imagen/música y reglas de publicidad/IA por caso/fecha sin dictamen LLM universal.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C37-T05
Preparar proceso de incidente/seguridad y responsables reales, sin avisos regulatorios o borrado remoto automáticos.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C37-T06
Definir permisos de operador/proveedor y acceso excepcional auditable para soporte multicliente.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C37-T07
Probar restriction propagation, legal hold, token revocado, prompt injection, CSV/HTML/SSRF y ausencia de secretos centinela.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C37-G01 — NOT_EXECUTED:** Solicitud de restricción impide leer fuente y reportes/transcripts derivados autorizables.
- **RDS-C37-G02 — NOT_EXECUTED:** Restore viejo no rehabilita permisos/restricciones obsoletos ni abre nuevas publicaciones.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

L01; L02; N03; N05. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
