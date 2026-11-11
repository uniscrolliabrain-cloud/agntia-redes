# Entrega1/9 · agntia-redes

**Decisión vigente del propietario (11-11-2026):** agentes canónicos en `/agente`, twins vinculados en los servicios y JWT de Supabase obligatorio en todos los modos. «Standalone» describe el acceso del cliente al portal, no una identidad agéntica independiente. Esta decisión sustituye las formulaciones anteriores sobre IdP/equipo propio. Aplicar nomenclatura nativa, membresías verificadas, aislamiento de datos/jobs y procedencia: [contrato transversal](../architecture/04-twins-supabase-y-trazabilidad.md). Diseño pendiente de implementación y pruebas.

Se entrega el diseño de una **empresa SaaS especializada en redes sociales y comunidad**, con portal propio, equipo de especialistas IA y atención audiovisual con Anam. Puede prestar servicio a los empleados generalistas de agente o contratar directamente con autónomos/pymes externos. La duplicación de servicios queda permitida; la autoridad se delimita por contrato, encargo y efecto para que dos equipos no publiquen o cobren lo mismo inadvertidamente.

No se ha construido la aplicación ni activado proveedores. Los archivos de entrega son solo Markdown/JSON de investigación, arquitectura y campañas. Las42 campañas están NOT_STARTED, con294 tareas y84 escenarios NOT_EXECUTED. Las comprobaciones ejecutadas son documentales: estructura, referencias, JSON, IDs/dependencias y enlaces locales. No son tests de producto o de APIs de redes.

## Qué podrá construir la IA implementadora

Onboarding de clientes, contratos/entitlements/work orders, especialistas por rol, política/identidad multicliente, briefs y variantes ES/EN/FR, media y derechos, preview/revisión, calendario, publicación por capacidades, reconciliación ante timeout, inbox y moderación propuesta, escucha autorizada, métricas/infografías con fuentes, reportes y aceptación de entregables. Se contemplan Postiz/Mixpost opcionales y APIs directas, sin obligar al cliente a entrar en sus paneles.

Anam tendrá sesión ligada a cliente/proyecto, token breve de servidor, permiso AV/retención, budget de duración/concurrencia, tools acotadas y fallback de texto. El avatar identifica que es IA; no fabrica trabajo hecho, empleados humanos o firmas. Contratar el servicio, aprobar una publicación y aceptar un entregable son hechos separados. Un sí hablado no activa por defecto un cargo o una publicación.

## Investigación y compatibilidad

Se contrastaron cinco papers, incluidos trabajos2026 de evaluación social, moderación y seguridad de agentes; lectura selectiva, sin reproducción de benchmarks. Se documentaron proveedores líderes y repos públicos con SHAs/metadatos/lecturas selectivas. El catálogo registra14 repos con metadata y una ruta C2PA no disponible antes de encontrar la canónica. No se presume licencia comercial de SDKs/datasets/Enterprise por estar en GitHub.

Se leyeron12 archivos del padre en54b8d5407a8576459448c4d059a877297d18ca7a. Tiene interfaces sociales/eventos y controles útiles, pero SocialClient es stub con503. No se ha modificado ni ejecutado el padre. Se propone bridge tipado con aislamiento, aprobación nativa comprobada, eventos compatibles y dedup durable. El cliente externo usa el portal SaaS; el operador conserva la vinculación canónica del agente y autentica al cliente con Supabase.

Meta devolvió429, Bluesky docs no resultaron legibles y Pinterest necesita investigación adicional: no están declarados soportados en runtime. Las APIs documentadas también requieren scopes/app review/cuenta/plan/versión reales. Anam se estudió en fuentes oficiales; no se creó sesión ni compró plan. Precios publicados no son coste total/retail verificado ni autorización de compra.

## Cómo continuar

[Leer handoff](HANDOFF.md), [plan42 campañas](../campaigns/README.md), [contratos](../contracts/01-contratos.md), [empresa SaaS](../07-empresa-saas-y-clientes-externos.md) y [Anam](../08-visio-anam.md). Cada campaña tiene tareas, artefactos, invariante, dependencias, escenarios, rollback y evidencia exigida. La otra IA debe ejecutar y reportar tras cada cinco y las dos finales, sin convertir42 campañas en un plazo ficticio o una certificación.

La siguiente entrega documental, solo al decir **«siguiente»**, será **agntia-clientes**, con el mismo modelo de empresa SaaS especialista, portal/visio, clientes externos y compatibilidad con agente. No se han poblado los otros ocho repos en este turno. No hay código de aplicación, compras, publicaciones sociales, mensajes o despliegues realizados como parte de esta entrega.
