/**
 * Build Cal.com URLs with UTM parameters for GA4 attribution.
 */
export function buildCalUrl(
  baseUrl,
  { medium = "website", campaign, content } = {}
) {
  const url = new URL(baseUrl);
  url.searchParams.set("utm_source", "futurebits");
  url.searchParams.set("utm_medium", medium);
  if (campaign) url.searchParams.set("utm_campaign", campaign);
  if (content) url.searchParams.set("utm_content", content);
  return url.toString();
}
