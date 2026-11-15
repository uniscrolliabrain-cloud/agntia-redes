# RDS-C02 · Arquitectura de empresa SaaS y acuerdos de servicio

**DESIGN_ONLY · NOT_STARTED · 2/42.** Fuente [docs/campaigns/02-arquitectura-de-empresa-saas-y-acuerdos-de-servicio.md](../../../campaigns/02-arquitectura-de-empresa-saas-y-acuerdos-de-servicio.md).

## Resultado y límites
Hacer que el servicio funcione como especialista independiente, además de integrado.

**Invariante:** El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.. **Dependencias:** RDS-C01.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/domain/src/service-agreements.ts`.
- DTO y esquema: `packages/contracts/src/02.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/02.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/002.test.ts` y `tests/fixtures/002/`.
- Evidencia: `docs/evidence/c02/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/domain/service-agreement.ts`, `src/domain/work-order.ts`, `docs/adr/0001-saas.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 002.01 — RDS-C02-T01

**Acción:** Modelar providerOrganization, customerOrganization, workspace, proyecto y external binding sin igualarlos por nombre.

**Superficie primaria:** `packages/domain/src/service-agreements.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/02.ts` y test `tests/campaigns/002.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C01-T07.

### 002.02 — RDS-C02-T02

**Acción:** Definir ServiceAgreement con alcance, entitlements, responsables, datos, horario y aceptación comercial/editorial separadas.

**Superficie primaria:** `packages/domain/src/service-agreements.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/02.ts` y test `tests/campaigns/002.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C02-T01.

### 002.03 — RDS-C02-T03

**Acción:** Diseñar onboarding de pyme/autónomo externo sin instalar agente ni los demás repos hermanos.

**Superficie primaria:** `packages/domain/src/service-agreements.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/02.ts` y test `tests/campaigns/002.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C02-T02.

### 002.04 — RDS-C02-T04

**Acción:** Permitir capacidades solapadas con otros servicios y fijar autoridad por encargo/recurso, no exclusividad por nombre.

**Superficie primaria:** `packages/domain/src/service-agreements.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/02.ts` y test `tests/campaigns/002.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C02-T03.

### 002.05 — RDS-C02-T05

**Acción:** Definir puertos locales e integrados de aprobación, identidad, presupuesto y entrega de hechos.

**Superficie primaria:** `packages/domain/src/service-agreements.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/02.ts` y test `tests/campaigns/002.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C02-T04.

### 002.06 — RDS-C02-T06

**Acción:** Documentar separación de especialistas del SaaS y empleados generalistas del cliente y sus delegaciones.

**Superficie primaria:** `packages/domain/src/service-agreements.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/02.ts` y test `tests/campaigns/002.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C02-T05.

### 002.07 — RDS-C02-T07

**Acción:** Validar una orden integrada y una externa con criterio de aceptación, cambios de alcance y salida contractual.

**Superficie primaria:** `packages/domain/src/service-agreements.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/02.ts` y test `tests/campaigns/002.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C02-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C02-G01 / NOT_EXECUTED:** Cliente externo completo prepara un encargo sin llamadas obligatorias al padre.
- **RDS-C02-G02 / NOT_EXECUTED:** Dos servicios proponen la misma pieza: solo la autoridad acordada de entrega puede ejecutarla.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_VERIFIED (modelo de dominio + ADR). Persistencia y rutas de negocio pendientes.
**SHA:** d2a0447f6a4aaa729a24fd49d1c3808796696a87
**Archivos y diff:** docs/adr/0001-saas.md, src/domain/service-agreement.ts, src/domain/work-order.ts, tests/domain/agreement.test.ts
**Tests/comandos/fixtures:** npm run typecheck -> PASS; npx vitest run tests/domain/agreement.test.ts -> 4/4 PASS. Fixtures sintéticas propias; sin cuentas ni APIs reales.
**Gates:**
- Acuerdo con requireHumanApprovalForEffects=false rechazado por schema (PASS).
- Orden de trabajo con gasto por encima del mandato o fuera del acuerdo -> DomainError (PASS).
**Incoherencias y decisiones:** Las tres aceptaciones (comercial, editorial, entrega) son tipos branded incompatibles; un acuerdo que permita efectos sin aprobación humana es inválido, no un flag.
**Deuda y riesgos:** Sin persistencia ni endpoints /service-agreements y /work-orders; la firma de la aceptación comercial no se verifica.
**Aprendizajes para siguientes campañas:** Separar los hechos por tipo impide que una campaña posterior los fusione por comodidad.

Evidencia extendida: docs/evidence/c002/README.md
