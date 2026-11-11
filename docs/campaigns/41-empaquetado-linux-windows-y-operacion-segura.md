# RDS-C41 · Empaquetado, Linux/Windows y operación segura

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia41/42.

## Objetivo y contrato

Hacer instalable el SaaS/middleware en un alcance demostrado, no solo editable.

Invariante: **Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.**

## Entrada y dependencias

Requiere RDS-C40 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- infra/
- docs/operations/
- docs/release/artifacts.md

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C41-T01
Construir paquetes/SDK e imagen API/worker con versiones/digests, SBOM/notices y secretos fuera del contexto.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C41-T02
Probar instalación limpia fuera del checkout en Linux/Windows y registrar arquitecturas no verificadas.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C41-T03
Configurar puertos mínimos, red privada, usuario no root, rootFS read-only, límites y storage/backup con custodia.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C41-T04
Preparar scripts de comprobación sin cambiar políticas globales, resetear usuario o imprimir credenciales.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C41-T05
Verificar hashes y provenance/firmas de artefactos cuando la infraestructura lo permita, sin inventar aprobación.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C41-T06
Entregar runbook de onboarding/rotación/upgrade/stop/restore/rollback preservando efectos inciertos y privacidad actual.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C41-T07
Ejecutar recovery y rollback de laboratorio nuevo con evidencia de scopes/keys, sin borrar datos o recursos de otros proyectos.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C41-G01 — NOT_EXECUTED:** Instalación limpia ejecuta el alcance del smoke y no importa accidentalmente código del checkout.
- **RDS-C41-G02 — NOT_EXECUTED:** Rollback conserva DB/audit/keys/receipts y no resucita approvals antiguos o borra volúmenes del usuario.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

H01; N03. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
