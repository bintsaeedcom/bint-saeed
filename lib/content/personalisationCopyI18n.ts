import type { AppLocale } from '@/lib/i18n/routing'

export type PersonalisationCopy = {
  breadcrumbHome: string
  breadcrumb: string
  backToHome: string
  heroTitle: string
  heroSub: string
  marquee: string
  secretEyebrow: string
  secretTitle: string
  secretBody: string
  pocketEyebrow: string
  pocketTitle: string
  pocketBody: string
  videoComingSoon: string
  messageEyebrow: string
  messageTitle: string
  messageBody: string
  stepsEyebrow: string
  stepsTitle: string
  steps: { numeral: string; title: string; body: string }[]
  complimentaryNote: string
  closingQuote: string
  shopCta: string
  strandsCta: string
  hiddenPocketAlt: string
  labelAlt: string
}

const EN: PersonalisationCopy = {
  breadcrumbHome: 'Home',
  breadcrumb: 'Personalisation',
  backToHome: 'Back to Home',
  heroTitle: 'A piece you wear. A message you carry.',
  heroSub: 'Every Bint Saeed piece includes a hidden pocket. What you place inside it is yours alone.',
  marquee: 'PERSONALISATION · BINT SAEED · ABU DHABI · HIDDEN POCKET · CRAFTED TO ORDER ·',
  secretEyebrow: 'THE SECRET',
  secretTitle: 'Some things are not meant to be shown.',
  secretBody:
    'Each Bint Saeed piece includes a discreet space within it — a small pocket, covered and hidden inside the garment. A name. A meaningful date. A few words written for yourself or for someone you love.',
  pocketEyebrow: 'THE POCKET',
  pocketTitle: 'Where it lives.',
  pocketBody: 'The pocket sits discreetly inside the garment, invisible from the outside. Only you know it is there.',
  videoComingSoon: 'Video coming soon',
  messageEyebrow: 'THE MESSAGE',
  messageTitle: 'What you place inside it.',
  messageBody:
    'A piece may carry your own name, the name of the person gifting it, or a message that marks a moment, a bond, or something you never want to forget. Because the message is hidden, it remains intimate. Not created for display, but for closeness.',
  stepsEyebrow: 'HOW IT WORKS',
  stepsTitle: 'Three steps.',
  steps: [
    {
      numeral: 'I',
      title: 'ADD YOUR MESSAGE',
      body: 'During checkout, add a name, a date, or a short private message to be placed within the garment.',
    },
    {
      numeral: 'II',
      title: 'WE PLACE IT INSIDE',
      body: 'Your message is printed on a Bint Saeed label and placed inside the hidden pocket before the piece is completed.',
    },
    {
      numeral: 'III',
      title: 'YOU CARRY IT',
      body: 'The pocket is sealed. Only you know it is there.',
    },
  ],
  complimentaryNote: 'Personalisation is complimentary on every order.',
  closingQuote: 'It turns a piece into something that belongs to you in a deeper way.',
  shopCta: 'EXPLORE THE COLLECTION',
  strandsCta: 'DISCOVER THE STRANDS',
  hiddenPocketAlt: 'Bint Saeed hidden pocket personalisation detail — Abu Dhabi',
  labelAlt: 'Bint Saeed personalised label — Abu Dhabi',
}

const AR: PersonalisationCopy = {
  breadcrumbHome: 'الرئيسية',
  breadcrumb: 'التخصيص',
  backToHome: 'العودة للرئيسية',
  heroTitle: 'قطعة ترتدينها. رسالة تحملينها.',
  heroSub: 'تتضمن كل قطعة من Bint Saeed جيباً مخفياً. ما تضعينه بداخله يخصك وحدك.',
  marquee: 'التخصيص · BINT SAEED · أبوظبي · جيب مخفي · يُصنع حسب الطلب ·',
  secretEyebrow: 'السر',
  secretTitle: 'بعض الأشياء ليست للعرض.',
  secretBody:
    'تتضمن كل قطعة من Bint Saeed مساحة خفية — جيباً صغيراً مغطى ومخفياً داخل القطعة. اسماً. تاريخاً ذا معنى. كلمات قليلة لنفسك أو لمن تحبين.',
  pocketEyebrow: 'الجيب',
  pocketTitle: 'حيث يعيش.',
  pocketBody: 'يجلس الجيب بخفة داخل القطعة، غير مرئي من الخارج. أنتِ وحدك تعرفين أنه هناك.',
  videoComingSoon: 'الفيديو قريباً',
  messageEyebrow: 'الرسالة',
  messageTitle: 'ما تضعينه بداخله.',
  messageBody:
    'قد تحمل القطعة اسمك، أو اسم من يهديها، أو رسالة تُعلّم لحظة أو رابطة أو شيئاً لا تريدين نسيانه. لأن الرسالة مخفية، تبقى حميمة. ليست للعرض، بل للقرب.',
  stepsEyebrow: 'كيف يعمل',
  stepsTitle: 'ثلاث خطوات.',
  steps: [
    {
      numeral: 'I',
      title: 'أضيفي رسالتك',
      body: 'أثناء الدفع، أضيفي اسماً أو تاريخاً أو رسالة قصيرة خاصة لوضعها داخل القطعة.',
    },
    {
      numeral: 'II',
      title: 'نضعها في الداخل',
      body: 'تُطبع رسالتك على ملصق Bint Saeed وتُوضع داخل الجيب المخفي قبل إكمال القطعة.',
    },
    {
      numeral: 'III',
      title: 'تحملينها',
      body: 'يُغلق الجيب. أنتِ وحدك تعرفين أنه هناك.',
    },
  ],
  complimentaryNote: 'التخصيص مجاني مع كل طلب.',
  closingQuote: 'يحوّل القطعة إلى شيء ينتمي إليك بعمق أكبر.',
  shopCta: 'استكشفي المجموعة',
  strandsCta: 'اكتشفي الخيوط',
  hiddenPocketAlt: 'تفصيلة الجيب المخفي للتخصيص — Bint Saeed أبوظبي',
  labelAlt: 'ملصق Bint Saeed المخصص — أبوظبي',
}

export function getPersonalisationCopy(locale: AppLocale | string): PersonalisationCopy {
  if (locale === 'ar') return AR
  return EN
}
