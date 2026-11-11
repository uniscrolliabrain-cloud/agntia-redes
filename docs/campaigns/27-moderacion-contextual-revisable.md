# RDS-C27 · Moderación contextual revisable

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia27/42.

## Objetivo y contrato

Usar reglas específicas de comunidad, lengua y riesgo con abstención.

Invariante: **Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.**

## Entrada y dependencias

Requiere RDS-C26 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/community/moderation.ts
- tests/evaluations/moderation/
- docs/moderation-policy.md

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C27-T01
Versionar reglas de comunidad/marca, jurisdicción y lengua con responsable y evidence refs.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C27-T02
Construir clasificación de propuesta y explicación con regla/contexto, separada del borrado/sanción.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C27-T03
Definir abstención y escalado para sarcasmo, contexto incompleto, lenguaje mixto y contenido sensible.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C27-T04
Prohibir inferencias protegidas y acciones punitivas automáticas en MVP.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C27-T05
Exigir review/approval y capacidad real para ocultar/eliminar si se habilita más adelante.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C27-T06
Preparar fixtures propios ES/EN/FR y términos/licencias antes de usar datasets de investigación.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C27-T07
Evaluar falso positivo/negativo por regla/idioma y utilidad de revisión, sin usar solo un score global.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Una etiqueta LLM de toxicidad no acredita incumplimiento de una regla ni autoriza sanción.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C27-G01 — NOT_EXECUTED:** Sarcasmo o contexto incompleto produce needs_review, no eliminación silenciosa.
- **RDS-C27-G02 — NOT_EXECUTED:** Dos comunidades con reglas diferentes no comparten automáticamente la misma decisión.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

P02. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
