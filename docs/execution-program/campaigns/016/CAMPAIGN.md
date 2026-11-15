# RDS-C16 · Proveedores opcionales: X, Pinterest y Buffer

**DESIGN_ONLY · NOT_STARTED · 16/42.** Fuente [docs/campaigns/16-proveedores-opcionales-x-pinterest-y-buffer.md](../../../campaigns/16-proveedores-opcionales-x-pinterest-y-buffer.md).

## Resultado y límites
Ampliar solo capacidades demostradas y con condiciones comerciales verificadas.

**Invariante:** La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.. **Dependencias:** RDS-C15.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/adapters/src/optional-social.ts`.
- DTO y esquema: `packages/contracts/src/16.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/16.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/016.test.ts` y `tests/fixtures/016/`.
- Evidencia: `docs/evidence/c16/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/adapters/optional/`, `docs/providers/optional.md`, `tests/contracts/optional/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 016.01 — RDS-C16-T01

**Acción:** Priorizar provider según contrato de cliente y evidencias; dejar los no investigados disabled.

**Superficie primaria:** `packages/adapters/src/optional-social.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/16.ts` y test `tests/campaigns/016.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C15-T07.

### 016.02 — RDS-C16-T02

**Acción:** Para X verificar pay-per-use, permisos, cuota, hard limit y fuente de tarifa antes de habilitar lectura pagada.

**Superficie primaria:** `packages/adapters/src/optional-social.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/16.ts` y test `tests/campaigns/016.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C16-T01.

### 016.03 — RDS-C16-T03

**Acción:** Para Pinterest realizar investigación primaria y discovery propios; no reutilizar DTO de Instagram.

**Superficie primaria:** `packages/adapters/src/optional-social.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/16.ts` y test `tests/campaigns/016.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C16-T02.

### 016.04 — RDS-C16-T04

**Acción:** Para Buffer inspeccionar API actual/entitlement y limitar superficie a rutas nominadas que realmente existan.

**Superficie primaria:** `packages/adapters/src/optional-social.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/16.ts` y test `tests/campaigns/016.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C16-T03.

### 016.05 — RDS-C16-T05

**Acción:** Normalizar publicación/analytics por capability, manteniendo métricas y derechos de cada canal separados.

**Superficie primaria:** `packages/adapters/src/optional-social.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/16.ts` y test `tests/campaigns/016.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C16-T04.

### 016.06 — RDS-C16-T06

**Acción:** Conservar rutas no soportadas como unavailable y no pagar ni activar trial para completar un gate.

**Superficie primaria:** `packages/adapters/src/optional-social.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/16.ts` y test `tests/campaigns/016.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C16-T05.

### 016.07 — RDS-C16-T07

**Acción:** Probar ledger agotado, API no incluida en plan, error por producto y replay de un backend con outcome incierto.

**Superficie primaria:** `packages/adapters/src/optional-social.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/16.ts` y test `tests/campaigns/016.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C16-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C16-G01 / NOT_EXECUTED:** Un plan sin acceso a analytics devuelve unsupported sin fabricar ceros.
- **RDS-C16-G02 / NOT_EXECUTED:** Operación pagada sin reserva o tarifa revisada se deniega antes de HTTP.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
