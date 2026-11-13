# RDS-C33 — Visio Anam como atención del especialista

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/33-visio-anam-como-atencion-del-especialista.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Dar presencia profesional al SaaS sin exponer secretos ni autoridad de aprobación.

## Artefactos previstos
- `src/presence/anam.ts`
- `src/sessions/`
- `tests/contracts/anam/`

## Invariante
Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.

## Dependencias y fuentes
Dependencias: RDS-C32. Fuentes: N01, N02, N03, N04, N05. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C33-T01:** Fijar SDK/contrato/plan/permisos y verificar DPA, residencia/retención, precio y uso comercial reales. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.
- **RDS-C33-T02:** Crear AdvisorSession vinculada a workspace/proyecto/principal y emitir token breve en backend, sin API key en cliente. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.
- **RDS-C33-T03:** Capturar permisos AV y política de grabación/transcripción; no requerir cámara del cliente ni activar captura sola. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.
- **RDS-C33-T04:** Pasar tool callbacks por PEP con firma/nonce/session binding y limitar catálogo a lectura/propuestas autorizadas. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.
- **RDS-C33-T05:** Groundear afirmaciones críticas en estado/receipts y exigir UI autenticada para aprobación vinculante, no un sí hablado. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.
- **RDS-C33-T06:** Cerrar/reconciliar minutos y concurrencia ante pausa/reconexión/corte, con fallback de chat y continuidad durable. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.
- **RDS-C33-T07:** Probar sesiones de dos clientes, token revocado, replay callback, micrófono denegado, accesibilidad y cierre incierto con budget reservado. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.

## Gates previstos, NO ejecutados
- RDS-C33-G01: SesiónA pide contexto del clienteB y ningún frame/transcript/tool recibe esos datos.
- RDS-C33-G02: La llamada se corta tras crear propuesta: no se publica/repite efecto al reconectar y minutos se concilian.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
