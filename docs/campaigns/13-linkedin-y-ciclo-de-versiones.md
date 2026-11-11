# RDS-C13 · LinkedIn y ciclo de versiones

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia13/42.

## Objetivo y contrato

Publicar orgánico solo con contrato de acceso/versionado vigente y permisos comprobados.

Invariante: **El permiso de publicar como miembro no concede publicación ni lectura de una empresa.**

## Entrada y dependencias

Requiere RDS-C12 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/adapters/linkedin/
- docs/providers/linkedin.md
- tests/contracts/linkedin/

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C13-T01
Verificar versiones soportadas y aviso de retiro202511; fijar headers y contrato actualizado antes de construir.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C13-T02
Distinguir miembros y organizaciones, roles de página y permisos read/write exigidos.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C13-T03
Validar tipos de post/media permitidos; no confundir carrousel orgánico con producto patrocinado.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C13-T04
Preparar upload y post como pasos separados con hashes y receipts correlacionados.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C13-T05
Implementar lectura/reconciliación de IDs permitidos y conflictos; no asumir acceso a todo el histórico.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C13-T06
Desactivar sponsored/boost/ads en MVP y mantener revisión humana de contenido/CTA.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C13-T07
Probar versión retirada,403, media inválido, post aceptado sin confirmación y cambio de rol del miembro.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C13-G01 — NOT_EXECUTED:** El header/API version ya retirado bloquea la capability y muestra actualización pendiente.
- **RDS-C13-G02 — NOT_EXECUTED:** Rol de página revocado tras aprobación impide envío en claim.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

A05. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
