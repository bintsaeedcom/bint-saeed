import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'

export const AL_TALLI_HERITAGE_PATH = '/heritage/al-talli'

/** UNESCO Representative List entry — UAE Al Talli (inscribed 2022). */
export const AL_TALLI_UNESCO_SAME_AS = [
  'https://ich.unesco.org/en/RL/al-talli-embroidery-tradition-01985',
  'https://www.unesco.org/en/articles/uae-al-talli-embroidery-tradition',
] as const

/** The Bint Saeed Journal — House of Artisans essay (approved source for Al Talli narrative). */
export const AL_TALLI_JOURNAL_URL =
  'https://substack.com/home/post/p-212370383' as const

export const AL_TALLI_FEATURED_PRODUCTS = [
  {
    name: 'Covent Garden Abaya',
    path: '/shop/covent-garden-abaya',
    description:
      'Contemporary A-line designer abaya with wide Al Talli woven cuffs, detachable sash, and Knotted Line shoulder epaulettes — made in Abu Dhabi.',
  },
  {
    name: 'Hampstead Dress',
    path: '/shop/hampstead-dress',
    description:
      'Designer dress with traditional Al Talli trim celebrating Emirati heritage craftsmanship — created in Abu Dhabi.',
  },
  {
    name: 'Soho Set',
    path: '/shop/soho-set',
    description:
      'Luxury set featuring Al Talli heritage detailing — contemporary Emirati design from Bint Saeed Abu Dhabi.',
  },
] as const

/** Head-term and long-tail pool for Al Talli informational + commercial intent. */
export const AL_TALLI_DISCOVERY_KEYWORDS_EN = [
  'Al Talli',
  'Al-Talli',
  'Talli',
  'التلي',
  'تطريز التلي',
  'حرفة التلي',
  'what is Al Talli',
  'Al Talli embroidery',
  'Talli embroidery',
  'Al Talli craft',
  'Al Talli UAE',
  'Al Talli United Arab Emirates',
  'Al Talli Abu Dhabi',
  'Emirati Al Talli',
  'traditional Al Talli',
  'Al Talli heritage',
  'Al Talli UNESCO',
  'UNESCO Al Talli',
  'UNESCO heritage Al Talli',
  'UNESCO Intangible Cultural Heritage Al Talli',
  'UNESCO Al Talli embroidery',
  'UAE heritage',
  'UAE cultural heritage',
  'cultural heritage of UAE',
  'cultural heritage UAE',
  'Abu Dhabi heritage',
  'Abu Dhabi cultural heritage',
  'Emirati heritage',
  'Emirati cultural heritage',
  'United Arab Emirates heritage',
  'Middle Eastern crafts',
  'Middle Eastern craft',
  'Middle East crafts',
  'Middle Eastern heritage',
  'Middle East heritage',
  'Middle Eastern cultural heritage',
  'Middle Eastern traditional crafts',
  'Arabian heritage crafts',
  'Gulf heritage crafts',
  'traditional crafts Middle East',
  'heritage crafts UAE',
  'visit Abu Dhabi',
  'visit Abu Dhabi culture',
  'things to do in Abu Dhabi',
  'Abu Dhabi culture',
  'Abu Dhabi cultural attractions',
  'Abu Dhabi crafts',
  'Abu Dhabi traditional crafts',
  'Abu Dhabi heritage tourism',
  'what to see in Abu Dhabi',
  'Abu Dhabi museums and crafts',
  'Qasr Al Hosn',
  'House of Artisans Abu Dhabi',
  'House of Artisans Qasr Al Hosn',
  'cultural experiences Abu Dhabi',
  'Emirati crafts Abu Dhabi',
  'Middle Eastern fashion',
  'Middle East fashion',
  'Middle Eastern styles',
  'Emirati fashion heritage',
  'Emirati embroidery',
  'UAE embroidery tradition',
  'metallic thread embroidery UAE',
  'gold thread embroidery Emirati',
  'House of Artisans Al Talli',
  'Qasr Al Hosn Al Talli',
  'Al Talli fashion',
  'Al Talli abaya',
  'Al Talli dress',
  'contemporary Al Talli',
  'Al Talli modest fashion',
  'Bint Saeed Al Talli',
  'Bint Saeed Abu Dhabi',
  'Bint Saeed UNESCO heritage',
] as const

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

export function alTalliHeritagePageUrl(locale: AppLocale = 'en'): string {
  return `${SITE}${localizedPath(locale, AL_TALLI_HERITAGE_PATH)}`
}

