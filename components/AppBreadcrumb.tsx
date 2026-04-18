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
}

/**
 * Single-row breadcrumb: HOME / SHOP / … — last segment truncates on small widths.
 * Use the same component across PDP and collection headers for alignment.
 */
export default function AppBreadcrumb({ segments, variant = 'default', className = '' }: Props) {
  if (!segments.length) return null

  const lastIdx = segments.length - 1

  const tone =
    variant === 'muted'
      ? 'font-roboto leading-none tracking-[0.28em] text-neutral-500'
      : 'font-montserrat text-brand-darkRed/70'

  const linkClass =
    variant === 'muted'
      ? 'shrink-0 whitespace-nowrap text-neutral-500 transition-colors hover:text-brand-dustyBlue'
      : 'shrink-0 whitespace-nowrap text-brand-darkRed/70 transition-colors hover:text-brand-dustyBlue'

  const sepClass =
    variant === 'muted' ? 'text-neutral-400' : 'text-brand-darkRed/30'

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex w-full min-w-0 max-w-full flex-nowrap items-center gap-x-2 overflow-x-auto text-[10px] uppercase tracking-[0.12em] [scrollbar-width:none] sm:gap-x-3 sm:text-xs [&::-webkit-scrollbar]:hidden ${tone} ${className}`}
    >
      {segments.map((seg, i) => {
        const isLast = i === lastIdx
        const showLink = Boolean(seg.href) && !isLast

        return (
          <Fragment key={`${seg.label}-${i}`}>
            {i > 0 && (
              <span className={`shrink-0 select-none text-[11px] font-light sm:text-xs ${sepClass}`} aria-hidden>
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
                    ? `min-w-0 flex-1 truncate font-normal ${
                        variant === 'muted' ? 'text-neutral-900' : 'text-brand-darkRed'
                      }`
                    : `shrink-0 whitespace-nowrap font-normal ${
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
