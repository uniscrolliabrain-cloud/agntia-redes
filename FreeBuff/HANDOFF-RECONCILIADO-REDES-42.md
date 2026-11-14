# Handoff Freebuff reconciliado — Redes, fábrica integral 42 campañas

**2026-11-14 · PLAN NO EJECUTADO.** PR #1 (`a9cbd4a8ee82d3affdacb17d6078887dc749b2fd`) y #2 (`8136b1455345d240d5f39a12f997cb3fec2061cb`) fusionaron factory prep y programa de 42 campañas. Fuente principal `docs/campaigns/campaign.json` y `docs/execution-program/campaigns/001..042/CAMPAIGN.md`; 294 tareas/84 gates; DOCUMENTATION_ONLY, NOT_STARTED según manifiesto. **No sustituir por un MVP o una vertical**.

## Orden de lectura y precedencia

`docs/prep/README.md`, `docs/factory/00-README.md` y 01–06, `docs/01-producto-y-limites.md`, `docs/architecture/04-twins-supabase-y-trazabilidad.md`, restantes arquitectura/contratos, `docs/campaigns/campaign.json` y sus 42 originales, `docs/implementation/`, `docs/execution-program/00-ESTADO-REAL-DEL-REPO.md` → 01–04 → `HANDOFF-GLOBAL-FREEBUFF.md` → las 42 `CAMPAIGN.md` íntegras. No alterar contratos originales sin ADR y pruebas.

## Scaffolding completo que debe resultar

TS/pnpm/Hono, JWT Supabase verificado y membership, Postgres RLS, Zod, AuthorityMap, twins de agentes canónicos del padre, FSM editorial, Content Passport/derechos, WorkOrders, calendarios, OAuth y credenciales, puertos/adaptadores Postiz/Mastodon/Bluesky/Meta/LinkedIn/YouTube/TikTok y opcionales X/Pinterest/Buffer, outbox/leases/reconciliación, inbox/moderación, métricas/atribución, Anam visio, SDK/MCP, portal SaaS, E2E dos tenants, empaquetado y gates. No instalar proveedores ni conectar cuentas reales sin autorización. **Solapamiento de funcionalidades entre especialistas permitido; un executor por efecto externo.**

## Índice de ejecución original, no sustitutivo

