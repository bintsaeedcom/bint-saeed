import { createHash, timingSafeEqual } from 'node:crypto'

/** Compare strings without leaking length via early exit (via SHA-256 digests). */
export function timingSafeStringEqual(a: string, b: string): boolean {
  const ha = createHash('sha256').update(a, 'utf8').digest()
  const hb = createHash('sha256').update(b, 'utf8').digest()
  return timingSafeEqual(ha, hb)
}
