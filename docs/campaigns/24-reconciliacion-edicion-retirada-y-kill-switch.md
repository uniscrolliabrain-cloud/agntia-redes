# RDS-C24 · Reconciliación, edición, retirada y kill switch

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia24/42.

## Objetivo y contrato

Resolver incertidumbre sin borrar historia ni inventar rollback remoto.

Invariante: **Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.**

## Entrada y dependencias

Requiere RDS-C23 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/publication/reconcile.ts
- src/publication/changes.ts
- tests/integration/reconcile.test.ts

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C24-T01
Consultar por receipt/operation ref inequívoca cuando el proveedor lo permite y registrar limitaciones.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C24-T02
Crear cola de revisión ante lookup ambiguo; no buscar solo texto/hora para asumir identidad del post.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C24-T03
Tramitar edición/borrado como nuevas operaciones aprobadas y con expected remote revision cuando exista.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C24-T04
Conservar tombstone y evidencia mínima de remoto eliminado/privado/modificado fuera del servicio.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C24-T05
Implementar kill switch por cliente/cuenta/proveedor y distinguir cancelar admisión de cancelar remoto.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C24-T06
Coordinar saldo/intent/policy tras restore o reintento manual autorizado.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C24-T07
Probar timeout tras create, delete ya realizado, post ajeno parecido y pausa posterior a aceptación remota.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C24-G01 — NOT_EXECUTED:** Sin lookup fiable el intent permanece unknown y no se reenvía para cerrar un dashboard.
- **RDS-C24-G02 — NOT_EXECUTED:** Otro usuario modifica el post remoto y una actualización local se bloquea en conflicto.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

A02; L01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
