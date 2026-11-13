# ADTC — Redes, trazabilidad y observabilidad distribuida

**Propuesta conceptual v0.1, no SystemEvent real implementado.** Padre es autoridad de bus/grafo. Ciberseguridad puede reconstruir causalidad multi-repo/tenant sin acceso ilimitado a cuentas, tokens o mensajes.

```json
{"schemaVersion":"adtc/0.1","eventId":"unique-event","eventType":"redes.publication.approved","tenantId":"verified-tenant","actorId":"verified-actor","taskId":"task-ref","correlationId":"stable-publication-workflow","causationId":"prior-event-ref","requestId":"ingress-ref","traceId":"w3c-trace-id","spanId":"current-span-id","idempotencyKey":"effect-scope-key","source":"agntia-redes","resourceRefs":["social-account-ref","variant-version-ref"],"evidenceRefs":["approval-ref","asset-rights-ref"],"payloadRef":"restricted-ref"}
```

Bridge versionado a SystemEvent del padre, no inventar enums nativos. Propagar tenant, mandato, actor, correlación y fuente; nuevo eventId por evento, attemptId por intento, idempotencyKey estable por efecto. Outbox/inbox, dedupe, retry budget, DLQ, outcome_unknown, reconciliación proveedor antes de reintentar publicación/comentario. Telemetría técnica muestreable, receipts y approvals durables.

## Seguridad
No poner tokens OAuth, DMs, teléfonos, PII, media con derechos restringidos ni payloads completos en eventos/OTel. Refs cifradas y ACL por tenant, cuenta, finalidad. Observabilidad no debe bloquear publicación ni exponer contenido a otros tenants.

## Ejemplo
Marketing entrega brief → Branding valida assets → Redes genera variantes → founder/cliente aprueba versión → job autorizado → Postiz/proveedor devuelve ACK → verificar publicación efectiva → recopilar métricas → Clientes atiende incidencia social con handoff → padre correlaciona → Ciberseguridad observa sin contenido sensible.

## Negativos
Tenant B no accede cuenta A; OAuth revocado bloquea; post modificado invalida approval; timeout no duplica publicación; no contar job queued como published; replays no publican de nuevo.
