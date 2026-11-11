# Índice técnico y método

Fecha de observación11-11-2026. Alcance confirmado: redes sociales y comunidad. Estado **DOCS_READY_RUNTIME_NOT_IMPLEMENTED**. Las fuentes distinguen observado en código, documentación primaria, afirmación de proveedor, hipótesis propia y no verificado. Las rutas src/ y tests/ dentro de campañas son archivos futuros: no existen por el hecho de estar nombrados.

La propuesta central es TypeScript/Hono/pnpm para alinearse con agente, una empresa SaaS especialista con portal/Anam y un core de dominio independiente, Postgres para persistencia transaccional, SDK servidor con DTOs/validación y adaptadores nominados. SQLite de laboratorio solo si una ADR mantiene sus límites; Redis/BullMQ/Temporal no son requisitos simultáneos. Ningún backend OSS aporta automáticamente permisos de las plataformas.

El orden de lectura está en [README](../README.md). [campaign.json](campaigns/campaign.json) conserva42 campañas con siete tareas concretas y dos gates cada una. Los documentos individuales añaden límites, caminos de fallo y condiciones de parada. Los84 escenarios son pruebas propuestas, todas NOT_EXECUTED. La comprobación de estructura/enlaces del paquete documental no es una suite de redes sociales.

Se publica este único dominio en este turno. Secuencia posterior, solo cuando el propietario diga «siguiente»: agntia-clientes, agntia-marketing, agntia-ventas, agntia-branding, agntia-finanzas, agntia-legal, agntia-seguros, agntia-formacion. Ninguno de esos ocho recibe código o documentación en este turno; solo se delimitan sus contratos como dependencias futuras. Gestoría existente y ciberseguridad no se reimplementan.
