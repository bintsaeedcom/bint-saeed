'use client'

import {
  HOUSE_OF_ARTISANS_ABU_DHABI_CULTURE_URL,
  HOUSE_OF_ARTISANS_ANALYTICS_EVENT,
  HOUSE_OF_ARTISANS_ANALYTICS_LABELS,
  HOUSE_OF_ARTISANS_VISIT_ABU_DHABI_URL,
} from '@/lib/content/heritagePlaces'

type HeritageHouseOfArtisansLinkProps = {
  /** Shared lead above both official links. */
  lead: string
  /** Visit Abu Dhabi (tourism) CTA label. */
  visitAbuDhabiLabel: string
  /** Abu Dhabi Culture (government) CTA label. */
  abuDhabiCultureLabel: string
  /** Analytics section: heritage-hub | heritage-al-talli | heritage-khous | heritage-sadu */
  section: string
  className?: string
  leadClassName?: string
  linkClassName?: string
}

const defaultLinkClassName =
  'inline-flex font-montserrat text-[11px] uppercase tracking-[0.18em] text-brand-dustyBlue underline decoration-brand-dustyBlue/40 underline-offset-8 transition-colors hover:text-brand-darkRed hover:decoration-brand-darkRed/50'

/**
 * Outbound House of Artisans links to Visit Abu Dhabi and Abu Dhabi Culture,
 * with click tracking (`click_house_of_artisans` + section + event_label).
 */
export default function HeritageHouseOfArtisansLink({
  lead,
  visitAbuDhabiLabel,
  abuDhabiCultureLabel,
  section,
  className = '',
  leadClassName = 'mb-4 font-montserrat text-sm leading-[1.85] tracking-wide text-brand-darkRed/75',
  linkClassName = defaultLinkClassName,
}: HeritageHouseOfArtisansLinkProps) {
  return (
    <div className={className}>
      <p className={leadClassName}>{lead}</p>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
        <a
          href={HOUSE_OF_ARTISANS_VISIT_ABU_DHABI_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
          data-cursor-hover
          data-analytics-event={HOUSE_OF_ARTISANS_ANALYTICS_EVENT}
          data-analytics-section={section}
          data-analytics-label={HOUSE_OF_ARTISANS_ANALYTICS_LABELS.visitAbuDhabi}
        >
          {visitAbuDhabiLabel}
        </a>
        <a
          href={HOUSE_OF_ARTISANS_ABU_DHABI_CULTURE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
          data-cursor-hover
          data-analytics-event={HOUSE_OF_ARTISANS_ANALYTICS_EVENT}
          data-analytics-section={section}
          data-analytics-label={HOUSE_OF_ARTISANS_ANALYTICS_LABELS.abuDhabiCulture}
        >
          {abuDhabiCultureLabel}
        </a>
      </div>
    </div>
  )
}
