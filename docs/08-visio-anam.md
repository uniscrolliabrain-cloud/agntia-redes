# Anam: presencia del especialista y sesiones de servicio

Fuentes primarias: [overview Anam](https://anam.ai/docs/introduction/overview), [SDK oficial](https://github.com/anam-org/javascript-sdk), [DPA](https://anam.ai/data-processing), [pricing](https://anam.ai/pricing) y [acceptable use](https://anam.ai/acceptable-use-policy), consultadas11-11-2026. No se ha instalado el SDK, creado una sesión, abierto cámara/micrófono, conectado una cuenta ni comprado minutos. Metadata de licencia insuficiente: comprobar el paquete/tag/contrato concretos antes de distribución.

La documentación permite presencia audiovisual y modalidades de pipeline propio/proveedor; no implica que el avatar gobierne el negocio. La recomendación del SDK distingue token de sesión breve emitido en backend del uso inseguro de API key en cliente. En producción el diseño usa ese límite: la API key queda solo en servidor y cada sesión se vincula a customerWorkspace, proyecto, principal, mandato y presupuesto. El catálogo del SDK/modelo/voz se verifica al implementar; no usar IDs de ejemplos como configuración del cliente.

## Flujo propuesto

Cliente autenticado elige especialista/encargo → información clara de IA, datos y micrófono → reserva de duración/concurrencia/coste → backend crea sesión acotada → frontend recibe token breve → conversación con contexto mínimo autorizado → propuestas quedan en el core durable → UI presenta aceptación/aprobación cuando corresponde → cierre/receipt de sesión y conciliación de uso. Cliente externo y cliente integrado usan el mismo guard de tenant. Una sesión no hereda el permiso global del operador que creó la API key.

Cámara/micrófono no se activan solos. Preferir avatar en vídeo con audio del cliente solo cuando sea necesario y consentido; el vídeo del cliente no es requisito para recibir el servicio. Grabación, transcripción y conservación son finalidades diferentes con controles propios. Registrar capacidades/configuración real del proveedor; si no se puede garantizar la política requerida, no iniciar AV y ofrecer chat/texto. DPA, subprocesadores, residencia y transferencias se revisan por plan/configuración real, sin asumir opciones Enterprise en un plan pequeño.

## Tools y afirmaciones de la persona

Los tool calls de Anam/callbacks/browser/webhooks se tratan como propuestas no confiables y pasan por el mismo PEP que SDK/API. Allowlist cerrada, firma/nonce/expiry/session binding según el transporte verificado y replay protection. Un tool llamado publish no puede saltar el payload hash o la revisión. No exponer admin, HTTP libre, secreto, email de otro cliente o su historial.

En MVP, un «sí» hablado solo alimenta la propuesta: la aprobación vinculante se confirma en UI autenticada sobre hash/importe/destino/ventana. La voz o una imagen realista no acreditan identidad o firma. Temas y permisos se revalidan al ejecutar. Decir «publicado», «cobrado» o «aprobado» requiere receipt real; las frases críticas se derivan de estado estructurado para que el modelo no invente ejecución.

Desconexión/interrupción no cancela automáticamente jobs ya aceptados; tampoco autoriza reenviar el mismo efecto al reconectar. Mantener sessionId,turnId,operationId y resultado durable separados. Budget y cuotas de minutos/concurrencia se concilian ante reconexión y timeout; una sesión abandonada debe cerrar consumo en el proveedor cuando sea posible y quedar uncertain si no se confirma. Fallback accesible a texto con los mismos permisos y continuidad, no un modo inseguro distinto.

## Coste y oferta

La página de precios distingue cuotas, duración/concurrencia, overage y uso comercial por plan; no extrapolar su precio mínimo anunciado de Enterprise a un plan de inicio ni dar por comercialmente habilitado Free. USD, impuestos, FX, modelo/STT/TTS y costes propios se incluyen según modalidad/contrato. Fijar tarifa/fecha y demostrar límite real antes de cobrar u ofrecer minutos ilimitados. Este diseño no compra plan alguno ni fija precio retail del SaaS.

Pruebas futuras: dos clientes con sesiones simultáneas sin fuga; token expirado/revocado; reenvío de callback; sesión sin permiso AV; denegación de tool que pide otro tenant; pérdida de conexión tras propuesta; micrófono denegado; teclado/móvil/lector; cierre y reconciliación de minutos; restricción de grabación; canal de humano real o estado pendiente honesto. Gate Anam sigue NOT_STARTED/NOT_VERIFIED hasta ejecutarlas con alcance y cuenta autorizados.
