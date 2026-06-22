'use client'

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

/**
 * Single-row breadcrumb: HOME / SHOP / … — scrolls horizontally on tiny widths.
 * Separators stay attached to the following segment (no orphaned "/").
 */
export default function AppBreadcrumb({ segments, variant = 'default', className = '', rtl = false }: Props) {
  if (!segments.length) return null

  const lastIdx = segments.length - 1

  const tone =
    variant === 'muted'
      ? 'font-montserrat leading-none text-neutral-500 tracking-[0.1em] sm:tracking-[0.22em] md:tracking-[0.28em]'
      : variant === 'light'
        ? 'font-montserrat leading-none text-white/60 tracking-[0.1em] sm:tracking-[0.22em] md:tracking-[0.28em]'
        : 'font-montserrat leading-none text-brand-darkRed/70'

  const linkClass =
    variant === 'muted'
      ? 'shrink-0 whitespace-nowrap leading-none text-neutral-500 transition-colors hover:text-brand-dustyBlue'
      : variant === 'light'
        ? 'shrink-0 whitespace-nowrap leading-none text-white/65 transition-colors hover:text-white'
        : 'shrink-0 whitespace-nowrap leading-none text-brand-darkRed/70 transition-colors hover:text-brand-dustyBlue'

  const sepClass =
    variant === 'muted' ? 'text-neutral-400' : variant === 'light' ? 'text-white/35' : 'text-brand-darkRed/30'

  const currentClass =
    variant === 'muted' ? 'text-neutral-900' : variant === 'light' ? 'text-white' : 'text-brand-darkRed'

  return (
    <nav
      aria-label="Breadcrumb"
      dir={rtl ? 'rtl' : 'ltr'}
      className={`w-full min-w-0 max-w-full ${className}`}
    >
      <ol
        className={`m-0 flex w-full min-w-0 max-w-full list-none flex-nowrap items-center gap-x-1.5 overflow-x-auto p-0 text-[9px] uppercase tracking-[0.1em] [scrollbar-width:none] sm:gap-x-2.5 sm:text-[10px] sm:tracking-[0.12em] md:text-xs [&::-webkit-scrollbar]:hidden ${rtl ? 'flex-row-reverse justify-end' : ''} ${tone}`}
      >
        {segments.map((seg, i) => {
          const isLast = i === lastIdx
          const isMiddle = i > 0 && !isLast
          const showLink = Boolean(seg.href) && !isLast

          return (
            <li
              key={`${seg.label}-${i}`}
              className={`flex shrink-0 items-center gap-x-1.5 sm:gap-x-2.5 ${isLast ? 'min-w-0 max-w-full' : ''}`}
            >
              {i > 0 ? (
                <span
                  className={`shrink-0 select-none leading-none text-[9px] font-light sm:text-[10px] md:text-xs ${sepClass}`}
                  aria-hidden
                >
                  /
                </span>
              ) : null}
              {showLink ? (
                <LocaleLink
                  href={seg.href!}
                  className={`${linkClass} ${isMiddle ? 'max-w-[30vw] truncate sm:max-w-none' : ''}`}
                  title={seg.label}
                  data-cursor-hover
                >
                  {seg.label}
                </LocaleLink>
              ) : (
                <span
                  className={`font-normal leading-none ${
                    isLast
                      ? `min-w-0 truncate ${currentClass}`
                      : `shrink-0 whitespace-nowrap ${currentClass}`
                  } ${isMiddle ? 'max-w-[30vw] truncate sm:max-w-none' : ''}`}
                  title={seg.label}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {seg.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
