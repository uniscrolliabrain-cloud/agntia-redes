# RDS-C37 · Privacidad, seguridad, legal y derechos del servicio

**DESIGN_ONLY · NOT_STARTED · 37/42.** Fuente [docs/campaigns/37-privacidad-seguridad-legal-y-derechos-del-servicio.md](../../campaigns/37-privacidad-seguridad-legal-y-derechos-del-servicio.md).

## Resultado y límites
Tratar datos de clientes y conversación AV sin vender certificación automática.

**Invariante:** Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.. **Dependencias:** RDS-C36.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/security/src/privacy.ts`.
- DTO y esquema: `packages/contracts/src/37.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/37.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/037.test.ts` y `tests/fixtures/037/`.
- Evidencia: `docs/evidence/c37/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/privacy/`, `docs/threat-model.md`, `tests/security/privacy/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 037.01 — RDS-C37-T01

**Acción:** Documentar responsable/encargado, finalidad/base, DPA, transferencias, proveedores y retención por dato/cliente.

**Superficie primaria:** `packages/security/src/privacy.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/37.ts` y test `tests/campaigns/037.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C36-T07.

### 037.02 — RDS-C37-T02

**Acción:** Proteger secretos, prompts/logs/events/reportes y media con minimización, cifrado y necesidad de saber.

**Superficie primaria:** `packages/security/src/privacy.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/37.ts` y test `tests/campaigns/037.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C37-T01.

### 037.03 — RDS-C37-T03

**Acción:** Propagar restricciones/bajas/derechos a derivados, memoria, inbox, AV/transcripts y backups según procedimiento.

**Superficie primaria:** `packages/security/src/privacy.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/37.ts` y test `tests/campaigns/037.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C37-T02.

### 037.04 — RDS-C37-T04

**Acción:** Verificar derechos de voz/imagen/música y reglas de publicidad/IA por caso/fecha sin dictamen LLM universal.

**Superficie primaria:** `packages/security/src/privacy.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/37.ts` y test `tests/campaigns/037.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C37-T03.

### 037.05 — RDS-C37-T05

**Acción:** Preparar proceso de incidente/seguridad y responsables reales, sin avisos regulatorios o borrado remoto automáticos.

**Superficie primaria:** `packages/security/src/privacy.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/37.ts` y test `tests/campaigns/037.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C37-T04.

### 037.06 — RDS-C37-T06

**Acción:** Definir permisos de operador/proveedor y acceso excepcional auditable para soporte multicliente.

**Superficie primaria:** `packages/security/src/privacy.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/37.ts` y test `tests/campaigns/037.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C37-T05.

### 037.07 — RDS-C37-T07

**Acción:** Probar restriction propagation, legal hold, token revocado, prompt injection, CSV/HTML/SSRF y ausencia de secretos centinela.

**Superficie primaria:** `packages/security/src/privacy.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/37.ts` y test `tests/campaigns/037.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C37-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C37-G01 / NOT_EXECUTED:** Solicitud de restricción impide leer fuente y reportes/transcripts derivados autorizables.
- **RDS-C37-G02 / NOT_EXECUTED:** Restore viejo no rehabilita permisos/restricciones obsoletos ni abre nuevas publicaciones.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
