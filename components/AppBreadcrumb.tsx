'use client'

import { Fragment } from 'react'
import LocaleLink from '@/components/LocaleLink'

export type BreadcrumbSegment = {
  label: string
  /** Omit on the current (last) segment unless it is also a link */
  href?: string
}

type Props = {
  segments: BreadcrumbSegment[]
  /** Collection header style (shop index) — neutral type */
  variant?: 'default' | 'muted'
  className?: string
  /** Mirror segment order for RTL layouts */
  rtl?: boolean
}

/**
 * Single-row breadcrumb: HOME / SHOP / … — scrolls horizontally on tiny widths (no awkward wraps).
 * Use the same component across PDP and collection headers for alignment.
 */
export default function AppBreadcrumb({ segments, variant = 'default', className = '', rtl = false }: Props) {
  if (!segments.length) return null

  const lastIdx = segments.length - 1

  const tone =
    variant === 'muted'
      ? 'font-montserrat leading-none text-neutral-500 tracking-[0.1em] sm:tracking-[0.22em] md:tracking-[0.28em]'
      : 'font-montserrat leading-none text-brand-darkRed/70'

  const linkClass =
    variant === 'muted'
      ? 'shrink-0 whitespace-nowrap leading-none text-neutral-500 transition-colors hover:text-brand-dustyBlue'
      : 'shrink-0 whitespace-nowrap leading-none text-brand-darkRed/70 transition-colors hover:text-brand-dustyBlue'

  const sepClass =
    variant === 'muted' ? 'text-neutral-400' : 'text-brand-darkRed/30'

  return (
    <nav
      aria-label="Breadcrumb"
      dir={rtl ? 'rtl' : 'ltr'}
      className={`flex w-full min-w-0 max-w-full flex-nowrap items-center gap-x-1.5 overflow-x-auto text-[9px] uppercase tracking-[0.1em] [scrollbar-width:none] sm:gap-x-2.5 sm:text-[10px] sm:tracking-[0.12em] md:text-xs [&::-webkit-scrollbar]:hidden ${rtl ? 'flex-row-reverse justify-end' : ''} ${tone} ${className}`}
    >
      {segments.map((seg, i) => {
        const isLast = i === lastIdx
        const showLink = Boolean(seg.href) && !isLast

        return (
          <Fragment key={`${seg.label}-${i}`}>
            {i > 0 && (
              <span
                className={`shrink-0 select-none leading-none text-[9px] font-light sm:text-[10px] md:text-xs ${sepClass}`}
                aria-hidden
              >
                /
              </span>
            )}
            {showLink ? (
              <LocaleLink href={seg.href!} className={linkClass} data-cursor-hover>
                {seg.label}
              </LocaleLink>
            ) : (
              <span
                className={
                  isLast
                    ? `shrink-0 whitespace-nowrap font-normal leading-none ${
                        variant === 'muted' ? 'text-neutral-900' : 'text-brand-darkRed'
                      }`
                    : `shrink-0 whitespace-nowrap font-normal leading-none ${
                        variant === 'muted' ? 'text-neutral-900' : 'text-brand-darkRed'
                      }`
                }
                title={seg.label}
              >
                {seg.label}
              </span>
            )}
          </Fragment>
        )
      })}
    </nav>
  )
}
