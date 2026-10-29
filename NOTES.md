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
- **`public/_headers`** sets `nosniff`, `Referrer-Policy`, `X-Frame-Options: DENY`, a restrictive `Permissions-Policy`, and the CSP directives that only work as a header (`frame-ancestors`, `object-src`, `base-uri`).
- **Strict CSP on each page, added by `scripts/add-csp.mjs` (postbuild).** A static export can't use nonces. Instead, each exported page gets a `<meta>` CSP listing SHA-256 hashes of exactly its own inline scripts (Next's bootstrap scripts and the theme script). Injected and third-party scripts are blocked; I verified this in Chrome. One consequence: any analytics or third-party script added later needs its origin added to that script. `style-src` allows `'unsafe-inline'` because React style attributes need it.

## Later additions

- **Per-app share images** are generated at build by `src/app/apps/[slug]/opengraph-image.tsx`. They export without a file extension, so `_headers` sets `Content-Type: image/png` for them.
- **Changelog** has only the real site-launch entry. App release history is left for you to fill in rather than invented.
- **CI** (`.github/workflows/ci.yml`) runs lint, typecheck and build on pushes to `main` and on pull requests.

## Real apps, logo and redesign (30 Oct 2026)

- **App copy, features, stack and privacy notes come from the live apps**, not guesses. I read each landing page and studio, and checked their JavaScript bundles to identify the stack:
  - RyannPlan: Vite + Supabase + a Workers API + Google sign-in.
  - RyannPace and RyannReceipt: Next.js on Workers, PWA, Google sign-in; RyannReceipt also uses Zustand and jsPDF.
  - Supabase was *not* found in Pace or Receipt, so the earlier "shared Supabase backend" claim was removed from the privacy page, support FAQ and resume.
- **Screenshots** were captured with headless Chrome at 1440×810, then re-encoded to WebP through Chrome's canvas encoder (no image library added). The two app studios show their built-in sample data, and the onboarding pop-ups were dismissed before capture.
- **App logos** are each app's own published icon, copied into `public/projects/<slug>/`.
- **RyannSuite logo:** a fanned stack of three cards in the apps' colours (Plan magenta `#D6337F`, Pace orange `#E4572E`, Receipt paper `#F3F1EC`) with an ink "R" on top, inside the same ink tile the Pace and Receipt icons use. The wordmark is "Ryann" plus an italic serif "Suite", echoing RyannPace's lockup. The source is `src/app/icon.svg`; `LogoMark` in `src/components/logo.tsx` is the same artwork.
- **Brand palette changed** from zinc and indigo to the paper and ink base that RyannPace and RyannReceipt already use, with `--signal` (orange-red) as the shared highlight. Instrument Serif is used for italic accents. Every text colour pairing was checked for at least 4.5:1 contrast (most are at least 5:1) in both themes.
- **Per-app accents** are now magenta, vermilion and ink, to match each app's own branding.
- **Added:**
  - an availability badge (`site.availability`, **please confirm**),
  - a quick-facts strip,
  - the "How I build" principles section (each claim is backed by what the live apps do),
  - case-study pages with How it works, a gallery and "More from the suite",
  - live app links on the resume.
- **Performance:** only the front hero screenshot is high priority. On phones the collage is capped at 18rem wide, so the headline is the largest paint (0.9s on Lighthouse mobile).
