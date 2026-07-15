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
/** One size everywhere — scales consistently across OS/browser font engines */
const CRUMB_TEXT =
  'font-montserrat text-[10px] leading-[1.25] uppercase tracking-[0.12em] [font-feature-settings:"kern"_1,"liga"_0]'

/**
 * Single-row breadcrumb: HOME / SHOP / … — scrolls horizontally on narrow widths.
 */
export default function AppBreadcrumb({ segments, variant = 'default', className = '', rtl = false }: Props) {
  if (!segments.length) return null

  const lastIdx = segments.length - 1

  const linkClass =
    variant === 'muted'
      ? `${CRUMB_TEXT} whitespace-nowrap text-neutral-500 transition-colors hover:text-brand-dustyBlue`
      : variant === 'light'
        ? `${CRUMB_TEXT} whitespace-nowrap text-white/65 transition-colors hover:text-white`
        : `${CRUMB_TEXT} whitespace-nowrap text-brand-darkRed/70 transition-colors hover:text-brand-dustyBlue`

  const sepClass =
    variant === 'muted' ? 'text-neutral-400' : variant === 'light' ? 'text-white/35' : 'text-brand-darkRed/30'

  const currentClass =
    variant === 'muted' ? 'text-neutral-900' : variant === 'light' ? 'text-white' : 'text-brand-darkRed'

  const nodes: ReactNode[] = []

  segments.forEach((seg, i) => {
    const isLast = i === lastIdx
    const isMiddle = i > 0 && !isLast
    const showLink = Boolean(seg.href) && !isLast
    const truncateMiddle = isMiddle ? 'max-w-[38vw] truncate sm:max-w-[24vw] md:max-w-none' : ''

    if (i > 0) {
      nodes.push(
        <li key={`sep-${i}`} className={ITEM_CLASS} aria-hidden>
          <span className={`inline-flex items-center ${CRUMB_TEXT} ${sepClass} select-none`}>/</span>
        </li>,
      )
    }

    nodes.push(
      <li key={`crumb-${i}`} className={`${ITEM_CLASS} ${isLast ? 'min-w-0 max-w-full' : ''}`}>
        {showLink ? (
          <LocaleLink
            href={seg.href!}
            className={`inline-flex max-w-full items-center ${linkClass} ${truncateMiddle}`}
            title={seg.label}
            data-cursor-hover
          >
            {seg.label}
          </LocaleLink>
        ) : (
          <span
            className={`inline-flex max-w-full items-center ${CRUMB_TEXT} whitespace-nowrap ${currentClass} ${truncateMiddle}`}
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
      className={`bs-editorial-breadcrumb w-full min-w-0 max-w-full ${className}`}
    >
      <ol
        className={`m-0 flex min-h-[1.125rem] w-full min-w-0 max-w-full list-none flex-nowrap items-center gap-x-1 overflow-x-auto p-0 [-webkit-overflow-scrolling:touch] sm:gap-x-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden `}
      >
        {nodes}
      </ol>
    </nav>
  )
}
