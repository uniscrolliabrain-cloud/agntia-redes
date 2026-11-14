# RDS-C32 · Visión multimodal y QA de piezas

**DESIGN_ONLY · NOT_STARTED · 32/42.** Fuente [docs/campaigns/32-vision-multimodal-y-qa-de-piezas.md](../../campaigns/32-vision-multimodal-y-qa-de-piezas.md).

## Resultado y límites
Revisar activos y coherencia de contenido sin convertir visión en oráculo legal.

**Invariante:** Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.. **Dependencias:** RDS-C31.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/evals/src/multimodal.ts`.
- DTO y esquema: `packages/contracts/src/32.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/32.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/032.test.ts` y `tests/fixtures/032/`.
- Evidencia: `docs/evidence/c32/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/models/vision.ts`, `src/editorial/qa.ts`, `tests/evaluations/media-qa/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 032.01 — RDS-C32-T01

**Acción:** Definir puertos de visión y seleccionar proveedor/modelo por política de datos, coste y modalidad autorizada.

**Superficie primaria:** `packages/evals/src/multimodal.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/32.ts` y test `tests/campaigns/032.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C31-T07.

### 032.02 — RDS-C32-T02

**Acción:** Minimizar frames/audio/texto y verificar autorización de transferencia antes de enviar a tercero.

**Superficie primaria:** `packages/evals/src/multimodal.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/32.ts` y test `tests/campaigns/032.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C32-T01.

### 032.03 — RDS-C32-T03

**Acción:** Generar QA de formato, legibilidad, tono y coherencia con brief con referencias a frames/regiones.

**Superficie primaria:** `packages/evals/src/multimodal.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/32.ts` y test `tests/campaigns/032.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C32-T02.

### 032.04 — RDS-C32-T04

**Acción:** Separar sugerencia visual de permisos de imagen/música, veracidad de claims e identidad de personas.

**Superficie primaria:** `packages/evals/src/multimodal.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/32.ts` y test `tests/campaigns/032.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C32-T03.

### 032.05 — RDS-C32-T05

**Acción:** Comparar output contra schema/policy y mantener abstención ante media ambiguo o insuficiente.

**Superficie primaria:** `packages/evals/src/multimodal.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/32.ts` y test `tests/campaigns/032.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C32-T04.

### 032.06 — RDS-C32-T06

**Acción:** Ligarlo al Content Passport y al hash final; cambios de render invalidan QA/aprobación vinculados.

**Superficie primaria:** `packages/evals/src/multimodal.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/32.ts` y test `tests/campaigns/032.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C32-T05.

### 032.07 — RDS-C32-T07

**Acción:** Probar prompt oculto en imagen/subtítulo, media restringida, fixture adversarial y fallo/coste de proveedor.

**Superficie primaria:** `packages/evals/src/multimodal.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/32.ts` y test `tests/campaigns/032.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un score de visión no acredita derechos, ausencia de engaño o identidad legal de alguien.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C32-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C32-G01 / NOT_EXECUTED:** Media contiene instrucciones: el modelo no cambia cuenta, scope o política del servicio.
- **RDS-C32-G02 / NOT_EXECUTED:** No hay base para enviar un DM/imagen al modelo y se ofrece revisión local sin transferencia.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
