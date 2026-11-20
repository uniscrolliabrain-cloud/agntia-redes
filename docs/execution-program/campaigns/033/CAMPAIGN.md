# RDS-C33 · Visio Anam como atención del especialista

**DESIGN_ONLY · NOT_STARTED · 33/42.** Fuente [docs/campaigns/33-visio-anam-como-atencion-del-especialista.md](../../../campaigns/33-visio-anam-como-atencion-del-especialista.md).

## Resultado y límites
Dar presencia profesional al SaaS sin exponer secretos ni autoridad de aprobación.

**Invariante:** Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.. **Dependencias:** RDS-C32.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Superficies de la campaña: `src/presence/anam.ts`, `src/sessions/`, `tests/contracts/anam/`.
- Contrato y esquema: `packages/contracts/src/` (compartido; no hay archivo de contrato por campaña).
- API nominada: ninguna; esta campaña no añade ruta HTTP propia y no se crean endpoints ficticios para tareas de investigación o documentales.
- Tests: `tests/contracts/anam/` y `tests/fixtures/c33/`.
- Evidencia: `docs/evidence/c33/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/presence/anam.ts`, `src/sessions/`, `tests/contracts/anam/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 033.01 — RDS-C33-T01

**Acción:** Fijar SDK/contrato/plan/permisos y verificar DPA, residencia/retención, precio y uso comercial reales.

**Superficie:** `src/presence/anam.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/anam/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.

**Verificación:** caso `RDS-C33-T01` sobre `tests/contracts/anam/`; evidencia `docs/evidence/c33/t01.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C32-T07.

### 033.02 — RDS-C33-T02

**Acción:** Crear AdvisorSession vinculada a workspace/proyecto/principal y emitir token breve en backend, sin API key en cliente.

**Superficie:** `src/sessions/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/anam/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.

**Verificación:** caso `RDS-C33-T02` sobre `tests/contracts/anam/`; evidencia `docs/evidence/c33/t02.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C33-T01.

### 033.03 — RDS-C33-T03

**Acción:** Capturar permisos AV y política de grabación/transcripción; no requerir cámara del cliente ni activar captura sola.

**Superficie:** `tests/contracts/anam/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/anam/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.

**Verificación:** caso `RDS-C33-T03` sobre `tests/contracts/anam/`; evidencia `docs/evidence/c33/t03.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C33-T02.

### 033.04 — RDS-C33-T04

**Acción:** Pasar tool callbacks por PEP con firma/nonce/session binding y limitar catálogo a lectura/propuestas autorizadas.

**Superficie:** `src/presence/anam.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/anam/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.

**Verificación:** caso `RDS-C33-T04` sobre `tests/contracts/anam/`; evidencia `docs/evidence/c33/t04.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C33-T03.

### 033.05 — RDS-C33-T05

**Acción:** Groundear afirmaciones críticas en estado/receipts y exigir UI autenticada para aprobación vinculante, no un sí hablado.

**Superficie:** `src/sessions/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/anam/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.

**Verificación:** caso `RDS-C33-T05` sobre `tests/contracts/anam/`; evidencia `docs/evidence/c33/t05.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C33-T04.

### 033.06 — RDS-C33-T06

**Acción:** Cerrar/reconciliar minutos y concurrencia ante pausa/reconexión/corte, con fallback de chat y continuidad durable.

**Superficie:** `tests/contracts/anam/`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/anam/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.

**Verificación:** caso `RDS-C33-T06` sobre `tests/contracts/anam/`; evidencia `docs/evidence/c33/t06.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C33-T05.

### 033.07 — RDS-C33-T07

**Acción:** Probar sesiones de dos clientes, token revocado, replay callback, micrófono denegado, accesibilidad y cierre incierto con budget reservado.

**Superficie:** `src/presence/anam.ts`; contrato Zod compartido en `packages/contracts/src/`; caso nombrado en `tests/contracts/anam/`.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.

**Verificación:** caso `RDS-C33-T07` sobre `tests/contracts/anam/`; evidencia `docs/evidence/c33/t07.json` con SHA, entorno, comando y resultado, más el gate negativo de su campaña. **Depende de:** RDS-C33-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C33-G01 / NOT_EXECUTED:** SesiónA pide contexto del clienteB y ningún frame/transcript/tool recibe esos datos. **Caso:** `RDS-C33-G01` en `tests/contracts/anam/`. **Evidencia:** `docs/evidence/c33/g01.json`.
- **RDS-C33-G02 / NOT_EXECUTED:** La llamada se corta tras crear propuesta: no se publica/repite efecto al reconectar y minutos se concilian. **Caso:** `RDS-C33-G02` en `tests/contracts/anam/`. **Evidencia:** `docs/evidence/c33/g02.json`.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
