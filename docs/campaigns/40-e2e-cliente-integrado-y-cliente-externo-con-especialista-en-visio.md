# RDS-C40 · E2E: cliente integrado y cliente externo con especialista en visio

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia40/42.

## Objetivo y contrato

Demostrar los dos modelos de servicio y distinguir fixture de proveedor real.

Invariante: **Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.**

## Entrada y dependencias

Requiere RDS-C39 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- tests/e2e/
- docs/verification/journeys.md
- docs/demo/

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C40-T01
Ejecutar onboarding/ServiceAgreement/WorkOrder de cliente externo sin padre y caso equivalente integrado.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C40-T02
Recorrer brief/assets/rights→variantes→preview→approval→intent→envío permitido→receipt/reconciliación→reporte.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C40-T03
Añadir inbox/moderación/reply proposal y handoff con contexto mínimo, revisión y aceptación de entregable.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C40-T04
Incluir sesión Anam autorizada o fixture explícita con aislamiento, pérdida de AV y continuidad de trabajo.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C40-T05
Probar dos tenants, tres actores humanos/agentes, revocaciones y replay sin mezclar artefactos/eventos/budget.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C40-T06
Ejecutar providers reales solo con cuenta/alcance aprobados, marcar los demás NOT_VERIFIED sin narrar acciones inexistentes.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C40-T07
Grabar demo/evidencias sanitizadas con SHAs/comandos/costes y mapa de gates que siguen bloqueados.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C40-G01 — NOT_EXECUTED:** Cliente standalone termina el recorrido sin llamar agente ni otro repo hermano obligatorio.
- **RDS-C40-G02 — NOT_EXECUTED:** Una llamada social termina unknown y el informe/visio explican pendiente, sin fake success.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

H01; N01; P05. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
