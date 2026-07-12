import type { AppLocale } from '@/lib/i18n/routing'
import { commerceUi } from '@/lib/i18n/commerceUi'

export type CareersCopy = {
  breadcrumbHome: string
  breadcrumb: string
  backToHome: string
  pageTitle: string
  intro: string
  contactCta: string
  aboutCta: string
}

const EN: CareersCopy = {
  breadcrumbHome: 'Home',
  breadcrumb: 'Careers',
  backToHome: 'Back to Home',
  pageTitle: 'Careers',
  intro:
    'We are building with care across design, operations, and client experience. If you are interested in future opportunities, please reach out to our team and include your role focus and portfolio.',
  contactCta: 'Contact Team',
  aboutCta: 'About The House',
}

const AR: CareersCopy = {
  breadcrumbHome: 'الرئيسية',
  breadcrumb: 'الوظائف',
  backToHome: 'العودة للرئيسية',
  pageTitle: 'الوظائف',
  intro:
    'نبني بعناية عبر التصميم والعمليات وتجربة العميل. إذا كنتِ مهتمة بفرص مستقبلية، تواصلي مع فريقنا مع ذكر مجال دورك وملف أعمالك.',
  contactCta: 'تواصلي مع الفريق',
  aboutCta: 'عن الدار',
}

export function getCareersCopy(locale: AppLocale | string): CareersCopy {
  const base = locale === 'ar' ? AR : EN
  try {
    const ui = commerceUi(locale as AppLocale)
    return {
      ...base,
      breadcrumbHome: ui.common.home,
      backToHome: ui.common.backToHome,
    }
  } catch {
    return base
  }
}
