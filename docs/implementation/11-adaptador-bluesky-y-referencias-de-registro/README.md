# RDS-C11 — Adaptador Bluesky y referencias de registro

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/11-adaptador-bluesky-y-referencias-de-registro.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Fijar protocolo/cuenta y detectar conflictos sin recetas de auth obsoletas.

## Artefactos previstos
- `src/adapters/bluesky/`
- `tests/contracts/bluesky/`
- `docs/providers/bluesky.md`

## Invariante
Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.

## Dependencias y fuentes
Dependencias: RDS-C10. Fuentes: A03. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C11-T01:** Leer documentación/schema primarios vigentes y fijar SDK/protocolo/PDS autorizado; registrar la incertidumbre actual. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.
- **RDS-C11-T02:** Verificar OAuth y binding DID/cuenta/workspace; no usar passwords de ejemplo como plan productivo. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.
- **RDS-C11-T03:** Normalizar texto/facets/media/idioma y límites reales de la versión elegida. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.
- **RDS-C11-T04:** Definir record refs y estrategia de operation key solo si el contrato verificado permite correlación inequívoca. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.
- **RDS-C11-T05:** Rechazar overwrite de registro remoto con hash distinto y crear conflicto de revisión. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.
- **RDS-C11-T06:** Persistir receipts, capacidades y versión de mapping; denegar hosts/PDS no configurados por servidor. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.
- **RDS-C11-T07:** Probar reintento incierto, identidad cambiada, referencia ajena y media fuera de scope con fixtures de contrato. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una referencia remota no prueba identidad, permiso ni equivalencia del contenido.

## Gates previstos, NO ejecutados
- RDS-C11-G01: El rkey/ref apunta a contenido distinto y se bloquea en conflicto, sin overwrite.
- RDS-C11-G02: Cambiar PDS o cuenta requiere revalidación de binding y no cambia el tenant por texto del modelo.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
