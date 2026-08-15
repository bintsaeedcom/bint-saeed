'use client'

import LocaleLink from '@/components/LocaleLink'
import { getActivePdpAnalyticsContext } from '@/lib/analytics/pdpAnalytics'
import { trackEvent } from '@/lib/analytics/tracking'
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

export type PdpShippingProductKind = 'garment' | 'jewellery'

type Copy = {
  body: (uae: string, worldwide: string) => string
  garmentNote: string
  jewelleryNote: string
  policyLabel: string
  soonerPrefix: string
  orWord: string
  hours: string
}

const SUPPORT_EMAIL = 'support@bintsaeed.com'
const WHATSAPP_DISPLAY = '+971 50 229 9402'
const WHATSAPP_WA_ME = '971502299402'

const COPY: Record<AppLocale, Copy> = {
  en: {
    body: (uae, worldwide) =>
      `Complimentary UAE shipping on orders above ${uae}. Complimentary worldwide shipping on orders above ${worldwide}.`,
    garmentNote:
      'Our garments are crafted to your bespoke order and are not ready-made. Each piece is made with care in our atelier and is usually shipped within approximately two weeks of order confirmation.',
    jewelleryNote:
      'Selected jewellery and lifestyle accessories are usually ready to ship and dispatched within 1 to 3 business days of order confirmation.',
    policyLabel: 'Shipment & Return Policy',
    soonerPrefix: 'If you need your order sooner, contact Client Services on WhatsApp at',
    orWord: 'or',
    hours: 'Available Sunday–Thursday, 9:00–18:00 (Abu Dhabi time).',
  },
  ar: {
    body: (uae, worldwide) =>
      `شحن مجاني داخل الإمارات للطلبات التي تتجاوز ${uae}. شحن مجاني عالمياً للطلبات التي تتجاوز ${worldwide}.`,
    garmentNote:
      'تُصنع ملابسنا وفق طلبكِ الخاص وليست جاهزة مسبقاً. تُنجز كل قطعة بعناية في الأتيليه لدينا، وعادةً ما تُشحن خلال نحو أسبوعين من تأكيد الطلب.',
    jewelleryNote:
      'المجوهرات المختارة وقطع أسلوب الحياة تكون عادةً جاهزة للشحن، وتُرسل خلال يوم إلى ثلاثة أيام عمل من تأكيد الطلب.',
    policyLabel: 'سياسة الشحن والإرجاع',
    soonerPrefix: 'إذا كنتِ بحاجة إلى طلبكِ في وقت أقرب، فتواصلي مع Client Services عبر واتساب على',
    orWord: 'أو',
    hours: 'متاح من الأحد إلى الخميس، من 9:00 إلى 18:00 (بتوقيت أبوظبي).',
  },
  fr: {
    body: (uae, worldwide) =>
      `Livraison offerte aux Émirats pour les commandes au-dessus de ${uae}. Livraison mondiale offerte au-dessus de ${worldwide}.`,
    garmentNote:
      'Nos vêtements sont réalisés sur votre commande bespoke et ne sont pas prêts à l’expédition immédiate. Chaque pièce est confectionnée avec soin dans notre atelier et expédiée en général sous environ deux semaines après confirmation de la commande.',
    jewelleryNote:
      'Les bijoux et accessoires lifestyle sélectionnés sont généralement prêts à expédier et expédiés sous 1 à 3 jours ouvrés après confirmation de la commande.',
    policyLabel: 'Politique d’expédition et de retour',
    soonerPrefix: 'Si vous souhaitez recevoir votre commande plus tôt, contactez Client Services sur WhatsApp au',
    orWord: 'ou',
    hours: 'Disponible du dimanche au jeudi, de 9 h à 18 h (heure d’Abou Dabi).',
  },
  de: {
    body: (uae, worldwide) =>
      `Kostenloser UAE-Versand ab ${uae}. Kostenloser weltweiter Versand ab ${worldwide}.`,
    garmentNote:
      'Unsere Kleidungsstücke werden auf Ihre Bespoke-Bestellung hin gefertigt und sind nicht sofort versandbereit. Jedes Teil wird in unserem Atelier mit Sorgfalt gefertigt und in der Regel innerhalb von etwa zwei Wochen nach Bestellbestätigung versandt.',
    jewelleryNote:
      'Ausgewählter Schmuck und Lifestyle-Accessoires sind in der Regel versandbereit und werden innerhalb von 1 bis 3 Werktagen nach Bestellbestätigung versandt.',
    policyLabel: 'Versand- und Rückgaberecht',
    soonerPrefix: 'Wenn Sie Ihre Bestellung früher benötigen, kontaktieren Sie Client Services per WhatsApp unter',
    orWord: 'oder',
    hours: 'Erreichbar Sonntag bis Donnerstag, 9:00–18:00 Uhr (Abu-Dhabi-Zeit).',
  },
  it: {
    body: (uae, worldwide) =>
      `Spedizione gratuita negli EAU oltre ${uae}. Spedizione mondiale gratuita oltre ${worldwide}.`,
    garmentNote:
      'I nostri capi di abbigliamento sono realizzati sul vostro ordine bespoke e non sono pronti per la spedizione immediata. Ogni pezzo viene confezionato con cura nel nostro atelier e viene solitamente spedito entro circa due settimane dalla conferma dell’ordine.',
    jewelleryNote:
      'I gioielli e gli accessori lifestyle selezionati sono generalmente pronti per la spedizione e vengono spediti entro 1–3 giorni lavorativi dalla conferma dell’ordine.',
    policyLabel: 'Politica di spedizione e reso',
    soonerPrefix: 'Se desiderate ricevere l’ordine prima, contattate Client Services su WhatsApp al',
    orWord: 'o',
    hours: 'Disponibile da domenica a giovedì, dalle 9:00 alle 18:00 (ora di Abu Dhabi).',
  },
  es: {
    body: (uae, worldwide) =>
      `Envío gratuito en EAU en pedidos superiores a ${uae}. Envío mundial gratuito a partir de ${worldwide}.`,
    garmentNote:
      'Nuestras prendas se confeccionan según su pedido bespoke y no están listas para envío inmediato. Cada pieza se realiza con cuidado en nuestro atelier y suele enviarse en aproximadamente dos semanas desde la confirmación del pedido.',
    jewelleryNote:
      'La joyería y los accesorios lifestyle seleccionados suelen estar listos para enviar y se despachan en un plazo de 1 a 3 días hábiles desde la confirmación del pedido.',
    policyLabel: 'Política de envío y devolución',
    soonerPrefix: 'Si necesita su pedido antes, contacte con Client Services por WhatsApp en',
    orWord: 'o',
    hours: 'Disponible de domingo a jueves, de 9:00 a 18:00 (hora de Abu Dabi).',
  },
  nl: {
    body: (uae, worldwide) =>
      `Gratis VAE-verzending vanaf ${uae}. Gratis wereldwijde verzending vanaf ${worldwide}.`,
    garmentNote:
      'Onze kledingstukken worden voor uw bespoke bestelling vervaardigd en zijn niet kant-en-klaar. Elk stuk wordt met zorg in ons atelier gemaakt en wordt doorgaans binnen ongeveer twee weken na orderbevestiging verzonden.',
    jewelleryNote:
      'Geselecteerde sieraden en lifestyle-accessoires zijn doorgaans klaar voor verzending en worden binnen 1 tot 3 werkdagen na orderbevestiging verzonden.',
    policyLabel: 'Verzend- en retourbeleid',
    soonerPrefix: 'Als u uw bestelling eerder nodig heeft, neem dan via WhatsApp contact op met Client Services op',
    orWord: 'of',
    hours: 'Bereikbaar van zondag tot en met donderdag, 9.00–18.00 uur (Abu Dhabi-tijd).',
  },
  pt: {
    body: (uae, worldwide) =>
      `Envio gratuito nos EAU acima de ${uae}. Envio mundial gratuito acima de ${worldwide}.`,
    garmentNote:
      'As nossas peças de vestuário são produzidas para a sua encomenda bespoke e não estão prontas para envio imediato. Cada peça é feita com cuidado no nosso atelier e é normalmente enviada em cerca de duas semanas após a confirmação da encomenda.',
    jewelleryNote:
      'A joalharia e os acessórios lifestyle selecionados estão normalmente prontos a enviar e são expedidos em 1 a 3 dias úteis após a confirmação da encomenda.',
    policyLabel: 'Política de envio e devolução',
    soonerPrefix: 'Se precisar da sua encomenda mais cedo, contacte Client Services por WhatsApp em',
    orWord: 'ou',
    hours: 'Disponível de domingo a quinta-feira, das 9:00 às 18:00 (hora de Abu Dhabi).',
  },
  ru: {
    body: (uae, worldwide) =>
      `Бесплатная доставка по ОАЭ при заказе от ${uae}. Бесплатная международная доставка от ${worldwide}.`,
    garmentNote:
      'Наша одежда создаётся по вашему bespoke-заказу и не является готовой к немедленной отправке. Каждое изделие с вниманием изготавливается в нашем ателье и обычно отправляется примерно в течение двух недель после подтверждения заказа.',
    jewelleryNote:
      'Избранные украшения и lifestyle-аксессуары обычно готовы к отправке и отправляются в течение 1–3 рабочих дней после подтверждения заказа.',
    policyLabel: 'Политика доставки и возврата',
    soonerPrefix: 'Если вам нужен заказ раньше, свяжитесь с Client Services в WhatsApp по номеру',
    orWord: 'или',
    hours: 'Доступно с воскресенья по четверг, с 9:00 до 18:00 (время Абу-Даби).',
  },
  zh: {
    body: (uae, worldwide) =>
      `阿联酋订单满 ${uae} 免运费。全球订单满 ${worldwide} 免运费。`,
    garmentNote:
      '我们的成衣均按您的 bespoke 订单制作，并非现货。每一件都会在我们的工坊中悉心完成，通常会在订单确认后约两周内发出。',
    jewelleryNote:
      '精选珠宝与生活方式配饰通常可即刻发货，并在订单确认后 1 至 3 个工作日内发出。',
    policyLabel: '配送与退换政策',
    soonerPrefix: '如您希望更早收到订单，请通过 WhatsApp 联系 Client Services：',
    orWord: '或',
    hours: '服务时间为周日至周四，9:00–18:00（阿布扎比时间）。',
  },
  id: {
    body: (uae, worldwide) =>
      `Pengiriman gratis di UAE untuk pesanan di atas ${uae}. Pengiriman gratis ke seluruh dunia untuk pesanan di atas ${worldwide}.`,
    garmentNote:
      'Pakaian kami dibuat untuk pesanan bespoke Anda dan bukan barang siap kirim. Setiap karya dikerjakan dengan saksama di atelier kami dan biasanya dikirim dalam waktu sekitar dua minggu setelah pesanan dikonfirmasi.',
    jewelleryNote:
      'Perhiasan dan aksesori lifestyle terpilih biasanya siap dikirim dan dikirim dalam 1 hingga 3 hari kerja setelah pesanan dikonfirmasi.',
    policyLabel: 'Kebijakan Pengiriman & Pengembalian',
    soonerPrefix: 'Jika Anda memerlukan pesanan lebih cepat, hubungi Client Services melalui WhatsApp di',
    orWord: 'atau',
    hours: 'Tersedia Minggu–Kamis, 09.00–18.00 (waktu Abu Dhabi).',
  },
  ms: {
    body: (uae, worldwide) =>
      `Penghantaran percuma di UAE untuk pesanan melebihi ${uae}. Penghantaran percuma seluruh dunia untuk pesanan melebihi ${worldwide}.`,
    garmentNote:
      'Pakaian kami dihasilkan untuk pesanan bespoke anda dan bukan stok siap hantar. Setiap helaian disiapkan dengan teliti di atelier kami dan biasanya dihantar dalam tempoh kira-kira dua minggu selepas pengesahan pesanan.',
    jewelleryNote:
      'Barang kemas dan aksesori gaya hidup terpilih biasanya sedia untuk dihantar dan dihantar dalam 1 hingga 3 hari bekerja selepas pengesahan pesanan.',
    policyLabel: 'Dasar Penghantaran & Pemulangan',
    soonerPrefix: 'Jika anda memerlukan pesanan lebih awal, hubungi Client Services melalui WhatsApp di',
    orWord: 'atau',
    hours: 'Tersedia Ahad–Khamis, 9:00–18:00 (waktu Abu Dhabi).',
  },
}

