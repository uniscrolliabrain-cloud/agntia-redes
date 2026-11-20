# RDS-C42 · Aceptación de servicio, informe founder y backlog90días

**DESIGN_ONLY · NOT_STARTED · 42/42.** Fuente [docs/campaigns/42-aceptacion-de-servicio-informe-founder-y-backlog90dias.md](../../../campaigns/42-aceptacion-de-servicio-informe-founder-y-backlog90dias.md).

## Resultado y límites
Cerrar con capacidades, límites y aceptación reales, sin convertir42 campañas en paridad universal.

**Invariante:** La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.. **Dependencias:** RDS-C41.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `docs/release/FOUNDER-REPORT.md`, `docs/release/ACCEPTANCE.md`, `docs/release/NEXT-90-DAYS.md`.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `docs-check:c42` y `tests/fixtures/c42/`.
- Evidencia: `docs/evidence/c42/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `docs/release/FOUNDER-REPORT.md`, `docs/release/ACCEPTANCE.md`, `docs/release/NEXT-90-DAYS.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 042.01 — RDS-C42-T01

**Acción:** Consolidar42 campañas/294 tareas y84 gates con PASS/BLOCKED/NOT_VERIFIED y enlaces a evidencia del SHA.

**Superficie:** `docs/release/FOUNDER-REPORT.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `docs-check:c42`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.

**Verificación:** caso `RDS-C42-T01` sobre `docs-check:c42`; evidencia `docs/evidence/c42/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C41-T07.

### 042.02 — RDS-C42-T02

**Acción:** Comparar alcance real con líderes por dominio, incluidos portal, especialistas, Anam y clientes externos.

**Superficie:** `docs/release/ACCEPTANCE.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `docs-check:c42`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.

**Verificación:** caso `RDS-C42-T02` sobre `docs-check:c42`; evidencia `docs/evidence/c42/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C42-T01.

### 042.03 — RDS-C42-T03

**Acción:** Informar número de tests distintos, fallos/skips, comandos, plataformas, costes medidos y supuestos no verificados.

**Superficie:** `docs/release/NEXT-90-DAYS.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `docs-check:c42`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.

**Verificación:** caso `RDS-C42-T03` sobre `docs-check:c42`; evidencia `docs/evidence/c42/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C42-T02.

### 042.04 — RDS-C42-T04

**Acción:** Revisar licencia propia, términos/datasets/proveedores, contratos/DPA, canal de seguridad y responsables humanos pendientes.

**Superficie:** `docs/release/FOUNDER-REPORT.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `docs-check:c42`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.

**Verificación:** caso `RDS-C42-T04` sobre `docs-check:c42`; evidencia `docs/evidence/c42/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C42-T03.

### 042.05 — RDS-C42-T05

**Acción:** Clasificar entrega como documentación/demo/piloto/producción según gates reales y aceptación del cliente/owner independiente.

**Superficie:** `docs/release/ACCEPTANCE.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `docs-check:c42`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.

**Verificación:** caso `RDS-C42-T05` sobre `docs-check:c42`; evidencia `docs/evidence/c42/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C42-T04.

### 042.06 — RDS-C42-T06

**Acción:** Proponer backlog30/60/90 para calidad/escala/licencias/operación y mejoras del servicio sin comprar ni habilitar efectos.

**Superficie:** `docs/release/NEXT-90-DAYS.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `docs-check:c42`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.

**Verificación:** caso `RDS-C42-T06` sobre `docs-check:c42`; evidencia `docs/evidence/c42/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C42-T05.

### 042.07 — RDS-C42-T07

**Acción:** Publicar PR/artefactos/evidencia sanitizada y pedir aceptación únicamente sobre entregable concreto, sin merge/deploy automático.

**Superficie:** `docs/release/FOUNDER-REPORT.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `docs-check:c42`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La profesionalidad del servicio se acredita con entregables y operación; el avatar no firma ni certifica.

**Verificación:** caso `RDS-C42-T07` sobre `docs-check:c42`; evidencia `docs/evidence/c42/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C42-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C42-G01 / NOT_EXECUTED:** Cada claim comercial tiene evidencia o una etiqueta de alcance pendiente/no verificado. **Caso:** `RDS-C42-G01` en `docs-check:c42`. **Evidencia:** `docs/evidence/c42/g01.json`.
- **RDS-C42-G02 / NOT_EXECUTED:** Un cliente externo y el owner comprenden qué está entregado y qué falta sin leer todo el código. **Caso:** `RDS-C42-G02` en `docs-check:c42`. **Evidencia:** `docs/evidence/c42/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
