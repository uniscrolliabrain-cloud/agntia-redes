# RDS-C06 · Licencias, catálogo comercial y discovery de capacidades

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia6/42.

## Objetivo y contrato

No habilitar una integración por existir README, SDK o un plan comercial atractivo.

Invariante: **Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.**

## Entrada y dependencias

Requiere RDS-C05 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- docs/upstreams/
- src/providers/catalog.ts
- src/domain/entitlements.ts

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C06-T01
Fijar SHAs/ediciones y revisar licencias de Postiz, Mixpost, Anam, workflows, SDKs y datasets por componente.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C06-T02
Distinguir backend OSS, Enterprise, Cloud, modelo, reglas/datos y derecho de prestación comercial o embedding.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C06-T03
Crear CapabilityReport por cuenta/operación/versión con expiry y supported/unsupported/unknown/blocked.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C06-T04
Definir ServicePlan/Entitlement y las acciones que el cliente contrató; no ampliar permisos por cambio de plan.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C06-T05
Verificar app review, titularidad, scopes, cuota y factura/tarifa mediante fuentes y probes autorizados.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C06-T06
Registrar Meta429, Bluesky no legible y otras incertidumbres; no convertirlas en soporte positivo.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C06-T07
Probar ausencia de permiso/edición/servicio y mostrar bloqueo con evidencia en vez de fake success.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C06-G01 — NOT_EXECUTED:** La edición instalada carece del endpoint documentado en Cloud: capability queda unsupported.
- **RDS-C06-G02 — NOT_EXECUTED:** Un scope revocado o report caducado bloquea escritura aunque el último probe tuviera200.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

A01; A06; N01; N04. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
