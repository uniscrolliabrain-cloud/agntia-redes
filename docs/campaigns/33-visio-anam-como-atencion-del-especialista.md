# RDS-C33 · Visio Anam como atención del especialista

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia33/42.

## Objetivo y contrato

Dar presencia profesional al SaaS sin exponer secretos ni autoridad de aprobación.

Invariante: **Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.**

## Entrada y dependencias

Requiere RDS-C32 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/presence/anam.ts
- src/sessions/
- tests/contracts/anam/

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C33-T01
Fijar SDK/contrato/plan/permisos y verificar DPA, residencia/retención, precio y uso comercial reales.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C33-T02
Crear AdvisorSession vinculada a workspace/proyecto/principal y emitir token breve en backend, sin API key en cliente.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C33-T03
Capturar permisos AV y política de grabación/transcripción; no requerir cámara del cliente ni activar captura sola.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C33-T04
Pasar tool callbacks por PEP con firma/nonce/session binding y limitar catálogo a lectura/propuestas autorizadas.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C33-T05
Groundear afirmaciones críticas en estado/receipts y exigir UI autenticada para aprobación vinculante, no un sí hablado.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C33-T06
Cerrar/reconciliar minutos y concurrencia ante pausa/reconexión/corte, con fallback de chat y continuidad durable.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C33-T07
Probar sesiones de dos clientes, token revocado, replay callback, micrófono denegado, accesibilidad y cierre incierto con budget reservado.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C33-G01 — NOT_EXECUTED:** SesiónA pide contexto del clienteB y ningún frame/transcript/tool recibe esos datos.
- **RDS-C33-G02 — NOT_EXECUTED:** La llamada se corta tras crear propuesta: no se publica/repite efecto al reconectar y minutos se concilian.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

N01; N02; N03; N04; N05. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
