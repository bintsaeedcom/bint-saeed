'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import CookieConsent from '@/components/CookieConsent'
import RegionalExperiencePopup from '@/components/RegionalExperiencePopup'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'
import { isAboutEditorialRoute } from '@/lib/about/aboutEditorialRoutes'
import { SITE_HEADER_OFFSET } from '@/lib/ui/editorialPageChrome'

interface LayoutWrapperProps {
  children: React.ReactNode
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

  const isDevErrorPreview =
    inner === '/dev/error-preview' || inner.startsWith('/dev/error-preview/')

  const isAdminArea = inner === '/admin' || inner.startsWith('/admin/')

  /** Full-bleed hero under fixed header — no top gap on main */
  const isFlushHeroLayout = isHomeEditorial || isAboutEditorialRoute(inner)

  if (isComingSoon || isHomeAccessShell || isDevErrorPreview || isAdminArea) {
    return <main>{children}</main>
  }

  return (
    <>
      <SmoothScrollProvider>
        <Header />
        <main
          className={`relative z-40 w-full min-w-0 max-w-none pointer-events-auto ${isFlushHeroLayout ? 'pt-0' : SITE_HEADER_OFFSET}`}
        >
          <div className="relative z-[2] w-full min-w-0 max-w-none bg-brand-pageCanvas">
            {children}
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
        <RegionalExperiencePopup />
      </SmoothScrollProvider>
    </>
  )
}
