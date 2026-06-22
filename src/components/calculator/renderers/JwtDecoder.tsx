"use client";

import { useState } from "react";
import ResultsSection from "../ResultsSection";

interface JwtPayload {
  iat?: number;
  exp?: number;
  [key: string]: unknown;
}

interface TokenInfo {
  issuedAt: string;
  expiresAt: string;
  isExpired: boolean;
  timeRemaining: string;
}

export default function JwtDecoder() {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGV2Q2FsYyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxMDAwMDAwMCwiZXhwIjoyMDk5OTk5OTk5fQ.signature"
  );

  const [header, setHeader] = useState<Record<string, unknown> | null>(null);

  const [payload, setPayload] = useState<JwtPayload | null>(null);

  const [error, setError] = useState("");

  const [tokenInfo, setTokenInfo] = useState<TokenInfo>({
    issuedAt: "N/A",
    expiresAt: "N/A",
    isExpired: false,
    timeRemaining: "N/A",
  });

  const base64UrlDecode = (value: string): string => {
    let base64 = value.replace(/-/g, "+").replace(/_/g, "/");

    while (base64.length % 4 !== 0) {
      base64 += "=";
    }

    const binary = window.atob(base64);

    const bytes = Uint8Array.from(binary, (char) =>
      char.charCodeAt(0)
    );

    return new TextDecoder().decode(bytes);
  };

  const calculateRemainingTime = (
    exp: number
  ): string => {
    const diff = exp * 1000 - Date.now();

    if (diff <= 0) {
      return "Expired";
    }

    const days = Math.floor(
      diff / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (diff % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    return `${days}d ${hours}h ${minutes}m`;
  };

  const decodeJwt = () => {
    try {
      setError("");

      const parts = token.trim().split(".");

      if (parts.length < 2) {
        throw new Error(
          "Invalid JWT format. JWT must contain Header.Payload.Signature"
        );
      }

      const decodedHeader = JSON.parse(
        base64UrlDecode(parts[0])
      );

      const decodedPayload: JwtPayload =
        JSON.parse(
          base64UrlDecode(parts[1])
        );

      const issuedAt =
        typeof decodedPayload.iat ===
        "number"
          ? new Date(
              decodedPayload.iat * 1000
            ).toLocaleString()
          : "N/A";

      const expiresAt =
        typeof decodedPayload.exp ===
        "number"
          ? new Date(
              decodedPayload.exp * 1000
            ).toLocaleString()
          : "N/A";

      const isExpired =
        typeof decodedPayload.exp ===
        "number"
          ? Date.now() >
            decodedPayload.exp * 1000
          : false;

      const timeRemaining =
        typeof decodedPayload.exp ===
        "number"
          ? calculateRemainingTime(
              decodedPayload.exp
            )
          : "N/A";

      setHeader(decodedHeader);
      setPayload(decodedPayload);

      setTokenInfo({
        issuedAt,
        expiresAt,
        isExpired,
        timeRemaining,
      });
    } catch (err) {
      setHeader(null);
      setPayload(null);

      setTokenInfo({
        issuedAt: "N/A",
        expiresAt: "N/A",
        isExpired: false,
        timeRemaining: "N/A",
      });

      setError(
        err instanceof Error
          ? err.message
          : "Unable to decode JWT token."
      );
    }
  };

  const resetData = () => {
    setToken("");
    setHeader(null);
    setPayload(null);
    setError("");

    setTokenInfo({
      issuedAt: "N/A",
      expiresAt: "N/A",
      isExpired: false,
      timeRemaining: "N/A",
    });
  };

  const copyText = async (
    text: string
  ) => {
    try {
      await navigator.clipboard.writeText(
        text
      );

      alert("Copied successfully");
    } catch {
      alert("Failed to copy");
    }
  };

  const downloadJson = (
    filename: string,
    data: object
  ) => {
    const blob = new Blob(
      [
        JSON.stringify(
          data,
          null,
          2
        ),
      ],
      {
        type: "application/json",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const results =
    header && payload
      ? [
          {
            label: "Algorithm",
            value: String(
              header.alg ?? "N/A"
            ),
          },
          {
            label: "Token Type",
            value: String(
              header.typ ?? "JWT"
            ),
          },
          {
            label: "Issued At",
            value:
              tokenInfo.issuedAt,
          },
          {
            label: "Expires At",
            value:
              tokenInfo.expiresAt,
          },
          {
            label:
              "Time Remaining",
            value:
              tokenInfo.timeRemaining,
          },
          {
            label: "Status",
            value:
              tokenInfo.isExpired
                ? "Expired"
                : "Valid",
            highlight: true,
          },
        ]
      : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:p-6">
      <div>
        <label className="mb-2 block font-medium">
          JWT Token
        </label>

        <textarea
          value={token}
          onChange={(e) =>
            setToken(e.target.value)
          }
          rows={6}
          placeholder="Paste JWT Token Here..."
          className="w-full rounded-xl border p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={decodeJwt}
          className="rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          Decode & Analyze Token
        </button>

        <button
          onClick={resetData}
          className="rounded-xl border px-5 py-3"
        >
          Reset
        </button>
      </div>

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      {header && (
        <div className="mt-8">
          <div className="mb-3 flex flex-wrap gap-3">
            <button
              onClick={() =>
                copyText(
                  JSON.stringify(
                    header,
                    null,
                    2
                  )
                )
              }
              className="rounded-xl bg-slate-800 px-4 py-2 text-white"
            >
              Copy Header
            </button>

            <button
              onClick={() =>
                downloadJson(
                  "jwt-header.json",
                  header
                )
              }
              className="rounded-xl bg-indigo-600 px-4 py-2 text-white"
            >
              Download Header
            </button>
          </div>

          <label className="mb-2 block font-medium">
            JWT Header
          </label>

          <textarea
            readOnly
            rows={8}
            value={JSON.stringify(
              header,
              null,
              2
            )}
            className="w-full rounded-xl border bg-slate-50 p-4 font-mono text-sm dark:bg-slate-800"
          />
        </div>
      )}

      {payload && (
        <div className="mt-8">
          <div className="mb-3 flex flex-wrap gap-3">
            <button
              onClick={() =>
                copyText(
                  JSON.stringify(
                    payload,
                    null,
                    2
                  )
                )
              }
              className="rounded-xl bg-slate-800 px-4 py-2 text-white"
            >
              Copy Payload
            </button>

            <button
              onClick={() =>
                downloadJson(
                  "jwt-payload.json",
                  payload
                )
              }
              className="rounded-xl bg-indigo-600 px-4 py-2 text-white"
            >
              Download Payload
            </button>
          </div>

          <label className="mb-2 block font-medium">
            JWT Payload
          </label>

          <textarea
            readOnly
            rows={12}
            value={JSON.stringify(
              payload,
              null,
              2
            )}
            className="w-full rounded-xl border bg-slate-50 p-4 font-mono text-sm dark:bg-slate-800"
          />
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="JWT Analysis Results"
          results={results}
          calculatorName="JWT Decoder"
        />
      )}
    </div>
  );
}