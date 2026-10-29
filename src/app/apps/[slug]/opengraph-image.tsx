import fs from "node:fs";
import path from "node:path";
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

// Light-theme accent fills from globals.css (Satori can't read CSS variables).
const accentHex: Record<AccentColor, string> = {
  magenta: "#d6337f",
  vermilion: "#e4572e",
  ink: "#141413",
  sky: "#0ea5e9",
  orange: "#f97316",
  emerald: "#10b981",
  violet: "#8b5cf6",
  rose: "#f43f5e",
  amber: "#f59e0b",
};

const mime: Record<string, string> = { ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml" };

/** Reads a file from public/ as a data URI — runs at build time only. */
function dataUri(publicPath: string) {
  const file = path.join(process.cwd(), "public", publicPath);
  return `data:${mime[path.extname(file)]};base64,${fs.readFileSync(file).toString("base64")}`;
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug)!;
  const accent = accentHex[project.accent];
  const cover = project.screenshots[0];

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f3f1ec", color: "#141413" }}>
        <div style={{ width: 560, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 0 64px 72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img> */}
            <img src={dataUri(project.logo)} width={72} height={72} style={{ borderRadius: 16 }} alt="" />
            <div style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#5d5a53" }}>{project.category}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}>{project.name}</div>
            <div style={{ fontSize: 34, marginTop: 20, lineHeight: 1.25, color: "#3a3833" }}>{project.tagline}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#5d5a53" }}>
            <div style={{ width: 14, height: 14, borderRadius: 7, background: accent }} />
            Part of {site.brand} · by {site.owner.name}
          </div>
        </div>
        {cover && (
          <div style={{ flex: 1, display: "flex", alignItems: "center", paddingLeft: 40, overflow: "hidden" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 760,
                borderRadius: 18,
                overflow: "hidden",
                border: "2px solid #dcd8cf",
                background: "#faf9f6",
                boxShadow: "0 30px 60px -20px rgba(20,20,19,0.35)",
              }}
            >
              <div style={{ display: "flex", gap: 8, padding: "12px 16px", background: "#ebe8e1" }}>
                {[0, 1, 2].map((i) => (
                  <div key={i} style={{ width: 12, height: 12, borderRadius: 6, background: "#cfcac0" }} />
                ))}
              </div>
              {/* Satori can't decode WebP, so the cover also ships as a JPEG thumb (screenshot-1-sm.jpg). */}
              {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img> */}
              <img src={dataUri((cover.thumb ?? cover.src).replace(/\.webp$/, ".jpg"))} width={760} height={428} alt="" />
            </div>
          </div>
        )}
      </div>
    ),
    size,
  );
}
