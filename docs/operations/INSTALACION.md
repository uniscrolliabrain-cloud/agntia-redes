# Instalación en `/agente` y verticales activables

**Estado 23-11-2026.** La instalación en el repo padre ya no es una lista de pasos manuales: hay un instalador idempotente, con preflight de SHA, montaje por entorno, verificación dentro del padre y reversión. Se ejecutó de punta a punta contra un clon real de `uniscrolliabrain-cloud/agente` en `9c4c309c9c05d26527563dd7ef094eebb7fbe276` (Linux x64, Node 26.13.1, pnpm 11.19.0).

Lo que sigue sin estar verificado: Windows, proveedores sociales reales, firma/SBOM, imagen de contenedor, despliegue y la aplicación sobre el checkout `/agente` del fundador. Nada de eso se declara aquí.

## Qué contiene el paquete

- Contratos estrictos, catálogo de capacidades y errores con `correlationId`.
- Verificación de JWT Supabase, membresías y PEP deny-by-default.
- Aprobación vinculada al payload, presupuesto con reserva y reconciliación.
- Registro de cuentas con `credentialRef` opaca (nunca al navegador ni al modelo).
- App Hono `createApp` para montar bajo un prefijo del host, con el contexto verificado del padre.
- Bridge `deriveHostPrincipal`, `assertModelCannotSupplyIdentity` y descriptor de servicio.
- Verticales `runPublicationVertical` y `runReconciliationVertical`.
- Plantillas de integración en `install/parent/`: adaptador del padre y verificador.

`hono` y `zod` son **peer dependencies**: el host aporta su instancia (el padre usa Hono 4.13 y Zod 4.6) y el paquete no duplica tipos ni runtimes. `jose` sigue siendo dependencia propia.

## Requisitos

- Node >= 22.6 y el gestor que declare el padre (`pnpm@11.19.0`).
- En el host: sesión verificada (JWT Supabase con issuer/audiencia/JWKS), registro de membresías y vault de credenciales.
- Ningún secreto en el repositorio, en el tarball ni en los logs.

## Comando único

```bash
node scripts/install-into-parent.mjs --parent /ruta/agente
```

Flags:

- `--dry-run` — no escribe nada; imprime el plan.
- `--revert` — desmonta el bloque, borra los archivos copiados y retira la dependencia.
- `--no-mount` — instala y verifica sin tocar `apps/server/src/index.ts`.
- `--skip-verify` — no arranca el padre; útil solo para preparar un checkout.
- `--allow-other-ref` — acepta un HEAD distinto del cotejado y lo marca como `NOT_VERIFIED`.
- `--report <ruta>` — escribe el recibo JSON del instalador.

El instalador aborta (`BLOCKED`) si el HEAD no es el cotejado, si cambió alguno de los blobs que sostienen el adaptador o si faltan las anclas de montaje. No publica en ningún registro, no despliega y no hace commits ni push en el padre.

## Qué escribe en el padre

| Ruta | Contenido |
|---|---|
| `vendor/agntia-redes-0.1.0.tgz` | tarball vendorizado, mismo patrón que `@agntia/ciberseguridad` |
| `package.json` | dependencia `file:vendor/agntia-redes-0.1.0.tgz` |
| `apps/server/src/redes-host.ts` | adaptador: monta `/api/redes` sobre el `ctx` ya verificado |
| `scripts/verify-redes-install.ts` | verificación en proceso con store temporal |
| `apps/server/src/index.ts` | bloque `REDES_MOUNT_V1` … `REDES_MOUNT_END_V1` |

El bloque de montaje es de cuatro líneas y solo se activa con `REDES_ENABLED=1`:

```ts
if (process.env.REDES_ENABLED === "1") {
  const { mountRedesFromEnv } = await import("./redes-host.ts");
  mountRedesFromEnv(app);
}
```

## Montaje, permisos y apagado

Rutas: `/api/redes/healthz` y `/api/redes/v1/social/accounts`. Al montarse bajo `/api/*`, la petición pasa antes por el middleware del padre, que resuelve `tenantId`, `actor` y `requestId`. El adaptador **no vuelve a verificar el token** y **no lee identidad de la petición**: toma el `ctx` verificado y lo convierte en principal con `deriveHostPrincipal`.

Variables (solo nombres; los valores viven en el gestor de secretos del host):

