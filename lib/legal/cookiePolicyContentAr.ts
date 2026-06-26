import { OFFICIAL_EMAILS } from '@/lib/brand/officialEmails'

export type CookieTableRow = {
  name: string
  purpose: string
  provider: string
  duration: string
}

export type CookiePolicyContentAr = {
  breadcrumb: string
  homeBreadcrumb: string
  heroLabel: string
  pageTitle: string
  lastUpdated: string
  intro: string
  summaryTitle: string
  summaryBody: string
  sectionList: string[]
  whatAreCookies: { title: string; body: string }
  essentialCookies: {
    title: string
    intro: string
    tableHeaders: { cookie: string; purpose: string; provider: string; retention: string }
    cookies: CookieTableRow[]
  }
  analytics: {
    title: string
    body: string
    noTrackers: string
  }
  thirdParty: {
    title: string
    items: { label: string; text: string }[]
  }
  consent: { title: string; body: string }
  withdraw: {
    title: string
    body: string
    browserInstructions: string[]
  }
  retention: { title: string; body: string }
  updates: { title: string; body: string }
  contact: {
    title: string
    body: string
    legalLabel: string
    generalLabel: string
  }
}

export const COOKIE_POLICY_AR: CookiePolicyContentAr = {
  breadcrumb: 'سياسة ملفات تعريف الارتباط',
  homeBreadcrumb: 'الرئيسية',
  heroLabel: 'قانوني',
  pageTitle: 'سياسة ملفات تعريف الارتباط',
  lastUpdated: 'آخر تحديث: مايو 2026',
  intro:
    'توضّح هذه السياسة كيف تستخدم Bint Saeed ملفات تعريف الارتباط والتقنيات المماثلة. نطلب الموافقة قبل تعيين ملفات تعريف الارتباط غير الأساسية ونوفر عناصر تحكم لإدارة التفضيلات.',
  summaryTitle: 'حول سياسة ملفات تعريف الارتباط هذه',
  summaryBody:
    'صُممت عناصر التحكم في ملفات تعريف الارتباط لدينا لتتوافق مع متطلبات UAE القانونية وتوقعات موافقة GDPR/ePrivacy للمستخدمين المعنيين، بما في ذلك المستخدمين في الاتحاد الأوروبي.',
  sectionList: [
    '1. ما هي ملفات تعريف الارتباط',
    '2. ملفات تعريف الارتباط الأساسية (نشطة دائماً)',
    '3. ملفات التحليلات والسلوك (اختيارية)',
    '4. خدمات وملفات تعريف ارتباط الطرف الثالث',
    '5. الموافقة على ملفات تعريف الارتباط وإدارة التفضيلات',
    '6. سحب الموافقة أو تغييرها',
    '7. مدة الاحتفاظ بملفات تعريف الارتباط',
    '8. تحديثات السياسة',
    '9. التواصل',
  ],
  whatAreCookies: {
    title: '1. ما هي ملفات تعريف الارتباط',
    body: 'ملفات تعريف الارتباط هي ملفات نصية صغيرة تُوضَع على جهازك عند زيارة موقع إلكتروني. تدعم الوظائف الآمنة، وتتذكر التفضيلات، وقد تساعدنا في فهم أنماط الاستخدام المجمّعة.',
  },
  essentialCookies: {
    title: '2. ملفات تعريف الارتباط الأساسية (نشطة دائماً)',
    intro:
      'هذه الملفات ضرورية لتشغيل الموقع الأساسي والأمن وإتمام الشراء وإدارة الموافقة. تُعيَّن بغض النظر عن موافقة التحليلات الاختيارية.',
    tableHeaders: {
      cookie: 'ملف تعريف الارتباط / المفتاح',
      purpose: 'الغرض',
      provider: 'المزود',
      retention: 'مدة الاحتفاظ',
    },
    cookies: [
      {
        name: 'cookieConsent',
        purpose: 'يخزّن حالة اختيارك لملفات تعريف الارتباط',
        provider: 'Bint Saeed',
        duration: 'حتى سنة واحدة',
      },
      {
        name: 'analyticsConsent',
        purpose: 'يخزّن تفضيل موافقة التحليلات',
        provider: 'Bint Saeed',
        duration: 'حتى سنة واحدة',
      },
      {
        name: 'marketingConsent',
        purpose: 'يخزّن تفضيل موافقة التسويق',
        provider: 'Bint Saeed',
        duration: 'حتى سنة واحدة',
      },
      {
        name: 'cart data (local state)',
        purpose: 'يحافظ على حالة سلة التسوق/الجلسة',
        provider: 'Bint Saeed',
        duration: 'جلسة/تخزين محلي',
      },
      {
        name: '__stripe_mid',
        purpose: 'مكافحة الاحتيال وأمن الدفع',
        provider: 'Stripe',
        duration: 'حتى سنة واحدة',
      },
      {
        name: '__stripe_sid',
        purpose: 'مكافحة احتيال جلسة الدفع',
        provider: 'Stripe',
        duration: 'حتى 30 دقيقة',
      },
    ],
  },
  analytics: {
    title: '3. ملفات التحليلات والسلوك (اختيارية)',
    body: 'تُحمَّل ملفات التحليلات والسلوك الاختيارية فقط بعد الموافقة من خلال عناصر التحكم في ملفات تعريف الارتباط. دون الموافقة، لا تعمل هذه الأدوات في وضع التتبع.',
    noTrackers: 'لا توجد أدوات تحليلات اختيارية مفعّلة حالياً في هذه البيئة.',
  },
  thirdParty: {
    title: '4. خدمات وملفات تعريف ارتباط الطرف الثالث',
    items: [
      {
        label: 'Stripe:',
        text: 'ملفات تعريف ارتباط معالجة الدفع ومكافحة الاحتيال لأمن إتمام الشراء.',
      },
      {
        label: 'مزودو التحليلات:',
        text: 'يُفعَّلون فقط عند التكوين ومنح الموافقة.',
      },
      {
        label: 'مزودو الاستضافة/البنية التحتية:',
        text: 'قد يعالجون بيانات وصفية للطلبات التقنية لموثوقية الخدمة.',
      },
    ],
  },
  consent: {
    title: '5. الموافقة على ملفات تعريف الارتباط وإدارة التفضيلات',
    body: 'عند الزيارة الأولى، يمكنك قبول جميع ملفات تعريف الارتباط أو الأساسية فقط. تُخزَّن تفضيلاتك ويمكن تغييرها لاحقاً. إذا رفضت فئات اختيارية، لا تُحمَّل أدوات التتبع غير الأساسية في وضع التتبع.',
  },
  withdraw: {
    title: '6. سحب الموافقة أو تغييرها',
    body: 'يمكنك تغيير التفضيلات بإعادة فتح عناصر التحكم في ملفات تعريف الارتباط، أو بمسح ملفات تعريف الارتباط/التخزين المحلي للموقع وإعادة زيارته. يمكنك أيضاً استخدام عناصر تحكم المتصفح لحظر ملفات تعريف الارتباط.',
    browserInstructions: [
      'Chrome: Settings → Privacy and security → Cookies',
      'Firefox: Settings → Privacy & Security → Cookies',
      'Safari: Preferences → Privacy',
      'Edge: Settings → Cookies and site permissions',
    ],
  },
  retention: {
    title: '7. مدة الاحتفاظ بملفات تعريف الارتباط',
    body: 'تختلف مدة الاحتفاظ بملفات تعريف الارتباط حسب الغرض والمزود. تُزال ملفات الجلسة عند انتهاء الجلسات، بينما قد تبقى الملفات الدائمة حتى انتهاء مدة صلاحيتها المحددة.',
  },
  updates: {
    title: '8. تحديثات السياسة',
    body: 'قد نحدّث سياسة ملفات تعريف الارتباط هذه لتعكس التغييرات القانونية أو التقنية أو التشغيلية. ستُعكس التحديثات الجوهرية في تاريخ «آخر تحديث» المنقّح، وحيث يلزم، في مطالبات موافقة مجددة.',
  },
  contact: {
    title: '9. التواصل',
    body: 'إذا كانت لديك أسئلة حول سياسة ملفات تعريف الارتباط هذه أو عناصر التحكم، تواصل مع:',
    legalLabel: 'استفسارات قانونية:',
    generalLabel: 'استفسارات عامة:',
  },
}

export { OFFICIAL_EMAILS }
