# RDS-C14 — YouTube y procesamiento de vídeo

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/14-youtube-y-procesamiento-de-video.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Separar upload, processing, visibilidad y confirmación con cuotas vigentes.

## Artefactos previstos
- `src/adapters/youtube/`
- `tests/contracts/youtube/`
- `docs/providers/youtube.md`

## Invariante
Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.

## Dependencias y fuentes
Dependencias: RDS-C13. Fuentes: A06. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C14-T01:** Verificar scope/account/channel y documentación actual de upload/cuotas, sin números antiguos heredados. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.
- **RDS-C14-T02:** Validar título/description/locales/thumbnail, made-for-kids y synthetic media según hechos/policy aplicable. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.
- **RDS-C14-T03:** Exigir visibilidad explícita aprobada y confirmar defaults/privacidad con respuesta real. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.
- **RDS-C14-T04:** Gestionar resumable upload/processing y conservar upload/session/remote video IDs sin filtrar URLs de sesión. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.
- **RDS-C14-T05:** Aplicar budget/cuota por operación y límites de media antes de enviar bytes. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.
- **RDS-C14-T06:** Reconciliar upload incierto y programación/estado sin recrear otro vídeo por timeout. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.
- **RDS-C14-T07:** Probar canal equivocado, cuota, subida interrumpida, procesamiento fallido, publicación privada y rights expirados. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Subir un vídeo no demuestra que sea público o esté disponible; no transferir reglas de TikTok.

## Gates previstos, NO ejecutados
- RDS-C14-G01: Upload termina pero processing falla: el intent no figura publicado y conserva receipt de fallo.
- RDS-C14-G02: Payload sin visibilidad explícita se rechaza en preview aunque el proveedor tenga default.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
