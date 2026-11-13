# RDS-C16 — Proveedores opcionales: X, Pinterest y Buffer

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/16-proveedores-opcionales-x-pinterest-y-buffer.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Ampliar solo capacidades demostradas y con condiciones comerciales verificadas.

## Artefactos previstos
- `src/adapters/optional/`
- `docs/providers/optional.md`
- `tests/contracts/optional/`

## Invariante
La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.

## Dependencias y fuentes
Dependencias: RDS-C15. Fuentes: A08, A09. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C16-T01:** Priorizar provider según contrato de cliente y evidencias; dejar los no investigados disabled. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.
- **RDS-C16-T02:** Para X verificar pay-per-use, permisos, cuota, hard limit y fuente de tarifa antes de habilitar lectura pagada. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.
- **RDS-C16-T03:** Para Pinterest realizar investigación primaria y discovery propios; no reutilizar DTO de Instagram. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.
- **RDS-C16-T04:** Para Buffer inspeccionar API actual/entitlement y limitar superficie a rutas nominadas que realmente existan. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.
- **RDS-C16-T05:** Normalizar publicación/analytics por capability, manteniendo métricas y derechos de cada canal separados. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.
- **RDS-C16-T06:** Conservar rutas no soportadas como unavailable y no pagar ni activar trial para completar un gate. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.
- **RDS-C16-T07:** Probar ledger agotado, API no incluida en plan, error por producto y replay de un backend con outcome incierto. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.

## Gates previstos, NO ejecutados
- RDS-C16-G01: Un plan sin acceso a analytics devuelve unsupported sin fabricar ceros.
- RDS-C16-G02: Operación pagada sin reserva o tarifa revisada se deniega antes de HTTP.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
