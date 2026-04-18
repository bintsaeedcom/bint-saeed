'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import CookieConsent from '@/components/CookieConsent'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'

interface LayoutWrapperProps {
  children: React.ReactNode
}

function GlobalStripeOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
      {/* Vertical system lines */}
      <div className="absolute left-[6%] top-0 h-full w-px bg-gradient-to-b from-transparent via-brand-dustyBlue/18 to-transparent" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-brand-stone/16 to-transparent" />
      <div className="absolute right-[6%] top-0 h-full w-px bg-gradient-to-b from-transparent via-brand-clayRed/16 to-transparent" />

      {/* Horizontal system lines */}
      <div className="absolute left-[5%] right-[5%] top-20 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/14 to-transparent" />
      <div className="absolute left-[5%] right-[5%] top-1/2 h-px bg-gradient-to-r from-transparent via-brand-stone/14 to-transparent" />
      <div className="absolute left-[5%] right-[5%] bottom-16 h-px bg-gradient-to-r from-transparent via-brand-clayRed/12 to-transparent" />
    </div>
  )
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname()
  const safePathname = pathname ?? ''
  const { pathname: inner } = stripLocaleFromPathname(safePathname || '/')

  // Avoid hydration mismatch: when pathname is temporarily unavailable on client,
  // don't assume "/" and collapse the layout to the coming-soon shell.
  const isComingSoon = pathname != null && inner === '/'
  const isHomeAccessShell =
    inner === '/home/gate' ||
    inner.startsWith('/home/gate/') ||
    inner === '/home/blocked' ||
    inner.startsWith('/home/blocked/')
  const isHomeEditorial =
    inner === '/home' || (inner.startsWith('/home/') && !isHomeAccessShell)

  if (isComingSoon || isHomeAccessShell) {
    return <main>{children}</main>
  }

  return (
    <>
      <Header />
      <main
        className={`relative z-40 w-full min-w-0 max-w-none pointer-events-auto ${isHomeEditorial ? 'pt-0' : 'pt-[90px] lg:pt-[100px]'}`}
      >
        <GlobalStripeOverlay />
        <div className="relative z-[2] w-full min-w-0 max-w-none">{children}</div>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </>
  )
}
