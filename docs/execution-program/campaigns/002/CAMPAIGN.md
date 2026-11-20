# RDS-C02 · Arquitectura de empresa SaaS y acuerdos de servicio

**DESIGN_ONLY · NOT_STARTED · 2/42.** Fuente [docs/campaigns/02-arquitectura-de-empresa-saas-y-acuerdos-de-servicio.md](../../../campaigns/02-arquitectura-de-empresa-saas-y-acuerdos-de-servicio.md).

## Resultado y límites
Hacer que el servicio funcione como especialista independiente, además de integrado.

**Invariante:** El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.. **Dependencias:** RDS-C01.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/domain/service-agreement.ts`, `src/domain/work-order.ts`, `docs/adr/0001-saas.md`.
- Presente en el repositorio hoy: `src/domain/service-agreement.ts`, `src/domain/work-order.ts`, `docs/adr/0001-saas.md` (3/3 superficies).
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/domain/service-agreement.test.ts` y `tests/fixtures/c02/`.
- Evidencia: `docs/evidence/c002/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/domain/service-agreement.ts`, `src/domain/work-order.ts`, `docs/adr/0001-saas.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 002.01 — RDS-C02-T01

**Acción:** Modelar providerOrganization, customerOrganization, workspace, proyecto y external binding sin igualarlos por nombre.

**Superficie:** `src/domain/service-agreement.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/service-agreement.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.

**Verificación:** caso `RDS-C02-T01` sobre `tests/domain/service-agreement.test.ts`; evidencia `docs/evidence/c002/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C01-T07.

### 002.02 — RDS-C02-T02

**Acción:** Definir ServiceAgreement con alcance, entitlements, responsables, datos, horario y aceptación comercial/editorial separadas.

**Superficie:** `src/domain/work-order.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/service-agreement.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.

**Verificación:** caso `RDS-C02-T02` sobre `tests/domain/service-agreement.test.ts`; evidencia `docs/evidence/c002/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C02-T01.

### 002.03 — RDS-C02-T03

**Acción:** Diseñar onboarding de pyme/autónomo externo sin instalar agente ni los demás repos hermanos.

**Superficie:** `docs/adr/0001-saas.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/service-agreement.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.

**Verificación:** caso `RDS-C02-T03` sobre `tests/domain/service-agreement.test.ts`; evidencia `docs/evidence/c002/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C02-T02.

### 002.04 — RDS-C02-T04

**Acción:** Permitir capacidades solapadas con otros servicios y fijar autoridad por encargo/recurso, no exclusividad por nombre.

**Superficie:** `src/domain/service-agreement.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/service-agreement.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.

**Verificación:** caso `RDS-C02-T04` sobre `tests/domain/service-agreement.test.ts`; evidencia `docs/evidence/c002/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C02-T03.

### 002.05 — RDS-C02-T05

**Acción:** Definir puertos locales e integrados de aprobación, identidad, presupuesto y entrega de hechos.

**Superficie:** `src/domain/work-order.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/service-agreement.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.

**Verificación:** caso `RDS-C02-T05` sobre `tests/domain/service-agreement.test.ts`; evidencia `docs/evidence/c002/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C02-T04.

### 002.06 — RDS-C02-T06

**Acción:** Documentar separación de especialistas del SaaS y empleados generalistas del cliente y sus delegaciones.

**Superficie:** `docs/adr/0001-saas.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/service-agreement.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.

**Verificación:** caso `RDS-C02-T06` sobre `tests/domain/service-agreement.test.ts`; evidencia `docs/evidence/c002/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C02-T05.

### 002.07 — RDS-C02-T07

**Acción:** Validar una orden integrada y una externa con criterio de aceptación, cambios de alcance y salida contractual.

**Superficie:** `src/domain/service-agreement.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/service-agreement.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El aislamiento y los controles mínimos son iguales para clientes del padre y clientes externos.

**Verificación:** caso `RDS-C02-T07` sobre `tests/domain/service-agreement.test.ts`; evidencia `docs/evidence/c002/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C02-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C02-G01 / PASS:** Cliente externo completo prepara un encargo sin llamadas obligatorias al padre. **Caso:** `RDS-C02-G01` en `tests/domain/agreement.test.ts`. **Evidencia:** `docs/evidence/c002/g01.json`.
- **RDS-C02-G02 / NOT_EXECUTED:** Dos servicios proponen la misma pieza: solo la autoridad acordada de entrega puede ejecutarla. **Caso:** `RDS-C02-G02` en `tests/domain/agreement.test.ts`. **Evidencia:** `docs/evidence/c002/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_VERIFIED (modelo de dominio + ADR). Persistencia y rutas de negocio pendientes.
**SHA:** bc293688d95b0ef99bf5b4e91c686d3d1d259b7d
**Archivos y diff:** docs/adr/0001-saas.md, src/domain/service-agreement.ts, src/domain/work-order.ts, tests/domain/agreement.test.ts
**Tests/comandos/fixtures:** npm run typecheck -> PASS; npx vitest run tests/domain/agreement.test.ts -> 4/4 PASS. Fixtures sintéticas propias; sin cuentas ni APIs reales.
**Gates:**
- Acuerdo con requireHumanApprovalForEffects=false rechazado por schema (PASS).
- Orden de trabajo con gasto por encima del mandato o fuera del acuerdo -> DomainError (PASS).
**Incoherencias y decisiones:** Las tres aceptaciones (comercial, editorial, entrega) son tipos branded incompatibles; un acuerdo que permita efectos sin aprobación humana es inválido, no un flag.
**Deuda y riesgos:** Sin persistencia ni endpoints /service-agreements y /work-orders; la firma de la aceptación comercial no se verifica.
**Aprendizajes para siguientes campañas:** Separar los hechos por tipo impide que una campaña posterior los fusione por comodidad.

Evidencia extendida: docs/evidence/c002/README.md
