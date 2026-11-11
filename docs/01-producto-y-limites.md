# Producto, usuarios y criterio de utilidad

El owner dirige desde AgntiaPro: «prepara una semana de contenido sobre el lanzamiento, usa este vídeo y estas fuentes; enséñame las variantes antes de publicar». El middleware devuelve borradores por canal, derechos pendientes, calendario propuesto y acciones que requieren revisión. Una vez aprobado un payload concreto y validados permisos de cuenta, un ejecutor podrá tramitarlo en el proveedor. No simulará una publicación si solo existe un job en Postiz, un upload procesándose o una cola local.

Otro recorrido empieza en una mención o comentario autorizado. El sistema conserva fuente y contexto mínimo, identifica si hay una pregunta, una petición de soporte o un riesgo que necesita revisión, propone respuesta y deriva el caso a clientes cuando corresponde. El área social no convierte el handle en una persona CRM por coincidencia de nombre y no añade a ventas a alguien que solo comentó un post.

## Alcance inicial

Cuentas sociales vinculadas explícitamente a tenant/marca; briefs y assets versionados; variantes español/inglés/francés; calendario con zona IANA y restricciones editoriales; revisión humana con diff; publicación y reconciliación por capacidades; ingestión de eventos/inbox permitidos; moderación como propuesta; listening sobre fuentes autorizadas; métricas con definición/periodo/frescura; informes ejecutivos y técnicos; tools acotadas para agentes. Primer vertical slice: dos tenants, cuentas de laboratorio, un borrador con imagen o vídeo propio, aprobación, ejecución controlada en una plataforma disponible, recibo y reporte. La ausencia de aprobación real de proveedor mantiene el gate bloqueado y permite demostrar fixtures sin fingir ese paso.

La planificación contempla integraciones propias y backends Postiz/Mixpost opcionales. Solo un componente es autoridad de programación de cada entrega. Un usuario no debería tener que entrar en esos backends para operar; sus consolas pueden usarse por administradores durante diagnóstico.

## Límites que hacen el producto honesto

No incluye compra de anuncios, seguidores, likes, cuentas, interacción coordinada artificial, scraping universal, vigilancia personal, inferencias sensibles de audiencia ni acciones de ventas/finanzas/seguros/asesoría profesional. No promete acceso al histórico completo, a DMs, a todas las métricas o a todas las redes por conectar un API key. La disponibilidad depende de cuenta, producto, permisos, revisión del proveedor, versión, región y modalidad comercial.

El contenido generado puede ser incorrecto o no tener derechos de uso. Cada afirmación comprobable del borrador necesita fuente, caducidad cuando proceda y contexto; no se confunde voz de marca con autorización legal. Hashtags, traducción, CTA, enlaces y cambios de formato forman parte de la revisión cuando alteran significado o exposición.

## Objetivos medibles propuestos

Primero medir utilidad y seguridad conjuntamente: porcentaje de tareas legítimas completadas en el alcance autorizado; propuestas aceptadas/editadas/rechazadas; errores de cuenta o tenant; duplicados evitados y resultados inciertos pendientes; edad de métricas; latencia/coste por operación; casos escalados y contexto disponible. No fijar una tasa ficticia de crecimiento ni un «mejor horario» estadístico sin volumen y metodología. Likes/views no prueban ventas, y ventas no equivalen a caja o impuestos.

La demostración final deberá permitir al owner reproducir lo ocurrido y distinguir «se propuso», «se aprobó», «se envió», «el proveedor aceptó», «se confirmó publicación» y «no sabemos todavía». Esas distinciones importan más que multiplicar avatares, prompts o pantallas.

## Modelo de empresa SaaS confirmado

El propietario aclara que este repo representa una empresa especializada que puede ser contratada por sus empleados generalistas en agente o por autónomos/pymes externos. Dispone de su propio portal profesional, servicio por proyectos/retainer, especialistas IA y agente de atención en visio con Anam. No es solo un plugin interno. Puede ofrecer branding básico, soporte o análisis solapados con otros repos si están dentro del contrato: el solapamiento funcional es válido; se documenta quién responde por cada encargo y dónde se aceptan sus efectos. Agente es un cliente/integración preferente, no un IdP ni servidor obligatorio para toda la base comercial.
