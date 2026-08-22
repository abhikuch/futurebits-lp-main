import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const EXTENSIONS = [".js", ".jsx", ".mjs", ".json"];

function resolveAlias(specifier) {
  if (!specifier.startsWith("@/")) {
    return null;
  }

  const base = path.join(root, "src", specifier.slice(2));

  if (fs.existsSync(base) && fs.statSync(base).isFile()) {
    return base;
  }

  for (const ext of EXTENSIONS) {
    const candidate = `${base}${ext}`;
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  if (fs.existsSync(base) && fs.statSync(base).isDirectory()) {
    for (const ext of EXTENSIONS) {
      const candidate = path.join(base, `index${ext}`);
      if (fs.existsSync(candidate)) {
        return candidate;
      }
    }
  }

  return base;
}

export async function resolve(specifier, context, nextResolve) {
  const resolvedPath = resolveAlias(specifier);
  if (resolvedPath) {
    return nextResolve(pathToFileURL(resolvedPath).href, context);
  }

  return nextResolve(specifier, context);
}
