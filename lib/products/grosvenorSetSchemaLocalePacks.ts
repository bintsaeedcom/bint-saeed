import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { getGrosvenorSetPdpFaq } from '@/lib/products/grosvenorSetFaqI18n'

export const GROSVENOR_SET_SLUG = 'grosvenor-set'

export const GROSVENOR_SET_MATERIAL = 'Fabric composition — to be finalized with production.'

const MADE_IN = 'Abu Dhabi, United Arab Emirates'

const FACTS_EN: ProductSchemaFacts = {
  productType:
    'Grosvenor Two-Piece Set — coordinating Champagne Cream satin shirt and fluid long skirt with Al Talli-inspired detailing, interchangeable natural-stone garment jewellery at the cuffs, and genuine Onyx strands included. Designed in Abu Dhabi, United Arab Emirates.',
  productCategory:
    'Set, Two-Piece Set, Coordinate Set, Shirt and Skirt Set, Satin Set, Al Talli Set, Garment Jewellery Set, Interchangeable Strands Set, Knotted Line Set, Heritage Set, Designer Set, Luxury Set, Evening Set, Formal Set, Modest Fashion, Contemporary Womenswear, Emirati Designer Set, UNESCO Heritage Craft Set',
  fit: 'Coordinating satin shirt; fluid long skirt with high-waisted floor-length silhouette. Model height 160 cm / 63 inches; model wears size XS.',
  closure: 'Front button closure on shirt; concealed waist closure on skirt.',
  pockets: 'No pockets — clean satin line.',
  trim:
    'Al Talli-inspired detailing through the satin skirt; gold waist trim with black-and-gold braided detail; interchangeable natural-stone garment jewellery at the shirt cuffs; genuine Onyx strands included and removable; Bint Saeed signature gold-tone Knotted Line buttons at the cuffs.',
  styling:
    'Wear the coordinating shirt and long skirt together for the complete Grosvenor look, or style each piece separately — the shirt with tailoring or denim, the skirt with fine knitwear. Onyx strands can be worn, removed, or exchanged for Colored Jade, Rose Quartz, Lapis Lazuli, Malachite and more, available separately.',
  stylingDetail:
    'Two-piece women’s set in Champagne Cream satin: coordinating shirt with interchangeable natural-stone strands at the cuffs (genuine Onyx included, removable) and fluid long skirt with Al Talli-inspired detailing. Shirt and skirt can be worn together or independently.',
  care: 'Professional dry clean only to preserve the satin, Knotted Line buttons, and delicate Al Talli-inspired detailing.',
  material: GROSVENOR_SET_MATERIAL,
  madeIn: MADE_IN,
  availableColours: 'Champagne Cream',
  suitableFor:
    'Evening wear, formal dinners, weddings, galas, Eid gatherings, embassy receptions, and international modest occasionwear across Abu Dhabi, London, Paris, Milan, Riyadh, Doha, the GCC, and destinations worldwide where Al Talli heritage craftsmanship and integrated garment jewellery matter.',
}

type LocalePack = { facts: ProductSchemaFacts; faq: ProductFaqItem[] }

