# Runtime determinista: garantías y estados

Determinismo significa que una decisión de autorización/transición se explica por datos, política, revisiones y reloj capturados. No significa que un LLM, una métrica social o un proveedor remoto sean deterministas. Se registra model/version/prompt-policy/input refs/output hash cuando corresponda; replay de decisión no debe repetir generación pagada ni una publicación.

## Ciclo del contenido

Brief draft→ready_for_review→approved/rejected/superseded. Draft draft→validated→in_review→approved→scheduled; cualquier cambio material crea revisión nueva y desliga la aprobación anterior. PublicationIntent proposed→ready→reserved→queued→executing→provider_accepted→published_confirmed. Estados alternativos: blocked, cancelled_before_send, expired, failed_before_send, outcome_unknown, reconciliation_required, provider_rejected, partial_success, remote_deleted. Son familias de estado a concretar en contrato; no adoptar una cadena única que fuerce que un upload sea ya un post.

La aprobación referencia hash del payload normalizado final, tenant, marca, account binding, revisión, visibilidad, ventana/slot, zona horaria, assets y derechos, política, coste máximo, enlaces/CTA, etiquetas de publicidad/IA pertinentes y caducidad. Corregir una coma sin efecto semántico puede formar una revisión menor, pero la equivalencia debe ser una regla explícita y probada, no un criterio libre del LLM. El MVP invalida aprobación ante cualquier cambio del payload publicado.

Antes de enviar: principal y token de servicio vigentes; account↔tenant comprobado; capacidad confirmada y fresca; aprobación humana verificada; payload/rights/policy hashes iguales; presupuesto/quotas reservados; ventana válida; lease/fence actuales; kill switch desactivado y destino servidor aprobado. Comprobar de nuevo al reclamar job, no solo en HTTP de admisión. Un usuario viewer o un agente no elevan su rol por aportar approval_id.

## HTTP y realidad distribuida

Outbox contiene intent durable antes de IO; un intento tiene operation_key estable y fingerprint. Si el proveedor ofrece idempotency nativa, conservar su key y semántica de TTL. Mastodon documenta una retención temporal: no extrapolarla a protección indefinida. El ledger local persiste suficiente tiempo para que un replay días después no cree otro intento por accidente. Si no hay idempotency/lookup inequívoco, un timeout después de enviar entra outcome_unknown: no se puede prometer exactly-once. Conciliar con request ID/object ID/consulta permitida o pedir revisión, nunca buscar solo por texto/hora y borrar una coincidencia ambigua.

Un resultado202/200 puede ser receipt de upload o job remoto. Se registran ambos IDs y se consulta procesamiento/publicación según proveedor. Partial_success por variante/canal no se normaliza a éxito global. No repetir los canales ya confirmados cuando uno falla. Editar o borrar posts son comandos nuevos con efectos propios y approvals cuando toque; rollback no es «el contenido nunca fue visto». Conservar evidencia minimizada y estado remoto cuando un contenido desaparece.

## Calendario y programación

Agente decide la rota de sus empleados; redes decide la de sus especialistas y compromisos del servicio. No se intenta gobernar toda la empresa del cliente. El ejecutor de publicaciones mantiene reloj de entregas autorizadas: zona IANA, hora local, instante UTC, versión tzdata, resolución de DST, not-before/not-after y política de catch-up. Hora inexistente o ambigua pide decisión explícita; no duplicar una hora repetida. Un worker reiniciado no publica una semana de contenido atrasado sin revisar frescura. Eventos de crisis/stop congelan nuevos envíos y concilian los ya aceptados por proveedores.

scheduleAuthority es local o remote_backend por intent. Si Postiz ya tiene un trabajo programado, el worker local solo supervisa; no vuelve a programar la misma entrega. Cambiar de autoridad exige cancelar/conciliar la anterior y crear revisión/approval nuevos. La visualización de calendario no es fuente de autorización y no reemplaza el estado durable.

## Recuperación y responsabilidad

Leases con fencing evitan ACK de un worker antiguo, pero no revierten un efecto remoto. Budget uncertain y publicación uncertain se concilian juntos sin ocultar pasivos. Separar intent local de receipt remoto y de visibilidad pública. Backups deben conservar claves referenciadas, vínculos, auditoría, revisiones y outbox; tras restore hay que aplicar revocaciones/restricciones actuales antes de habilitar IO. Nunca presentar la base antigua como permiso fresco.

Los gates técnicos de identidad/audit/approval no se rebajan en Lite o si el modelo es barato. El kill switch limita admisión/ejecución; no permite inventar que canceló un envío que ya pasó al proveedor. Cada excepción deja código seguro, evidencia y dueño para revisión.
