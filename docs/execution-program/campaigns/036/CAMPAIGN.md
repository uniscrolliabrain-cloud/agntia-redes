# RDS-C36 · Integración preferente con agente y cooperación entre servicios

**DESIGN_ONLY · NOT_STARTED · 36/42.** Fuente [docs/campaigns/36-integracion-preferente-con-agente-y-cooperacion-entre-servicios.md](../../../campaigns/36-integracion-preferente-con-agente-y-cooperacion-entre-servicios.md).

## Resultado y límites
Conectar la empresa SaaS manteniendo independencia y solapamiento funcional autorizado.

**Invariante:** La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.. **Dependencias:** RDS-C35.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/bridges/agente/`, `docs/integration/PATCHSET-AGENTE.md`, `tests/contracts/parent/`.
- Presente en el repositorio hoy: ninguna; la campaña no está implementada.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/contracts/parent/` y `tests/fixtures/c36/`.
- Evidencia: `docs/evidence/c036/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/bridges/agente/`, `docs/integration/PATCHSET-AGENTE.md`, `tests/contracts/parent/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 036.01 — RDS-C36-T01

**Acción:** Releer SHA/tipos/events y mapear Principal/Approval/WorkOrder del host a contratos propios con pruebas.

**Superficie:** `src/bridges/agente/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/parent/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.

**Verificación:** caso `RDS-C36-T01` sobre `tests/contracts/parent/`; evidencia `docs/evidence/c036/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C35-T07.

### 036.02 — RDS-C36-T02

**Acción:** Verificar fuente de aprobación nativa; no reutilizar signedAt de una proyección como prueba de firma.

**Superficie:** `docs/integration/PATCHSET-AGENTE.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/parent/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.

**Verificación:** caso `RDS-C36-T02` sobre `tests/contracts/parent/`; evidencia `docs/evidence/c036/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C36-T01.

### 036.03 — RDS-C36-T03

**Acción:** Traducir eventos solo a schemas reales registrados y comprobar persisted antes de ACK del bridge.

**Superficie:** `tests/contracts/parent/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/parent/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.

**Verificación:** caso `RDS-C36-T03` sobre `tests/contracts/parent/`; evidencia `docs/evidence/c036/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C36-T02.

### 036.04 — RDS-C36-T04

**Acción:** Conservar dedup durable más allá del TTL de ruido y registrar domainEventId/receipt de consumo.

**Superficie:** `src/bridges/agente/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/parent/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.

**Verificación:** caso `RDS-C36-T04` sobre `tests/contracts/parent/`; evidencia `docs/evidence/c036/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C36-T03.

### 036.05 — RDS-C36-T05

**Acción:** Definir handoffs voluntarios a branding/clientes/ventas/finanzas/legal/seguros/gestoría y resolver conflictos por encargo.

**Superficie:** `docs/integration/PATCHSET-AGENTE.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/parent/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.

**Verificación:** caso `RDS-C36-T05` sobre `tests/contracts/parent/`; evidencia `docs/evidence/c036/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C36-T04.

### 036.06 — RDS-C36-T06

**Acción:** Garantizar que desconectar host no convierte al cliente standalone en otro tenant ni invalida falsamente sus permisos locales.

**Superficie:** `tests/contracts/parent/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/parent/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.

**Verificación:** caso `RDS-C36-T06` sobre `tests/contracts/parent/`; evidencia `docs/evidence/c036/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C36-T05.

### 036.07 — RDS-C36-T07

**Acción:** Entregar patchset propuesto y test consumidor simulado, sin modificar agente o hermanos hasta aprobación expresa.

**Superficie:** `src/bridges/agente/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/parent/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.

**Verificación:** caso `RDS-C36-T07` sobre `tests/contracts/parent/`; evidencia `docs/evidence/c036/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C36-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C36-G01 / NOT_EXECUTED:** EventBus devuelve persisted=false y el bridge conserva outbox sin ACK falso. **Caso:** `RDS-C36-G01` en `tests/contracts/parent/`. **Evidencia:** `docs/evidence/c036/g01.json`.
- **RDS-C36-G02 / NOT_EXECUTED:** Dos especialistas proponen lo mismo y la entrega final conserva una autoridad e intent idempotente. **Caso:** `RDS-C36-G02` en `tests/contracts/parent/`. **Evidencia:** `docs/evidence/c036/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
