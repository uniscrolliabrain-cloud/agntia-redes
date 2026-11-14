# RDS-C08 — Transporte robusto y puertos de proveedor

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/08-transporte-robusto-y-puertos-de-proveedor.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Hacer IO limitado, tipado y observable sin proxy libre ni retry peligroso.

## Artefactos previstos
- `src/providers/transport.ts`
- `src/providers/port.ts`
- `tests/contracts/transport.test.ts`

## Invariante
El código del modelo no determina método, dominio, credencial o retry de escritura.

## Dependencias y fuentes
Dependencias: RDS-C07. Fuentes: A01, A02. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C08-T01:** Implementar timeout, pool, body/media limits, content-type, TLS y redirects prohibidos por defecto. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.
- **RDS-C08-T02:** Cerrar métodos y rutas por capacidad; denegar URL/headers/contexto suministrados por un agente. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.
- **RDS-C08-T03:** Validar DNS/IP/puertos y redes privadas explícitas para instancias aprobadas, bloqueando metadata y rebinding. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.
- **RDS-C08-T04:** Normalizar auth/quota/invalid response/unavailable/timeout con errores sin PII, trace remoto o tokens. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.
- **RDS-C08-T05:** Añadir backoff limitado para lecturas/circuit breaker y respetar Retry-After con coste/cuota reservados. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.
- **RDS-C08-T06:** Prohibir retry ciego de creación; conservar request fingerprint, estados inciertos y correlation IDs. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.
- **RDS-C08-T07:** Probar HTML/oversize/redirect/slow body/429/secretos y fallo tras enviar antes de recibir respuesta. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.

## Gates previstos, NO ejecutados
- RDS-C08-G01: Destino metadata o redirect a host no permitido queda bloqueado antes de transferencia.
- RDS-C08-G02: Timeout después de enviar create produce outcome_unknown y cero reintentos automáticos.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
