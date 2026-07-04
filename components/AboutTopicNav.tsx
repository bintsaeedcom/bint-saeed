'use client'

import { usePathname } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getAboutTopicNavAriaLabel, getAboutTopicNavLinks } from '@/lib/i18n/aboutTopicNavI18n'
import { EDITORIAL_PAGE_CONTAINER } from '@/lib/ui/editorialPageChrome'

export default function AboutTopicNav() {
  const pathname = usePathname() || ''
  const { language } = useLanguage()
  const { pathname: inner } = stripLocaleFromPathname(pathname)
  const links = getAboutTopicNavLinks(language)

  return (
    <nav
      aria-label={getAboutTopicNavAriaLabel(language)}
      className="sticky top-16 z-40 w-full min-w-0 border-b border-brand-stone/30 bg-brand-pageCanvas"
    >
      <div
        className={`${EDITORIAL_PAGE_CONTAINER} flex items-center gap-1 overflow-x-auto py-3.5 sm:py-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
      >
        {links.map((item) => {
          const isActive =
            inner === item.href ||
            (item.href !== '/about' && inner.startsWith(`${item.href}/`))

          return (
            <LocaleLink
              key={item.href}
              href={item.href}
              className={`shrink-0 whitespace-nowrap px-3.5 py-2 font-montserrat text-[11px] uppercase tracking-[0.1em] transition-all duration-300 sm:px-4 sm:text-xs ${
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
    </nav>
  )
}
