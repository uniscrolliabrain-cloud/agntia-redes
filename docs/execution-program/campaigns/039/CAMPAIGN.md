# RDS-C39 · Observabilidad, rendimiento y economía del servicio

**DESIGN_ONLY · NOT_STARTED · 39/42.** Fuente [docs/campaigns/39-observabilidad-rendimiento-y-economia-del-servicio.md](../../../campaigns/39-observabilidad-rendimiento-y-economia-del-servicio.md).

## Resultado y límites
Medir capacidad real y compromisos sin inventar SLA o margen comercial.

**Invariante:** Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.. **Dependencias:** RDS-C38.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/telemetry/`, `tests/performance/`, `docs/operations/capacity.md`.
- Presente en el repositorio hoy: ninguna; la campaña no está implementada.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/performance/` y `tests/fixtures/c39/`.
- Evidencia: `docs/evidence/c039/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/telemetry/`, `tests/performance/`, `docs/operations/capacity.md`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 039.01 — RDS-C39-T01

**Acción:** Emitir métricas de intent/outcome/lag/errors/approval/cost con cardinalidad/PII controladas y scopes adecuados.

**Superficie:** `src/telemetry/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/performance/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.

**Verificación:** caso `RDS-C39-T01` sobre `tests/performance/`; evidencia `docs/evidence/c039/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C38-T07.

### 039.02 — RDS-C39-T02

**Acción:** Crear trazas/correlation entre sesión, work order, revisión, job y receipt sin secretos o textos privados.

**Superficie:** `tests/performance/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/performance/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.

**Verificación:** caso `RDS-C39-T02` sobre `tests/performance/`; evidencia `docs/evidence/c039/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C39-T01.

### 039.03 — RDS-C39-T03

**Acción:** Medir p50/p95, throughput, CPU/RAM/disco, media/egress y minutos/concurrencia por perfil y arquitectura.

**Superficie:** `docs/operations/capacity.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/performance/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.

**Verificación:** caso `RDS-C39-T03` sobre `tests/performance/`; evidencia `docs/evidence/c039/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C39-T02.

### 039.04 — RDS-C39-T04

**Acción:** Reconciliar coste observado contra fuentes/tarifas/facturas y separar coste técnico de precio/margen retail.

**Superficie:** `src/telemetry/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/performance/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.

**Verificación:** caso `RDS-C39-T04` sobre `tests/performance/`; evidencia `docs/evidence/c039/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C39-T03.

### 039.05 — RDS-C39-T05

**Acción:** Configurar alertas operativas, DLQ/unknown y escalado humano según horario/SLA realmente acordados.

**Superficie:** `tests/performance/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/performance/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.

**Verificación:** caso `RDS-C39-T05` sobre `tests/performance/`; evidencia `docs/evidence/c039/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C39-T04.

### 039.06 — RDS-C39-T06

**Acción:** Revisar cuota/gasto agregado entre cliente/proveedor y evitar doble reserva de recursos o cargos.

**Superficie:** `docs/operations/capacity.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/performance/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.

**Verificación:** caso `RDS-C39-T06` sobre `tests/performance/`; evidencia `docs/evidence/c039/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C39-T05.

### 039.07 — RDS-C39-T07

**Acción:** Publicar resultados con entorno/duración/carga/limitaciones, sin presentar API vacía como capacidad de agencia completa.

**Superficie:** `src/telemetry/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/performance/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Las garantías contractuales y el soporte humano no nacen de un dashboard o un avatar disponible.

**Verificación:** caso `RDS-C39-T07` sobre `tests/performance/`; evidencia `docs/evidence/c039/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C39-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C39-G01 / NOT_EXECUTED:** Proveedor/collector cae y la vista marca stale/unknown sin un estado global seguro. **Caso:** `RDS-C39-G01` en `tests/performance/`. **Evidencia:** `docs/evidence/c039/g01.json`.
- **RDS-C39-G02 / NOT_EXECUTED:** Plan agotado reduce análisis opcional o admisión, no audit/aislamiento/revisión requerida. **Caso:** `RDS-C39-G02` en `tests/performance/`. **Evidencia:** `docs/evidence/c039/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
