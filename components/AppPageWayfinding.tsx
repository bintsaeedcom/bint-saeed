'use client'

import { useRouter } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import { FiArrowLeft } from 'react-icons/fi'
import AppBreadcrumb, { type BreadcrumbSegment } from '@/components/AppBreadcrumb'
import { useLocaleHref } from '@/lib/i18n/useLocaleHref'

export type WayfindingBackLink = {
  href?: string
  label: string
  /** Use browser history instead of a fixed route. Falls back to `href` when there is no prior page. */
  useHistory?: boolean
}

type Props = {
  segments: BreadcrumbSegment[]
  backLink?: WayfindingBackLink
  rtl?: boolean
  variant?: 'default' | 'muted' | 'light'
  className?: string
  breadcrumbClassName?: string
  /** `bar` — PDP-style strip; `inline` — content pages */
  layout?: 'bar' | 'inline'
}

const backLinkBase =
  'inline-flex shrink-0 items-center gap-1.5 font-montserrat text-[10px] uppercase leading-none tracking-[0.14em] transition-colors sm:gap-2 sm:text-xs'

/**
 * Breadcrumb + optional back link. Keeps both elements per luxury PDP pattern.
 */
export default function AppPageWayfinding({
  segments,
  backLink,
  rtl = false,
  variant = 'default',
  className = '',
  breadcrumbClassName = '',
  layout = 'inline',
}: Props) {
  const router = useRouter()
  const { localize } = useLocaleHref()

  const backLinkClass =
    variant === 'light'
      ? `${backLinkBase} text-white/70 hover:text-white`
      : `${backLinkBase} text-brand-darkRed/70 hover:text-brand-dustyBlue`

  const handleHistoryBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
      return
    }
    if (backLink?.href) {
      router.push(localize(backLink.href))
    }
  }

  const renderBackControl = (extraClass = '') => {
    if (!backLink) return null

    const className = `${backLinkClass} ${extraClass} ${rtl ? 'flex-row-reverse' : ''}`

    if (backLink.useHistory) {
      return (
        <button type="button" onClick={handleHistoryBack} className={`group ${className}`} data-cursor-hover>
          <FiArrowLeft
            className={`h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 ${rtl ? 'rotate-180 group-hover:translate-x-0.5' : 'group-hover:-translate-x-0.5'}`}
            aria-hidden
          />
          <span className="truncate">{backLink.label}</span>
        </button>
      )
    }

    if (!backLink.href) return null

    return (
      <LocaleLink href={backLink.href} className={`group ${className}`} data-cursor-hover>
        <FiArrowLeft
          className={`h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 ${rtl ? 'rotate-180 group-hover:translate-x-0.5' : 'group-hover:-translate-x-0.5'}`}
          aria-hidden
        />
        <span className="truncate">{backLink.label}</span>
      </LocaleLink>
    )
  }

  const rowClass = `flex min-w-0 w-full items-center gap-2 sm:gap-3 ${rtl ? 'flex-row-reverse' : ''}`

  if (layout === 'bar') {
    return (
      <div className={`border-b border-brand-stone/20 pt-24 md:pt-28 lg:pt-32 ${className}`}>
        <div className={`mx-auto max-w-[1400px] px-4 py-2 sm:px-8 ${rowClass}`}>
          <AppBreadcrumb
            rtl={rtl}
            variant={variant}
            segments={segments}
            className={`min-w-0 flex-1 ${breadcrumbClassName}`}
          />
          {renderBackControl('max-w-[38%] sm:max-w-none')}
        </div>
      </div>
    )
  }

  return (
    <div className={`${rowClass} ${className}`}>
      <AppBreadcrumb
        rtl={rtl}
        variant={variant}
        segments={segments}
        className={`min-w-0 flex-1 ${breadcrumbClassName}`}
      />
      {renderBackControl('max-w-[38%] sm:max-w-none')}
    </div>
  )
}
