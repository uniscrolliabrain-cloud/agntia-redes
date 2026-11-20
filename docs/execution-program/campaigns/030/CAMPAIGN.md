# RDS-C30 · Reportes, atribución e infográficos con evidencia

**DESIGN_ONLY · NOT_STARTED · 30/42.** Fuente [docs/campaigns/30-reportes-atribucion-e-infograficos-con-evidencia.md](../../../campaigns/30-reportes-atribucion-e-infograficos-con-evidencia.md).

## Resultado y límites
Entregar un servicio profesional de análisis sin causalidad o ingresos ficticios.

**Invariante:** El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.. **Dependencias:** RDS-C29.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/reports/`, `src/analytics/attribution.ts`, `tests/integration/reports.test.ts`.
- Presente en el repositorio hoy: ninguna; la campaña no está implementada.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/integration/reports.test.ts` y `tests/fixtures/c30/`.
- Evidencia: `docs/evidence/c030/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/reports/`, `src/analytics/attribution.ts`, `tests/integration/reports.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 030.01 — RDS-C30-T01

**Acción:** Crear snapshots ejecutivos/técnicos con periodo, filtros, definiciones, cobertura y fuentes verificables.

**Superficie:** `src/reports/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/reports.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.

**Verificación:** caso `RDS-C30-T01` sobre `tests/integration/reports.test.ts`; evidencia `docs/evidence/c030/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C29-T07.

### 030.02 — RDS-C30-T02

**Acción:** Renderizar gráficos/HTML/PDF/CSV accesibles y sanitizados con footnotes, sin HTML/fórmulas activas del usuario.

**Superficie:** `src/analytics/attribution.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/reports.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.

**Verificación:** caso `RDS-C30-T02` sobre `tests/integration/reports.test.ts`; evidencia `docs/evidence/c030/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C30-T01.

### 030.03 — RDS-C30-T03

**Acción:** Integrar UTM/click refs autorizados sin PII y declarar metodología de atribución.

**Superficie:** `tests/integration/reports.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/reports.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.

**Verificación:** caso `RDS-C30-T03` sobre `tests/integration/reports.test.ts`; evidencia `docs/evidence/c030/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C30-T02.

### 030.04 — RDS-C30-T04

**Acción:** Usar receipts de ventas/finanzas/cliente como fuentes opcionales, no equivaler engagement a ingresos/caja.

**Superficie:** `src/reports/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/reports.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.

**Verificación:** caso `RDS-C30-T04` sobre `tests/integration/reports.test.ts`; evidencia `docs/evidence/c030/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C30-T03.

### 030.05 — RDS-C30-T05

**Acción:** Separar hechos, hipótesis, forecast experimental y recomendaciones revisadas, con suficiencia de datos.

**Superficie:** `src/analytics/attribution.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/reports.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.

**Verificación:** caso `RDS-C30-T05` sobre `tests/integration/reports.test.ts`; evidencia `docs/evidence/c030/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C30-T04.

### 030.06 — RDS-C30-T06

**Acción:** Vincular DeliverableVersion y AcceptanceReceipt del cliente al informe y cambios de alcance.

**Superficie:** `tests/integration/reports.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/reports.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.

**Verificación:** caso `RDS-C30-T06` sobre `tests/integration/reports.test.ts`; evidencia `docs/evidence/c030/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C30-T05.

### 030.07 — RDS-C30-T07

**Acción:** Probar reporte cross-tenant, datos stale/restringidos, CSV injection, rectificación y ROI sin evidencia de conversión.

**Superficie:** `src/reports/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/reports.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.

**Verificación:** caso `RDS-C30-T07` sobre `tests/integration/reports.test.ts`; evidencia `docs/evidence/c030/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C30-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C30-G01 / NOT_EXECUTED:** No hay datos suficientes: infografía muestra límites y no inventa mejor horario/forecast. **Caso:** `RDS-C30-G01` en `tests/integration/reports.test.ts`. **Evidencia:** `docs/evidence/c030/g01.json`.
- **RDS-C30-G02 / NOT_EXECUTED:** Cambian derechos/retención de una fuente y su export derivado queda restringido. **Caso:** `RDS-C30-G02` en `tests/integration/reports.test.ts`. **Evidencia:** `docs/evidence/c030/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
