# RDS-C01 — Baseline, alcance y cotejo del padre

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/01-baseline-alcance-y-cotejo-del-padre.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Congelar lo observado antes de introducir implementación y diferencias de contrato.

## Artefactos previstos
- `docs/baseline.md`
- `docs/parent-diff.md`
- `docs/versions.json`

## Invariante
El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.

## Dependencias y fuentes
Dependencias: ninguna. Fuentes: H01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C01-T01:** Anotar SHA, fecha, estado del checkout e instrucciones propias y de cada dependencia que se vaya a leer. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.
- **RDS-C01-T02:** Cotejar el padre vigente con54b8d5407a8576459448c4d059a877297d18ca7a, registrar cambios y no modificarlo. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.
- **RDS-C01-T03:** Inventariar TenantPrincipal, ambos PolicyContext, aprobación nativa, eventos sociales y SocialClient stub. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.
- **RDS-C01-T04:** Definir alcance integrado y standalone, cliente objetivo y la aclaración de empresa SaaS con Anam. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.
- **RDS-C01-T05:** Capturar SO, arquitectura, Node/pnpm/DB y licencias sin imprimir variables secretas del entorno. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.
- **RDS-C01-T06:** Distinguir checks de documentación, tests existentes y pruebas nuevas no ejecutadas; conservar fallos de baseline. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.
- **RDS-C01-T07:** Entregar mapa de discrepancias y gates del laboratorio antes de afirmar compatibilidad o escoger runtime. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El padre no cambia durante el baseline; cualquier diferencia altera el mapa, no la evidencia anterior.

## Gates previstos, NO ejecutados
- RDS-C01-G01: El SHA padre ha cambiado: el informe identifica interfaces afectadas y no hereda compatibilidad.
- RDS-C01-G02: Checkout con cambios ajenos: se conservan y el baseline los separa sin reset.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
