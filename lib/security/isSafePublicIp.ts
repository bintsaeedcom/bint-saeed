/**
 * Avoid SSRF via X-Forwarded-For when calling external geo APIs (only public IPs).
 */
export function isSafePublicIpForLookup(ip: string): boolean {
  if (!ip || ip === 'Unknown') return false
  if (!/^[\d.a-fA-F:]+$/.test(ip) && !ip.includes(':')) return false

  if (ip.includes('.')) {
    const m = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(ip)
    if (!m) return false
    const o = m.slice(1, 5).map((x) => parseInt(x, 10))
    if (o.some((n) => n > 255)) return false
    const [a, b] = o
    if (a === 10) return false
    if (a === 127) return false
    if (a === 0) return false
    if (a === 169 && b === 254) return false
    if (a === 172 && b >= 16 && b <= 31) return false
    if (a === 192 && b === 168) return false
    if (a >= 224) return false
    return true
  }

  const lower = ip.toLowerCase()
  if (lower === '::1') return false
  if (lower.startsWith('fe80:')) return false
  if (lower.startsWith('fc') || lower.startsWith('fd')) return false
  if (lower.startsWith('ff')) return false
  return true
}
