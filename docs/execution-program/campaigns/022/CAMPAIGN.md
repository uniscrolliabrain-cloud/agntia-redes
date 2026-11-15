# RDS-C22 · Presupuesto, entitlements, minutos y facturación del servicio

**DESIGN_ONLY · NOT_STARTED · 22/42.** Fuente [docs/campaigns/22-presupuesto-entitlements-minutos-y-facturacion-del-servicio.md](../../../campaigns/22-presupuesto-entitlements-minutos-y-facturacion-del-servicio.md).

## Resultado y límites
Separar coste upstream, límites contratados y precio del SaaS.

**Invariante:** El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.. **Dependencias:** RDS-C21.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/billing/src/entitlements.ts`.
- DTO y esquema: `packages/contracts/src/22.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/22.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/022.test.ts` y `tests/fixtures/022/`.
- Evidencia: `docs/evidence/c22/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/billing/`, `src/budget/`, `tests/integration/cost-concurrency.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 022.01 — RDS-C22-T01

**Acción:** Modelar payer del servicio o cliente y reservas globales/integradas o standalone con ledger revisado.

**Superficie primaria:** `packages/billing/src/entitlements.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/22.ts` y test `tests/campaigns/022.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C21-T07.

### 022.02 — RDS-C22-T02

**Acción:** Definir tarifas versionadas, impuestos/FX/mínimos y capacidad/canales/sesiones contratadas sin auto-upgrade.

**Superficie primaria:** `packages/billing/src/entitlements.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/22.ts` y test `tests/campaigns/022.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C22-T01.

### 022.03 — RDS-C22-T03

**Acción:** Reservar peor caso antes de texto/visión/listening/Anam o proveedor pagado y limitar concurrencia.

**Superficie primaria:** `packages/billing/src/entitlements.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/22.ts` y test `tests/campaigns/022.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C22-T02.

### 022.04 — RDS-C22-T04

**Acción:** Persistir consumo incierto, cancelación pre-send, factura tardía y sobrecoste real sin ocultar pasivos.

**Superficie primaria:** `packages/billing/src/entitlements.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/22.ts` y test `tests/campaigns/022.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C22-T03.

### 022.05 — RDS-C22-T05

**Acción:** Separar aceptación de presupuesto/contrato, autorización editorial y aceptación de entregable.

**Superficie primaria:** `packages/billing/src/entitlements.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/22.ts` y test `tests/campaigns/022.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C22-T04.

### 022.06 — RDS-C22-T06

**Acción:** Añadir puertos de factura/cobro solo por mandato explícito y no declarar cobrado sin receipt competente.

**Superficie primaria:** `packages/billing/src/entitlements.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/22.ts` y test `tests/campaigns/022.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C22-T05.

### 022.07 — RDS-C22-T07

**Acción:** Probar dos reservas concurrentes, reintento con misma key, corte de sesión Anam y plan agotado sin rebajar seguridad.

**Superficie primaria:** `packages/billing/src/entitlements.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/22.ts` y test `tests/campaigns/022.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C22-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C22-G01 / NOT_EXECUTED:** Dos agentes no reservan el mismo saldo, ni se cargan proveedor y cliente por duplicado.
- **RDS-C22-G02 / NOT_EXECUTED:** Timeout de sesión conserva coste incierto hasta reconciliación, sin minutos ilimitados ficticios.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_VERIFIED (ledger en memoria) con tabla SQL presupuestaria preparada.
**SHA:** d2a0447f6a4aaa729a24fd49d1c3808796696a87
**Archivos y diff:** src/budget/index.ts, tests/integration/cost-concurrency.test.ts
**Tests/comandos/fixtures:** npx vitest run tests/integration/cost-concurrency.test.ts -> 6/6 PASS. Fixtures sintéticas propias; sin cuentas ni APIs reales.
**Gates:**
- Reserva por encima del techo -> BUDGET_EXCEEDED (PASS).
- Resultado incierto conserva el pasivo y bloquea nuevas reservas (PASS).
- Dos reservas concurrentes: solo una pasa (PASS).
- Liquidar a cero libera capacidad (PASS).
**Incoherencias y decisiones:** El importe se reserva antes del IO y un resultado incierto queda comprometido hasta conciliar; el mismo idempotency key no reserva dos veces.
**Deuda y riesgos:** El ledger no está persistido todavía (la tabla budget_reservations existe); sin FX, entitlements mensuales ni facturación.
**Aprendizajes para siguientes campañas:** Marcar incierto es lo que evita el doble gasto cuando el worker muere.

Evidencia extendida: docs/evidence/c022/README.md
