# RDS-C20 — Calendario y SOPs del especialista

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/20-calendario-y-sops-del-especialista.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Coordinar el trabajo de la empresa SaaS y entregas sin duplicar un mismo efecto.

## Artefactos previstos
- `src/scheduling/`
- `src/service-ops/sops.ts`
- `tests/domain/calendar.test.ts`

## Invariante
Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.

## Dependencias y fuentes
Dependencias: RDS-C19. Fuentes: H01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C20-T01:** Definir SOPs del servicio para onboarding, briefing, revisión semanal, crisis y cierre de contrato. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.
- **RDS-C20-T02:** Integrar tareas del cliente mediante bridge opcional; el portal standalone conserva operación propia. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.
- **RDS-C20-T03:** Representar hora local/zonaIANA/UTC/tzdata y resolver DST ambiguo/inexistente con decisión explícita. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.
- **RDS-C20-T04:** Fijar scheduleAuthority local o remote_backend por intent y bloquear programación doble. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.
- **RDS-C20-T05:** Aplicar ventanas, caducidad de fuente/rights y catch-up revisado tras downtime. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.
- **RDS-C20-T06:** Implementar pausa por crisis/cuenta/cliente y conciliación de jobs ya programados fuera del core. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.
- **RDS-C20-T07:** Probar cambio de zona, hora repetida, clock skew, reinicio largo y pausa con remoto ya aceptado. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.

## Gates previstos, NO ejecutados
- RDS-C20-G01: Una hora DST repetida no produce dos publicaciones ni selecciona un instante silenciosamente.
- RDS-C20-G02: La programación remota existe y el worker local solo supervisa, no vuelve a crearla.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
