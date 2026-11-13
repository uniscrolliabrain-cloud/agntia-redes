# RDS-C23 — Comandos de publicación y ejecución por canal

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/23-comandos-de-publicacion-y-ejecucion-por-canal.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Tramitar solo el payload aprobado y registrar el alcance real de cada resultado.

## Artefactos previstos
- `src/publication/commands.ts`
- `tests/integration/publish.test.ts`
- `docs/receipt-map.md`

## Invariante
Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.

## Dependencias y fuentes
Dependencias: RDS-C22. Fuentes: A01, A02, A06. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C23-T01:** Crear preview final por accountBinding con validación de payload, derechos, visibilidad y capability fresca. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.
- **RDS-C23-T02:** Admitir intent idempotente con revisión/approval/budget y separar upload, backend job y post. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.
- **RDS-C23-T03:** Enviar únicamente con lease/fence y revalidación de principal/kill switch/ventana. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.
- **RDS-C23-T04:** Persistir receipt remoto y estado semántico sin considerar un202 o jobID como publicación confirmada. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.
- **RDS-C23-T05:** Soportar éxito parcial por canal y reanudar solo los pendientes realmente seguros. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.
- **RDS-C23-T06:** Emitir hechos al outbox y exponer seguimiento para humano y agente con causas/warnings. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.
- **RDS-C23-T07:** Probar wrong-account, media cambiado, scope revocado, duplicado, cuota y retorno con contenido no verificable. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Aprobar una variante no autoriza las demás cuentas, fechas o contenidos de una campaña.

## Gates previstos, NO ejecutados
- RDS-C23-G01: Tres canales: dos confirmados y uno unknown; no se repiten los confirmados.
- RDS-C23-G02: El avatar consulta estado y solo dice publicado para receipts confirmed.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
