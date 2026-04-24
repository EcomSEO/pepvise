import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 180, height: 180 };

/**
 * Apple touch icon — "PV" literary monogram. Newsreader italic,
 * inknavy on bone, with an oxblood ornament dot. Serif-dominant.
 *
 * Palette pinned to tailwind.config.ts:
 *   bone    #F0EBE0
 *   inknavy #192642
 *   oxblood #7A2E3B
 *   slate   #5A6374
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F0EBE0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "serif",
          padding: 0,
        }}
      >
        {/* Oxblood hairline rail at top — echoes the Evidence Ledger bar */}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 22,
            width: 40,
            height: 2,
            background: "#7A2E3B",
            display: "flex",
          }}
        />
        {/* Caps tick at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 18,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "#7A2E3B",
              display: "flex",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#5A6374",
              fontWeight: 500,
            }}
          >
            Ledger
          </span>
          <span
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "#7A2E3B",
              display: "flex",
            }}
          />
        </div>

        {/* PV monogram — Pep-inknavy, V-oxblood italic */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginTop: -4,
          }}
        >
          <span
            style={{
              fontFamily:
                '"Newsreader", "Source Serif 4", "Tiempos Text", Georgia, serif',
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: 130,
              color: "#192642",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            P
          </span>
          <span
            style={{
              fontFamily:
                '"Newsreader", "Source Serif 4", "Tiempos Text", Georgia, serif',
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: 130,
              color: "#7A2E3B",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            V
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
