/**
 * Validación de medios antes de aceptar un asset (RDS-C17).
 * El MIME declarado no es confiable: se comprueba la firma real del archivo.
 */

export const MAX_ASSET_BYTES = 256 * 1024 * 1024;

const SIGNATURES: ReadonlyArray<{ mime: string; match: (bytes: Uint8Array) => boolean }> = [
  {
    mime: "image/png",
    match: (b) => b.length > 8 && b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47,
  },
  { mime: "image/jpeg", match: (b) => b.length > 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff },
  {
    mime: "image/gif",
    match: (b) => b.length > 6 && b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x38,
  },
  {
    mime: "image/webp",
    match: (b) =>
      b.length > 12 &&
      b[0] === 0x52 &&
      b[1] === 0x49 &&
      b[2] === 0x46 &&
      b[3] === 0x46 &&
      b[8] === 0x57 &&
      b[9] === 0x45 &&
      b[10] === 0x42 &&
      b[11] === 0x50,
  },
  {
    mime: "video/mp4",
    match: (b) =>
      b.length > 12 &&
      b[4] === 0x66 &&
      b[5] === 0x74 &&
      b[6] === 0x79 &&
      b[7] === 0x70,
  },
  {
    mime: "video/webm",
    match: (b) =>
      b.length > 4 && b[0] === 0x1a && b[1] === 0x45 && b[2] === 0xdf && b[3] === 0xa3,
  },
  {
    mime: "application/pdf",
    match: (b) => b.length > 4 && b[0] === 0x25 && b[1] === 0x50 && b[2] === 0x44 && b[3] === 0x46,
  },
];

/** Tipos activos por contenido: nunca se aceptan como asset social. */
const FORBIDDEN_MIME = new Set([
  "image/svg+xml",
  "text/html",
  "application/xhtml+xml",
  "application/javascript",
  "text/javascript",
  "application/x-msdownload",
  "application/x-sh",
]);

export type MediaErrorCode =
  | "UNSUPPORTED_MEDIA_TYPE"
  | "DECLARED_MIME_MISMATCH"
  | "ASSET_TOO_LARGE"
  | "UNSAFE_FILENAME";

export class MediaError extends Error {
  readonly code: MediaErrorCode;

  constructor(code: MediaErrorCode, message: string) {
    super(message);
    this.name = "MediaError";
    this.code = code;
  }
}

export function sniffMime(bytes: Uint8Array): string | null {
  for (const signature of SIGNATURES) {
    if (signature.match(bytes)) {
      return signature.mime;
    }
  }
  return null;
}

export function sanitizeFilename(filename: string): string {
  const base = filename.replace(/\\/g, "/").split("/").pop() ?? "";
  const trimmed = base.trim();
  if (trimmed.length === 0 || trimmed === "." || trimmed === "..") {
    throw new MediaError("UNSAFE_FILENAME", "nombre de archivo no válido");
  }
  if (!/^[A-Za-z0-9][A-Za-z0-9._-]{0,119}$/.test(trimmed)) {
    throw new MediaError("UNSAFE_FILENAME", "nombre de archivo no permitido");
  }
  return trimmed;
}

export interface AssetUpload {
  readonly filename: string;
  readonly declaredMime: string;
  readonly bytes: Uint8Array;
}

export interface AcceptedAsset {
  readonly filename: string;
  readonly mime: string;
  readonly byteSize: number;
}

/** Acepta solo medios cuyo contenido coincide con el MIME declarado. */
export function assertUploadAllowed(upload: AssetUpload): AcceptedAsset {
  if (upload.bytes.byteLength > MAX_ASSET_BYTES) {
    throw new MediaError("ASSET_TOO_LARGE", "asset por encima del límite");
  }
  const declared = upload.declaredMime.toLowerCase().split(";")[0]?.trim() ?? "";
  if (FORBIDDEN_MIME.has(declared)) {
    throw new MediaError("UNSUPPORTED_MEDIA_TYPE", "tipo de contenido activo no permitido");
  }
  const sniffed = sniffMime(upload.bytes);
  if (sniffed === null) {
    throw new MediaError("UNSUPPORTED_MEDIA_TYPE", "firma de archivo no reconocida");
  }
  if (sniffed !== declared) {
    throw new MediaError("DECLARED_MIME_MISMATCH", "el tipo declarado no coincide con el contenido");
  }
  return {
    filename: sanitizeFilename(upload.filename),
    mime: sniffed,
    byteSize: upload.bytes.byteLength,
  };
}
