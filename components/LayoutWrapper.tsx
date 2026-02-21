'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import LocationConsent from '@/components/LocationConsent'
import EmailPopup from '@/components/EmailPopup'
import CookieConsent from '@/components/CookieConsent'
import DeliveryBanner from '@/components/DeliveryBanner'

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
      <DeliveryBanner />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <LocationConsent />
      <EmailPopup />
      <CookieConsent />
    </>
  )
}
