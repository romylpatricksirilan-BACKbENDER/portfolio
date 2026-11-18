import { ImageResponse } from "next/og";
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
          background: "#1c1340",
          color: "#f6f4ff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#6a4cf5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ fontSize: 28, color: "#c9bfff" }}>Portfolio</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 34, color: "#c9bfff" }}>{profile.role}</div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {["Next.js", "React", "TypeScript", "Supabase", "React Native"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "2px solid #4a3a9a",
                fontSize: 24,
                color: "#e4ddff",
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
