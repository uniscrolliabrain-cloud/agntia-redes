# RDS-C32 · Visión multimodal y QA de piezas

**DESIGN_ONLY · NOT_STARTED · 32/42.** Fuente [docs/campaigns/32-vision-multimodal-y-qa-de-piezas.md](../../../campaigns/32-vision-multimodal-y-qa-de-piezas.md).

## Resultado y límites
Revisar activos y coherencia de contenido sin convertir visión en oráculo legal.

**Invariante:** Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.. **Dependencias:** RDS-C31.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/models/vision.ts`, `src/editorial/qa.ts`, `tests/evaluations/media-qa/`.
- Presente en el repositorio hoy: ninguna; la campaña no está implementada.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/evaluations/media-qa/` y `tests/fixtures/c32/`.
- Evidencia: `docs/evidence/c032/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/models/vision.ts`, `src/editorial/qa.ts`, `tests/evaluations/media-qa/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 032.01 — RDS-C32-T01

**Acción:** Definir puertos de visión y seleccionar proveedor/modelo por política de datos, coste y modalidad autorizada.

**Superficie:** `src/models/vision.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/media-qa/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.

**Verificación:** caso `RDS-C32-T01` sobre `tests/evaluations/media-qa/`; evidencia `docs/evidence/c032/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C31-T07.

### 032.02 — RDS-C32-T02

**Acción:** Minimizar frames/audio/texto y verificar autorización de transferencia antes de enviar a tercero.

**Superficie:** `src/editorial/qa.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/media-qa/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.

**Verificación:** caso `RDS-C32-T02` sobre `tests/evaluations/media-qa/`; evidencia `docs/evidence/c032/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C32-T01.

### 032.03 — RDS-C32-T03

**Acción:** Generar QA de formato, legibilidad, tono y coherencia con brief con referencias a frames/regiones.

**Superficie:** `tests/evaluations/media-qa/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/media-qa/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.

**Verificación:** caso `RDS-C32-T03` sobre `tests/evaluations/media-qa/`; evidencia `docs/evidence/c032/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C32-T02.

### 032.04 — RDS-C32-T04

**Acción:** Separar sugerencia visual de permisos de imagen/música, veracidad de claims e identidad de personas.

**Superficie:** `src/models/vision.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/media-qa/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.

**Verificación:** caso `RDS-C32-T04` sobre `tests/evaluations/media-qa/`; evidencia `docs/evidence/c032/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C32-T03.

### 032.05 — RDS-C32-T05

**Acción:** Comparar output contra schema/policy y mantener abstención ante media ambiguo o insuficiente.

**Superficie:** `src/editorial/qa.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/media-qa/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.

**Verificación:** caso `RDS-C32-T05` sobre `tests/evaluations/media-qa/`; evidencia `docs/evidence/c032/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C32-T04.

### 032.06 — RDS-C32-T06

**Acción:** Ligarlo al Content Passport y al hash final; cambios de render invalidan QA/aprobación vinculados.

**Superficie:** `tests/evaluations/media-qa/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/media-qa/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.

**Verificación:** caso `RDS-C32-T06` sobre `tests/evaluations/media-qa/`; evidencia `docs/evidence/c032/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C32-T05.

### 032.07 — RDS-C32-T07

**Acción:** Probar prompt oculto en imagen/subtítulo, media restringida, fixture adversarial y fallo/coste de proveedor.

**Superficie:** `src/models/vision.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/media-qa/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.

**Verificación:** caso `RDS-C32-T07` sobre `tests/evaluations/media-qa/`; evidencia `docs/evidence/c032/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C32-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C32-G01 / NOT_EXECUTED:** Media contiene instrucciones: el modelo no cambia cuenta, scope o política del servicio. **Caso:** `RDS-C32-G01` en `tests/evaluations/media-qa/`. **Evidencia:** `docs/evidence/c032/g01.json`.
- **RDS-C32-G02 / NOT_EXECUTED:** No hay base para enviar un DM/imagen al modelo y se ofrece revisión local sin transferencia. **Caso:** `RDS-C32-G02` en `tests/evaluations/media-qa/`. **Evidencia:** `docs/evidence/c032/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
