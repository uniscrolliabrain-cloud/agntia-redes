# RDS-C08 · Transporte robusto y puertos de proveedor

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia8/42.

## Objetivo y contrato

Hacer IO limitado, tipado y observable sin proxy libre ni retry peligroso.

Invariante: **El código del modelo no determina método, dominio, credencial o retry de escritura.**

## Entrada y dependencias

Requiere RDS-C07 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/providers/transport.ts
- src/providers/port.ts
- tests/contracts/transport.test.ts

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C08-T01
Implementar timeout, pool, body/media limits, content-type, TLS y redirects prohibidos por defecto.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C08-T02
Cerrar métodos y rutas por capacidad; denegar URL/headers/contexto suministrados por un agente.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C08-T03
Validar DNS/IP/puertos y redes privadas explícitas para instancias aprobadas, bloqueando metadata y rebinding.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C08-T04
Normalizar auth/quota/invalid response/unavailable/timeout con errores sin PII, trace remoto o tokens.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C08-T05
Añadir backoff limitado para lecturas/circuit breaker y respetar Retry-After con coste/cuota reservados.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C08-T06
Prohibir retry ciego de creación; conservar request fingerprint, estados inciertos y correlation IDs.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C08-T07
Probar HTML/oversize/redirect/slow body/429/secretos y fallo tras enviar antes de recibir respuesta.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C08-G01 — NOT_EXECUTED:** Destino metadata o redirect a host no permitido queda bloqueado antes de transferencia.
- **RDS-C08-G02 — NOT_EXECUTED:** Timeout después de enviar create produce outcome_unknown y cero reintentos automáticos.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

A01; A02. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
