# RDS-C24 — Reconciliación, edición, retirada y kill switch

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/24-reconciliacion-edicion-retirada-y-kill-switch.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Resolver incertidumbre sin borrar historia ni inventar rollback remoto.

## Artefactos previstos
- `src/publication/reconcile.ts`
- `src/publication/changes.ts`
- `tests/integration/reconcile.test.ts`

## Invariante
Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.

## Dependencias y fuentes
Dependencias: RDS-C23. Fuentes: A02, L01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C24-T01:** Consultar por receipt/operation ref inequívoca cuando el proveedor lo permite y registrar limitaciones. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.
- **RDS-C24-T02:** Crear cola de revisión ante lookup ambiguo; no buscar solo texto/hora para asumir identidad del post. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.
- **RDS-C24-T03:** Tramitar edición/borrado como nuevas operaciones aprobadas y con expected remote revision cuando exista. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.
- **RDS-C24-T04:** Conservar tombstone y evidencia mínima de remoto eliminado/privado/modificado fuera del servicio. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.
- **RDS-C24-T05:** Implementar kill switch por cliente/cuenta/proveedor y distinguir cancelar admisión de cancelar remoto. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.
- **RDS-C24-T06:** Coordinar saldo/intent/policy tras restore o reintento manual autorizado. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.
- **RDS-C24-T07:** Probar timeout tras create, delete ya realizado, post ajeno parecido y pausa posterior a aceptación remota. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Retirar un post no significa que nadie lo vio ni que copias/backups desaparecieron.

## Gates previstos, NO ejecutados
- RDS-C24-G01: Sin lookup fiable el intent permanece unknown y no se reenvía para cerrar un dashboard.
- RDS-C24-G02: Otro usuario modifica el post remoto y una actualización local se bloquea en conflicto.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
