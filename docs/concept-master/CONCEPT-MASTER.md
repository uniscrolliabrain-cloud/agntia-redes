# AGNTIA REDES — CONCEPT MASTER V1.0
**Fecha:** 2026-11-15 · **Estado:** VISIÓN DE DESTINO / EVOLUTIVO · **Repositorio:** `uniscrolliabrain-cloud/agntia-redes`

> **Visión:** un sistema operativo agéntico de presencia social, comunidades, cultura digital y relaciones públicas distribuidas. Investiga señales, entiende audiencias sin vigilarlas, propone narrativas y contenidos multimedia, coordina calendarios, participa con permiso en conversaciones, protege la reputación y aprende de resultados observables, con trazabilidad completa de cada efecto y una gobernanza humana verificable.

## 0. Contrato de verdad y alcance

Este documento define **lo que queremos construir**, no lo que ya existe. La documentación actual describe un middleware social **solo documental**, con 42 campañas, 294 tareas y 84 escenarios de gate previstos, sin conectores ni publicaciones reales acreditadas. El Concept Master no altera ese estado ni convierte una API documentada en capacidad probada. La visión podrá cambiar en V2 después de investigación, desarrollo y aprendizaje real.

**Leyenda:** [C] patrón establecido; [D] diseño original propuesto; [H] hipótesis de frontera. P0/P1/P2 son horizontes de ejecución, no límites del producto.

**Invariantes:** `agente` conserva los agentes canónicos, LAIA, identidad organizativa, SOPs, approvals y bus. Este servicio conserva especialización social, cuentas, calendario de entregas, contenidos, comunidad y conectores. Los twins vinculados actúan con mandatos y JWT Supabase verificados. Los clientes externos pueden utilizar el portal independiente sin crear una segunda identidad agéntica canónica. `LLM propone; sistema y humanos autorizados disponen`. Los efectos no se ejecutan por lenguaje natural sin políticas y autoridad.

## 1. Tesis de producto

### 1.1 El problema
Las empresas dispersan su identidad entre redes, formatos, comentarios, comunidades y campañas. Los gestores de publicaciones facilitan la programación, pero no garantizan comprensión cultural, coherencia de marca, derechos de uso, atención a clientes, medición comparable o continuidad relacional. Los agentes generativos producen contenido rápidamente, pero pueden inventar hechos, vulnerar licencias, responder a la persona equivocada o confundir la aceptación de un proveedor con una publicación visible.

### 1.2 Resultado final
**Agntia Social Presence & Community OS**:
- entiende la identidad pública de cada marca y sus límites editoriales;
- observa tendencias y conversaciones de fuentes autorizadas, con evidencia y caducidad;
- transforma objetivos en planes editoriales, experimentos y activos multiformato;
- adapta cada pieza a cultura, idioma, accesibilidad y reglas del canal;
- controla derechos, afirmaciones, menciones, patrocinios y transparencia de IA;
- publica y responde mediante efectos nominados, aprobados y reconciliables;
- atiende comunidad y deriva soporte, ventas o crisis al dominio responsable;
- mide atención, conversación, comunidad y negocio sin confundir correlación con causalidad;
- conserva una memoria social de la marca sin crear perfiles invasivos;
- permite al owner supervisar a especialistas y entender por qué ocurre cada acción.

