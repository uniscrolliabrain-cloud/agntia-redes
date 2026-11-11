# RDS-C11 · Adaptador Bluesky y referencias de registro

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia11/42.

## Objetivo y contrato

Fijar protocolo/cuenta y detectar conflictos sin recetas de auth obsoletas.

Invariante: **Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.**

## Entrada y dependencias

Requiere RDS-C10 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/adapters/bluesky/
- tests/contracts/bluesky/
- docs/providers/bluesky.md

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C11-T01
Leer documentación/schema primarios vigentes y fijar SDK/protocolo/PDS autorizado; registrar la incertidumbre actual.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C11-T02
Verificar OAuth y binding DID/cuenta/workspace; no usar passwords de ejemplo como plan productivo.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C11-T03
Normalizar texto/facets/media/idioma y límites reales de la versión elegida.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C11-T04
Definir record refs y estrategia de operation key solo si el contrato verificado permite correlación inequívoca.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C11-T05
Rechazar overwrite de registro remoto con hash distinto y crear conflicto de revisión.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C11-T06
Persistir receipts, capacidades y versión de mapping; denegar hosts/PDS no configurados por servidor.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C11-T07
Probar reintento incierto, identidad cambiada, referencia ajena y media fuera de scope con fixtures de contrato.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C11-G01 — NOT_EXECUTED:** El rkey/ref apunta a contenido distinto y se bloquea en conflicto, sin overwrite.
- **RDS-C11-G02 — NOT_EXECUTED:** Cambiar PDS o cuenta requiere revalidación de binding y no cambia el tenant por texto del modelo.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

A03. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
