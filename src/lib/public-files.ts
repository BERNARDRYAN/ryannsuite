import "server-only";
import fs from "node:fs";
import path from "node:path";

/** True if `/some/path` exists under `public/`. Runs at build time only. */
export function publicFileExists(publicPath: string) {
  return fs.existsSync(path.join(process.cwd(), "public", publicPath));
}
