import { describe, expect, it } from "vitest";
import { requestJson, TransportError, type FetchLike } from "../../src/providers/transport.js";

function jsonResponse(status: number, body: unknown, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...headers },
  });
}

const noSleep = async () => {};

describe("transporte de proveedor", () => {
  it("reintenta lecturas con backoff y respeta Retry-After", async () => {
    const statuses = [503, 200];
    const sleeps: number[] = [];
    const fetchImpl: FetchLike = async () => jsonResponse(statuses.shift() ?? 200, { ok: true });

    const result = await requestJson("https://api.example.test/posts", { method: "GET" }, {
      fetchImpl,
      sleep: async (ms) => {
        sleeps.push(ms);
      },
      maxReadRetries: 2,
    });

    expect(result.status).toBe(200);
    expect(sleeps).toHaveLength(1);
  });

  it("no reintenta escrituras ambiguas", async () => {
    let calls = 0;
    const fetchImpl: FetchLike = async () => {
      calls += 1;
      return jsonResponse(503, {});
    };

    await expect(
      requestJson("https://api.example.test/posts", { method: "POST", body: "{}" }, {
        fetchImpl,
        sleep: noSleep,
      }),
    ).rejects.toBeInstanceOf(TransportError);
    expect(calls).toBe(1);
  });

  it("bloquea hosts privados y metadata", async () => {
    for (const url of [
      "https://169.254.169.254/latest/meta-data",
      "https://127.0.0.1/token",
      "https://metadata.google.internal/computeMetadata",
      "http://api.example.test/plain",
    ]) {
      await expect(requestJson(url, { method: "GET" }, { sleep: noSleep })).rejects.toBeInstanceOf(
        TransportError,
      );
    }
  });

  it("aplica allowlist de host", async () => {
    await expect(
      requestJson("https://otro.example.test/x", { method: "GET" }, {
        fetchImpl: async () => jsonResponse(200, {}),
        urlPolicy: { allowedHosts: ["api.example.test"] },
        sleep: noSleep,
      }),
    ).rejects.toBeInstanceOf(TransportError);
  });

  it("corta respuestas gigantes y JSON inválido", async () => {
    await expect(
      requestJson("https://api.example.test/x", { method: "GET" }, {
        fetchImpl: async () => new Response("x".repeat(200), { status: 200 }),
        maxResponseBytes: 10,
        sleep: noSleep,
      }),
    ).rejects.toBeInstanceOf(TransportError);

    await expect(
      requestJson("https://api.example.test/x", { method: "GET" }, {
        fetchImpl: async () => new Response("<html>", { status: 200 }),
        sleep: noSleep,
      }),
    ).rejects.toBeInstanceOf(TransportError);
  });
});
