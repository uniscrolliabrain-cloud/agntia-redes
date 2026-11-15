import { randomUUID } from "node:crypto";

/**
 * Reserva de presupuesto (RDS-C22).
 * - Reserva antes del IO, con peor caso acotado.
 * - Un resultado incierto NO libera fondos: quedan comprometidos hasta conciliar.
 * - La misma idempotency key no reserva dos veces.
 */

export type ReservationState = "reserved" | "settled" | "released" | "uncertain";

export interface Reservation {
  readonly reservationId: string;
  readonly tenantId: string;
  readonly idempotencyKey: string;
  readonly amountCents: number;
  readonly state: ReservationState;
  readonly settledCents: number | null;
}

export type BudgetErrorCode = "BUDGET_EXCEEDED" | "RESERVATION_NOT_FOUND" | "INVALID_TRANSITION";

export class BudgetError extends Error {
  readonly code: BudgetErrorCode;

  constructor(code: BudgetErrorCode, message: string) {
    super(message);
    this.name = "BudgetError";
    this.code = code;
  }
}

export class BudgetLedger {
  private readonly reservations = new Map<string, Reservation>();

  constructor(private readonly capCents: number) {}

  /** Suma comprometida del tenant: reservado, liquidado e incierto. */
  committedCents(tenantId: string): number {
    let total = 0;
    for (const reservation of this.reservations.values()) {
      if (reservation.tenantId !== tenantId) continue;
      if (reservation.state === "reserved") total += reservation.amountCents;
      if (reservation.state === "uncertain") total += reservation.amountCents;
      if (reservation.state === "settled") total += reservation.settledCents ?? reservation.amountCents;
    }
    return total;
  }

  reserve(input: {
    tenantId: string;
    idempotencyKey: string;
    amountCents: number;
  }): { reservation: Reservation; duplicate: boolean } {
    if (!Number.isInteger(input.amountCents) || input.amountCents < 0) {
      throw new BudgetError("BUDGET_EXCEEDED", "importe no válido");
    }
    const key = `${input.tenantId}/${input.idempotencyKey}`;
    const existing = this.reservations.get(key);
    if (existing !== undefined) {
      return { reservation: existing, duplicate: true };
    }
    if (this.committedCents(input.tenantId) + input.amountCents > this.capCents) {
      throw new BudgetError("BUDGET_EXCEEDED", "presupuesto insuficiente");
    }
    const reservation: Reservation = {
      reservationId: `rsv_${randomUUID()}`,
      tenantId: input.tenantId,
      idempotencyKey: input.idempotencyKey,
      amountCents: input.amountCents,
      state: "reserved",
      settledCents: null,
    };
    this.reservations.set(key, reservation);
    return { reservation, duplicate: false };
  }

  get(tenantId: string, idempotencyKey: string): Reservation | undefined {
    return this.reservations.get(`${tenantId}/${idempotencyKey}`);
  }

  settle(tenantId: string, idempotencyKey: string, settledCents: number): Reservation {
    const reservation = this.require(tenantId, idempotencyKey);
    if (reservation.state !== "reserved") {
      throw new BudgetError("INVALID_TRANSITION", `no se liquida en ${reservation.state}`);
    }
    const updated: Reservation = { ...reservation, state: "settled", settledCents };
    this.reservations.set(`${tenantId}/${idempotencyKey}`, updated);
    return updated;
  }

  /** Resultado incierto: conserva el importe reservado para no liberar pasivo. */
  markUncertain(tenantId: string, idempotencyKey: string): Reservation {
    const reservation = this.require(tenantId, idempotencyKey);
    if (reservation.state !== "reserved") {
      throw new BudgetError("INVALID_TRANSITION", `no se marca incierto en ${reservation.state}`);
    }
    const updated: Reservation = { ...reservation, state: "uncertain" };
    this.reservations.set(`${tenantId}/${idempotencyKey}`, updated);
    return updated;
  }

  /** Solo se libera lo que nunca llegó a enviarse. */
  release(tenantId: string, idempotencyKey: string): Reservation {
    const reservation = this.require(tenantId, idempotencyKey);
    if (reservation.state !== "reserved") {
      throw new BudgetError("INVALID_TRANSITION", `no se libera en ${reservation.state}`);
    }
    const updated: Reservation = { ...reservation, state: "released" };
    this.reservations.set(`${tenantId}/${idempotencyKey}`, updated);
    return updated;
  }

  private require(tenantId: string, idempotencyKey: string): Reservation {
    const reservation = this.reservations.get(`${tenantId}/${idempotencyKey}`);
    if (reservation === undefined) {
      throw new BudgetError("RESERVATION_NOT_FOUND", "reserva inexistente");
    }
    return reservation;
  }
}
