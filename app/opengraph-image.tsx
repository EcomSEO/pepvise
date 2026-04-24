import { ImageResponse } from "next/og";
import { SITE } from "@/lib/content/site";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

/**
 * Open Graph / social share card — bone parchment background, literary
 * masthead composition. Includes a small medical disclaimer line
 * (regulatory rail) and the dateline at the bottom.
 *
 * Palette pinned to tailwind.config.ts:
 *   bone    #F0EBE0
 *   paper   #F7F3EA
 *   inknavy #192642
 *   oxblood #7A2E3B
 *   slate   #5A6374
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F0EBE0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Top rail: oxblood hairline + caps dateline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            width: "100%",
          }}
        >
          <span
            style={{
              height: 2,
              width: 72,
              background: "#7A2E3B",
              display: "flex",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 14,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#5A6374",
              fontWeight: 500,
            }}
          >
            {SITE.dateline} &nbsp;&middot;&nbsp; {SITE.volume} &nbsp;&middot;&nbsp; {SITE.issue}
          </span>
          <span
            style={{
              flex: 1,
              height: 1,
              background: "rgba(25, 38, 66, 0.18)",
              display: "flex",
            }}
          />
        </div>

        {/* Center: wordmark + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: -24,
          }}
        >
          {/* Wordmark: Pep (inknavy) + Vise (oxblood italic) + oxblood dot */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <span
              style={{
                fontFamily:
                  '"Newsreader", "Source Serif 4", "Tiempos Text", Georgia, serif',
                fontWeight: 600,
                fontSize: 168,
                color: "#192642",
                lineHeight: 1,
                letterSpacing: "-0.035em",
              }}
            >
              Pep
            </span>
            <span
              style={{
                fontFamily:
                  '"Newsreader", "Source Serif 4", "Tiempos Text", Georgia, serif',
                fontWeight: 600,
                fontStyle: "italic",
                fontSize: 168,
                color: "#7A2E3B",
                lineHeight: 1,
                letterSpacing: "-0.035em",
              }}
            >
              Vise
            </span>
            <span
              style={{
                marginLeft: 10,
                marginBottom: 22,
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "#7A2E3B",
                display: "flex",
              }}
            />
          </div>

          {/* Tagline — italic serif */}
          <div
            style={{
              marginTop: 28,
              fontFamily:
                '"Newsreader", "Source Serif 4", "Tiempos Text", Georgia, serif',
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: 48,
              color: "#192642",
              letterSpacing: "-0.012em",
              lineHeight: 1.15,
              display: "flex",
            }}
          >
            {SITE.tagline}
          </div>

          {/* Medical disclaimer line — regulatory rail */}
          <div
            style={{
              marginTop: 22,
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 18,
              color: "#5A6374",
              fontWeight: 500,
              letterSpacing: "0.01em",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#7A2E3B",
                display: "flex",
              }}
            />
            Educational. No dosing advice. Not medical advice.
          </div>
        </div>

        {/* Bottom: caps dateline with domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            width: "100%",
          }}
        >
          <span
            style={{
              flex: 1,
              height: 1,
              background: "rgba(25, 38, 66, 0.18)",
              display: "flex",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 14,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#5A6374",
              fontWeight: 500,
            }}
          >
            {SITE.dateline} &nbsp;&middot;&nbsp; {SITE.volume} &nbsp;&middot;&nbsp; {SITE.issue} &nbsp;&middot;&nbsp; pepvise.com
          </span>
          <span
            style={{
              height: 2,
              width: 72,
              background: "#7A2E3B",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
