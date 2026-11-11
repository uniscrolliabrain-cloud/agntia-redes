# RDS-C18 · Work orders, briefs y variantes editoriales

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia18/42.

## Objetivo y contrato

Convertir conversación en entregable trazable sin ejecutar lo que el modelo redacta.

Invariante: **La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.**

## Entrada y dependencias

Requiere RDS-C17 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- src/editorial/brief.ts
- src/editorial/variants.ts
- tests/domain/brief.test.ts

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C18-T01
Crear WorkOrder con alcance, objetivo, deadline, entregables, fuentes, responsables y criterio de aceptación.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C18-T02
Validar ServiceAgreement/entitlements y distinguir propuesta de cambio de alcance de trabajo ya contratado.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C18-T03
Producir variantes por canal y ES/EN/FR ligadas a brand policy propia o importada y fuentes declaradas.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C18-T04
Comprobar límites de texto/CTA/enlaces/alt/disclosures y conservar incertidumbre de claims.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C18-T05
Guardar cada revisión y diff material, incluidos traducción, hashtags, media y destinatario/visibilidad.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C18-T06
Permitir revisión y aceptación de entregable distintas de la autorización de publicación/cobro.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C18-T07
Probar brief contradictorio, fuente caducada, cambio de marca, copy sin evidencia y variante que altera significado.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La conversación crea propuesta estructurada; no sustituye firma, budget ni aprobación editorial.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C18-G01 — NOT_EXECUTED:** Cliente dice que cambie el alcance y se abre ChangeRequest, sin elevar cuota/cargo automáticamente.
- **RDS-C18-G02 — NOT_EXECUTED:** Traducción cambia una afirmación comercial y requiere revisión nueva con fuente.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

P01; H01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
