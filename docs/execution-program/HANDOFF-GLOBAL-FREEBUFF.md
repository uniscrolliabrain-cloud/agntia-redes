# Handoff global Freebuff — Redes

Implementar las 42 campañas de `docs/execution-program/campaigns/001..042/CAMPAIGN.md`, contrastando originales en `docs/campaigns/` y manifest `docs/campaigns/campaign.json`. No esperar diseño adicional ni auditoría Astra/Codex entre fases. Rama de implementación aislada, congelar SHA y conservar main y padre intactos. Sin publicar, editar, borrar, enviar mensajes o gastar en cuentas reales sin autorización.

Al finalizar **cada fase**, editar el apartado **Reporte de ejecución de Freebuff** dentro de su `CAMPAIGN.md` con SHA, diff, archivos, tests/fixtures, resultados de los 2 gates, decisiones, incoherencias, deuda y aprendizajes; enlazar evidencia extendida en `docs/evidence/cNN/`. Continuar autónomamente. Si proveedor o integración bloqueada, marcar BLOCKED y avanzar trabajo independiente. No llamar PASS a mocks.

Al terminar, producir `docs/execution-evidence/FINAL-FREEBUFF-REPORT.md` con matriz 42×7, 84 gates, pruebas multi-tenant, E2E brief→aprobación→publicación sandbox→receipt→analítica, licencias, costes, riesgos y rollback. Entregar a Codex para auditoría posterior.
