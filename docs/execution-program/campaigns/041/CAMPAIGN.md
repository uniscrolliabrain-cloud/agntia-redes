# RDS-C41 · Empaquetado, Linux/Windows y operación segura

**DESIGN_ONLY · NOT_STARTED · 41/42.** Fuente [docs/campaigns/41-empaquetado-linux-windows-y-operacion-segura.md](../../../campaigns/41-empaquetado-linux-windows-y-operacion-segura.md).

## Resultado y límites
Hacer instalable el SaaS/middleware en un alcance demostrado, no solo editable.

**Invariante:** Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.. **Dependencias:** RDS-C40.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `infra/`, `docs/operations/`, `docs/release/artifacts.md`.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `infra-smoke:c41` y `tests/fixtures/c41/`.
- Evidencia: `docs/evidence/c41/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `infra/`, `docs/operations/`, `docs/release/artifacts.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 041.01 — RDS-C41-T01

**Acción:** Construir paquetes/SDK e imagen API/worker con versiones/digests, SBOM/notices y secretos fuera del contexto.

**Superficie:** `infra/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `infra-smoke:c41`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.

**Verificación:** caso `RDS-C41-T01` sobre `infra-smoke:c41`; evidencia `docs/evidence/c41/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C40-T07.

### 041.02 — RDS-C41-T02

**Acción:** Probar instalación limpia fuera del checkout en Linux/Windows y registrar arquitecturas no verificadas.

**Superficie:** `docs/operations/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `infra-smoke:c41`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.

**Verificación:** caso `RDS-C41-T02` sobre `infra-smoke:c41`; evidencia `docs/evidence/c41/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C41-T01.

### 041.03 — RDS-C41-T03

**Acción:** Configurar puertos mínimos, red privada, usuario no root, rootFS read-only, límites y storage/backup con custodia.

**Superficie:** `docs/release/artifacts.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `infra-smoke:c41`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.

**Verificación:** caso `RDS-C41-T03` sobre `infra-smoke:c41`; evidencia `docs/evidence/c41/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C41-T02.

### 041.04 — RDS-C41-T04

**Acción:** Preparar scripts de comprobación sin cambiar políticas globales, resetear usuario o imprimir credenciales.

**Superficie:** `infra/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `infra-smoke:c41`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.

**Verificación:** caso `RDS-C41-T04` sobre `infra-smoke:c41`; evidencia `docs/evidence/c41/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C41-T03.

### 041.05 — RDS-C41-T05

**Acción:** Verificar hashes y provenance/firmas de artefactos cuando la infraestructura lo permita, sin inventar aprobación.

**Superficie:** `docs/operations/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `infra-smoke:c41`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.

**Verificación:** caso `RDS-C41-T05` sobre `infra-smoke:c41`; evidencia `docs/evidence/c41/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C41-T04.

### 041.06 — RDS-C41-T06

**Acción:** Entregar runbook de onboarding/rotación/upgrade/stop/restore/rollback preservando efectos inciertos y privacidad actual.

**Superficie:** `docs/release/artifacts.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `infra-smoke:c41`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.

**Verificación:** caso `RDS-C41-T06` sobre `infra-smoke:c41`; evidencia `docs/evidence/c41/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C41-T05.

### 041.07 — RDS-C41-T07

**Acción:** Ejecutar recovery y rollback de laboratorio nuevo con evidencia de scopes/keys, sin borrar datos o recursos de otros proyectos.

**Superficie:** `infra/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `infra-smoke:c41`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.

**Verificación:** caso `RDS-C41-T07` sobre `infra-smoke:c41`; evidencia `docs/evidence/c41/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C41-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C41-G01 / NOT_EXECUTED:** Instalación limpia ejecuta el alcance del smoke y no importa accidentalmente código del checkout. **Caso:** `RDS-C41-G01` en `infra-smoke:c41`. **Evidencia:** `docs/evidence/c41/g01.json`.
- **RDS-C41-G02 / NOT_EXECUTED:** Rollback conserva DB/audit/keys/receipts y no resucita approvals antiguos o borra volúmenes del usuario. **Caso:** `RDS-C41-G02` en `infra-smoke:c41`. **Evidencia:** `docs/evidence/c41/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
