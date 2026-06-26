import type { AppLocale } from '@/lib/i18n/routing'

export type SizeGuideCopy = {
  intro: string
  bodyMeasurementsInch: string
  bodyMeasurementsCm: string
  ukSize: string
  internationalConversions: string
  size: string
  howToMeasure: string
  imageAlt: string
  measureItems: readonly { id: string; title: string; copy: string }[]
  rowLabels: { bust: string; waist: string; hips: string }
}

const EN: SizeGuideCopy = {
  intro:
    'This size chart provides general sizing information, which can vary depending on style. For more specific sizing information, please contact our concierge team.',
  bodyMeasurementsInch: 'Body Measurements - Inch',
  bodyMeasurementsCm: 'Body Measurements - CM',
  ukSize: 'UK Size',
  internationalConversions: 'International Conversions',
  size: 'Size',
  howToMeasure: 'How To Measure',
  imageAlt: 'Body measurement guide',
  rowLabels: { bust: 'Bust', waist: 'Waist', hips: 'Hips' },
  measureItems: [
    { id: '1', title: 'Sleeve', copy: 'Top shoulder point down to the wrist.' },
    { id: '2', title: 'Bust', copy: 'Maximum circumference on the fullest part of the chest.' },
    { id: '3', title: 'Under Bust', copy: 'Body circumference directly under the bust.' },
    { id: '4', title: 'Waist', copy: 'Circumference around your natural waistline.' },
    { id: '5', title: 'Hips', copy: 'Circumference around the fullest part of the hips.' },
    { id: '6', title: 'Leg', copy: 'Outside leg length from waist to floor.' },
    { id: '7', title: 'Full Length', copy: 'Top shoulder point to floor.' },
  ],
}

const AR: SizeGuideCopy = {
  intro:
    'يوفر هذا الجدول معلومات عامة عن المقاسات، وقد تختلف حسب القصة. لمزيد من التفاصيل، يرجى التواصل مع فريق الكونسيرج.',
  bodyMeasurementsInch: 'قياسات الجسم — بوصة',
  bodyMeasurementsCm: 'قياسات الجسم — سم',
  ukSize: 'مقاس المملكة المتحدة',
  internationalConversions: 'التحويلات الدولية',
  size: 'المقاس',
  howToMeasure: 'كيفية القياس',
  imageAlt: 'دليل قياس الجسم',
  rowLabels: { bust: 'الصدر', waist: 'الخصر', hips: 'الأرداف' },
  measureItems: [
    { id: '1', title: 'الكم', copy: 'من أعلى نقطة في الكتف إلى المعصم.' },
    { id: '2', title: 'الصدر', copy: 'أقصى محيط عند أوسع جزء من الصدر.' },
    { id: '3', title: 'تحت الصدر', copy: 'محيط الجسم مباشرة تحت الصدر.' },
    { id: '4', title: 'الخصر', copy: 'المحيط حول خط الخصر الطبيعي.' },
    { id: '5', title: 'الأرداف', copy: 'المحيط حول أوسع جزء من الأرداف.' },
    { id: '6', title: 'الساق', copy: 'طول الساق الخارجي من الخصر إلى الأرض.' },
    { id: '7', title: 'الطول الكامل', copy: 'من أعلى نقطة في الكتف إلى الأرض.' },
  ],
}

export function getSizeGuideCopy(locale: AppLocale | string): SizeGuideCopy {
  if (locale === 'ar') return AR
  return EN
}
