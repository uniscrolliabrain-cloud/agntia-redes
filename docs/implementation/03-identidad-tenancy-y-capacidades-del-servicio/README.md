# RDS-C03 — Identidad, tenancy y capacidades del servicio

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/03-identidad-tenancy-y-capacidades-del-servicio.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Denegar permisos por defecto para humanos, especialistas IA, clientes y partners.

## Artefactos previstos
- `src/auth/principal.ts`
- `src/auth/policy.ts`
- `tests/security/tenancy.test.ts`

## Invariante
Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.

## Dependencias y fuentes
Dependencias: RDS-C02. Fuentes: H01, L01. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C03-T01:** Introducir issuer registry y principal verificado para modo standalone y bridge autenticado del padre. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.
- **RDS-C03-T02:** Mapear tenant padre a workspace cliente con registro explícito, revisión y unicidad, sin fallback default. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.
- **RDS-C03-T03:** Definir capacidades read/propose/review/execute/admin y separación de principal humano y kind=agent. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.
- **RDS-C03-T04:** Revalidar membership, suspensión, scope y revocación en cada request, claim y ejecución de job. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.
- **RDS-C03-T05:** Cerrar trust de headers y argumentos del modelo: rol, cuenta, tenant y delegación solo se derivan de servidor. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.
- **RDS-C03-T06:** Crear fixtures de dos organizaciones cliente y empresa proveedora, con acceso limitado por proyecto/cuenta. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.
- **RDS-C03-T07:** Probar cross-tenant, principal revocado, DB de identidad caída, rol insuficiente y ausencia de integración. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Ninguna personalidad o credencial de admin prestada convierte un agente en humano autorizado.

## Gates previstos, NO ejecutados
- RDS-C03-G01: ClienteA intenta accountBinding deB y recibe404 sin metadatos del otro cliente.
- RDS-C03-G02: Fallo al resolver membresía devuelve indisponible/denegado, nunca owner/default.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
