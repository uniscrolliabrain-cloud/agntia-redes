# RDS-C22 — Presupuesto, entitlements, minutos y facturación del servicio

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/22-presupuesto-entitlements-minutos-y-facturacion-del-servicio.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Separar coste upstream, límites contratados y precio del SaaS.

## Artefactos previstos
- `src/billing/`
- `src/budget/`
- `tests/integration/cost-concurrency.test.ts`

## Invariante
El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.

## Dependencias y fuentes
Dependencias: RDS-C21. Fuentes: N04, A08. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C22-T01:** Modelar payer del servicio o cliente y reservas globales/integradas o standalone con ledger revisado. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.
- **RDS-C22-T02:** Definir tarifas versionadas, impuestos/FX/mínimos y capacidad/canales/sesiones contratadas sin auto-upgrade. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.
- **RDS-C22-T03:** Reservar peor caso antes de texto/visión/listening/Anam o proveedor pagado y limitar concurrencia. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.
- **RDS-C22-T04:** Persistir consumo incierto, cancelación pre-send, factura tardía y sobrecoste real sin ocultar pasivos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.
- **RDS-C22-T05:** Separar aceptación de presupuesto/contrato, autorización editorial y aceptación de entregable. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.
- **RDS-C22-T06:** Añadir puertos de factura/cobro solo por mandato explícito y no declarar cobrado sin receipt competente. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.
- **RDS-C22-T07:** Probar dos reservas concurrentes, reintento con misma key, corte de sesión Anam y plan agotado sin rebajar seguridad. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El presupuesto técnico no es precio retail; permisos y aislamiento no se venden por un tier superior.

## Gates previstos, NO ejecutados
- RDS-C22-G01: Dos agentes no reservan el mismo saldo, ni se cargan proveedor y cliente por duplicado.
- RDS-C22-G02: Timeout de sesión conserva coste incierto hasta reconciliación, sin minutos ilimitados ficticios.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
