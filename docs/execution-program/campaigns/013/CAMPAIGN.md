# RDS-C13 · LinkedIn y ciclo de versiones

**DESIGN_ONLY · NOT_STARTED · 13/42.** Fuente [docs/campaigns/13-linkedin-y-ciclo-de-versiones.md](../../campaigns/13-linkedin-y-ciclo-de-versiones.md).

## Resultado y límites
Publicar orgánico solo con contrato de acceso/versionado vigente y permisos comprobados.

**Invariante:** El permiso de publicar como miembro no concede publicación ni lectura de una empresa.. **Dependencias:** RDS-C12.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/adapters/src/linkedin.ts`.
- DTO y esquema: `packages/contracts/src/13.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/13.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/013.test.ts` y `tests/fixtures/013/`.
- Evidencia: `docs/evidence/c13/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/adapters/linkedin/`, `docs/providers/linkedin.md`, `tests/contracts/linkedin/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 013.01 — RDS-C13-T01

**Acción:** Verificar versiones soportadas y aviso de retiro202511; fijar headers y contrato actualizado antes de construir.

**Superficie primaria:** `packages/adapters/src/linkedin.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/13.ts` y test `tests/campaigns/013.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C12-T07.

### 013.02 — RDS-C13-T02

**Acción:** Distinguir miembros y organizaciones, roles de página y permisos read/write exigidos.

**Superficie primaria:** `packages/adapters/src/linkedin.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/13.ts` y test `tests/campaigns/013.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C13-T01.

### 013.03 — RDS-C13-T03

**Acción:** Validar tipos de post/media permitidos; no confundir carrousel orgánico con producto patrocinado.

**Superficie primaria:** `packages/adapters/src/linkedin.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/13.ts` y test `tests/campaigns/013.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C13-T02.

### 013.04 — RDS-C13-T04

**Acción:** Preparar upload y post como pasos separados con hashes y receipts correlacionados.

**Superficie primaria:** `packages/adapters/src/linkedin.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/13.ts` y test `tests/campaigns/013.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C13-T03.

### 013.05 — RDS-C13-T05

**Acción:** Implementar lectura/reconciliación de IDs permitidos y conflictos; no asumir acceso a todo el histórico.

**Superficie primaria:** `packages/adapters/src/linkedin.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/13.ts` y test `tests/campaigns/013.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C13-T04.

### 013.06 — RDS-C13-T06

**Acción:** Desactivar sponsored/boost/ads en MVP y mantener revisión humana de contenido/CTA.

**Superficie primaria:** `packages/adapters/src/linkedin.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/13.ts` y test `tests/campaigns/013.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C13-T05.

### 013.07 — RDS-C13-T07

**Acción:** Probar versión retirada,403, media inválido, post aceptado sin confirmación y cambio de rol del miembro.

**Superficie primaria:** `packages/adapters/src/linkedin.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/13.ts` y test `tests/campaigns/013.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C13-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C13-G01 / NOT_EXECUTED:** El header/API version ya retirado bloquea la capability y muestra actualización pendiente.
- **RDS-C13-G02 / NOT_EXECUTED:** Rol de página revocado tras aprobación impide envío en claim.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
