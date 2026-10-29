import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ship plain static files to Cloudflare Pages (no server runtime).
  output: "export",
  images: { unoptimized: true },
  // `/apps/ryannplan` -> `out/apps/ryannplan/index.html`, which Cloudflare Pages serves cleanly.
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
