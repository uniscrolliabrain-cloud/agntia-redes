# RDS-C27 · Moderación contextual revisable

**DESIGN_ONLY · NOT_STARTED · 27/42.** Fuente [docs/campaigns/27-moderacion-contextual-revisable.md](../../../campaigns/27-moderacion-contextual-revisable.md).

## Resultado y límites
Usar reglas específicas de comunidad, lengua y riesgo con abstención.

**Invariante:** Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.. **Dependencias:** RDS-C26.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/community/moderation.ts`, `tests/evaluations/moderation/`, `docs/moderation-policy.md`.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/evaluations/moderation/` y `tests/fixtures/c27/`.
- Evidencia: `docs/evidence/c27/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/community/moderation.ts`, `tests/evaluations/moderation/`, `docs/moderation-policy.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 027.01 — RDS-C27-T01

**Acción:** Versionar reglas de comunidad/marca, jurisdicción y lengua con responsable y evidence refs.

**Superficie:** `src/community/moderation.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/moderation/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.

**Verificación:** caso `RDS-C27-T01` sobre `tests/evaluations/moderation/`; evidencia `docs/evidence/c27/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C26-T07.

### 027.02 — RDS-C27-T02

**Acción:** Construir clasificación de propuesta y explicación con regla/contexto, separada del borrado/sanción.

**Superficie:** `tests/evaluations/moderation/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/moderation/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.

**Verificación:** caso `RDS-C27-T02` sobre `tests/evaluations/moderation/`; evidencia `docs/evidence/c27/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C27-T01.

### 027.03 — RDS-C27-T03

**Acción:** Definir abstención y escalado para sarcasmo, contexto incompleto, lenguaje mixto y contenido sensible.

**Superficie:** `docs/moderation-policy.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/moderation/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.

**Verificación:** caso `RDS-C27-T03` sobre `tests/evaluations/moderation/`; evidencia `docs/evidence/c27/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C27-T02.

### 027.04 — RDS-C27-T04

**Acción:** Prohibir inferencias protegidas y acciones punitivas automáticas en MVP.

**Superficie:** `src/community/moderation.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/moderation/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.

**Verificación:** caso `RDS-C27-T04` sobre `tests/evaluations/moderation/`; evidencia `docs/evidence/c27/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C27-T03.

### 027.05 — RDS-C27-T05

**Acción:** Exigir review/approval y capacidad real para ocultar/eliminar si se habilita más adelante.

**Superficie:** `tests/evaluations/moderation/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/moderation/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.

**Verificación:** caso `RDS-C27-T05` sobre `tests/evaluations/moderation/`; evidencia `docs/evidence/c27/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C27-T04.

### 027.06 — RDS-C27-T06

**Acción:** Preparar fixtures propios ES/EN/FR y términos/licencias antes de usar datasets de investigación.

**Superficie:** `docs/moderation-policy.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/moderation/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.

**Verificación:** caso `RDS-C27-T06` sobre `tests/evaluations/moderation/`; evidencia `docs/evidence/c27/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C27-T05.

### 027.07 — RDS-C27-T07

**Acción:** Evaluar falso positivo/negativo por regla/idioma y utilidad de revisión, sin usar solo un score global.

**Superficie:** `src/community/moderation.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/moderation/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.

**Verificación:** caso `RDS-C27-T07` sobre `tests/evaluations/moderation/`; evidencia `docs/evidence/c27/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C27-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C27-G01 / NOT_EXECUTED:** Sarcasmo o contexto incompleto produce needs_review, no eliminación silenciosa. **Caso:** `RDS-C27-G01` en `tests/evaluations/moderation/`. **Evidencia:** `docs/evidence/c27/g01.json`.
- **RDS-C27-G02 / NOT_EXECUTED:** Dos comunidades con reglas diferentes no comparten automáticamente la misma decisión. **Caso:** `RDS-C27-G02` en `tests/evaluations/moderation/`. **Evidencia:** `docs/evidence/c27/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
