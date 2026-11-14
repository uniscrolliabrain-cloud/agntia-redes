# RDS-C26 — Atención de comunidad y servicio al cliente

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/26-atencion-de-comunidad-y-servicio-al-cliente.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Gestionar casos propios o derivados con aceptación y contexto apropiados.

## Artefactos previstos
- `src/community/cases.ts`
- `src/community/handoffs.ts`
- `tests/integration/community.test.ts`

## Invariante
Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.

## Dependencias y fuentes
Dependencias: RDS-C25. Fuentes: L01, L02. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C26-T01:** Crear ServiceCase e hilo de soporte con responsable, SLA contratado, privacidad y estados verificables. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.
- **RDS-C26-T02:** Permitir atención propia del SaaS o handoff a clientes/Chatwoot/CRM autorizado según acuerdo. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.
- **RDS-C26-T03:** Distinguir pregunta comercial, incidencia, baja, derecho de datos y riesgo reputacional sin inferencias sensibles. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.
- **RDS-C26-T04:** Preparar reply proposal ligada al hilo/contexto actual, fuente y tono; no enviarla como side effect de clasificación. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.
- **RDS-C26-T05:** Verificar identidad por binding autorizado al vincular contacto; no fusionar por handle/nombre o simple email. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.
- **RDS-C26-T06:** Registrar handoff ACK/escalado y horario humano real; no fingir transferencia o respuesta24x7. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.
- **RDS-C26-T07:** Probar mensaje nuevo tras approval, solicitud de baja, case de otra empresa y proveedor de soporte no disponible. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Solaparse con clientes es válido; una derivación o merge requiere autoridad explícita y datos mínimos.

## Gates previstos, NO ejecutados
- RDS-C26-G01: Comentario público no se convierte en contacto de ventas ni consentimiento de marketing.
- RDS-C26-G02: Nuevo mensaje cambia el contexto y una respuesta sensible aprobada queda pendiente de revisión.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
