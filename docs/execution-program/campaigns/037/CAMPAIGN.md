# RDS-C37 · Privacidad, seguridad, legal y derechos del servicio

**DESIGN_ONLY · NOT_STARTED · 37/42.** Fuente [docs/campaigns/37-privacidad-seguridad-legal-y-derechos-del-servicio.md](../../../campaigns/37-privacidad-seguridad-legal-y-derechos-del-servicio.md).

## Resultado y límites
Tratar datos de clientes y conversación AV sin vender certificación automática.

**Invariante:** Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.. **Dependencias:** RDS-C36.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/privacy/`, `docs/threat-model.md`, `tests/security/privacy/`.
- Presente en el repositorio hoy: ninguna; la campaña no está implementada.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/security/privacy/` y `tests/fixtures/c37/`.
- Evidencia: `docs/evidence/c037/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/privacy/`, `docs/threat-model.md`, `tests/security/privacy/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 037.01 — RDS-C37-T01

**Acción:** Documentar responsable/encargado, finalidad/base, DPA, transferencias, proveedores y retención por dato/cliente.

**Superficie:** `src/privacy/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/security/privacy/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.

**Verificación:** caso `RDS-C37-T01` sobre `tests/security/privacy/`; evidencia `docs/evidence/c037/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C36-T07.

### 037.02 — RDS-C37-T02

**Acción:** Proteger secretos, prompts/logs/events/reportes y media con minimización, cifrado y necesidad de saber.

**Superficie:** `docs/threat-model.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/security/privacy/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.

**Verificación:** caso `RDS-C37-T02` sobre `tests/security/privacy/`; evidencia `docs/evidence/c037/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C37-T01.

### 037.03 — RDS-C37-T03

**Acción:** Propagar restricciones/bajas/derechos a derivados, memoria, inbox, AV/transcripts y backups según procedimiento.

**Superficie:** `tests/security/privacy/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/security/privacy/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.

**Verificación:** caso `RDS-C37-T03` sobre `tests/security/privacy/`; evidencia `docs/evidence/c037/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C37-T02.

### 037.04 — RDS-C37-T04

**Acción:** Verificar derechos de voz/imagen/música y reglas de publicidad/IA por caso/fecha sin dictamen LLM universal.

**Superficie:** `src/privacy/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/security/privacy/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.

**Verificación:** caso `RDS-C37-T04` sobre `tests/security/privacy/`; evidencia `docs/evidence/c037/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C37-T03.

### 037.05 — RDS-C37-T05

**Acción:** Preparar proceso de incidente/seguridad y responsables reales, sin avisos regulatorios o borrado remoto automáticos.

**Superficie:** `docs/threat-model.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/security/privacy/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.

**Verificación:** caso `RDS-C37-T05` sobre `tests/security/privacy/`; evidencia `docs/evidence/c037/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C37-T04.

### 037.06 — RDS-C37-T06

**Acción:** Definir permisos de operador/proveedor y acceso excepcional auditable para soporte multicliente.

**Superficie:** `tests/security/privacy/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/security/privacy/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.

**Verificación:** caso `RDS-C37-T06` sobre `tests/security/privacy/`; evidencia `docs/evidence/c037/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C37-T05.

### 037.07 — RDS-C37-T07

**Acción:** Probar restriction propagation, legal hold, token revocado, prompt injection, CSV/HTML/SSRF y ausencia de secretos centinela.

**Superficie:** `src/privacy/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/security/privacy/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.

**Verificación:** caso `RDS-C37-T07` sobre `tests/security/privacy/`; evidencia `docs/evidence/c037/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C37-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C37-G01 / NOT_EXECUTED:** Solicitud de restricción impide leer fuente y reportes/transcripts derivados autorizables. **Caso:** `RDS-C37-G01` en `tests/security/privacy/`. **Evidencia:** `docs/evidence/c037/g01.json`.
- **RDS-C37-G02 / NOT_EXECUTED:** Restore viejo no rehabilita permisos/restricciones obsoletos ni abre nuevas publicaciones. **Caso:** `RDS-C37-G02` en `tests/security/privacy/`. **Evidencia:** `docs/evidence/c037/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
