/**
 * UTC ISO timestamp from which funnel dashboard metrics are authoritative.
 * Set FUNNEL_METRICS_RELIABLE_SINCE in production at deploy time (UTC, not UAE local).
 */
export function getFunnelMetricsReliableSince(): string {
  const fromEnv = process.env.FUNNEL_METRICS_RELIABLE_SINCE?.trim()
  if (fromEnv) return fromEnv
  // Fallback when FUNNEL_METRICS_RELIABLE_SINCE is unset (UTC). Set the env var in Vercel at deploy.
  // 2026-08-29T21:05:00.000Z = 30 Aug 2026, 01:05 GST — funnel telemetry go-live.
  return '2026-08-29T21:05:00.000Z'
}
