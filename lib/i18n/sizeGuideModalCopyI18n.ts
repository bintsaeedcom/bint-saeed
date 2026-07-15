import type { AppLocale } from '@/lib/i18n/routing'

/** Size guide modal chrome on PDP (not the full /size-guide page). */
type SizeGuideModalCopy = {
  title: string
  subtitle: string
  selectSizeHint: string
  measurement: string
  notesInches: string
  notesLength: string
  viewFullGuide: string
  close: string
}

const EN: SizeGuideModalCopy = {
  title: 'Size Guide',
  subtitle: 'A-Cut Abaya Measurements',
  selectSizeHint: 'Select your size to highlight:',
  measurement: 'Measurement',
  notesInches: '• All measurements are in inches',
  notesLength: '• Length per request - Add your preferred length in order notes',
  viewFullGuide: 'View Full Size Guide',
  close: 'Close',
}

const AR: SizeGuideModalCopy = {
  title: 'دليل المقاسات',
  subtitle: 'قياسات العباءة — قصة A',
  selectSizeHint: 'اختاري مقاسك لتمييزه:',
  measurement: 'القياس',
  notesInches: '• جميع القياسات بالبوصة',
  notesLength: '• الطول حسب الطلب — أضيفي طولك المفضل في ملاحظات الطلب',
  viewFullGuide: 'الدليل الكامل',
  close: 'إغلاق',
}

export function getSizeGuideModalCopy(locale: AppLocale | string): SizeGuideModalCopy {
  if (locale === 'ar') return AR
  return EN
}
