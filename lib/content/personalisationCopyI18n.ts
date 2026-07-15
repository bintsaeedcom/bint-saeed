import type { AppLocale } from '@/lib/i18n/routing'
import { commerceUi } from '@/lib/i18n/commerceUi'

export type PersonalisationCopy = {
  breadcrumbHome: string
  breadcrumb: string
  backToHome: string
  heroEyebrow: string
  heroTitle: string
  heroLead: string
  heroParagraphs: string[]
  secretEyebrow: string
  secretTitle: string
  secretParagraphs: string[]
  wordsEyebrow: string
  wordsTitle: string
  wordsParagraphs: string[]
  wordsComplimentary: string
  stepsEyebrow: string
  stepsTitle: string
  steps: { numeral: string; title: string; body: string }[]
  complimentaryBanner: string
  discoverAbayasCta: string
  giftEyebrow: string
  giftTitle: string
  giftParagraphs: string[]
  giftCta: string
  closingTitle: string
  closingParagraphs: string[]
  closingEcho: string
  hiddenPocketAlt: string
  labelAlt: string
}

const EN: PersonalisationCopy = {
  breadcrumbHome: 'Home',
  breadcrumb: 'Personalisation',
  backToHome: 'Back to Home',
  heroEyebrow: 'PERSONALISATION · BINT SAEED',
  heroTitle: 'A piece you wear.\nA message you carry.',
  heroLead: 'Every Bint Saeed abaya can carry something known only to you.',
  heroParagraphs: [
    'A name. A meaningful date. A few words written for yourself, or by someone who chose the piece for you.',
    'Your message is placed on the inner Bint Saeed label and concealed beneath a small pocket within the lining.',
    'Invisible from the outside. Yours on the inside.',
  ],
  secretEyebrow: 'THE SECRET',
  secretTitle: 'Some words belong close to you.',
  secretParagraphs: [
    'There is a small pocket hidden within the lining of every Bint Saeed abaya.',
    'Beneath it sits your personalised inner label.',
    'You choose what it carries. Your name. A date you never want to forget. Words you want to return to. A message from your mother, your sister, your husband or someone who knows exactly what they wanted you to carry.',
    'From the outside, no one can see it.',
    'It is a secret between you and yourself. Or between you and the person who chose the abaya for you.',
    'This is personalisation at Bint Saeed.',
    'Not added to the outside of the piece for others to recognise. Placed within it, for the woman wearing it.',
  ],
  wordsEyebrow: 'YOUR WORDS',
  wordsTitle: 'What will yours carry?',
  wordsParagraphs: [
    'Perhaps your own name.',
    'A wedding date. The birth of a daughter. A few words from your mother. A du\'a you return to. A message from someone you love. Or a sentence written by you, for the woman you are becoming.',
    'There is no prescribed meaning.',
    'You choose the words. We place them within your abaya.',
    'Each personalised message is printed on the Bint Saeed inner label and concealed beneath the small pocket within the lining before your piece is completed.',
  ],
  wordsComplimentary: 'Personalisation is complimentary on every Bint Saeed abaya.',
  stepsEyebrow: 'HOW IT WORKS',
  stepsTitle: 'Made personal by you.',
  steps: [
    {
      numeral: '01',
      title: 'CHOOSE PERSONALISE',
      body: 'On any Bint Saeed abaya product page, select Personalise before adding your piece to your bag.',
    },
    {
      numeral: '02',
      title: 'WRITE YOUR MESSAGE',
      body: 'Enter the name, meaningful date or words you would like your inner label to carry.',
    },
    {
      numeral: '03',
      title: 'WE PLACE IT WITHIN YOUR ABAYA',
      body: 'Your message is printed on your Bint Saeed inner label and placed beneath the small pocket concealed within the lining.',
    },
    {
      numeral: '04',
      title: 'YOU CARRY IT',
      body: 'The message becomes part of your abaya. Hidden from view and carried with you each time the piece is worn.',
    },
  ],
  complimentaryBanner: 'Complimentary on every Bint Saeed abaya',
  discoverAbayasCta: 'Discover Abayas',
  giftEyebrow: 'FOR SOMEONE ELSE',
  giftTitle: 'A message she finds inside.',
  giftParagraphs: [
    'When you choose a Bint Saeed abaya for someone else, you can leave something of yourself within it.',
    'Her name. A date you share. A few words she knows could only have come from you.',
    'The message is concealed inside the lining, beneath the inner pocket, waiting within the piece you chose for her.',
    'The abaya is hers. The words inside are from you.',
  ],
  giftCta: 'Choose an Abaya for Her',
  closingTitle: 'Some things are carried differently.',
  closingParagraphs: [
    'The pieces we wear become part of our lives. They accompany birthdays, weddings, journeys, ordinary mornings and chapters we do not yet know are important while we are living them.',
    'At Bint Saeed, we believe an abaya can carry more than the memory of where it was worn.',
    'It can carry the words you chose to place within it.',
  ],
  closingEcho: 'A piece you wear.\nA message you carry.',
  hiddenPocketAlt: 'Bint Saeed Abu Dhabi personalisation hidden pocket fabric detail',
  labelAlt: 'Bint Saeed personalised inner label — Abu Dhabi',
}

