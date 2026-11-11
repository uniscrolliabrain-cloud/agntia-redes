# RDS-C02 · Arquitectura de empresa SaaS y acuerdos de servicio

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia2/42.

## Objetivo y contrato

Hacer que el servicio funcione como especialista independiente, además de integrado.

Invariante: **El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.**

## Entrada y dependencias

Requiere RDS-C01 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/domain/service-agreement.ts
- src/domain/work-order.ts
- docs/adr/0001-saas.md

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C02-T01
Modelar providerOrganization, customerOrganization, workspace, proyecto y external binding sin igualarlos por nombre.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C02-T02
Definir ServiceAgreement con alcance, entitlements, responsables, datos, horario y aceptación comercial/editorial separadas.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C02-T03
Diseñar onboarding de pyme/autónomo externo sin instalar agente ni los demás repos hermanos.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C02-T04
Permitir capacidades solapadas con otros servicios y fijar autoridad por encargo/recurso, no exclusividad por nombre.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C02-T05
Definir puertos locales e integrados de aprobación, identidad, presupuesto y entrega de hechos.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C02-T06
Documentar separación de especialistas del SaaS y empleados generalistas del cliente y sus delegaciones.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C02-T07
Validar una orden integrada y una externa con criterio de aceptación, cambios de alcance y salida contractual.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C02-G01 — NOT_EXECUTED:** Cliente externo completo prepara un encargo sin llamadas obligatorias al padre.
- **RDS-C02-G02 — NOT_EXECUTED:** Dos servicios proponen la misma pieza: solo la autoridad acordada de entrega puede ejecutarla.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

H01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
