# Campaña maestra ·42 campañas de implementación

**Decisión vigente del propietario (11-11-2026):** agentes canónicos en `/agente`, twins vinculados en los servicios y JWT de Supabase obligatorio en todos los modos. «Standalone» describe el acceso del cliente al portal, no una identidad agéntica independiente. Esta decisión sustituye las formulaciones anteriores sobre IdP/equipo propio. Aplicar nomenclatura nativa, membresías verificadas, aislamiento de datos/jobs y procedencia: [contrato transversal](../architecture/04-twins-supabase-y-trazabilidad.md). Diseño pendiente de implementación y pruebas.

Estado: todas NOT_STARTED;294 tareas y84 escenarios NOT_EXECUTED. Solo diseño documental. El servicio es una empresa SaaS propia con portal/especialistas/visio Anam y clientes externos; agente es integración preferente, no requisito. Duplicar capacidades es válido con autoridad por encargo.

## Disciplina

Una rama/PR pequeña por campaña al implementar; baseline y tests ejecutados, diffs y SHAs, registros de fallos/skips y rollback. No pasar gates críticos por documentación ni habilitar IO dependiente de una revisión pendiente. El plazo se estima tras baseline/entitlements, no42 campañas=7días. Checkpoint tras C05,C10,C15,C20,C25,C30,C35,C40 yC42. Incluir reporte en docs/implementation/cXX/ con EVIDENCE/TESTS/RISKS y próximo paso.

El plan es secuencial para compatibilidad; tracks independientes pueden investigarse o prepararse sin declarar cerradas sus dependencias. Cambios de alcance requieren ADR y pruebas de regresión. No modificar padre/hermanos, comprar servicios, contactar terceros, publicar o desplegar sin autorización correspondiente.

## Índice

