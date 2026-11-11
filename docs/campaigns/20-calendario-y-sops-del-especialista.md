# RDS-C20 · Calendario y SOPs del especialista

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia20/42.

## Objetivo y contrato

Coordinar el trabajo de la empresa SaaS y entregas sin duplicar un mismo efecto.

Invariante: **Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.**

## Entrada y dependencias

Requiere RDS-C19 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/scheduling/
- src/service-ops/sops.ts
- tests/domain/calendar.test.ts

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C20-T01
Definir SOPs del servicio para onboarding, briefing, revisión semanal, crisis y cierre de contrato.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C20-T02
Integrar tareas del cliente mediante bridge opcional; el portal standalone conserva operación propia.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C20-T03
Representar hora local/zonaIANA/UTC/tzdata y resolver DST ambiguo/inexistente con decisión explícita.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C20-T04
Fijar scheduleAuthority local o remote_backend por intent y bloquear programación doble.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C20-T05
Aplicar ventanas, caducidad de fuente/rights y catch-up revisado tras downtime.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C20-T06
Implementar pausa por crisis/cuenta/cliente y conciliación de jobs ya programados fuera del core.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C20-T07
Probar cambio de zona, hora repetida, clock skew, reinicio largo y pausa con remoto ya aceptado.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Permitir organizaciones de servicio propias no significa controlar la empresa completa del cliente.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C20-G01 — NOT_EXECUTED:** Una hora DST repetida no produce dos publicaciones ni selecciona un instante silenciosamente.
- **RDS-C20-G02 — NOT_EXECUTED:** La programación remota existe y el worker local solo supervisa, no vuelve a crearla.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

H01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
