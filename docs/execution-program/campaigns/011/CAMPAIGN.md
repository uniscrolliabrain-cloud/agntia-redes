# RDS-C11 · Adaptador Bluesky y referencias de registro

**DESIGN_ONLY · NOT_STARTED · 11/42.** Fuente [docs/campaigns/11-adaptador-bluesky-y-referencias-de-registro.md](../../campaigns/11-adaptador-bluesky-y-referencias-de-registro.md).

## Resultado y límites
Fijar protocolo/cuenta y detectar conflictos sin recetas de auth obsoletas.

**Invariante:** Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.. **Dependencias:** RDS-C10.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/adapters/src/bluesky.ts`.
- DTO y esquema: `packages/contracts/src/11.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/11.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/011.test.ts` y `tests/fixtures/011/`.
- Evidencia: `docs/evidence/c11/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/adapters/bluesky/`, `tests/contracts/bluesky/`, `docs/providers/bluesky.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 011.01 — RDS-C11-T01

**Acción:** Leer documentación/schema primarios vigentes y fijar SDK/protocolo/PDS autorizado; registrar la incertidumbre actual.

**Superficie primaria:** `packages/adapters/src/bluesky.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/11.ts` y test `tests/campaigns/011.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C10-T07.

### 011.02 — RDS-C11-T02

**Acción:** Verificar OAuth y binding DID/cuenta/workspace; no usar passwords de ejemplo como plan productivo.

**Superficie primaria:** `packages/adapters/src/bluesky.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/11.ts` y test `tests/campaigns/011.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C11-T01.

### 011.03 — RDS-C11-T03

**Acción:** Normalizar texto/facets/media/idioma y límites reales de la versión elegida.

**Superficie primaria:** `packages/adapters/src/bluesky.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/11.ts` y test `tests/campaigns/011.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C11-T02.

### 011.04 — RDS-C11-T04

**Acción:** Definir record refs y estrategia de operation key solo si el contrato verificado permite correlación inequívoca.

**Superficie primaria:** `packages/adapters/src/bluesky.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/11.ts` y test `tests/campaigns/011.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C11-T03.

### 011.05 — RDS-C11-T05

**Acción:** Rechazar overwrite de registro remoto con hash distinto y crear conflicto de revisión.

**Superficie primaria:** `packages/adapters/src/bluesky.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/11.ts` y test `tests/campaigns/011.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C11-T04.

### 011.06 — RDS-C11-T06

**Acción:** Persistir receipts, capacidades y versión de mapping; denegar hosts/PDS no configurados por servidor.

**Superficie primaria:** `packages/adapters/src/bluesky.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/11.ts` y test `tests/campaigns/011.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C11-T05.

### 011.07 — RDS-C11-T07

**Acción:** Probar reintento incierto, identidad cambiada, referencia ajena y media fuera de scope con fixtures de contrato.

**Superficie primaria:** `packages/adapters/src/bluesky.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/11.ts` y test `tests/campaigns/011.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C11-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C11-G01 / NOT_EXECUTED:** El rkey/ref apunta a contenido distinto y se bloquea en conflicto, sin overwrite.
- **RDS-C11-G02 / NOT_EXECUTED:** Cambiar PDS o cuenta requiere revalidación de binding y no cambia el tenant por texto del modelo.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
