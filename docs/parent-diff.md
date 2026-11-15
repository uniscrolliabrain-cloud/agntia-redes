# Cotejo con el repositorio padre — RDS-C01

**Resultado: NOT_VERIFIED (bloqueado por alcance, no por fallo).**

El padre `uniscrolliabrain-cloud/agente` **no está presente** en este workspace y el encargo prohíbe clonarlo o modificarlo sin aprobación específica. Por tanto no se repite la lectura selectiva que la entrega documental hizo en el SHA `54b8d5407a8576459448c4d059a877297d18ca7a` (12 archivos, según `docs/architecture/03-compatibilidad-agente.md` y `docs/research/parent-source-map.json`).

## Qué no se afirma

- No se declara compatibilidad con el HEAD actual del padre.
- No se heredan permisos, tipos ni eventos del padre como contrato vigente.
- No se ejecutan sus tests, seeders ni migraciones.

## Interfaces que un cambio del padre afectaría

| Superficie del padre | Impacto en redes | Mitigación ya presente |
|---|---|---|
| `TenantPrincipal` / `tenant-principal.ts` | resolución de tenant/actor/owner | el servicio verifica JWT Supabase + membresía propia y no acepta `legacy-default` |
| `engine/authz/pdp.ts` y `with-write.ts` | capabilities y CAS | PEP local (`src/auth/policy.ts`) con deny-by-default |
| `packages/domain/src/policy-context.ts` | homónimo con campos distintos | DTO explícito y validado; no se reutiliza el tipo |
| `events/types.ts` / `bus.ts` | envelope `schemaVersion` y dedupe | outbox propia con dedupe durable y `domainEventId` |
| `integrations/src/stubs/social.ts` | `SocialClient` es stub 503 | adaptador de negocio nuevo sobre intents aprobados; no se usa el stub |
| `sop-triggers.ts` | cron UTC 1–28 | no se crea un segundo scheduler; calendario propio con zona IANA |

## Cómo se desbloquea

1. El fundador autoriza el checkout del padre y fija el SHA a cotejar.
2. Se ejecuta la lectura selectiva de los 12 archivos del mapa y se diffea contra `54b8d54…`.
3. Se actualiza este documento con SHA, fecha y diferencias; solo entonces puede afirmarse compatibilidad.

Hasta entonces, la integración con el padre queda en `BLOCKED` y el bridge se escribe contra el contrato documentado, no contra el runtime del host.
