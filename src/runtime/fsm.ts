/**
 * Máquina de estados de publicación (RDS-C19).
 * Distingue propuesta, aprobación, programación, ejecución, aceptación del
 * proveedor y publicación confirmada. Nunca colapsa estados.
 */

export const PUBLICATION_STATES = [
  "DRAFT",
  "VALIDATED",
  "REVIEW_PENDING",
  "APPROVED",
  "SCHEDULED",
  "RESERVED",
  "QUEUED",
  "EXECUTING",
  "PROVIDER_ACCEPTED",
  "PUBLISHED_CONFIRMED",
  "BLOCKED",
  "REJECTED",
  "SUPERSEDED",
  "EXPIRED",
  "CANCELLED_BEFORE_SEND",
  "FAILED_BEFORE_SEND",
  "OUTCOME_UNKNOWN",
  "RECONCILIATION_REQUIRED",
  "PARTIAL_SUCCESS",
  "PROVIDER_REJECTED",
  "REMOTE_DELETED",
] as const;

export type PublicationState = (typeof PUBLICATION_STATES)[number];

const TRANSITIONS: Record<PublicationState, readonly PublicationState[]> = {
  DRAFT: ["VALIDATED", "CANCELLED_BEFORE_SEND", "SUPERSEDED", "EXPIRED", "BLOCKED"],
  VALIDATED: ["REVIEW_PENDING", "REJECTED", "SUPERSEDED", "EXPIRED", "BLOCKED"],
  REVIEW_PENDING: ["APPROVED", "REJECTED", "SUPERSEDED", "EXPIRED", "BLOCKED"],
  APPROVED: ["SCHEDULED", "RESERVED", "CANCELLED_BEFORE_SEND", "SUPERSEDED", "EXPIRED"],
  SCHEDULED: ["RESERVED", "QUEUED", "CANCELLED_BEFORE_SEND", "EXPIRED", "BLOCKED"],
  RESERVED: ["QUEUED", "CANCELLED_BEFORE_SEND", "BLOCKED"],
  QUEUED: ["EXECUTING", "CANCELLED_BEFORE_SEND", "FAILED_BEFORE_SEND", "EXPIRED"],
  EXECUTING: [
    "PROVIDER_ACCEPTED",
    "PROVIDER_REJECTED",
    "FAILED_BEFORE_SEND",
    "OUTCOME_UNKNOWN",
    "PARTIAL_SUCCESS",
  ],
  PROVIDER_ACCEPTED: [
    "PUBLISHED_CONFIRMED",
    "OUTCOME_UNKNOWN",
    "RECONCILIATION_REQUIRED",
    "PARTIAL_SUCCESS",
  ],
  PUBLISHED_CONFIRMED: ["REMOTE_DELETED"],
  OUTCOME_UNKNOWN: [
    "PUBLISHED_CONFIRMED",
    "RECONCILIATION_REQUIRED",
    "FAILED_BEFORE_SEND",
    "PROVIDER_ACCEPTED",
  ],
  RECONCILIATION_REQUIRED: [
    "PUBLISHED_CONFIRMED",
    "OUTCOME_UNKNOWN",
    "REMOTE_DELETED",
    "CANCELLED_BEFORE_SEND",
  ],
  PARTIAL_SUCCESS: ["PUBLISHED_CONFIRMED", "RECONCILIATION_REQUIRED", "REMOTE_DELETED"],
  BLOCKED: [],
  REJECTED: [],
  SUPERSEDED: [],
  EXPIRED: [],
  CANCELLED_BEFORE_SEND: [],
  FAILED_BEFORE_SEND: [],
  PROVIDER_REJECTED: [],
  REMOTE_DELETED: [],
};

export type TransitionErrorCode = "ILLEGAL_TRANSITION" | "TERMINAL_STATE";

export class TransitionError extends Error {
  readonly code: TransitionErrorCode;

  constructor(code: TransitionErrorCode, message: string) {
    super(message);
    this.name = "TransitionError";
    this.code = code;
  }
}

export function canTransition(from: PublicationState, to: PublicationState): boolean {
  return (TRANSITIONS[from] ?? []).includes(to);
}

export function assertTransition(from: PublicationState, to: PublicationState): void {
  if ((TRANSITIONS[from] ?? []).length === 0) {
    throw new TransitionError("TERMINAL_STATE", `${from} es terminal`);
  }
  if (!canTransition(from, to)) {
    throw new TransitionError("ILLEGAL_TRANSITION", `${from} -> ${to}`);
  }
}

export function isTerminal(state: PublicationState): boolean {
  return (TRANSITIONS[state] ?? []).length === 0;
}

export type MaterialChange =
  | "text"
  | "asset"
  | "channel"
  | "account"
  | "schedule"
  | "cta"
  | "visibility"
  | "locale"
  | "whitespace";

/**
 * El MVP invalida la aprobación ante cualquier cambio del payload publicado.
 * Un cambio de espaciado sin efecto semántico no la invalida, pero es una regla
 * explícita y probada, no un criterio libre del modelo.
 */
export function invalidatesApproval(change: MaterialChange): boolean {
  return change !== "whitespace";
}
