import { ImageResponse } from "next/og";
import { SX_PATHS, SX_VIEWBOX } from "@/components/SyrexMark";
import { profile } from "@/content/profile";

export const alt = `${profile.name}, web and mobile developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#0d2470";
const LINE = "#3a5595";
const MUTED = "#b9c8f5";
const AMBER = "#ffc247";

/** The preview card shown when the site link is shared: the blueprint sheet, the mark, the name. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: NAVY,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 8,
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="52" height="29" viewBox={SX_VIEWBOX} fill={NAVY}>
              {SX_PATHS.map((d) => (
                <path key={d} d={d} />
              ))}
            </svg>
          </div>
          <div style={{ fontSize: 28, color: MUTED }}>Portfolio</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ width: 96, height: 6, background: AMBER }} />
          <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 1, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ display: "flex", fontSize: 34, color: MUTED }}>{profile.role}</div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {["Next.js", "React", "TypeScript", "Supabase", "React Native"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 4,
                border: `2px solid ${LINE}`,
                background: NAVY,
                fontSize: 24,
                color: "#dfe7fb",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
