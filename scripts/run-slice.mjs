#!/usr/bin/env node
/**
 * Ejecuta una vertical sobre el paquete compilado (`dist/`), no sobre `src/`.
 * Uso: node scripts/run-slice.mjs <publication|reconciliation>
 */
const which = process.argv[2];

if (which !== "publication" && which !== "reconciliation") {
  console.error("uso: node scripts/run-slice.mjs <publication|reconciliation>");
  process.exit(2);
}

try {
  const { runPublicationVertical, runReconciliationVertical } = await import("../dist/index.js");
  const report =
    which === "publication"
      ? await runPublicationVertical()
      : await runReconciliationVertical();
  console.log(JSON.stringify(report, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.message : "fallo al ejecutar la vertical");
  process.exit(1);
}
