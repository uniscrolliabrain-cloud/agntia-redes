# Handoff para otra IA: construir sin inventar evidencia

Encargo actual concluible solo como documentación. Para empezar código hace falta una instrucción futura de implementación. Leer AGENTS.md y todos los contratos/campañas; el propietario ha pedido que otras IAs ejecuten esos diseños. No desplegar, publicar posts, enviar DMs, gastar dinero o modificar el host por interpretar un documento como autorización externa.

## Primeras acciones cuando se autorice implementar

Clonar agntia-redes; capturar SHA/fecha e instrucciones aplicables. Comparar el padre main actual con54b8d5407a8576459448c4d059a877297d18ca7a; no presuponer que sigue igual. Leer sus tipos de principal/authz/ActionProposal/event schemas/SOPs y tests; la inspección actual es selectiva y no ejecutó su suite. Asegurar que la integración no cae en legacy-default ni confunde owner,actor ytenant. El SocialClient observado es stub, no un proveedor listo.

Implementar C01→C42 respetando dependencias/gates. Una rama/PR pequeña por campaña; no merge de código automático. Checkpoints después de C05,C10,C15,C20,C25,C30,C35,C40 yC42 con objetivo, decisiones, diff/commit, comandos/entorno, tests reales, skipped/fallos/limitaciones y siguiente paso. Una campaña BLOCKED no autoriza saltar un gate crítico; tracks independientes pueden avanzar documentalmente sin habilitar IO dependiente.

MVP de integración tiene fake provider y cuentas sintéticas antes de cualquier cuenta real. No llamar a servicios reales para «ver si funciona» sin cuenta/alcance explícitos y autorización del efecto. La publicación real de prueba se limita al entorno aprobado; app review ausente mantiene la capability no disponible. No evadir con scraping/browser o una key de otra empresa.

## Entregables por campaña

Cada documento Cxx enumera siete tareas, artefactos, contrato, gates y rollback. Añadir evidencias ejecutadas con SHA de runtime/reglas/adaptador y fixture. No escribir PASS porque existen tests; ejecutarlos. Para publicaciones, demostrar state transitions, idempotency, timeout/unknown y reconciliación, aprobación/revisión actuales, aislamiento y quota/budget antes de un éxito feliz. Para IA, evaluar tarea legítima y adversarial, no solo prompts rechazados. Para reportes, validar semántica/frescura/denominadores, no solo HTML bonito.

Los contratos son propuesta: fijarlos y versionarlos con tests y ADR si cambian. Ninguna compatibilidad con el padre está testada hoy. El patchset al host debe presentarse escrito y revisable y aplicarse solo tras autorización; no copiar su servidor dentro de redes ni crear un segundo runtime empresarial. El SDK servidor no se distribuye al browser con tokens. Tools iniciales son de lectura/propuesta, no aprobación/publicación directa.

## Investigación y decisiones que no están cerradas

Papers primarios y metadatos públicos consultados, sin benchmark reproducido. Meta respondió429; Bluesky docs redirigieron sin contenido legible; Pinterest sin auditoría suficiente; licensing NOASSERTION sigue pendiente. No fijar cuotas de memoria o tratar todas las APIs igual. LinkedIn tiene lifecycle de versiones; YouTube cambió documentación respecto a recetas antiguas; X anuncia pago por uso. Confirmar nuevamente en la instalación real y guardar capability report.

Revisar licencias propias, upstream/Enterprise, datasets/modelos/reglas y prestación comercial; consultar términos por cuenta/red. No copiar datasets sociales de investigación a un SaaS por el hecho de estar en GitHub. En modo integrado coordinar la reserva con el payer/mandato y finanzas cuando corresponda; en standalone el servicio puede operar su ledger real revisado, sin depender de otro repo. No multiplicar artificialmente el mismo saldo ni cobrar dos veces. La oferta especializada puede solaparse con otros servicios; fijar autoridad/aceptación por encargo. Marca/cliente/ventas/legal/seguros/gestoría pueden aportar referencias, pero un cliente externo no requiere contratarlos todos.

## Definición de terminado futura

Vertical slice reproducible de dos tenants, principal humano/revisor/agente, cuenta aprobada o fixture explícito, draft/assets/rights, preview y aprobación vinculada, scheduling único, envío acotado y receipt o unknown correctamente conciliado, inbox y reporte con fuentes. Pruebas de crash, replay, revocación, cambio de payload, media/SSRF, restricción de datos, restore y presupuesto; SDK/Hono y UI móvil con host auth verificados. Todo depende de capacidades reales: lo no probado se etiqueta, no se maquilla.

Producción exige aceptación humana independiente, licencias/términos/DPA, custodia/retención y derechos completos, seguridad/observabilidad, backups y operador, presupuesto facturado/limitado, wiring del host autorizado.42 campañas no son un plazo de7 días ni una certificación. Diseñar y probar dos modos de entrada: cliente de agente y cliente externo standalone. El servicio tiene portal, especialistas propios, contratos/entitlements y visio Anam; no reducirlo a SDK interno. La siguiente entrega documental al decir «siguiente» será agntia-clientes; no empezar esa implementación por cuenta propia.
