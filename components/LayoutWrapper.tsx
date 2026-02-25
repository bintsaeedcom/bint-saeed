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

  if (isComingSoon) {
    return (
      <>
        <main>{children}</main>
        <CookieConsent />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-[90px] lg:pt-[100px]">{children}</main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
      <LocaleConfirmPopup />
      <EmailPopup />
    </>
  )
}
