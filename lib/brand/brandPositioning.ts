import type { AppLocale } from '@/lib/i18n/routing'
import { BRAND_NAME, LOCALE_GEO } from '@/lib/i18n/brandProperNouns'

const G = LOCALE_GEO

/** Approved brand tagline — use in meta, Organization slogan, and JSON-LD. */
export const BRAND_TAGLINE: Record<AppLocale, string> = {
  en: `A contemporary fashion house from ${G.en.city} devoted to evolving lifestyles.`,
  ar: `دار أزياء معاصرة من ${G.ar.city} مكرّسة لأسلوب حياة يتطوّر.`,
  fr: `Une maison de mode contemporaine d’${G.fr.city} au service de modes de vie en évolution.`,
  it: `Una casa di moda contemporanea di ${G.it.city} dedicata a stili di vita in evoluzione.`,
  es: `Una casa de moda contemporánea de ${G.es.city} dedicada a estilos de vida en evolución.`,
  ru: `Современный модный дом из ${G.ru.city}, посвящённый меняющемуся образу жизни.`,
  zh: `源自${G.zh.city}的当代时装屋，致力于不断演进的生活方式。`,
  de: `Ein zeitgenössisches Modehaus aus ${G.de.city} — dem sich wandelnden Lebensstil gewidmet.`,
  nl: `Een eigentijds modehuis uit ${G.nl.city}, toegewijd aan veranderende levensstijlen.`,
  pt: `Uma casa de moda contemporânea de ${G.pt.city} dedicada a estilos de vida em evolução.`,
  id: `Rumah mode kontemporer dari ${G.id.city} yang berdedikasi pada gaya hidup yang terus berkembang.`,
  ms: `Rumah fesyen kontemporari dari ${G.ms.city} yang berdedikasi kepada gaya hidup yang sentiasa berkembang.`,
}

export const HOME_META_TITLE: Record<AppLocale, string> = {
  en: `${BRAND_NAME} | Contemporary Fashion House — ${G.en.city}`,
  ar: `${BRAND_NAME} | دار أزياء معاصرة — ${G.ar.city}`,
  fr: `${BRAND_NAME} | Maison de mode contemporaine — ${G.fr.city}`,
  it: `${BRAND_NAME} | Casa di moda contemporanea — ${G.it.city}`,
  es: `${BRAND_NAME} | Casa de moda contemporánea — ${G.es.city}`,
  ru: `${BRAND_NAME} | Современный модный дом — ${G.ru.city}`,
  zh: `${BRAND_NAME} | 当代时装屋 — ${G.zh.city}`,
  de: `${BRAND_NAME} | Zeitgenössisches Modehaus — ${G.de.city}`,
  nl: `${BRAND_NAME} | Eigentijds modehuis — ${G.nl.city}`,
  pt: `${BRAND_NAME} | Casa de moda contemporânea — ${G.pt.city}`,
  id: `${BRAND_NAME} | Rumah Mode Kontemporer — ${G.id.city}`,
  ms: `${BRAND_NAME} | Rumah Fesyen Kontemporari — ${G.ms.city}`,
}

/** Homepage meta description (SEO / Google snippet) — tagline-led, not abaya-house-led. */
export const HOME_META_DESCRIPTION: Record<AppLocale, string> = {
  en: `A contemporary fashion house from ${G.en.city} devoted to evolving lifestyles. Abayas, kaftans, dresses, jewellery and lifestyle pieces — made to order, carrying heritage forward.`,
  ar: `دار أزياء معاصرة من ${G.ar.city} مكرّسة لأسلوب حياة يتطوّر. عباءات وقفاطين وفساتين ومجوهرات وقطع أسلوب حياة — حسب الطلب، مع إحياء الإرث.`,
  fr: `Une maison de mode contemporaine d’${G.fr.city} au service de modes de vie en évolution. Abayas, caftans, robes, bijoux et pièces lifestyle — sur commande, portant l’héritage.`,
  it: `Una casa di moda contemporanea di ${G.it.city} dedicata a stili di vita in evoluzione. Abaya, kaftan, abiti, gioielli e lifestyle — su ordinazione, con eredità viva.`,
  es: `Una casa de moda contemporánea de ${G.es.city} dedicada a estilos de vida en evolución. Abayas, caftanes, vestidos, joyas y lifestyle — hecho a pedido, con herencia viva.`,
  ru: `Современный модный дом из ${G.ru.city} для меняющегося образа жизни. Абайи, кафтаны, платья, украшения и lifestyle — на заказ, с живым наследием.`,
  zh: `源自${G.zh.city}的当代时装屋，致力于不断演进的生活方式。阿巴亚、长袍、连衣裙、珠宝与生活方式单品——订制制作，传承不息。`,
  de: `Ein zeitgenössisches Modehaus aus ${G.de.city} für sich wandelnde Lebensstile. Abayas, Kaftane, Kleider, Schmuck und Lifestyle — auf Bestellung, mit lebendigem Erbe.`,
  nl: `Een eigentijds modehuis uit ${G.nl.city} voor veranderende levensstijlen. Abaya’s, kaftans, jurken, sieraden en lifestyle — op bestelling, met levend erfgoed.`,
  pt: `Uma casa de moda contemporânea de ${G.pt.city} dedicada a estilos de vida em evolução. Abayas, kaftans, vestidos, joias e lifestyle — sob encomenda, com herança viva.`,
  id: `Rumah mode kontemporer dari ${G.id.city} yang berdedikasi pada gaya hidup yang terus berkembang. Abaya, kaftan, gaun, perhiasan, dan lifestyle — dibuat sesuai pesanan, membawa warisan ke depan.`,
  ms: `Rumah fesyen kontemporari dari ${G.ms.city} yang berdedikasi kepada gaya hidup yang sentiasa berkembang. Abaya, kaftan, gaun, perhiasan, dan gaya hidup — dihasilkan mengikut pesanan, membawa warisan ke hadapan.`,
}

