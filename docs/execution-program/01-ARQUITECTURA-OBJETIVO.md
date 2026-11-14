# Arquitectura objetivo — Redes

Servicio TS/pnpm/Hono, Supabase JWT y membresías verificadas, Postgres RLS, contratos Zod, autoridad única por WorkOrder, FSM editorial, assets y derechos, calendario, jobs/outbox con reconciliación, proveedores sociales tipados (Postiz, Mastodon, Bluesky, Meta, LinkedIn, YouTube, TikTok; otros opcionales), inbox, moderación, analítica, SDK, portal y presencia Anam. No instalar todos los proveedores por defecto ni prometer APIs no verificadas. Agentes canónicos en padre; twins aquí bajo mandato verificable.

`JWT+membership → Hono → policy/AuthorityMap → FSM+approval → Postgres RLS+audit+outbox → worker delegado → adapter allowlist → receipts/reconciliation → bridge padre`. Publicación, borrado, ads y envíos reales no autorizados en fase documental.
