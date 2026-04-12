'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import LocaleConfirmPopup from '@/components/LocaleConfirmPopup'
import EmailPopup from '@/components/EmailPopup'
import CookieConsent from '@/components/CookieConsent'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname()
  
  const isComingSoon = pathname === '/'
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
      <EmailPopup />
    </>
  )
}
