# RDS-C27 · Moderación contextual revisable

**DESIGN_ONLY · NOT_STARTED · 27/42.** Fuente [docs/campaigns/27-moderacion-contextual-revisable.md](../../campaigns/27-moderacion-contextual-revisable.md).

## Resultado y límites
Usar reglas específicas de comunidad, lengua y riesgo con abstención.

**Invariante:** Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.. **Dependencias:** RDS-C26.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/domain/src/moderation.ts`.
- DTO y esquema: `packages/contracts/src/27.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/27.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/027.test.ts` y `tests/fixtures/027/`.
- Evidencia: `docs/evidence/c27/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/community/moderation.ts`, `tests/evaluations/moderation/`, `docs/moderation-policy.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 027.01 — RDS-C27-T01

**Acción:** Versionar reglas de comunidad/marca, jurisdicción y lengua con responsable y evidence refs.

**Superficie primaria:** `packages/domain/src/moderation.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/27.ts` y test `tests/campaigns/027.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C26-T07.

### 027.02 — RDS-C27-T02

**Acción:** Construir clasificación de propuesta y explicación con regla/contexto, separada del borrado/sanción.

**Superficie primaria:** `packages/domain/src/moderation.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/27.ts` y test `tests/campaigns/027.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C27-T01.

### 027.03 — RDS-C27-T03

**Acción:** Definir abstención y escalado para sarcasmo, contexto incompleto, lenguaje mixto y contenido sensible.

**Superficie primaria:** `packages/domain/src/moderation.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/27.ts` y test `tests/campaigns/027.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C27-T02.

### 027.04 — RDS-C27-T04

**Acción:** Prohibir inferencias protegidas y acciones punitivas automáticas en MVP.

**Superficie primaria:** `packages/domain/src/moderation.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/27.ts` y test `tests/campaigns/027.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C27-T03.

### 027.05 — RDS-C27-T05

**Acción:** Exigir review/approval y capacidad real para ocultar/eliminar si se habilita más adelante.

**Superficie primaria:** `packages/domain/src/moderation.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/27.ts` y test `tests/campaigns/027.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C27-T04.

### 027.06 — RDS-C27-T06

**Acción:** Preparar fixtures propios ES/EN/FR y términos/licencias antes de usar datasets de investigación.

**Superficie primaria:** `packages/domain/src/moderation.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/27.ts` y test `tests/campaigns/027.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C27-T05.

### 027.07 — RDS-C27-T07

**Acción:** Evaluar falso positivo/negativo por regla/idioma y utilidad de revisión, sin usar solo un score global.

**Superficie primaria:** `packages/domain/src/moderation.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/27.ts` y test `tests/campaigns/027.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C27-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C27-G01 / NOT_EXECUTED:** Sarcasmo o contexto incompleto produce needs_review, no eliminación silenciosa.
- **RDS-C27-G02 / NOT_EXECUTED:** Dos comunidades con reglas diferentes no comparten automáticamente la misma decisión.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
