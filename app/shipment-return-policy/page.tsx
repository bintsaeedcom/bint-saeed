'use client'

import PolicyDocument from '@/components/legal/PolicyDocument'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getShipmentReturnContent } from '@/lib/legal/policyContentId'
import type { AppLocale } from '@/lib/i18n/routing'

export default function ShipmentReturnPolicyPage() {
  const { t, isRTL, language } = useLanguage()
  const locale = language as AppLocale

  return (
    <PolicyDocument
      content={getShipmentReturnContent(locale)}
      isRTL={isRTL}
      backLabel={t.shop.backToHome}
      variant="shipment"
      englishPolicy="shipment"
      language={locale}
    />
  )
}
