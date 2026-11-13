# RDS-C41 — Empaquetado, Linux/Windows y operación segura

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/41-empaquetado-linux-windows-y-operacion-segura.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Hacer instalable el SaaS/middleware en un alcance demostrado, no solo editable.

## Artefactos previstos
- `infra/`
- `docs/operations/`
- `docs/release/artifacts.md`

## Invariante
Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.

## Dependencias y fuentes
Dependencias: RDS-C40. Fuentes: H01, N03. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C41-T01:** Construir paquetes/SDK e imagen API/worker con versiones/digests, SBOM/notices y secretos fuera del contexto. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.
- **RDS-C41-T02:** Probar instalación limpia fuera del checkout en Linux/Windows y registrar arquitecturas no verificadas. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.
- **RDS-C41-T03:** Configurar puertos mínimos, red privada, usuario no root, rootFS read-only, límites y storage/backup con custodia. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.
- **RDS-C41-T04:** Preparar scripts de comprobación sin cambiar políticas globales, resetear usuario o imprimir credenciales. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.
- **RDS-C41-T05:** Verificar hashes y provenance/firmas de artefactos cuando la infraestructura lo permita, sin inventar aprobación. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.
- **RDS-C41-T06:** Entregar runbook de onboarding/rotación/upgrade/stop/restore/rollback preservando efectos inciertos y privacidad actual. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.
- **RDS-C41-T07:** Ejecutar recovery y rollback de laboratorio nuevo con evidencia de scopes/keys, sin borrar datos o recursos de otros proyectos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un paquete o Compose correcto no acredita SaaS productivo, soporte24x7 o licencia comercial revisada.

## Gates previstos, NO ejecutados
- RDS-C41-G01: Instalación limpia ejecuta el alcance del smoke y no importa accidentalmente código del checkout.
- RDS-C41-G02: Rollback conserva DB/audit/keys/receipts y no resucita approvals antiguos o borra volúmenes del usuario.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
