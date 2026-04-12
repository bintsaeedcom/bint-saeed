/** Truncate and strip characters that break Slack mrkdwn / cause noisy formatting. */
export function sanitizeUserText(input: unknown, maxLen: number): string {
  if (input == null) return ''
  const s = String(input).replace(/[\u0000-\u001f\u007f]/g, '').trim()
  if (s.length <= maxLen) return s
  return `${s.slice(0, maxLen - 1)}…`
}
