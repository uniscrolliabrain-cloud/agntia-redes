# Seguridad, privacidad y derechos: controles propuestos

Los comentarios, DMs, imágenes, transcripciones, nombres de archivos, URLs y resultados de tools son datos no confiables. Una instrucción dentro de un post no cambia el tenant, una tool o el approval. La frontera es identidad/policy/argumentos/destinos y revisión de efectos; un clasificador o prompt «sé seguro» no la sustituye. Ningún modelo recibe claves OAuth, cookie de usuario, DSN o acceso admin del backend.

## Autorización y OAuth

Principal del host verificado en cada admisión y job; account binding explícito por tenant/marca; audience/issuer/expiry/revocation y capacidades acotadas. Agente distinto de humano incluso si se llama Laia, Marco o social manager. deny-by-default, no default tenant por DB caída. OAuth state vinculado a sesión/tenant y callback single-use, PKCE según flujo, redirect allowlist, protección CSRF, scopes mínimos y refresh/rotación. Conectar una cuenta no autoriza todos los posts o DMs. Desconexión debe bloquear nuevos intents y conciliar remotos pendientes.

El dry-run no hace uploads. Un reviewer no aprueba su propia propuesta sensible cuando se exige separación de funciones. Aprobación y policy se revalidan tras cambios de cuenta, miembro, marca, derechos, destino, coste o ventana. El human-in-the-loop es un registro verificable, no una frase añadida al prompt ni una casilla client-side.

## Media y procedencia

Mantener asset original, hashes, transformaciones, permiso de imagen/voz, licencia territorial/temporal, uso comercial, derechos de música, logo/marca, fuente de afirmaciones, estado sintético y disclosures evaluados. C2PA/provenance puede ser señal de integridad/origen, no prueba universal de verdad ni de todos los derechos. Metadata ausente se declara desconocida. No retirar watermarks para simular permiso. Validar MIME/codec/tamaño, archivos especiales, bombas y previews sanitizados; los binarios no se ejecutan como scripts.

El contenido con avatares o voz IA necesita revisión de representación y reglas del canal, además de hechos legales aplicables. Un disclosure no sanea automáticamente una afirmación engañosa ni un uso de identidad ajena. Temas sanitarios/financieros/seguros o alegaciones sensibles exigen fuente y revisión competente; si falta, bloquear publicación y permitir solo borrador.

## Tratamiento de datos

[RGPD](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng) es fuente primaria para finalidad/minimización/base/roles y derechos; la interpretación del caso debe revisarse. Mensaje público no equivale a permiso de profiling, entrenamiento o CRM. No inferir salud, ideología, religión, vulnerabilidad o datos de menores desde engagement. Definir retención por tipo, base, custodia y destinatarios; DPA/transferencias/model providers revisados antes de enviar DMs o contenido personal al modelo.

Responder soporte no equivale a consentimiento de marketing. La [LSSI española](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758) exige revisar comunicaciones comerciales; el diseño evita DM comercial no solicitado por defecto. Legal/owner determina aplicabilidad, excepciones y evidencia; el middleware no emite dictamen universal. Reglas AI Act, publicidad e identificación de contenido sintético se verifican por caso/fecha/región antes de activar capability, sin asumir un calendario o etiqueta universal en este paquete.

Derechos/restricciones deben propagarse a vistas derivadas, reportes, memoria, buscadores y exports. Purga de original no demuestra borrado de copias/plataformas/backups. Un restore aplica restricciones y revocaciones actuales antes de IO. Mantener tombstones/evidencia legalmente necesaria sin conservar contenido ilimitado. Scrubbing de logs y eventos se prueba con secretos centinela; no publicar payloads de clientes en este repo público.

## Incidentes y límites operativos

Detener nuevas salidas ante cross-tenant, approval bypass, secreto, pérdida de audit, doble publicación ambigua o gasto fuera de reserva. Preservar estado y activar reconciliación, no limpiar la historia para aparentar recuperación. Derivar a ciberseguridad/operador por eventos autorizados con referencias mínimas. No declarar que un incidente técnico es una brecha notificable ni enviar avisos regulatorios automáticamente. No hay marketing de «blindaje» o cumplimiento sin errores.
