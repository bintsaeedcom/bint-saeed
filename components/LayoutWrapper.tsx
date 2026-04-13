'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import LocaleConfirmPopup from '@/components/LocaleConfirmPopup'
import EmailPopup from '@/components/EmailPopup'
import CookieConsent from '@/components/CookieConsent'
import LocationConsent from '@/components/LocationConsent'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname() || '/'
  const { pathname: inner } = stripLocaleFromPathname(pathname)

  const isComingSoon = inner === '/'
  const isPreviewAccessPage =
    pathname === '/preview/gate' ||
    pathname === '/preview/blocked' ||
    pathname?.startsWith('/preview/gate/') ||
    pathname?.startsWith('/preview/blocked/')

  if (isComingSoon || isPreviewAccessPage) {
    return <main>{children}</main>
  }

  return (
    <>
      <Header />
      <main className="relative z-40 pt-[90px] lg:pt-[100px] pointer-events-auto">{children}</main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
      <LocaleConfirmPopup />
      <LocationConsent />
      <EmailPopup />
    </>
  )
}