- **RDS-C01** Baseline, alcance y cotejo del padre · depende ninguna · documento `docs/execution-program/campaigns/001/CAMPAIGN.md`.
- **RDS-C02** Arquitectura de empresa SaaS y acuerdos de servicio · depende RDS-C01 · documento `docs/execution-program/campaigns/002/CAMPAIGN.md`.
- **RDS-C03** Identidad, tenancy y capacidades del servicio · depende RDS-C02 · documento `docs/execution-program/campaigns/003/CAMPAIGN.md`.
- **RDS-C04** Contratos versionados de dominio y errores · depende RDS-C03 · documento `docs/execution-program/campaigns/004/CAMPAIGN.md`.
- **RDS-C05** Persistencia, auditoría y migraciones · depende RDS-C04 · documento `docs/execution-program/campaigns/005/CAMPAIGN.md`.
- **RDS-C06** Licencias, catálogo comercial y discovery de capacidades · depende RDS-C05 · documento `docs/execution-program/campaigns/006/CAMPAIGN.md`.
- **RDS-C07** Conexión OAuth y ciclo de credenciales · depende RDS-C06 · documento `docs/execution-program/campaigns/007/CAMPAIGN.md`.
- **RDS-C08** Transporte robusto y puertos de proveedor · depende RDS-C07 · documento `docs/execution-program/campaigns/008/CAMPAIGN.md`.
- **RDS-C09** Adaptador Postiz o backend social elegido · depende RDS-C08 · documento `docs/execution-program/campaigns/009/CAMPAIGN.md`.
- **RDS-C10** Adaptador Mastodon de referencia · depende RDS-C09 · documento `docs/execution-program/campaigns/010/CAMPAIGN.md`.
- **RDS-C11** Adaptador Bluesky y referencias de registro · depende RDS-C10 · documento `docs/execution-program/campaigns/011/CAMPAIGN.md`.
- **RDS-C12** Meta: Instagram, Facebook y Threads por capacidad · depende RDS-C11 · documento `docs/execution-program/campaigns/012/CAMPAIGN.md`.
- **RDS-C13** LinkedIn y ciclo de versiones · depende RDS-C12 · documento `docs/execution-program/campaigns/013/CAMPAIGN.md`.
- **RDS-C14** YouTube y procesamiento de vídeo · depende RDS-C13 · documento `docs/execution-program/campaigns/014/CAMPAIGN.md`.
- **RDS-C15** TikTok y consentimiento específico de publicación · depende RDS-C14 · documento `docs/execution-program/campaigns/015/CAMPAIGN.md`.
- **RDS-C16** Proveedores opcionales: X, Pinterest y Buffer · depende RDS-C15 · documento `docs/execution-program/campaigns/016/CAMPAIGN.md`.
- **RDS-C17** Assets, derechos y Content Passport · depende RDS-C16 · documento `docs/execution-program/campaigns/017/CAMPAIGN.md`.
- **RDS-C18** Work orders, briefs y variantes editoriales · depende RDS-C17 · documento `docs/execution-program/campaigns/018/CAMPAIGN.md`.
- **RDS-C19** Máquina de estados y aprobación vinculada · depende RDS-C18 · documento `docs/execution-program/campaigns/019/CAMPAIGN.md`.
- **RDS-C20** Calendario y SOPs del especialista · depende RDS-C19 · documento `docs/execution-program/campaigns/020/CAMPAIGN.md`.
- **RDS-C21** Outbox, workers, leases e inbox durable · depende RDS-C20 · documento `docs/execution-program/campaigns/021/CAMPAIGN.md`.
- **RDS-C22** Presupuesto, entitlements, minutos y facturación del servicio · depende RDS-C21 · documento `docs/execution-program/campaigns/022/CAMPAIGN.md`.
- **RDS-C23** Comandos de publicación y ejecución por canal · depende RDS-C22 · documento `docs/execution-program/campaigns/023/CAMPAIGN.md`.
- **RDS-C24** Reconciliación, edición, retirada y kill switch · depende RDS-C23 · documento `docs/execution-program/campaigns/024/CAMPAIGN.md`.
- **RDS-C25** Ingestión de inbox y webhooks autorizados · depende RDS-C24 · documento `docs/execution-program/campaigns/025/CAMPAIGN.md`.
- **RDS-C26** Atención de comunidad y servicio al cliente · depende RDS-C25 · documento `docs/execution-program/campaigns/026/CAMPAIGN.md`.
- **RDS-C27** Moderación contextual revisable · depende RDS-C26 · documento `docs/execution-program/campaigns/027/CAMPAIGN.md`.
- **RDS-C28** Escucha y contexto de mercado autorizado · depende RDS-C27 · documento `docs/execution-program/campaigns/028/CAMPAIGN.md`.
- **RDS-C29** Modelo de métricas y snapshots semánticos · depende RDS-C28 · documento `docs/execution-program/campaigns/029/CAMPAIGN.md`.
- **RDS-C30** Reportes, atribución e infográficos con evidencia · depende RDS-C29 · documento `docs/execution-program/campaigns/030/CAMPAIGN.md`.
- **RDS-C31** Equipo agéntico especialista y modelos económicos · depende RDS-C30 · documento `docs/execution-program/campaigns/031/CAMPAIGN.md`.
- **RDS-C32** Visión multimodal y QA de piezas · depende RDS-C31 · documento `docs/execution-program/campaigns/032/CAMPAIGN.md`.
- **RDS-C33** Visio Anam como atención del especialista · depende RDS-C32 · documento `docs/execution-program/campaigns/033/CAMPAIGN.md`.
- **RDS-C34** SDK servidor, MCP y API Hono de negocio · depende RDS-C33 · documento `docs/execution-program/campaigns/034/CAMPAIGN.md`.
- **RDS-C35** Portal SaaS, dashboard y área de proyectos · depende RDS-C34 · documento `docs/execution-program/campaigns/035/CAMPAIGN.md`.
- **RDS-C36** Integración preferente con agente y cooperación entre servicios · depende RDS-C35 · documento `docs/execution-program/campaigns/036/CAMPAIGN.md`.
- **RDS-C37** Privacidad, seguridad, legal y derechos del servicio · depende RDS-C36 · documento `docs/execution-program/campaigns/037/CAMPAIGN.md`.
- **RDS-C38** Concurrencia, fallos distribuidos y propiedades · depende RDS-C37 · documento `docs/execution-program/campaigns/038/CAMPAIGN.md`.
- **RDS-C39** Observabilidad, rendimiento y economía del servicio · depende RDS-C38 · documento `docs/execution-program/campaigns/039/CAMPAIGN.md`.
- **RDS-C40** E2E: cliente integrado y cliente externo con especialista en visio · depende RDS-C39 · documento `docs/execution-program/campaigns/040/CAMPAIGN.md`.
- **RDS-C41** Empaquetado, Linux/Windows y operación segura · depende RDS-C40 · documento `docs/execution-program/campaigns/041/CAMPAIGN.md`.
- **RDS-C42** Aceptación de servicio, informe founder y backlog90días · depende RDS-C41 · documento `docs/execution-program/campaigns/042/CAMPAIGN.md`.

