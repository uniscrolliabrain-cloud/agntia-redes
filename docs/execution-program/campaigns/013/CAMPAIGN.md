# RDS-C13 · LinkedIn y ciclo de versiones

**DESIGN_ONLY · NOT_STARTED · 13/42.** Fuente [docs/campaigns/13-linkedin-y-ciclo-de-versiones.md](../../../campaigns/13-linkedin-y-ciclo-de-versiones.md).

## Resultado y límites
Publicar orgánico solo con contrato de acceso/versionado vigente y permisos comprobados.

**Invariante:** El permiso de publicar como miembro no concede publicación ni lectura de una empresa.. **Dependencias:** RDS-C12.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/adapters/linkedin/`, `docs/providers/linkedin.md`, `tests/contracts/linkedin/`.
- Presente en el repositorio hoy: ninguna; la campaña no está implementada.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/contracts/linkedin/` y `tests/fixtures/c13/`.
- Evidencia: `docs/evidence/c013/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/adapters/linkedin/`, `docs/providers/linkedin.md`, `tests/contracts/linkedin/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 013.01 — RDS-C13-T01

**Acción:** Verificar versiones soportadas y aviso de retiro202511; fijar headers y contrato actualizado antes de construir.

**Superficie:** `src/adapters/linkedin/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/linkedin/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.

**Verificación:** caso `RDS-C13-T01` sobre `tests/contracts/linkedin/`; evidencia `docs/evidence/c013/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C12-T07.

### 013.02 — RDS-C13-T02

**Acción:** Distinguir miembros y organizaciones, roles de página y permisos read/write exigidos.

**Superficie:** `docs/providers/linkedin.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/linkedin/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.

**Verificación:** caso `RDS-C13-T02` sobre `tests/contracts/linkedin/`; evidencia `docs/evidence/c013/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C13-T01.

### 013.03 — RDS-C13-T03

**Acción:** Validar tipos de post/media permitidos; no confundir carrousel orgánico con producto patrocinado.

**Superficie:** `tests/contracts/linkedin/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/linkedin/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.

**Verificación:** caso `RDS-C13-T03` sobre `tests/contracts/linkedin/`; evidencia `docs/evidence/c013/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C13-T02.

### 013.04 — RDS-C13-T04

**Acción:** Preparar upload y post como pasos separados con hashes y receipts correlacionados.

**Superficie:** `src/adapters/linkedin/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/linkedin/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.

**Verificación:** caso `RDS-C13-T04` sobre `tests/contracts/linkedin/`; evidencia `docs/evidence/c013/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C13-T03.

### 013.05 — RDS-C13-T05

**Acción:** Implementar lectura/reconciliación de IDs permitidos y conflictos; no asumir acceso a todo el histórico.

**Superficie:** `docs/providers/linkedin.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/linkedin/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.

**Verificación:** caso `RDS-C13-T05` sobre `tests/contracts/linkedin/`; evidencia `docs/evidence/c013/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C13-T04.

### 013.06 — RDS-C13-T06

**Acción:** Desactivar sponsored/boost/ads en MVP y mantener revisión humana de contenido/CTA.

**Superficie:** `tests/contracts/linkedin/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/linkedin/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.

**Verificación:** caso `RDS-C13-T06` sobre `tests/contracts/linkedin/`; evidencia `docs/evidence/c013/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C13-T05.

### 013.07 — RDS-C13-T07

**Acción:** Probar versión retirada,403, media inválido, post aceptado sin confirmación y cambio de rol del miembro.

**Superficie:** `src/adapters/linkedin/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/linkedin/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.

**Verificación:** caso `RDS-C13-T07` sobre `tests/contracts/linkedin/`; evidencia `docs/evidence/c013/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C13-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C13-G01 / NOT_EXECUTED:** El header/API version ya retirado bloquea la capability y muestra actualización pendiente. **Caso:** `RDS-C13-G01` en `tests/contracts/linkedin/`. **Evidencia:** `docs/evidence/c013/g01.json`.
- **RDS-C13-G02 / NOT_EXECUTED:** Rol de página revocado tras aprobación impide envío en claim. **Caso:** `RDS-C13-G02` en `tests/contracts/linkedin/`. **Evidencia:** `docs/evidence/c013/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
