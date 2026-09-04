/**
 * Content-Security-Policy for futurebits.tech.
 * JSON-LD and GA init are inline scripts, so script-src includes 'unsafe-inline'.
 * GA script/connect hosts are listed so consent-granted loads are not blocked.
 */
export const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://67uizwknbuzxqhet.public.blob.vercel-storage.com https://www.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://analytics.google.com",
  "frame-src 'none'",
  "upgrade-insecure-requests",
].join("; ");
