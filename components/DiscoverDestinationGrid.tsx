'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import NoTranslate from '@/components/NoTranslate'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getCartEmptyDiscoverCopy } from '@/lib/i18n/cartEmptyDiscoverI18n'
import { shopStrandsCta } from '@/lib/i18n/strandsBrandLock'
import { trackEvent } from '@/lib/analytics/tracking'
import { DISCOVER_DESTINATIONS } from '@/lib/discover/discoverDestinations'
import { filterOffCurrentPage } from '@/lib/discover/offCurrentPage'

type DiscoverDestinationGridProps = {
  source: string
  className?: string
  /** Compact tiles for drawers / narrow columns */
  compact?: boolean
}

export default function DiscoverDestinationGrid({
  source,
  className = '',
  compact = false,
}: DiscoverDestinationGridProps) {
  const pathname = usePathname()
  const { isRTL, language } = useLanguage()
  const copy = getCartEmptyDiscoverCopy(language)
  const minH = compact ? 'min-h-[7.25rem]' : 'min-h-[9.5rem]'
  const destinations = filterOffCurrentPage(DISCOVER_DESTINATIONS, pathname)

  return (
    <div className={`grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 ${className}`}>
      {destinations.map((dest, index) => {
        const label = dest.strandsLock
          ? shopStrandsCta(language, 'title')
          : copy[dest.labelKey]
        const hint = copy[dest.hintKey]
        return (
          <LocaleLink
            key={dest.href}
            href={dest.href}
            className={`group relative isolate overflow-hidden border border-brand-darkRed/10 bg-[#1a0210] ${minH} ${
              isRTL ? 'text-right' : 'text-left'
            }`}
            data-cursor-hover
            data-analytics-event="click_discover_destination"
            data-analytics-section={`${source}_${dest.analytics}`}
            onClick={() =>
              trackEvent('click_cta_home_to_collection', {
                source,
                destination: dest.href,
                position: index,
              })
            }
          >
            <Image
              src={dest.image}
              alt=""
              fill
              sizes={compact ? '(max-width: 640px) 100vw, 240px' : '(max-width: 640px) 100vw, 50vw'}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              priority={index < 2 && !compact}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#1a0210]/92 via-[#1a0210]/45 to-[#1a0210]/15"
              aria-hidden
            />
            <div
              className={`relative z-[1] flex h-full ${minH} flex-col justify-end ${
                compact ? 'p-3.5 sm:p-4' : 'p-5 sm:p-6'
              }`}
            >
              <span className="font-montserrat text-[9px] uppercase tracking-[0.16em] text-[#e8d8c8]/70 sm:text-[10px] sm:tracking-[0.18em]">
                {hint}
              </span>
              <span
                className={`mt-1.5 flex items-center gap-2 font-rozha leading-tight text-[#faf7f3] ${
                  compact ? 'text-[1.1rem]' : 'text-[1.35rem] sm:text-[1.5rem]'
                } ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {dest.strandsLock ? <NoTranslate>{label}</NoTranslate> : label}
                <FiArrowRight
                  className={`h-3.5 w-3.5 shrink-0 text-[#e8d8c8]/80 transition-transform duration-300 sm:h-4 sm:w-4 ${
                    isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                  }`}
                />
              </span>
            </div>
          </LocaleLink>
        )
      })}
    </div>
  )
}
