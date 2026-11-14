# RDS-C33 · Visio Anam como atención del especialista

**DESIGN_ONLY · NOT_STARTED · 33/42.** Fuente [docs/campaigns/33-visio-anam-como-atencion-del-especialista.md](../../campaigns/33-visio-anam-como-atencion-del-especialista.md).

## Resultado y límites
Dar presencia profesional al SaaS sin exponer secretos ni autoridad de aprobación.

**Invariante:** Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.. **Dependencias:** RDS-C32.

## Archivos y ownership (rutas propuestas; verificar antes de crear)
- Dominio/adapter principal: `packages/presence/src/anam.ts`.
- DTO y esquema: `packages/contracts/src/33.ts` cuando se necesite.
- API nominada: `apps/api/src/routes/33.ts` solo cuando haya operación externa autorizada.
- Tests: `tests/campaigns/033.test.ts` y `tests/fixtures/033/`.
- Evidencia: `docs/evidence/c33/` y **reporte dentro de este mismo documento**.
- Artefactos originales: `src/presence/anam.ts`, `src/sessions/`, `tests/contracts/anam/`. No confundir artefactos documentales con código.

## Patchsets secuenciales
### 033.01 — RDS-C33-T01

**Acción:** Fijar SDK/contrato/plan/permisos y verificar DPA, residencia/retención, precio y uso comercial reales.

**Superficie primaria:** `packages/presence/src/anam.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/33.ts` y test `tests/campaigns/033.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C32-T07.

### 033.02 — RDS-C33-T02

**Acción:** Crear AdvisorSession vinculada a workspace/proyecto/principal y emitir token breve en backend, sin API key en cliente.

**Superficie primaria:** `packages/presence/src/anam.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/33.ts` y test `tests/campaigns/033.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C33-T01.

### 033.03 — RDS-C33-T03

**Acción:** Capturar permisos AV y política de grabación/transcripción; no requerir cámara del cliente ni activar captura sola.

**Superficie primaria:** `packages/presence/src/anam.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/33.ts` y test `tests/campaigns/033.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C33-T02.

### 033.04 — RDS-C33-T04

**Acción:** Pasar tool callbacks por PEP con firma/nonce/session binding y limitar catálogo a lectura/propuestas autorizadas.

**Superficie primaria:** `packages/presence/src/anam.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/33.ts` y test `tests/campaigns/033.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C33-T03.

### 033.05 — RDS-C33-T05

**Acción:** Groundear afirmaciones críticas en estado/receipts y exigir UI autenticada para aprobación vinculante, no un sí hablado.

**Superficie primaria:** `packages/presence/src/anam.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/33.ts` y test `tests/campaigns/033.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C33-T04.

### 033.06 — RDS-C33-T06

**Acción:** Cerrar/reconciliar minutos y concurrencia ante pausa/reconexión/corte, con fallback de chat y continuidad durable.

**Superficie primaria:** `packages/presence/src/anam.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/33.ts` y test `tests/campaigns/033.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C33-T05.

### 033.07 — RDS-C33-T07

**Acción:** Probar sesiones de dos clientes, token revocado, replay callback, micrófono denegado, accesibilidad y cierre incierto con budget reservado.

**Superficie primaria:** `packages/presence/src/anam.ts`; verificar paquetes, imports y exports existentes; DTO `packages/contracts/src/33.ts` y test `tests/campaigns/033.test.ts` cuando correspondan. No crear endpoints ficticios para tareas de investigación.

**Aceptación:** Entregar artefacto verificable para esta acción y evidencia de su resultado; conservar la invariante: Anam es presencia de un agente IA identificado; ni voz realista ni tool call sustituyen identidad humana o permiso.

**Verificación:** fixture positivo, rechazo cross-tenant y sin capability, caso de replay/timeout cuando haya efecto, evidencia SHA/comando/resultado. **Depende de:** RDS-C33-T06.


## Wiring y fronteras
Supabase JWT+membership verificada → tenant/recurso/mandato del twin → Zod DTO → policy/AuthorityMap → preview/hash/revisión/aprobación → RLS+audit+outbox → worker scoped → adapter tipado/capability discovery → receipt y reconciliación → bridge padre. Nunca publicar, borrar, editar o gastar con credenciales reales sin autorización; no reintentar publicaciones de resultado incierto a ciegas. Datos sociales, webhooks y medios son no confiables. Para fase documental marcar NO_APLICA.

## Gates de fallo y aceptación
- **RDS-C33-G01 / NOT_EXECUTED:** SesiónA pide contexto del clienteB y ningún frame/transcript/tool recibe esos datos.
- **RDS-C33-G02 / NOT_EXECUTED:** La llamada se corta tras crear propuesta: no se publica/repite efecto al reconectar y minutos se concilian.

**Bloqueos:** cross_tenant_or_secret; approval_bypass; uncertain_duplicate_external_effect; unbounded_spend; audit_loss.

**Rollback:** Desactivar la capacidad nueva, detener admisión de efectos dependientes y conservar revisiones/auditoría/receipts/unknown y datos de usuario. No borrar recursos remotos o downgrade destructivo; conciliar antes de reanudar.

## Reporte de ejecución de Freebuff (rellenar al terminar esta fase)
**Estado:** PENDING. **SHA:** PENDING. **Archivos y diff:** PENDING. **Tests/comandos/fixtures:** PENDING. **Gates:** PENDING. **Incoherencias y decisiones:** PENDING. **Deuda y riesgos:** PENDING. **Aprendizajes para siguientes campañas:** PENDING. Reportar y continuar autónomamente; Codex audita solo al terminar las 42 fases.
