# Redes — auditoría inicial obligatoria (sesión Freebuff Cloud)

**2026-11-15 · AUDITORÍA DOCUMENTAL · NO IMPLEMENTACIÓN.** Este documento es el resultado de la auditoría inicial exigida antes de tocar código. Sustituye como evidencia *actual* a `docs/release/document-validation.json` (2026-11-11), que quedó obsoleta (hallazgo A2).

## 1. Baseline congelado

| Elemento | Valor |
| --- | --- |
| Repositorio | `uniscrolliabrain-cloud/agntia-redes` |
| Rama de trabajo | `freebuff/9176833f324cd060600c07c3` |
| SHA HEAD auditado | `09d6b8887d80d3b93c03ac9cea4cf7fdce7f6266` |
| Base de la rama | `freebuff-base` @ `6e7729741da4903d40e195a56e2ffd5158728945` |
| `git status --porcelain` inicial | vacío (árbol limpio) |
| Archivos versionados | 176 (171 `.md`, 5 `.json`; ninguna otra extensión) |
| Documentación total | ≈986 KB de Markdown, ≈311 KB de manifiestos |
| PR fusionadas | #1 `a9cbd4a` (factory prep) y #2 `8136b14` (programa 42 campañas) |
| CI | inexistente: no hay `.github/workflows` (hallazgo A9) |

**Nota de integración:** durante la sesión `main` recibió `23b3edf` (Concept Master V2). El commit de esta auditoría se rebasa sobre él y las comprobaciones V1–V11 se re-ejecutaron sobre el árbol integrado —178 archivos, 173 `.md`— sin cambios de resultado: el archivo nuevo no introduce enlaces rotos ni toca el manifiesto.

### Instalación, typecheck, lint, tests, build — NOT_APPLICABLE

No existe `package.json`, lockfile, código fuente, contenedor ni script ejecutable. El baseline ejecutable es **vacío por construcción**, no "aprobado". Cualquier afirmación de suite verde en este repositorio sería falsa.

### Alcance autorizado de esta sesión

`AGENTS.md` (decisión vigente del propietario, 11-11-2026) limita el encargo a informes, contratos de diseño y campañas, y exige autorización expresa para una sesión de implementación. Por tanto esta sesión **no ha escrito aplicación, tests, contenedores, SDK ni scripts de negocio**. La auditoría, la corrección documental verificada y la matriz de diferencias sí están dentro del alcance.

## 2. Estado real por campaña

**42/42 campañas: `DOCUMENTATION_ONLY` / `NOT_STARTED`.** No hay campaña parcialmente implementada que rescatar, ni código previo que conservar. Los estados del manifiesto son coherentes con el árbol: no existe ninguno de los 127 artefactos planificados (el único "existente", `docs/operations/`, es un directorio, no el artefacto).

Evidencia de ausencia de runtime: `git ls-files` solo devuelve `.md` y `.json`; no hay `src/`, `apps/`, `packages/`, `tests/`, `terraform/`, `Dockerfile` ni workflows.

## 3. Comprobaciones ejecutadas y resultado

Todas se ejecutaron sobre el SHA auditado con Python 3 leyendo el árbol y `git ls-files`. Reproducibles con los comandos del anexo.

| # | Comprobación | Resultado |
| --- | --- | --- |
| V1 | Integridad del manifiesto: SHA-256 de `docs/campaigns/campaign.json` | **PASS** — `88bcf431…a247e`, igual al declarado |
| V2 | Recuentos 42 campañas / 294 tareas / 84 gates | **PASS** — 7 tareas y 2 gates por campaña, exactos |
| V3 | Unicidad de IDs de campaña, tarea y gate | **PASS** — 0 duplicados |
| V4 | DAG de dependencias: sin ciclos ni destinos inexistentes | **PASS** (acíclico) — pero estrictamente lineal, ver A6 |
| V5 | Rutas de `campaign.document` (42) | **PASS** — 42/42 existen |
| V6 | Coherencia de títulos manifiesto ↔ `CAMPAIGN.md` | **PASS** — 0 discrepancias en 42 |
| V7 | IDs de fuente citados por campañas ↔ `sources.json` | **PASS** — 22 IDs usados, 29 registrados, 0 huérfanos |
| V8 | Enlaces locales (563) y anclas | **PASS tras corrección** — 42 rotos → 0; 0 anclas colgantes |
| V9 | Solo extensiones documentales | **PASS** — `.md` y `.json` |
| V10 | Barrido de secretos (prefijos de clave de OpenAI/Anthropic/GitHub, credenciales AWS y tokens de Slack; encabezado JWT comprobado por separado) | **PASS** — 0 coincidencias |
| V11 | Validez sintáctica de los 5 manifiestos JSON | **PASS** |
| V12 | Tareas con criterio propio y verificable | **FAIL** — ver A3 |
| V13 | Rutas de archivo propuestas plausibles para la arquitectura objetivo | **FAIL** — ver A5 |
| V14 | Comprobación del padre `/agente` a SHA `54b8d540…` | **NOT_VERIFIED** — repo hermano fuera de este workspace |
| V15 | Tests de proveedor / OAuth / publicación | **NOT_EXECUTED** — no hay runtime, ni cuentas, ni credenciales |

