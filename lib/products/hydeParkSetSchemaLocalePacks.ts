import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { getHydeParkSetPdpFaq } from '@/lib/products/hydeParkSetFaqI18n'

export const HYDE_PARK_SET_SLUG = 'hyde-park-set'

export const HYDE_PARK_SET_MATERIAL = '80% Polyester, 20% Viscose'

const MADE_IN = 'Abu Dhabi, United Arab Emirates'

const FACTS_EN: ProductSchemaFacts = {
  productType:
    'Oversized premium crepe shirt and flowing wide-leg palazzo trouser set with signature Knotted Line buttons — understated luxury travelwear with contemporary tailoring from Abu Dhabi, in Deep Black and Navy Blue.',
  productCategory:
    'Set, Two-Piece Set, Coordinate Set, Shirt and Trouser Set, Oversized Shirt Set, Palazzo Trouser Set, Knotted Line Set, Designer Set, Luxury Set, Travel Set, Premium Travelwear, Day-to-Evening Set, Modest Fashion, Premium Modest Fashion, Contemporary Womenswear, Emirati Designer Set',
  fit: 'Relaxed oversized shirt fit with full-length flowing palazzo trousers; shirt designed to be worn loose, tucked into the waistband or tied at the waist.',
  closure: 'Front button closure on shirt; elasticated waistband with adjustable drawcord on trousers.',
  pockets:
    'Two functional chest patch pockets on shirt; two discreet hidden side seam pockets on palazzo trousers.',
  trim: 'Bint Saeed signature gold-tone Knotted Line buttons.',
  styling:
    'Created for women whose lifestyle moves between destinations and everyday life. Style with trainers for morning coffee, loafers for city days, or heels for lunch and dinner. Each piece works beautifully on its own — the oversized shirt with tailored trousers, denim or skirts; the palazzo trousers with knitwear, blouses or lightweight tops.',
  stylingDetail:
    'Oversized pointed-collar crepe shirt with short sleeves, button tab detailing, twin chest patch pockets, and Knotted Line buttons; full-length wide-leg palazzo trousers with elasticated drawcord waist and hidden side seam pockets.',
  care: 'Gently machine wash at 30°C. Wash with similar colours and allow to air dry naturally to help preserve shape and finish.',
  material: HYDE_PARK_SET_MATERIAL,
  madeIn: MADE_IN,
  availableColours: 'Deep Black, Navy Blue',
  suitableFor:
    'Premium travelwear, everyday dressing, city movement, lunches, dinners, business travel, weekend escapes, and international wardrobes across the Corniche in Abu Dhabi, Portofino, London, Rabat, Singapore, Miami, Los Angeles, Brunei, the GCC, and destinations worldwide where versatile modest dressing and understated Emirati elegance matter.',
}

type LocalePack = { facts: ProductSchemaFacts; faq: ProductFaqItem[] }

