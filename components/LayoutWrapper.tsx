'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import LocationConsent from '@/components/LocationConsent'
import EmailPopup from '@/components/EmailPopup'
import CookieConsent from '@/components/CookieConsent'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname()
  
  // Coming soon mode - hide all navigation on homepage
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
      <LocationConsent />
      <EmailPopup />
      <CookieConsent />
    </>
  )
}
