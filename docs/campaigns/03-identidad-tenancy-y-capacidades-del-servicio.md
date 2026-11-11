# RDS-C03 · Identidad, tenancy y capacidades del servicio

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia3/42.

## Objetivo y contrato

Denegar permisos por defecto para humanos, especialistas IA, clientes y partners.

Invariante: **Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.**

## Entrada y dependencias

Requiere RDS-C02 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/auth/principal.ts
- src/auth/policy.ts
- tests/security/tenancy.test.ts

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C03-T01
Introducir issuer registry y principal verificado para modo standalone y bridge autenticado del padre.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C03-T02
Mapear tenant padre a workspace cliente con registro explícito, revisión y unicidad, sin fallback default.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C03-T03
Definir capacidades read/propose/review/execute/admin y separación de principal humano y kind=agent.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C03-T04
Revalidar membership, suspensión, scope y revocación en cada request, claim y ejecución de job.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C03-T05
Cerrar trust de headers y argumentos del modelo: rol, cuenta, tenant y delegación solo se derivan de servidor.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C03-T06
Crear fixtures de dos organizaciones cliente y empresa proveedora, con acceso limitado por proyecto/cuenta.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C03-T07
Probar cross-tenant, principal revocado, DB de identidad caída, rol insuficiente y ausencia de integración.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C03-G01 — NOT_EXECUTED:** ClienteA intenta accountBinding deB y recibe404 sin metadatos del otro cliente.
- **RDS-C03-G02 — NOT_EXECUTED:** Fallo al resolver membresía devuelve indisponible/denegado, nunca owner/default.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

H01; L01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
