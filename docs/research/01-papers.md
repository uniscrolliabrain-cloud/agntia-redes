# Papers: lectura selectiva, decisiones y límites

Observación11-11-2026. Cinco trabajos primarios contrastados, con versiones y alcance abajo. No se han descargado datasets completos, entrenado modelos, reproducido benchmarks ni obtenido resultados propios. Un artículo de2026 no garantiza madurez productiva; un preprint conserva ese estado.

| Trabajo y fuente | Lectura efectuada | Qué aporta al diseño | Qué no se traslada |
|---|---|---|---|
| [SoMe](https://arxiv.org/abs/2512.14720), preprint2025/AAAI2026 | Abstract, definición de tareas, métricas y análisis de tool chains en HTML | Evaluar tareas sociales diferenciadas y completitud, con evidencia del dato y errores de herramientas | Sus datos/score no acreditan capacidad propia; simulación de comentarios y predicción personal no entran en MVP |
| [PluRule](https://arxiv.org/abs/2605.17187),2026 | Abstract y discusión/limitaciones en HTML | Moderación depende de reglas de comunidad y lengua; guardar la regla y permitir revisión/abstención | No usar etiqueta universal de toxicidad para borrar, sancionar o inferir características sensibles |
| [AgentDojo v3](https://arxiv.org/abs/2406.13352v3),2024 | Abstract y descripción del marco | Tests legítimos y adversariales sobre resultados de tools, no solo clasificación de prompts | No declarar robustez universal ni instalar datasets/reglas sin revisar sus términos |
| [Bad Memory](https://arxiv.org/abs/2607.14611), preprint2026 | Abstract y alcance declarado | Mensajes y notas externas no se promueven automáticamente a memoria/policy de marca | No afirmar una tasa propia de defensa ni validar eficacia por leer el paper |
| [Ignored, Not Refused](https://arxiv.org/abs/2610.23254), preprintoctubre2026 | Abstract, medidas y discusión de seguridad/utilidad en HTML | Separar ataque bloqueado, tarea completada y fallo/inacción; una negativa constante no es producto útil | No copiar porcentajes de su benchmark como SLA ni elegir modelo solo por ASR |

## Hipótesis propias a validar

1. Un Content Passport puede mantener origen, derechos, transformaciones, fuentes y disclosures ligados al hash final; sirve como trazabilidad, no como prueba automática de verdad o propiedad.
2. Una Capability Lease por cuenta/operación, breve y revocable, reduce el uso de permisos obsoletos entre aprobación y envío. Debe probarse con cambios de scope, revisión de app y titularidad, no confiar en un200 histórico.
3. Un Publication Receipt Graph distingue intención, upload, job, post visible y retirada. Debe representar incertidumbre y depender de evidencias remotas verificables, no de coherencia narrativa del LLM.
4. Un Editorial Policy Compiler convierte límites declarados/revisados de marca/comunidad en checks deterministas. Su cobertura es explícita; un check aprobado no verifica por sí solo una afirmación sanitaria o financiera.
5. Un Evidence-to-Insight Report impide métricas sin denominador/periodo y separa hipótesis de causalidad comercial. El coste es parte del resultado, no una cifra ocultada tras generación bonita.

Son nombres de propuestas de ingeniería para este proyecto, no técnicas científicas nuevas demostradas ni patentes. Cada hipótesis necesita comparación con baseline, fallos, coste y revisión independiente antes de atribuir beneficios.

Las pruebas sociales se construirán con contenido sintético/propio o con derechos y base de tratamiento verificados. La disponibilidad pública del corpus de un paper no autoriza reutilizar mensajes reales en un SaaS comercial. El artículo PluRule muestra una licencia restrictiva de publicación; artículo, código y dataset se revisan por separado. Ningún dataset se ha incorporado a este repo.
