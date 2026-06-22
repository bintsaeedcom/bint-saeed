'use client'

import LocaleLink from '@/components/LocaleLink'
import { FiArrowLeft } from 'react-icons/fi'
import AppBreadcrumb, { type BreadcrumbSegment } from '@/components/AppBreadcrumb'

export type WayfindingBackLink = {
  href: string
  label: string
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
  const backLinkClass =
    variant === 'light'
      ? `${backLinkBase} text-white/70 hover:text-white`
      : `${backLinkBase} text-brand-darkRed/70 hover:text-brand-dustyBlue`

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
            <LocaleLink
              href={backLink.href}
              className={`${backLinkClass} hidden md:inline-flex ${rtl ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              {backLink.label}
            </LocaleLink>
          ) : null}
        </div>
        {backLink ? (
          <div className={`mx-auto w-full max-w-[1400px] px-4 pb-2 sm:px-8 md:hidden ${rtl ? 'text-right' : ''}`}>
            <LocaleLink
              href={backLink.href}
              className={`${backLinkClass} ${rtl ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              {backLink.label}
            </LocaleLink>
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <AppBreadcrumb rtl={rtl} variant={variant} segments={segments} className={breadcrumbClassName} />
      {backLink ? (
        <LocaleLink
          href={backLink.href}
          className={`group ${backLinkClass} ${rtl ? 'flex-row-reverse' : ''}`}
          data-cursor-hover
        >
          <FiArrowLeft
            className={`h-4 w-4 transition-transform ${rtl ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`}
            aria-hidden
          />
          {backLink.label}
        </LocaleLink>
      ) : null}
    </div>
  )
}
