# RDS-C16 · Proveedores opcionales: X, Pinterest y Buffer

**DESIGN_ONLY · NOT_STARTED · 16/42.** Fuente [docs/campaigns/16-proveedores-opcionales-x-pinterest-y-buffer.md](../../../campaigns/16-proveedores-opcionales-x-pinterest-y-buffer.md).

## Resultado y límites
Ampliar solo capacidades demostradas y con condiciones comerciales verificadas.

**Invariante:** La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.. **Dependencias:** RDS-C15.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/adapters/optional/`, `docs/providers/optional.md`, `tests/contracts/optional/`.
- Presente en el repositorio hoy: ninguna; la campaña no está implementada.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/contracts/optional/` y `tests/fixtures/c16/`.
- Evidencia: `docs/evidence/c016/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/adapters/optional/`, `docs/providers/optional.md`, `tests/contracts/optional/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 016.01 — RDS-C16-T01

**Acción:** Priorizar provider según contrato de cliente y evidencias; dejar los no investigados disabled.

**Superficie:** `src/adapters/optional/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/optional/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.

**Verificación:** caso `RDS-C16-T01` sobre `tests/contracts/optional/`; evidencia `docs/evidence/c016/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C15-T07.

### 016.02 — RDS-C16-T02

**Acción:** Para X verificar pay-per-use, permisos, cuota, hard limit y fuente de tarifa antes de habilitar lectura pagada.

**Superficie:** `docs/providers/optional.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/optional/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.

**Verificación:** caso `RDS-C16-T02` sobre `tests/contracts/optional/`; evidencia `docs/evidence/c016/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C16-T01.

### 016.03 — RDS-C16-T03

**Acción:** Para Pinterest realizar investigación primaria y discovery propios; no reutilizar DTO de Instagram.

**Superficie:** `tests/contracts/optional/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/optional/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.

**Verificación:** caso `RDS-C16-T03` sobre `tests/contracts/optional/`; evidencia `docs/evidence/c016/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C16-T02.

### 016.04 — RDS-C16-T04

**Acción:** Para Buffer inspeccionar API actual/entitlement y limitar superficie a rutas nominadas que realmente existan.

**Superficie:** `src/adapters/optional/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/optional/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.

**Verificación:** caso `RDS-C16-T04` sobre `tests/contracts/optional/`; evidencia `docs/evidence/c016/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C16-T03.

### 016.05 — RDS-C16-T05

**Acción:** Normalizar publicación/analytics por capability, manteniendo métricas y derechos de cada canal separados.

**Superficie:** `docs/providers/optional.md`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/optional/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.

**Verificación:** caso `RDS-C16-T05` sobre `tests/contracts/optional/`; evidencia `docs/evidence/c016/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C16-T04.

### 016.06 — RDS-C16-T06

**Acción:** Conservar rutas no soportadas como unavailable y no pagar ni activar trial para completar un gate.

**Superficie:** `tests/contracts/optional/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/optional/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.

**Verificación:** caso `RDS-C16-T06` sobre `tests/contracts/optional/`; evidencia `docs/evidence/c016/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C16-T05.

### 016.07 — RDS-C16-T07

**Acción:** Probar ledger agotado, API no incluida en plan, error por producto y replay de un backend con outcome incierto.

**Superficie:** `src/adapters/optional/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/optional/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: La lista de canales no es una matriz de capacidades habilitadas; uso comercial requiere revisión propia.

**Verificación:** caso `RDS-C16-T07` sobre `tests/contracts/optional/`; evidencia `docs/evidence/c016/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C16-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C16-G01 / NOT_EXECUTED:** Un plan sin acceso a analytics devuelve unsupported sin fabricar ceros. **Caso:** `RDS-C16-G01` en `tests/contracts/optional/`. **Evidencia:** `docs/evidence/c016/g01.json`.
- **RDS-C16-G02 / NOT_EXECUTED:** Operación pagada sin reserva o tarifa revisada se deniega antes de HTTP. **Caso:** `RDS-C16-G02` en `tests/contracts/optional/`. **Evidencia:** `docs/evidence/c016/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