### 1.3 Diez apuestas diferenciales [D]
1. **Social Reality Graph:** grafo temporal de marcas, cuentas, comunidades, conversaciones, temas, señales, contenidos y evidencias, con incertidumbre y acceso.
2. **Cultural Intelligence Radar:** detección de cambios en lenguaje, memes, formatos, temas y sensibilidad cultural con fuentes y revisión.
3. **Brand Voice Compiler:** convierte políticas de Branding en restricciones comprobables de tono, claims, estilo, activos y canales.
4. **Content Provenance Ledger:** de idea a fuente, brief, versión, asset, derechos, aprobación, publicación y resultado.
5. **Community Relationship Graph:** relaciones contextuales basadas en interacciones permitidas, sin fusionar handles con identidades CRM.
6. **Social Effect Ledger:** distingue propuesta, aprobación, programación, upload, aceptación, publicación confirmada, edición y borrado.
7. **Conversation Safety Governor:** limita respuestas, frecuencia, temas sensibles, suplantación y escalado.
8. **Reputation & Crisis Observatory:** señales de riesgo y protocolos de pausa, revisión y respuesta coordinada.
9. **Creative Evolution Laboratory:** experimentos editoriales y aprendizaje sobre contenido, sin comprar engagement ni fabricar interacción.
10. **Cross-Domain Social Brain:** Marketing, Branding, Clientes, Ventas, Comunicación, Vídeo y Diseño colaboran bajo una autoridad por efecto.

## 2. Atlas de referentes, ciencia y tecnología

### 2.1 Plataformas y proveedores a comparar
**Redes de destino:** Instagram, Facebook, WhatsApp Business, Threads, LinkedIn, TikTok, YouTube, X, Pinterest, Reddit, Bluesky, Mastodon, Discord, Telegram y otras comunidades pertinentes. No todas permiten los mismos permisos de lectura, publicación, comentarios, DMs, métricas, edición o borrado. La capacidad depende de modalidad de cuenta, app review, región, API, contrato y políticas vigentes.

**Herramientas de gestión y escucha:** Hootsuite, Sprout Social, Buffer, Later, Metricool, Brandwatch, Meltwater, Talkwalker, Emplifi, Khoros, Agorapulse, SocialBee, Sendible y herramientas nativas de cada red. Son **candidatos de benchmarking**, no una auditoría verificada de todas sus funciones, precios o APIs.

**Herramientas creativas:** Adobe, Canva, Figma, CapCut, DaVinci Resolve, FFmpeg y generadores multimodales, siempre sujetos a licencias, permisos y revisión de derechos. La edición avanzada se delega a los servicios Vídeo y Diseño cuando el WorkOrder lo determine.

### 2.2 Open source y estándares candidatos
- **Postiz:** plataforma de gestión y programación social, backend opcional sujeto a evaluación de versión/licencia. https://github.com/gitroomhq/postiz-app
- **Mixpost:** alternativa de gestión social; revisar licencia y edición. https://github.com/inovector/mixpost
- **Mastodon:** red federada y API, útil para estudiar ActivityPub e idempotencia acotada. https://github.com/mastodon/mastodon
- **ActivityPub (W3C):** protocolo federado de actividades, identidades y objetos. https://www.w3.org/TR/activitypub/
- **AT Protocol:** ecosistema de identidad y datos sociales federados. https://atproto.com/specs
- **FFmpeg:** transformación de medios. https://ffmpeg.org/
- **OpenTelemetry:** trazabilidad distribuida y métricas, sin contenido sensible en eventos. https://opentelemetry.io/
- **OpenSearch:** búsqueda/observabilidad de corpus autorizados, sujeto a ACL. https://github.com/opensearch-project/OpenSearch
- **PostgreSQL/pgvector:** registros transaccionales y búsqueda semántica con autorización aplicada fuera del índice. https://github.com/pgvector/pgvector

**Selección técnica:** adaptadores API o servicios aislados; nunca instalar todas las alternativas por defecto. Registrar licencia por paquete, versión, scopes, coste, restricciones de plataforma, pruebas de sandbox y método de reconciliación. No usar scraping que eluda controles o condiciones.

