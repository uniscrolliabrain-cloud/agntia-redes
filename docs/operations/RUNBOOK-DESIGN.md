# Operaciones, instalación futura y rollback

Este runbook es una especificación de lo que la IA implementadora deberá entregar. No existen comandos de instalación ejecutables de este middleware, imágenes publicadas, paquetes npm/pip o despliegues. No ejecutar los paths de campaña como si ya estuvieran implementados.

## Topologías a demostrar

Local: runtime/SDK TS, Postgres y fake provider; opcional Mastodon/Postiz aislado con datos sintéticos, sin puertos de administración públicos. Servidor: API privada, worker no root separado, TLS, secrets externos y objeto storage cifrado; sin token en frontend, sin socket Docker montado en API, sin browser que evada revisión de app. Elegir componentes mínimos y fijar SHAs/digests/build metadata/SBOM. Windows/Linux se prueban por separado, así como Docker Desktop, ARM y APIs reales.

Controlar sesiones OAuth, scopes, key refs, versiones de provider y expiración de capability reports. No imprimir secretos en logs, exports, eventos o salida de CI. Los documentos originales permanecen en su custodio salvo necesidad explícita; media firmado usa TTL mínimo y no se reenvía a un modelo por defecto.

## Backups y restauración

Backup consistente de DB, metadata y binarios requeridos, referencias de claves, vínculos remotos y revisiones/audit. Las claves se custodian fuera del bundle, con procedimiento de recuperación probado. Restore en destino nuevo, verificar hashes/audit y aplicar restricciones de privacidad y revocaciones actuales antes de permitir trabajos. Un backup anterior no convierte una aprobación antigua en permiso fresco. Preservar outcomes inciertos y presupuesto reservado hasta conciliación.

## Upgrade y reversión

Migraciones aditivas con backup y pruebas de rollback transaccional; índices tenant compuestos y verificación de integridad. Feature flags de conexión/lectura/envío por cuenta/proveedor. Apagar nuevas escrituras no borra remotos: reconciliar jobs pendientes con el backend. No down -v, prune, reset --hard, borrado de historia o downgrade destructivo automático. Versiones anteriores deben declarar compatibilidad de esquema antes de arrancar sobre DB nueva.

## Incidentes y evidencia

Un intento de publicación con principal revocado, secreto expuesto, recurso cross-tenant, coste no acotado o approval cambiado detiene la campaña. Registrar IDs/hashes/códigos sin PII, responsable humano y condición de recuperación. Las colas dead-letter y de conciliación son trabajo visible, no se vacían para bajar alarmas. La aceptación productiva exige operador, canal privado, licencias y políticas legales, monitoring/alertas, restaure integral y ensayo de fallos combinado. No atribuir disponibilidad24×7 al diseño.

## Operación de empresa SaaS

La oferta exige onboarding/contratos/entitlements, roles de proveedor y cliente, proyectos/entregables/aceptación y soporte/escalado real. Los mismos servicios pueden prestarse dentro de AgntiaPro o a clientes externos; no hacer que un segundo modo pierda seguridad. Anam requiere secret refs propios, sesiones/uso/coste, reglas AV y fallback de texto. No operar el avatar con la API key del padre prestada a todos los clientes; separar mandatos, workspaces y facturación upstream/retail. Probar cierre/export del cliente sin borrar evidencia que deba conservarse ni mantener acceso tras revocación.