- [RDS-C01 · Baseline, alcance y cotejo del padre](01-baseline-alcance-y-cotejo-del-padre.md)
- [RDS-C02 · Arquitectura de empresa SaaS y acuerdos de servicio](02-arquitectura-de-empresa-saas-y-acuerdos-de-servicio.md)
- [RDS-C03 · Identidad, tenancy y capacidades del servicio](03-identidad-tenancy-y-capacidades-del-servicio.md)
- [RDS-C04 · Contratos versionados de dominio y errores](04-contratos-versionados-de-dominio-y-errores.md)
- [RDS-C05 · Persistencia, auditoría y migraciones](05-persistencia-auditoria-y-migraciones.md)
- [RDS-C06 · Licencias, catálogo comercial y discovery de capacidades](06-licencias-catalogo-comercial-y-discovery-de-capacidades.md)
- [RDS-C07 · Conexión OAuth y ciclo de credenciales](07-conexion-oauth-y-ciclo-de-credenciales.md)
- [RDS-C08 · Transporte robusto y puertos de proveedor](08-transporte-robusto-y-puertos-de-proveedor.md)
- [RDS-C09 · Adaptador Postiz o backend social elegido](09-adaptador-postiz-o-backend-social-elegido.md)
- [RDS-C10 · Adaptador Mastodon de referencia](10-adaptador-mastodon-de-referencia.md)
- [RDS-C11 · Adaptador Bluesky y referencias de registro](11-adaptador-bluesky-y-referencias-de-registro.md)
- [RDS-C12 · Meta: Instagram, Facebook y Threads por capacidad](12-meta-instagram-facebook-y-threads-por-capacidad.md)
- [RDS-C13 · LinkedIn y ciclo de versiones](13-linkedin-y-ciclo-de-versiones.md)
- [RDS-C14 · YouTube y procesamiento de vídeo](14-youtube-y-procesamiento-de-video.md)
- [RDS-C15 · TikTok y consentimiento específico de publicación](15-tiktok-y-consentimiento-especifico-de-publicacion.md)
- [RDS-C16 · Proveedores opcionales: X, Pinterest y Buffer](16-proveedores-opcionales-x-pinterest-y-buffer.md)
- [RDS-C17 · Assets, derechos y Content Passport](17-assets-derechos-y-content-passport.md)
- [RDS-C18 · Work orders, briefs y variantes editoriales](18-work-orders-briefs-y-variantes-editoriales.md)
- [RDS-C19 · Máquina de estados y aprobación vinculada](19-maquina-de-estados-y-aprobacion-vinculada.md)
- [RDS-C20 · Calendario y SOPs del especialista](20-calendario-y-sops-del-especialista.md)
- [RDS-C21 · Outbox, workers, leases e inbox durable](21-outbox-workers-leases-e-inbox-durable.md)
- [RDS-C22 · Presupuesto, entitlements, minutos y facturación del servicio](22-presupuesto-entitlements-minutos-y-facturacion-del-servicio.md)
- [RDS-C23 · Comandos de publicación y ejecución por canal](23-comandos-de-publicacion-y-ejecucion-por-canal.md)
- [RDS-C24 · Reconciliación, edición, retirada y kill switch](24-reconciliacion-edicion-retirada-y-kill-switch.md)
- [RDS-C25 · Ingestión de inbox y webhooks autorizados](25-ingestion-de-inbox-y-webhooks-autorizados.md)
- [RDS-C26 · Atención de comunidad y servicio al cliente](26-atencion-de-comunidad-y-servicio-al-cliente.md)
- [RDS-C27 · Moderación contextual revisable](27-moderacion-contextual-revisable.md)
- [RDS-C28 · Escucha y contexto de mercado autorizado](28-escucha-y-contexto-de-mercado-autorizado.md)
- [RDS-C29 · Modelo de métricas y snapshots semánticos](29-modelo-de-metricas-y-snapshots-semanticos.md)
- [RDS-C30 · Reportes, atribución e infográficos con evidencia](30-reportes-atribucion-e-infograficos-con-evidencia.md)
- [RDS-C31 · Equipo agéntico especialista y modelos económicos](31-equipo-agentico-especialista-y-modelos-economicos.md)
- [RDS-C32 · Visión multimodal y QA de piezas](32-vision-multimodal-y-qa-de-piezas.md)
- [RDS-C33 · Visio Anam como atención del especialista](33-visio-anam-como-atencion-del-especialista.md)
- [RDS-C34 · SDK servidor, MCP y API Hono de negocio](34-sdk-servidor-mcp-y-api-hono-de-negocio.md)
- [RDS-C35 · Portal SaaS, dashboard y área de proyectos](35-portal-saas-dashboard-y-area-de-proyectos.md)
- [RDS-C36 · Integración preferente con agente y cooperación entre servicios](36-integracion-preferente-con-agente-y-cooperacion-entre-servicios.md)
- [RDS-C37 · Privacidad, seguridad, legal y derechos del servicio](37-privacidad-seguridad-legal-y-derechos-del-servicio.md)
- [RDS-C38 · Concurrencia, fallos distribuidos y propiedades](38-concurrencia-fallos-distribuidos-y-propiedades.md)
- [RDS-C39 · Observabilidad, rendimiento y economía del servicio](39-observabilidad-rendimiento-y-economia-del-servicio.md)
- [RDS-C40 · E2E: cliente integrado y cliente externo con especialista en visio](40-e2e-cliente-integrado-y-cliente-externo-con-especialista-en-visio.md)
- [RDS-C41 · Empaquetado, Linux/Windows y operación segura](41-empaquetado-linux-windows-y-operacion-segura.md)
- [RDS-C42 · Aceptación de servicio, informe founder y backlog90días](42-aceptacion-de-servicio-informe-founder-y-backlog90dias.md)

## Definición de terminado futura

Cliente integrado y externo, dos tenants y tres actores; service agreement/work order, brief/assets/derechos, preview/review/approval verificable, scheduling único, receipt confirmado o unknown correctamente conciliado, Anam con scope/coste/privacidad, comunidad y reporte con fuentes. SDK/Hono/portal, seguridad, presupuesto, fallos, restore, instalación y aceptación independientes demostrados. La IA ejecutora conserva explicitamente lo no probado; ni un avatar ni una suite verde equivalen a licencia, dictamen o SLA real.

[Contrato de diseño](../contracts/01-contratos.md), [empresa SaaS](../07-empresa-saas-y-clientes-externos.md), [Anam](../08-visio-anam.md) y [handoff](../release/HANDOFF.md). El JSON contiene estados/dependencias/artefactos y permite continuidad sin inventar avances.
