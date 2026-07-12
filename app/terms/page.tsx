'use client'

import PolicyDocument, { ShipmentPolicyLink } from '@/components/legal/PolicyDocument'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getTermsContent } from '@/lib/legal/policyContentId'
import type { AppLocale } from '@/lib/i18n/routing'

const SHIPMENT_LINK: Record<string, { label: string; linkLabel: string }> = {
  en: { label: 'Full policy:', linkLabel: 'Shipment & Return Policy' },
  ar: { label: 'السياسة الكاملة:', linkLabel: 'سياسة الشحن والإرجاع' },
  fr: { label: 'Politique complète :', linkLabel: 'Politique d’expédition et de retours' },
  de: { label: 'Vollständige Richtlinie:', linkLabel: 'Versand- und Rückgaberichtlinie' },
  it: { label: 'Policy completa:', linkLabel: 'Politica di spedizione e resi' },
  es: { label: 'Política completa:', linkLabel: 'Política de envío y devoluciones' },
  nl: { label: 'Volledig beleid:', linkLabel: 'Verzend- en retourbeleid' },
  pt: { label: 'Política completa:', linkLabel: 'Política de envio e devoluções' },
  ru: { label: 'Полная политика:', linkLabel: 'Политика доставки и возврата' },
  zh: { label: '完整政策：', linkLabel: '配送与退货政策' },
  id: { label: 'Kebijakan lengkap:', linkLabel: 'Kebijakan Pengiriman & Pengembalian' },
  ms: { label: 'Dasar penuh:', linkLabel: 'Dasar Penghantaran & Pemulangan' },
}

export default function TermsPage() {
  const { t, isRTL, language } = useLanguage()
  const locale = language as AppLocale
  const content = getTermsContent(locale)
  const link = SHIPMENT_LINK[locale] ?? SHIPMENT_LINK.en

  return (
    <PolicyDocument
      content={content}
      isRTL={isRTL}
      backLabel={t.shop.backToHome}
      englishPolicy="terms"
      language={locale}
      sectionAfter={{
        5: <ShipmentPolicyLink label={link.label} linkLabel={link.linkLabel} />,
      }}
    />
  )
}