## Prompt maestra para Freebuff

> Eres Freebuff Cloud, implementador del **scaffolding completo** de Agntia Redes. La fábrica original de 42 campañas es tu única secuencia ejecutiva, no la reemplaces con un programa genérico. Primero congela HEAD, inventaría código y ramas, lee íntegramente factory, contratos, original manifest, las 42 CAMPAIGN.md y sus 42 campañas fuente. Comprueba CODE_PRESENT/PARTIAL/ABSENT y no confundas documentos con runtime. Ejecuta RDS-C01..C42, cada una con sus 7 tareas, archivos propuestos y 2 gates; antes de cada campaña valida rutas reales, DTO, API, DB/RLS, worker, adapters, UX, tests y rollback. Rama aislada, sin tocar main ni padre. En cada CAMPAIGN.md rellena **Reporte de ejecución de Freebuff** con SHA, PR, diffs, comandos, tests passed/failed/skipped, fixtures, 2 gates, deuda y aprendizaje; evidencia extendida `docs/evidence/cNN/`. Si un proveedor falta, BLOCKED y continuar tareas independientes. Sin publicación, borrado, respuestas, anuncios, gasto ni OAuth reales. Al final crear `docs/execution-evidence/FINAL-FREEBUFF-REPORT.md`, matriz 42×7/84 gates, dos tenants y E2E sandbox, y entregar a Codex y founder.

## Reconciliación de gate conceptual

`docs/factory/00-README.md` define Astra conceptual y reconciliación founder antes de granularizar; `docs/execution-program/HANDOFF-GLOBAL-FREEBUFF.md` ordena ejecutar sin esperar auditoría entre fases. El programa completo ya está granularizado, pero **no está documentada la aprobación del gate conceptual** en esta revisión. No borrar ninguno: si el founder no lo ha validado, detener el inicio de ejecución de código y solicitar aprobación, no improvisar una resolución. Los reportes pueden prepararse en ramas sin efectos.

## Preparación Doppler y padre, posterior

Tras C42 documentar `FreeBuff/DOPPLER-READY.md`: nombres de variables, entornos, permisos, rotación y arranque fail-closed sin valores; `FreeBuff/INTEGRATION-AGENTE-PROPOSAL.md`: SDK, tools, grants, twins, outbox, versiones y rollback sin editar padre. Cierre founder obligatorio.
