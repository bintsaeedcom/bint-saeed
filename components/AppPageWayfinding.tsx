'use client'

import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import NoTranslate from '@/components/NoTranslate'
import { FiArrowLeft } from 'react-icons/fi'
import AppBreadcrumb, { type BreadcrumbSegment } from '@/components/AppBreadcrumb'
import { useLocaleHref } from '@/lib/i18n/useLocaleHref'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { EDITORIAL_PAGE_CONTAINER, SITE_CONTENT_TOP_PAD } from '@/lib/ui/editorialPageChrome'

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
  'inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap font-montserrat text-[10px] uppercase leading-none tracking-[0.12em] transition-colors'

function segmentsIncludeHome(segments: BreadcrumbSegment[]): boolean {
  return segments.some((s) => s.href === '/home' || s.href === '/')
}

function isRedundantHomeBack(backLink: WayfindingBackLink, segments: BreadcrumbSegment[]): boolean {
  if (backLink.useHistory) return false
  if (!segmentsIncludeHome(segments)) return false
  const href = backLink.href
  return href === '/home' || href === '/' || !href
}

function resolveBackLink(
  backLink: WayfindingBackLink | undefined,
  segments: BreadcrumbSegment[],
  backLabel: string,
): WayfindingBackLink | null {
  if (backLink) {
    if (isRedundantHomeBack(backLink, segments)) {
      return { useHistory: true, href: '/home', label: backLabel }
    }
    return backLink
  }
  if (segmentsIncludeHome(segments)) {
    return { useHistory: true, href: '/home', label: backLabel }
  }
  return null
}

/**
 * Breadcrumb on one row; optional history back control directly underneath.
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
  const { language } = useLanguage()
  const ui = commerceUi(language)

  const resolvedBack = useMemo(
    () => resolveBackLink(backLink, segments, ui.common.back),
    [backLink, segments, ui.common.back],
  )

  const backLinkClass =
    variant === 'light'
      ? `${backLinkBase} text-white/60 hover:text-white`
      : `${backLinkBase} text-brand-darkRed/60 hover:text-brand-dustyBlue`

  const handleHistoryBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
      return
    }
    if (resolvedBack?.href) {
      router.push(localize(resolvedBack.href))
    }
  }

  const renderBackControl = () => {
    if (!resolvedBack) return null

    const className = `${backLinkClass} `

    if (resolvedBack.useHistory) {
      return (
        <button type="button" onClick={handleHistoryBack} className={`group ${className}`} data-cursor-hover>
          <FiArrowLeft
            className={`h-3.5 w-3.5 shrink-0 ${rtl ? 'rotate-180 group-hover:translate-x-0.5' : 'group-hover:-translate-x-0.5'}`}
            aria-hidden
          />
          <NoTranslate as="span" lang={language}>
            {resolvedBack.label}
          </NoTranslate>
        </button>
      )
    }

    if (!resolvedBack.href) return null

    return (
      <LocaleLink href={resolvedBack.href} className={`group ${className}`} data-cursor-hover>
        <FiArrowLeft
          className={`h-3.5 w-3.5 shrink-0 ${rtl ? 'rotate-180 group-hover:translate-x-0.5' : 'group-hover:-translate-x-0.5'}`}
          aria-hidden
        />
        <NoTranslate as="span" lang={language}>
          {resolvedBack.label}
        </NoTranslate>
      </LocaleLink>
    )
  }

  const stack = (
    <div className={`flex w-full min-w-0 flex-col gap-1 items-start`}>
      <AppBreadcrumb
        rtl={rtl}
        variant={variant}
        segments={segments}
        className={`w-full ${breadcrumbClassName}`}
      />
      {renderBackControl()}
    </div>
  )

  if (layout === 'bar') {
    return (
      <div className={`border-b border-brand-stone/20 ${SITE_CONTENT_TOP_PAD} ${className}`}>
        <div className={`${EDITORIAL_PAGE_CONTAINER} py-2`}>{stack}</div>
      </div>
    )
  }

  return <div className={`w-full min-w-0 ${className}`}>{stack}</div>
}
