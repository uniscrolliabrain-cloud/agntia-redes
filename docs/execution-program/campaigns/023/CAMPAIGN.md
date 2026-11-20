# RDS-C23 · Comandos de publicación y ejecución por canal

**DESIGN_ONLY · NOT_STARTED · 23/42.** Fuente [docs/campaigns/23-comandos-de-publicacion-y-ejecucion-por-canal.md](../../../campaigns/23-comandos-de-publicacion-y-ejecucion-por-canal.md).

## Resultado y límites
Tramitar solo el payload aprobado y registrar el alcance real de cada resultado.

**Invariante:** Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.. **Dependencias:** RDS-C22.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/publication/commands.ts`, `tests/integration/publish.test.ts`, `docs/receipt-map.md`.
- Presente en el repositorio hoy: `src/publication/commands.ts`, `tests/integration/publish.test.ts` (2/3 superficies).
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: `apps/api/src/routes/publication-commands.ts` (solo con operación externa autorizada).
- Tests: `tests/integration/publish.test.ts` y `tests/fixtures/c23/`.
- Evidencia: `docs/evidence/c023/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/publication/commands.ts`, `tests/integration/publish.test.ts`, `docs/receipt-map.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 023.01 — RDS-C23-T01

**Acción:** Crear preview final por accountBinding con validación de payload, derechos, visibilidad y capability fresca.

**Superficie:** `src/publication/commands.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/publish.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.

**Verificación:** caso `RDS-C23-T01` sobre `tests/integration/publish.test.ts`; evidencia `docs/evidence/c023/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C22-T07.

### 023.02 — RDS-C23-T02

**Acción:** Admitir intent idempotente con revisión/approval/budget y separar upload, backend job y post.

**Superficie:** `tests/integration/publish.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/publish.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.

**Verificación:** caso `RDS-C23-T02` sobre `tests/integration/publish.test.ts`; evidencia `docs/evidence/c023/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C23-T01.

### 023.03 — RDS-C23-T03

**Acción:** Enviar únicamente con lease/fence y revalidación de principal/kill switch/ventana.

**Superficie:** `docs/receipt-map.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/publish.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.

**Verificación:** caso `RDS-C23-T03` sobre `tests/integration/publish.test.ts`; evidencia `docs/evidence/c023/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C23-T02.

### 023.04 — RDS-C23-T04

**Acción:** Persistir receipt remoto y estado semántico sin considerar un202 o jobID como publicación confirmada.

**Superficie:** `src/publication/commands.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/publish.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.

**Verificación:** caso `RDS-C23-T04` sobre `tests/integration/publish.test.ts`; evidencia `docs/evidence/c023/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C23-T03.

### 023.05 — RDS-C23-T05

**Acción:** Soportar éxito parcial por canal y reanudar solo los pendientes realmente seguros.

**Superficie:** `tests/integration/publish.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/publish.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.

**Verificación:** caso `RDS-C23-T05` sobre `tests/integration/publish.test.ts`; evidencia `docs/evidence/c023/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C23-T04.

### 023.06 — RDS-C23-T06

**Acción:** Emitir hechos al outbox y exponer seguimiento para humano y agente con causas/warnings.

**Superficie:** `docs/receipt-map.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/publish.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.

**Verificación:** caso `RDS-C23-T06` sobre `tests/integration/publish.test.ts`; evidencia `docs/evidence/c023/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C23-T05.

### 023.07 — RDS-C23-T07

**Acción:** Probar wrong-account, media cambiado, scope revocado, duplicado, cuota y retorno con contenido no verificable.

**Superficie:** `src/publication/commands.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/publish.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.

**Verificación:** caso `RDS-C23-T07` sobre `tests/integration/publish.test.ts`; evidencia `docs/evidence/c023/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C23-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C23-G01 / NOT_EXECUTED:** Tres canales: dos confirmados y uno unknown; no se repiten los confirmados. **Caso:** `RDS-C23-G01` en `tests/integration/publish.test.ts`. **Evidencia:** `docs/evidence/c023/g01.json`.
- **RDS-C23-G02 / NOT_EXECUTED:** El avatar consulta estado y solo dice publicado para receipts confirmed. **Caso:** `RDS-C23-G02` en `tests/integration/publish.test.ts`. **Evidencia:** `docs/evidence/c023/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_VERIFIED con proveedor falso; proveedor real BLOQUEADO por capabilities.
**SHA:** bc293688d95b0ef99bf5b4e91c686d3d1d259b7d
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
