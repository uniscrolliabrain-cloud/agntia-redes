# RDS-C19 — Máquina de estados y aprobación vinculada

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/19-maquina-de-estados-y-aprobacion-vinculada.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Hacer que ningún efecto se ejecute con consentimiento antiguo o ambiguo.

## Artefactos previstos
- `src/runtime/fsm.ts`
- `src/approvals/`
- `tests/security/approval.test.ts`

## Invariante
Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.

## Dependencias y fuentes
Dependencias: RDS-C18. Fuentes: H01, N01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C19-T01:** Definir estados/transiciones de contenido, aceptación, intent, upload, job remoto y post confirmado. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.
- **RDS-C19-T02:** Calcular hash canónico del payload final con cuenta, rights, policy, coste, slot y revisión. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.
- **RDS-C19-T03:** Verificar aprobación local standalone o prueba nativa del host autenticada, sin confiar en proyección Assignment. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.
- **RDS-C19-T04:** Exigir firmantes reales, separación de funciones y step-up según riesgo; impedir self-approval de agentes. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.
- **RDS-C19-T05:** Revalidar expiración, revocación, cambios de membership/cuenta y policy antes de enqueue y claim. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.
- **RDS-C19-T06:** Implementar dry-run sin efectos y cancelación diferenciando pre-send de remoto ya aceptado. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.
- **RDS-C19-T07:** Probar hash distinto, mismo key con otro payload, doble aprobación concurrente y voz no confirmada en UI. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.

## Gates previstos, NO ejecutados
- RDS-C19-G01: Agente propone y presenta approval ficticia: denegado sin ejecutar IO.
- RDS-C19-G02: Un cliente modifica hora/cuenta después de aprobar y el commit recibe409.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
