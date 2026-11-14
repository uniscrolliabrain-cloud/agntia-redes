# RDS-C02 — Arquitectura de empresa SaaS y acuerdos de servicio

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/02-arquitectura-de-empresa-saas-y-acuerdos-de-servicio.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Hacer que el servicio funcione como especialista independiente, además de integrado.

## Artefactos previstos
- `src/domain/service-agreement.ts`
- `src/domain/work-order.ts`
- `docs/adr/0001-saas.md`

## Invariante
El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.

## Dependencias y fuentes
Dependencias: RDS-C01. Fuentes: H01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C02-T01:** Modelar providerOrganization, customerOrganization, workspace, proyecto y external binding sin igualarlos por nombre. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.
- **RDS-C02-T02:** Definir ServiceAgreement con alcance, entitlements, responsables, datos, horario y aceptación comercial/editorial separadas. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.
- **RDS-C02-T03:** Diseñar onboarding de pyme/autónomo externo sin instalar agente ni los demás repos hermanos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.
- **RDS-C02-T04:** Permitir capacidades solapadas con otros servicios y fijar autoridad por encargo/recurso, no exclusividad por nombre. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.
- **RDS-C02-T05:** Definir puertos locales e integrados de aprobación, identidad, presupuesto y entrega de hechos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.
- **RDS-C02-T06:** Documentar separación de especialistas del SaaS y empleados generalistas del cliente y sus delegaciones. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.
- **RDS-C02-T07:** Validar una orden integrada y una externa con criterio de aceptación, cambios de alcance y salida contractual. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.

## Gates previstos, NO ejecutados
- RDS-C02-G01: Cliente externo completo prepara un encargo sin llamadas obligatorias al padre.
- RDS-C02-G02: Dos servicios proponen la misma pieza: solo la autoridad acordada de entrega puede ejecutarla.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
