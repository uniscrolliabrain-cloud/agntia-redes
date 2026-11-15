# RDS-C19 · Máquina de estados y aprobación vinculada

**DESIGN_ONLY · NOT_STARTED · 19/42.** Fuente [docs/campaigns/19-maquina-de-estados-y-aprobacion-vinculada.md](../../../campaigns/19-maquina-de-estados-y-aprobacion-vinculada.md).

## Resultado y límites
Hacer que ningún efecto se ejecute con consentimiento antiguo o ambiguo.

**Invariante:** Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.. **Dependencias:** RDS-C18.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/domain/src/publication-fsm.ts`.
- DTO y esquema: `packages/contracts/src/19.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/19.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/019.test.ts` y `tests/fixtures/019/`.
- Evidencia: `docs/evidence/c19/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/runtime/fsm.ts`, `src/approvals/`, `tests/security/approval.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 019.01 — RDS-C19-T01

**Acción:** Definir estados/transiciones de contenido, aceptación, intent, upload, job remoto y post confirmado.

**Superficie primaria:** `packages/domain/src/publication-fsm.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/19.ts` y test `tests/campaigns/019.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C18-T07.

### 019.02 — RDS-C19-T02

**Acción:** Calcular hash canónico del payload final con cuenta, rights, policy, coste, slot y revisión.

**Superficie primaria:** `packages/domain/src/publication-fsm.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/19.ts` y test `tests/campaigns/019.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C19-T01.

### 019.03 — RDS-C19-T03

**Acción:** Verificar aprobación local standalone o prueba nativa del host autenticada, sin confiar en proyección Assignment.

**Superficie primaria:** `packages/domain/src/publication-fsm.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/19.ts` y test `tests/campaigns/019.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C19-T02.

### 019.04 — RDS-C19-T04

**Acción:** Exigir firmantes reales, separación de funciones y step-up según riesgo; impedir self-approval de agentes.

**Superficie primaria:** `packages/domain/src/publication-fsm.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/19.ts` y test `tests/campaigns/019.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C19-T03.

### 019.05 — RDS-C19-T05

**Acción:** Revalidar expiración, revocación, cambios de membership/cuenta y policy antes de enqueue y claim.

**Superficie primaria:** `packages/domain/src/publication-fsm.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/19.ts` y test `tests/campaigns/019.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C19-T04.

### 019.06 — RDS-C19-T06

**Acción:** Implementar dry-run sin efectos y cancelación diferenciando pre-send de remoto ya aceptado.

**Superficie primaria:** `packages/domain/src/publication-fsm.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/19.ts` y test `tests/campaigns/019.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C19-T05.

### 019.07 — RDS-C19-T07

**Acción:** Probar hash distinto, mismo key con otro payload, doble aprobación concurrente y voz no confirmada en UI.

**Superficie primaria:** `packages/domain/src/publication-fsm.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/19.ts` y test `tests/campaigns/019.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C19-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C19-G01 / NOT_EXECUTED:** Agente propone y presenta approval ficticia: denegado sin ejecutar IO.
- **RDS-C19-G02 / NOT_EXECUTED:** Un cliente modifica hora/cuenta después de aprobar y el commit recibe409.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_VERIFIED (FSM y aprobación vinculada).
**SHA:** bc293688d95b0ef99bf5b4e91c686d3d1d259b7d
**Archivos y diff:** src/runtime/fsm.ts, src/approvals/index.ts, tests/security/approval.test.ts
**Tests/comandos/fixtures:** npx vitest run tests/security/approval.test.ts -> 8/8 PASS. Fixtures sintéticas propias; sin cuentas ni APIs reales.
**Gates:**
- Payload cambiado tras aprobar -> PAYLOAD_HASH_MISMATCH (PASS).
- Aprobación caducada o revocada -> denegada (PASS).
- Solo firmantes agente -> MISSING_HUMAN_SIGNER (PASS).
- Proponente firmando su propio efecto -> SELF_APPROVAL (PASS).
- Coste por encima del techo -> COST_EXCEEDED (PASS).
**Incoherencias y decisiones:** El MVP invalida la aprobación ante cualquier cambio material; el espaciado es la única excepción explícita y está probada como regla, no como criterio del modelo.
**Deuda y riesgos:** Sin persistencia de approvals ni UI de firma; el step-up por riesgo no existe.
**Aprendizajes para siguientes campañas:** Un approval_id sin hashes es un permiso en blanco: el binding es lo que lo hace verificable.

Evidencia extendida: docs/evidence/c019/README.md
