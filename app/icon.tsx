import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 32, height: 32 };

/**
 * Favicon — literary "P" in Newsreader italic on bone with an
 * oxblood accent dot. Serif-dominant at 32×32.
 *
 * Palette pinned to tailwind.config.ts:
 *   bone    #F0EBE0
 *   inknavy #192642
 *   oxblood #7A2E3B
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F0EBE0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        <span
          style={{
            fontFamily:
              '"Newsreader", "Source Serif 4", "Tiempos Text", Georgia, serif',
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: 28,
            color: "#192642",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginTop: -2,
          }}
        >
          P
        </span>
        <span
          style={{
            position: "absolute",
            right: 4,
            bottom: 5,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#7A2E3B",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
