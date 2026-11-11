# Matriz de proveedores y límites de disponibilidad

Todas las capacidades están **NO VERIFICADAS EN INSTANCIA**. La documentación actual indica posibilidades y restricciones; no prueba scopes, cuenta, región, plan, aprobación de app o resultado real. Discovery genera supported/unsupported/unknown/blocked por cuenta+operación+versión y guarda evidencia con vencimiento. No activar unknown. Leer/publicar/comentar/DM/moderar/analytics son permisos distintos.

| Proveedor/ruta | Evidencia documental relevante | Gate específico |
|---|---|---|
| Postiz self-hosted | [API overview](https://docs.postiz.com/public-api/introduction) documenta integraciones/posts/media/analytics | Verificar edición/API key/cliente→tenant, campos y diferencia remote job vs post. No proxy de tool libre |
| Mixpost | [Repo oficial](https://github.com/inovector/mixpost) describe opciones libre/Pro | Inspeccionar API real instalada; no suponer endpoints o features de otra edición |
| Mastodon | [statuses API](https://docs.joinmastodon.org/methods/statuses/) documenta token write:statuses, idempotency temporal y scheduled status | Allowlist de instancia para evitar SSRF, scopes y versionado; lease local durable más allá del TTL remoto |
| Bluesky/ATProto | Repo oficial observado; portal consultado redirigió sin texto legible | OAuth/PDS/account/DID y record refs requieren auditoría/probe. No copiar recetas antiguas de password a producción |
| Instagram/Facebook/Threads | Guía Meta de publicación devolvió429 en esta investigación | UNKNOWN hasta lectura primaria vigente y prueba de app/cuenta. Distinguir login paths; no fijar un número universal de posts/día |
| LinkedIn | [Posts API202606](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api?view=li-lms-2026-06) exige versión y permisos según cuenta | Header/API lifecycle y acceso real. El aviso consultado retira202511 el16-11-2026; no arrancar el adaptador con ese contrato obsoleto |
| YouTube | [videos.insert](https://developers.google.com/youtube/data/reference/rest/v3/videos/insert) actual muestra scopes, privacidad explícita, procesamiento y cuotas | No reutilizar cuotas antiguas de memoria; fijar referencia vigente, consultar bucket/entitlement y confirmar estado/visibilidad real |
| TikTok | [Direct Post](https://developers.tiktok.com/docs/en/content-posting-api-reference-direct-post) y [guidelines](https://developers.tiktok.com/docs/en/content-sharing-guidelines) distinguen audit y consentimiento de usuario | No prometer publicación pública desde app sin auditar; privacy/creator options y consentimiento específico deben quedar preservados |
| X | [API actual](https://docs.x.com/x-api/introduction) presenta modelo pay-per-use | No tratar como gratis ni instalar billing; habilitar solo con aprobación comercial, tarifa vigente y límites/gasto conciliables |
| Pinterest | No auditoría primaria suficiente de su API en esta entrega | Opcional y bloqueado hasta investigación/review específica, no copiar el adaptador de otra red |
| Buffer | [API actual](https://developers.buffer.com/) y portal público consultados | Discovery/entitlement/precio/operaciones de cuenta por verificar; no afirmar que su API ya no existe basándose en artículos antiguos |

La página YouTube consultada difiere de antiguas recetas de cuotas y restricciones de proyectos sin verificar. El diseño no codifica esos recuerdos como verdad ni traslada la regla de TikTok a YouTube. Se conserva la URL y fecha de consulta y se exige confirmar los campos del contrato en la fase de implementación. Un default de proveedor nunca decide la visibilidad: el payload aprobado debe declararla.

## Puerto de adaptador

Cada implementación expone discoverCapabilities,readAccount,validatePayload,prepareMedia,createDelivery,reconcileDelivery,readMetrics y, solo con autorización,proposeRemoteEdit/proposeRemoteDelete. Métodos de negocio tipados, no ORM/HTTP/path arbitrario. Soportar timeouts, límites de respuesta/media, redirects bloqueados, errores sanitizados, backoff de lectura y claves idempotentes donde existan. No retry automático de escritura ambigua.

Los endpoints/base URLs se configuran por administrador, no por el LLM. Mastodon/PDS/servicios autoalojados requieren controles de hostname/IP/DNS/puertos/TLS, incluidas redes privadas permitidas explícitamente y metadata prohibida. Los uploads por URL requieren custodia/origen aprobado, expiración, MIME/tamaño/codec, protección contra fetch interno y ninguna URL firmada en logs.

## Progresión de pruebas

Fake provider determinista → contrato upstream fijado → laboratorio local autorizado cuando sea posible → cuenta de prueba propia con permisos y consentimiento → observación read-only → efecto aprobado acotado → reconciliación. La imposibilidad de obtener app review bloquea esa capability; no autoriza browser automation, scraping o préstamo de credenciales como bypass. Los canales no disponibles siguen visibles como no disponibles, no «integrados» por aparecer en una lista.
