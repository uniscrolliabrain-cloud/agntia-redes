# RDS-C18 · Work orders, briefs y variantes editoriales

**DESIGN_ONLY · NOT_STARTED · 18/42.** Fuente [docs/campaigns/18-work-orders-briefs-y-variantes-editoriales.md](../../../campaigns/18-work-orders-briefs-y-variantes-editoriales.md).

## Resultado y límites
Convertir conversación en entregable trazable sin ejecutar lo que el modelo redacta.

**Invariante:** La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.. **Dependencias:** RDS-C17.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/editorial/brief.ts`, `src/editorial/variants.ts`, `tests/domain/brief.test.ts`.
- Presente en el repositorio hoy: ninguna; la campaña no está implementada.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/domain/brief.test.ts` y `tests/fixtures/c18/`.
- Evidencia: `docs/evidence/c018/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/editorial/brief.ts`, `src/editorial/variants.ts`, `tests/domain/brief.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 018.01 — RDS-C18-T01

**Acción:** Crear WorkOrder con alcance, objetivo, deadline, entregables, fuentes, responsables y criterio de aceptación.

**Superficie:** `src/editorial/brief.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/brief.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.

**Verificación:** caso `RDS-C18-T01` sobre `tests/domain/brief.test.ts`; evidencia `docs/evidence/c018/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C17-T07.

### 018.02 — RDS-C18-T02

**Acción:** Validar ServiceAgreement/entitlements y distinguir propuesta de cambio de alcance de trabajo ya contratado.

**Superficie:** `src/editorial/variants.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/brief.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.

**Verificación:** caso `RDS-C18-T02` sobre `tests/domain/brief.test.ts`; evidencia `docs/evidence/c018/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C18-T01.

### 018.03 — RDS-C18-T03

**Acción:** Producir variantes por canal y ES/EN/FR ligadas a brand policy propia o importada y fuentes declaradas.

**Superficie:** `tests/domain/brief.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/brief.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.

**Verificación:** caso `RDS-C18-T03` sobre `tests/domain/brief.test.ts`; evidencia `docs/evidence/c018/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C18-T02.

### 018.04 — RDS-C18-T04

**Acción:** Comprobar límites de texto/CTA/enlaces/alt/disclosures y conservar incertidumbre de claims.

**Superficie:** `src/editorial/brief.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/brief.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.

**Verificación:** caso `RDS-C18-T04` sobre `tests/domain/brief.test.ts`; evidencia `docs/evidence/c018/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C18-T03.

### 018.05 — RDS-C18-T05

**Acción:** Guardar cada revisión y diff material, incluidos traducción, hashtags, media y destinatario/visibilidad.

**Superficie:** `src/editorial/variants.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/brief.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.

**Verificación:** caso `RDS-C18-T05` sobre `tests/domain/brief.test.ts`; evidencia `docs/evidence/c018/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C18-T04.

### 018.06 — RDS-C18-T06

**Acción:** Permitir revisión y aceptación de entregable distintas de la autorización de publicación/cobro.

**Superficie:** `tests/domain/brief.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/brief.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.

**Verificación:** caso `RDS-C18-T06` sobre `tests/domain/brief.test.ts`; evidencia `docs/evidence/c018/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C18-T05.

### 018.07 — RDS-C18-T07

**Acción:** Probar brief contradictorio, fuente caducada, cambio de marca, copy sin evidencia y variante que altera significado.

**Superficie:** `src/editorial/brief.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/domain/brief.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.

**Verificación:** caso `RDS-C18-T07` sobre `tests/domain/brief.test.ts`; evidencia `docs/evidence/c018/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C18-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C18-G01 / NOT_EXECUTED:** Cliente dice que cambie el alcance y se abre ChangeRequest, sin elevar cuota/cargo automáticamente. **Caso:** `RDS-C18-G01` en `tests/domain/brief.test.ts`. **Evidencia:** `docs/evidence/c018/g01.json`.
- **RDS-C18-G02 / NOT_EXECUTED:** Traducción cambia una afirmación comercial y requiere revisión nueva con fuente. **Caso:** `RDS-C18-G02` en `tests/domain/brief.test.ts`. **Evidencia:** `docs/evidence/c018/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
