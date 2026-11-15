import type {
  CreateDeliveryInput,
  CreateDeliveryResult,
  DeliveryLookup,
  LookupMode,
  MetricReading,
  SocialPublisherPort,
} from "../../providers/port.js";

/**
 * Proveedor falso determinista (RDS-C08/C23).
 * Un mock prueba contrato local, no permiso ni eficacia del proveedor real.
 */

export type FakeScript = "accept" | "reject" | "timeout_after_accept";

export interface FakeProviderOptions {
  readonly script?: FakeScript;
  readonly lookupMode?: LookupMode;
  readonly now?: () => Date;
}

export class FakeProvider implements SocialPublisherPort {
  readonly provider = "fake";
  readonly lookupMode: LookupMode;
  readonly calls: CreateDeliveryInput[] = [];
  private readonly published = new Map<string, { providerPostId: string; publishedAt: string }>();
  private readonly script: FakeScript;
  private readonly now: () => Date;
  private counter = 0;

  constructor(options: FakeProviderOptions = {}) {
    this.script = options.script ?? "accept";
    this.lookupMode = options.lookupMode ?? "authoritative";
    this.now = options.now ?? (() => new Date());
  }

  async createDelivery(input: CreateDeliveryInput): Promise<CreateDeliveryResult> {
    this.calls.push(input);
    this.counter += 1;
    const providerPostId = `fake_post_${this.counter}`;
    const at = this.now().toISOString();

    if (this.script === "reject") {
      return { kind: "rejected", errorCode: "content_policy", rejectedAt: at };
    }

    if (this.script === "timeout_after_accept") {
      // El proveedor sí registró el efecto antes de perderse la respuesta.
      this.published.set(input.operationKey, { providerPostId, publishedAt: at });
      throw new Error("timeout simulado después de aceptar en el proveedor");
    }

    this.published.set(input.operationKey, { providerPostId, publishedAt: at });
    return {
      kind: "accepted",
      receiptId: `fake_receipt_${this.counter}`,
      providerJobId: null,
      providerPostId,
      acceptedAt: at,
    };
  }

  async lookupDelivery(input: { operationKey: string }): Promise<DeliveryLookup> {
    const hit = this.published.get(input.operationKey);
    if (hit === undefined) {
      return this.lookupMode === "unsupported" ? { kind: "unsupported" } : { kind: "not_found" };
    }
    return { kind: "found", providerPostId: hit.providerPostId, publishedAt: hit.publishedAt };
  }

  async readMetrics(): Promise<readonly MetricReading[]> {
    return [];
  }
}
