/**
 * Puerto de proveedor social (RDS-C08).
 * Métodos de negocio tipados; nunca HTTP/path arbitrario desde un modelo.
 */

export interface PublicationPayload {
  readonly text: string;
  readonly locale: "es" | "en" | "fr";
  readonly channel: string;
  readonly visibility: "public" | "unlisted" | "private";
  readonly assetRefs: readonly string[];
  readonly altText: string | null;
  readonly disclosures: readonly string[];
}

export interface CreateDeliveryInput {
  readonly tenantId: string;
  readonly accountBindingId: string;
  readonly payload: PublicationPayload;
  readonly operationKey: string;
  readonly requestFingerprint: string;
  readonly signal?: AbortSignal;
}

export type CreateDeliveryResult =
  | {
      readonly kind: "accepted";
      readonly receiptId: string;
      readonly providerJobId: string | null;
      readonly providerPostId: string | null;
      readonly acceptedAt: string;
    }
  | {
      readonly kind: "rejected";
      readonly errorCode: string;
      readonly rejectedAt: string;
    };

export type DeliveryLookup =
  | { readonly kind: "found"; readonly providerPostId: string; readonly publishedAt: string }
  | { readonly kind: "not_found" }
  | { readonly kind: "ambiguous" }
  | { readonly kind: "unsupported" };

export type LookupMode = "authoritative" | "eventual" | "unsupported";

export interface SocialPublisherPort {
  readonly provider: string;
  readonly lookupMode: LookupMode;
  createDelivery(input: CreateDeliveryInput): Promise<CreateDeliveryResult>;
  lookupDelivery(input: { operationKey: string; signal?: AbortSignal }): Promise<DeliveryLookup>;
  readMetrics(input: {
    accountBindingId: string;
    providerPostId: string;
  }): Promise<readonly MetricReading[]>;
}

export interface MetricReading {
  readonly metric: "impressions" | "reach" | "likes" | "comments" | "shares" | "clicks";
  readonly definitionVersion: string;
  readonly windowStart: string;
  readonly windowEnd: string;
  readonly observedAt: string;
  readonly value: number | null;
  readonly unit: "count";
  readonly coverage: "complete" | "partial" | "unknown";
}
