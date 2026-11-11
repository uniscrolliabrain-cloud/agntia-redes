# Contratos propuestos v1

No son APIs implementadas. TypeScript/Zod/JSON Schema con campos desconocidos rechazados en fronteras, límites explícitos, dinero en céntimos enteros o decimal string normalizado, fechas UTC+offset y zona IANA separada. IDs tenant/actor son opacos compatibles con el padre; UUID interno no se impone al host. External IDs nunca se interpretan como tenant.

## Envelope de operación

```json
{"schemaVersion":1,"operationId":"uuid","tenantId":"server-verified","actorId":"server-verified","actorKind":"agent","capability":"social.draft.propose","correlationId":"uuid","causationId":null,"idempotencyKey":"stable-domain-key","expectedRevision":3,"approvalRef":null,"dryRun":true,"payload":{"draftId":"opaque","accountBindingId":"opaque"}}
```

Identidad/capability/correlación se derivan o verifican en servidor, no se confía en el JSON escrito por un LLM. dryRun nunca crea upload/job remoto ni gasta una API de escritura. Provider quota y paid read budget se declaran por separado para que un preview no haga IO pagado inesperado. Una respuesta tiene status, operationId, local refs, provider receipt refs, payloadHash, policyVersion, warnings, retryable, reconciliationRequired, evidenceRefs y actualScope.

## Entidades mínimas

AccountBinding: tenantId,brandRef,connectionId,provider,remoteAccountId,remoteWorkspaceId?,accountType,credentialRef,revision,state,lastVerifiedAt. CredentialRef nunca se serializa al browser/LLM; scope público es mínimo. CapabilityReport: accountBindingId,providerVersion,documented/observed status por operación, probes permitidos, verifiedAt,expiresAt,reviewState,errorCodes. supported_documented no equivale a enabled_runtime.

ContentVariant: tenantId,draftId,revision,locale,channelFormat,text,assetRefs,altText,CTA/linkRefs,claims/evidenceRefs,brandPolicyRef,rightsRef,syntheticDisclosure,paidPartnershipDisclosure,intendedVisibility. La ausencia de disclosure no se interpreta automáticamente como incumplimiento o permiso: depende de hechos y política revisados.

ApprovalBinding: nativeApprovalId,tenantId,accountBindingId,payloadHash,rightsHash,policyHash,slotHash,costCeiling,expectedRevision,signerRefs,signerKinds,issuedAt,expiresAt,revocationVersion,verificationReceiptRef. Ninguna firma de modelo puede reemplazar las humanas exigidas. ApprovalVerifier obtiene prueba de servidor confiable, no de un campo client-approved=true.

PublicationIntent: intentId,tenantId,variantRef,accountBindingId,operationKey,scheduleAuthority,notBefore,notAfter,localTime,timezone,tzdataVersion,state,revision,attemptCount,leaseFence,budgetReservationRef,approvalBindingRef. ProviderAttempt separa requestFingerprint,remoteUploadId,remoteJobId,remotePostId,status,attemptStartedAt,responseReceivedAt,errorCategory,cleanupState. No persistir bearer tokens ni respuestas remotas completas por defecto.

MetricObservation: provider/account/post/metric identifier, definitionVersion,unit,aggregation,windowStart/windowEnd,observedAt,sourceEventAt?,valueDecimal|null,coverage,revision,sourceHash,paidOrOrganic,attributionBasis. missing,zero,not_supported,stale son diferentes; los ratios conservan numerador y denominador. ReportSnapshot liga esos registros y sus filtros, no recalcula histórico silenciosamente.

## Rutas nominadas a implementar

GET /v1/social/accounts y /accounts/{id}/capabilities; POST /connections/oauth/start y callback solo backend con state/PKCE; POST /briefs; POST /drafts y /drafts/{id}/variants; POST /publication-previews; POST /publication-intents; GET /publication-intents/{id}; POST /publication-intents/{id}/cancel y /reconcile; GET /calendar; GET /inbox/threads; POST /reply-proposals; POST /moderation-proposals; GET /metrics; POST /reports; GET /reports/{id}; GET /outbox y POST /outbox/{id}/ack. Revisiones/aprobaciones de efecto se exponen solo al humano/backend autorizado mediante puerto de approval verificable. No existe POST /provider/{method}, /http, /shell o /execute-anything.

El commit de intent exige idempotency key, revisión y approval vinculada cuando aplique. Repetir mismo key/payload retorna el mismo intent; distinto payload da409. Un resultado remoto incierto no se devuelve como retryable de escritura. Lecturas tienen backoff limitado;429 respeta Retry-After y budget. Imports largos responden202 con job scoping; no mantener Hono30 segundos a la espera de toda la ingesta.

Errores uniformes:400/422 input o negocio;401 auth;403 capacidad;404 recurso ajeno/inexistente;409 revisión/idempotencia;424 capacidad/dependencia ausente;429 cuota/capacidad;502 remoto inválido;503 indisponible;504 timeout. code,message,correlationId,retryable,reconciliationRequired sin traceback, DSN o payload sensible. Estado publication_outcome_unknown prevalece sobre una invitación a reintentar.

## Eventos

Envelope interno schemaVersion=1, domainEventId,tenantId,actorRef mínimo,occurredAt,correlationId,causationId,type,payload con refs. Tipos de dominio social.draft.proposed,approval.required,publication.scheduled,publication.confirmed,publication.outcome_unknown,inbox.received,moderation.review_required,metrics.observed,connection.degraded,budget.blocked. Son propuesta de este servicio, no enum vigente del padre. Outbox/consumer inbox+effect+receipt transaccionales, entrega at-least-once y ACK posterior al commit receptor. Sin PII, texto de DM, tokens o URLs firmadas en el bus.

## Catálogo agéntico inicial

social_account_health, social_calendar_read, social_publication_status, social_report_read, social_draft_propose, social_reply_propose, social_explain_block. Contexto de cuenta/tenant/scopes se resuelve fuera del input del modelo. Propuestas no envían mensajes ni publican. Approve, change_budget, connect_credentials, delete_remote, bulk_publish y admin_provider quedan fuera del catálogo inicial. Herramientas MCP son solo otra interfaz del mismo PEP; instalar un servidor MCP externo no le concede permisos empresariales.

## Contratos comerciales y de presencia

ServiceAgreement vincula providerOrgId/customerOrgId/customerWorkspace, modo integrated o standalone, entitlements, alcance, roles, datos/DPA/retención, precio/usage y responsables reales. WorkOrder incluye proyecto, objetivo, entregables, fuentes, fecha, budget mandate y quién acepta cada cosa. ComercialAccepted, EditorialApproved y DeliverableAccepted son hechos separados y referenciados; no se sustituyen entre sí.

AdvisorSession incluye sessionId/customerWorkspace/projectId/principalRef/personaRef/allowedCapabilities, permission/recording policy refs, maximumDuration/concurrency/budgetReservationRef, created/expires/revoked, model configuration version y usage status. API key nunca sale del backend; el browser puede recibir solo un token de sesión breve y no lo publica a logs. Mensajes y callbacks no prueban identidad humana ni firma. Cualquier autorización futura por voz requiere un contrato/step-up verificado; MVP confirma en UI autenticada.

Rutas de negocio adicionales propuestas: POST /service-agreements/proposals; GET /service-agreements/{id}; POST /work-orders; GET /deliverables/{id}; POST /change-requests; POST /advisor-sessions; POST /advisor-sessions/{id}/close; GET /service-usage. Aceptación/cobro se delegan a operadores/puertos autorizados, no a una tool libre. BFF standalone y bridge de agente usan el mismo PEP con issuer/bindings verificados.
