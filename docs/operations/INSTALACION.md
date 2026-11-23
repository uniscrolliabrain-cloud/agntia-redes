# Instalación en `/agente` y verticales activables

**Estado 23-11-2026.** El paquete compila (`dist/` ESM + tipos), se empaqueta con `npm pack` y se instala en un consumidor limpio fuera del checkout con `npm run verify:install`. Incluye la app Hono, el bridge de identidad del host y dos verticales deterministas sobre proveedor falso: publicación y resultado incierto.

No hay proveedor social real, OAuth verificado, despliegue ni cotejo del padre en HEAD. Nada de eso se declara aquí.

## Qué contiene el paquete

- Contratos estrictos, catálogo de capacidades y errores con `correlationId`.
- Verificación de JWT Supabase, membresías y PEP deny-by-default.
- Aprobación vinculada al payload, presupuesto con reserva y reconciliación.
- Registro de cuentas con `credentialRef` opaca (nunca al navegador ni al modelo).
- App Hono `createApp` para montar bajo un prefijo del host.
- Bridge `deriveHostPrincipal`, `assertModelCannotSupplyIdentity` y descriptor de servicio.
- Verticales `runPublicationVertical` y `runReconciliationVertical`.

`dist/` no incluye `src/`, `tests/`, `apps/` ni `scripts/`; el smoke de instalación lo comprueba.

## Requisitos

- Node >= 22.6 (probado con 26.13.1) y npm 11.
- En el host: sesión verificada (JWT Supabase con issuer/audiencia/JWKS), registro de membresías y vault de credenciales.
- Ningún secreto en el repositorio, en el tarball ni en los logs.

## Build, paquete y smoke de instalación

```bash
npm ci
npm run build
npm pack --pack-destination /tmp
npm run verify:install
```

`verify:install` compila, empaqueta, instala el tarball en un directorio temporal **fuera del checkout**, importa `agntia-redes` y ejecuta ambas verticales. Espera `"result": "PASS"`.

Ese smoke cubre solo parte de RDS-C41-G01. El gate sigue `NOT_EXECUTED`: faltan Windows, rollback, firma/provenance/SBOM e imagen o Compose.

## Instalación en `/agente`

**Bloqueo registrado.** El checkout del padre no está en este workspace y el cotejo contra `54b8d5407a8576459448c4d059a877297d18ca7a` sigue `NOT_VERIFIED`. Los pasos siguientes los ejecuta quien tenga el checkout y autorización; este repositorio no los aplica.

1. Fijar el SHA y leer las instrucciones del checkout:

```bash
git -C /agente rev-parse HEAD
```

Si el SHA difiere de `54b8d54…`, repetir el cotejo de los 12 archivos de [parent-source-map.json](../research/parent-source-map.json) y actualizar [parent-diff.md](../parent-diff.md) antes de afirmar compatibilidad.

2. Añadir la dependencia sin publicar en un registro público:

```bash
pnpm --filter <paquete-host> add /ruta/agntia-redes-0.1.0.tgz
```

o `"agntia-redes": "file:../agntia-redes"` con `npm run build` previo.

3. Montar la app en el server Hono del host:

```ts
import { createApp, deriveHostPrincipal } from "agntia-redes";

const redes = createApp({
  authenticate: async (authorization) => {
    const session = await host.verifySession(authorization); // JWT + membresía del host
    return deriveHostPrincipal(session.context, {
      membershipCapabilities: session.membership.capabilities,
      audience: "agente",
    });
  },
  accounts: host.socialAccounts,
});

parent.route("/redes", redes);
```

4. Antes de despachar tools redactadas por el modelo, llamar a `assertModelCannotSupplyIdentity(toolArgs)`. La identidad sale del contexto verificado, nunca del payload del LLM.

5. Flags y variables (solo nombres; los valores viven en el gestor de secretos del host):

- `REDES_PROVIDER=fake` — único adaptador disponible.
- `REDES_WRITES_ENABLED=0` — apagado por defecto.
- `REDES_KILL_SWITCH=1` — apagado por defecto.
- `SUPABASE_JWKS_URL`, `SUPABASE_JWT_ISSUER`, `SUPABASE_JWT_AUDIENCE`.
- `credentialRef` de cada cuenta apunta al vault del host; no se copia al middleware.

6. Activar las verticales:

```bash
npm run slice:publish
npm run slice:reconcile
```

- `slice:publish`: dos tenants, derechos del asset, aprobación humana vinculada, ejecución en proveedor falso, receipt y métricas con ventana; una aprobación de otro tenant queda bloqueada. Espera `outcome: ACCEPTED` y estado `PROVIDER_ACCEPTED`.
- `slice:reconcile`: timeout después de aceptar, `OUTCOME_UNKNOWN`, reintento rechazado sin segundo envío, reconciliación autoritativa y estado `PUBLISHED_CONFIRMED`.

Ambas usan reloj fijo y no tocan la red. No demuestran proveedor real ni permiso de plataforma.

## Reversión

1. Poner `REDES_WRITES_ENABLED=0` y `REDES_KILL_SWITCH=1`.
2. Desmontar `/redes` del router del host.
3. Retirar la dependencia del workspace y volver a desplegar el host.
4. Conciliar los `OUTCOME_UNKNOWN` pendientes antes de reanudar; conservar DB, auditoría, receipts y presupuesto reservado. No borrar recursos remotos ni hacer downgrade destructivo.

## Lo que no se declara

- Compatibilidad con el HEAD del padre: `NOT_VERIFIED`.
- Proveedores sociales y OAuth reales: `BLOCKED` (solo adaptador falso determinista).
- Instalación limpia en Windows, firma/provenance/SBOM, imagen de contenedor: `NOT_EXECUTED`.
- Los gates RDS-C41 y RDS-C23/C24 conservan el estado del manifiesto; este documento no los cambia.

Ver también [RUNBOOK-DESIGN.md](RUNBOOK-DESIGN.md) y [campaign.json](../campaigns/campaign.json).
