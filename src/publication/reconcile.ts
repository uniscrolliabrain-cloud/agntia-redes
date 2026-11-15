import type { SocialPublisherPort } from "../providers/port.js";
import { assertTransition } from "../runtime/fsm.js";
import type { PublicationIntentRecord } from "./commands.js";

/**
 * Reconciliación de resultados inciertos (RDS-C24).
 * "No encontrado" solo permite declarar no enviado si el proveedor ofrece
 * búsqueda autoritativa; en cualquier otro caso queda en revisión humana.
 */

export interface ReconcileDependencies {
  readonly provider: SocialPublisherPort;
  readonly clock?: () => Date;
}

export type ReconcileOutcome =
  | { readonly status: "CONFIRMED"; readonly providerPostId: string }
  | { readonly status: "NOT_SENT" }
  | { readonly status: "UNKNOWN"; readonly code: string };

export async function reconcileIntent(
  intent: PublicationIntentRecord,
  deps: ReconcileDependencies,
): Promise<ReconcileOutcome> {
  if (intent.attempt === null) {
    return { status: "UNKNOWN", code: "NO_ATTEMPT" };
  }
  if (intent.state !== "OUTCOME_UNKNOWN" && intent.state !== "RECONCILIATION_REQUIRED") {
    return { status: "UNKNOWN", code: "STATE_NOT_RECONCILABLE" };
  }

  let lookup;
  try {
    lookup = await deps.provider.lookupDelivery({ operationKey: intent.attempt.operationKey });
  } catch {
    assertTransition(intent.state, "RECONCILIATION_REQUIRED");
    intent.state = "RECONCILIATION_REQUIRED";
    return { status: "UNKNOWN", code: "LOOKUP_FAILED" };
  }

  if (lookup.kind === "found") {
    assertTransition(intent.state, "PUBLISHED_CONFIRMED");
    intent.state = "PUBLISHED_CONFIRMED";
    intent.providerPostId = lookup.providerPostId;
    if (intent.attempt !== null) {
      intent.attempt.providerPostId = lookup.providerPostId;
    }
    return { status: "CONFIRMED", providerPostId: lookup.providerPostId };
  }

  if (lookup.kind === "not_found" && deps.provider.lookupMode === "authoritative") {
    assertTransition(intent.state, "FAILED_BEFORE_SEND");
    intent.state = "FAILED_BEFORE_SEND";
    return { status: "NOT_SENT" };
  }

  assertTransition(intent.state, "RECONCILIATION_REQUIRED");
  intent.state = "RECONCILIATION_REQUIRED";
  return {
    status: "UNKNOWN",
    code: lookup.kind === "not_found" ? "LOOKUP_NOT_AUTHORITATIVE" : `LOOKUP_${lookup.kind}`,
  };
}
