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
  const destinations = filterOffCurrentPage(DISCOVER_DESTINATIONS, pathname)

  return (
    <div
      className={`grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-7 ${
 compact ? 'lg:grid-cols-2' : 'lg:grid-cols-4'
 } ${className}`}
    >
      {destinations.map((dest, index) => {
        const label = dest.strandsLock
          ? shopStrandsCta(language, 'title')
          : copy[dest.labelKey]
        const hint = copy[dest.hintKey]
        return (
          <LocaleLink
            key={dest.href}
            href={dest.href}
            className="group flex flex-col items-center text-center"
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
            <div
              className={`relative w-full overflow-hidden border border-brand-darkRed/10 bg-[#1a0210] aspect-[3/4] ${
 compact ? 'max-w-[11rem] mx-auto' : ''
 }`}
            >
              <Image
                src={dest.image}
                alt=""
                fill
                sizes={
                  compact
                    ? '(max-width: 640px) 50vw, 240px'
                    : '(max-width: 1024px) 50vw, 25vw'
                }
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                priority={index < 2 && !compact}
              />
            </div>
            <span
              className={`mt-3 font-montserrat uppercase text-brand-dustyBlue/80 ${
 compact
 ? 'text-[8px] tracking-[0.14em]'
 : 'text-[9px] tracking-[0.16em] sm:text-[10px] sm:tracking-[0.18em]'
 }`}
            >
              {hint}
            </span>
            <span
              className={`mt-1.5 flex items-center justify-center gap-2 font-rozha leading-tight text-brand-darkRed ${
 compact ? 'text-[1.05rem]' : 'text-[1.15rem] sm:text-[1.3rem]'
 } `}
            >
              {dest.strandsLock ? <NoTranslate>{label}</NoTranslate> : label}
              <FiArrowRight
                className={`h-3.5 w-3.5 shrink-0 text-brand-clayRed/70 transition-transform duration-300 sm:h-4 sm:w-4 ${
 isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'
 }`}
              />
            </span>
          </LocaleLink>
        )
      })}
    </div>
  )
}
