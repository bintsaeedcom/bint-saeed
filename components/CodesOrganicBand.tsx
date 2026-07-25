'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import { withBrandAlt } from '@/lib/products/imageAlt'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import type { AppLocale } from '@/lib/i18n/routing'
import { EDITORIAL_STACK_CARD } from '@/lib/ui/editorialPageChrome'

const ORGANIC_BG =
  '/craftsmanship/bint-saeed-abu-dhabi-explore-collection-organic-texture.webp'

type CodesOrganicBandProps = {
  children: ReactNode
  className?: string
  contentClassName?: string
  ariaLabel?: string
  /** Decorative only — omit when the band is purely ambient */
  bgAlt?: string
  /** Editorial stack overlap (Codes / Craftsmanship closing). Off for shop commerce bands. */
  stacked?: boolean
}

/**
 * Full-bleed House Codes / Explore closing surface — organic burgundy texture + vignette.
 * Sits flush against the dark footer — no cream page-canvas gap underneath.
 */
export default function CodesOrganicBand({
  children,
  className = '',
  contentClassName = '',
  ariaLabel,
  bgAlt,
  stacked = false,
}: CodesOrganicBandProps) {
  const { language } = useLanguage()
  const locale = language as AppLocale
  const alt = bgAlt
    ? withBrandAlt(bgAlt, locale)
    : withBrandAlt('Bint Saeed Abu Dhabi — organic burgundy fabric texture', locale)

  return (
    <section
      className={`relative z-[40] -mb-px overflow-hidden bg-[#12080b] ${stacked ? EDITORIAL_STACK_CARD : ''} ${className}`}
      aria-label={ariaLabel}
    >
      <Image
        src={ORGANIC_BG}
        alt={alt}
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
        priority={false}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(26,2,16,0.72)_0%,rgba(42,8,22,0.55)_42%,rgba(26,2,16,0.82)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(111,21,36,0.22)_0%,transparent_70%)]"
        aria-hidden
      />
      <div
        className={`relative mx-auto w-full min-w-0 max-w-[1400px] px-4 sm:px-6 lg:px-12 ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  )
}
