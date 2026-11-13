# RDS-C17 — Assets, derechos y Content Passport

**SCAFFOLD CONCEPTUAL / NOT_STARTED / NOT_EXECUTED.** [Original](../../campaigns/17-assets-derechos-y-content-passport.md). Leer [factory](../../factory/00-README.md), [pipeline](../../factory/01-PIPELINE.md), [léxico](../../factory/02-LEXICO.md), [ADTC](../../factory/03-TRACE-OBSERVABILITY.md), [producto Redes](../../factory/04-PRODUCTO-REDES.md), [contrato transversal](../../architecture/04-twins-supabase-y-trazabilidad.md) y N−1/N/N+1.

## Objetivo
Vincular medio y permiso de uso a la revisión que llegará al proveedor.

## Artefactos previstos
- `src/media/`
- `src/domain/rights.ts`
- `tests/security/media.test.ts`

## Invariante
Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.

## Dependencias y fuentes
Dependencias: RDS-C16. Fuentes: L01, L02. Gate transversal: Apply mandatory_architecture_contract: canonical/twin binding, Supabase JWT, tenant isolation, revocation, native naming and provenance; NOT_EXECUTED

## Tareas originales sin granularizar
- **RDS-C17-T01:** Crear custody refs de originales y derivados con hashes, origen y cadena de transformaciones. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.
- **RDS-C17-T02:** Registrar licencia/territorio/periodo/uso comercial, imagen/voz/música y fuente de cada claim relevante. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.
- **RDS-C17-T03:** Validar MIME/codec/bytes/duración/archivos especiales/bombas antes de previews y uploads. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.
- **RDS-C17-T04:** Diseñar Content Passport versionado y señales de provenance opcionales sin declararlas prueba universal de verdad. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.
- **RDS-C17-T05:** Generar URLs firmadas controladas cuando el proveedor las requiera, sin incluirlas en logs/eventos. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.
- **RDS-C17-T06:** Propagar expiración/restricción/cambio de asset a draft/approval/jobs/exports y modelos que lo consuman. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.
- **RDS-C17-T07:** Probar media sustituida, derechos caducados, SSRF por URL, MIME falso y falta de licencia conocida. **Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Un asset con hash íntegro puede carecer de derechos; la evidencia de ambas cosas es distinta.

## Gates previstos, NO ejecutados
- RDS-C17-G01: Cambiar un frame/archivo después de aprobar bloquea ejecución por asset hash diferente.
- RDS-C17-G02: Derecho temporal vence antes del slot y el calendario exige nueva revisión.

## Después
Meta-auditoría conceptual libre → reconciliación → patchsets/handoffs por campaña Freebuff/Codex/Architect+Founder, tests y evidencias. Rollback: Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.
