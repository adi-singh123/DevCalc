"use client";

import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [value, setValue] =
    useState("");

  const [generatedValue, setGeneratedValue] =
    useState("");

  const generateQRCode = () => {
    setGeneratedValue(
      value.trim(),
    );
  };

  const downloadQRCode = () => {
    const svg =
      document.getElementById(
        "qr-code",
      );

    if (!svg) return;

    const svgData =
      new XMLSerializer().serializeToString(
        svg,
      );

    const canvas =
      document.createElement(
        "canvas",
      );

    const ctx =
      canvas.getContext("2d");

    const img =
      new Image();

    img.onload = () => {
      canvas.width = 512;
      canvas.height = 512;

      ctx?.drawImage(
        img,
        0,
        0,
        512,
        512,
      );

      const pngFile =
        canvas.toDataURL(
          "image/png",
        );

      const downloadLink =
        document.createElement(
          "a",
        );

      downloadLink.download =
        "qrcode.png";

      downloadLink.href =
        pngFile;

      downloadLink.click();
    };

    img.src = `data:image/svg+xml;base64,${btoa(
      svgData,
    )}`;
  };

  const resetGenerator = () => {
    setValue("");
    setGeneratedValue("");
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        QR Code Generator
      </h2>

      <p className="mt-2 text-slate-600">
        Generate QR codes for
        websites, text, emails,
        phone numbers, social
        media profiles, and more.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Enter URL or Text
        </label>

        <textarea
          value={value}
          onChange={(e) =>
            setValue(
              e.target.value,
            )
          }
          placeholder="https://www.devcalc.in"
          rows={4}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={
            generateQRCode
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Generate QR Code
        </button>

        <button
          onClick={
            downloadQRCode
          }
          disabled={
            !generatedValue
          }
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Download QR Code
        </button>

        <button
          onClick={
            resetGenerator
          }
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:bg-gray-100"
        >
          Reset
        </button>
      </div>

      {generatedValue && (
        <div className="mt-8 rounded-2xl border bg-slate-50 p-6 text-center">
          <h3 className="text-lg font-semibold">
            Generated QR Code
          </h3>

          <div className="mt-6 flex justify-center">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <QRCode
                id="qr-code"
                value={
                  generatedValue
                }
                size={220}
              />
            </div>
          </div>

          <p className="mt-4 break-all text-sm text-slate-600">
            {generatedValue}
          </p>
        </div>
      )}
    </div>
  );
}