- `REDES_ENABLED=1` — sin esto no se monta nada y el padre arranca igual que antes.
- `REDES_CAPABILITIES` — lista separada por comas del catálogo (`social.account.health`, `social.publication.status`, …). Un valor desconocido **aborta el arranque**. Vacía = deny-by-default: las rutas `/v1` responden 403.
- `REDES_AUDIENCE` — por defecto `agente`.

Las capacidades no se derivan de roles (`admin`, `owner`) ni de nombres: son una allowlist explícita del host. `credentialRef` de cada cuenta apunta al vault y nunca se serializa al navegador.

Antes de despachar tools redactadas por el modelo, el host debe llamar a `assertModelCannotSupplyIdentity(toolArgs)`.

## Verificación dentro del padre

```bash
pnpm exec tsx scripts/verify-redes-install.ts
```

Arranca la app real del padre en modo `sample` contra un store temporal, sin red, y comprueba:

1. sin sesión responde 401;
2. hay login con token para los tres usuarios de prueba;
3. el montaje responde `healthz` con sesión;
4. el tenant A ve exactamente su cuenta;
5. la respuesta no contiene `credentialRef`;
6. el tenant B ve solo la suya (aislamiento);
7. un usuario sin capacidad recibe 403 aunque sea admin de su empresa;
8. la vertical de publicación termina `ACCEPTED` / `PROVIDER_ACCEPTED` y bloquea la aprobación de otro tenant;
9. la vertical de resultado incierto termina `PUBLISHED_CONFIRMED` con una sola llamada al proveedor.

## Resultado de la ejecución registrada

| Comprobación | Resultado |
|---|---|
| Preflight del padre (`9c4c309…`, 4 blobs, anclas) | PASS |
| Instalación + montaje + verificación en el padre | PASS, 10/10 comprobaciones |
| `tsc --noEmit` del padre tras instalar | exit 0 |
| `biome check` de los dos archivos añadidos | sin errores |
| Idempotencia (segunda ejecución) | `mount: already-mounted`, PASS |
| Reversión y reinstalación | `REVERTED` y después PASS |
| `npm run verify:install` del paquete | PASS, tarball 45 456 bytes, consumidor aislado |
| Suite del paquete | 103 tests / 21 archivos |

Recibo y entorno: [install-parent-2026-11-23.json](../evidence/c041/install-parent-2026-11-23.json).

## Reversión

```bash
node scripts/install-into-parent.mjs --parent /ruta/agente --revert
```

Deja el padre sin bloque de montaje, sin adaptador, sin verificador, sin tarball vendorizado y sin la dependencia. La reversión **no** devuelve `pnpm-lock.yaml` a su estado byte a byte: revísalo con `git -C /ruta/agente diff pnpm-lock.yaml` antes de commitear.

Antes de reanudar actividad: poner `REDES_WRITES_ENABLED=0` y `REDES_KILL_SWITCH=1` en el servicio, conciliar los `OUTCOME_UNKNOWN` pendientes y conservar DB, auditoría, receipts y presupuesto reservado. No borrar recursos remotos ni hacer downgrade destructivo.

## Verticales

```bash
npm run slice:publish
npm run slice:reconcile
```

- `slice:publish`: dos tenants, derechos del asset, aprobación humana vinculada, ejecución en proveedor falso, receipt y métricas con ventana; una aprobación de otro tenant queda bloqueada. Espera `outcome: ACCEPTED` y estado `PROVIDER_ACCEPTED`.
- `slice:reconcile`: timeout después de aceptar, `OUTCOME_UNKNOWN`, reintento rechazado sin segundo envío, reconciliación autoritativa y estado `PUBLISHED_CONFIRMED`.

Ambas usan reloj fijo y no tocan la red. No demuestran proveedor real ni permiso de plataforma. El mismo par se ejecuta dentro del padre desde `scripts/verify-redes-install.ts`.

## Lo que no se declara

- Aplicación sobre el `/agente` del fundador: no ejecutada; el ensayo se hizo sobre un clon en este workspace.
- Windows, firma/provenance/SBOM, imagen o Compose: `NOT_EXECUTED`.
- Proveedores sociales y OAuth reales: `BLOCKED` (solo adaptador falso determinista).
- Despliegue productivo y compatibilidad con el HEAD futuro del padre: `NOT_VERIFIED`.
- Los gates RDS-C41 conservan el estado del manifiesto (`NOT_EXECUTED`); este documento no los cambia.

Ver también [RUNBOOK-DESIGN.md](RUNBOOK-DESIGN.md), [parent-diff.md](../parent-diff.md) y [campaign.json](../campaigns/campaign.json).
