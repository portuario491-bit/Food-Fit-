import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0f1e 0%, #16233d 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#0f7a5c",
            }}
          />
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#ffffff" }}>{SITE_NAME}</div>
        </div>
        <div style={{ display: "flex", fontSize: 52, fontWeight: 700, color: "#ffffff", maxWidth: 980, lineHeight: 1.15 }}>
          Análisis y scoring de acciones para inversores de largo plazo
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a8b3c7", marginTop: 28, maxWidth: 900 }}>
          {SITE_DESCRIPTION}
        </div>
      </div>
    ),
    { ...size }
  );
}
