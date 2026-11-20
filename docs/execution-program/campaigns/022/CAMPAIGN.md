# RDS-C22 · Presupuesto, entitlements, minutos y facturación del servicio

**DESIGN_ONLY · NOT_STARTED · 22/42.** Fuente [docs/campaigns/22-presupuesto-entitlements-minutos-y-facturacion-del-servicio.md](../../../campaigns/22-presupuesto-entitlements-minutos-y-facturacion-del-servicio.md).

## Resultado y límites
Separar coste upstream, límites contratados y precio del SaaS.

**Invariante:** El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.. **Dependencias:** RDS-C21.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/billing/`, `src/budget/`, `tests/integration/cost-concurrency.test.ts`.
- Presente en el repositorio hoy: `src/budget/`, `tests/integration/cost-concurrency.test.ts` (2/3 superficies).
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/integration/cost-concurrency.test.ts` y `tests/fixtures/c22/`.
- Evidencia: `docs/evidence/c022/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/billing/`, `src/budget/`, `tests/integration/cost-concurrency.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 022.01 — RDS-C22-T01

**Acción:** Modelar payer del servicio o cliente y reservas globales/integradas o standalone con ledger revisado.

**Superficie:** `src/billing/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/cost-concurrency.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.

**Verificación:** caso `RDS-C22-T01` sobre `tests/integration/cost-concurrency.test.ts`; evidencia `docs/evidence/c022/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C21-T07.

### 022.02 — RDS-C22-T02

**Acción:** Definir tarifas versionadas, impuestos/FX/mínimos y capacidad/canales/sesiones contratadas sin auto-upgrade.

**Superficie:** `src/budget/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/cost-concurrency.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.

**Verificación:** caso `RDS-C22-T02` sobre `tests/integration/cost-concurrency.test.ts`; evidencia `docs/evidence/c022/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C22-T01.

### 022.03 — RDS-C22-T03

**Acción:** Reservar peor caso antes de texto/visión/listening/Anam o proveedor pagado y limitar concurrencia.

**Superficie:** `tests/integration/cost-concurrency.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/cost-concurrency.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.

**Verificación:** caso `RDS-C22-T03` sobre `tests/integration/cost-concurrency.test.ts`; evidencia `docs/evidence/c022/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C22-T02.

### 022.04 — RDS-C22-T04

**Acción:** Persistir consumo incierto, cancelación pre-send, factura tardía y sobrecoste real sin ocultar pasivos.

**Superficie:** `src/billing/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/cost-concurrency.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.

**Verificación:** caso `RDS-C22-T04` sobre `tests/integration/cost-concurrency.test.ts`; evidencia `docs/evidence/c022/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C22-T03.

### 022.05 — RDS-C22-T05

**Acción:** Separar aceptación de presupuesto/contrato, autorización editorial y aceptación de entregable.

**Superficie:** `src/budget/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/cost-concurrency.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.

**Verificación:** caso `RDS-C22-T05` sobre `tests/integration/cost-concurrency.test.ts`; evidencia `docs/evidence/c022/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C22-T04.

### 022.06 — RDS-C22-T06

**Acción:** Añadir puertos de factura/cobro solo por mandato explícito y no declarar cobrado sin receipt competente.

**Superficie:** `tests/integration/cost-concurrency.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/cost-concurrency.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.

**Verificación:** caso `RDS-C22-T06` sobre `tests/integration/cost-concurrency.test.ts`; evidencia `docs/evidence/c022/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C22-T05.

### 022.07 — RDS-C22-T07

**Acción:** Probar dos reservas concurrentes, reintento con misma key, corte de sesión Anam y plan agotado sin rebajar seguridad.

**Superficie:** `src/billing/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/cost-concurrency.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.

**Verificación:** caso `RDS-C22-T07` sobre `tests/integration/cost-concurrency.test.ts`; evidencia `docs/evidence/c022/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C22-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C22-G01 / PASS:** Dos agentes no reservan el mismo saldo, ni se cargan proveedor y cliente por duplicado. **Caso:** `RDS-C22-G01` en `tests/integration/cost-concurrency.test.ts`. **Evidencia:** `docs/evidence/c022/g01.json`.
- **RDS-C22-G02 / PASS:** Timeout de sesión conserva coste incierto hasta reconciliación, sin minutos ilimitados ficticios. **Caso:** `RDS-C22-G02` en `tests/integration/cost-concurrency.test.ts`. **Evidencia:** `docs/evidence/c022/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_VERIFIED (ledger en memoria) con tabla SQL presupuestaria preparada.
**SHA:** bc293688d95b0ef99bf5b4e91c686d3d1d259b7d
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
