# RDS-C09 · Adaptador Postiz o backend social elegido

**DESIGN_ONLY · NOT_STARTED · 9/42.** Fuente [docs/campaigns/09-adaptador-postiz-o-backend-social-elegido.md](../../../campaigns/09-adaptador-postiz-o-backend-social-elegido.md).

## Resultado y límites
Integrar un backend autohospedado como proveedor invisible y acotado.

**Invariante:** El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.. **Dependencias:** RDS-C08.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/adapters/postiz/`, `tests/contracts/postiz/`, `docs/adr/backend-social.md`.
- Presente en el repositorio hoy: ninguna; la campaña no está implementada.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/contracts/postiz/` y `tests/fixtures/c09/`.
- Evidencia: `docs/evidence/c009/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/adapters/postiz/`, `tests/contracts/postiz/`, `docs/adr/backend-social.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 009.01 — RDS-C09-T01

**Acción:** Verificar versión/edición/API instalada y seleccionar Postiz o alternativa; documentar por qué no instalar ambas.

**Superficie:** `src/adapters/postiz/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/postiz/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.

**Verificación:** caso `RDS-C09-T01` sobre `tests/contracts/postiz/`; evidencia `docs/evidence/c009/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C08-T07.

### 009.02 — RDS-C09-T02

**Acción:** Leer integraciones/cuentas del workspace servidor y mapear IDs explícitos por tenant/marca.

**Superficie:** `tests/contracts/postiz/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/postiz/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.

**Verificación:** caso `RDS-C09-T02` sobre `tests/contracts/postiz/`; evidencia `docs/evidence/c009/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C09-T01.

### 009.03 — RDS-C09-T03

**Acción:** Normalizar create/schedule/media/settings permitidos sin exponer API admin o tools genéricas.

**Superficie:** `docs/adr/backend-social.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/postiz/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.

**Verificación:** caso `RDS-C09-T03` sobre `tests/contracts/postiz/`; evidencia `docs/evidence/c009/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C09-T02.

### 009.04 — RDS-C09-T04

**Acción:** Separar upload, job remoto y post visible; fijar scheduleAuthority remoto o local por intent.

**Superficie:** `src/adapters/postiz/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/postiz/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.

**Verificación:** caso `RDS-C09-T04` sobre `tests/contracts/postiz/`; evidencia `docs/evidence/c009/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C09-T03.

### 009.05 — RDS-C09-T05

**Acción:** Persistir links/idempotency/mapping hash y reconciliar estados del backend con receipts de canal cuando existan.

**Superficie:** `tests/contracts/postiz/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/postiz/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.

**Verificación:** caso `RDS-C09-T05` sobre `tests/contracts/postiz/`; evidencia `docs/evidence/c009/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C09-T04.

### 009.06 — RDS-C09-T06

**Acción:** Revisar aislamiento, licencia, storage/OAuth apps y coste de la instancia antes de habilitar clientes.

**Superficie:** `docs/adr/backend-social.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/postiz/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.

**Verificación:** caso `RDS-C09-T06` sobre `tests/contracts/postiz/`; evidencia `docs/evidence/c009/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C09-T05.

### 009.07 — RDS-C09-T07

**Acción:** Probar fixture real local autorizada, job aceptado pero no publicado, fallo parcial y replay sin crear dos schedules.

**Superficie:** `src/adapters/postiz/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/postiz/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.

**Verificación:** caso `RDS-C09-T07` sobre `tests/contracts/postiz/`; evidencia `docs/evidence/c009/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C09-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C09-G01 / NOT_EXECUTED:** Postiz devuelve job aceptado; UI permanece pendiente de confirmación remota, sin post fake. **Caso:** `RDS-C09-G01` en `tests/contracts/postiz/`. **Evidencia:** `docs/evidence/c009/g01.json`.
- **RDS-C09-G02 / NOT_EXECUTED:** Worker reinicia y reconoce schedule remoto existente sin programar una segunda copia. **Caso:** `RDS-C09-G02` en `tests/contracts/postiz/`. **Evidencia:** `docs/evidence/c009/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
