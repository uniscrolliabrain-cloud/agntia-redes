# RDS-C17 · Assets, derechos y Content Passport

**DESIGN_ONLY · NOT_STARTED · 17/42.** Fuente [docs/campaigns/17-assets-derechos-y-content-passport.md](../../../campaigns/17-assets-derechos-y-content-passport.md).

## Resultado y límites
Vincular medio y permiso de uso a la revisión que llegará al proveedor.

**Invariante:** Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.. **Dependencias:** RDS-C16.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/media/`, `src/domain/rights.ts`, `tests/security/media.test.ts`.
- Presente en el repositorio hoy: `src/media/`, `src/domain/rights.ts`, `tests/security/media.test.ts` (3/3 superficies).
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/security/media.test.ts` y `tests/fixtures/c17/`.
- Evidencia: `docs/evidence/c017/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/media/`, `src/domain/rights.ts`, `tests/security/media.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 017.01 — RDS-C17-T01

**Acción:** Crear custody refs de originales y derivados con hashes, origen y cadena de transformaciones.

**Superficie:** `src/media/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/security/media.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.

**Verificación:** caso `RDS-C17-T01` sobre `tests/security/media.test.ts`; evidencia `docs/evidence/c017/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C16-T07.

### 017.02 — RDS-C17-T02

**Acción:** Registrar licencia/territorio/periodo/uso comercial, imagen/voz/música y fuente de cada claim relevante.

**Superficie:** `src/domain/rights.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/security/media.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.

**Verificación:** caso `RDS-C17-T02` sobre `tests/security/media.test.ts`; evidencia `docs/evidence/c017/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C17-T01.

### 017.03 — RDS-C17-T03

**Acción:** Validar MIME/codec/bytes/duración/archivos especiales/bombas antes de previews y uploads.

**Superficie:** `tests/security/media.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/security/media.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.

**Verificación:** caso `RDS-C17-T03` sobre `tests/security/media.test.ts`; evidencia `docs/evidence/c017/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C17-T02.

### 017.04 — RDS-C17-T04

**Acción:** Diseñar Content Passport versionado y señales de provenance opcionales sin declararlas prueba universal de verdad.

**Superficie:** `src/media/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/security/media.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.

**Verificación:** caso `RDS-C17-T04` sobre `tests/security/media.test.ts`; evidencia `docs/evidence/c017/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C17-T03.

### 017.05 — RDS-C17-T05

**Acción:** Generar URLs firmadas controladas cuando el proveedor las requiera, sin incluirlas en logs/eventos.

**Superficie:** `src/domain/rights.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/security/media.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.

**Verificación:** caso `RDS-C17-T05` sobre `tests/security/media.test.ts`; evidencia `docs/evidence/c017/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C17-T04.

### 017.06 — RDS-C17-T06

**Acción:** Propagar expiración/restricción/cambio de asset a draft/approval/jobs/exports y modelos que lo consuman.

**Superficie:** `tests/security/media.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/security/media.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.

**Verificación:** caso `RDS-C17-T06` sobre `tests/security/media.test.ts`; evidencia `docs/evidence/c017/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C17-T05.

### 017.07 — RDS-C17-T07

**Acción:** Probar media sustituida, derechos caducados, SSRF por URL, MIME falso y falta de licencia conocida.

**Superficie:** `src/media/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/security/media.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.

**Verificación:** caso `RDS-C17-T07` sobre `tests/security/media.test.ts`; evidencia `docs/evidence/c017/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C17-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C17-G01 / NOT_EXECUTED:** Cambiar un frame/archivo después de aprobar bloquea ejecución por asset hash diferente. **Caso:** `RDS-C17-G01` en `tests/security/media.test.ts`. **Evidencia:** `docs/evidence/c017/g01.json`.
- **RDS-C17-G02 / NOT_EXECUTED:** Derecho temporal vence antes del slot y el calendario exige nueva revisión. **Caso:** `RDS-C17-G02` en `tests/security/media.test.ts`. **Evidencia:** `docs/evidence/c017/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_VERIFIED (derechos de activos y validación de medios).
**SHA:** bc293688d95b0ef99bf5b4e91c686d3d1d259b7d
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
