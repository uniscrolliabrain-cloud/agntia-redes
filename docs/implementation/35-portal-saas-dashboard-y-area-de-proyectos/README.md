# RDS-C35 — Portal SaaS, dashboard y área de proyectos

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/35-portal-saas-dashboard-y-area-de-proyectos.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Ofrecer UX profesional propia e integrable para cliente y equipo especialista.

## Artefactos previstos
- `web/`
- `docs/ux/`
- `tests/browser/`

## Invariante
Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.

## Dependencias y fuentes
Dependencias: RDS-C34. Fuentes: N01, H01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C35-T01:** Diseñar onboarding, contratos/entitlements, proyectos, calendario, review, inbox, entregables y cuenta de servicio. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.
- **RDS-C35-T02:** Integrar visio Anam/chat con sesión contextual, disclosure IA y botón de escalado a humano real si existe. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.
- **RDS-C35-T03:** Mostrar diff/hash/cuenta/visibilidad/ventana/coste/expiry antes de revisión, con confirmación humana explícita. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.
- **RDS-C35-T04:** Distinguir proposed/accepted/scheduled/provider accepted/confirmed/unknown y ausencia de datos/cobertura. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.
- **RDS-C35-T05:** Implementar desktop/móvil/teclado/foco/labels y fallback sin AV; no esconder decisiones materiales en un prompt. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.
- **RDS-C35-T06:** Limpiar caches y respuestas tardías al cambiar cliente/proyecto/logout y mantener tokens de servicio fuera del browser. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.
- **RDS-C35-T07:** Probar registro/login, tenant switch, derechos de descarga, conflicto concurrente, aprobación denegada y recuperación de sesión Anam. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Interfaz humana no significa fingir empleados reales ni mostrar como hecho una propuesta generada.

## Gates previstos, NO ejecutados
- RDS-C35-G01: Cliente cambia workspace durante respuesta tardía y no reaparecen datos del anterior.
- RDS-C35-G02: Un viewer conversa con el avatar pero sigue sin aprobar ni acceder a originales restringidos.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
