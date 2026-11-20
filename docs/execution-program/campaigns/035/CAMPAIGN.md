# RDS-C35 · Portal SaaS, dashboard y área de proyectos

**DESIGN_ONLY · NOT_STARTED · 35/42.** Fuente [docs/campaigns/35-portal-saas-dashboard-y-area-de-proyectos.md](../../../campaigns/35-portal-saas-dashboard-y-area-de-proyectos.md).

## Resultado y límites
Ofrecer UX profesional propia e integrable para cliente y equipo especialista.

**Invariante:** Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.. **Dependencias:** RDS-C34.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `web/`, `docs/ux/`, `tests/browser/`.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/browser/` y `tests/fixtures/c35/`.
- Evidencia: `docs/evidence/c35/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `web/`, `docs/ux/`, `tests/browser/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 035.01 — RDS-C35-T01

**Acción:** Diseñar onboarding, contratos/entitlements, proyectos, calendario, review, inbox, entregables y cuenta de servicio.

**Superficie:** `web/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/browser/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.

**Verificación:** caso `RDS-C35-T01` sobre `tests/browser/`; evidencia `docs/evidence/c35/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C34-T07.

### 035.02 — RDS-C35-T02

**Acción:** Integrar visio Anam/chat con sesión contextual, disclosure IA y botón de escalado a humano real si existe.

**Superficie:** `docs/ux/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/browser/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.

**Verificación:** caso `RDS-C35-T02` sobre `tests/browser/`; evidencia `docs/evidence/c35/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C35-T01.

### 035.03 — RDS-C35-T03

**Acción:** Mostrar diff/hash/cuenta/visibilidad/ventana/coste/expiry antes de revisión, con confirmación humana explícita.

**Superficie:** `tests/browser/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/browser/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.

**Verificación:** caso `RDS-C35-T03` sobre `tests/browser/`; evidencia `docs/evidence/c35/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C35-T02.

### 035.04 — RDS-C35-T04

**Acción:** Distinguir proposed/accepted/scheduled/provider accepted/confirmed/unknown y ausencia de datos/cobertura.

**Superficie:** `web/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/browser/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.

**Verificación:** caso `RDS-C35-T04` sobre `tests/browser/`; evidencia `docs/evidence/c35/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C35-T03.

### 035.05 — RDS-C35-T05

**Acción:** Implementar desktop/móvil/teclado/foco/labels y fallback sin AV; no esconder decisiones materiales en un prompt.

**Superficie:** `docs/ux/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/browser/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.

**Verificación:** caso `RDS-C35-T05` sobre `tests/browser/`; evidencia `docs/evidence/c35/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C35-T04.

### 035.06 — RDS-C35-T06

**Acción:** Limpiar caches y respuestas tardías al cambiar cliente/proyecto/logout y mantener tokens de servicio fuera del browser.

**Superficie:** `tests/browser/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/browser/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.

**Verificación:** caso `RDS-C35-T06` sobre `tests/browser/`; evidencia `docs/evidence/c35/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C35-T05.

### 035.07 — RDS-C35-T07

**Acción:** Probar registro/login, tenant switch, derechos de descarga, conflicto concurrente, aprobación denegada y recuperación de sesión Anam.

**Superficie:** `web/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/browser/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.

**Verificación:** caso `RDS-C35-T07` sobre `tests/browser/`; evidencia `docs/evidence/c35/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C35-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C35-G01 / NOT_EXECUTED:** Cliente cambia workspace durante respuesta tardía y no reaparecen datos del anterior. **Caso:** `RDS-C35-G01` en `tests/browser/`. **Evidencia:** `docs/evidence/c35/g01.json`.
- **RDS-C35-G02 / NOT_EXECUTED:** Un viewer conversa con el avatar pero sigue sin aprobar ni acceder a originales restringidos. **Caso:** `RDS-C35-G02` en `tests/browser/`. **Evidencia:** `docs/evidence/c35/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
