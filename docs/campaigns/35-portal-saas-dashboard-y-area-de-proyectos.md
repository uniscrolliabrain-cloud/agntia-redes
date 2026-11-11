# RDS-C35 · Portal SaaS, dashboard y área de proyectos

Estado inicial: **NOT_STARTED**. Campaña de implementación futura; nada de este documento acredita código o tests ejecutados. Secuencia35/42.

## Objetivo y contrato

Ofrecer UX profesional propia e integrable para cliente y equipo especialista.

Invariante: **Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.**

## Entrada y dependencias

Requiere RDS-C34 y sus contratos/gates pertinentes; si hay un bloqueo crítico, no habilitar IO que dependa de él. Releer README, handoff, empresa SaaS y fuentes versionadas. Toda prueba externa necesita entorno/cuenta/alcance y autorización de su efecto. El cliente externo no exige instalar el padre.

## Artefactos previstos

- web/
- docs/ux/
- tests/browser/

Estos paths son futuros. Antes de crear/modificar, cotejar el árbol real y registrar adaptación por ADR; no reescribir otros repos ni usar secretos o datos privados en Git público.

## Tareas ultragranulares

### RDS-C35-T01
Diseñar onboarding, contratos/entitlements, proyectos, calendario, review, inbox, entregables y cuenta de servicio.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C35-T02
Integrar visio Anam/chat con sesión contextual, disclosure IA y botón de escalado a humano real si existe.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C35-T03
Mostrar diff/hash/cuenta/visibilidad/ventana/coste/expiry antes de revisión, con confirmación humana explícita.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C35-T04
Distinguir proposed/accepted/scheduled/provider accepted/confirmed/unknown y ausencia de datos/cobertura.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C35-T05
Implementar desktop/móvil/teclado/foco/labels y fallback sin AV; no esconder decisiones materiales en un prompt.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C35-T06
Limpiar caches y respuestas tardías al cambiar cliente/proyecto/logout y mantener tokens de servicio fuera del browser.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

### RDS-C35-T07
Probar registro/login, tenant switch, derechos de descarga, conflicto concurrente, aprobación denegada y recuperación de sesión Anam.
Aceptación: Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.
Evidencia requerida: diff y SHA del artefacto, entorno/comando o revisión efectiva, resultado observado y exclusiones. Un mock prueba contrato local, no permiso/eficacia del proveedor. Estado inicial NOT_STARTED.

## Gates de la campaña

- **RDS-C35-G01 — NOT_EXECUTED:** Cliente cambia workspace durante respuesta tardía y no reaparecen datos del anterior.
- **RDS-C35-G02 — NOT_EXECUTED:** Un viewer conversa con el avatar pero sigue sin aprobar ni acceder a originales restringidos.

Añadir además caso legítimo, denegación por scope/rol/tenant, revisión concurrente y fallo de dependencia aplicables. La aprobación de un escenario negativo no convierte en soportada una capability real no probada. Registrar BLOCKED o PARTIAL cuando falte cuenta/review/plataforma; no marcar PASS por documentación.

## Seguridad, pruebas y límites

Identidad/capacidades vienen de servidor autenticado y mandato. PEP único para SDK, API, MCP, visio y worker; no llaves admin al modelo. Solo fixtures sintéticos/de derechos verificados hasta autorización de uso real. Gate crítico: fuga de tenant/secreto, bypass de aprobación, efecto incierto duplicado, gasto sin control o pérdida de auditoría detiene la campaña. No sustituir una API bloqueada por navegador/scraping.

## Reversión y checkpoint

Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar. El rollback de un post visible no puede prometer que nadie lo vio. Emitir reporte al cerrar esta campaña con estado objetivo, decisiones, resultado y siguiente paso; checkpoints agrupados después de5,10,15,20,25,30,35,40 y42. No merge/deploy automático.

## Fuentes y contraste

N01; H01. Resolver IDs en [sources.json](../research/sources.json). Las decisiones de dominio son hipótesis de diseño propias; leer un paper/README no reproduce benchmarks ni acredita integración comercial.
