# RDS-C19 · Máquina de estados y aprobación vinculada

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia19/42.

## Objetivo y contrato

Hacer que ningún efecto se ejecute con consentimiento antiguo o ambiguo.

Invariante: **Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.**

## Entrada y dependencias

Requiere RDS-C18 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/runtime/fsm.ts
- src/approvals/
- tests/security/approval.test.ts

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C19-T01
Definir estados/transiciones de contenido, aceptación, intent, upload, job remoto y post confirmado.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C19-T02
Calcular hash canónico del payload final con cuenta, rights, policy, coste, slot y revisión.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C19-T03
Verificar aprobación local standalone o prueba nativa del host autenticada, sin confiar en proyección Assignment.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C19-T04
Exigir firmantes reales, separación de funciones y step-up según riesgo; impedir self-approval de agentes.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C19-T05
Revalidar expiración, revocación, cambios de membership/cuenta y policy antes de enqueue y claim.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C19-T06
Implementar dry-run sin efectos y cancelación diferenciando pre-send de remoto ya aceptado.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C19-T07
Probar hash distinto, mismo key con otro payload, doble aprobación concurrente y voz no confirmada en UI.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un approval_id o un sí hablado no prueba identidad, firma humana ni payload aprobado.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C19-G01 — NOT_EXECUTED:** Agente propone y presenta approval ficticia: denegado sin ejecutar IO.
- **RDS-C19-G02 — NOT_EXECUTED:** Un cliente modifica hora/cuenta después de aprobar y el commit recibe409.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

H01; N01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
