# Agentes canónicos, twins, Supabase y trazabilidad

Decisión del propietario, 2026-11-11. Contrato obligatorio para este diseño y los ocho siguientes. Esta especificación sustituye cualquier frase anterior que sugiera un IdP alternativo, un equipo de agentes canónicos independiente o que «standalone» significa independencia del registro de agentes de `/agente`. Es documentación; no acredita una integración funcionando.

## Identidad y operación

El agente canónico vive en `/agente`; el servicio especializado mantiene su twin vinculado para ejecutar el dominio, atender por Anam y custodiar datos del servicio. El twin no es otro empleado con autoridad propia. Los servicios pueden duplicar capacidades y contratar clientes externos. Esos clientes usan el portal del SaaS sin necesitar la UI de AgntiaPro; la identidad canónica del agente sigue gobernada por el padre. No se presupone una llamada al padre por cada inferencia: la ejecución local requiere mandato vigente, capacidades, presupuesto y ámbito verificables. Sin mandato válido se bloquean nuevos efectos.

En el SHA `54b8d5407a8576459448c4d059a877297d18ca7a`, `packages/domain/src/actor.ts` define `tenantId`, `roleId`, `runtimeId`, `personaId` opcional y `kernelTurnId` opcional para AgentActor; `id` corresponde a runtimeId. No confundir persona, rol y ejecución ni inventar un `canonicalAgentId` como si ya existiera en el padre. Un TwinBinding será un contrato nuevo del servicio, versionado y todavía no implementado: enlazará las referencias nativas a configuración canónica, instancia local, mandato, revisión, capacidades, caducidad y revocación. Un nombre de avatar no autoriza acciones.

La ruta real del catálogo es `clientes/`. El índice `clientes/default/personas/_index.json` enumera 12 personas, mientras `clientes/_base/agentes.json` contiene 16. Se registra esta diferencia para resolverla al implementar; los archivos de configuración no prueban agentes o twins activos. No copiar memorias de default a todos los clientes.

## JWT de Supabase obligatorio

Todos los modos del servicio usan autenticación Supabase. Verificar firma con configuración del proyecto autorizado, algoritmos permitidos, issuer, audience, expiración y nbf; manejar rotación de claves y fallo de JWKS sin permitir acceso por defecto. Preferir verificación asimétrica por JWKS aprobado. No usar una URL jku/issuer suministrada por el token para elegir dónde descargar claves. No basta decodificar el JWT. Separar el token de sesión Anam del JWT de identidad y del OAuth de cada red social.

Conservar los nombres del host: JWT `sub`, `tenant_id`, `app_metadata.tenant_id`; contexto interno `tenantId` y Actor. El código observado también tiene fallback a `user_metadata.tenant_id` y alta de primera membresía desde el claim. Como user_metadata es editable, este diseño NO adopta ese fallback ni el alta implícita como autorización suficiente: el tenant efectivo se comprueba con membresía/provisionamiento de servidor confiable. Es una exigencia nueva más estricta, no un arreglo ya realizado en el padre. `role: authenticated` no es un rol empresarial.

Ningún tenant se decide por body, query o texto del modelo sin contrastarlo con el principal y sus membresías. No reutilizar un fallback legacy/default. Usuarios revocados, membresías suspendidas, claims incompatibles y recursos ajenos fallan cerrados. La clave service_role y secretos de firma nunca van al navegador, al agente LLM ni al repositorio. Un worker no simula un humano ni conserva un access token de usuario indefinidamente: actúa con identidad de servicio y delegación verificable, emitida desde un contexto autenticado y revalidada antes del efecto.

Si un agente de la empresa operadora presta servicio a otra empresa, conservar por separado su tenant de origen y el tenant objetivo. La delegación comercial/técnica debe autorizar esa relación explícitamente. No reemplazar silenciosamente el tenant del Actor con el del cliente ni aceptar una relación por tener nombres iguales.

## Aislamiento de extremo a extremo

JWT válido no equivale a aislamiento completo. Toda ruta, tool, job, outbox, webhook, exportación y sesión Anam debe resolver principal, tenant, recurso, capacidad y mandato antes de leer o actuar. Consultas y relaciones compuestas incluyen tenantId. En Postgres habilitar y probar RLS para tablas expuestas; revisar roles propietarios/BYPASSRLS y la identidad real de workers, sin suponer que una clave administrativa respeta RLS. Los controles de aplicación siguen siendo obligatorios.

Aplicar ámbitos equivalentes a Storage, URLs firmadas, Realtime, índices vectoriales, búsquedas, cachés, métricas, backups y documentos. Un namespace visual no es una barrera de seguridad. Webhooks se vinculan al proveedor/conexión registrado por servidor. Los jobs persisten contexto y referencias de autorización, revalidan revocación y crean su propio scope: AsyncLocalStorage no transporta por sí solo identidad a una cola durable. Revocaciones impiden nuevos efectos y cierran o limitan sesiones ya abiertas según política.

## Nomenclatura y linaje

`packages/domain/src/business.ts` define `provenance: {source, actor, updatedAt, confidence?}`, `schemaVersion` y `version`. Mantener esos campos cuando se proyecten BusinessEntity; confidence no prueba certeza ni concede permisos. `apps/server/src/engine/provenance.ts` resuelve chips desde esos datos y fuentes: no inventar procedencia para mejorar la apariencia del reporte.

`packages/domain/src/agent.ts` distingue `assignedBy` de `assignedTo`, y contempla `tenantId`, `requestId`, `threadId`, `parentTaskId`, `artifactIds`, `evidence`, `version` y `outcome`. Preservar delegante, ejecutor y enlaces de tarea donde correspondan. No forzar todos los campos a todos los objetos ni confundir requestId con correlationId. Mapear de forma documentada los eventos al contrato real del padre; IDs nuevos del middleware deben declararse nuevos.

Además de la procedencia nativa, el servicio propone referencias de objeto proveedor, revisión, hash, mapeador, recepción, correlación, causalidad y evidencia. Son extensiones del servicio, no campos supuestamente existentes en el padre. Conservar original y transformación, evitar sobrescritura de revisiones aprobadas y registrar responsable del efecto. El contexto público minimiza PII y nunca incluye JWT, tokens sociales, DSN o URLs firmadas.

## Gates obligatorios de las 42 campañas

Probar dos tenants, humano y agente delegado: acceso cruzado por ID, filtros, jobs, exportaciones, Storage, Realtime y caché; JWT expirado, firma errónea, issuer incorrecto, rol manipulado y user_metadata hostil; revocación durante cola/sesión; mandato vencido, twin sin binding y cambio de revisión canónica. Cada efecto debe enlazar actor, ámbito, tarea/delegación, evidencia y receipt. Todos estos escenarios están PLANIFICADOS y NO EJECUTADOS.

Antes de implementar, cotejar de nuevo el SHA del padre y resolver diferencias del catálogo y de los claims. No modificar `/agente` como parte de este encargo. El mapa de fuentes registra blobs y alcance de lectura; no se ha auditado el repositorio entero ni ejecutado sus tests.
