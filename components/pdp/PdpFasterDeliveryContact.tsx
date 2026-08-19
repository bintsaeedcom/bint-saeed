'use client'

import { getActivePdpAnalyticsContext } from '@/lib/analytics/pdpAnalytics'
import { trackEvent } from '@/lib/analytics/tracking'
import { buildWhatsAppHref } from '@/lib/contact/whatsapp'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { productPageUi } from '@/lib/i18n/productPageUi'

const linkClassName =
  'font-semibold underline underline-offset-4 decoration-brand-darkRed/35 transition-colors hover:text-brand-dustyBlue hover:decoration-brand-dustyBlue'

export function PdpFasterDeliveryContact({
  className = 'mt-1 font-montserrat text-[11px] tracking-wide text-brand-darkRed/80',
  analyticsSource = 'pdp_faster_delivery',
}: {
  className?: string
  analyticsSource?: string
}) {
  const { language } = useLanguage()
  const ui = productPageUi(language)
  const href = buildWhatsAppHref(ui.fasterDeliveryWhatsAppMessage)

  return (
    <p className={className}>
      {ui.fasterDeliveryPrompt}{' '}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={linkClassName}
        data-cursor-hover
        onClick={() => {
          const pdpContext = getActivePdpAnalyticsContext()
          trackEvent('whatsapp_click', {
            ...(pdpContext || {}),
            source: analyticsSource,
            page_path:
              typeof window !== 'undefined'
                ? window.location.pathname
                : pdpContext?.page_path,
          })
        }}
      >
        {ui.fasterDeliveryCta}
      </a>
    </p>
  )
}
