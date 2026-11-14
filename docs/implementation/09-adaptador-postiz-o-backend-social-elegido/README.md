# RDS-C09 — Adaptador Postiz o backend social elegido

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/09-adaptador-postiz-o-backend-social-elegido.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Integrar un backend autohospedado como proveedor invisible y acotado.

## Artefactos previstos
- `src/adapters/postiz/`
- `tests/contracts/postiz/`
- `docs/adr/backend-social.md`

## Invariante
El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.

## Dependencias y fuentes
Dependencias: RDS-C08. Fuentes: A01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C09-T01:** Verificar versión/edición/API instalada y seleccionar Postiz o alternativa; documentar por qué no instalar ambas. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.
- **RDS-C09-T02:** Leer integraciones/cuentas del workspace servidor y mapear IDs explícitos por tenant/marca. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.
- **RDS-C09-T03:** Normalizar create/schedule/media/settings permitidos sin exponer API admin o tools genéricas. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.
- **RDS-C09-T04:** Separar upload, job remoto y post visible; fijar scheduleAuthority remoto o local por intent. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.
- **RDS-C09-T05:** Persistir links/idempotency/mapping hash y reconciliar estados del backend con receipts de canal cuando existan. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.
- **RDS-C09-T06:** Revisar aislamiento, licencia, storage/OAuth apps y coste de la instancia antes de habilitar clientes. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.
- **RDS-C09-T07:** Probar fixture real local autorizada, job aceptado pero no publicado, fallo parcial y replay sin crear dos schedules. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El backend no custodia ni inventa la aprobación empresarial y un jobID no es postID.

## Gates previstos, NO ejecutados
- RDS-C09-G01: Postiz devuelve job aceptado; UI permanece pendiente de confirmación remota, sin post fake.
- RDS-C09-G02: Worker reinicia y reconoce schedule remoto existente sin programar una segunda copia.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