function localizedFacts(locale: AppLocale): ProductSchemaFacts {
  if (locale === 'en') return FACTS_EN
  const patches: Partial<Record<AppLocale, Partial<ProductSchemaFacts>>> = {
    ar: {
      productType:
        'طقم قميص كريب فاخر واسع وبنطال بالازو انسيابي بساق واسعة مع أزرار Knotted Line المميزة — أزياء سفر فاخرة رصينة بتفصيل معاصر من أبوظبي، حصرياً بالأسود العميق',
      material: '80% بوليستر، 20% فيسكوز',
      care: 'غسيل لطيف في الغسالة عند 30°م. اغسلي مع ألوان مماثلة وجففي في الهواء للحفاظ على الشكل واللمسة.',
      trim: 'أزرار Knotted Line الذهبية المميزة من Bint Saeed.',
      availableColours: 'أسود عميق، كحلي',
    },
    fr: {
      productType:
        'Set chemise oversize en crêpe premium et pantalon palazzo fluide avec boutons Knotted Line signature — travelwear de luxe discret et tailleur contemporain d’Abou Dabi, exclusivement en Noir profond',
      material: '80 % polyester, 20 % viscose',
      care: 'Lavage en machine délicat à 30 °C. Laver avec des couleurs similaires et sécher à l’air libre.',
      trim: 'Boutons dorés signature Knotted Line de Bint Saeed.',
      availableColours: 'Noir profond, Bleu marine',
    },
    de: {
      productType:
        'Oversize-Premium-Krepp-Hemd und fließende Palazzo-Hose mit charakteristischen Knotted-Line-Knöpfen — zurückhaltende Luxus-Reisemode mit zeitgenössischem Tailoring aus Abu Dhabi, exklusiv in Tiefschwarz',
      material: '80 % Polyester, 20 % Viskose',
      care: 'Schonend bei 30 °C in der Maschine waschen. Mit ähnlichen Farben waschen und an der Luft trocknen.',
      trim: 'Charakteristische goldfarbene Knotted-Line-Knöpfe von Bint Saeed.',
      availableColours: 'Tiefschwarz, Marineblau',
    },
    it: {
      productType:
        'Set camicia oversize in crepe premium e pantaloni palazzo fluidi con bottoni Knotted Line signature — luxury travelwear sobrio con tailoring contemporaneo da Abu Dhabi, esclusivamente in Nero profondo',
      material: '80% poliestere, 20% viscosa',
      care: 'Lavaggio in lavatrice delicato a 30 °C. Lavare con colori simili e asciugare all’aria.',
      trim: 'Bottoni dorati signature Knotted Line di Bint Saeed.',
      availableColours: 'Nero profondo, Blu navy',
    },
    es: {
      productType:
        'Set de camisa oversize en crepe premium y pantalones palazzo fluidos con botones Knotted Line signature — travelwear de lujo discreto con sastrería contemporánea de Abu Dabi, exclusivamente en Negro profundo',
      material: '80% poliéster, 20% viscosa',
      care: 'Lavado en lavadora suave a 30 °C. Lavar con colores similares y secar al aire.',
      trim: 'Botones dorados signature Knotted Line de Bint Saeed.',
      availableColours: 'Negro profundo, Azul marino',
    },
    ru: {
      productType:
        'Комплект: оверсайз рубашка из премиального крепа и струящиеся брюки palazzo с фирменными пуговицами Knotted Line — сдержанная люксовая travelwear с современным кроем из Абу-Даби, исключительно в глубоком чёрном',
      material: '80% полиэстер, 20% вискоза',
      care: 'Деликатная стирка в машине при 30 °C. Стирать с похожими цветами и сушить на воздухе.',
      trim: 'Фирменные золотистые пуговицы Knotted Line от Bint Saeed.',
      availableColours: 'Глубокий чёрный, тёмно-синий',
    },
    zh: {
      productType:
        '宽松高级绉绸衬衫与流畅阔腿palazzo长裤套装，配标志性Knotted Line纽扣——阿布扎比当代剪裁的含蓄奢华旅行装，仅提供深黑色',
      material: '80% 聚酯纤维，20% 粘胶纤维',
      care: '30°C 轻柔机洗。与同色系衣物洗涤，自然晾干。',
      trim: 'Bint Saeed 标志性金色调 Knotted Line 纽扣。',
      availableColours: '深黑色、海军蓝',
    },
    nl: {
      productType:
        'Oversized premium crêpe overhemd en vloeiende wide-leg palazzo-broek met kenmerkende Knotted Line knopen — ingetogen luxe travelwear met eigentijds tailoring uit Abu Dhabi, exclusief in Diepzwart',
      material: '80% polyester, 20% viscose',
      care: 'Voorzichtig wassen op 30 °C. Wassen met vergelijkbare kleuren en aan de lucht drogen.',
      trim: 'Kenmerkende goudkleurige Knotted Line knopen van Bint Saeed.',
      availableColours: 'Diepzwart, Marineblauw',
    },
    pt: {
      productType:
        'Set de camisa oversize em crepe premium e calças palazzo fluidas com botões Knotted Line signature — travelwear de luxo discreto com alfaiataria contemporânea de Abu Dhabi, exclusivamente em Preto profundo',
      material: '80% poliéster, 20% viscose',
      care: 'Lavar na máquina suavemente a 30 °C. Lavar com cores semelhantes e secar ao ar.',
      trim: 'Botões dourados signature Knotted Line da Bint Saeed.',
      availableColours: 'Preto profundo, Azul-marinho',
    },
    id: {
      productType:
        'Set kemeja oversize krepe premium dan celana palazzo mengalir dengan kancing Knotted Line signature — luxury travelwear understated dengan tailoring kontemporer dari Abu Dhabi, eksklusif Hitam Pekat',
      material: '80% Polyester, 20% Viscose',
      care: 'Cuci mesin lembut 30°C. Cuci dengan warna serupa dan keringkan di udara.',
      trim: 'Kancing emas signature Knotted Line Bint Saeed.',
      availableColours: 'Hitam Pekat, Biru Navy',
    },
    ms: {
      productType:
        'Set kemeja oversize krepe premium dan seluar palazzo mengalir dengan butang Knotted Line signature — luxury travelwear understated dengan jahitan kontemporari dari Abu Dhabi, eksklusif Hitam Pekat',
      material: '80% Polyester, 20% Viscose',
      care: 'Basuh mesin lembut 30°C. Basuh dengan warna serupa dan keringkan di udara.',
      trim: 'Butang emas signature Knotted Line Bint Saeed.',
      availableColours: 'Hitam Pekat, Biru Laut',
    },
  }
  return { ...FACTS_EN, ...patches[locale] }
}

