# RDS-C36 · Integración preferente con agente y cooperación entre servicios

**DESIGN_ONLY · NOT_STARTED · 36/42.** Fuente [docs/campaigns/36-integracion-preferente-con-agente-y-cooperacion-entre-servicios.md](../../../campaigns/36-integracion-preferente-con-agente-y-cooperacion-entre-servicios.md).

## Resultado y límites
Conectar la empresa SaaS manteniendo independencia y solapamiento funcional autorizado.

**Invariante:** La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.. **Dependencias:** RDS-C35.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/bridge/src/parent-events.ts`.
- DTO y esquema: `packages/contracts/src/36.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/36.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/036.test.ts` y `tests/fixtures/036/`.
- Evidencia: `docs/evidence/c36/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/bridges/agente/`, `docs/integration/PATCHSET-AGENTE.md`, `tests/contracts/parent/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 036.01 — RDS-C36-T01

**Acción:** Releer SHA/tipos/events y mapear Principal/Approval/WorkOrder del host a contratos propios con pruebas.

**Superficie primaria:** `packages/bridge/src/parent-events.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/36.ts` y test `tests/campaigns/036.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C35-T07.

### 036.02 — RDS-C36-T02

**Acción:** Verificar fuente de aprobación nativa; no reutilizar signedAt de una proyección como prueba de firma.

**Superficie primaria:** `packages/bridge/src/parent-events.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/36.ts` y test `tests/campaigns/036.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C36-T01.

### 036.03 — RDS-C36-T03

**Acción:** Traducir eventos solo a schemas reales registrados y comprobar persisted antes de ACK del bridge.

**Superficie primaria:** `packages/bridge/src/parent-events.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/36.ts` y test `tests/campaigns/036.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C36-T02.

### 036.04 — RDS-C36-T04

**Acción:** Conservar dedup durable más allá del TTL de ruido y registrar domainEventId/receipt de consumo.

**Superficie primaria:** `packages/bridge/src/parent-events.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/36.ts` y test `tests/campaigns/036.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C36-T03.

### 036.05 — RDS-C36-T05

**Acción:** Definir handoffs voluntarios a branding/clientes/ventas/finanzas/legal/seguros/gestoría y resolver conflictos por encargo.

**Superficie primaria:** `packages/bridge/src/parent-events.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/36.ts` y test `tests/campaigns/036.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C36-T04.

### 036.06 — RDS-C36-T06

**Acción:** Garantizar que desconectar host no convierte al cliente standalone en otro tenant ni invalida falsamente sus permisos locales.

**Superficie primaria:** `packages/bridge/src/parent-events.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/36.ts` y test `tests/campaigns/036.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C36-T05.

### 036.07 — RDS-C36-T07

**Acción:** Entregar patchset propuesto y test consumidor simulado, sin modificar agente o hermanos hasta aprobación expresa.

**Superficie primaria:** `packages/bridge/src/parent-events.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/36.ts` y test `tests/campaigns/036.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La compatibilidad del contrato se demuestra con pruebas; enums/eventos presentes no significan conector instalado.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C36-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C36-G01 / NOT_EXECUTED:** EventBus devuelve persisted=false y el bridge conserva outbox sin ACK falso.
- **RDS-C36-G02 / NOT_EXECUTED:** Dos especialistas proponen lo mismo y la entrega final conserva una autoridad e intent idempotente.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
