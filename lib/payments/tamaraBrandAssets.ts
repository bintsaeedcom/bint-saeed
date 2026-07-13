/**
 * Official Tamara brand kit assets (sandbox / merchant kit).
 * Compact payment chip stays at `/payment/tamara.svg`.
 * Wordmarks + banners come from the merchant marketing kit.
 */

export const TAMARA_LOGO = {
  /** Compact badge for payment-method chips / footer */
  badge: '/payment/tamara.svg',
  wordmarkEn: '/payment/tamara/wordmark-en.svg',
  wordmarkEnWhite: '/payment/tamara/wordmark-en-white.svg',
  wordmarkAr: '/payment/tamara/wordmark-ar.svg',
  wordmarkArWhite: '/payment/tamara/wordmark-ar-white.svg',
  gradientEn: '/payment/tamara/gradient-en.svg',
  gradientAr: '/payment/tamara/gradient-ar.svg',
} as const

export const TAMARA_BANNERS = {
  websiteEn01: '/brand/tamara/banners/website-banner-en-01.png',
  websiteEn02: '/brand/tamara/banners/website-banner-en-02.png',
  websiteAr01: '/brand/tamara/banners/website-banner-ar-01.png',
  websiteAr02: '/brand/tamara/banners/website-banner-ar-02.png',
} as const

export function tamaraWordmarkSrc(locale: string, onDark = false): string {
  const ar = locale === 'ar'
  if (onDark) return ar ? TAMARA_LOGO.wordmarkArWhite : TAMARA_LOGO.wordmarkEnWhite
  return ar ? TAMARA_LOGO.wordmarkAr : TAMARA_LOGO.wordmarkEn
}
