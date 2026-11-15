# RDS-C23 · Comandos de publicación y ejecución por canal

**DESIGN_ONLY · NOT_STARTED · 23/42.** Fuente [docs/campaigns/23-comandos-de-publicacion-y-ejecucion-por-canal.md](../../../campaigns/23-comandos-de-publicacion-y-ejecucion-por-canal.md).

## Resultado y límites
Tramitar solo el payload aprobado y registrar el alcance real de cada resultado.

**Invariante:** Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.. **Dependencias:** RDS-C22.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/domain/src/publish.ts`.
- DTO y esquema: `packages/contracts/src/23.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/23.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/023.test.ts` y `tests/fixtures/023/`.
- Evidencia: `docs/evidence/c23/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/publication/commands.ts`, `tests/integration/publish.test.ts`, `docs/receipt-map.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 023.01 — RDS-C23-T01

**Acción:** Crear preview final por accountBinding con validación de payload, derechos, visibilidad y capability fresca.

**Superficie primaria:** `packages/domain/src/publish.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/23.ts` y test `tests/campaigns/023.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C22-T07.

### 023.02 — RDS-C23-T02

**Acción:** Admitir intent idempotente con revisión/approval/budget y separar upload, backend job y post.

**Superficie primaria:** `packages/domain/src/publish.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/23.ts` y test `tests/campaigns/023.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C23-T01.

### 023.03 — RDS-C23-T03

**Acción:** Enviar únicamente con lease/fence y revalidación de principal/kill switch/ventana.

**Superficie primaria:** `packages/domain/src/publish.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/23.ts` y test `tests/campaigns/023.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C23-T02.

### 023.04 — RDS-C23-T04

**Acción:** Persistir receipt remoto y estado semántico sin considerar un202 o jobID como publicación confirmada.

**Superficie primaria:** `packages/domain/src/publish.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/23.ts` y test `tests/campaigns/023.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C23-T03.

### 023.05 — RDS-C23-T05

**Acción:** Soportar éxito parcial por canal y reanudar solo los pendientes realmente seguros.

**Superficie primaria:** `packages/domain/src/publish.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/23.ts` y test `tests/campaigns/023.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C23-T04.

### 023.06 — RDS-C23-T06

**Acción:** Emitir hechos al outbox y exponer seguimiento para humano y agente con causas/warnings.

**Superficie primaria:** `packages/domain/src/publish.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/23.ts` y test `tests/campaigns/023.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C23-T05.

### 023.07 — RDS-C23-T07

**Acción:** Probar wrong-account, media cambiado, scope revocado, duplicado, cuota y retorno con contenido no verificable.

**Superficie primaria:** `packages/domain/src/publish.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/23.ts` y test `tests/campaigns/023.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C23-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C23-G01 / NOT_EXECUTED:** Tres canales: dos confirmados y uno unknown; no se repiten los confirmados.
- **RDS-C23-G02 / NOT_EXECUTED:** El avatar consulta estado y solo dice publicado para receipts confirmed.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_VERIFIED con proveedor falso; proveedor real BLOQUEADO por capabilities.
**SHA:** d2a0447f6a4aaa729a24fd49d1c3808796696a87
**Archivos y diff:** src/publication/commands.ts, tests/integration/publish.test.ts
**Tests/comandos/fixtures:** npx vitest run tests/integration/publish.test.ts -> 6/6 PASS. Fixtures sintéticas propias; sin cuentas ni APIs reales.
**Gates:**
- Aprobación válida -> un solo envío y recibo (PASS).
- Replay del mismo operation key -> recibo durable sin nuevo IO (PASS).
- Timeout tras aceptación -> OUTCOME_UNKNOWN sin retry y presupuesto incierto (PASS).
- Sin aprobación, kill switch, capability deshabilitada o presupuesto insuficiente -> bloqueo sin IO (PASS).
**Incoherencias y decisiones:** El intento se registra antes de llamar al proveedor; un replay consulta el estado durable en lugar de reenviar.
**Deuda y riesgos:** Sin envío real, sin éxito parcial multi-canal y sin edición/borrado remoto.
**Aprendizajes para siguientes campañas:** Separar intento de recibo es lo que permite distinguir enviado de publicado.

Evidencia extendida: docs/evidence/c023/README.md
