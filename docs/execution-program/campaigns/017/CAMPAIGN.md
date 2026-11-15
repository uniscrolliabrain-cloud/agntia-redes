# RDS-C17 · Assets, derechos y Content Passport

**DESIGN_ONLY · NOT_STARTED · 17/42.** Fuente [docs/campaigns/17-assets-derechos-y-content-passport.md](../../../campaigns/17-assets-derechos-y-content-passport.md).

## Resultado y límites
Vincular medio y permiso de uso a la revisión que llegará al proveedor.

**Invariante:** Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.. **Dependencias:** RDS-C16.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/domain/src/assets.ts`.
- DTO y esquema: `packages/contracts/src/17.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/17.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/017.test.ts` y `tests/fixtures/017/`.
- Evidencia: `docs/evidence/c17/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/media/`, `src/domain/rights.ts`, `tests/security/media.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 017.01 — RDS-C17-T01

**Acción:** Crear custody refs de originales y derivados con hashes, origen y cadena de transformaciones.

**Superficie primaria:** `packages/domain/src/assets.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/17.ts` y test `tests/campaigns/017.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C16-T07.

### 017.02 — RDS-C17-T02

**Acción:** Registrar licencia/territorio/periodo/uso comercial, imagen/voz/música y fuente de cada claim relevante.

**Superficie primaria:** `packages/domain/src/assets.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/17.ts` y test `tests/campaigns/017.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C17-T01.

### 017.03 — RDS-C17-T03

**Acción:** Validar MIME/codec/bytes/duración/archivos especiales/bombas antes de previews y uploads.

**Superficie primaria:** `packages/domain/src/assets.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/17.ts` y test `tests/campaigns/017.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C17-T02.

### 017.04 — RDS-C17-T04

**Acción:** Diseñar Content Passport versionado y señales de provenance opcionales sin declararlas prueba universal de verdad.

**Superficie primaria:** `packages/domain/src/assets.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/17.ts` y test `tests/campaigns/017.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C17-T03.

### 017.05 — RDS-C17-T05

**Acción:** Generar URLs firmadas controladas cuando el proveedor las requiera, sin incluirlas en logs/eventos.

**Superficie primaria:** `packages/domain/src/assets.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/17.ts` y test `tests/campaigns/017.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C17-T04.

### 017.06 — RDS-C17-T06

**Acción:** Propagar expiración/restricción/cambio de asset a draft/approval/jobs/exports y modelos que lo consuman.

**Superficie primaria:** `packages/domain/src/assets.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/17.ts` y test `tests/campaigns/017.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C17-T05.

### 017.07 — RDS-C17-T07

**Acción:** Probar media sustituida, derechos caducados, SSRF por URL, MIME falso y falta de licencia conocida.

**Superficie primaria:** `packages/domain/src/assets.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/17.ts` y test `tests/campaigns/017.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C17-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C17-G01 / NOT_EXECUTED:** Cambiar un frame/archivo después de aprobar bloquea ejecución por asset hash diferente.
- **RDS-C17-G02 / NOT_EXECUTED:** Derecho temporal vence antes del slot y el calendario exige nueva revisión.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_VERIFIED (derechos de activos y validación de medios).
**SHA:** d2a0447f6a4aaa729a24fd49d1c3808796696a87
**Archivos y diff:** src/domain/rights.ts, src/media/index.ts, tests/security/media.test.ts
**Tests/comandos/fixtures:** npx vitest run tests/security/media.test.ts -> 9/9 PASS. Fixtures sintéticas propias; sin cuentas ni APIs reales.
**Gates:**
- Sin licencia -> RIGHTS_UNKNOWN, no permiso (PASS).
- Licencia vencida, territorio no cubierto, uso comercial o música sin derechos -> denegado (PASS).
- SVG/HTML rechazados, MIME declarado distinto del contenido rechazado y traversal neutralizado (PASS).
**Incoherencias y decisiones:** Se valida la firma real del archivo, no el MIME declarado; los metadatos ausentes se tratan como desconocidos, nunca como permiso.
**Deuda y riesgos:** Sin C2PA real, sin transcode de vídeo, sin antivirus ni cuarentena de binarios.
**Aprendizajes para siguientes campañas:** Validar el contenido y no la etiqueta evita aceptar contenido activo como si fuera un asset.

Evidencia extendida: docs/evidence/c017/README.md
