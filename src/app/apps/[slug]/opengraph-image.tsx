import { ImageResponse } from "next/og";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";
import type { AccentColor } from "@/types/content";

export const dynamicParams = false;
export const alt = "RyannSuite app preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Hex equivalents of the dark-theme accents in globals.css (Satori can't read CSS variables).
const accentHex: Record<AccentColor, string> = {
  sky: "#38bdf8",
  orange: "#fb923c",
  emerald: "#34d399",
  violet: "#a78bfa",
  rose: "#fb7185",
  amber: "#fbbf24",
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug)!;
  const accent = accentHex[project.accent];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: `radial-gradient(circle at 85% 0%, ${accent}40, #09090b 55%)`,
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, color: "#a1a1aa" }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#4f46e5",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            R
          </div>
          {site.brand}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: accent, textTransform: "uppercase", letterSpacing: 4 }}>
            {project.category}
          </div>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.05, marginTop: 12 }}>{project.name}</div>
          <div style={{ fontSize: 40, color: "#d4d4d8", marginTop: 20, maxWidth: 900 }}>{project.tagline}</div>
        </div>
        <div style={{ display: "flex", height: 8, width: 160, borderRadius: 4, background: accent }} />
      </div>
    ),
    size,
  );
}