/** Schema `audience` — contemporary women (not modest-only framing). */
export const SCHEMA_AUDIENCE_TYPE: Record<AppLocale, string> = {
  en: `Contemporary women seeking luxury fashion, premium fashion, refined dressing and evolving lifestyles from ${G.en.city}, ${G.en.countryShort}`,
  ar: `المرأة المعاصرة الباحثة عن أزياء فاخرة وأزياء راقية وإطلالات راقية وأسلوب حياة متطوّر من ${G.ar.city}، ${G.ar.countryShort}`,
  fr: `Femmes contemporaines en quête de mode de luxe, de mode premium, d’élégance raffinée et de modes de vie évolutifs depuis ${G.fr.city} (${G.fr.countryShort})`,
  it: `Donne contemporanee in cerca di moda di lusso, moda premium, abbigliamento raffinato e stili di vita in evoluzione da ${G.it.city} (${G.it.countryShort})`,
  es: `Mujeres contemporáneas que buscan moda de lujo, moda premium, vestir refinado y estilos de vida en evolución desde ${G.es.city} (${G.es.countryShort})`,
  ru: `Современные женщины, ищущие люксовую моду, премиальную моду, изысканный стиль и меняющийся образ жизни из ${G.ru.city} (${G.ru.countryShort})`,
  zh: `追求奢华时尚、高端时尚、精致着装与演进生活方式的当代女性（${G.zh.city}，${G.zh.countryShort}）`,
  de: `Zeitgenössische Frauen, die Luxusmode, Premiummode, raffinierte Garderobe und sich wandelnde Lebensstile aus ${G.de.city} (${G.de.countryShort}) suchen`,
  nl: `Hedendaagse vrouwen die luxemode, premiummode, verfijnde stijl en veranderende levensstijlen uit ${G.nl.city} (${G.nl.countryShort}) zoeken`,
  pt: `Mulheres contemporâneas que procuram moda de luxo, moda premium, vestir refinado e estilos de vida em evolução a partir de ${G.pt.city} (${G.pt.countryShort})`,
  id: `Wanita kontemporer yang mencari fashion mewah, fashion premium, berpakaian halus, dan gaya hidup berkembang dari ${G.id.city} (${G.id.countryShort})`,
  ms: `Wanita kontemporari yang mencari fesyen mewah, fesyen premium, berpakaian halus, dan gaya hidup berkembang dari ${G.ms.city} (${G.ms.countryShort})`,
}

/** Invisible discovery keywords — modest terms for schema/SEO only, not front-end copy. */
export const MODEST_DISCOVERY_KEYWORDS: Record<AppLocale, string[]> = {
  en: [
    'modest fashion',
    'modest wear',
    'modest clothing',
    'modest evening wear',
    'luxury modest fashion',
    'premium modest fashion',
    'contemporary premium brand',
    'luxury abaya brand',
    'modest abaya',
    'modest dress UAE',
    'GCC modest fashion',
    `modest fashion ${G.en.city}`,
  ],
  ar: [
    'موضة محتشمة',
    'أزياء محتشمة',
    'ملابس محتشمة',
    'عباية محتشمة فاخرة',
    `موضة محتشمة ${G.ar.city}`,
    'موضة محتشمة الإمارات',
  ],
  fr: [
    'mode modeste',
    'vêtements modestes',
    'mode modeste de luxe',
    'abaya modeste',
    `mode modeste ${G.fr.city}`,
  ],
  it: [
    'moda modesta',
    'abbigliamento modesto',
    'moda modesta di lusso',
    'abaya modesta',
    `moda modesta ${G.it.city}`,
  ],
  es: [
    'moda modesta',
    'ropa modesta',
    'moda modesta de lujo',
    'abaya modesta',
    `moda modesta ${G.es.city}`,
  ],
  ru: [
    'скромная мода',
    'скромная одежда',
    'люксовая скромная мода',
    'скромная абайа',
    `скромная мода ${G.ru.city}`,
  ],
  zh: ['端庄时尚', '奢华端庄服饰', `${G.zh.city}端庄时尚`],
  de: [
    'bescheidene Mode',
    'Modest Fashion',
    'Luxus Modest Wear',
    'bescheidene Abaya',
    `Modest Fashion ${G.de.city}`,
  ],
  nl: [
    'bescheiden mode',
    'modest fashion',
    'luxe bescheiden mode',
    'bescheiden abaya',
    `modest fashion ${G.nl.city}`,
  ],
  pt: [
    'moda modesta',
    'roupa modesta',
    'moda modesta de luxo',
    'abaya modesta',
    `moda modesta ${G.pt.city}`,
  ],
  id: [
    'fashion modest',
    'pakaian modest',
    'busana modest',
    'abaya modest',
    'fashion modest mewah',
    `fashion modest ${G.id.city}`,
    'fashion modest UEA',
  ],
  ms: [
    'fesyen sopan',
    'pakaian sopan',
    'busana sopan',
    'abaya sopan',
    'fesyen sopan mewah',
    `fesyen sopan ${G.ms.city}`,
    'fesyen sopan UAE',
  ],
}

export function getBrandTagline(locale: AppLocale = 'en'): string {
  return BRAND_TAGLINE[locale]
}

export function getSchemaAudienceType(locale: AppLocale = 'en'): string {
  return SCHEMA_AUDIENCE_TYPE[locale]
}
