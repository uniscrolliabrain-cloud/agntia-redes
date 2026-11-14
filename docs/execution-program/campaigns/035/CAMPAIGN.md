# RDS-C35 · Portal SaaS, dashboard y área de proyectos

**DESIGN_ONLY · NOT_STARTED · 35/42.** Fuente [docs/campaigns/35-portal-saas-dashboard-y-area-de-proyectos.md](../../campaigns/35-portal-saas-dashboard-y-area-de-proyectos.md).

## Resultado y límites
Ofrecer UX profesional propia e integrable para cliente y equipo especialista.

**Invariante:** Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.. **Dependencias:** RDS-C34.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `apps/web/src/views/SocialDashboard.tsx`.
- DTO y esquema: `packages/contracts/src/35.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/35.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/035.test.ts` y `tests/fixtures/035/`.
- Evidencia: `docs/evidence/c35/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `web/`, `docs/ux/`, `tests/browser/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 035.01 — RDS-C35-T01

**Acción:** Diseñar onboarding, contratos/entitlements, proyectos, calendario, review, inbox, entregables y cuenta de servicio.

**Superficie primaria:** `apps/web/src/views/SocialDashboard.tsx`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/35.ts` y test `tests/campaigns/035.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C34-T07.

### 035.02 — RDS-C35-T02

**Acción:** Integrar visio Anam/chat con sesión contextual, disclosure IA y botón de escalado a humano real si existe.

**Superficie primaria:** `apps/web/src/views/SocialDashboard.tsx`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/35.ts` y test `tests/campaigns/035.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C35-T01.

### 035.03 — RDS-C35-T03

**Acción:** Mostrar diff/hash/cuenta/visibilidad/ventana/coste/expiry antes de revisión, con confirmación humana explícita.

**Superficie primaria:** `apps/web/src/views/SocialDashboard.tsx`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/35.ts` y test `tests/campaigns/035.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C35-T02.

### 035.04 — RDS-C35-T04

**Acción:** Distinguir proposed/accepted/scheduled/provider accepted/confirmed/unknown y ausencia de datos/cobertura.

**Superficie primaria:** `apps/web/src/views/SocialDashboard.tsx`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/35.ts` y test `tests/campaigns/035.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C35-T03.

### 035.05 — RDS-C35-T05

**Acción:** Implementar desktop/móvil/teclado/foco/labels y fallback sin AV; no esconder decisiones materiales en un prompt.

**Superficie primaria:** `apps/web/src/views/SocialDashboard.tsx`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/35.ts` y test `tests/campaigns/035.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C35-T04.

### 035.06 — RDS-C35-T06

**Acción:** Limpiar caches y respuestas tardías al cambiar cliente/proyecto/logout y mantener tokens de servicio fuera del browser.

**Superficie primaria:** `apps/web/src/views/SocialDashboard.tsx`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/35.ts` y test `tests/campaigns/035.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C35-T05.

### 035.07 — RDS-C35-T07

**Acción:** Probar registro/login, tenant switch, derechos de descarga, conflicto concurrente, aprobación denegada y recuperación de sesión Anam.

**Superficie primaria:** `apps/web/src/views/SocialDashboard.tsx`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/35.ts` y test `tests/campaigns/035.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C35-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C35-G01 / NOT_EXECUTED:** Cliente cambia workspace durante respuesta tardía y no reaparecen datos del anterior.
- **RDS-C35-G02 / NOT_EXECUTED:** Un viewer conversa con el avatar pero sigue sin aprobar ni acceder a originales restringidos.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
