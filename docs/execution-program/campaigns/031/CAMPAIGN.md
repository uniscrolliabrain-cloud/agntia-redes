# RDS-C31 · Equipo agéntico especialista y modelos económicos

**DESIGN_ONLY · NOT_STARTED · 31/42.** Fuente [docs/campaigns/31-equipo-agentico-especialista-y-modelos-economicos.md](../../../campaigns/31-equipo-agentico-especialista-y-modelos-economicos.md).

## Resultado y límites
Organizar trabajo propio de la empresa SaaS con tools y memoria de confianza limitada.

**Invariante:** Mayor modelo o más agentes no significan más permiso ni una revisión humana real.. **Dependencias:** RDS-C30.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/specialists/`, `src/models/router.ts`, `tests/evaluations/team/`.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/evaluations/team/` y `tests/fixtures/c31/`.
- Evidencia: `docs/evidence/c31/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/specialists/`, `src/models/router.ts`, `tests/evaluations/team/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 031.01 — RDS-C31-T01

**Acción:** Definir coordinador/editor/diseñador/analista/community/QA como roles con capacidades y colas auditables.

**Superficie:** `src/specialists/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/team/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.

**Verificación:** caso `RDS-C31-T01` sobre `tests/evaluations/team/`; evidencia `docs/evidence/c31/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C30-T07.

### 031.02 — RDS-C31-T02

**Acción:** Permitir un agente cubra varios roles bajo policy sin saltarse separación de revisiones humanas requerida.

**Superficie:** `src/models/router.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/team/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.

**Verificación:** caso `RDS-C31-T02` sobre `tests/evaluations/team/`; evidencia `docs/evidence/c31/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C31-T01.

### 031.03 — RDS-C31-T03

**Acción:** Integrar modelos de texto por tarea/coste/DPA, con timeout/fallback y sin secreto de proveedor social.

**Superficie:** `tests/evaluations/team/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/team/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.

**Verificación:** caso `RDS-C31-T03` sobre `tests/evaluations/team/`; evidencia `docs/evidence/c31/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C31-T02.

### 031.04 — RDS-C31-T04

**Acción:** Convertir cada salida en propuesta tipada con fuentes, incertidumbre y model/policy/version registradas.

**Superficie:** `src/specialists/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/team/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.

**Verificación:** caso `RDS-C31-T04` sobre `tests/evaluations/team/`; evidencia `docs/evidence/c31/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C31-T03.

### 031.05 — RDS-C31-T05

**Acción:** Separar memoria de cliente/proyecto y promoción revisada a política; contenido externo nunca se vuelve instrucción fiable solo por persistir.

**Superficie:** `src/models/router.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/team/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.

**Verificación:** caso `RDS-C31-T05` sobre `tests/evaluations/team/`; evidencia `docs/evidence/c31/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C31-T04.

### 031.06 — RDS-C31-T06

**Acción:** Contabilizar tokens/coste/calidad y medir tareas legítimas junto con ataques, no solo rechazo.

**Superficie:** `tests/evaluations/team/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/team/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.

**Verificación:** caso `RDS-C31-T06` sobre `tests/evaluations/team/`; evidencia `docs/evidence/c31/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C31-T05.

### 031.07 — RDS-C31-T07

**Acción:** Probar delegación fuera de alcance, loop de agentes, memoria contaminada y modelo que intenta aprobar su propio trabajo.

**Superficie:** `src/specialists/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/evaluations/team/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Mayor modelo o más agentes no significan más permiso ni una revisión humana real.

**Verificación:** caso `RDS-C31-T07` sobre `tests/evaluations/team/`; evidencia `docs/evidence/c31/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C31-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C31-G01 / NOT_EXECUTED:** Agente barato produce tool inválida: falla schema sin obtener shell/HTTP alternativo. **Caso:** `RDS-C31-G01` en `tests/evaluations/team/`. **Evidencia:** `docs/evidence/c31/g01.json`.
- **RDS-C31-G02 / NOT_EXECUTED:** El sistema bloquea un ataque y aun así completa el resumen legítimo con fuentes permitidas. **Caso:** `RDS-C31-G02` en `tests/evaluations/team/`. **Evidencia:** `docs/evidence/c31/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