export function alTalliPrimaryImageUrl(): string {
  // Prefer the dedicated Al Talli heritage photography on this chapter.
  return `${SITE}/heritage/al-talli/bint-saeed-abu-dhabi-al-talli-kajujah-mousadah-gold-metallic-thread-craft.webp`
}

const ABOUT_DESCRIPTION: Record<AppLocale, string> = {
  en: 'Al Talli is traditional Emirati hand embroidery using fine metallic threads, recognised by UNESCO as Intangible Cultural Heritage of the United Arab Emirates (inscribed 2022). Bint Saeed reimagines Al Talli through contemporary abayas and dresses made in Abu Dhabi.',
  ar: 'التلي هو فن تطريز إماراتي تقليدي بخيوط معدنية دقيقة، معترف به من اليونسكو كتراث ثقافي غير مادي لدولة الإمارات (2022). تعيد Bint Saeed تخيّل التلي في عبايات وفساتين معاصرة من أبوظبي.',
  fr: 'Al Talli est une broderie émiratie traditionnelle aux fils métalliques, reconnue par l’UNESCO comme patrimoine culturel immatériel des Émirats arabes unis (2022). Bint Saeed réinvente Al Talli dans des abayas et robes contemporaines à Abu Dhabi.',
  it: 'Al Talli è ricamo emiratino tradizionale con fili metallici, riconosciuto dall’UNESCO come patrimonio culturale immateriale degli EAU (2022). Bint Saeed reinterpreta Al Talli in abaya e abiti contemporanei ad Abu Dhabi.',
  es: 'Al Talli es bordado emiratí tradicional con hilos metálicos, reconocido por la UNESCO como Patrimonio Cultural Inmaterial de los EAU (2022). Bint Saeed reinventa Al Talli en abayas y vestidos contemporáneos en Abu Dabi.',
  ru: 'Al Talli — традиционная эмиратская вышивка металлическими нитями, признанная ЮНЕСКО нематериальным культурным наследием ОАЭ (2022). Bint Saeed переосмысливает Al Talli в современных абайях и платьях из Абу-Даби.',
  zh: 'Al Talli 是阿联酋传统金属线手工刺绣，2022年列入联合国教科文组织非物质文化遗产名录。Bint Saeed 在阿布扎比以当代长袍与连衣裙重新诠释 Al Talli。',
  de: 'Al Talli ist traditionelle emiratische Handstickerei mit Metallfäden, von der UNESCO als immaterielles Kulturerbe der VAE anerkannt (2022). Bint Saeed interpretiert Al Talli in zeitgenössischen Abayas und Kleidern aus Abu Dhabi neu.',
  nl: 'Al Talli is traditioneel Emiratisch handborduurwerk met metallic draden, door UNESCO erkend als immaterieel cultureel erfgoed van de VAE (2022). Bint Saeed herinterpreteert Al Talli in eigentijdse abaya’s en jurken uit Abu Dhabi.',
  pt: 'Al Talli é bordado emirati tradicional com fios metálicos, reconhecido pela UNESCO como Património Cultural Imaterial dos EAU (2022). A Bint Saeed reinventa Al Talli em abayas e vestidos contemporâneos em Abu Dhabi.',
  id: 'Al Talli adalah sulaman tradisional Emirati dengan benang metalik, diakui UNESCO sebagai Warisan Budaya Takbenda UEA (2022). Bint Saeed membayangkan kembali Al Talli dalam abaya dan gaun kontemporer dari Abu Dhabi.',
  ms: 'Al Talli ialah sulaman tradisional Emirati dengan benang logam, diiktiraf UNESCO sebagai Warisan Budaya Tidak Ketara UAE (2022). Bint Saeed membayangkan semula Al Talli dalam abaya dan gaun kontemporari dari Abu Dhabi.',
}

/** Rich `about` / `DefinedTerm` node shared by heritage page and product PDP schema. */
export function buildAlTalliDefinedTermNode(locale: AppLocale = 'en'): Record<string, unknown> {
  const heritageUrl = alTalliHeritagePageUrl(locale)
  return {
    '@type': 'DefinedTerm',
    '@id': `${heritageUrl}#al-talli`,
    name: 'Al Talli',
    alternateName: ['Talli', 'Al-Talli', 'التلي', 'Al Talli embroidery', 'Talli embroidery'],
    description: ABOUT_DESCRIPTION[locale] ?? ABOUT_DESCRIPTION.en,
    url: heritageUrl,
    sameAs: [...AL_TALLI_UNESCO_SAME_AS, heritageUrl],
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'UNESCO Intangible Cultural Heritage of the United Arab Emirates',
      sameAs: 'https://ich.unesco.org/en/state/united-arab-emirates-AE',
    },
  }
}
