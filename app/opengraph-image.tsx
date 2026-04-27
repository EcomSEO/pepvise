import { ImageResponse } from "next/og";
import { SITE } from "@/lib/content/site";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

/**
 * Open Graph card — review-database masthead.
 *
 * Paper-white field, ink wordmark, forest accent rule, methodology
 * version + entry-count chips. No literary dateline (the cookbook
 * & magazine sites own that). Wirecutter-style trust + numerics.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FAFAF7",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Top rail: forest hairline + caps version chip */}
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
              width: 10,
              height: 10,
              background: "#1F5F3F",
              display: "flex",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 14,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#1F5F3F",
              fontWeight: 600,
            }}
          >
            REVIEW DATABASE &nbsp;&middot;&nbsp; {SITE.databaseEntries} entries
            &nbsp;&middot;&nbsp; methodology {SITE.methodologyVersion}
          </span>
          <span
            style={{
              flex: 1,
              height: 1,
              background: "#1F2024",
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
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span
              style={{
                fontFamily:
                  '"Source Serif 4", "Tiempos Text", Georgia, serif',
                fontWeight: 600,
                fontSize: 168,
                color: "#16181A",
                lineHeight: 1,
                letterSpacing: "-0.028em",
              }}
            >
              Pepvise
            </span>
          </div>

          <div
            style={{
              marginTop: 24,
              fontFamily:
                '"Source Serif 4", "Tiempos Text", Georgia, serif',
              fontWeight: 400,
              fontSize: 42,
              color: "#16181A",
              letterSpacing: "-0.012em",
              lineHeight: 1.18,
              display: "flex",
              maxWidth: 920,
            }}
          >
            {SITE.shortTagline}
          </div>

          <div
            style={{
              marginTop: 20,
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 18,
              color: "#3B3F44",
              fontWeight: 500,
              letterSpacing: "0.01em",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: "#1F5F3F",
                display: "flex",
              }}
            />
            Educational. No vendor links. Not medical advice.
          </div>
        </div>

        {/* Bottom rule + domain */}
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
              background: "#1F2024",
              display: "flex",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 14,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#3B3F44",
              fontWeight: 600,
            }}
          >
            pepvise.com &nbsp;&middot;&nbsp; refreshed {SITE.lastDatabaseRefresh}
          </span>
          <span
            style={{
              width: 10,
              height: 10,
              background: "#1F5F3F",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