### 2.3 Ciencia y disciplinas de investigación
- **Social network analysis:** redes de interacción, comunidades, difusión y centralidad con límites de representatividad.
- **Diffusion & contagion models:** cascadas de información, efectos de red y umbrales; hipótesis, no capacidad predictiva garantizada.
- **Causal inference:** distinguir métricas atribuidas, experimentos, lift y resultados económicos.
- **Information retrieval:** recuperación contextual, detección de temas y deduplicación de señales.
- **Computational social science:** sesgos de muestreo, bots, representatividad y efectos de selección.
- **Narrative intelligence:** estructura de relatos, coherencia, resonancia y adaptación intercultural.
- **Multimodal AI:** generación y evaluación de texto, imagen, vídeo y audio, con derechos y procedencia.
- **Human-computer interaction:** moderación, colaboración humano/IA, confianza, fatiga informativa y accesibilidad.
- **Online experimentation:** pruebas de variantes cuando la plataforma y el diseño permiten inferencias válidas.
- **Reputation risk:** detección de anomalías, crisis, campañas coordinadas y desinformación con revisión humana.

La mera detección de un patrón no prueba intención, coordinación ilícita ni causalidad. Una publicación viral no demuestra crecimiento rentable. Los modelos predictivos requieren validación temporal fuera de muestra.

## 3. Mapa de 80 capacidades finales

### A. Identidad pública y estrategia
**SOC01 [C/P0]** Cuentas sociales vinculadas a tenant, marca, proveedor y permisos verificados.
**SOC02 [C/P0]** Briefs y objetivos editoriales versionados.
**SOC03 [D/P1]** Brand Voice Compiler con reglas de identidad, estilo y claims.
**SOC04 [C/P1]** Estrategia de canal, audiencia, formato y frecuencia.
**SOC05 [D/P1]** Social Reality Graph con fuentes, vigencia y procedencia.
**SOC06 [C/P1]** Auditoría de presencia, cuentas, perfiles y activos.
**SOC07 [D/P2]** Simulador de posicionamiento social con escenarios.
**SOC08 [H/P2]** Detección de oportunidades de comunidad emergente.

### B. Inteligencia cultural y listening
**SOC09 [C/P1]** Listening sobre fuentes y endpoints autorizados.
**SOC10 [C/P1]** Seguimiento de temas, menciones y señales de conversación.
**SOC11 [D/P1]** Cultural Intelligence Radar con contexto y caducidad.
**SOC12 [C/P1]** Análisis de tendencias por periodo, canal y geografía permitida.
**SOC13 [D/P1]** Detección de cambios narrativos y controversias con revisión.
**SOC14 [C/P2]** Inteligencia competitiva de contenidos públicos permitidos.
**SOC15 [D/P2]** Radar de comunidades y afinidades sin perfiles sensibles.
**SOC16 [H/P2]** Modelos de evolución cultural con incertidumbre explícita.
**SOC17 [D/P2]** Observatorio de desinformación relacionada con la marca.
**SOC18 [D/P2]** Calidad de fuentes, sesgo de cobertura y falsos positivos.

### C. Creatividad, producción y narrativa
**SOC19 [C/P0]** Borradores de posts, hilos, stories, guiones y respuestas.
**SOC20 [C/P0]** Variantes ES/EN/FR y formatos por canal.
**SOC21 [C/P1]** Assets multimodales, versiones, derechos y accesibilidad.
**SOC22 [C/P1]** Vídeos cortos, clips, subtítulos y adaptación de proporciones.
**SOC23 [D/P1]** Content Provenance Ledger.
**SOC24 [D/P1]** Revisión de afirmaciones, citas, promociones y patrocinios.
**SOC25 [C/P1]** Calendario editorial y series narrativas.
**SOC26 [D/P2]** Creative Evolution Laboratory con hipótesis y resultados.
**SOC27 [D/P2]** Reutilización inteligente de activos sin duplicación abusiva.
**SOC28 [H/P2]** Narrativas interactivas y personajes persistentes con disclosure.
**SOC29 [C/P2]** Localización cultural y adaptación a accesibilidad.
**SOC30 [D/P2]** Biblioteca de patrones creativos aprobados por marca.

