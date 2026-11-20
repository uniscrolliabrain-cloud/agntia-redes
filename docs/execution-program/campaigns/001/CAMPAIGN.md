# RDS-C01 · Baseline, alcance y cotejo del padre

**DESIGN_ONLY · NOT_STARTED · 1/42.** Fuente [docs/campaigns/01-baseline-alcance-y-cotejo-del-padre.md](../../../campaigns/01-baseline-alcance-y-cotejo-del-padre.md).

## Resultado y límites
Congelar lo observado antes de introducir implementación y diferencias de contrato.

**Invariante:** El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.. **Dependencias:** ninguna.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `docs/baseline.md`, `docs/parent-diff.md`, `docs/versions.json`.
- Presente en el repositorio hoy: `docs/baseline.md`, `docs/parent-diff.md`, `docs/versions.json` (3/3 superficies).
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `docs-check:c01` y `tests/fixtures/c01/`.
- Evidencia: `docs/evidence/c001/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `docs/baseline.md`, `docs/parent-diff.md`, `docs/versions.json`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 001.01 — RDS-C01-T01

**Acción:** Anotar SHA, fecha, estado del checkout e instrucciones propias y de cada dependencia que se vaya a leer.

**Superficie:** `docs/baseline.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `docs-check:c01`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.

**Verificación:** caso `RDS-C01-T01` sobre `docs-check:c01`; evidencia `docs/evidence/c001/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** inicio.

### 001.02 — RDS-C01-T02

**Acción:** Cotejar el padre vigente con54b8d5407a8576459448c4d059a877297d18ca7a, registrar cambios y no modificarlo.

**Superficie:** `docs/parent-diff.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `docs-check:c01`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.

**Verificación:** caso `RDS-C01-T02` sobre `docs-check:c01`; evidencia `docs/evidence/c001/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C01-T01.

### 001.03 — RDS-C01-T03

**Acción:** Inventariar TenantPrincipal, ambos PolicyContext, aprobación nativa, eventos sociales y SocialClient stub.

**Superficie:** `docs/versions.json`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `docs-check:c01`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.

**Verificación:** caso `RDS-C01-T03` sobre `docs-check:c01`; evidencia `docs/evidence/c001/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C01-T02.

### 001.04 — RDS-C01-T04

**Acción:** Definir alcance integrado y standalone, cliente objetivo y la aclaración de empresa SaaS con Anam.

**Superficie:** `docs/baseline.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `docs-check:c01`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.

**Verificación:** caso `RDS-C01-T04` sobre `docs-check:c01`; evidencia `docs/evidence/c001/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C01-T03.

### 001.05 — RDS-C01-T05

**Acción:** Capturar SO, arquitectura, Node/pnpm/DB y licencias sin imprimir variables secretas del entorno.

**Superficie:** `docs/parent-diff.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `docs-check:c01`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.

**Verificación:** caso `RDS-C01-T05` sobre `docs-check:c01`; evidencia `docs/evidence/c001/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C01-T04.

### 001.06 — RDS-C01-T06

**Acción:** Distinguir checks de documentación, tests existentes y pruebas nuevas no ejecutadas; conservar fallos de baseline.

**Superficie:** `docs/versions.json`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `docs-check:c01`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.

**Verificación:** caso `RDS-C01-T06` sobre `docs-check:c01`; evidencia `docs/evidence/c001/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C01-T05.

### 001.07 — RDS-C01-T07

**Acción:** Entregar mapa de discrepancias y gates del laboratorio antes de afirmar compatibilidad o escoger runtime.

**Superficie:** `docs/baseline.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `docs-check:c01`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.

**Verificación:** caso `RDS-C01-T07` sobre `docs-check:c01`; evidencia `docs/evidence/c001/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C01-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C01-G01 / NOT_EXECUTED:** El SHA padre ha cambiado: el informe identifica interfaces afectadas y no hereda compatibilidad. **Caso:** `RDS-C01-G01` en `docs-check:c01`. **Evidencia:** `docs/evidence/c001/g01.json`.
- **RDS-C01-G02 / NOT_EXECUTED:** Checkout con cambios ajenos: se conservan y el baseline los separa sin reset. **Caso:** `RDS-C01-G02` en `docs-check:c01`. **Evidencia:** `docs/evidence/c001/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_VERIFIED (baseline). RDS-C01-G01 PARTIAL; RDS-C01-G02 PASS.
**SHA:** bc293688d95b0ef99bf5b4e91c686d3d1d259b7d
**Archivos y diff:** docs/baseline.md, docs/parent-diff.md, docs/versions.json, tests/campaigns/001.test.ts
**Tests/comandos/fixtures:** npm run typecheck -> PASS; npx vitest run tests/campaigns/001.test.ts -> 3/3 PASS. Fixtures sintéticas propias; sin cuentas ni APIs reales.
**Gates:**
- RDS-C01-G01 PARTIAL: el padre no está en el workspace; se identifican las interfaces afectadas y no se hereda compatibilidad.
- RDS-C01-G02 PASS: checkout 112 commits por detrás con árbol limpio; fast-forward sin reset ni pérdida de trabajo.
**Incoherencias y decisiones:** SHA propio congelado 09d6b8887d80d3b93c03ac9cea4cf7fdce7f6266. Se usa npm porque pnpm no está instalado en el entorno, manteniendo el Node >=22.6.0 que declara el padre.
**Deuda y riesgos:** Cotejo real contra 54b8d5407a8576459448c4d059a877297d18ca7a pendiente de autorización para hacer checkout del padre.
**Aprendizajes para siguientes campañas:** El manifiesto se valida por test (42/294/84) y sirve como gate de consistencia para el resto de fases.

Evidencia extendida: docs/evidence/c001/README.md
