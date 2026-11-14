# RDS-C40 — E2E: cliente integrado y cliente externo con especialista en visio

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/40-e2e-cliente-integrado-y-cliente-externo-con-especialista-en-visio.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Demostrar los dos modelos de servicio y distinguir fixture de proveedor real.

## Artefactos previstos
- `tests/e2e/`
- `docs/verification/journeys.md`
- `docs/demo/`

## Invariante
Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.

## Dependencias y fuentes
Dependencias: RDS-C39. Fuentes: H01, N01, P05. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C40-T01:** Ejecutar onboarding/ServiceAgreement/WorkOrder de cliente externo sin padre y caso equivalente integrado. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.
- **RDS-C40-T02:** Recorrer brief/assets/rights→variantes→preview→approval→intent→envío permitido→receipt/reconciliación→reporte. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.
- **RDS-C40-T03:** Añadir inbox/moderación/reply proposal y handoff con contexto mínimo, revisión y aceptación de entregable. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.
- **RDS-C40-T04:** Incluir sesión Anam autorizada o fixture explícita con aislamiento, pérdida de AV y continuidad de trabajo. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.
- **RDS-C40-T05:** Probar dos tenants, tres actores humanos/agentes, revocaciones y replay sin mezclar artefactos/eventos/budget. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.
- **RDS-C40-T06:** Ejecutar providers reales solo con cuenta/alcance aprobados, marcar los demás NOT_VERIFIED sin narrar acciones inexistentes. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.
- **RDS-C40-T07:** Grabar demo/evidencias sanitizadas con SHAs/comandos/costes y mapa de gates que siguen bloqueados. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un avatar en vídeo no demuestra que un post se publicó; cada efecto necesita evidencia de backend/proveedor.

## Gates previstos, NO ejecutados
- RDS-C40-G01: Cliente standalone termina el recorrido sin llamar agente ni otro repo hermano obligatorio.
- RDS-C40-G02: Una llamada social termina unknown y el informe/visio explican pendiente, sin fake success.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
