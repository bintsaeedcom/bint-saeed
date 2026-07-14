import type { AppLocale } from '@/lib/i18n/routing'
import { withBrandAlt } from '@/lib/products/imageAlt'

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

const EN_BASE: Omit<SizeGuideCopy, 'imageAlt'> = {
  intro:
    'This size chart provides general sizing information, which can vary depending on style. For more specific sizing information, please contact our concierge team.',
  bodyMeasurementsInch: 'Body Measurements - Inch',
  bodyMeasurementsCm: 'Body Measurements - CM',
  ukSize: 'UK Size',
  internationalConversions: 'International Conversions',
  size: 'Size',
  howToMeasure: 'How To Measure',
  rowLabels: { bust: 'Bust', waist: 'Waist', hips: 'Hips' },
  measureItems: [
    { id: '1', title: 'Sleeve', copy: 'Top shoulder point down to the wrist.' },
    { id: '2', title: 'Bust', copy: 'Maximum circumference on the chest on the highest point.' },
    { id: '3', title: 'Under Bust', copy: 'Body circumference directly under the bust.' },
    { id: '4', title: 'Waist', copy: 'Circumference of the waistline at the smallest point.' },
    { id: '5', title: 'Hips', copy: 'Circumference around the hip level where the hip is the widest.' },
    { id: '6', title: 'Leg', copy: 'Outside leg length from waist to the floor.' },
    { id: '7', title: 'Full Length', copy: 'Top shoulder point to the floor.' },
  ],
}

const AR_BASE: Omit<SizeGuideCopy, 'imageAlt'> = {
  intro:
    'يوفر هذا الجدول معلومات عامة عن المقاسات، وقد تختلف حسب القصة. لمزيد من التفاصيل، يرجى التواصل مع فريق الكونسيرج.',
  bodyMeasurementsInch: 'قياسات الجسم — بوصة',
  bodyMeasurementsCm: 'قياسات الجسم — سم',
  ukSize: 'مقاس المملكة المتحدة',
  internationalConversions: 'التحويلات الدولية',
  size: 'المقاس',
  howToMeasure: 'كيفية القياس',
  rowLabels: { bust: 'الصدر', waist: 'الخصر', hips: 'الأرداف' },
  measureItems: [
    { id: '1', title: 'الكم', copy: 'من أعلى نقطة في الكتف إلى المعصم.' },
    { id: '2', title: 'الصدر', copy: 'أقصى محيط على أعلى نقطة في الصدر.' },
    { id: '3', title: 'تحت الصدر', copy: 'محيط الجسم مباشرة تحت الصدر.' },
    { id: '4', title: 'الخصر', copy: 'محيط خط الخصر عند أصغر نقطة.' },
    { id: '5', title: 'الأرداف', copy: 'المحيط حول مستوى الورك حيث يكون الورك في أعرض نقطة.' },
    { id: '6', title: 'الساق', copy: 'طول الساق الخارجي من الخصر إلى الأرض.' },
    { id: '7', title: 'الطول الكامل', copy: 'من أعلى نقطة في الكتف إلى الأرض.' },
  ],
}

export function getSizeGuideCopy(locale: AppLocale | string): SizeGuideCopy {
  if (locale === 'ar') {
    return {
      ...AR_BASE,
      imageAlt: withBrandAlt(
        'كيفية القياس — دليل شكل الجسم لقياسات العباءة',
        'ar',
      ),
    }
  }
  return {
    ...EN_BASE,
    imageAlt: withBrandAlt(
      'How to measure body figure guide for abaya sizing',
      'en',
    ),
  }
}
