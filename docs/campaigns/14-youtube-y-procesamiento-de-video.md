# RDS-C14 · YouTube y procesamiento de vídeo

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia14/42.

## Objetivo y contrato

Separar upload, processing, visibilidad y confirmación con cuotas vigentes.

Invariante: **Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.**

## Entrada y dependencias

Requiere RDS-C13 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/adapters/youtube/
- tests/contracts/youtube/
- docs/providers/youtube.md

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C14-T01
Verificar scope/account/channel y documentación actual de upload/cuotas, sin números antiguos heredados.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C14-T02
Validar título/description/locales/thumbnail, made-for-kids y synthetic media según hechos/policy aplicable.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C14-T03
Exigir visibilidad explícita aprobada y confirmar defaults/privacidad con respuesta real.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C14-T04
Gestionar resumable upload/processing y conservar upload/session/remote video IDs sin filtrar URLs de sesión.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C14-T05
Aplicar budget/cuota por operación y límites de media antes de enviar bytes.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C14-T06
Reconciliar upload incierto y programación/estado sin recrear otro vídeo por timeout.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C14-T07
Probar canal equivocado, cuota, subida interrumpida, procesamiento fallido, publicación privada y rights expirados.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C14-G01 — NOT_EXECUTED:** Upload termina pero processing falla: el intent no figura publicado y conserva receipt de fallo.
- **RDS-C14-G02 — NOT_EXECUTED:** Payload sin visibilidad explícita se rechaza en preview aunque el proveedor tenga default.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

A06. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
