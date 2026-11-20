# RDS-C38 · Concurrencia, fallos distribuidos y propiedades

**DESIGN_ONLY · NOT_STARTED · 38/42.** Fuente [docs/campaigns/38-concurrencia-fallos-distribuidos-y-propiedades.md](../../../campaigns/38-concurrencia-fallos-distribuidos-y-propiedades.md).

## Resultado y límites
Demostrar que las fronteras sobreviven más allá del camino feliz.

**Invariante:** Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.. **Dependencias:** RDS-C37.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `tests/faults/`, `tests/property/`, `docs/verification/faults.md`.
- Presente en el repositorio hoy: ninguna; la campaña no está implementada.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/faults/` y `tests/fixtures/c38/`.
- Evidencia: `docs/evidence/c038/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `tests/faults/`, `tests/property/`, `docs/verification/faults.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 038.01 — RDS-C38-T01

**Acción:** Construir fixtures deterministas, semillas y property tests de contratos/transiciones/hashes/scope.

**Superficie:** `tests/faults/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/faults/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.

**Verificación:** caso `RDS-C38-T01` sobre `tests/faults/`; evidencia `docs/evidence/c038/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C37-T07.

### 038.02 — RDS-C38-T02

**Acción:** Inyectar caída pre/post-HTTP, pre-ACK, DB/worker/cola/proveedor, throttling y cambio concurrente.

**Superficie:** `tests/property/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/faults/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.

**Verificación:** caso `RDS-C38-T02` sobre `tests/faults/`; evidencia `docs/evidence/c038/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C38-T01.

### 038.03 — RDS-C38-T03

**Acción:** Ensayar leases/fencing, idempotency collisions y respuestas fuera de orden con varios trabajadores.

**Superficie:** `docs/verification/faults.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/faults/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.

**Verificación:** caso `RDS-C38-T03` sobre `tests/faults/`; evidencia `docs/evidence/c038/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C38-T02.

### 038.04 — RDS-C38-T04

**Acción:** Verificar revocación entre enqueue/claim/envío y actualización de cuenta/policy/rights tras aprobación.

**Superficie:** `tests/faults/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/faults/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.

**Verificación:** caso `RDS-C38-T04` sobre `tests/faults/`; evidencia `docs/evidence/c038/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C38-T03.

### 038.05 — RDS-C38-T05

**Acción:** Simular sesión Anam interrumpida con callback repetido y consumo incierto sin reaprobación automática.

**Superficie:** `tests/property/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/faults/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.

**Verificación:** caso `RDS-C38-T05` sobre `tests/faults/`; evidencia `docs/evidence/c038/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C38-T04.

### 038.06 — RDS-C38-T06

**Acción:** Probar backup consistente y restore aislado con claves externas y reconciliación de permisos actuales.

**Superficie:** `docs/verification/faults.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/faults/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.

**Verificación:** caso `RDS-C38-T06` sobre `tests/faults/`; evidencia `docs/evidence/c038/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C38-T05.

### 038.07 — RDS-C38-T07

**Acción:** Detener release ante cross-tenant, secreto, doble efecto ambiguo, gasto sin control o pérdida de audit y conservar defecto.

**Superficie:** `tests/faults/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/faults/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un test mock de fallo no acredita recuperación real de todas las dependencias; registrar cada capa ejecutada.

**Verificación:** caso `RDS-C38-T07` sobre `tests/faults/`; evidencia `docs/evidence/c038/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C38-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C38-G01 / NOT_EXECUTED:** Worker antiguo despierta y no puede ACKear ni gastar/publicar con lease/fence vencidos. **Caso:** `RDS-C38-G01` en `tests/faults/`. **Evidencia:** `docs/evidence/c038/g01.json`.
- **RDS-C38-G02 / NOT_EXECUTED:** Caída tras efecto conserva unknown; no se cuentan dos éxitos por un único receipt. **Caso:** `RDS-C38-G02` en `tests/faults/`. **Evidencia:** `docs/evidence/c038/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
