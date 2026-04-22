'use client'

import { usePathname } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'

const ABOUT_TOPIC_LINKS = [
  { href: '/about', label: 'Our Story' },
  { href: '/the-codes', label: 'The Codes' },
  { href: '/craftsmanship', label: 'Craftsmanship' },
  { href: '/personalisation', label: 'Personalisation' },
  { href: '/giving-forward', label: 'Giving Forward' },
  { href: '/contact', label: 'Contact' },
] as const

export default function AboutTopicNav() {
  const pathname = usePathname() || ''
  const { pathname: inner } = stripLocaleFromPathname(pathname)

  return (
    <nav
      aria-label="About topics"
      className="sticky top-[168px] z-40 border-b border-brand-stone/30 bg-brand-pageCanvas sm:top-[176px] md:top-[188px] lg:top-[200px] xl:top-[208px]"
    >
      <div className="mx-auto flex max-w-[1200px] items-center gap-1 overflow-x-auto px-6 py-4 lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {ABOUT_TOPIC_LINKS.map((item) => {
          const isActive =
            inner === item.href ||
            (item.href !== '/about' && inner.startsWith(`${item.href}/`))

          return (
            <LocaleLink
              key={item.href}
              href={item.href}
              className={`shrink-0 px-4 py-2 font-montserrat text-xs uppercase tracking-[0.1em] transition-all duration-300 whitespace-nowrap ${
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
