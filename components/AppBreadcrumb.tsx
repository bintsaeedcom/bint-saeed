'use client'

import type { ReactNode } from 'react'
import LocaleLink from '@/components/LocaleLink'

export type BreadcrumbSegment = {
  label: string
  /** Omit on the current (last) segment unless it is also a link */
  href?: string
}

type Props = {
  segments: BreadcrumbSegment[]
  /** Collection header style (shop index) — neutral type; `light` for dark hero backgrounds */
  variant?: 'default' | 'muted' | 'light'
  className?: string
  /** Mirror segment order for RTL layouts */
  rtl?: boolean
}

const ITEM_CLASS = 'inline-flex shrink-0 items-center self-center'
const TEXT_SIZE = 'text-[10px] leading-none md:text-xs'

/**
 * Single-row breadcrumb: HOME / SHOP / … — scrolls horizontally on tiny widths.
 * Each segment and separator shares one fixed row height (no vertical jump on mobile).
 */
export default function AppBreadcrumb({ segments, variant = 'default', className = '', rtl = false }: Props) {
  if (!segments.length) return null

  const lastIdx = segments.length - 1

  const tracking =
    variant === 'muted'
      ? 'tracking-[0.1em] sm:tracking-[0.22em] md:tracking-[0.28em]'
      : variant === 'light'
        ? 'tracking-[0.1em] sm:tracking-[0.22em] md:tracking-[0.28em]'
        : 'tracking-[0.12em] sm:tracking-[0.14em]'

  const crumbText = `font-montserrat uppercase ${TEXT_SIZE} ${tracking}`

  const linkClass =
    variant === 'muted'
      ? `${crumbText} whitespace-nowrap text-neutral-500 transition-colors hover:text-brand-dustyBlue`
      : variant === 'light'
        ? `${crumbText} whitespace-nowrap text-white/65 transition-colors hover:text-white`
        : `${crumbText} whitespace-nowrap text-brand-darkRed/70 transition-colors hover:text-brand-dustyBlue`

  const sepClass =
    variant === 'muted' ? 'text-neutral-400' : variant === 'light' ? 'text-white/35' : 'text-brand-darkRed/30'

  const currentClass =
    variant === 'muted' ? 'text-neutral-900' : variant === 'light' ? 'text-white' : 'text-brand-darkRed'

  const nodes: ReactNode[] = []

  segments.forEach((seg, i) => {
    const isLast = i === lastIdx
    const isMiddle = i > 0 && !isLast
    const showLink = Boolean(seg.href) && !isLast
    const truncateMiddle = isMiddle ? 'max-w-[28vw] truncate sm:max-w-none' : ''

    if (i > 0) {
      nodes.push(
        <li key={`sep-${i}`} className={ITEM_CLASS} aria-hidden>
          <span className={`inline-flex items-center ${crumbText} ${sepClass} select-none`}>/</span>
        </li>,
      )
    }

    nodes.push(
      <li key={`crumb-${i}`} className={`${ITEM_CLASS} ${isLast ? 'min-w-0' : ''}`}>
        {showLink ? (
          <LocaleLink
            href={seg.href!}
            className={`inline-flex items-center ${linkClass} ${truncateMiddle}`}
            title={seg.label}
            data-cursor-hover
          >
            {seg.label}
          </LocaleLink>
        ) : (
          <span
            className={`inline-flex items-center font-normal ${crumbText} ${
              isLast ? `min-w-0 max-w-[50vw] truncate sm:max-w-none ${currentClass}` : `whitespace-nowrap ${currentClass}`
            } ${truncateMiddle}`}
            title={seg.label}
            aria-current={isLast ? 'page' : undefined}
          >
            {seg.label}
          </span>
        )}
      </li>,
    )
  })

  return (
    <nav
      aria-label="Breadcrumb"
      dir={rtl ? 'rtl' : 'ltr'}
      className={`w-full min-w-0 max-w-full ${className}`}
    >
      <ol
        className={`m-0 flex h-4 w-full min-w-0 max-w-full list-none flex-nowrap items-center gap-x-1 overflow-x-auto p-0 sm:h-[18px] sm:gap-x-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          rtl ? 'flex-row-reverse justify-end' : ''
        }`}
      >
        {nodes}
      </ol>
    </nav>
  )
}
