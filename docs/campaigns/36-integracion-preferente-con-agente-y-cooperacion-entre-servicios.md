# RDS-C36 · Integración preferente con agente y cooperación entre servicios

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia36/42.

## Objetivo y contrato

Conectar la empresa SaaS manteniendo independencia y solapamiento funcional autorizado.

Invariante: **La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.**

## Entrada y dependencias

Requiere RDS-C35 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/bridges/agente/
- docs/integration/PATCHSET-AGENTE.md
- tests/contracts/parent/

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C36-T01
Releer SHA/tipos/events y mapear Principal/Approval/WorkOrder del host a contratos propios con pruebas.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C36-T02
Verificar fuente de aprobación nativa; no reutilizar signedAt de una proyección como prueba de firma.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C36-T03
Traducir eventos solo a schemas reales registrados y comprobar persisted antes de ACK del bridge.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C36-T04
Conservar dedup durable más allá del TTL de ruido y registrar domainEventId/receipt de consumo.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C36-T05
Definir handoffs voluntarios a branding/clientes/ventas/finanzas/legal/seguros/gestoría y resolver conflictos por encargo.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C36-T06
Garantizar que desconectar host no convierte al cliente standalone en otro tenant ni invalida falsamente sus permisos locales.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C36-T07
Entregar patchset propuesto y test consumidor simulado, sin modificar agente o hermanos hasta aprobación expresa.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C36-G01 — NOT_EXECUTED:** EventBus devuelve persisted=false y el bridge conserva outbox sin ACK falso.
- **RDS-C36-G02 — NOT_EXECUTED:** Dos especialistas proponen lo mismo y la entrega final conserva una autoridad e intent idempotente.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

H01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
