'use client'

import LocaleLink from '@/components/LocaleLink'
import { PDP_BULLET_ITEM, PDP_BULLET_LIST } from '@/lib/pdp/pdpTypography'

type Lang = 'en' | 'ar'

const COPY: Record<
  Lang,
  {
    bullets: string[]
    policyLead: string
    policyLabel: string
    policyTail: string
  }
> = {
  en: {
    bullets: [
      'Complimentary UAE shipping on orders over AED 1,000.',
      'In-stock items dispatch within 1–3 business days.',
      'Made-to-order pieces dispatch according to the timeline shown on the product page.',
      'As many Bint Saeed pieces are produced on demand, refunds are not available for change of mind.',
      'Eligible items may be exchanged within 14 days of delivery, subject to approval and return conditions.',
      'Personalised, discounted, and custom-made pieces are not eligible for exchange or return.',
    ],
    policyLead: 'For full details, please review our ',
    policyLabel: 'Shipment & Return Policy',
    policyTail: '.',
  },
  ar: {
    bullets: [
      'شحن مجاني داخل الإمارات للطلبات التي تتجاوز 1,000 درهم.',
      'القطع المتوفرة جاهزةً للشحن تُرسَل خلال 1–3 أيام عمل.',
      'القطع المصنوعة حسب الطلب تُرسَل وفق الجدول الزمني الموضّح على صفحة المنتج.',
      'بما أن كثيراً من قطع Bint Saeed تُنتَج عند الطلب، لا تُتاح استردادات الأموال في حال تغيير الرأي.',
      'قد يُقبل استبدال القطع المؤهّلة خلال 14 يوماً من التسليم، وفق الموافقة وشروط الإرجاع.',
      'القطع المخصّصة والمخفّضة والمصنوعة حسب الطلب غير مؤهّلة للاستبدال أو الإرجاع.',
    ],
    policyLead: 'للتفاصيل الكاملة، راجعي ',
    policyLabel: 'سياسة الشحن والإرجاع',
    policyTail: '.',
  },
}

export function PdpShippingReturnsBullets({ isRTL }: { isRTL: boolean }) {
  const copy = COPY[isRTL ? 'ar' : 'en']

  return (
    <ul className={PDP_BULLET_LIST}>
      {copy.bullets.map((text) => (
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
