# RDS-C12 — Meta: Instagram, Facebook y Threads por capacidad

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/12-meta-instagram-facebook-y-threads-por-capacidad.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Evitar mezclar login paths, tipos de cuenta, scopes y límites de productos distintos.

## Artefactos previstos
- `src/adapters/meta/`
- `docs/providers/meta-matrix.md`
- `tests/contracts/meta/`

## Invariante
Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.

## Dependencias y fuentes
Dependencias: RDS-C11. Fuentes: A04. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C12-T01:** Obtener documentación primaria vigente tras el429 y fijar versión/producto/login path con fecha de revisión. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.
- **RDS-C12-T02:** Distinguir Instagram Login de Facebook Login, cuenta profesional, Page/roles y entitlement de cada operación. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.
- **RDS-C12-T03:** Definir por separado Facebook Page y Threads, sin copiar permisos o formatos de Instagram. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.
- **RDS-C12-T04:** Implementar media container/processing/publish e IDs separados según contrato confirmado en laboratorio. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.
- **RDS-C12-T05:** Consultar cuota/capacidad real y validar disclosure, privacidad y formatos del payload aprobado. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.
- **RDS-C12-T06:** Revisar app/business verification, refresh y permisos de cuentas ajenas antes de modo comercial. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.
- **RDS-C12-T07:** Probar scope perdido, container rechazado/caducado, cuota agotada, error de formato y vinculación a otra empresa. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Meta documentado es unknown de runtime hasta verificar cada producto y cuenta; no número universal de posts/día.

## Gates previstos, NO ejecutados
- RDS-C12-G01: Cuenta o producto no elegible queda unsupported sin fallback a scraping/browser.
- RDS-C12-G02: Container creado para cuentaA no puede publicarse con binding deB.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
