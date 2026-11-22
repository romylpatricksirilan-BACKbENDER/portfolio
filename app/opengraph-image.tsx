import { ImageResponse } from "next/og";
import { SX_PATHS, SX_VIEWBOX } from "@/components/SyrexMark";
import { profile } from "@/content/profile";

export const alt = `${profile.name}, web and mobile developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The preview card shown when the site link is shared on LinkedIn, Messenger, or elsewhere. */
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
          background: "#061310",
          color: "#eefaf7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 14,
              background: "#102621",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="52" height="29" viewBox={SX_VIEWBOX} fill="#17d3b4">
              {SX_PATHS.map((d) => (
                <path key={d} d={d} />
              ))}
            </svg>
          </div>
          <div style={{ fontSize: 28, color: "#aac4bd" }}>Portfolio</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 34, color: "#aac4bd" }}>{profile.role}</div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {["Next.js", "React", "TypeScript", "Supabase", "React Native"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 10,
                border: "2px solid #2f4f47",
                fontSize: 24,
                color: "#d3ebe4",
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
