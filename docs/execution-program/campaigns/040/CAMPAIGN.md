# RDS-C40 · E2E: cliente integrado y cliente externo con especialista en visio

**DESIGN_ONLY · NOT_STARTED · 40/42.** Fuente [docs/campaigns/40-e2e-cliente-integrado-y-cliente-externo-con-especialista-en-visio.md](../../../campaigns/40-e2e-cliente-integrado-y-cliente-externo-con-especialista-en-visio.md).

## Resultado y límites
Demostrar los dos modelos de servicio y distinguir fixture de proveedor real.

**Invariante:** Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.. **Dependencias:** RDS-C39.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `tests/e2e/`, `docs/verification/journeys.md`, `docs/demo/`.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/e2e/` y `tests/fixtures/c40/`.
- Evidencia: `docs/evidence/c40/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `tests/e2e/`, `docs/verification/journeys.md`, `docs/demo/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 040.01 — RDS-C40-T01

**Acción:** Ejecutar onboarding/ServiceAgreement/WorkOrder de cliente externo sin padre y caso equivalente integrado.

**Superficie:** `tests/e2e/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/e2e/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.

**Verificación:** caso `RDS-C40-T01` sobre `tests/e2e/`; evidencia `docs/evidence/c40/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C39-T07.

### 040.02 — RDS-C40-T02

**Acción:** Recorrer brief/assets/rights→variantes→preview→approval→intent→envío permitido→receipt/reconciliación→reporte.

**Superficie:** `docs/verification/journeys.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/e2e/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.

**Verificación:** caso `RDS-C40-T02` sobre `tests/e2e/`; evidencia `docs/evidence/c40/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C40-T01.

### 040.03 — RDS-C40-T03

**Acción:** Añadir inbox/moderación/reply proposal y handoff con contexto mínimo, revisión y aceptación de entregable.

**Superficie:** `docs/demo/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/e2e/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.

**Verificación:** caso `RDS-C40-T03` sobre `tests/e2e/`; evidencia `docs/evidence/c40/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C40-T02.

### 040.04 — RDS-C40-T04

**Acción:** Incluir sesión Anam autorizada o fixture explícita con aislamiento, pérdida de AV y continuidad de trabajo.

**Superficie:** `tests/e2e/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/e2e/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.

**Verificación:** caso `RDS-C40-T04` sobre `tests/e2e/`; evidencia `docs/evidence/c40/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C40-T03.

### 040.05 — RDS-C40-T05

**Acción:** Probar dos tenants, tres actores humanos/agentes, revocaciones y replay sin mezclar artefactos/eventos/budget.

**Superficie:** `docs/verification/journeys.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/e2e/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.

**Verificación:** caso `RDS-C40-T05` sobre `tests/e2e/`; evidencia `docs/evidence/c40/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C40-T04.

### 040.06 — RDS-C40-T06

**Acción:** Ejecutar providers reales solo con cuenta/alcance aprobados, marcar los demás NOT_VERIFIED sin narrar acciones inexistentes.

**Superficie:** `docs/demo/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/e2e/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.

**Verificación:** caso `RDS-C40-T06` sobre `tests/e2e/`; evidencia `docs/evidence/c40/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C40-T05.

### 040.07 — RDS-C40-T07

**Acción:** Grabar demo/evidencias sanitizadas con SHAs/comandos/costes y mapa de gates que siguen bloqueados.

**Superficie:** `tests/e2e/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/e2e/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.

**Verificación:** caso `RDS-C40-T07` sobre `tests/e2e/`; evidencia `docs/evidence/c40/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C40-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C40-G01 / NOT_EXECUTED:** Cliente standalone termina el recorrido sin llamar agente ni otro repo hermano obligatorio. **Caso:** `RDS-C40-G01` en `tests/e2e/`. **Evidencia:** `docs/evidence/c40/g01.json`.
- **RDS-C40-G02 / NOT_EXECUTED:** Una llamada social termina unknown y el informe/visio explican pendiente, sin fake success. **Caso:** `RDS-C40-G02` en `tests/e2e/`. **Evidencia:** `docs/evidence/c40/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
