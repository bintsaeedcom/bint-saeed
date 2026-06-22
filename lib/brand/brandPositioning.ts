import type { AppLocale } from '@/lib/i18n/routing'
import { CITY_NAME, BRAND_NAME } from '@/lib/i18n/brandProperNouns'

/** Approved brand tagline — use in meta, Organization slogan, and JSON-LD. */
export const BRAND_TAGLINE: Record<AppLocale, string> = {
  en: 'A contemporary house from Abu Dhabi devoted to evolving lifestyles.',
  ar: `دار معاصرة من ${CITY_NAME} مكرّسة لأسلوب حياة يتطوّر.`,
  fr: `Une maison contemporaine d’${CITY_NAME} au service de modes de vie en évolution.`,
  it: `Una casa contemporanea di ${CITY_NAME} dedicata a stili di vita in evoluzione.`,
  es: `Una casa contemporánea de ${CITY_NAME} dedicada a estilos de vida en evolución.`,
  ru: `Современный дом из ${CITY_NAME}, посвящённый меняющемуся образу жизни.`,
  zh: `源自 ${CITY_NAME} 的当代品牌屋，致力于不断演进的生活方式。`,
  de: `Ein zeitgenössisches Haus aus ${CITY_NAME} — dem sich wandelnden Lebensstil gewidmet.`,
  nl: `Een eigentijds huis uit ${CITY_NAME}, toegewijd aan veranderende levensstijlen.`,
  pt: `Uma casa contemporânea de ${CITY_NAME} dedicada a estilos de vida em evolução.`,
}

export const HOME_META_TITLE: Record<AppLocale, string> = {
  en: `${BRAND_NAME} | Contemporary House — ${CITY_NAME}`,
  ar: `${BRAND_NAME} | دار معاصرة — ${CITY_NAME}`,
  fr: `${BRAND_NAME} | Maison contemporaine — ${CITY_NAME}`,
  it: `${BRAND_NAME} | Casa contemporanea — ${CITY_NAME}`,
  es: `${BRAND_NAME} | Casa contemporánea — ${CITY_NAME}`,
  ru: `${BRAND_NAME} | Современный дом — ${CITY_NAME}`,
  zh: `${BRAND_NAME} | Contemporary House — ${CITY_NAME}`,
  de: `${BRAND_NAME} | Zeitgenössisches Haus — ${CITY_NAME}`,
  nl: `${BRAND_NAME} | Eigentijds huis — ${CITY_NAME}`,
  pt: `${BRAND_NAME} | Casa contemporânea — ${CITY_NAME}`,
}

/** Homepage meta description (SEO / Google snippet) — tagline-led, not abaya-house-led. */
export const HOME_META_DESCRIPTION: Record<AppLocale, string> = {
  en: 'A contemporary house from Abu Dhabi devoted to evolving lifestyles. Abayas, kaftans, dresses, jewellery and lifestyle pieces — made to order, carrying heritage forward.',
  ar: `دار معاصرة من ${CITY_NAME} مكرّسة لأسلوب حياة يتطوّر. عباءات وقفاطين وفساتين ومجوهرات وقطع أسلوب حياة — حسب الطلب، مع إحياء الإرث.`,
  fr: `Une maison contemporaine d’${CITY_NAME} au service de modes de vie en évolution. Abayas, caftans, robes, bijoux et pièces lifestyle — sur commande, portant l’héritage.`,
  it: `Una casa contemporanea di ${CITY_NAME} dedicata a stili di vita in evoluzione. Abaya, kaftan, abiti, gioielli e lifestyle — su ordinazione, con eredità viva.`,
  es: `Una casa contemporánea de ${CITY_NAME} dedicada a estilos de vida en evolución. Abayas, caftanes, vestidos, joyas y lifestyle — hecho a pedido, con herencia viva.`,
  ru: `Современный дом из ${CITY_NAME} для меняющегося образа жизни. Абайи, кафтаны, платья, украшения и lifestyle — на заказ, с живым наследием.`,
  zh: `源自 ${CITY_NAME} 的当代品牌屋，致力于不断演进的生活方式。阿巴亚、长袍、连衣裙、珠宝与生活方式单品——订制制作，传承不息。`,
  de: `Ein zeitgenössisches Haus aus ${CITY_NAME} für sich wandelnde Lebensstile. Abayas, Kaftane, Kleider, Schmuck und Lifestyle — auf Bestellung, mit lebendigem Erbe.`,
  nl: `Een eigentijds huis uit ${CITY_NAME} voor veranderende levensstijlen. Abaya’s, kaftans, jurken, sieraden en lifestyle — op bestelling, met levend erfgoed.`,
  pt: `Uma casa contemporânea de ${CITY_NAME} dedicada a estilos de vida em evolução. Abayas, kaftans, vestidos, joias e lifestyle — sob encomenda, com herança viva.`,
}

