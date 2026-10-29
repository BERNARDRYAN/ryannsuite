# NOTES — decisions made during the build

Defaults I picked where the brief was open. Change any of them freely.

## Stack and config

- **Next.js 16.4.3 / React 19.3 / Tailwind CSS 4** (latest stable from `create-next-app` on 2026-10-30).
- **`cacheComponents` and `partialPrefetching` turned off.** The new scaffold turns both on. With Cache Components on, Next 16 removes the `dynamicParams` and `dynamic` route-segment configs, and the brief requires both (`dynamicParams = false`, `dynamic = 'force-static'`). A content-only static site gets nothing from Cache Components anyway.
- **`trailingSlash: true`.** The export writes `out/<route>/index.html`, which Cloudflare Pages serves at clean URLs without redirect quirks. Internal links use a trailing slash (`/resume/`).
- **Tailwind runs through `@tailwindcss/turbopack`, not the PostCSS plugin.** This is the integration `create-next-app` now generates. It is still Tailwind v4 with CSS-first config. No `postcss.config.mjs` is needed.
- **`next-themes` not used.** Theming is a small inline `<head>` script (no flash, follows the system until the visitor picks) plus a client toggle. This avoids a dependency and the "script tag rendered by React" console warning that `next-themes` triggers on React 19.
- **`.nvmrc` = 24** (Node 24 "Krypton" Active LTS). Node 26 enters LTS around late October 2026, so you can bump it once it's officially LTS. Cloudflare Pages needs `NODE_VERSION` set to match.
- **`typecheck` runs `next typegen` first**, so the global `PageProps<"/apps/[slug]">` route types exist before `tsc`.
- **`postbuild` → `scripts/fix-export-segments.mjs`.** Works around a Next 16.4.3 static-export bug that only happens on Windows: segment-prefetch files are written as `__next.resume/__PAGE__.txt` instead of `__next.resume.__PAGE__.txt` because `path.relative()` returns backslashes. The client's prefetches then 404 (console errors). The script flattens them. It does nothing on Linux, including Cloudflare's builders. Delete it once Next fixes `collectSegmentPaths`.

## Content and copy

- **Hero headline:** "Small, thoughtful apps for everyday life." Two alternatives:
  1. "A suite of small tools that do one thing well."
  2. "Everyday apps, carefully made."
- **App copy** is written only from each app's one-line description. Every feature list has a `TODO: confirm`, and per-app `stack` only says "Supabase" until you confirm the frontend stack. No metrics or user numbers are claimed.
- **Accent colours:** RyannPlan = sky, RyannPace = orange, RyannReceipt = emerald. The brand primary is indigo on a neutral zinc base. Accents come from a fixed set (`sky | orange | emerald | violet | rose | amber`) defined in `globals.css`, each with a contrast-safe text shade for both themes, so a new app only picks one.
- **Placeholders render gracefully instead of linking to nowhere.** `liveUrl: null` shows "Link coming soon". Social links set to `null` are hidden everywhere, including JSON-LD `sameAs`. Missing screenshots show dashed placeholder frames (detected at build time).
- **Default domain:** `https://ryannsuite.pages.dev`, assuming the Pages project is named `ryannsuite`.
- **Support response time:** "within 3 working days" (placeholder).
- **Brand icons:** Lucide v1 dropped GitHub/LinkedIn icons, so they are inlined as SVG in `src/components/icons.tsx`.
- **JSON-LD `SoftwareApplication`** lists the price as free (0 MYR). There's a TODO to confirm.
- **Placeholder assets:** the OG image, apple icon, favicon and `resume.pdf` were generated once with `next/og` (bundled with Next, no new dependency). `icon.svg` is a hand-drawn "R" monogram.

## Security

- **No backend in this repo.** No `@supabase/*` packages, no keys, no `.env` files. Contact is a `mailto:` link.
- **If a backend feature is ever added:** only the Supabase **public anon key** may be used client-side, behind Row Level Security. The **service-role key must never appear in this repo** or in any client bundle. Keep it in server-only environment variables on whatever runs server code.
- **`public/_headers`** sets `nosniff`, `Referrer-Policy`, `X-Frame-Options: DENY` and a restrictive `Permissions-Policy`. A Content-Security-Policy was left out because the inline theme script and Next's inline bootstrap scripts would need hashes. Worth adding later.
