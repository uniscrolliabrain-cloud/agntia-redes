# RDS-C03 · Identidad, tenancy y capacidades del servicio

**DESIGN_ONLY · NOT_STARTED · 3/42.** Fuente [docs/campaigns/03-identidad-tenancy-y-capacidades-del-servicio.md](../../../campaigns/03-identidad-tenancy-y-capacidades-del-servicio.md).

## Resultado y límites
Denegar permisos por defecto para humanos, especialistas IA, clientes y partners.

**Invariante:** Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.. **Dependencias:** RDS-C02.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/auth/src/principal.ts`.
- DTO y esquema: `packages/contracts/src/03.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/03.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/003.test.ts` y `tests/fixtures/003/`.
- Evidencia: `docs/evidence/c03/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/auth/principal.ts`, `src/auth/policy.ts`, `tests/security/tenancy.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 003.01 — RDS-C03-T01

**Acción:** Introducir issuer registry y principal verificado para modo standalone y bridge autenticado del padre.

**Superficie primaria:** `packages/auth/src/principal.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/03.ts` y test `tests/campaigns/003.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C02-T07.

### 003.02 — RDS-C03-T02

**Acción:** Mapear tenant padre a workspace cliente con registro explícito, revisión y unicidad, sin fallback default.

**Superficie primaria:** `packages/auth/src/principal.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/03.ts` y test `tests/campaigns/003.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C03-T01.

### 003.03 — RDS-C03-T03

**Acción:** Definir capacidades read/propose/review/execute/admin y separación de principal humano y kind=agent.

**Superficie primaria:** `packages/auth/src/principal.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/03.ts` y test `tests/campaigns/003.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C03-T02.

### 003.04 — RDS-C03-T04

**Acción:** Revalidar membership, suspensión, scope y revocación en cada request, claim y ejecución de job.

**Superficie primaria:** `packages/auth/src/principal.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/03.ts` y test `tests/campaigns/003.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C03-T03.

### 003.05 — RDS-C03-T05

**Acción:** Cerrar trust de headers y argumentos del modelo: rol, cuenta, tenant y delegación solo se derivan de servidor.

**Superficie primaria:** `packages/auth/src/principal.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/03.ts` y test `tests/campaigns/003.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C03-T04.

### 003.06 — RDS-C03-T06

**Acción:** Crear fixtures de dos organizaciones cliente y empresa proveedora, con acceso limitado por proyecto/cuenta.

**Superficie primaria:** `packages/auth/src/principal.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/03.ts` y test `tests/campaigns/003.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C03-T05.

### 003.07 — RDS-C03-T07

**Acción:** Probar cross-tenant, principal revocado, DB de identidad caída, rol insuficiente y ausencia de integración.

**Superficie primaria:** `packages/auth/src/principal.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/03.ts` y test `tests/campaigns/003.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C03-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C03-G01 / NOT_EXECUTED:** ClienteA intenta accountBinding deB y recibe404 sin metadatos del otro cliente.
- **RDS-C03-G02 / NOT_EXECUTED:** Fallo al resolver membresía devuelve indisponible/denegado, nunca owner/default.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_VERIFIED (identidad, tenancy y PEP). JWKS remoto no probado contra Supabase real.
**SHA:** d2a0447f6a4aaa729a24fd49d1c3808796696a87
**Archivos y diff:** src/auth/principal.ts, src/auth/policy.ts, apps/api/src/routes/03.ts, apps/api/src/app.ts, tests/security/tenancy.test.ts, tests/api/app.test.ts
**Tests/comandos/fixtures:** npx vitest run tests/security/tenancy.test.ts -> 11/11 PASS; npx vitest run tests/api/app.test.ts -> 4/4 PASS. Fixtures sintéticas propias; sin cuentas ni APIs reales.
**Gates:**
- JWT expirado, issuer erróneo, user_metadata hostil, claims contradictorios o membresía suspendida -> rechazo (PASS).
- Recurso y listado cross-tenant -> 403/404 sin fuga de existencia (PASS).
- Agente con capability de aprobación o conexión -> HUMAN_ONLY (PASS).
**Incoherencias y decisiones:** Las capabilities salen de la membresía verificada, nunca del token; sin fallback a owner/default. La ruta de cuentas toma el tenant del principal, no de query ni body.
**Deuda y riesgos:** Revocación en vuelo de sesiones abiertas, step-up por riesgo, token de sesión Anam y rotación de JWKS sin implementar ni probar.
**Aprendizajes para siguientes campañas:** Probar claims hostiles en la frontera evita repetir el fallback legacy observado en el padre.

Evidencia extendida: docs/evidence/c003/README.md
