# RDS-C06 · Licencias, catálogo comercial y discovery de capacidades

**DESIGN_ONLY · NOT_STARTED · 6/42.** Fuente [docs/campaigns/06-licencias-catalogo-comercial-y-discovery-de-capacidades.md](../../../campaigns/06-licencias-catalogo-comercial-y-discovery-de-capacidades.md).

## Resultado y límites
No habilitar una integración por existir README, SDK o un plan comercial atractivo.

**Invariante:** Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.. **Dependencias:** RDS-C05.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/providers/src/capabilities.ts`.
- DTO y esquema: `packages/contracts/src/06.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/06.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/006.test.ts` y `tests/fixtures/006/`.
- Evidencia: `docs/evidence/c06/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `docs/upstreams/`, `src/providers/catalog.ts`, `src/domain/entitlements.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 006.01 — RDS-C06-T01

**Acción:** Fijar SHAs/ediciones y revisar licencias de Postiz, Mixpost, Anam, workflows, SDKs y datasets por componente.

**Superficie primaria:** `packages/providers/src/capabilities.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/06.ts` y test `tests/campaigns/006.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C05-T07.

### 006.02 — RDS-C06-T02

**Acción:** Distinguir backend OSS, Enterprise, Cloud, modelo, reglas/datos y derecho de prestación comercial o embedding.

**Superficie primaria:** `packages/providers/src/capabilities.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/06.ts` y test `tests/campaigns/006.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C06-T01.

### 006.03 — RDS-C06-T03

**Acción:** Crear CapabilityReport por cuenta/operación/versión con expiry y supported/unsupported/unknown/blocked.

**Superficie primaria:** `packages/providers/src/capabilities.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/06.ts` y test `tests/campaigns/006.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C06-T02.

### 006.04 — RDS-C06-T04

**Acción:** Definir ServicePlan/Entitlement y las acciones que el cliente contrató; no ampliar permisos por cambio de plan.

**Superficie primaria:** `packages/providers/src/capabilities.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/06.ts` y test `tests/campaigns/006.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C06-T03.

### 006.05 — RDS-C06-T05

**Acción:** Verificar app review, titularidad, scopes, cuota y factura/tarifa mediante fuentes y probes autorizados.

**Superficie primaria:** `packages/providers/src/capabilities.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/06.ts` y test `tests/campaigns/006.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C06-T04.

### 006.06 — RDS-C06-T06

**Acción:** Registrar Meta429, Bluesky no legible y otras incertidumbres; no convertirlas en soporte positivo.

**Superficie primaria:** `packages/providers/src/capabilities.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/06.ts` y test `tests/campaigns/006.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C06-T05.

### 006.07 — RDS-C06-T07

**Acción:** Probar ausencia de permiso/edición/servicio y mostrar bloqueo con evidencia en vez de fake success.

**Superficie primaria:** `packages/providers/src/capabilities.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/06.ts` y test `tests/campaigns/006.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C06-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C06-G01 / NOT_EXECUTED:** La edición instalada carece del endpoint documentado en Cloud: capability queda unsupported.
- **RDS-C06-G02 / NOT_EXECUTED:** Un scope revocado o report caducado bloquea escritura aunque el último probe tuviera200.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_PARTIAL: discovery de capacidades por operación; faltan entitlements mensuales y catálogo comercial.
**SHA:** d2a0447f6a4aaa729a24fd49d1c3808796696a87
**Archivos y diff:** src/providers/catalog.ts, tests/contracts/catalog.test.ts
**Tests/comandos/fixtures:** npx vitest run tests/contracts/catalog.test.ts -> 4/4 PASS. Fixtures sintéticas propias; sin cuentas ni APIs reales.
**Gates:**
- Documentado no habilita runtime: mastodon, linkedin y youtube siguen en DOCUMENTED (PASS).
- Verificación caducada vuelve a UNKNOWN y bloquea (PASS).
- Verificación vigente habilita solo la operación probada, no el proveedor entero (PASS).
**Incoherencias y decisiones:** Solo VERIFIED_RUNTIME con evidencia y expiración habilita IO. LinkedIn se declara sobre 202606; la versión 202511 no se soporta (se retira el 2026-11-16).
**Deuda y riesgos:** src/domain/entitlements.ts y docs/upstreams/ sin implementar; no hay probe real ni límites de cuota por cuenta.
**Aprendizajes para siguientes campañas:** El catálogo debe nacer conservador: un documento de API no es un permiso de plataforma.

Evidencia extendida: docs/evidence/c006/README.md