## 4. Hallazgos

### A1 · 42 enlaces locales rotos en el programa granular — CORREGIDO

`docs/execution-program/campaigns/NNN/CAMPAIGN.md` enlazaba su campaña fuente con la ruta relativa `../../campaigns/NN-….md`, que desde `docs/execution-program/campaigns/NNN/` resuelve a `docs/execution-program/campaigns/…`: ruta inexistente. Defecto introducido en el commit del programa granular (2026-11-14) y no detectado porque la validación declarada es anterior (A2).

Corrección aplicada: profundidad de la ruta a `../../../campaigns/…` en los 42 archivos. Re-verificado: **0 enlaces rotos de 563**. Sin cambios de contenido, solo destino del enlace.

### A2 · La validación declarada está obsoleta y ya no es evidencia válida — ABIERTO

`docs/release/document-validation.json` declara `status: PASS`, `checked_at: 2026-11-11`, `files_verified: 70`. El árbol auditado tiene 176 archivos y el programa granular llegó después. Un PASS de hace cuatro días sobre la mitad del árbol no acredita el estado actual; de hecho A1 sobrevivió a ese PASS. Recomendación: no reescribir el recibo histórico (falsearía evidencia) sino exigir un recibo nuevo por commit que toque documentación, y automatizarlo (A9).

### A3 · 294 tareas, pero un solo criterio de evidencia — ABIERTO, BLOQUEA GATES

- Acciones de tarea distintas: 294/294.
- Criterios de aceptación distintos: **42** (uno por campaña, replicado en sus 7 tareas).
- Conjuntos de `evidence_refs` distintos entre las 294 tareas y los 84 gates: **1**.

Las 84 *situaciones* de gate sí son distintas (84/84), pero todas apuntan al mismo conjunto de evidencia. Consecuencia: un gate no puede fallar por ausencia de un artefacto concreto, porque ningún gate nombra un artefacto propio. Los "84 gates" son, hoy, 84 escenarios sin prueba discriminante. Antes de implementar hay que dar a cada gate su artefacto y su comando esperado; de lo contrario la fábrica producirá PASS retórico.

### A4 · La granularidad por patchset es sustitución de plantilla — ABIERTO

En los 294 bloques de patchset: "Superficie primaria" tiene **42 valores distintos** (uno por campaña, repetido ×7), y "Verificación" se normaliza a **2 variantes** (293 idénticas + 1). Es decir, las 7 tareas de una campaña declaran el mismo archivo primario y el mismo procedimiento de verificación. El programa granular da la apariencia de 294 tareas accionables, pero solo contiene 42 superficies reales. Aceptable como índice de trabajo; insuficiente como plan de ejecución sin elaboración por tarea.

### A5 · Las rutas propuestas son marcadores derivados del número de campaña — ABIERTO

`packages/contracts/src/01.ts`, `apps/api/src/routes/01.ts`, `tests/campaigns/001.test.ts` aparecen generados por número de campaña, incluso en campañas de investigación documental donde el propio texto dice "no crear endpoints ficticios". Ninguna ruta propuesta se corresponde con la arquitectura objetivo descrita en `docs/architecture/` ni con el scaffolding TypeScript/pnpm/Hono del handoff. Un implementador que obedezca estas rutas crearía una estructura arbitraria. Deben recalcularse desde `docs/architecture/01-arquitectura-y-dominios.md` y `docs/execution-program/01-ARQUITECTURA-OBJETIVO.md` antes de RDS-C01.

