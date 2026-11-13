# RDS-C07 — Conexión OAuth y ciclo de credenciales

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/07-conexion-oauth-y-ciclo-de-credenciales.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Conectar cuentas con prueba de pertenencia y revocación sin exponer secretos.

## Artefactos previstos
- `src/connections/oauth.ts`
- `src/connections/registry.ts`
- `tests/security/oauth.test.ts`

## Invariante
Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.

## Dependencias y fuentes
Dependencias: RDS-C06. Fuentes: H01, L01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C07-T01:** Diseñar OAuth state single-use ligado a sesión, cliente, proyecto y provider, con PKCE donde aplique. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.
- **RDS-C07-T02:** Configurar issuer/redirect/host allowlists del servidor y separar login de cliente de autorización de cuenta social. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.
- **RDS-C07-T03:** Almacenar solo refs de secretos y envelopes según custodia; limitar scopes y acceso por conexión. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.
- **RDS-C07-T04:** Validar remoteAccount/workspace y su vinculación a tenant antes de aceptar la conexión. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.
- **RDS-C07-T05:** Implementar refresh/rotación/desconexión con revisión y bloqueo de intents pendientes ante revocación. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.
- **RDS-C07-T06:** Definir autorización standalone y bridge partner sin API key global compartida entre clientes. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.
- **RDS-C07-T07:** Probar callback replay/CSRF, token vencido, refresh simultáneo, callback de otro tenant y log con secreto centinela. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.

## Gates previstos, NO ejecutados
- RDS-C07-G01: Callback emitido paraA llega desde sesiónB y no crea binding ni revela cuenta.
- RDS-C07-G02: Refresh falla durante claim: job bloqueado y credential/error no aparecen en logs.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
