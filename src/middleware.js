import { NextResponse } from "next/server";

import {
  appendVaryAccept,
  preferredType,
} from "@/lib/accept-negotiation";

const STATIC_FILE = /\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|json|js|css|woff2?)$/i;

export function middleware(request) {
  // Do not pass inbound request headers into NextResponse.next()/rewrite().
  // CVE-2025-57822: reflecting those headers can enable SSRF when self-hosted.
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel") ||
    pathname === "/favicon.ico" ||
    pathname === "/llms.txt" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    STATIC_FILE.test(pathname)
  ) {
    const passThrough = NextResponse.next();
    appendVaryAccept(passThrough.headers);
    return passThrough;
  }

  if (pathname.endsWith(".md")) {
    const url = request.nextUrl.clone();
    url.pathname = `/api/markdown${pathname.slice(0, -3) || "/"}`;
    const rewritten = NextResponse.rewrite(url);
    appendVaryAccept(rewritten.headers);
    return rewritten;
  }

  const acceptHeader = request.headers.get("accept");
  const chosen = preferredType(acceptHeader);

  if (chosen === "text/markdown") {
    const url = request.nextUrl.clone();
    url.pathname = `/api/markdown${pathname}`;
    const rewritten = NextResponse.rewrite(url);
    appendVaryAccept(rewritten.headers);
    return rewritten;
  }

  if (chosen === null && acceptHeader) {
    return new Response(
      "Not Acceptable\n\nAvailable: text/html, text/markdown\n",
      {
        status: 406,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          Vary: "Accept, Accept-Encoding",
        },
      }
    );
  }

  const response = NextResponse.next();
  appendVaryAccept(response.headers);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
