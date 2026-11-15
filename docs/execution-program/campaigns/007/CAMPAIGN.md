# RDS-C07 · Conexión OAuth y ciclo de credenciales

**DESIGN_ONLY · NOT_STARTED · 7/42.** Fuente [docs/campaigns/07-conexion-oauth-y-ciclo-de-credenciales.md](../../../campaigns/07-conexion-oauth-y-ciclo-de-credenciales.md).

## Resultado y límites
Conectar cuentas con prueba de pertenencia y revocación sin exponer secretos.

**Invariante:** Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.. **Dependencias:** RDS-C06.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/providers/src/oauth.ts`.
- DTO y esquema: `packages/contracts/src/07.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/07.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/007.test.ts` y `tests/fixtures/007/`.
- Evidencia: `docs/evidence/c07/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/connections/oauth.ts`, `src/connections/registry.ts`, `tests/security/oauth.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 007.01 — RDS-C07-T01

**Acción:** Diseñar OAuth state single-use ligado a sesión, cliente, proyecto y provider, con PKCE donde aplique.

**Superficie primaria:** `packages/providers/src/oauth.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/07.ts` y test `tests/campaigns/007.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C06-T07.

### 007.02 — RDS-C07-T02

**Acción:** Configurar issuer/redirect/host allowlists del servidor y separar login de cliente de autorización de cuenta social.

**Superficie primaria:** `packages/providers/src/oauth.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/07.ts` y test `tests/campaigns/007.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C07-T01.

### 007.03 — RDS-C07-T03

**Acción:** Almacenar solo refs de secretos y envelopes según custodia; limitar scopes y acceso por conexión.

**Superficie primaria:** `packages/providers/src/oauth.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/07.ts` y test `tests/campaigns/007.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C07-T02.

### 007.04 — RDS-C07-T04

**Acción:** Validar remoteAccount/workspace y su vinculación a tenant antes de aceptar la conexión.

**Superficie primaria:** `packages/providers/src/oauth.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/07.ts` y test `tests/campaigns/007.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C07-T03.

### 007.05 — RDS-C07-T05

**Acción:** Implementar refresh/rotación/desconexión con revisión y bloqueo de intents pendientes ante revocación.

**Superficie primaria:** `packages/providers/src/oauth.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/07.ts` y test `tests/campaigns/007.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C07-T04.

### 007.06 — RDS-C07-T06

**Acción:** Definir autorización standalone y bridge partner sin API key global compartida entre clientes.

**Superficie primaria:** `packages/providers/src/oauth.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/07.ts` y test `tests/campaigns/007.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C07-T05.

### 007.07 — RDS-C07-T07

**Acción:** Probar callback replay/CSRF, token vencido, refresh simultáneo, callback de otro tenant y log con secreto centinela.

**Superficie primaria:** `packages/providers/src/oauth.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/07.ts` y test `tests/campaigns/007.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C07-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C07-G01 / NOT_EXECUTED:** Callback emitido paraA llega desde sesiónB y no crea binding ni revela cuenta.
- **RDS-C07-G02 / NOT_EXECUTED:** Refresh falla durante claim: job bloqueado y credential/error no aparecen en logs.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_PARTIAL: state/PKCE y registro de cuentas; sin intercambio de código ni custodia de credenciales.
**SHA:** d2a0447f6a4aaa729a24fd49d1c3808796696a87
**Archivos y diff:** src/connections/oauth.ts, src/connections/registry.ts, tests/security/oauth.test.ts
**Tests/comandos/fixtures:** npx vitest run tests/security/oauth.test.ts -> 4/4 PASS. Fixtures sintéticas propias; sin cuentas ni APIs reales.
**Gates:**
- PKCE S256 correcto y state de un solo uso; replay rechazado (PASS).
- Redirect fuera de allowlist rechazado (PASS).
- Cuenta revocada falla cerrado, el cross-tenant no la ve y la proyección pública no incluye credentialRef (PASS).
**Incoherencias y decisiones:** La credencial se guarda como referencia opaca y nunca viaja a la proyección pública; desconectar bloquea nuevos efectos.
**Deuda y riesgos:** BLOQUEADO: intercambio de token, refresh/rotación y cifrado en reposo dependen de proveedor y de un vault que no existe todavía.
**Aprendizajes para siguientes campañas:** Separar la referencia de credencial de la proyección pública permite auditar sin filtrar secretos.

Evidencia extendida: docs/evidence/c007/README.md
