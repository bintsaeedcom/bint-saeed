import type { AppLocale } from '@/lib/i18n/routing'
import { commerceUi } from '@/lib/i18n/commerceUi'
import {
  PERSONALI_DE,
  PERSONALI_FR,
  PERSONALI_IT,
  PERSONALI_NL,
  PERSONALI_PT,
} from '@/lib/i18n/editorialLocales/personalisationFrItDeNlPt'
import {
  PERSONALI_ES,
  PERSONALI_ID,
  PERSONALI_MS,
  PERSONALI_RU,
  PERSONALI_ZH,
} from '@/lib/i18n/editorialLocales/personalisationEsRuZhIdMs'

export type PersonalisationCopy = {
  breadcrumbHome: string
  breadcrumb: string
  backToHome: string
  heroEyebrow: string
  heroTitle: string
  heroLead: string
  heroStoryTitle: string
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
  heroLead: 'A private message, placed inside your Bint Saeed garment and made to be carried with you.',
  heroStoryTitle: 'Something only you know is there.',
  heroParagraphs: [
    'Every Bint Saeed abaya can hold something deeply personal. Hidden inside the lining is a small pocket, invisible from the outside, created to cover a personalised inner label made especially for the woman who will wear the piece.',
    'The label may carry your name, a meaningful date or a message written for yourself. When an abaya is chosen as a gift, it can carry words from the person who chose it for you, turning their message into something you keep close each time you wear the piece.',
    'Your words are printed on the Bint Saeed inner label before the abaya is completed. The label is then placed beneath its hidden pocket inside the lining, where no one else can see it. It remains private, shared only with yourself or with the person who placed those words there for you.',
    'This is what personalisation means at Bint Saeed. A beautiful piece may become part of your wardrobe, but a personal message gives it a story that belongs to you.',
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
  wordsEyebrow: '02 · PERSONALISE YOURS',
  wordsTitle: 'What will yours carry?',
  wordsParagraphs: [
    'The words are yours to choose. Your name, a meaningful date, a message from someone you love or a sentence written for the woman you are becoming.',
    'Some women choose a reminder of where they come from. Others choose words for the life ahead of them. A mother may leave a message for her daughter. A husband may choose a date only the two of them understand. You may simply write something you want to carry with you.',
    'Your message is printed on the Bint Saeed inner label and placed beneath the small pocket inside the lining before your abaya is completed.',
  ],
  wordsComplimentary: 'You choose the words. We place them within your abaya.',
  stepsEyebrow: '03 · HOW IT WORKS',
  stepsTitle: 'Made personal by you.',
  steps: [
    {
      numeral: '01',
      title: 'ADD AT CHECKOUT',
      body: 'Choose your abaya and add it to your bag. Personalisation is added at checkout — not on the product page.',
    },
    {
      numeral: '02',
      title: 'WRITE YOUR MESSAGE',
      body: 'Enter a name, meaningful date or the words you would like your inner label to carry.',
    },
    {
      numeral: '03',
      title: 'WE PLACE IT WITHIN',
      body: 'Your message is printed on your Bint Saeed inner label and placed beneath the small pocket inside the lining before your abaya is completed.',
    },
  ],
  complimentaryBanner: 'Personalisation is complimentary on all Bint Saeed abayas.',
  discoverAbayasCta: 'Discover Abayas',
  giftEyebrow: '04 · FOR SOMEONE ELSE',
  giftTitle: 'A message she finds inside.',
  giftParagraphs: [
    'When you choose a Bint Saeed abaya for someone else, you can leave something of yourself within it. Her name, a date you share or a few words she knows could only have come from you.',
    'Your message is printed on the inner label and concealed beneath the small pocket within the lining, waiting for her inside the piece you chose. The abaya is hers. The words inside are from you.',
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
  heroLead: 'رسالة خاصة تُوضع داخل قطعتك من Bint Saeed وتُصنع لتحملها معك.',
  heroStoryTitle: 'شيء لا تعرفين بوجوده إلا أنتِ.',
  heroParagraphs: [
    'كل عباءة من Bint Saeed قادرة على أن تحمل شيئاً شخصياً بعمق. داخل البطانة جيب صغير، غير مرئي من الخارج، صُنع ليغطي ملصقاً داخلياً مخصّصاً للمرأة التي سترتدي القطعة.',
    'قد يحمل الملصق اسمك، أو تاريخاً ذا معنى، أو رسالة كتبتها لنفسك. وعندما تُختار العباءة هدية، يمكنها أن تحمل كلمات ممن اختارها لك، فتصبح رسالته شيئاً تبقيها قريبة في كل مرة ترتدين فيها القطعة.',
    'تُطبع كلماتك على الملصق الداخلي من Bint Saeed قبل إكمال العباءة. ثم يُوضع الملصق تحت جيبه المخفي داخل البطانة، حيث لا يراه أحد سواك. يبقى خصوصياً، بينك وبين نفسك، أو بينك وبين من وضع تلك الكلمات لك.',
    'هذا معنى التخصيص في Bint Saeed. قد تصبح القطعة الجميلة جزءاً من خزانتك، أما الرسالة الشخصية فتمنحها قصة تخصّك وحدك.',
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
  wordsEyebrow: '02 · خصّصي قطعتك',
  wordsTitle: 'ماذا ستحمل كلمتك؟',
  wordsParagraphs: [
    'الكلمات اختيارك. اسمك، تاريخاً ذا معنى، رسالة ممن تحبين، أو جملة كتبتها للمرأة التي تصبحينها.',
    'بعض النساء يختَرن تذكيراً بأصلهم. وأخريات يختَرن كلمات لحياة أمامهن. قد تترك أم رسالة لابنتها. وقد يختار زوج تاريخاً لا يفهمه سواهما. وقد تكتبين ببساطة شيئاً تريدين حمله معك.',
    'تُطبع رسالتك على الملصق الداخلي من Bint Saeed وتُوضع تحت الجيب الصغير داخل البطانة قبل إكمال عباءتك.',
  ],
  wordsComplimentary: 'أنتِ تختارين الكلمات. ونحن نضعها داخل عباءتك.',
  stepsEyebrow: '03 · كيف يعمل',
  stepsTitle: 'تُصنع شخصية بكِ.',
  steps: [
    {
      numeral: '01',
      title: 'أضيفيه عند الدفع',
      body: 'اختاري عباءتكِ وأضيفيها إلى حقيبتك. التخصيص يُضاف عند إتمام الطلب — وليس في صفحة المنتج.',
    },
    {
      numeral: '02',
      title: 'اكتبي رسالتك',
      body: 'أدخلي اسماً أو تاريخاً ذا معنى أو الكلمات التي تريدين أن يحملها ملصقك الداخلي.',
    },
    {
      numeral: '03',
      title: 'نضعها في داخلها',
      body: 'تُطبع رسالتك على ملصقك الداخلي من Bint Saeed وتُوضع تحت الجيب الصغير داخل البطانة قبل إكمال عباءتك.',
    },
  ],
  complimentaryBanner: 'التخصيص مجاني على كل عباءات Bint Saeed.',
  discoverAbayasCta: 'اكتشفي العباءات',
  giftEyebrow: '04 · لشخص آخر',
  giftTitle: 'رسالة تجدها في الداخل.',
  giftParagraphs: [
    'عندما تختارين عباءة من Bint Saeed لشخص آخر، يمكنك أن تتركي شيئاً منك داخلها. اسمها، أو تاريخاً تجمعكما، أو كلمات قليلة تعرف أنها لا يمكن أن تأتي إلا منك.',
    'تُطبع رسالتك على الملصق الداخلي وتُخفى تحت الجيب الصغير داخل البطانة، تنتظرها داخل القطعة التي اخترتها. العباءة لها. والكلمات في داخلها منك.',
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
  const base =
    locale === 'ar'
      ? AR
      : locale === 'fr'
        ? PERSONALI_FR
        : locale === 'it'
          ? PERSONALI_IT
          : locale === 'de'
            ? PERSONALI_DE
            : locale === 'nl'
              ? PERSONALI_NL
              : locale === 'pt'
                ? PERSONALI_PT
                : locale === 'es'
                  ? PERSONALI_ES
                  : locale === 'ru'
                    ? PERSONALI_RU
                    : locale === 'zh'
                      ? PERSONALI_ZH
                      : locale === 'id'
                        ? PERSONALI_ID
                        : locale === 'ms'
                          ? PERSONALI_MS
                          : EN
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
