import { ImageResponse } from "next/og";

export const alt = "Omagel Mini — text and video chat by DevCalc";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ background: "#faf7f0", color: "#26364a", display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: 80, justifyContent: "center" }}>
    <div style={{ fontSize: 30, marginBottom: 24 }}>DevCalc · For adults 18+</div>
    <div style={{ fontSize: 86, fontWeight: 700 }}>Omagel Mini</div>
    <div style={{ fontSize: 40, marginTop: 24 }}>Random text &amp; video conversations</div>
  </div>, size);
}
