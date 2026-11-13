# Léxico canónico y Redes — v0.1 conceptual

## Identidad/causalidad
tenantId empresa verificada, distinto de socialAccountId, brandId, actorId, owner, sub. Padre mantiene agentes canónicos; twin vinculado no es identidad soberana. Task ≠ SOP ≠ Action ≠ Approval ≠ Event. correlationId workflow; causationId evento anterior; eventId evento nuevo; traceId/spanId técnicos; requestId entrada; idempotencyKey efecto; providerJobId y providerPostId externos. Supabase JWT + membresía + recurso verificados; external_standalone es modo portal, no IdP separado.

## Entidades propuestas
SocialAccountBinding = cuenta/canal con permisos y tenant; BrandProfile = identidad/tone y reglas; ContentBrief = objetivo y fuentes; ContentVariant = versión por canal/idioma; MediaAsset = archivo con procedencia y derechos; RightsCheck = revisión de licencia, no titularidad garantizada; EditorialCalendarEntry = intención con zona IANA; PublicationIntent = efecto propuesto; PublicationApproval = permiso de versión exacta/canal/horario; ProviderJob = operación del adaptador; ProviderReceipt = acuse, no publicación efectiva; PublishedPost = publicación verificada por fuente; SocialConversation = hilo social; ModerationProposal = propuesta, no borrado; ListeningObservation = mención con alcance autorizado; MetricSnapshot = valor/denominador/periodo/frescura; AttributionFinding = inferencia con incertidumbre; SuppressionEntry = restricción de contacto.

## Distinciones
drafted ≠ approved ≠ scheduled ≠ providerAccepted ≠ published; jobQueued ≠ posted; commentSeen ≠ consentToCRM; contentLicensed ≠ platformPermitted; metricEstimated ≠ platformMeasured; socialHandle ≠ verifiedCustomerIdentity; calendarTime ≠ executionTime; deletedLocally ≠ deletedRemotely. Una aprobación se invalida si cambia payload, canal, cuenta, destinatario, fecha o asset relevante.