### D. Publicación y distribución
**SOC31 [C/P0]** Preview exacto por cuenta, visibilidad, formato y destino.
**SOC32 [C/P0]** Aprobación vinculada a hash, revisión, derechos y ventana.
**SOC33 [C/P1]** Programación con zona IANA, DST y autoridad única.
**SOC34 [C/P1]** Publicación por adaptadores con capability discovery.
**SOC35 [D/P1]** Social Effect Ledger con intents, intentos y receipts.
**SOC36 [C/P1]** Reconciliación de resultados inciertos y parcialidades.
**SOC37 [C/P1]** Edición, retirada y borrado como nuevos efectos autorizados.
**SOC38 [D/P1]** Quotas, rate limits, presupuestos y circuit breakers.
**SOC39 [D/P2]** Planificación cross-channel sin publicación duplicada.
**SOC40 [C/P2]** Distribución de contenido efímero, live y formatos especiales cuando la API lo permita.
**SOC41 [D/P2]** Política de frescura para contenido programado y crisis.
**SOC42 [H/P2]** Optimización de ventanas de publicación basada en evidencia suficiente.

### E. Comunidad, interacción y soporte
**SOC43 [C/P1]** Inbox social con conversaciones y comentarios autorizados.
**SOC44 [C/P1]** Clasificación de intención, consulta, queja, spam y riesgo.
**SOC45 [D/P1]** Conversation Safety Governor y límites de frecuencia.
**SOC46 [C/P1]** Propuestas de respuesta con contexto y fuentes.
**SOC47 [D/P1]** Handoff verificable a Clientes, Ventas o Comunicación.
**SOC48 [C/P1]** Moderación propuesta, revisión y ejecución autorizada.
**SOC49 [D/P2]** Community Relationship Graph con identidad contextual.
**SOC50 [C/P2]** Gestión de comunidades y roles según permisos de plataforma.
**SOC51 [D/P2]** Programas de participación genuina sin engagement artificial.
**SOC52 [D/P2]** Seguimiento de compromisos públicos y respuestas pendientes.
**SOC53 [H/P2]** Identificación de necesidades emergentes de comunidad con validación.
**SOC54 [D/P2]** Protección frente a acoso, suplantación y fraude social.

### F. Reputación y crisis
**SOC55 [C/P1]** Monitor de menciones y anomalías con fuentes.
**SOC56 [D/P1]** Reputation & Crisis Observatory.
**SOC57 [C/P1]** Playbooks de crisis, escalado y aprobaciones reforzadas.
**SOC58 [D/P1]** Kill switch de publicaciones pendientes y reconciliación.
**SOC59 [D/P2]** Coordinación de respuesta con Comunicación y Legal.
**SOC60 [D/P2]** Análisis postincidente, recuperación y memoria.
**SOC61 [H/P2]** Simulación de propagación de crisis con límites de confianza.
**SOC62 [D/P2]** Detección de campañas de suplantación y escalado de seguridad.

### G. Analítica y aprendizaje
**SOC63 [C/P0]** Métricas versionadas con denominador, ventana, cobertura y frescura.
**SOC64 [C/P1]** Alcance, impresiones, interacciones y comunidad según disponibilidad.
**SOC65 [D/P1]** ReportSnapshot reproducible y comparabilidad por canal.
**SOC66 [C/P1]** Análisis de formatos, contenidos, series y cohortes cuando haya datos.
**SOC67 [D/P2]** Learning Ledger de hipótesis editoriales, éxitos y fracasos.
**SOC68 [C/P2]** Experimentos de contenido con diseños adecuados.
**SOC69 [D/P2]** Puente con Marketing para incrementalidad y atribución.
**SOC70 [D/P2]** Puente con Ventas/Finanzas para resultados económicos verificados.
**SOC71 [D/P2]** Quality of Community: utilidad, resolución, recurrencia y confianza.
**SOC72 [H/P2]** Forecast de demanda de atención y capacidad social.

