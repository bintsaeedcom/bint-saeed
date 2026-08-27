/**
 * Heuristic for client-side: skip non-essential third-party fetches (geo IP) so
 * Google Search Console / Rich Results and crawlers are not blocked by robots.txt
 * or rate limits. Not used for security (UA is spoofable).
 */
export function isLikelySearchBotUserAgent(ua: string | null | undefined): boolean {
  if (!ua || typeof ua !== 'string') return false
  return /google(?:bot|-inspection|other)|google-extended|bingbot|slurp|duckduckbot|baiduspider|yandex|mail\.ru_bot|deepseekbot|bytespider|naver|yeti|facebookexternalhit|linkedinbot|twitterbot|embedly|quora link preview|redditbot/i.test(
    ua,
  )
}
