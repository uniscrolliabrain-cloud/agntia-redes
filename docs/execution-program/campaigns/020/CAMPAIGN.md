# RDS-C20 · Calendario y SOPs del especialista

**DESIGN_ONLY · NOT_STARTED · 20/42.** Fuente [docs/campaigns/20-calendario-y-sops-del-especialista.md](../../../campaigns/20-calendario-y-sops-del-especialista.md).

## Resultado y límites
Coordinar el trabajo de la empresa SaaS y entregas sin duplicar un mismo efecto.

**Invariante:** Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.. **Dependencias:** RDS-C19.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/domain/src/calendar.ts`.
- DTO y esquema: `packages/contracts/src/20.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/20.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/020.test.ts` y `tests/fixtures/020/`.
- Evidencia: `docs/evidence/c20/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/scheduling/`, `src/service-ops/sops.ts`, `tests/domain/calendar.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 020.01 — RDS-C20-T01

**Acción:** Definir SOPs del servicio para onboarding, briefing, revisión semanal, crisis y cierre de contrato.

**Superficie primaria:** `packages/domain/src/calendar.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/20.ts` y test `tests/campaigns/020.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C19-T07.

### 020.02 — RDS-C20-T02

**Acción:** Integrar tareas del cliente mediante bridge opcional; el portal standalone conserva operación propia.

**Superficie primaria:** `packages/domain/src/calendar.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/20.ts` y test `tests/campaigns/020.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C20-T01.

### 020.03 — RDS-C20-T03

**Acción:** Representar hora local/zonaIANA/UTC/tzdata y resolver DST ambiguo/inexistente con decisión explícita.

**Superficie primaria:** `packages/domain/src/calendar.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/20.ts` y test `tests/campaigns/020.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C20-T02.

### 020.04 — RDS-C20-T04

**Acción:** Fijar scheduleAuthority local o remote_backend por intent y bloquear programación doble.

**Superficie primaria:** `packages/domain/src/calendar.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/20.ts` y test `tests/campaigns/020.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C20-T03.

### 020.05 — RDS-C20-T05

**Acción:** Aplicar ventanas, caducidad de fuente/rights y catch-up revisado tras downtime.

**Superficie primaria:** `packages/domain/src/calendar.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/20.ts` y test `tests/campaigns/020.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C20-T04.

### 020.06 — RDS-C20-T06

**Acción:** Implementar pausa por crisis/cuenta/cliente y conciliación de jobs ya programados fuera del core.

**Superficie primaria:** `packages/domain/src/calendar.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/20.ts` y test `tests/campaigns/020.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C20-T05.

### 020.07 — RDS-C20-T07

**Acción:** Probar cambio de zona, hora repetida, clock skew, reinicio largo y pausa con remoto ya aceptado.

**Superficie primaria:** `packages/domain/src/calendar.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/20.ts` y test `tests/campaigns/020.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C20-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C20-G01 / NOT_EXECUTED:** Una hora DST repetida no produce dos publicaciones ni selecciona un instante silenciosamente.
- **RDS-C20-G02 / NOT_EXECUTED:** La programación remota existe y el worker local solo supervisa, no vuelve a crearla.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
