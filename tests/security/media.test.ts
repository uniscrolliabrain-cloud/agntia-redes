import { describe, expect, it } from "vitest";
import { assertUploadAllowed, MediaError, sanitizeFilename } from "../../src/media/index.js";
import { AssetRightsSchema, evaluateRights, type AssetRights } from "../../src/domain/rights.js";

const PNG = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 0]);
const JPEG = new Uint8Array([0xff, 0xd8, 0xff, 0xe0, 0, 0, 0, 0]);
const SVG = new TextEncoder().encode('<svg xmlns="http://www.w3.org/2000/svg"><script/></svg>');

describe("medios", () => {
  it("acepta un PNG cuyo contenido coincide con el MIME declarado", () => {
    const accepted = assertUploadAllowed({ filename: "foto.png", declaredMime: "image/png", bytes: PNG });
    expect(accepted).toEqual({ filename: "foto.png", mime: "image/png", byteSize: PNG.byteLength });
  });

  it("rechaza contenido que no coincide con el MIME declarado", () => {
    expect(() =>
      assertUploadAllowed({ filename: "foto.jpg", declaredMime: "image/jpeg", bytes: PNG }),
    ).toThrow(MediaError);
  });

  it("rechaza formatos activos aunque el proveedor los acepte", () => {
    expect(() =>
      assertUploadAllowed({ filename: "x.svg", declaredMime: "image/svg+xml", bytes: SVG }),
    ).toThrow(/no permitido/);
  });

  it("neutraliza rutas y nombres inseguros", () => {
    expect(sanitizeFilename("../../etc/passwd")).toBe("passwd");
    expect(() => sanitizeFilename("foto;rm -rf.png")).toThrow(MediaError);
    expect(() => sanitizeFilename("..")).toThrow(MediaError);
  });

  it("no confunde JPEG con PNG", () => {
    expect(
      assertUploadAllowed({ filename: "foto.jpg", declaredMime: "image/jpeg", bytes: JPEG }).mime,
    ).toBe("image/jpeg");
  });
});

function rights(overrides: Partial<AssetRights> = {}): AssetRights {
  return AssetRightsSchema.parse({
    assetRef: "asset-1",
    tenantId: "tenant-a",
    licensor: "Estudio propio",
    licenseRef: "L-2026-1",
    territories: ["ES", "FR"],
    validFrom: "2026-01-01T00:00:00Z",
    validUntil: "2027-01-01T00:00:00Z",
    commercialUse: true,
    derivativeWorks: true,
    musicRights: true,
    modelReleaseRef: "release-1",
    syntheticMedia: false,
    sourceRef: "source-1",
    ...overrides,
  });
}

const now = new Date("2026-11-15T10:00:00Z");
const baseInput = {
  now,
  territory: "ES",
  paidPromotion: false,
  hasMusic: false,
  depictsPerson: true,
  isDerivative: false,
};

describe("derechos de activos", () => {
  it("sin licencia no hay permiso", () => {
    expect(evaluateRights({ ...baseInput, rights: null })).toEqual({
      allowed: false,
      reasons: ["RIGHTS_UNKNOWN"],
    });
  });

  it("rechaza licencia vencida o territorio no cubierto", () => {
    const expired = evaluateRights({ ...baseInput, rights: rights({ validUntil: "2026-06-01T00:00:00Z" }) });
    expect(expired).toEqual({ allowed: false, reasons: ["RIGHTS_EXPIRED"] });

    const territory = evaluateRights({ ...baseInput, territory: "DE", rights: rights() });
    expect(territory).toEqual({ allowed: false, reasons: ["TERRITORY_NOT_COVERED"] });
  });

  it("rechaza uso comercial y música sin derechos", () => {
    const paid = evaluateRights({
      ...baseInput,
      paidPromotion: true,
      rights: rights({ commercialUse: false }),
    });
    expect(paid).toEqual({ allowed: false, reasons: ["COMMERCIAL_USE_NOT_LICENSED"] });

    const music = evaluateRights({
      ...baseInput,
      hasMusic: true,
      rights: rights({ musicRights: null }),
    });
    expect(music).toEqual({ allowed: false, reasons: ["MUSIC_RIGHTS_UNKNOWN"] });
  });

  it("acepta cuando todo está cubierto", () => {
    expect(evaluateRights({ ...baseInput, rights: rights() })).toEqual({ allowed: true });
  });
});