/** Arabic kept in parallel with the new English section structure. */
const AR: PersonalisationCopy = {
  breadcrumbHome: 'الرئيسية',
  breadcrumb: 'التخصيص',
  backToHome: 'العودة للرئيسية',
  heroEyebrow: 'التخصيص · BINT SAEED',
  heroTitle: 'قطعة ترتدينها.\nرسالة تحملينها.',
  heroLead: 'كل عباءة من Bint Saeed يمكن أن تحمل شيئاً لا يعرفه سواك.',
  heroParagraphs: [
    'اسماً. تاريخاً ذا معنى. كلمات قليلة كتبتها لنفسك، أو كتبها من اختار القطعة لك.',
    'تُوضع رسالتك على الملصق الداخلي من Bint Saeed وتُخفى تحت جيب صغير داخل البطانة.',
    'غير مرئية من الخارج. لكِ من الداخل.',
  ],
  secretEyebrow: 'السر',
  secretTitle: 'بعض الكلمات أقرب إليك.',
  secretParagraphs: [
    'هناك جيب صغير مخفي داخل بطانة كل عباءة من Bint Saeed.',
    'تحتيه يقع ملصقك الداخلي المخصّص.',
    'أنتِ تختارين ما يحمله. اسمك. تاريخاً لا تريدين نسيانه. كلمات تعودين إليها. رسالة من أمك أو أختك أو زوجك أو من يعرف بالضبط ما أراد أن تحمله.',
    'من الخارج، لا يراه أحد.',
    'إنه سر بينك وبين نفسك. أو بينك وبين من اختار العباءة لك.',
    'هذا هو التخصيص في Bint Saeed.',
    'لا يُضاف إلى خارج القطعة ليتعرف عليه الآخرون. يُوضع في داخلها، للمرأة التي ترتديها.',
  ],
  wordsEyebrow: 'كلماتك',
  wordsTitle: 'ماذا ستحمل كلمتك؟',
  wordsParagraphs: [
    'ربما اسمك.',
    'تاريخ زفاف. ولادة ابنة. كلمات من أمك. دعاء تعودين إليه. رسالة ممن تحبين. أو جملة كتبتها لنفسك، للمرأة التي تصبحينها.',
    'ليس هناك معنى مفروض.',
    'أنتِ تختارين الكلمات. ونحن نضعها داخل عباءتك.',
    'تُطبع كل رسالة مخصّصة على الملصق الداخلي من Bint Saeed وتُخفى تحت الجيب الصغير داخل البطانة قبل إكمال قطعتك.',
  ],
  wordsComplimentary: 'التخصيص مجاني على كل عباءة من Bint Saeed.',
  stepsEyebrow: 'كيف يعمل',
  stepsTitle: 'تُصنع شخصية بكِ.',
  steps: [
    {
      numeral: '01',
      title: 'اختاري التخصيص',
      body: 'في صفحة أي عباءة من Bint Saeed، اختاري «تخصيص» قبل إضافة القطعة إلى حقيبتك.',
    },
    {
      numeral: '02',
      title: 'اكتبي رسالتك',
      body: 'أدخلي الاسم أو التاريخ ذا المعنى أو الكلمات التي تريدين أن يحملها ملصقك الداخلي.',
    },
    {
      numeral: '03',
      title: 'نضعها داخل عباءتك',
      body: 'تُطبع رسالتك على ملصقك الداخلي من Bint Saeed وتُوضع تحت الجيب الصغير المخفي داخل البطانة.',
    },
    {
      numeral: '04',
      title: 'تحملينها',
      body: 'تصبح الرسالة جزءاً من عباءتك. مخفية عن الأنظار، وتُحمل معك في كل مرة ترتدين فيها القطعة.',
    },
  ],
  complimentaryBanner: 'مجاني على كل عباءة من Bint Saeed',
  discoverAbayasCta: 'اكتشفي العباءات',
  giftEyebrow: 'لشخص آخر',
  giftTitle: 'رسالة تجدها في الداخل.',
  giftParagraphs: [
    'عندما تختارين عباءة من Bint Saeed لشخص آخر، يمكنك أن تتركي شيئاً منك داخلها.',
    'اسمها. تاريخاً تجمعكما. كلمات تعرف أنها لا يمكن أن تأتي إلا منك.',
    'تُخفى الرسالة داخل البطانة، تحت الجيب الداخلي، تنتظر داخل القطعة التي اخترتها لها.',
    'العباءة لها. والكلمات في داخلها منك.',
  ],
  giftCta: 'اختاري عباءة لها',
  closingTitle: 'بعض الأشياء تُحمل بطريقة مختلفة.',
  closingParagraphs: [
    'القطع التي نرتديها تصبح جزءاً من حياتنا. ترافق أعياد الميلاد والأعراس والرحلات والأحياء العادية وفصولاً لا نعرف بعد أنها مهمة ونحن نعيشها.',
    'في Bint Saeed، نؤمن أن العباءة يمكن أن تحمل أكثر من ذكرى المكان الذي ارتُديت فيه.',
    'يمكنها أن تحمل الكلمات التي اخترتِ وضعها في داخلها.',
  ],
  closingEcho: 'قطعة ترتدينها.\nرسالة تحملينها.',
  hiddenPocketAlt: 'تفصيلة جيب التخصيص المخفي — Bint Saeed أبوظبي',
  labelAlt: 'ملصق Bint Saeed الداخلي المخصّص — أبوظبي',
}

export function getPersonalisationCopy(locale: AppLocale | string): PersonalisationCopy {
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
