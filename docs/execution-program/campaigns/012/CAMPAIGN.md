# RDS-C12 · Meta: Instagram, Facebook y Threads por capacidad

**DESIGN_ONLY · NOT_STARTED · 12/42.** Fuente [docs/campaigns/12-meta-instagram-facebook-y-threads-por-capacidad.md](../../../campaigns/12-meta-instagram-facebook-y-threads-por-capacidad.md).

## Resultado y límites
Evitar mezclar login paths, tipos de cuenta, scopes y límites de productos distintos.

**Invariante:** Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.. **Dependencias:** RDS-C11.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/adapters/meta/`, `docs/providers/meta-matrix.md`, `tests/contracts/meta/`.
- Presente en el repositorio hoy: ninguna; la campaña no está implementada.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/contracts/meta/` y `tests/fixtures/c12/`.
- Evidencia: `docs/evidence/c012/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/adapters/meta/`, `docs/providers/meta-matrix.md`, `tests/contracts/meta/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 012.01 — RDS-C12-T01

**Acción:** Obtener documentación primaria vigente tras el429 y fijar versión/producto/login path con fecha de revisión.

**Superficie:** `src/adapters/meta/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/meta/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.

**Verificación:** caso `RDS-C12-T01` sobre `tests/contracts/meta/`; evidencia `docs/evidence/c012/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C11-T07.

### 012.02 — RDS-C12-T02

**Acción:** Distinguir Instagram Login de Facebook Login, cuenta profesional, Page/roles y entitlement de cada operación.

**Superficie:** `docs/providers/meta-matrix.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/meta/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.

**Verificación:** caso `RDS-C12-T02` sobre `tests/contracts/meta/`; evidencia `docs/evidence/c012/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C12-T01.

### 012.03 — RDS-C12-T03

**Acción:** Definir por separado Facebook Page y Threads, sin copiar permisos o formatos de Instagram.

**Superficie:** `tests/contracts/meta/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/meta/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.

**Verificación:** caso `RDS-C12-T03` sobre `tests/contracts/meta/`; evidencia `docs/evidence/c012/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C12-T02.

### 012.04 — RDS-C12-T04

**Acción:** Implementar media container/processing/publish e IDs separados según contrato confirmado en laboratorio.

**Superficie:** `src/adapters/meta/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/meta/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.

**Verificación:** caso `RDS-C12-T04` sobre `tests/contracts/meta/`; evidencia `docs/evidence/c012/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C12-T03.

### 012.05 — RDS-C12-T05

**Acción:** Consultar cuota/capacidad real y validar disclosure, privacidad y formatos del payload aprobado.

**Superficie:** `docs/providers/meta-matrix.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/meta/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.

**Verificación:** caso `RDS-C12-T05` sobre `tests/contracts/meta/`; evidencia `docs/evidence/c012/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C12-T04.

### 012.06 — RDS-C12-T06

**Acción:** Revisar app/business verification, refresh y permisos de cuentas ajenas antes de modo comercial.

**Superficie:** `tests/contracts/meta/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/meta/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.

**Verificación:** caso `RDS-C12-T06` sobre `tests/contracts/meta/`; evidencia `docs/evidence/c012/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C12-T05.

### 012.07 — RDS-C12-T07

**Acción:** Probar scope perdido, container rechazado/caducado, cuota agotada, error de formato y vinculación a otra empresa.

**Superficie:** `src/adapters/meta/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/meta/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.

**Verificación:** caso `RDS-C12-T07` sobre `tests/contracts/meta/`; evidencia `docs/evidence/c012/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C12-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C12-G01 / NOT_EXECUTED:** Cuenta o producto no elegible queda unsupported sin fallback a scraping/browser. **Caso:** `RDS-C12-G01` en `tests/contracts/meta/`. **Evidencia:** `docs/evidence/c012/g01.json`.
- **RDS-C12-G02 / NOT_EXECUTED:** Container creado para cuentaA no puede publicarse con binding deB. **Caso:** `RDS-C12-G02` en `tests/contracts/meta/`. **Evidencia:** `docs/evidence/c012/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
