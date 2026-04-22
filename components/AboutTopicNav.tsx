'use client'

import { usePathname } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'

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

  return (
    <nav
      aria-label="About topics"
      className="sticky top-[84px] z-30 border-y border-brand-stone/35 bg-[#faf9f7]/90 backdrop-blur"
    >
      <div className="mx-auto flex max-w-[1200px] items-center gap-2 overflow-x-auto px-6 py-3 lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {ABOUT_TOPIC_LINKS.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== '/about' && pathname.startsWith(`${item.href}/`))

          return (
            <LocaleLink
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-full border px-4 py-2 font-montserrat text-[10px] uppercase tracking-[0.16em] transition-colors ${
                isActive
                  ? 'border-brand-darkRed bg-transparent text-brand-darkRed'
                  : 'border-black/10 bg-transparent text-neutral-500 hover:border-brand-dustyBlue/45 hover:text-brand-dustyBlue'
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
