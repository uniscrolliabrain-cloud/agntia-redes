# RDS-C12 · Meta: Instagram, Facebook y Threads por capacidad

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia12/42.

## Objetivo y contrato

Evitar mezclar login paths, tipos de cuenta, scopes y límites de productos distintos.

Invariante: **Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.**

## Entrada y dependencias

Requiere RDS-C11 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/adapters/meta/
- docs/providers/meta-matrix.md
- tests/contracts/meta/

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C12-T01
Obtener documentación primaria vigente tras el429 y fijar versión/producto/login path con fecha de revisión.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C12-T02
Distinguir Instagram Login de Facebook Login, cuenta profesional, Page/roles y entitlement de cada operación.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C12-T03
Definir por separado Facebook Page y Threads, sin copiar permisos o formatos de Instagram.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C12-T04
Implementar media container/processing/publish e IDs separados según contrato confirmado en laboratorio.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C12-T05
Consultar cuota/capacidad real y validar disclosure, privacidad y formatos del payload aprobado.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C12-T06
Revisar app/business verification, refresh y permisos de cuentas ajenas antes de modo comercial.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C12-T07
Probar scope perdido, container rechazado/caducado, cuota agotada, error de formato y vinculación a otra empresa.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C12-G01 — NOT_EXECUTED:** Cuenta o producto no elegible queda unsupported sin fallback a scraping/browser.
- **RDS-C12-G02 — NOT_EXECUTED:** Container creado para cuentaA no puede publicarse con binding deB.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

A04. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
