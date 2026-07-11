'use client'

import LocaleLink from '@/components/LocaleLink'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import {
  formatAmountForCurrency,
  getInternationalReturnShippingFee,
  getInternationalShippingFee,
  getUaeFreeShippingThreshold,
  getUaeReturnShippingFee,
  getUaeShippingFee,
  getWorldwideFreeShippingThreshold,
} from '@/lib/pricing'
import { PDP_BULLET_ITEM, PDP_BULLET_LIST } from '@/lib/pdp/pdpTypography'

type Lang = 'en' | 'ar'

type ShippingAmounts = {
  uaeThreshold: string
  worldwideThreshold: string
  uaeFee: string
  intlFee: string
  uaeReturnFee: string
  intlReturnFee: string
}

const COPY: Record<
  Lang,
  {
    bullets: (a: ShippingAmounts) => string[]
    earringHygiene: string
    policyLead: string
    policyLabel: string
    policyTail: string
  }
> = {
  en: {
    bullets: (a) => [
      `Complimentary UAE shipping on orders above ${a.uaeThreshold}.`,
      `Complimentary worldwide shipping on orders above ${a.worldwideThreshold}.`,
      `Below these thresholds: UAE shipping ${a.uaeFee}; international shipping ${a.intlFee}.`,
      'International orders are fulfilled with DHL Express; UAE orders are operated by Jeebly.',
      `Approved returns: ${a.uaeReturnFee} within the UAE, or ${a.intlReturnFee} internationally (waived for a verified House fault).`,
      'Customs duties and import charges at destination remain the recipient’s responsibility.',
      'In-stock items dispatch within 1–3 business days.',
      'Made-to-order pieces dispatch according to the timeline shown on the product page.',
      'As many Bint Saeed pieces are produced on demand, refunds are not available for change of mind.',
      'Eligible items may be exchanged within 14 days of delivery, subject to approval and return conditions.',
      'Personalised, discounted, and custom-made pieces are not eligible for exchange or return.',
    ],
    earringHygiene:
      'For reasons of health, hygiene and personal safety, earrings are final sale and cannot be exchanged or refunded, except where a verified manufacturing defect or material non-conformity exists.',
    policyLead: 'For full details, please review our ',
    policyLabel: 'Shipment & Return Policy',
    policyTail: '.',
  },
  ar: {
    bullets: (a) => [
      `شحن مجاني داخل الإمارات للطلبات التي تتجاوز ${a.uaeThreshold}.`,
      `شحن مجاني عالمياً للطلبات التي تتجاوز ${a.worldwideThreshold}.`,
      `دون هذه العتبات: الشحن داخل الإمارات ${a.uaeFee}؛ والشحن الدولي ${a.intlFee}.`,
      'تُنفَّذ الطلبات الدولية عبر DHL Express؛ وتُشغَّل شحنات الإمارات عبر Jeebly.',
      `للإرجاع المعتمد: ${a.uaeReturnFee} داخل الإمارات، أو ${a.intlReturnFee} دولياً (تُعفى عند ثبوت خطأ من الدار).`,
      'تبقى الرسوم الجمركية ورسوم الاستيراد في بلد الوجهة على مسؤولية المستلم.',
      'القطع المتوفرة جاهزةً للشحن تُرسَل خلال 1–3 أيام عمل.',
      'القطع المصنوعة حسب الطلب تُرسَل وفق الجدول الزمني الموضّح على صفحة المنتج.',
      'بما أن كثيراً من قطع Bint Saeed تُنتَج عند الطلب، لا تُتاح استردادات الأموال في حال تغيير الرأي.',
      'قد يُقبل استبدال القطع المؤهّلة خلال 14 يوماً من التسليم، وفق الموافقة وشروط الإرجاع.',
      'القطع المخصّصة والمخفّضة والمصنوعة حسب الطلب غير مؤهّلة للاستبدال أو الإرجاع.',
    ],
    earringHygiene:
      'لأسباب تتعلق بالصحة والنظافة والسلامة الشخصية، تُعد الأقراط بيعاً نهائياً ولا يمكن استبدالها أو استرداد قيمتها، إلا في حال وجود عيب تصنيع مُثبت أو عدم مطابقة مادية.',
    policyLead: 'للتفاصيل الكاملة، راجعي ',
    policyLabel: 'سياسة الشحن والإرجاع',
    policyTail: '.',
  },
}

export function PdpShippingReturnsBullets({
  isRTL,
  productKind = 'default',
}: {
  isRTL: boolean
  /** Earrings: hygiene final-sale notice on the PDP shipping panel. */
  productKind?: 'default' | 'earrings'
}) {
  const { currency } = useCurrency()
  const code = currency.code
  const copy = COPY[isRTL ? 'ar' : 'en']
  const amounts: ShippingAmounts = {
    uaeThreshold: formatAmountForCurrency(getUaeFreeShippingThreshold(code), code),
    worldwideThreshold: formatAmountForCurrency(getWorldwideFreeShippingThreshold(code), code),
    uaeFee: formatAmountForCurrency(getUaeShippingFee(code), code),
    intlFee: formatAmountForCurrency(getInternationalShippingFee(code), code),
    uaeReturnFee: formatAmountForCurrency(getUaeReturnShippingFee(code), code),
    intlReturnFee: formatAmountForCurrency(getInternationalReturnShippingFee(code), code),
  }
  const bullets =
    productKind === 'earrings'
      ? [...copy.bullets(amounts), copy.earringHygiene]
      : copy.bullets(amounts)

  return (
    <ul className={PDP_BULLET_LIST}>
      {bullets.map((text) => (
        <li key={text} className={PDP_BULLET_ITEM}>
          {text}
        </li>
      ))}
      <li className={PDP_BULLET_ITEM}>
        {copy.policyLead}
        <LocaleLink
          href="/shipment-return-policy"
          className="underline hover:text-brand-dustyBlue"
          data-cursor-hover
        >
          {copy.policyLabel}
        </LocaleLink>
        {copy.policyTail}
      </li>
    </ul>
  )
}