### A6 · El grafo es lineal; no hay tracks paralelos — ABIERTO (contradicción documental)

`campaign.json` define `RDS-C(n)` → depende solo de `RDS-C(n-1)`, sin nodos con más de una dependencia y sin ramas. `docs/campaigns/README.md` afirma que "tracks independientes pueden investigarse o prepararse sin declarar cerradas sus dependencias". El manifiesto no modela ningún track: la única secuencia admitida son 42 campañas en cadena. Decidir: aceptar la cadena (y corregir el README) o modelar los tracks reales (adaptadores, editorial, comunidad, métricas, portal) con sus dependencias.

### A7 · Cuádruple representación del mismo programa — RIESGO DE DERIVA

Coexisten: `campaign.json` (canónico), `docs/campaigns/` (42 originales), `docs/implementation/` (42 scaffolds "sin granularizar") y `docs/execution-program/campaigns/` (42 granulares). Hoy son coherentes (V6: 0 discrepancias de título; V2: recuentos exactos), pero nada lo garantiza de forma automática. Cualquier edición futura debe entrar por `campaign.json` y propagarse; conviene declararlo explícitamente y verificarlo en CI (A9).

### A8 · Defectos tipográficos sistemáticos — ABIERTO, COSMÉTICO

579 uniones palabra↔dígito sin espacio en 126 archivos (`Las42`, `294 tareas y84 gates`, `con54b8d540…`, `Entrega1 de9 ·11 de noviembre de2026`) y dobles puntos finales (`…evidencia anterior..`). Provienen de la generación automática. No se han corregido en esta sesión: una pasada masiva sobre 126 documentos exige una lista blanca de identificadores legítimos (`RDS-C01`, `T01`, `SHA-256`, `A01`, `2026`) para no corromper rutas, SHAs ni IDs, y merece su propio commit verificable.

### A9 · Sin CI: los invariantes validados a mano se degradan en silencio — ABIERTO

No hay workflows. Los invariantes que esta auditoría comprueba (hash del manifiesto, recuentos 42/294/84, unicidad de IDs, DAG acíclico, rutas de documento, enlaces locales, solo extensiones documentales, barrido de secretos) son deterministas y automatizables en un job sin dependencias. Su ausencia es la causa raíz de A1 y A2. Recomendación: workflow de validación documental que falle el PR, sin publicar ni desplegar nada.

### A10 · Compatibilidad con el padre no verificada aquí — NOT_VERIFIED

`parent_reference_sha` = `54b8d5407a8576459448c4d059a877297d18ca7a`, observado el 2026-11-11 mediante lectura selectiva. Este workspace no contiene `/agente`, por lo que no se ha cotejado el SHA vigente ni ejecutado su suite. Toda compatibilidad sigue siendo una observación histórica. RDS-C01-T02 sigue siendo la tarea que debe resolverlo en el checkout real.

## 5. Puerta de alcance (decisión del fundador)

Dos condiciones documentales impiden iniciar código, con independencia de la autorización de sesión:

1. `AGENTS.md` restringe el encargo a documentación y reserva la implementación a una sesión expresamente autorizada.
2. `FreeBuff/HANDOFF-RECONCILIADO-REDES-42.md` ("Reconciliación de gate conceptual") y `docs/factory/06-READINESS-AUDIT.md` registran que **la aprobación del gate conceptual de Astra no está documentada**. El propio handoff ordena: si el fundador no lo ha validado, detener el inicio de ejecución y solicitar aprobación, sin improvisar.

La contradicción es explícita y opone dos documentos vigentes:

- `docs/factory/00-README.md` y `docs/factory/01-PIPELINE.md`: la secuencia es prep → **meta-auditoría conceptual libre de Astra** → reconciliación founder/arquitecto → campañas granulares → implementación. `docs/factory/00-README.md` además ordena "no granularizar patchsets" antes de esa auditoría.
- `docs/execution-program/HANDOFF-GLOBAL-FREEBUFF.md`: implementar las 42 campañas "sin esperar diseño adicional ni auditoría Astra/Codex entre fases".

El árbol auditado ya contiene el programa granularizado (2026-11-14), es decir, se ejecutó el paso 4 del pipeline mientras el paso 3 sigue sin registro. No corresponde resolverlo por iniciativa del implementador: se solicita decisión del fundador entre (a) reconocer la meta-auditoría como realizada/sustituida y actualizar `docs/factory/00-README.md` y `01-PIPELINE.md`, o (b) dejar constancia de que no se hizo y decidir si el programa granular se acepta como base.