export const HYDE_PARK_SET_SCHEMA_PACKS: Record<AppLocale, LocalePack> = {
  en: { facts: localizedFacts('en'), faq: getHydeParkSetPdpFaq('en') },
  ar: { facts: localizedFacts('ar'), faq: getHydeParkSetPdpFaq('ar') },
  fr: { facts: localizedFacts('fr'), faq: getHydeParkSetPdpFaq('fr') },
  it: { facts: localizedFacts('it'), faq: getHydeParkSetPdpFaq('it') },
  es: { facts: localizedFacts('es'), faq: getHydeParkSetPdpFaq('es') },
  ru: { facts: localizedFacts('ru'), faq: getHydeParkSetPdpFaq('ru') },
  zh: { facts: localizedFacts('zh'), faq: getHydeParkSetPdpFaq('zh') },
  de: { facts: localizedFacts('de'), faq: getHydeParkSetPdpFaq('de') },
  nl: { facts: localizedFacts('nl'), faq: getHydeParkSetPdpFaq('nl') },
  pt: { facts: localizedFacts('pt'), faq: getHydeParkSetPdpFaq('pt') },
  id: { facts: localizedFacts('id'), faq: getHydeParkSetPdpFaq('id') },
  ms: { facts: localizedFacts('ms'), faq: getHydeParkSetPdpFaq('ms') },
}

export function getLocalizedHydeParkSetSchemaFacts(
  slug: string,
  locale: AppLocale = 'en',
): ProductSchemaFacts | null {
  if (slug.toLowerCase() !== HYDE_PARK_SET_SLUG) return null
  return HYDE_PARK_SET_SCHEMA_PACKS[locale]?.facts ?? HYDE_PARK_SET_SCHEMA_PACKS.en.facts
}

export function getLocalizedHydeParkSetSchemaFaq(
  slug: string,
  locale: AppLocale = 'en',
): ProductFaqItem[] {
  if (slug.toLowerCase() !== HYDE_PARK_SET_SLUG) return []
  return HYDE_PARK_SET_SCHEMA_PACKS[locale]?.faq ?? HYDE_PARK_SET_SCHEMA_PACKS.en.faq
}
