# RDS-C16 · Proveedores opcionales: X, Pinterest y Buffer

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia16/42.

## Objetivo y contrato

Ampliar solo capacidades demostradas y con condiciones comerciales verificadas.

Invariante: **La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.**

## Entrada y dependencias

Requiere RDS-C15 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/adapters/optional/
- docs/providers/optional.md
- tests/contracts/optional/

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C16-T01
Priorizar provider según contrato de cliente y evidencias; dejar los no investigados disabled.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C16-T02
Para X verificar pay-per-use, permisos, cuota, hard limit y fuente de tarifa antes de habilitar lectura pagada.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C16-T03
Para Pinterest realizar investigación primaria y discovery propios; no reutilizar DTO de Instagram.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C16-T04
Para Buffer inspeccionar API actual/entitlement y limitar superficie a rutas nominadas que realmente existan.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C16-T05
Normalizar publicación/analytics por capability, manteniendo métricas y derechos de cada canal separados.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C16-T06
Conservar rutas no soportadas como unavailable y no pagar ni activar trial para completar un gate.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C16-T07
Probar ledger agotado, API no incluida en plan, error por producto y replay de un backend con outcome incierto.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C16-G01 — NOT_EXECUTED:** Un plan sin acceso a analytics devuelve unsupported sin fabricar ceros.
- **RDS-C16-G02 — NOT_EXECUTED:** Operación pagada sin reserva o tarifa revisada se deniega antes de HTTP.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

A08; A09. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
