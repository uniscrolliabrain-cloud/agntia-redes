# Repositorios públicos y estrategia de adaptación

Las referencias, default branch, commit observado y metadatos de licencia se conservan en [repositories.json](repositories.json). Lectura selectiva de metadatos/README/licencias; no auditoría de árbol completo, instalación, test o revisión jurídica. No se copia código upstream a esta entrega.

| Repositorio | Uso que se evaluaría | Estado de licencia observado | Decisión inicial |
|---|---|---|---|
| gitroomhq/postiz-app | Backend social por API oficial propia | Metadata/README AGPL-3.0 | Candidato opcional; revisar obligaciones/modificaciones/distribución y versión/edición |
| inovector/mixpost | Alternativa social Laravel/PHP | Metadata MIT; README distingue Pro/Enterprise | No atribuir APIs/features Pro al paquete libre; discovery antes de elegir |
| chatwoot/chatwoot | Inbox/atención derivada con clientes | LICENSE separa core MIT y enterprise | Adaptador opcional para casos autorizados, no CRM o scheduler social maestro |
| activepieces/activepieces | Conectores acotados | LICENSE core MIT con exclusiones EE | No entregar workflow engine libre a modelos ni importar carpetas EE sin permiso |
| n8n-io/n8n | Interoperabilidad de automatización | Sustainable Use License y exclusiones EE observadas | Fuente disponible no es permiso universal de SaaS/embedding/MSSP; fuera de base comercial hasta revisión |
| taskforcesh/bullmq | Cola técnica con leases | Metadata MIT | Opcional tras ADR; no instalar además de Temporal sin necesidad y medición |
| temporalio/sdk-typescript | Workflows durables | Metadata MIT del SDK | Evaluar con servicio/licencias/coste real; no es requisito del piloto pequeño |
| bluesky-social/atproto | SDK/protocolo y schemas | Metadata NOASSERTION | Verificar paquetes concretos y OAuth/versiones; no licencia universal de todo el monorepo |
| mastodon/mastodon | Servidor de laboratorio federado/API | Metadata AGPL-3.0 | Fixture local posible; no requiere hospedar una red real para usar su API autorizada |
| contentauth/c2pa-rs | Verificación de provenance de medios | Metadata NOASSERTION | Investigación opcional; revisión por archivo/binario antes de dependencia |
| LivXue/SoMe | Referencia de evaluación social | Metadata NOASSERTION | No incorporar datos/código automáticamente; separar licencias de artículo/dataset |
| sequrity-ai/agentdojo | Ideas/fixture de evaluación adversarial | Metadata MIT | Adaptar escenarios propios tras revisión, no anunciar benchmark reproducido |

El intento c2pa-org/c2pa-rs no estuvo disponible; la ruta primaria encontrada es contentauth/c2pa-rs. Se preserva el intento fallido para que otra IA no cite como inspeccionado un repo que no leyó. NOASSERTION significa metadato insuficiente, no ausencia de licencia ni permiso automático.

## Opciones de ensamblaje

Piloto mínimo: core TS/Hono/Postgres, cliente servidor, fake provider y un adaptador de prueba autorizado. Backend social: elegir Postiz o Mixpost únicamente después de demostrar necesidades y API/edición. Atención: bridge a clientes o a Chatwoot autorizado, sin instalarlo obligatoriamente. Cola técnica: outbox y workers acotados primero; Redis/Temporal solo si una ADR muestra recuperación/escala/coste que lo justifican.

Servicios autohospedados pueden requerir PostgreSQL, Redis, almacenamiento, backups, OAuth apps, dominio/TLS y mantenimiento. Licencia de código libre no significa coste operativo cero ni acceso ilimitado a las redes. Preferir integración por API con scopes y TLS, sin exponer admin/métodos genéricos al LLM. Mantener notices/SBOM y fijar SHAs/digests al implementar; los heads actuales pueden cambiar.

La lectura de LICENSE de Chatwoot/Activepieces/n8n aclara que un único SPDX de GitHub no cubre todas sus carpetas. Antes de redistribuir, prestar servicio, incorporar reglas/modelos o usar datos, revisar las condiciones concretas con responsable competente. Esta tabla no sustituye ese trabajo ni inventa aprobación comercial.
