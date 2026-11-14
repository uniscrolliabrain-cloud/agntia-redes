# RDS-C26 · Atención de comunidad y servicio al cliente

**DESIGN_ONLY · NOT_STARTED · 26/42.** Fuente [docs/campaigns/26-atencion-de-comunidad-y-servicio-al-cliente.md](../../campaigns/26-atencion-de-comunidad-y-servicio-al-cliente.md).

## Resultado y límites
Gestionar casos propios o derivados con aceptación y contexto apropiados.

**Invariante:** Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.. **Dependencias:** RDS-C25.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/domain/src/community.ts`.
- DTO y esquema: `packages/contracts/src/26.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/26.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/026.test.ts` y `tests/fixtures/026/`.
- Evidencia: `docs/evidence/c26/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/community/cases.ts`, `src/community/handoffs.ts`, `tests/integration/community.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 026.01 — RDS-C26-T01

**Acción:** Crear ServiceCase e hilo de soporte con responsable, SLA contratado, privacidad y estados verificables.

**Superficie primaria:** `packages/domain/src/community.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/26.ts` y test `tests/campaigns/026.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C25-T07.

### 026.02 — RDS-C26-T02

**Acción:** Permitir atención propia del SaaS o handoff a clientes/Chatwoot/CRM autorizado según acuerdo.

**Superficie primaria:** `packages/domain/src/community.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/26.ts` y test `tests/campaigns/026.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C26-T01.

### 026.03 — RDS-C26-T03

**Acción:** Distinguir pregunta comercial, incidencia, baja, derecho de datos y riesgo reputacional sin inferencias sensibles.

**Superficie primaria:** `packages/domain/src/community.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/26.ts` y test `tests/campaigns/026.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C26-T02.

### 026.04 — RDS-C26-T04

**Acción:** Preparar reply proposal ligada al hilo/contexto actual, fuente y tono; no enviarla como side effect de clasificación.

**Superficie primaria:** `packages/domain/src/community.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/26.ts` y test `tests/campaigns/026.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C26-T03.

### 026.05 — RDS-C26-T05

**Acción:** Verificar identidad por binding autorizado al vincular contacto; no fusionar por handle/nombre o simple email.

**Superficie primaria:** `packages/domain/src/community.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/26.ts` y test `tests/campaigns/026.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C26-T04.

### 026.06 — RDS-C26-T06

**Acción:** Registrar handoff ACK/escalado y horario humano real; no fingir transferencia o respuesta24x7.

**Superficie primaria:** `packages/domain/src/community.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/26.ts` y test `tests/campaigns/026.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C26-T05.

### 026.07 — RDS-C26-T07

**Acción:** Probar mensaje nuevo tras approval, solicitud de baja, case de otra empresa y proveedor de soporte no disponible.

**Superficie primaria:** `packages/domain/src/community.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/26.ts` y test `tests/campaigns/026.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C26-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C26-G01 / NOT_EXECUTED:** Comentario público no se convierte en contacto de ventas ni consentimiento de marketing.
- **RDS-C26-G02 / NOT_EXECUTED:** Nuevo mensaje cambia el contexto y una respuesta sensible aprobada queda pendiente de revisión.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