function localizedFacts(locale: AppLocale): ProductSchemaFacts {
  if (locale === 'en') return FACTS_EN
  const patches: Partial<Record<AppLocale, Partial<ProductSchemaFacts>>> = {
    ar: {
      productType:
        'طقم معاصر من قميص ساتان وتنورة ماكسي Al Talli بخصر مرتفع بلون Champagne Cream، مع شريطي عقيق signature للمجوهرات، وحاشية خصر ذهبية، وأزرار Knotted Line — أناقة مسائية إماراتية من أبوظبي',
      care: 'تنظيف جاف احترافي فقط للحفاظ على الساتان وأزرار Knotted Line وتفاصيل التلي الرقيقة.',
      trim: 'تشطيب التلي Al Talli على التنورة؛ حاشية خصر ذهبية؛ أزرار Knotted Line؛ شريطا عقيق signature مرفقان.',
    },
    fr: {
      productType:
        'Set coordonné chemise satin et jupe maxi Al Talli taille haute en Champagne Cream, avec deux fils Onyx signature, galon doré et boutons Knotted Line — soirée patrimoniale émiratie conçue à Abou Dabi',
      care: 'Nettoyage à sec professionnel uniquement pour préserver le satin, les boutons Knotted Line et l’Al Talli.',
      trim: 'Finition Al Talli sur la jupe maxi ; galon doré ; boutons Knotted Line ; deux fils Onyx signature inclus.',
    },
    de: {
      productType:
        'Koordinaten-Set aus Satinhemd und hoch tailliertem Al-Talli-Maxirock in Champagne Cream mit zwei signature Onyx-Strängen — Abendmode mit emiratischem Erbe aus Abu Dhabi',
      care: 'Ausschließlich professionelle chemische Reinigung.',
      trim: 'Al-Talli-Finish am Maxirock; goldene Taillenverzierung; Knotted-Line-Knöpfe; zwei Onyx-Stränge inklusive.',
    },
    it: {
      productType:
        'Set coordinato camicia in raso e gonna maxi Al Talli a vita alta in Champagne Cream con due fili Onyx signature — abbigliamento serale emiratino da Abu Dhabi',
      care: 'Solo lavaggio a secco professionale.',
      trim: 'Finitura Al Talli sulla gonna maxi; finitura dorata in vita; bottoni Knotted Line; due fili Onyx inclusi.',
    },
    es: {
      productType:
        'Set coordinado de camisa de satén y falda maxi Al Talli de cintura alta en Champagne Cream con dos hebras de ónice signature — vestir de noche emiratí de Abu Dabi',
      care: 'Solo limpieza en seco profesional.',
      trim: 'Acabado Al Talli en la falda maxi; trim dorado en cintura; botones Knotted Line; dos hebras de ónice incluidas.',
    },
    ru: {
      productType:
        'Комплект: атласная рубашка и юбка макси Al Talli с двумя signature нитями из оникса в Champagne Cream — вечерняя эмиратская мода из Абу-Даби',
      care: 'Только профессиональная химчистка.',
      trim: 'Отделка Al Talli на юбке; золотистая талия; пуговицы Knotted Line; две нити оникса в комплекте.',
    },
    zh: {
      productType: 'Champagne Cream 缎面衬衫与 Al Talli 及地长裙套装，附两条标志性玛瑙链 — 阿布扎比阿联酋传承晚宴装',
      care: '仅限专业干洗。',
      trim: '及地长裙 Al Talli 饰 finish；金色调腰饰；Knotted Line 纽扣；附赠两条玛瑙链。',
    },
    nl: {
      productType:
        'Coördinatieset satijnen overhemd en high-waisted Al Talli maxirok in Champagne Cream met twee signature onyx strands — avondmode met Emirati erfgoed uit Abu Dhabi',
      care: 'Alleen professionele stomerij.',
      trim: 'Al Talli-afwerking op maxirok; gouden tailletrim; Knotted Line-knopen; twee onyx strands inbegrepen.',
    },
    pt: {
      productType:
        'Set coordenado camisa em cetim e saia maxi Al Talli de cintura alta em Champagne Cream com duas strands de ónix signature — vestir de noite emirati de Abu Dhabi',
      care: 'Apenas limpeza a seco profissional.',
      trim: 'Acabamento Al Talli na saia maxi; acabamento dourado na cintura; botões Knotted Line; duas strands de ónix incluídas.',
    },
    id: {
      productType:
        'Set koordinat kemeja satin dan rok maxi Al Talli pinggang tinggi Champagne Cream dengan dua strand onyx signature — evening wear emirati dari Abu Dhabi',
      care: 'Hanya dry clean profesional.',
      trim: 'Finishing Al Talli pada rok maxi; trim pinggang emas; kancing Knotted Line; dua strand onyx termasuk.',
    },
    ms: {
      productType:
        'Set koordinat kemeja satin dan skirt maxi Al Talli pinggang tinggi Champagne Cream dengan dua strand onyx signature — gaya malam emirati dari Abu Dhabi',
      care: 'Dry clean profesional sahaja.',
      trim: 'Kemasan Al Talli pada skirt maxi; trim pinggang emas; butang Knotted Line; dua strand onyx disertakan.',
    },
  }
  return { ...FACTS_EN, ...patches[locale] }
}

export const GROSVENOR_SET_SCHEMA_PACKS: Record<AppLocale, LocalePack> = {
  en: { facts: localizedFacts('en'), faq: getGrosvenorSetPdpFaq('en') },
  ar: { facts: localizedFacts('ar'), faq: getGrosvenorSetPdpFaq('ar') },
  fr: { facts: localizedFacts('fr'), faq: getGrosvenorSetPdpFaq('fr') },
  it: { facts: localizedFacts('it'), faq: getGrosvenorSetPdpFaq('it') },
  es: { facts: localizedFacts('es'), faq: getGrosvenorSetPdpFaq('es') },
  ru: { facts: localizedFacts('ru'), faq: getGrosvenorSetPdpFaq('ru') },
  zh: { facts: localizedFacts('zh'), faq: getGrosvenorSetPdpFaq('zh') },
  de: { facts: localizedFacts('de'), faq: getGrosvenorSetPdpFaq('de') },
  nl: { facts: localizedFacts('nl'), faq: getGrosvenorSetPdpFaq('nl') },
  pt: { facts: localizedFacts('pt'), faq: getGrosvenorSetPdpFaq('pt') },
  id: { facts: localizedFacts('id'), faq: getGrosvenorSetPdpFaq('id') },
  ms: { facts: localizedFacts('ms'), faq: getGrosvenorSetPdpFaq('ms') },
}

export function getLocalizedGrosvenorSetSchemaFacts(
  slug: string,
  locale: AppLocale = 'en',
): ProductSchemaFacts | null {
  if (slug.toLowerCase() !== GROSVENOR_SET_SLUG) return null
  return GROSVENOR_SET_SCHEMA_PACKS[locale]?.facts ?? GROSVENOR_SET_SCHEMA_PACKS.en.facts
}

export function getLocalizedGrosvenorSetSchemaFaq(
  slug: string,
  locale: AppLocale = 'en',
): ProductFaqItem[] {
  if (slug.toLowerCase() !== GROSVENOR_SET_SLUG) return []
  return GROSVENOR_SET_SCHEMA_PACKS[locale]?.faq ?? GROSVENOR_SET_SCHEMA_PACKS.en.faq
}
