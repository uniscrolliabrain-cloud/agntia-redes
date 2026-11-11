# RDS-C15 · TikTok y consentimiento específico de publicación

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia15/42.

## Objetivo y contrato

Respetar creator settings, audit del cliente y elección real del usuario.

Invariante: **Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.**

## Entrada y dependencias

Requiere RDS-C14 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/adapters/tiktok/
- docs/providers/tiktok.md
- tests/contracts/tiktok/

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C15-T01
Verificar app, producto, scopes y estado de auditoría mediante cuenta/entorno autorizados.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C15-T02
Obtener creator info y opciones actuales antes de formar preview, sin ocultar elecciones obligatorias.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C15-T03
Capturar consentimiento de upload/publicación y metadata exacta del usuario, separado del contrato SaaS.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C15-T04
Implementar la ruta elegida Direct Post/upload con límites reales y sin opciones privadas inventadas.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C15-T05
Distinguir restricciones de apps no auditadas de errores de token/cuenta y bloquear público cuando aplique.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C15-T06
Registrar upload/publish refs y consultar outcome; no reintentar una creación incierta automáticamente.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C15-T07
Probar usuario que revoca consentimiento, app no auditada, cap alcanzado, opciones cambiadas y account cross-tenant.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C15-G01 — NOT_EXECUTED:** App sin audit no publica público ni evade la restricción mediante browser.
- **RDS-C15-G02 — NOT_EXECUTED:** Creator cambia opciones tras preview: aprobación/payload se invalida antes de upload.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

A07. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