### H. Agentes, experiencia y plataforma
**SOC73 [D/P0]** Twin social especialista bajo agentes canónicos y mandato.
**SOC74 [D/P1]** Social Studio: briefs, assets, calendario, revisión y estado.
**SOC75 [D/P1]** Agent Office: estratega, editor, community manager, analista y revisor.
**SOC76 [D/P1]** Seguridad tenant, ACL, consentimiento y audit.
**SOC77 [D/P1]** WorkOrders, approvals, outbox, idempotencia y receipts.
**SOC78 [D/P2]** LAIA y avatar Anam para dirección, revisiones y briefing.
**SOC79 [D/P2]** Observabilidad y evaluación de trayectorias sin PII en bus.
**SOC80 [H/P2]** Inteligencia social interempresa agregada solo con garantías legales y técnicas.

## 4. Arquitectura de destino: ocho planos

1. **Identity & Account Plane:** tenants, marcas, cuentas, conexiones, scopes, credenciales y mandatos.
2. **Social Intelligence Plane:** observaciones, temas, comunidades, fuentes, evidencias y temporalidad.
3. **Brand & Creative Plane:** políticas, briefs, variantes, activos, licencias, claims y versiones.
4. **Publication Plane:** calendario, approvals, scheduler, outbox, adaptadores, intentos y receipts.
5. **Community Plane:** inbox, identidad contextual, comentarios, respuestas, moderación y handoffs.
6. **Reputation Plane:** riesgos, anomalías, playbooks, crisis, pausas y seguimiento.
7. **Measurement Plane:** métricas, denominadores, experimentos, snapshots y economía.
8. **Agent & Governance Plane:** LAIA, twins, SOPs, policy, ACL, observabilidad y bus.

### 4.1 Pipeline de contenido
`objetivo → investigación con fuentes → brief → propuesta creativa → variantes → validación de derechos/claims → preview exacto → revisión y aprobación → reserva de presupuesto/slot → ejecución nominada → receipt de proveedor → confirmación de publicación → observación de métricas → aprendizaje`.

### 4.2 Pipeline de conversación
`evento autorizado → autenticidad y tenant → identidad de canal → contexto mínimo → clasificación → propuesta → policy/approval → envío o handoff → receipt → resultado → registro de compromiso`.

**Prohibiciones semánticas:** un draft no es un post; un upload no es una publicación; un HTTP 200 no demuestra visibilidad; un comentario no crea un lead consentido; un handle no prueba identidad CRM; un like no prueba venta; una cifra de alcance no demuestra incrementalidad.

### 4.3 Entidades de dominio
`Tenant, Brand, AccountBinding, ProviderCapability, CredentialRef, SocialBrief, BrandPolicySnapshot, TopicSignal, SocialObservation, SourceEvidence, CommunityRef, ContentAsset, AssetRights, ClaimEvidence, ContentVariant, ApprovalBinding, CalendarSlot, PublicationIntent, ProviderAttempt, RemoteObjectLink, PublicationReceipt, InboxEvent, SocialIdentity, ConversationThread, ReplyProposal, ModerationProposal, Handoff, CrisisCase, MetricDefinition, MetricObservation, ReportSnapshot, Experiment, LearningRecord, ServiceAgreement, WorkOrder, TwinBinding, AuditEvent`.

Cada entidad relevante conserva tenant, versión, procedencia, tiempo, ACL y referencias. Identificadores de proveedor son opacos y se vinculan a tenant+connection+account. El texto de mensajes privados y tokens no viaja por el bus. Cada integración declara capacidad DOCUMENTED/OBSERVED/VERIFIED_RUNTIME y caducidad de verificación.

### 4.4 Máquina de estados de publicación
`DRAFT → VALIDATED → REVIEW_PENDING → APPROVED → SCHEDULED → RESERVED → QUEUED → EXECUTING → PROVIDER_ACCEPTED → PUBLISHED_CONFIRMED`.
Alternativas: `BLOCKED, REJECTED, SUPERSEDED, EXPIRED, CANCELLED_BEFORE_SEND, FAILED_BEFORE_SEND, OUTCOME_UNKNOWN, RECONCILIATION_REQUIRED, PARTIAL_SUCCESS, PROVIDER_REJECTED, REMOTE_DELETED`.

