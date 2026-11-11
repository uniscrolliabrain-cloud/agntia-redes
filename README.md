# agntia-redes · Diseño del middleware social de AgntiaPro

**Entrega1 de9 ·11 de noviembre de2026 · Solo documentación.** Redes sociales y comunidad, alcance confirmado por el propietario. No existe todavía runtime implementado, conectores instalados, cuentas conectadas ni publicaciones realizadas por este repo.

El producto propuesto convierte objetivos y briefs aprobados en borradores, revisiones, calendario, publicaciones trazables, atención de comunidad y reportes con fuentes. El LLM propone; una máquina de estados, permisos, presupuesto y aprobaciones verificables deciden qué puede ejecutarse. El servicio tendrá portal, organización especialista y atención por agente en visio con Anam, además de una API middleware para AgntiaPro. Podrá trabajar para clientes de `/agente` o clientes externos con identidad propia. Duplicar capacidades generalistas es válido: se delimita autoridad por contrato/encargo y se coordinan efectos, sin prohibir funciones por existir en otro repo.

Se entrega investigación primaria actual, contraste selectivo del repo padre, arquitectura, contratos, matriz de proveedores y **42 campañas,294 tareas y84 escenarios de gate**, todas **NOT_STARTED**. No equivalen a42 días ni a un producto completo por calendario. Las otras IAs deben implementar y demostrar cada gate, con checkpoint tras cinco campañas.

[Informe de entrega para el owner](docs/release/INFORME-AL-OWNER.md).

## Recorrido de lectura

1. [Índice y alcance](docs/README.md) y [visión de producto](docs/01-producto-y-limites.md).
2. [Arquitectura y autoridad entre repos](docs/architecture/01-arquitectura-y-dominios.md).
3. [Runtime determinista y publicación incierta](docs/architecture/02-runtime-y-publicacion.md).
4. [Compatibilidad observada con agente](docs/architecture/03-compatibilidad-agente.md).
5. [Contratos API/eventos/aprobaciones](docs/contracts/01-contratos.md).
6. [Proveedores y adaptadores](docs/02-proveedores-y-adaptadores.md).
7. [Papers](docs/research/01-papers.md), [compañías](docs/research/02-companias.md), [repos](docs/research/03-repos-y-licencias.md) y [fuentes verificadas](docs/research/sources.json).
8. [Seguridad, privacidad y derechos](docs/03-seguridad-privacidad-derechos.md), [UX/SOPs](docs/04-ux-y-operacion.md), [analítica/IA](docs/05-analitica-ia-y-evaluacion.md) y [coste](docs/06-presupuestos.md).
9. [Plan42 campañas](docs/campaigns/README.md), [plan completo estructurado](docs/campaigns/campaign.json) y sus42 documentos individuales.
10. [Empresa SaaS y clientes externos](docs/07-empresa-saas-y-clientes-externos.md) y [visio Anam](docs/08-visio-anam.md).
11. [Operaciones](docs/operations/RUNBOOK-DESIGN.md) y [handoff para la IA implementadora](docs/release/HANDOFF.md).

## Qué está observado y qué está propuesto

Se ha leído selectivamente código de `/agente` en el commit **54b8d5407a8576459448c4d059a877297d18ca7a**, sin modificarlo ni ejecutar su suite. Su SocialClient actual es un stub honesto que falla con503 y no está conectado al runtime; declarar eventos sociales no demuestra publicación real. La propuesta exige un puente nuevo, cotejo contra el SHA vigente, autenticación y aprobación de integración.

La investigación no certifica proveedores: cuenta con metadatos/README/licencias de repos públicos, documentos de APIs y lectura selectiva de papers. No se han instalado upstreams, reproducido benchmarks, probado OAuth o verificado precios/entitlements de cuentas reales. Existen fuentes inaccesibles o ambiguas; están registradas y ninguna capacidad se habilita por suposición.

La publicación comercial, respuestas, borrados, mensajes privados y gasto son efectos externos sensibles. Esta entrega no autoriza ejecutarlos, comprar servicios, tocar otros repos o fusionar código futuro. Se documentan para implementación y pruebas sintéticas posteriores.
