# RDS-C04 · Contratos versionados de dominio y errores

**DESIGN_ONLY · NOT_STARTED · 4/42.** Fuente [docs/campaigns/04-contratos-versionados-de-dominio-y-errores.md](../../../campaigns/04-contratos-versionados-de-dominio-y-errores.md).

## Resultado y límites
Fijar fronteras tipadas antes de escribir adaptadores o UI.

**Invariante:** Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.. **Dependencias:** RDS-C03.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/contracts/index.ts`, `docs/contracts/schemas/`, `tests/contracts/wire.test.ts`.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: `apps/api/src/routes/contracts.ts` (solo con operación externa autorizada).
- Tests: `tests/contracts/wire.test.ts` y `tests/fixtures/c04/`.
- Evidencia: `docs/evidence/c04/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/contracts/index.ts`, `docs/contracts/schemas/`, `tests/contracts/wire.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 004.01 — RDS-C04-T01

**Acción:** Crear DTOs cerrados de cuenta, brief, work order, variante, intent, approval binding y receipt.

**Superficie:** `src/contracts/index.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/wire.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.

**Verificación:** caso `RDS-C04-T01` sobre `tests/contracts/wire.test.ts`; evidencia `docs/evidence/c04/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C03-T07.

### 004.02 — RDS-C04-T02

**Acción:** Representar IDs remotos como opacos y dinero/ratios sin floats no finitos; limitar strings, listas y bytes.

**Superficie:** `docs/contracts/schemas/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/wire.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.

**Verificación:** caso `RDS-C04-T02` sobre `tests/contracts/wire.test.ts`; evidencia `docs/evidence/c04/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C04-T01.

### 004.03 — RDS-C04-T03

**Acción:** Versionar payloads, política, mapping y schemas; diferenciar instanteUTC, zonaIANA y tiempo local.

**Superficie:** `tests/contracts/wire.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/wire.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.

**Verificación:** caso `RDS-C04-T03` sobre `tests/contracts/wire.test.ts`; evidencia `docs/evidence/c04/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C04-T02.

### 004.04 — RDS-C04-T04

**Acción:** Definir errores uniformes seguros, incluyendo outcome_unknown y no retry de efectos inciertos.

**Superficie:** `src/contracts/index.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/wire.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.

**Verificación:** caso `RDS-C04-T04` sobre `tests/contracts/wire.test.ts`; evidencia `docs/evidence/c04/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C04-T03.

### 004.05 — RDS-C04-T05

**Acción:** Definir paginación, cursores, correlation/causation e idempotency key sin aceptar identidad declarada por modelo.

**Superficie:** `docs/contracts/schemas/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/wire.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.

**Verificación:** caso `RDS-C04-T05` sobre `tests/contracts/wire.test.ts`; evidencia `docs/evidence/c04/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C04-T04.

### 004.06 — RDS-C04-T06

**Acción:** Diseñar contratos de sesión Anam, service plan y aceptación sin introducir API keys en DTOs públicos.

**Superficie:** `tests/contracts/wire.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/wire.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.

**Verificación:** caso `RDS-C04-T06` sobre `tests/contracts/wire.test.ts`; evidencia `docs/evidence/c04/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C04-T05.

### 004.07 — RDS-C04-T07

**Acción:** Ejecutar round-trip, schema drift, campos desconocidos, NaN/Infinity, fechas ambiguas e IDs cruzados.

**Superficie:** `src/contracts/index.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/wire.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Validar un schema no constituye autorización ni verifica que un proveedor tenga esa capacidad.

**Verificación:** caso `RDS-C04-T07` sobre `tests/contracts/wire.test.ts`; evidencia `docs/evidence/c04/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C04-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C04-G01 / NOT_EXECUTED:** Payload con tenant/role/URL arbitrarios fuera del DTO es rechazado antes de IO. **Caso:** `RDS-C04-G01` en `tests/contracts/wire.test.ts`. **Evidencia:** `docs/evidence/c04/g01.json`.
- **RDS-C04-G02 / NOT_EXECUTED:** Contrato viejo no compatible devuelve error explícito; no elimina campos silenciosamente. **Caso:** `RDS-C04-G02` en `tests/contracts/wire.test.ts`. **Evidencia:** `docs/evidence/c04/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_PARTIAL: contratos y errores verificados; falta JSON Schema exportado y envelope en rutas de escritura.
**SHA:** bc293688d95b0ef99bf5b4e91c686d3d1d259b7d
**Archivos y diff:** src/contracts/index.ts, tests/contracts/wire.test.ts
**Tests/comandos/fixtures:** npx vitest run tests/contracts/wire.test.ts -> 5/5 PASS. Fixtures sintéticas propias; sin cuentas ni APIs reales.
**Gates:**
- Campos desconocidos y capabilities inventadas rechazados (PASS).
- Envelope con tenant/actor distinto del principal -> PRINCIPAL_MISMATCH (PASS).
- OUTCOME_UNKNOWN -> reconciliationRequired=true y retryable=false (PASS).
**Incoherencias y decisiones:** IDs opacos con charset seguro (evita inyección en cabeceras), dinero entero en céntimos y 12 códigos de error con estado HTTP y semántica de retry únicos.
**Deuda y riesgos:** docs/contracts/schemas/*.json no generados; el envelope aún no se valida en un endpoint de escritura con efecto.
**Aprendizajes para siguientes campañas:** Separar retry de reconciliación en el modelo de error evita que un timeout se vuelva un reintento ciego.

Evidencia extendida: docs/evidence/c004/README.md