/** Schema `audience` — contemporary women (not modest-only framing). */
export const SCHEMA_AUDIENCE_TYPE: Record<AppLocale, string> = {
  en: `Contemporary women seeking luxury fashion, refined dressing and evolving lifestyles from ${CITY_NAME}, UAE`,
  ar: `المرأة المعاصرة الباحثة عن أزياء فاخرة وإطلالات راقية وأسلوب حياة متطوّر من ${CITY_NAME}، الإمارات`,
  fr: `Femmes contemporaines en quête de mode de luxe, d’élégance raffinée et de modes de vie évolutifs depuis ${CITY_NAME} (EAU)`,
  it: `Donne contemporanee in cerca di moda di lusso, abbigliamento raffinato e stili di vita in evoluzione da ${CITY_NAME} (EAU)`,
  es: `Mujeres contemporáneas que buscan moda de lujo, vestir refinado y estilos de vida en evolución desde ${CITY_NAME} (EAU)`,
  ru: `Современные женщины, ищущие люксовую моду, изысканный стиль и меняющийся образ жизни из ${CITY_NAME} (ОАЭ)`,
  zh: `追求奢华时尚、精致着装与演进生活方式的当代女性（${CITY_NAME}, UAE）`,
  de: `Zeitgenössische Frauen, die Luxusmode, raffinierte Garderobe und sich wandelnde Lebensstile aus ${CITY_NAME} (VAE) suchen`,
  nl: `Hedendaagse vrouwen die luxemode, verfijnde stijl en veranderende levensstijlen uit ${CITY_NAME} (VAE) zoeken`,
  pt: `Mulheres contemporâneas que procuram moda de luxo, vestir refinado e estilos de vida em evolução a partir de ${CITY_NAME} (EAU)`,
}

/** Invisible discovery keywords — modest terms for schema/SEO only, not front-end copy. */
export const MODEST_DISCOVERY_KEYWORDS: Record<AppLocale, string[]> = {
  en: [
    'modest fashion',
    'modest wear',
    'modest clothing',
    'modest evening wear',
    'luxury modest fashion',
    'modest abaya',
    'modest dress UAE',
    'GCC modest fashion',
    'Abu Dhabi modest fashion',
  ],
  ar: [
    'موضة محتشمة',
    'أزياء محتشمة',
    'ملابس محتشمة',
    'عباية محتشمة فاخرة',
    'موضة محتشمة Abu Dhabi',
    'موضة محتشمة الإمارات',
  ],
  fr: [
    'mode modeste',
    'vêtements modestes',
    'mode modeste de luxe',
    'abaya modeste',
    'mode modeste Abu Dhabi',
  ],
  it: [
    'moda modesta',
    'abbigliamento modesto',
    'moda modesta di lusso',
    'abaya modesta',
    'moda modesta Abu Dhabi',
  ],
  es: [
    'moda modesta',
    'ropa modesta',
    'moda modesta de lujo',
    'abaya modesta',
    'moda modesta Abu Dhabi',
  ],
  ru: [
    'скромная мода',
    'скромная одежда',
    'люксовая скромная мода',
    'скромная абайа',
    'скромная мода Abu Dhabi',
  ],
  zh: ['端庄时尚', '奢华端庄服饰', 'Abu Dhabi modest fashion'],
  de: [
    'bescheidene Mode',
    'Modest Fashion',
    'Luxus Modest Wear',
    'bescheidene Abaya',
    'Modest Fashion Abu Dhabi',
  ],
  nl: [
    'bescheiden mode',
    'modest fashion',
    'luxe bescheiden mode',
    'bescheiden abaya',
    'modest fashion Abu Dhabi',
  ],
  pt: [
    'moda modesta',
    'roupa modesta',
    'moda modesta de luxo',
    'abaya modesta',
    'moda modesta Abu Dhabi',
  ],
}

export function getBrandTagline(locale: AppLocale = 'en'): string {
  return BRAND_TAGLINE[locale]
}

export function getSchemaAudienceType(locale: AppLocale = 'en'): string {
  return SCHEMA_AUDIENCE_TYPE[locale]
}
