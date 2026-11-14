# RDS-C06 — Licencias, catálogo comercial y discovery de capacidades

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/06-licencias-catalogo-comercial-y-discovery-de-capacidades.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
No habilitar una integración por existir README, SDK o un plan comercial atractivo.

## Artefactos previstos
- `docs/upstreams/`
- `src/providers/catalog.ts`
- `src/domain/entitlements.ts`

## Invariante
Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.

## Dependencias y fuentes
Dependencias: RDS-C05. Fuentes: A01, A06, N01, N04. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C06-T01:** Fijar SHAs/ediciones y revisar licencias de Postiz, Mixpost, Anam, workflows, SDKs y datasets por componente. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.
- **RDS-C06-T02:** Distinguir backend OSS, Enterprise, Cloud, modelo, reglas/datos y derecho de prestación comercial o embedding. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.
- **RDS-C06-T03:** Crear CapabilityReport por cuenta/operación/versión con expiry y supported/unsupported/unknown/blocked. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.
- **RDS-C06-T04:** Definir ServicePlan/Entitlement y las acciones que el cliente contrató; no ampliar permisos por cambio de plan. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.
- **RDS-C06-T05:** Verificar app review, titularidad, scopes, cuota y factura/tarifa mediante fuentes y probes autorizados. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.
- **RDS-C06-T06:** Registrar Meta429, Bluesky no legible y otras incertidumbres; no convertirlas en soporte positivo. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.
- **RDS-C06-T07:** Probar ausencia de permiso/edición/servicio y mostrar bloqueo con evidencia en vez de fake success. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un plan o licencia de código no otorga permisos de plataforma, uso de datos o minutos ilimitados.

## Gates previstos, NO ejecutados
- RDS-C06-G01: La edición instalada carece del endpoint documentado en Cloud: capability queda unsupported.
- RDS-C06-G02: Un scope revocado o report caducado bloquea escritura aunque el último probe tuviera200.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
