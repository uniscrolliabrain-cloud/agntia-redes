# Contratos y puertos — Redes

Fuentes: `docs/contracts/01-contratos.md`, `docs/architecture/01-arquitectura-y-dominios.md`, `docs/architecture/02-runtime-y-publicacion.md`, `docs/architecture/03-compatibilidad-agente.md`, `docs/architecture/04-twins-supabase-y-trazabilidad.md`.

JWT Supabase+membership+resource scopes y actor originTenant/targetTenant separados. Mandato/twin vinculado a padre; AuthorityMap único por cuenta y efecto. SocialPostIntent incluye versión, canal, destinatario, asset hashes, policyVersion, aprobación y presupuesto; outbox durable con idempotencia y reconciliación de resultados inciertos. OAuth y permisos por provider verificados con capability discovery y límites reales. Datos de plataformas/webhooks no confiables, validar firmas, dedupe y sanitización. Retención, derechos de imagen, consentimientos, moderación y no fuga cross-tenant. No asumir que HTTP 200 prueba publicación visible ni que un sandbox es producción.