Cada intento guarda fingerprint, lease/fence, operation key, remote upload/job/post refs y clasificación de error. Reintentar tras timeout de escritura solo cuando una consulta o evidencia segura descarte efecto duplicado. La cancelación local no borra un post ya visible. Cambiar de backend programador exige reconciliar autoridad anterior. Revalidar aprobación, scopes, derechos, cuenta y kill switch inmediatamente antes del IO.

## 5. Cooperación con el ecosistema AgntiaPro

**Padre `/agente`:** agentes canónicos, LAIA, task planning, SOPs, approvals, bus, organización y gobernanza. **Redes:** especialización social y custodia de sus efectos. El servicio puede atender clientes externos con portal propio, pero no crea identidades de agente alternativas cuando se integra.

- **Branding:** fuente de identidad visual/verbal, tono, assets aprobados y políticas.
- **Marketing:** campañas, estrategia de demanda, experimentos, objetivos y atribución; Redes ejecuta publicaciones cuando sea dueño del efecto.
- **Clientes:** soporte, identidad de clientes, casos y compromisos; Redes deriva consultas, no crea CRM por handle.
- **Comunicación:** reputación corporativa, medios y crisis; ownership explícito de respuestas sensibles.
- **Ventas:** oportunidades y contratos, solo a partir de señales con base jurídica y aceptación.
- **Vídeo/Diseño:** producción de medios y formatos con derechos.
- **Finanzas:** costes, presupuestos y resultados económicos, sin que Redes ejecute pagos.
- **Legal/Ciberseguridad:** propiedad intelectual, transparencia, privacidad, fraude, seguridad de cuentas y suplantación.

**Contrato de handoff:** `WorkOrder → AuthorityMap → propuesta → revisión → approval → effect owner → receipt → ACK → reporte`. Un efecto pertenece a un solo ejecutor; la cooperación no concede permiso implícito. Si Marketing ha programado vía Postiz, Redes no vuelve a programar el mismo objeto localmente.

**Tools nominadas propuestas:** `social.account.health`, `social.brief.read`, `social.trends.research`, `social.draft.propose`, `social.variant.preview`, `social.calendar.read`, `social.publication.status`, `social.inbox.read`, `social.reply.propose`, `social.crisis.explain`, `social.metrics.read`, `social.report.generate`. Publicar, responder, borrar, conectar credenciales, cambiar presupuestos y moderar requieren capabilities y approvals diferenciados, nunca un `execute-anything`.

## 6. Experiencia final

**Owner:** «¿Qué está pasando alrededor de nuestra marca?», «Prepara una semana de contenido a partir de este vídeo», «¿Qué mensajes necesitan respuesta humana?», «¿Qué publicación se confirmó realmente?», «¿Por qué está creciendo esta conversación?», «¿Qué hemos aprendido de las últimas cuatro semanas?».

**Workspaces:** Social Observatory, Cultural Radar, Brand Voice Studio, Creative Lab, Asset & Rights Vault, Editorial Calendar, Publication Control, Community Inbox, Reputation & Crisis Desk, Experiment Lab, Social Economics, Agent Office y Executive Reports.

**Interfaz:** chat + panel estructurado; preview por canal; diffs de contenido; línea de tiempo de aprobaciones; estados de proveedor; gráficas con fuentes y denominadores; mapa de comunidades solo con datos permitidos; crisis con pausa y escalado; revisión de derechos y disclosure; informes reproducibles. Avatar Anam opcional para presentar y conversar, sin simular permisos ni publicaciones. Mostrar fases de trabajo solo cuando correspondan a estados reales del runtime.

## 7. Seguridad, privacidad y responsabilidad

