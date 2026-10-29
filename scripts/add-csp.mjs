// Adds a strict Content-Security-Policy <meta> tag to every exported HTML page.
//
// A static export can't use nonces, and Next.js inlines a few bootstrap scripts per page
// (plus our theme script in layout.tsx), so instead each page gets a policy listing the
// SHA-256 hashes of exactly its own inline scripts. Any other inline or third-party script
// is blocked. JSON-LD blocks aren't executed, so they don't need hashes.
//
// Directives that only work as a response header (frame-ancestors) live in public/_headers.
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("out");
const scriptRe = /<script(\s[^>]*)?>([\s\S]*?)<\/script>/g;

function policyFor(html) {
  const hashes = new Set();
  for (const [, attrs = "", body] of html.matchAll(scriptRe)) {
    if (/\ssrc=/.test(attrs) || /type="application\/(ld\+)?json"/.test(attrs) || !body) continue;
    hashes.add(`'sha256-${crypto.createHash("sha256").update(body, "utf8").digest("base64")}'`);
  }
  return [
    "default-src 'self'",
    `script-src 'self' ${[...hashes].join(" ")}`.trim(),
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join("; ");
}

function* htmlFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith(".html")) yield full;
  }
}

let count = 0;
for (const file of htmlFiles(outDir)) {
  const html = fs.readFileSync(file, "utf8");
  if (html.includes('http-equiv="Content-Security-Policy"')) continue;
  const meta = `<meta http-equiv="Content-Security-Policy" content="${policyFor(html)}"/>`;
  // Right after the charset meta, so it applies before any script in <head>.
  const updated = html.replace(/(<head>\s*<meta charSet="utf-8"\/>)/i, `$1${meta}`);
  if (updated === html) throw new Error(`add-csp: couldn't find <head><meta charSet> in ${file}`);
  fs.writeFileSync(file, updated);
  count++;
}
console.log(`add-csp: added CSP to ${count} page(s).`);
