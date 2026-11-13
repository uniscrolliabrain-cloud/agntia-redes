# RDS-C13 — LinkedIn y ciclo de versiones

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/13-linkedin-y-ciclo-de-versiones.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Publicar orgánico solo con contrato de acceso/versionado vigente y permisos comprobados.

## Artefactos previstos
- `src/adapters/linkedin/`
- `docs/providers/linkedin.md`
- `tests/contracts/linkedin/`

## Invariante
El permiso de publicar como miembro no concede publicación ni lectura de una empresa.

## Dependencias y fuentes
Dependencias: RDS-C12. Fuentes: A05. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C13-T01:** Verificar versiones soportadas y aviso de retiro202511; fijar headers y contrato actualizado antes de construir. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.
- **RDS-C13-T02:** Distinguir miembros y organizaciones, roles de página y permisos read/write exigidos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.
- **RDS-C13-T03:** Validar tipos de post/media permitidos; no confundir carrousel orgánico con producto patrocinado. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.
- **RDS-C13-T04:** Preparar upload y post como pasos separados con hashes y receipts correlacionados. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.
- **RDS-C13-T05:** Implementar lectura/reconciliación de IDs permitidos y conflictos; no asumir acceso a todo el histórico. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.
- **RDS-C13-T06:** Desactivar sponsored/boost/ads en MVP y mantener revisión humana de contenido/CTA. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.
- **RDS-C13-T07:** Probar versión retirada,403, media inválido, post aceptado sin confirmación y cambio de rol del miembro. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El permiso de publicar como miembro no concede publicación ni lectura de una empresa.

## Gates previstos, NO ejecutados
- RDS-C13-G01: El header/API version ya retirado bloquea la capability y muestra actualización pendiente.
- RDS-C13-G02: Rol de página revocado tras aprobación impide envío en claim.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
