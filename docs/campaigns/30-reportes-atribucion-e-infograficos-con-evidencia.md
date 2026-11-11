# RDS-C30 · Reportes, atribución e infográficos con evidencia

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia30/42.

## Objetivo y contrato

Entregar un servicio profesional de análisis sin causalidad o ingresos ficticios.

Invariante: **El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.**

## Entrada y dependencias

Requiere RDS-C29 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/reports/
- src/analytics/attribution.ts
- tests/integration/reports.test.ts

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C30-T01
Crear snapshots ejecutivos/técnicos con periodo, filtros, definiciones, cobertura y fuentes verificables.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C30-T02
Renderizar gráficos/HTML/PDF/CSV accesibles y sanitizados con footnotes, sin HTML/fórmulas activas del usuario.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C30-T03
Integrar UTM/click refs autorizados sin PII y declarar metodología de atribución.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C30-T04
Usar receipts de ventas/finanzas/cliente como fuentes opcionales, no equivaler engagement a ingresos/caja.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C30-T05
Separar hechos, hipótesis, forecast experimental y recomendaciones revisadas, con suficiencia de datos.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C30-T06
Vincular DeliverableVersion y AcceptanceReceipt del cliente al informe y cambios de alcance.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C30-T07
Probar reporte cross-tenant, datos stale/restringidos, CSV injection, rectificación y ROI sin evidencia de conversión.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C30-G01 — NOT_EXECUTED:** No hay datos suficientes: infografía muestra límites y no inventa mejor horario/forecast.
- **RDS-C30-G02 — NOT_EXECUTED:** Cambian derechos/retención de una fuente y su export derivado queda restringido.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

L01; P01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
