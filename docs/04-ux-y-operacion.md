# UX y SOPs integrados en AgntiaPro

La empresa SaaS tiene portal propio y vistas integrables en el host. Incluye agente especialista en visio con Anam, chat/texto accesible y área de proyectos/entregables. Vistas: calendario editorial, bandeja de revisión, contenido/variantes, cuenta/capacidad, inbox y reportes. Chat contextual del equipo como panel lateral en escritorio y pestaña/drawer en móvil, con organización propia de especialistas, distinta de los empleados generalistas del cliente. El usuario ve decisiones relevantes, no un selector de todas las herramientas internas. Estado de conexión y límites se explican cuando afectan lo que puede hacer.

## Flujos humanos

Brief conversacional → resumen estructurado con objetivos/fuentes/alcance → variantes por cuenta/idioma → preview fiel de texto/media/enlaces/alt/disclosures → diff y revisión → ventana/visibilidad/coste visibles → aprobación → seguimiento con receipts. Un cambio de asset, cuenta, CTA, traducción o fecha posterior al approval se muestra como revisión pendiente. No escondido detrás de un botón «optimizar».

La bandeja diferencia pendiente, bloqueado por permisos/derechos, programado, enviando, aceptado por proveedor, publicado confirmado y resultado desconocido. Un contador0 no equivale a ausencia de riesgo; una cuota agotada no se resuelve elevando plan. Error409 invita a refrescar; timeout de escritura muestra conciliación, no «reintenta» indiscriminadamente. UI no permite al modelo saltar de un borrador a publicar con un argumento oculto.

En inbox, separar mensaje externo y borrador de respuesta. Mostrar plataforma/hilo, contexto mínimo, solicitudes de baja/restricción y derivación. No contestar automáticamente una reclamación legal, compromiso comercial, petición de seguro o dato personal sensible. Un borrador requiere revisión y la aprobación queda ligada al hilo y contexto observado: mensaje nuevo invalida un envío sensible preparado con datos antiguos.

## Accesibilidad y seguridad

Diseñar móvil390px y escritorio1440px, teclado/foco/labels, controles táctiles, contraste y alternativas de media. Sin tokens en browser storage; la sesión/BFF del host mantiene credenciales de servicio. Tenant change/logout limpia caches, drafts temporales, previews y respuestas tardías. HTML/CSV/SVG del cliente se sanitiza; uso de textContent y exports sin fórmulas activas. No iframes externos o auto-play cargando PII por defecto. Una preview de red es simulación visual, no garantía de render/entitlement final.

## Cadencia de trabajo real

Laia o los empleados del cliente pueden contratar/solicitar trabajo; el coordinador del servicio prioriza sus especialistas. En modo standalone el cliente entra directamente al portal. El agente social propone/editor valida/humano autorizado aprueba. Diario: revisar conexiones, publicaciones bloqueadas/inciertas, inbox y briefing solo con hechos. Semanal: revisar fuentes/derechos y aprendizaje de rendimiento, sin atribución causal inventada. Mensual: cierre de métricas/gasto, calidad y calendario aprobado para periodo siguiente. Los horarios son de la empresa; el parser UTC observado del host no demuestra ejecución local con DST. El middleware publica eventos y due dates; la empresa SaaS conserva sus SOPs y compromisos de servicio, y el host los suyos.

El briefing cita post/source IDs y fecha de datos, separa acciones hechas de propuestas y lo que está pendiente. «No hubo datos nuevos» es un resultado válido; no generar tareas ficticias para aparentar un equipo ocupado. Escalado/guardia humana y SLA son decisiones operativas a contratar y verificar, no una propiedad de un avatar.
