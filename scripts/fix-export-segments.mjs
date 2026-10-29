// Workaround for a Next.js static-export bug on Windows (seen in 16.4.3).
//
// The exporter names segment prefetch files with `__next${segmentPath.replace(/\//g, ".")}.txt`,
// but on Windows `segmentPath` comes from `path.relative()` and uses backslashes, so
// `__next.resume.__PAGE__.txt` is written as `__next.resume/__PAGE__.txt` and the client's
// prefetch requests 404. This flattens any such nested files back to the dotted name.
// On Linux/macOS (including Cloudflare Pages builds) there is nothing to fix and it exits quietly.
//
// Remove once Next.js normalises separators in `collectSegmentPaths` (next/dist/export/index.js).
import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("out");
let fixed = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.")) flatten(full, dir, entry.name);
    else walk(full);
  }
}

function flatten(nestedDir, parentDir, prefix) {
  for (const entry of fs.readdirSync(nestedDir, { withFileTypes: true })) {
    const full = path.join(nestedDir, entry.name);
    const name = `${prefix}.${entry.name}`;
    if (entry.isDirectory()) {
      flatten(full, parentDir, name);
    } else {
      fs.renameSync(full, path.join(parentDir, name));
      fixed++;
    }
  }
  fs.rmSync(nestedDir, { recursive: true });
}

if (fs.existsSync(outDir)) walk(outDir);
if (fixed) console.log(`fix-export-segments: flattened ${fixed} segment prefetch file(s).`);
