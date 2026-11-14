# RDS-C15 — TikTok y consentimiento específico de publicación

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/15-tiktok-y-consentimiento-especifico-de-publicacion.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Respetar creator settings, audit del cliente y elección real del usuario.

## Artefactos previstos
- `src/adapters/tiktok/`
- `docs/providers/tiktok.md`
- `tests/contracts/tiktok/`

## Invariante
Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.

## Dependencias y fuentes
Dependencias: RDS-C14. Fuentes: A07. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C15-T01:** Verificar app, producto, scopes y estado de auditoría mediante cuenta/entorno autorizados. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.
- **RDS-C15-T02:** Obtener creator info y opciones actuales antes de formar preview, sin ocultar elecciones obligatorias. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.
- **RDS-C15-T03:** Capturar consentimiento de upload/publicación y metadata exacta del usuario, separado del contrato SaaS. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.
- **RDS-C15-T04:** Implementar la ruta elegida Direct Post/upload con límites reales y sin opciones privadas inventadas. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.
- **RDS-C15-T05:** Distinguir restricciones de apps no auditadas de errores de token/cuenta y bloquear público cuando aplique. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.
- **RDS-C15-T06:** Registrar upload/publish refs y consultar outcome; no reintentar una creación incierta automáticamente. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.
- **RDS-C15-T07:** Probar usuario que revoca consentimiento, app no auditada, cap alcanzado, opciones cambiadas y account cross-tenant. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un checkbox comercial del SaaS no sustituye la elección/consentimiento exigidos por TikTok.

## Gates previstos, NO ejecutados
- RDS-C15-G01: App sin audit no publica público ni evade la restricción mediante browser.
- RDS-C15-G02: Creator cambia opciones tras preview: aprobación/payload se invalida antes de upload.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
