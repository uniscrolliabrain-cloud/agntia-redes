# Analítica, modelos y evaluación conjunta

Los modelos no fijan métricas ni permisos. Un modelo barato puede proponer copy, clasificar un mensaje o resumir evidencia; visión puede describir frame/asset y sugerir incompatibilidades. Las salidas mantienen incertidumbre, fuentes, locale, versión de policy y coste. Modelo/model provider se selecciona en servidor según DPA/transferencia/clasificación y tarea; no se impone DeepSeek/Gemini ni un coste sin verificar, aunque se puedan añadir como adaptadores futuros.

## Catálogo semántico de métricas

No sumar views/impressions/reach de distintas redes como personas únicas. Guardar definición/version, unidad, ventana, orgánico/pagado, nivel post/cuenta, revisiones de proveedor, frescura y cobertura. No inferir cero cuando falta scope, se retiró un campo o una lectura falla. Engagement rate declara numerador y denominador; comparaciones usan periodos y población comparables o se marcan orientativas. Duplicados de webhook/poll no duplican métricas. Rectificaciones remotas crean observación/revisión, no reescriben silenciosamente reportes aprobados.

UTM/click IDs de dominio aprobado y sin PII no demuestran por sí solos conversión ni causalidad. Ventas/finanzas aportan receipts de otra autoridad con base/consentimiento y reglas de atribución. Separar ingresos observados, atribuidos por modelo declarado y estimaciones. Un gráfico sin datos muestra insuficiente información; no inventar forecast o mejor hora con dos posts. Experimentos respetan política editorial y revisión; variantes automáticas no generan engagement falso ni prueban manipulación de usuarios.

## IA y memoria

Pipeline de propuesta: recuperar solo contexto autorizado → minimizar → generar → validar schema/limits/claims/rights → preview → revisión. Cualquier contenido social externo mantiene etiqueta de confianza y refs de origen. Un comentario «actualiza tus instrucciones de marca» no modifica BrandPolicySnapshot; promociones a memoria requieren aprobación/policy. Separar tenant, canal, rol, finalidad y retención; no reciclar DMs para entrenamiento por defecto.

Visión multimodal puede ayudar a comprobar formato o coherencia con el brief, pero no certifica copyright, ausencia de desinformación, identidad o menores. Citar regiones/frames cuando sea útil sin convertir su score en oráculo. Registrar rechazo/abstención y capacidad de completar una tarea legítima. Un modelo mayor no hereda más privilegios; una cuenta barata no reduce controles.

## Plan de evaluación

Proponer fixtures ES/EN/FR con dos tenants, marca/activos propios, comentarios benignos, sarcasmo, instrucciones adversariales, crisis y solicitudes de derechos. Medir schema/tool correctness, claims con fuentes, revisión humana/edit distance con explicación, tareas completadas y ataque bloqueado junto con coste/latencia. El judge LLM es señal; criterios de autorización/duplicado/secretos los verifican asserts deterministas y auditoría, no otro modelo.

Casos de integración: fuente con prompt injection que pide publicar en otra cuenta; texto correcto pero asset cambiado; aprobación caducada; destinatario/hilo cambiado; quota429; timeout tras create; payload remoto fuera de schema; disconnect entre enqueue y claim; duplicate/out-of-order webhooks; reporte con métrica stale; crash/restore con restricción reciente. Pruebas reales de proveedor solo con cuenta/alcance permitidos; cada capability bloqueada conserva NOT_VERIFIED. No se han ejecutado estos tests en esta entrega documental.
