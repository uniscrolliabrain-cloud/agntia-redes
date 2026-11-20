import { describe, expect, it } from "vitest";
import {
  DOCUMENTED_PROVIDERS,
  ProviderUnavailableError,
  assertRuntimeEnabled,
  findProviderRecord,
  resolveCapability,
  type ProviderRecord,
} from "../../src/providers/catalog.js";

const now = new Date("2026-11-15T10:00:00Z");

describe("catálogo de proveedores", () => {
  // Caso nombrado del gate RDS-C06-G01: documentado no equivale a endpoint disponible.
  it("RDS-C06-G01 · lo documentado no habilita runtime", () => {
    const mastodon = findProviderRecord("mastodon");
    expect(mastodon).toBeDefined();
    const resolution = resolveCapability(mastodon as ProviderRecord, "createDelivery", now);
    expect(resolution.state).toBe("DOCUMENTED");
    expect(resolution.enabled).toBe(false);
  });

  it("ningún proveedor del catálogo inicial está VERIFIED_RUNTIME", () => {
    for (const record of DOCUMENTED_PROVIDERS) {
      for (const capability of record.capabilities) {
        expect(capability.state).not.toBe("VERIFIED_RUNTIME");
      }
    }
  });

  // Caso nombrado del gate RDS-C06-G02: una verificación caducada bloquea aunque el último probe fuera 200.
  it("RDS-C06-G02 · una verificación caducada vuelve a UNKNOWN", () => {
    const record: ProviderRecord = {
      provider: "mastodon",
      apiVersion: "test",
      capabilities: [
        {
          operation: "createDelivery",
          state: "VERIFIED_RUNTIME",
          verifiedAt: "2026-01-01T00:00:00Z",
          expiresAt: "2026-02-01T00:00:00Z",
          evidenceRef: "probe-1",
        },
      ],
    };
    const resolution = resolveCapability(record, "createDelivery", now);
    expect(resolution.enabled).toBe(false);
    expect(resolution.state).toBe("UNKNOWN");
    expect(() => assertRuntimeEnabled(record, "createDelivery", now)).toThrow(
      ProviderUnavailableError,
    );
  });

  it("una verificación vigente habilita solo esa operación", () => {
    const record: ProviderRecord = {
      provider: "mastodon",
      apiVersion: "test",
      capabilities: [
        {
          operation: "createDelivery",
          state: "VERIFIED_RUNTIME",
          verifiedAt: "2026-11-01T00:00:00Z",
          expiresAt: "2026-12-01T00:00:00Z",
          evidenceRef: "probe-2",
        },
      ],
    };
    expect(resolveCapability(record, "createDelivery", now).enabled).toBe(true);
    expect(resolveCapability(record, "readMetrics", now).enabled).toBe(false);
  });
});
