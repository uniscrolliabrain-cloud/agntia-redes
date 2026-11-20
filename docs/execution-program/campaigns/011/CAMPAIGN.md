# RDS-C11 · Adaptador Bluesky y referencias de registro

**DESIGN_ONLY · NOT_STARTED · 11/42.** Fuente [docs/campaigns/11-adaptador-bluesky-y-referencias-de-registro.md](../../../campaigns/11-adaptador-bluesky-y-referencias-de-registro.md).

## Resultado y límites
Fijar protocolo/cuenta y detectar conflictos sin recetas de auth obsoletas.

**Invariante:** Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.. **Dependencias:** RDS-C10.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/adapters/bluesky/`, `tests/contracts/bluesky/`, `docs/providers/bluesky.md`.
- Presente en el repositorio hoy: ninguna; la campaña no está implementada.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/contracts/bluesky/` y `tests/fixtures/c11/`.
- Evidencia: `docs/evidence/c011/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/adapters/bluesky/`, `tests/contracts/bluesky/`, `docs/providers/bluesky.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 011.01 — RDS-C11-T01

**Acción:** Leer documentación/schema primarios vigentes y fijar SDK/protocolo/PDS autorizado; registrar la incertidumbre actual.

**Superficie:** `src/adapters/bluesky/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/bluesky/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.

**Verificación:** caso `RDS-C11-T01` sobre `tests/contracts/bluesky/`; evidencia `docs/evidence/c011/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C10-T07.

### 011.02 — RDS-C11-T02

**Acción:** Verificar OAuth y binding DID/cuenta/workspace; no usar passwords de ejemplo como plan productivo.

**Superficie:** `tests/contracts/bluesky/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/bluesky/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.

**Verificación:** caso `RDS-C11-T02` sobre `tests/contracts/bluesky/`; evidencia `docs/evidence/c011/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C11-T01.

### 011.03 — RDS-C11-T03

**Acción:** Normalizar texto/facets/media/idioma y límites reales de la versión elegida.

**Superficie:** `docs/providers/bluesky.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/bluesky/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.

**Verificación:** caso `RDS-C11-T03` sobre `tests/contracts/bluesky/`; evidencia `docs/evidence/c011/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C11-T02.

### 011.04 — RDS-C11-T04

**Acción:** Definir record refs y estrategia de operation key solo si el contrato verificado permite correlación inequívoca.

**Superficie:** `src/adapters/bluesky/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/bluesky/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.

**Verificación:** caso `RDS-C11-T04` sobre `tests/contracts/bluesky/`; evidencia `docs/evidence/c011/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C11-T03.

### 011.05 — RDS-C11-T05

**Acción:** Rechazar overwrite de registro remoto con hash distinto y crear conflicto de revisión.

**Superficie:** `tests/contracts/bluesky/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/bluesky/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.

**Verificación:** caso `RDS-C11-T05` sobre `tests/contracts/bluesky/`; evidencia `docs/evidence/c011/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C11-T04.

### 011.06 — RDS-C11-T06

**Acción:** Persistir receipts, capacidades y versión de mapping; denegar hosts/PDS no configurados por servidor.

**Superficie:** `docs/providers/bluesky.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/bluesky/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.

**Verificación:** caso `RDS-C11-T06` sobre `tests/contracts/bluesky/`; evidencia `docs/evidence/c011/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C11-T05.

### 011.07 — RDS-C11-T07

**Acción:** Probar reintento incierto, identidad cambiada, referencia ajena y media fuera de scope con fixtures de contrato.

**Superficie:** `src/adapters/bluesky/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/bluesky/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.

**Verificación:** caso `RDS-C11-T07` sobre `tests/contracts/bluesky/`; evidencia `docs/evidence/c011/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C11-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C11-G01 / NOT_EXECUTED:** El rkey/ref apunta a contenido distinto y se bloquea en conflicto, sin overwrite. **Caso:** `RDS-C11-G01` en `tests/contracts/bluesky/`. **Evidencia:** `docs/evidence/c011/g01.json`.
- **RDS-C11-G02 / NOT_EXECUTED:** Cambiar PDS o cuenta requiere revalidación de binding y no cambia el tenant por texto del modelo. **Caso:** `RDS-C11-G02` en `tests/contracts/bluesky/`. **Evidencia:** `docs/evidence/c011/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