const linkClassName =
  'underline underline-offset-4 decoration-brand-darkRed/35 transition-colors hover:text-brand-dustyBlue hover:decoration-brand-dustyBlue'

export function PdpShippingReturnsBullets({
  isRTL,
  productKind = 'garment',
}: {
  isRTL: boolean
  /** Garments = bespoke atelier timeline; jewellery/accessories = ready-to-ship timing. */
  productKind?: PdpShippingProductKind | 'earrings' | 'default'
}) {
  void isRTL
  const { currency } = useCurrency()
  const { language } = useLanguage()
  const locale = language as AppLocale
  const copy = COPY[locale]
  if (!copy) {
    throw new Error(`Missing PDP shipping copy for locale: ${locale}`)
  }

  const kind: PdpShippingProductKind =
    productKind === 'jewellery' || productKind === 'earrings' ? 'jewellery' : 'garment'

  const code = currency.code
  const uae = formatAmountForCurrency(getUaeFreeShippingThreshold(code), code)
  const worldwide = formatAmountForCurrency(getWorldwideFreeShippingThreshold(code), code)
  const timingNote = kind === 'jewellery' ? copy.jewelleryNote : copy.garmentNote

  return (
    <div className="space-y-3 text-start">
      <p className={PDP_COPY_RELAXED}>{copy.body(uae, worldwide)}</p>
      <p className={PDP_COPY_RELAXED}>{timingNote}</p>
      <p className={PDP_COPY_RELAXED}>
        <LocaleLink href="/shipment-return-policy" className={linkClassName} data-cursor-hover>
          {copy.policyLabel}
        </LocaleLink>
      </p>
      <p className={PDP_COPY_RELAXED}>
        {copy.soonerPrefix}{' '}
        <a
          href={`https://wa.me/${WHATSAPP_WA_ME}`}
          className={linkClassName}
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            const pdpContext = getActivePdpAnalyticsContext()
            trackEvent('whatsapp_click', {
              ...(pdpContext || {}),
              source: 'pdp_shipping_returns',
              page_path:
                typeof window !== 'undefined'
                  ? window.location.pathname
                  : pdpContext?.page_path,
            })
          }}
        >
          {WHATSAPP_DISPLAY}
        </a>{' '}
        {copy.orWord}{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className={linkClassName}>
          {SUPPORT_EMAIL}
        </a>
        .{' '}
        {copy.hours}
      </p>
    </div>
  )
}
