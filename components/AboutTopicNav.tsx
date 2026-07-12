'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getAboutTopicNavAriaLabel, getAboutTopicNavLinks } from '@/lib/i18n/aboutTopicNavI18n'
import { EDITORIAL_PAGE_CONTAINER, SITE_HEADER_STICKY_TOP } from '@/lib/ui/editorialPageChrome'

export default function AboutTopicNav() {
  const pathname = usePathname() || ''
  const { language } = useLanguage()
  const { pathname: inner } = stripLocaleFromPathname(pathname)
  const links = getAboutTopicNavLinks(language)
  const scrollRef = useRef<HTMLDivElement>(null)
  const hasScrolledActiveRef = useRef(false)

  useEffect(() => {
    const scroller = scrollRef.current
    if (!scroller) return
    const active = scroller.querySelector<HTMLElement>('[data-topic-active="true"]')
    if (!active) return
    active.scrollIntoView({
      inline: 'center',
      block: 'nearest',
      behavior: hasScrolledActiveRef.current ? 'smooth' : 'instant',
    })
    hasScrolledActiveRef.current = true
  }, [inner])

  return (
    <nav
      aria-label={getAboutTopicNavAriaLabel(language)}
      className={`sticky ${SITE_HEADER_STICKY_TOP} z-40 w-full min-w-0 border-b border-brand-stone/30 bg-brand-pageCanvas shadow-none`}
    >
      <div className={`${EDITORIAL_PAGE_CONTAINER} relative`}>
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory items-center gap-1 overflow-x-auto overscroll-x-contain py-3.5 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:py-4 [&::-webkit-scrollbar]:hidden"
        >
          {links.map((item) => {
            const isActive =
              inner === item.href ||
              (item.href !== '/about' && inner.startsWith(`${item.href}/`))

            return (
              <LocaleLink
                key={item.href}
                href={item.href}
                data-topic-active={isActive ? 'true' : undefined}
                className={`snap-start shrink-0 whitespace-nowrap px-3 py-2 font-montserrat text-[10px] uppercase tracking-[0.1em] transition-all duration-300 sm:px-4 sm:text-xs ${
                  isActive
                    ? 'bg-brand-darkRed text-brand-ivory'
                    : 'text-brand-clayRed/70 hover:bg-brand-dustyBlue/10 hover:text-brand-dustyBlue'
                }`}
                data-cursor-hover
              >
                {item.label}
              </LocaleLink>
            )
          })}
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-5 bg-gradient-to-r from-brand-pageCanvas to-transparent sm:w-7"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-5 bg-gradient-to-l from-brand-pageCanvas to-transparent sm:w-7"
          aria-hidden
        />
      </div>
    </nav>
  )
}
