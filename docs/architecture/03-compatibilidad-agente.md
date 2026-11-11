# Compatibilidad: observación de código y puente propuesto

**Decisión vigente del propietario (11-11-2026):** agentes canónicos en `/agente`, twins vinculados en los servicios y JWT de Supabase obligatorio en todos los modos. «Standalone» describe el acceso del cliente al portal, no una identidad agéntica independiente. Esta decisión sustituye las formulaciones anteriores sobre IdP/equipo propio. Aplicar nomenclatura nativa, membresías verificadas, aislamiento de datos/jobs y procedencia: [contrato transversal](04-twins-supabase-y-trazabilidad.md). Diseño pendiente de implementación y pruebas.

Snapshot padre: uniscrolliabrain-cloud/agente main **54b8d5407a8576459448c4d059a877297d18ca7a**. Lectura selectiva de12 archivos, no auditoría completa de sus3125 entradas ni ejecución de tests. El árbol consultado no se truncó. AGENTS.md raíz devolvió404: no se inventan sus instrucciones ni se extrapola ausencia a subdirectorios. Antes de implementar hay que repetir el cotejo y leer instrucciones aplicables del checkout real.

| Archivo observado en ese SHA | Hecho acotado | Consecuencia de diseño |
|---|---|---|
| package.json | Monorepo TS, Hono, Zod, pnpm11.19.0; Node>=22.6.0 declarado | Proponer SDK TS servidor, Hono y compatibilidad Node22/24 a probar, no copiar scripts por fe |
| apps/server/src/tenant-principal.ts | TenantPrincipal incluye tenantId,owner,actor,requestId,source; modos legacy acotados | Requerir principal verificado, no aceptar legacy-default en integración multiempresa |
| apps/server/src/engine/authz/pdp.ts | Contexto con actor y tenant; decisiones deny-overrides y rol real de agente | Resolver capabilities en host y middleware, nunca por nombre de avatar |
| packages/domain/src/policy-context.ts | Existe también PolicyContext con campos distintos, schema de reacción | No confundir los dos tipos con el mismo nombre; crear DTO explícito y validado |
| apps/server/src/engine/authz/with-write.ts | Wrapper de policy/put/CAS opcional; audit/history dependen de configuración | No asumir transacción cross-service o auditoría obligatoria ya resueltas por él |
| packages/integrations/src/stubs/social.ts | list/publish/delete siempre lanzan503, no importado al runtime | No hay conector real que solo necesite un API key; adaptarlo requiere nueva integración |
| packages/integrations/src/vault.ts | Envelopes AES-GCM de credenciales con formato propio | Mantener referencias y custodia del host; no replicar su key en navegador o modelo |
| apps/server/src/engine/assignments/adapters/approval-adapter.ts | Mapea estados y hash de ActionProposal a Assignment | Es una proyección; signedAt usa createdAt del record, no prueba individual de firma reciente |
| packages/domain/src/actions.ts |16 verbos; Publish existe y hay pares prohibidos | Declarar capacidad social nominada; Publish no es autorización general de red |
| apps/server/src/engine/events/types.ts | SystemEvent schemaVersion literal1.0, owner/tenantId; tipos sociales existentes | No enviar un envelope inventado esperando aceptación automática |
| apps/server/src/engine/events/bus.ts | emit devuelve persisted/delivered/error; dedupe opcional acotado en tiempo | Exigir persisted=true para ACK puente y dedup durable propio; delivered no es recibo del proveedor |
| apps/server/src/engine/sop-triggers.ts | Parser de cron UTC con varias frecuencias incl. mensual1–28 | No crear segundo scheduler empresarial ni suponer TZ/DST local soportado por ese parser |

Referencias exactas y blob SHAs están en [parent-source-map.json](../research/parent-source-map.json). No se copian credenciales o dumps de datos del padre.

## Puente propuesto

HostPrincipalBridge deriva del contexto autenticado tenantId/actorId/actorKind/owner/capabilities/requestId. Los argumentos del modelo no suministran esos campos. Se emite credencial de servicio acotada al dominio, audiencia, tenant y capacidades; la forma concreta de firma/JWKS/mTLS se decide y prueba contra el host. Una cabecera tenant-id sin autenticación no acredita pertenencia. La aprobación debe verificarse contra registro nativo de host y snapshot íntegro del payload; la proyección Assignment no fabrica un permiso.

EventBridge consume outbox propio con schemaVersion interno versionado. Traduce solo a los tipos parent existentes post.composed, post.scheduled, post.published y post.metrics.collected después de cotejar sus payload schemas. Para failure/unknown usar action.outcome_unknown u otro contrato realmente admitido, o proponer una ampliación del registry. No renombrar dinámicamente un evento para saltarse el registro. El bridge conserva domainEventId y receipt durable para dedup más allá del TTL de ruido del bus.

La interfaz SocialClient existente es demasiado amplia para aprobar por sí sola: network/text/mediaUrls no vincula tenant, account, derechos, payload hash, ventana, coste o approval. No implementar publish llamando directamente a un proveedor con esos tres campos. Proponer un nuevo adaptador de negocio a intents aprobados, dejando el stub honesto si falta el bridge. Los media URLs arbitrarios son una frontera SSRF: usar asset refs de custodia y URLs firmadas controladas solo cuando el proveedor las requiera.

## Wiring y gates

Primero consumidor sintético y tests contractuales host↔SDK↔middleware con dos tenants y personas/agentes. Después patchset escrito para host con rutas exactas, schemas y flags. Solo aplicar allí tras autorización expresa. No ejecutar suite, seeders o migraciones del padre para completar la documentación actual. Ausencia de parent deployment/key/approval service produce unsupported/blocked, no owner fallback. Los event enums y archivos presentes no demuestran que todos sus módulos estén activados en producción.