**Cuentas y secretos:** OAuth/PKCE cuando aplique, scopes mínimos, tokens backend, rotación, caducidad, aislamiento por tenant, verificación de webhooks, revocación y reconciliación. **Contenido:** licencias, consentimiento de imagen/voz, derechos de autor, claims verificables, publicidad identificada, contenidos sintéticos cuando corresponda, accesibilidad y políticas de plataforma. **Personas:** RGPD/LOPDGDD, finalidad, minimización, no scraping masivo ni vigilancia personal, no inferencias sensibles, supresión y retención. **IA:** prompt injection en posts, DMs, páginas, archivos y comentarios; contenido recuperado nunca cambia policy. **Efectos:** hash de payload, aprobación humana vinculada, presupuesto, rate limits, outbox, receipts, resultado incierto y kill switch.

**No construir:** compra de seguidores/likes, bots de engagement engañoso, suplantación, spam, manipulación coordinada artificial, scraping evasivo o extracción de DMs no autorizados. No atribuir emociones o intención criminal a usuarios por análisis automatizado. Las decisiones de moderación sensibles se revisan por humanos y las reclamaciones se escalan.

**Normativa de referencia:** RGPD, LOPDGDD, DSA según roles y obligaciones aplicables, AI Act cuando corresponda, propiedad intelectual, publicidad y normativa de consumidores. Las reglas de cada red pueden cambiar y deben revisarse al conectar o ejecutar.

## 8. Evaluación de excelencia

**Capacidad real:** cuenta y permisos comprobados, posts confirmados, duplicados evitados, reconciliaciones completas, ratios de errores y tiempos. **Calidad editorial:** coherencia de marca, exactitud, derechos, accesibilidad, pertinencia y revisión. **Comunidad:** consultas atendidas, escalados correctos, compromisos cumplidos, recurrencia y experiencia. **Reputación:** falsos positivos, detección de crisis, tiempo de revisión y efecto de respuesta. **Medición:** frescura, denominadores, cobertura, comparabilidad y separación de asociación/causalidad. **Economía:** coste por efecto y valor verificado, con fuentes de Finanzas/Ventas. **Seguridad:** cero cruces de tenant, cero publicación sin aprobación, cero duplicación por replay y cero secretos en bus.

**Pruebas adversariales mínimas:**
1. Dos tenants conectan cuentas del mismo proveedor.
2. Un viewer aporta un approval ID válido de otro actor.
3. Se cambia el CTA después de aprobar.
4. Un asset pierde licencia antes de publicar.
5. La plataforma acepta upload pero falla el job final.
6. Timeout después de publicar, con remote ID desconocido.
7. DST produce hora ambigua o inexistente.
8. Postiz y scheduler local intentan ejecutar la misma entrega.
9. Una crisis activa kill switch cuando hay posts en tránsito.
10. Una cuenta revoca scopes durante una cola.
11. Un comentario contiene instrucciones de prompt injection.
12. Una mención intenta suplantar a un cliente.
13. Un mensaje de soporte llega por red social y exige handoff.
14. Una métrica desaparece de la API y no debe convertirse en cero.
15. Un proveedor devuelve 429 y requiere backoff.
16. Una publicación es borrada remotamente tras confirmación.
17. Un post viral no produce ventas verificables.
18. Un avatar pide publicar sin sesión autorizada.

Cada test evalúa **trayectoria y estado final**, no solo texto de salida. Los fakes y fixtures son pruebas locales, no certificación de proveedor real.

## 9. Ruta de convergencia

**G0 — Concept & Research Atlas:** fichas SOC01–SOC80, proveedores, APIs, políticas, licencias, ADRs y fuentes.
**G1 — Identity & Account Foundation:** JWT Supabase, tenants, marcas, OAuth, capability reports y audit.
**G2 — Creative & Rights Core:** briefs, assets, políticas, claims, variantes, previews y aprobación.
**G3 — Publication Runtime:** outbox, scheduler, leases, receipts, reconciliación y primer conector real.
**G4 — Community & Handoffs:** inbox, respuestas, moderación y cooperación con Clientes/Comunicación.
**G5 — Social Intelligence:** listening autorizado, señales, grafo y radar cultural.
**G6 — Reputation & Crisis:** playbooks, escalado, kill switch y observatorio.
**G7 — Measurement & Learning:** métricas versionadas, experimentos, economía y aprendizaje.
**G8 — Agentic Social Office:** especialistas, LAIA, Anam, portal, SOPs y bridge con padre.
**G9 — Reliability & Scale:** pruebas adversariales, observabilidad, seguridad, recuperación y costes.
**G10 — Concept V2:** revisión tras uso real, nuevos estándares y cambios de plataformas.

