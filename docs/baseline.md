# Baseline congelado — RDS-C01

**Fecha de observación:** 2026-11-15 · **Estado:** BASELINE_RECORDED (auditoría ejecutada; sin tocar el padre).

## Checkout propio

| Dato | Valor |
|---|---|
| Repositorio | `uniscrolliabrain-cloud/agntia-redes` |
| Rama de trabajo | `freebuff/8c2f53324d9548cdf6139c22` (aislada; `main` intacta) |
| HEAD previo al trabajo | `09d6b8887d80d3b93c03ac9cea4cf7fdce7f6266` (`docs(redes): publish social intelligence Concept Master v1.0`) |
| Árbol | 176 archivos versionados, todos Markdown/JSON antes de esta fase |
| Estado del checkout | limpio (`git status --porcelain` vacío) al iniciar |
| Main remota | `09d6b88…`; el checkout inicial estaba 112 commits por detrás y se actualizó por fast-forward |

Antes de esta fase el repositorio **no contenía** `package.json`, `src/`, `tests/`, contenedores, CI ni runtime. La documentación lo declaraba explícitamente (`DOCUMENTATION_ONLY`, `NOT_STARTED`).

## Inventario de fuentes leídas

- `README.md`, `AGENTS.md`, `docs/README.md`, `docs/01-producto-y-limites.md` … `docs/08-visio-anam.md`.
- `docs/architecture/01..04` (incluye twins/Supabase y trazabilidad).
- `docs/contracts/01-contratos.md`.
- `docs/campaigns/README.md`, `docs/campaigns/campaign.json` y los 42 documentos originales (índice y estructura; lectura íntegra de C01 y C19, scaffolds para el resto).
- `docs/prep/README.md`, `docs/factory/00..06` y handoffs marco.
- `docs/execution-program/00..04`, `CRITERIOS-DE-REPO-TERMINADO.md`, `AUDITORIA-POST-EJECUCION.md`, `HANDOFF-GLOBAL-FREEBUFF.md` y `FreeBuff/HANDOFF-RECONCILIADO-REDES-42.md`.
- `docs/concept-master/CONCEPT-MASTER.md` (visión de destino v1.0, no estado).
- `docs/research/*.json` (29 fuentes, 15 repos, 24 archivos del padre mapeados).

## Manifiesto verificado

`docs/campaigns/campaign.json` declara y el archivo cumple: **42 campañas, 294 tareas, 84 escenarios de gate**, todas `NOT_STARTED` / `NOT_EXECUTED`, `delivery_scope: DOCUMENTATION_ONLY`, `implementation_state: NOT_STARTED`, `parent_reference_sha: 54b8d5407a8576459448c4d059a877297d18ca7a`.

## Toolchain disponible en este entorno

| Herramienta | Versión | Nota |
|---|---|---|
| Node | v26.13.0 | el padre declara `>=22.6.0`; el runtime se fija a esa base |
| npm | 11.20.0 | pnpm no está instalado en este entorno; se usa npm con `package-lock.json` |
| Python | 3.12.3 | solo para validaciones de documentos/JSON |
| PostgreSQL de laboratorio | PGlite 0.5.x (WASM, PG16) | para RLS y migraciones; **no** sustituye un Postgres gestionado |

## Gates de la campaña

- **RDS-C01-G01 — PARTIAL:** no hay checkout del padre en este workspace. El cotejo contra `54b8d54…` no se ha repetido; se registra `NOT_VERIFIED` en `docs/parent-diff.md` y **no se hereda compatibilidad**. El informe identifica las interfaces afectadas a partir del mapa documental previo.
- **RDS-C01-G02 — PASS (local):** el checkout inicial tenía 112 commits de retraso y árbol limpio; se actualizó por fast-forward sin reset ni pérdida de trabajo ajeno. Sin cambios previos que separar.

## Diferencia conocida del manifiesto

El informe original habla de «14 repos» y `docs/release/document-validation.json` registra `research_repo_records: 15`; `docs/research/repositories.json` contiene 15 registros. Se conserva la discrepancia registrada, sin reescribir la evidencia anterior.

## Evidencia

`docs/editor` no aplica: la evidencia de esta fase está en `docs/versions.json`, `docs/parent-diff.md` y `docs/evidence/c001/README.md`.
