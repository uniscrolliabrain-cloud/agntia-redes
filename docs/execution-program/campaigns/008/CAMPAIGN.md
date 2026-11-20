# RDS-C08 · Transporte robusto y puertos de proveedor

**DESIGN_ONLY · NOT_STARTED · 8/42.** Fuente [docs/campaigns/08-transporte-robusto-y-puertos-de-proveedor.md](../../../campaigns/08-transporte-robusto-y-puertos-de-proveedor.md).

## Resultado y límites
Hacer IO limitado, tipado y observable sin proxy libre ni retry peligroso.

**Invariante:** El código del modelo no determina método, dominio, credencial o retry de escritura.. **Dependencias:** RDS-C07.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/providers/transport.ts`, `src/providers/port.ts`, `tests/contracts/transport.test.ts`.
- Presente en el repositorio hoy: `src/providers/transport.ts`, `src/providers/port.ts`, `tests/contracts/transport.test.ts` (3/3 superficies).
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/contracts/transport.test.ts` y `tests/fixtures/c08/`.
- Evidencia: `docs/evidence/c008/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/providers/transport.ts`, `src/providers/port.ts`, `tests/contracts/transport.test.ts`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 008.01 — RDS-C08-T01

**Acción:** Implementar timeout, pool, body/media limits, content-type, TLS y redirects prohibidos por defecto.

**Superficie:** `src/providers/transport.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/transport.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.

**Verificación:** caso `RDS-C08-T01` sobre `tests/contracts/transport.test.ts`; evidencia `docs/evidence/c008/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C07-T07.

### 008.02 — RDS-C08-T02

**Acción:** Cerrar métodos y rutas por capacidad; denegar URL/headers/contexto suministrados por un agente.

**Superficie:** `src/providers/port.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/transport.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.

**Verificación:** caso `RDS-C08-T02` sobre `tests/contracts/transport.test.ts`; evidencia `docs/evidence/c008/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C08-T01.

### 008.03 — RDS-C08-T03

**Acción:** Validar DNS/IP/puertos y redes privadas explícitas para instancias aprobadas, bloqueando metadata y rebinding.

**Superficie:** `tests/contracts/transport.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/transport.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.

**Verificación:** caso `RDS-C08-T03` sobre `tests/contracts/transport.test.ts`; evidencia `docs/evidence/c008/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C08-T02.

### 008.04 — RDS-C08-T04

**Acción:** Normalizar auth/quota/invalid response/unavailable/timeout con errores sin PII, trace remoto o tokens.

**Superficie:** `src/providers/transport.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/transport.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.

**Verificación:** caso `RDS-C08-T04` sobre `tests/contracts/transport.test.ts`; evidencia `docs/evidence/c008/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C08-T03.

### 008.05 — RDS-C08-T05

**Acción:** Añadir backoff limitado para lecturas/circuit breaker y respetar Retry-After con coste/cuota reservados.

**Superficie:** `src/providers/port.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/transport.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.

**Verificación:** caso `RDS-C08-T05` sobre `tests/contracts/transport.test.ts`; evidencia `docs/evidence/c008/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C08-T04.

### 008.06 — RDS-C08-T06

**Acción:** Prohibir retry ciego de creación; conservar request fingerprint, estados inciertos y correlation IDs.

**Superficie:** `tests/contracts/transport.test.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/transport.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.

**Verificación:** caso `RDS-C08-T06` sobre `tests/contracts/transport.test.ts`; evidencia `docs/evidence/c008/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C08-T05.

### 008.07 — RDS-C08-T07

**Acción:** Probar HTML/oversize/redirect/slow body/429/secretos y fallo tras enviar antes de recibir respuesta.

**Superficie:** `src/providers/transport.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/transport.test.ts`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: El código del modelo no determina método, dominio, credencial o retry de escritura.

**Verificación:** caso `RDS-C08-T07` sobre `tests/contracts/transport.test.ts`; evidencia `docs/evidence/c008/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C08-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C08-G01 / PASS:** Destino metadata o redirect a host no permitido queda bloqueado antes de transferencia. **Caso:** `RDS-C08-G01` en `tests/contracts/transport.test.ts`. **Evidencia:** `docs/evidence/c008/g01.json`.
- **RDS-C08-G02 / PASS:** Timeout después de enviar create produce outcome_unknown y cero reintentos automáticos. **Caso:** `RDS-C08-G02` en `tests/contracts/transport.test.ts`. **Evidencia:** `docs/evidence/c008/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff

**Estado:** IMPLEMENTED_VERIFIED contra proveedor falso; adaptadores reales BLOQUEADOS.
**SHA:** bc293688d95b0ef99bf5b4e91c686d3d1d259b7d
**Archivos y diff:** src/providers/port.ts, src/providers/transport.ts, src/adapters/fake/provider.ts, tests/contracts/transport.test.ts
**Tests/comandos/fixtures:** npx vitest run tests/contracts/transport.test.ts -> 5/5 PASS. Fixtures sintéticas propias; sin cuentas ni APIs reales.
**Gates:**
- Reintentos solo en lecturas; un POST con 503 no se reintenta (PASS).
- Hosts privados, metadata, http plano y fuera de allowlist bloqueados (PASS).
- Respuesta gigante o no-JSON rechazada sin propagar el cuerpo (PASS).
**Incoherencias y decisiones:** redirect: error, timeout por AbortController, tamaño máximo y backoff con Retry-After solo para lecturas idempotentes.
**Deuda y riesgos:** SSRF por DNS rebinding solo mitigado por allowlist; sin circuit breaker ni cuotas por proveedor.
**Aprendizajes para siguientes campañas:** El puerto tipado permite probar toda la cadena de efecto sin tocar APIs reales.

Evidencia extendida: docs/evidence/c008/README.md