Las **42 campañas existentes** se preservan. Una futura auditoría mapeará SOCxx→campaña→contrato→módulo→test→gate→fuente. Ninguna campaña documental se marca como implementada por este documento. No desplegar sin autorización del founder.

## 10. Hipótesis abiertas

1. ¿Qué señales culturales son útiles para pymes y cuáles son ruido? [H]
2. ¿Cómo evaluar cambios de narrativa sin atribuir intenciones psicológicas? [H]
3. ¿Qué medición de comunidad refleja valor real y no solo engagement? [H]
4. ¿Cuánto puede generalizarse un experimento de contenido entre redes? [H]
5. ¿Qué combinaciones de adaptadores son sostenibles ante cambios de API? [D]
6. ¿Cómo sincronizar consentimiento entre comunidad, marketing y CRM sin ampliar permisos? [D]
7. ¿Cuándo conviene que el scheduler sea local o remoto? [D]
8. ¿Cómo detectar contenido potencialmente engañoso con tasas aceptables de falsos positivos? [H]
9. ¿Qué evidencia permite afirmar que una publicación está realmente visible? [D]
10. ¿Qué efectos requieren aprobación reforzada por reputación, privacidad o publicidad? [D]
11. ¿Cómo mejorar creatividad sin sobreajustarse a algoritmos opacos? [H]
12. ¿Qué modelos de predicción de crisis son útiles en marcas con poco volumen? [H]

Cada hipótesis se transforma en investigación con protocolo, evidencia, responsable, coste, fecha y decisión. No presentarla como capacidad demostrada.

## 11. Fuentes y límites

### Documentación propia consultada
- [README](../../README.md)
- [Producto y límites](../01-producto-y-limites.md)
- [Runtime y publicación](../architecture/02-runtime-y-publicacion.md)
- [Contratos](../contracts/01-contratos.md)
- [Investigación](../research/01-papers.md)
- [Proveedores](../02-proveedores-y-adaptadores.md)

### Referencias técnicas y normativas
- W3C ActivityPub: https://www.w3.org/TR/activitypub/
- AT Protocol: https://atproto.com/specs
- Mastodon API: https://docs.joinmastodon.org/api/
- Meta Developers: https://developers.facebook.com/docs/
- LinkedIn Marketing Developer Platform: https://learn.microsoft.com/en-us/linkedin/marketing/
- YouTube Data API: https://developers.google.com/youtube/v3
- TikTok for Developers: https://developers.tiktok.com/
- Postiz: https://github.com/gitroomhq/postiz-app
- Mixpost: https://github.com/inovector/mixpost
- OpenTelemetry: https://opentelemetry.io/
- RGPD: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- DSA: https://eur-lex.europa.eu/eli/reg/2022/2065/oj
- AI Act: https://eur-lex.europa.eu/eli/reg/2024/1689/oj

**Límite explícito:** síntesis conceptual amplia basada en documentación propia inspeccionada y referencias técnicas conocidas. No es una auditoría en vivo de cada API, edición, permiso, precio, licencia o estudio científico, ni certifica cumplimiento. Verificar por proveedor y fecha antes de implementación. El documento distingue diseño de ejecución real y conserva incertidumbre.

## 12. Política de evolución

V1.x ampliará investigación, fichas, pruebas y contratos; V2 podrá redefinir el producto a partir de evidencia y tecnología nueva. El Concept Master no se rebaja para justificar el código actual: se registran brechas y se construye hacia el destino. Toda decisión material conserva historia, fuentes y revisión.
