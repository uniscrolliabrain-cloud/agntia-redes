# Evidencia de la campaña 41 — empaquetado e instalación

**Estos artefactos no cierran gates.** RDS-C41-G01 y RDS-C41-G02 siguen `NOT_EXECUTED` en el manifiesto: falta Windows, rollback con datos reales, firma/provenance/SBOM e imagen o Compose.

## install-parent-2026-11-23.json

Ensayo de instalación del paquete en un clon de solo lectura de `uniscrolliabrain-cloud/agente` en `9c4c309c9c05d26527563dd7ef094eebb7fbe276`, con arranque real del servidor del padre y peticiones autenticadas.

Cubre:

- preflight del SHA y de los blobs que sostienen el adaptador;
- instalación vendorizada igual que `@agntia/ciberseguridad`;
- montaje en `/api/redes` detrás del `ctx` verificado del padre;
- 10 comprobaciones HTTP y de las dos verticales;
- idempotencia, reversión, reinstalación, typecheck y lint.

No cubre:

- aplicación sobre el `/agente` del fundador;
- Windows ni otras arquitecturas;
- proveedores sociales reales u OAuth;
- firma, SBOM, imagen/Compose o despliegue;
- conservación de DB/auditoría durante un rollback con datos de producción.

La guía operativa está en [INSTALACION.md](../../operations/INSTALACION.md) y el cotejo en [parent-diff.md](../../parent-diff.md).
