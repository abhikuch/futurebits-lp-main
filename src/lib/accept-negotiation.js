export const PRODUCES = ["text/html", "text/markdown"];

/**
 * @typedef {{ type: string; q: number; specificity: number }} AcceptEntry
 */

/**
 * @param {string} header
 * @returns {AcceptEntry[]}
 */
export function parseAccept(header) {
  return header.split(",").map((raw) => {
    const parts = raw.trim().split(";").map((segment) => segment.trim());
    const type = parts[0].toLowerCase();
    let q = 1;

    for (const param of parts.slice(1)) {
      const [name, value] = param.split("=").map((segment) => segment.trim());
      if (name === "q") {
        const parsed = Number(value);
        if (!Number.isNaN(parsed)) {
          q = Math.max(0, Math.min(1, parsed));
        }
      }
    }

    const specificity = type === "*/*" ? 0 : type.endsWith("/*") ? 1 : 2;
    return { type, q, specificity };
  });
}

/**
 * @param {AcceptEntry} entry
 * @param {string} candidate
 */
function matches(entry, candidate) {
  if (entry.type === "*/*") return true;
  if (entry.type.endsWith("/*")) {
    return candidate.startsWith(entry.type.slice(0, -1));
  }
  return entry.type === candidate;
}

/**
 * @param {string | null | undefined} header
 * @returns {string | null}
 */
export function preferredType(header) {
  if (!header) return PRODUCES[0];

  const entries = parseAccept(header);
  if (entries.length === 0) return PRODUCES[0];

  let bestType = null;
  let bestQ = -1;
  let bestPosition = Infinity;

  for (const candidate of PRODUCES) {
    let matched = null;
    let matchedPosition = Infinity;

    for (let index = 0; index < entries.length; index += 1) {
      const entry = entries[index];
      if (!matches(entry, candidate)) continue;
      if (
        matched === null ||
        entry.specificity > matched.specificity ||
        (entry.specificity === matched.specificity && index < matchedPosition)
      ) {
        matched = entry;
        matchedPosition = index;
      }
    }

    if (matched === null || matched.q <= 0) continue;

    if (
      matched.q > bestQ ||
      (matched.q === bestQ && matchedPosition < bestPosition)
    ) {
      bestQ = matched.q;
      bestPosition = matchedPosition;
      bestType = candidate;
    }
  }

  return bestType;
}

/**
 * @param {Headers} headers
 */
export function appendVaryAccept(headers) {
  const existing = headers.get("Vary");
  if (!existing) {
    headers.set("Vary", "Accept, Accept-Encoding");
    return;
  }

  const tokens = existing.split(",").map((token) => token.trim().toLowerCase());
  const next = [...tokens];
  if (!tokens.includes("accept")) next.push("Accept");
  if (!tokens.includes("accept-encoding")) next.push("Accept-Encoding");
  headers.set("Vary", next.join(", "));
}
