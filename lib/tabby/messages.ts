/** Approved Tabby redirect / rejection copy (EN + AR). */

export const TABBY_MSG = {
  generalReject: {
    en: 'Sorry, Tabby is unable to approve this purchase. Please use an alternative payment method for your order.',
    ar: 'نأسف، تابي غير قادرة على الموافقة على هذه العملية. الرجاء استخدام طريقة دفع أخرى.',
  },
  cancelled: {
    en: 'You aborted the payment. Please retry or choose another payment method.',
    ar: 'لقد ألغيت الدفعة. فضلاً حاول مجددًا أو اختر طريقة دفع أخرى.',
  },
  amountTooHigh: {
    en: 'This purchase is above your current spending limit with Tabby, try a smaller cart or use another payment method',
    ar: 'قيمة الطلب تفوق الحد الأقصى المسموح به حاليًا مع تابي. يُرجى تخفيض قيمة السلة أو استخدام وسيلة دفع أخرى.',
  },
  amountTooLow: {
    en: 'The purchase amount is below the minimum amount required to use Tabby, try adding more items or use another payment method',
    ar: 'قيمة الطلب أقل من الحد الأدنى المطلوب لاستخدام خدمة تابي. يُرجى زيادة قيمة الطلب أو استخدام وسيلة دفع أخرى.',
  },
} as const

export function tabbyMessage(
  key: keyof typeof TABBY_MSG,
  language: string,
): string {
  const row = TABBY_MSG[key]
  return language === 'ar' ? row.ar : row.en
}

export function tabbyRejectionMessage(
  reason: string | undefined,
  language: string,
): string {
  const code = (reason || '').toLowerCase()
  if (code.includes('too_high') || code === 'order_amount_too_high') {
    return tabbyMessage('amountTooHigh', language)
  }
  if (code.includes('too_low') || code === 'order_amount_too_low') {
    return tabbyMessage('amountTooLow', language)
  }
  return tabbyMessage('generalReject', language)
}
