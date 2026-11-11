# RDS-C07 · Conexión OAuth y ciclo de credenciales

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia7/42.

## Objetivo y contrato

Conectar cuentas con prueba de pertenencia y revocación sin exponer secretos.

Invariante: **Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.**

## Entrada y dependencias

Requiere RDS-C06 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/connections/oauth.ts
- src/connections/registry.ts
- tests/security/oauth.test.ts

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C07-T01
Diseñar OAuth state single-use ligado a sesión, cliente, proyecto y provider, con PKCE donde aplique.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C07-T02
Configurar issuer/redirect/host allowlists del servidor y separar login de cliente de autorización de cuenta social.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C07-T03
Almacenar solo refs de secretos y envelopes según custodia; limitar scopes y acceso por conexión.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C07-T04
Validar remoteAccount/workspace y su vinculación a tenant antes de aceptar la conexión.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C07-T05
Implementar refresh/rotación/desconexión con revisión y bloqueo de intents pendientes ante revocación.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C07-T06
Definir autorización standalone y bridge partner sin API key global compartida entre clientes.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C07-T07
Probar callback replay/CSRF, token vencido, refresh simultáneo, callback de otro tenant y log con secreto centinela.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Conectar una cuenta autoriza una capacidad concreta, no cualquier publicación o lectura privada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C07-G01 — NOT_EXECUTED:** Callback emitido paraA llega desde sesiónB y no crea binding ni revela cuenta.
- **RDS-C07-G02 — NOT_EXECUTED:** Refresh falla durante claim: job bloqueado y credential/error no aparecen en logs.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

H01; L01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
