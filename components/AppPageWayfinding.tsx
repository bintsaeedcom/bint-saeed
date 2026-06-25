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
  'inline-flex shrink-0 items-center gap-2 font-montserrat text-[10px] uppercase tracking-[0.16em] transition-colors sm:text-xs'

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

  const renderBackControl = (className: string) => {
    if (!backLink) return null

    if (backLink.useHistory) {
      return (
        <button
          type="button"
          onClick={handleHistoryBack}
          className={`group ${className}`}
          data-cursor-hover
        >
          <FiArrowLeft
            className={`h-4 w-4 transition-transform ${rtl ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`}
            aria-hidden
          />
          {backLink.label}
        </button>
      )
    }

    if (!backLink.href) return null

    return (
      <LocaleLink href={backLink.href} className={`group ${className}`} data-cursor-hover>
        <FiArrowLeft
          className={`h-4 w-4 transition-transform ${rtl ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`}
          aria-hidden
        />
        {backLink.label}
      </LocaleLink>
    )
  }

  if (layout === 'bar') {
    return (
      <div className={`border-b border-brand-stone/20 pt-24 md:pt-28 lg:pt-32 ${className}`}>
        <div
          className={`mx-auto flex min-w-0 w-full max-w-[1400px] items-center justify-between gap-3 px-4 py-2 sm:gap-4 sm:px-8 ${rtl ? 'flex-row-reverse' : ''}`}
        >
          <AppBreadcrumb
            rtl={rtl}
            variant={variant}
            segments={segments}
            className={`min-w-0 flex-1 ${breadcrumbClassName}`}
          />
          {backLink ? (
            backLink.useHistory ? (
              <button
                type="button"
                onClick={handleHistoryBack}
                className={`${backLinkClass} hidden md:inline-flex ${rtl ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                {backLink.label}
              </button>
            ) : backLink.href ? (
              <LocaleLink
                href={backLink.href}
                className={`${backLinkClass} hidden md:inline-flex ${rtl ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                {backLink.label}
              </LocaleLink>
            ) : null
          ) : null}
        </div>
        {backLink ? (
          <div className={`mx-auto w-full max-w-[1400px] px-4 pb-2 sm:px-8 md:hidden ${rtl ? 'text-right' : ''}`}>
            {backLink.useHistory ? (
              <button
                type="button"
                onClick={handleHistoryBack}
                className={`${backLinkClass} ${rtl ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                {backLink.label}
              </button>
            ) : backLink.href ? (
              <LocaleLink
                href={backLink.href}
                className={`${backLinkClass} ${rtl ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                {backLink.label}
              </LocaleLink>
            ) : null}
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <AppBreadcrumb rtl={rtl} variant={variant} segments={segments} className={breadcrumbClassName} />
      {renderBackControl(`${backLinkClass} ${rtl ? 'flex-row-reverse' : ''}`)}
    </div>
  )
}
