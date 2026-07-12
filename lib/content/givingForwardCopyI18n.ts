import type { AppLocale } from '@/lib/i18n/routing'
import { commerceUi } from '@/lib/i18n/commerceUi'

export type GivingForwardCopy = {
  breadcrumbHome: string
  breadcrumb: string
  backToHome: string
  pageTitle: string
  intro: string[]
  carriedTitle: string
  pillars: { title: string; body: string }[]
  shopCta: string
  contactCta: string
}

const EN: GivingForwardCopy = {
  breadcrumbHome: 'Home',
  breadcrumb: 'Giving Forward',
  backToHome: 'Back to Home',
  pageTitle: 'Giving Forward',
  intro: [
    'Bint Saeed emerged from a place within the heart where the desire exists to create something that leaves a mark beyond what is visible, something that continues in meaning, in impact, and in the lives it reaches.',
    "With every Bint Saeed piece, a gesture of giving continues, extending beyond what is created. Not every daughter or son grows up with a sense of belonging, support, or continuity. Some are left to find their way without the foundations others are given. For this reason, 20 AED from each piece is dedicated, inshallah, to charitable initiatives under the Mother of the Nation Endowment for Orphans, under the patronage of His Highness Sheikh Mohamed bin Zayed Al Nahyan, through the Endowments and Minors' Funds Authority, as well as to initiatives by the Emirates Red Crescent. In this way, what is carried forward is not only a story of origin, but a contribution that continues, reaching beyond the garment into the lives it is able to touch.",
  ],
  carriedTitle: 'What Is Carried Forward',
  pillars: [
    { title: 'Responsibility', body: 'We create with purpose, and only in what is truly desired.' },
    { title: 'Continuity', body: 'Where you come from remains present in how you move through the world, shaping your confidence.' },
    { title: 'Giving Forward', body: 'What is received is never held back. It is carried into the lives of others.' },
    { title: 'Belonging', body: 'To be a daughter is to belong, to a story, to a place, to something greater than yourself.' },
    {
      title: 'Dignity',
      body: 'You carry yourself with self-awareness and respect, for who you are and where you come from, allowing it to guide your present decisions.',
    },
  ],
  shopCta: 'Shop Pieces',
  contactCta: 'Contact Us',
}

const AR: GivingForwardCopy = {
  breadcrumbHome: 'الرئيسية',
  breadcrumb: 'العطاء المستمر',
  backToHome: 'العودة للرئيسية',
  pageTitle: 'العطاء المستمر',
  intro: [
    'ولدت Bint Saeed من مكان في القلب حيث يوجد الرغبة في خلق شيء يترك أثراً يتجاوز ما هو مرئي، شيء يستمر في المعنى والأثر وفي الحياة التي يصل إليها.',
    'مع كل قطعة من Bint Saeed، يستمر عطاء يمتد إلى ما وراء ما يُصنع. ليس كل ابنة أو ابن ينشأ بإحساس بالانتماء والدعم والاستمرارية. يترك البعض ليجدوا طريقهم دون الأسس التي يُمنحها الآخرون. لهذا السبب، تُخصَّص 20 درهماً من كل قطعة، إن شاء الله، لمبادرات خيرية ضمن وقف أم الإمارات لرعاية الأيتام، برعاية صاحب السمو الشيخ محمد بن زايد آل نهيان، عبر هيئة الأوقاف وإدارة أموال القُصَّر، وكذلك لمبادرات الهلال الأحمر الإماراتي. بهذه الطريقة، ما يُحمل إلى الأمام ليس قصة أصل فحسب، بل مساهمة مستمرة تتجاوز القطعة إلى الحياة التي تستطيع لمسها.',
  ],
  carriedTitle: 'ما يُحمل إلى الأمام',
  pillars: [
    { title: 'المسؤولية', body: 'نُبدع بقصد، وفيما يُراد حقاً فقط.' },
    { title: 'الاستمرارية', body: 'من أين أتيتِ يبقى حاضراً في كيفية تحركك في العالم، ويشكّل ثقتك.' },
    { title: 'العطاء المستمر', body: 'ما يُمنح لا يُحبس أبداً. يُحمل إلى حياة الآخرين.' },
    { title: 'الانتماء', body: 'أن تكوني ابنة هو أن تنتمي — إلى قصة، ومكان، وشيء أعظم منك.' },
    {
      title: 'الكرامة',
      body: 'تحملين نفسك بوعي واحترام لمن أنتِ ومن أين أتيتِ، لتوجّهي قراراتك الحاضرة.',
    },
  ],
  shopCta: 'تسوقي القطع',
  contactCta: 'تواصلي معنا',
}

export function getGivingForwardCopy(locale: AppLocale | string): GivingForwardCopy {
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
