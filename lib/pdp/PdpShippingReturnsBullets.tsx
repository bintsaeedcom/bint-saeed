'use client'

import LocaleLink from '@/components/LocaleLink'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import type { AppLocale } from '@/lib/i18n/routing'
import {
  formatAmountForCurrency,
  getUaeFreeShippingThreshold,
  getWorldwideFreeShippingThreshold,
} from '@/lib/pricing'
import { PDP_COPY_RELAXED } from '@/lib/pdp/pdpTypography'

/**
 * PDP Shipping & Returns panel — brief, buy-friendly copy only.
 * Full conditions live on /shipment-return-policy (Hermès / Loro-style restraint).
 */

type Copy = {
  body: (uae: string, worldwide: string) => string
  policyLabel: string
}

const COPY: Record<AppLocale, Copy> = {
  en: {
    body: (uae, worldwide) =>
      `Complimentary UAE shipping on orders above ${uae}. Complimentary worldwide shipping on orders above ${worldwide}.`,
    policyLabel: 'Shipment & Return Policy',
  },
  ar: {
    body: (uae, worldwide) =>
      `شحن مجاني داخل الإمارات للطلبات التي تتجاوز ${uae}. شحن مجاني عالمياً للطلبات التي تتجاوز ${worldwide}.`,
    policyLabel: 'سياسة الشحن والإرجاع',
  },
  fr: {
    body: (uae, worldwide) =>
      `Livraison offerte aux Émirats pour les commandes au-dessus de ${uae}. Livraison mondiale offerte au-dessus de ${worldwide}.`,
    policyLabel: 'Politique d’expédition et de retour',
  },
  de: {
    body: (uae, worldwide) =>
      `Kostenloser UAE-Versand ab ${uae}. Kostenloser weltweiter Versand ab ${worldwide}.`,
    policyLabel: 'Versand- und Rückgaberecht',
  },
  it: {
    body: (uae, worldwide) =>
      `Spedizione gratuita negli EAU oltre ${uae}. Spedizione mondiale gratuita oltre ${worldwide}.`,
    policyLabel: 'Politica di spedizione e reso',
  },
  es: {
    body: (uae, worldwide) =>
      `Envío gratuito en EAU en pedidos superiores a ${uae}. Envío mundial gratuito a partir de ${worldwide}.`,
    policyLabel: 'Política de envío y devolución',
  },
  nl: {
    body: (uae, worldwide) =>
      `Gratis VAE-verzending vanaf ${uae}. Gratis wereldwijde verzending vanaf ${worldwide}.`,
    policyLabel: 'Verzend- en retourbeleid',
  },
  pt: {
    body: (uae, worldwide) =>
      `Envio gratuito nos EAU acima de ${uae}. Envio mundial gratuito acima de ${worldwide}.`,
    policyLabel: 'Política de envio e devolução',
  },
  ru: {
    body: (uae, worldwide) =>
      `Бесплатная доставка по ОАЭ при заказе от ${uae}. Бесплатная международная доставка от ${worldwide}.`,
    policyLabel: 'Политика доставки и возврата',
  },
  zh: {
    body: (uae, worldwide) =>
      `阿联酋订单满 ${uae} 免运费。全球订单满 ${worldwide} 免运费。`,
    policyLabel: '配送与退换政策',
  },
  id: {
    body: (uae, worldwide) =>
      `Pengiriman gratis di UAE untuk pesanan di atas ${uae}. Pengiriman gratis ke seluruh dunia untuk pesanan di atas ${worldwide}.`,
    policyLabel: 'Kebijakan Pengiriman & Pengembalian',
  },
  ms: {
    body: (uae, worldwide) =>
      `Penghantaran percuma di UAE untuk pesanan melebihi ${uae}. Penghantaran percuma seluruh dunia untuk pesanan melebihi ${worldwide}.`,
    policyLabel: 'Dasar Penghantaran & Pemulangan',
  },
}

export function PdpShippingReturnsBullets({
  isRTL,
  productKind: _productKind = 'default',
}: {
  isRTL: boolean
  /** Kept for call-site compatibility; PDP no longer lists product-specific return caveats. */
  productKind?: 'default' | 'earrings'
}) {
  void _productKind
  const { currency } = useCurrency()
  const { language } = useLanguage()
  const locale = language as AppLocale
  const copy = COPY[locale]
  if (!copy) {
    throw new Error(`Missing PDP shipping copy for locale: ${locale}`)
  }
  const code = currency.code
  const uae = formatAmountForCurrency(getUaeFreeShippingThreshold(code), code)
  const worldwide = formatAmountForCurrency(getWorldwideFreeShippingThreshold(code), code)

  return (
    <div className={`space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
      <p className={PDP_COPY_RELAXED}>{copy.body(uae, worldwide)}</p>
      <p className={PDP_COPY_RELAXED}>
        <LocaleLink
          href="/shipment-return-policy"
          className="underline underline-offset-4 decoration-brand-darkRed/35 transition-colors hover:text-brand-dustyBlue hover:decoration-brand-dustyBlue"
          data-cursor-hover
        >
          {copy.policyLabel}
        </LocaleLink>
      </p>
    </div>
  )
}