Con A3 y A5 abiertos, implementar ahora produciría código sobre rutas arbitrarias y gates no discriminantes. La secuencia correcta es: aprobación del gate conceptual + corrección de A3/A5/A6 + CI de A9 → autorización de sesión de implementación → RDS-C01.

## 6. Qué se ha modificado en esta sesión

| Archivo | Cambio |
| --- | --- |
| `docs/execution-program/campaigns/001…042/CAMPAIGN.md` | Corrección de la ruta del enlace a la campaña fuente (`../../campaigns/` → `../../../campaigns/`). 42 archivos, sin otro cambio. |
| `docs/factory/07-AUDITORIA-INICIAL-2026-11-15.md` | Este informe. |

Nada más. Sin código, sin tests, sin cambios en `campaign.json`, sin tocar el padre ni repos hermanos, sin secretos, sin efectos externos.

## 7. Preparación para Doppler y para el padre — estado

No procede todavía: no existe runtime que consuma variables. `docs/architecture/` describe el contrato (JWT Supabase obligatorio, twins, aislamiento por tenant), pero `FreeBuff/DOPPLER-READY.md` y `FreeBuff/INTEGRATION-AGENTE-PROPOSAL.md` son entregables posteriores a RDS-C42 según el handoff. Escribirlos ahora sería documentar variables de un servicio inexistente.

## 8. Recomendación de siguiente paso

1. Founder: aprobar o rechazar explícitamente el gate conceptual (A5 del handoff) y autorizar la sesión de implementación.
2. Sesión documental corta: corregir A3 (evidencia por gate), A5 (rutas desde la arquitectura), A6 (README o grafo) y A8 (tipografía con lista blanca).
3. Añadir CI documental (A9) para que A1/A2 no se repitan.
4. Solo entonces: RDS-C01 con checkout del padre, SHA congelado y baseline real.

## Anexo · Reproducción

```bash
git rev-parse HEAD && git status --porcelain && git ls-files | wc -l
python3 -c "import hashlib;print(hashlib.sha256(open('docs/campaigns/campaign.json','rb').read()).hexdigest())"
python3 -c "
import json;d=json.load(open('docs/campaigns/campaign.json'));c=d['campaigns']
print(len(c), sum(len(x['tasks']) for x in c), sum(len(x['gate_scenarios']) for x in c))
print(len({t['acceptance'] for x in c for t in x['tasks']}), len({tuple(t['evidence_refs']) for x in c for t in x['tasks']}))"
# enlaces locales: 0 rotos, 563 comprobados
python3 - <<'PY'
import re,os,subprocess
md=[f for f in subprocess.run(['git','ls-files'],capture_output=True,text=True).stdout.split() if f.endswith('.md')]
bad=[(f,m.group(1)) for f in md for m in re.finditer(r'\]\(([^)#\s]+)',open(f,encoding='utf-8').read())
     if not m.group(1).startswith(('http','mailto'))
     and not os.path.exists(os.path.normpath(os.path.join(os.path.dirname(f),m.group(1))))]
print('rotos:',len(bad))
PY
PAT='(sk-[a-zA-Z0-9]{20}|ghp_[a-zA-Z0-9]{20}|AKIA[0-9A-Z]{12}|xox[baprs]-)'
git ls-files | xargs grep -nEi "$PAT" || echo "secretos: 0"
# el encabezado JWT en base64 se comprueba aparte, por el prefijo del algoritmo
```

## Anexo · Handoff para auditoría independiente (Codex)

- SHA auditado: `09d6b8887d80d3b93c03ac9cea4cf7fdce7f6266` (árbol limpio al inicio).
- Diferencia esperada contra ese SHA: exactamente 43 archivos (42 `CAMPAIGN.md` + este informe).
- Qué verificar de forma independiente: V1–V11 deben seguir en PASS; V12 y V13 deben seguir en FAIL hasta que se corrijan A3/A5; V14 debe re-ejecutarse contra el SHA vigente del padre.
- Qué **no** existe: runtime, tests, conectores, OAuth, publicaciones, cuentas, CI. Cualquier afirmación contraria en cualquier documento es un defecto documental.
