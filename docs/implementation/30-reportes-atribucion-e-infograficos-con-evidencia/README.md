# RDS-C30 — Reportes, atribución e infográficos con evidencia

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/30-reportes-atribucion-e-infograficos-con-evidencia.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Entregar un servicio profesional de análisis sin causalidad o ingresos ficticios.

## Artefactos previstos
- `src/reports/`
- `src/analytics/attribution.ts`
- `tests/integration/reports.test.ts`

## Invariante
El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.

## Dependencias y fuentes
Dependencias: RDS-C29. Fuentes: L01, P01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C30-T01:** Crear snapshots ejecutivos/técnicos con periodo, filtros, definiciones, cobertura y fuentes verificables. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.
- **RDS-C30-T02:** Renderizar gráficos/HTML/PDF/CSV accesibles y sanitizados con footnotes, sin HTML/fórmulas activas del usuario. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.
- **RDS-C30-T03:** Integrar UTM/click refs autorizados sin PII y declarar metodología de atribución. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.
- **RDS-C30-T04:** Usar receipts de ventas/finanzas/cliente como fuentes opcionales, no equivaler engagement a ingresos/caja. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.
- **RDS-C30-T05:** Separar hechos, hipótesis, forecast experimental y recomendaciones revisadas, con suficiencia de datos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.
- **RDS-C30-T06:** Vincular DeliverableVersion y AcceptanceReceipt del cliente al informe y cambios de alcance. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.
- **RDS-C30-T07:** Probar reporte cross-tenant, datos stale/restringidos, CSV injection, rectificación y ROI sin evidencia de conversión. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El informe bonito no convierte una correlación de clicks en retorno financiero demostrado.

## Gates previstos, NO ejecutados
- RDS-C30-G01: No hay datos suficientes: infografía muestra límites y no inventa mejor horario/forecast.
- RDS-C30-G02: Cambian derechos/retención de una fuente y su export derivado queda restringido.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
