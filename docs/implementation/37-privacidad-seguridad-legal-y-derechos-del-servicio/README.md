# RDS-C37 — Privacidad, seguridad, legal y derechos del servicio

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/37-privacidad-seguridad-legal-y-derechos-del-servicio.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Tratar datos de clientes y conversación AV sin vender certificación automática.

## Artefactos previstos
- `src/privacy/`
- `docs/threat-model.md`
- `tests/security/privacy/`

## Invariante
Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.

## Dependencias y fuentes
Dependencias: RDS-C36. Fuentes: L01, L02, N03, N05. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C37-T01:** Documentar responsable/encargado, finalidad/base, DPA, transferencias, proveedores y retención por dato/cliente. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.
- **RDS-C37-T02:** Proteger secretos, prompts/logs/events/reportes y media con minimización, cifrado y necesidad de saber. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.
- **RDS-C37-T03:** Propagar restricciones/bajas/derechos a derivados, memoria, inbox, AV/transcripts y backups según procedimiento. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.
- **RDS-C37-T04:** Verificar derechos de voz/imagen/música y reglas de publicidad/IA por caso/fecha sin dictamen LLM universal. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.
- **RDS-C37-T05:** Preparar proceso de incidente/seguridad y responsables reales, sin avisos regulatorios o borrado remoto automáticos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.
- **RDS-C37-T06:** Definir permisos de operador/proveedor y acceso excepcional auditable para soporte multicliente. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.
- **RDS-C37-T07:** Probar restriction propagation, legal hold, token revocado, prompt injection, CSV/HTML/SSRF y ausencia de secretos centinela. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Contrato comercial, consentimiento AV, tratamiento de datos y permiso editorial son controles diferentes.

## Gates previstos, NO ejecutados
- RDS-C37-G01: Solicitud de restricción impide leer fuente y reportes/transcripts derivados autorizables.
- RDS-C37-G02: Restore viejo no rehabilita permisos/restricciones obsoletos ni abre nuevas publicaciones.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
