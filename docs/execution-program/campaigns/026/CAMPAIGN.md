# RDS-C26 · Atención de comunidad y servicio al cliente

**DESIGN_ONLY · NOT_STARTED · 26/42.** Fuente [docs/campaigns/26-atencion-de-comunidad-y-servicio-al-cliente.md](../../../campaigns/26-atencion-de-comunidad-y-servicio-al-cliente.md).

## Resultado y límites
Gestionar casos propios o derivados con aceptación y contexto apropiados.

**Invariante:** Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.. **Dependencias:** RDS-C25.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/community/cases.ts`, `src/community/handoffs.ts`, `tests/integration/community.test.ts`.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/integration/community.test.ts` y `tests/fixtures/c26/`.
- Evidencia: `docs/evidence/c26/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/community/cases.ts`, `src/community/handoffs.ts`, `tests/integration/community.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 026.01 — RDS-C26-T01

**Acción:** Crear ServiceCase e hilo de soporte con responsable, SLA contratado, privacidad y estados verificables.

**Superficie:** `src/community/cases.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/community.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.

**Verificación:** caso `RDS-C26-T01` sobre `tests/integration/community.test.ts`; evidencia `docs/evidence/c26/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C25-T07.

### 026.02 — RDS-C26-T02

**Acción:** Permitir atención propia del SaaS o handoff a clientes/Chatwoot/CRM autorizado según acuerdo.

**Superficie:** `src/community/handoffs.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/community.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.

**Verificación:** caso `RDS-C26-T02` sobre `tests/integration/community.test.ts`; evidencia `docs/evidence/c26/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C26-T01.

### 026.03 — RDS-C26-T03

**Acción:** Distinguir pregunta comercial, incidencia, baja, derecho de datos y riesgo reputacional sin inferencias sensibles.

**Superficie:** `tests/integration/community.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/community.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.

**Verificación:** caso `RDS-C26-T03` sobre `tests/integration/community.test.ts`; evidencia `docs/evidence/c26/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C26-T02.

### 026.04 — RDS-C26-T04

**Acción:** Preparar reply proposal ligada al hilo/contexto actual, fuente y tono; no enviarla como side effect de clasificación.

**Superficie:** `src/community/cases.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/community.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.

**Verificación:** caso `RDS-C26-T04` sobre `tests/integration/community.test.ts`; evidencia `docs/evidence/c26/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C26-T03.

### 026.05 — RDS-C26-T05

**Acción:** Verificar identidad por binding autorizado al vincular contacto; no fusionar por handle/nombre o simple email.

**Superficie:** `src/community/handoffs.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/community.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.

**Verificación:** caso `RDS-C26-T05` sobre `tests/integration/community.test.ts`; evidencia `docs/evidence/c26/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C26-T04.

### 026.06 — RDS-C26-T06

**Acción:** Registrar handoff ACK/escalado y horario humano real; no fingir transferencia o respuesta24x7.

**Superficie:** `tests/integration/community.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/community.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.

**Verificación:** caso `RDS-C26-T06` sobre `tests/integration/community.test.ts`; evidencia `docs/evidence/c26/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C26-T05.

### 026.07 — RDS-C26-T07

**Acción:** Probar mensaje nuevo tras approval, solicitud de baja, case de otra empresa y proveedor de soporte no disponible.

**Superficie:** `src/community/cases.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/integration/community.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.

**Verificación:** caso `RDS-C26-T07` sobre `tests/integration/community.test.ts`; evidencia `docs/evidence/c26/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C26-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C26-G01 / NOT_EXECUTED:** Comentario público no se convierte en contacto de ventas ni consentimiento de marketing. **Caso:** `RDS-C26-G01` en `tests/integration/community.test.ts`. **Evidencia:** `docs/evidence/c26/g01.json`.
- **RDS-C26-G02 / NOT_EXECUTED:** Nuevo mensaje cambia el contexto y una respuesta sensible aprobada queda pendiente de revisión. **Caso:** `RDS-C26-G02` en `tests/integration/community.test.ts`. **Evidencia:** `docs/evidence/c26/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
