import {
  getMarkdownForPath,
  getNotFoundMarkdown,
  normalizePath,
} from "@/lib/agent-markdown";

function markdownResponse(body, status = 200) {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept, Accept-Encoding",
      "Cache-Control": "s-maxage=60, stale-while-revalidate=86400",
    },
  });
}

export async function GET(_request, { params }) {
  const segments = params.slug ?? [];
  const pathname = normalizePath(`/${segments.join("/")}`);
  const result = getMarkdownForPath(pathname);

  if (result) {
    return markdownResponse(result.body, result.status);
  }

  return markdownResponse(getNotFoundMarkdown(pathname), 404);
}
