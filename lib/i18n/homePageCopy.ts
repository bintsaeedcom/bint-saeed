import type { AppLocale } from '@/lib/i18n/routing'
import { HOME_META_DESCRIPTION_EN, HOME_META_TITLE_EN } from '@/lib/seo/publicMeta'

/**
 * Homepage hero/meta raw lines (before clipping): brand, Abu Dhabi, offering per market.
 * Arabic: formal MSA, GCC‑appropriate; no slang. Other locales: natural search phrasing, not literal keyword translation.
 */
const HOME_HERO_RAW: Record<AppLocale, string> = {
  en: HOME_META_DESCRIPTION_EN,

  ar:
    'بِنت سعيد دار عبايات فاخرة مقرّها أبوظبي، الإمارات العربية المتحدة؛ نصمّم عباءات ومجوهرات وقطع أسلوب حياة مستندة إلى الحرف الإماراتية كالتلي ونسيج الخوص، مع تشطيب راقٍ وتوصيل في الإمارات ودول الخليج ووجهات دولية مختارة.',

  fr:
    'Bint Saeed est une maison d’abayas de luxe à Abu Dhabi (EAU) : abayas, bijoux et pièces lifestyle inspirés du savoir‑faire émirati—Al Talli, Khous et confection soignée—avec livraison aux Émirats, dans le Golfe et vers plusieurs pays.',

  it:
    'Bint Saeed è una casa di abaya di lusso ad Abu Dhabi (EAU): abaya, gioielli e lifestyle ispirati al patrimonio emiratino—Al Talli, Khous e costruzione curata—con consegna negli Emirati, nel GCC e in destinazioni internazionali selezionate.',

  es:
    'Bint Saeed es una casa de abayas de lujo en Abu Dabi (EAU): abayas, joyas y piezas lifestyle inspiradas en el oficio emiratí—Al Talli, Khous y confección refinada—con envíos a los Emiratos, el Golfo y otros destinos.',

  ru:
    'Bint Saeed — дом роскошных абай в Абу‑Даби (ОАЭ): абайи, украшения и lifestyle с опорой на эмиратское наследие — Аль‑Талли, плетение Хаус и аккуратное исполнение; доставка по ОАЭ, странам GCC и на отдельные международные направления.',

  zh:
    'Bint Saeed 是总部位于阿联酋阿布扎比的奢华阿巴亚品牌，提供阿巴亚、珠宝与生活方式单品，融合阿勒塔利刺绣、赫乌斯编织等阿联酋工艺与现代剪裁；配送覆盖阿联酋、海合会及部分国际市场。',

  de:
    'Bint Saeed ist ein Luxus‑Abaya‑Haus in Abu Dhabi (VAE): Abayas, Schmuck und Lifestyle‑Pieces mit Bezug zu Emirati‑Handwerk—Al‑Talli, Khous‑Weberei und präziser Verarbeitung—Lieferung in die VAE, den GCC und ausgewählte Länder.',

  nl:
    'Bint Saeed is een luxe abayahuis in Abu Dhabi (VAE): abaya’s, sieraden en lifestyle met emiratisch vakmanschap—Al Talli, Khous‑weven en verfijnde afwerking—levering in de VAE, GCC en geselecteerde landen.',

  pt:
    'A Bint Saeed é uma casa de abayas de luxo em Abu Dhabi (EAU): abayas, joalharia e lifestyle com raízes no ofício emiradense—Al Talli, Khous e acabamento cuidado—envios para os EAU, Golfo e destinos internacionais selecionados.',
}

/** Raw hero line used for meta + JSON-LD short descriptions (before clipping). */
export function getHomeHeroDescriptionRaw(locale: AppLocale): string {
  return HOME_HERO_RAW[locale]
}

export function clipMetaDescription(s: string, max = 168): string {
  if (s.length <= max) return s
  return `${s.slice(0, max - 1).trimEnd()}…`
}

export function getHomeMetaDescription(locale: AppLocale): string {
  return clipMetaDescription(getHomeHeroDescriptionRaw(locale))
}

const HOME_DEFAULT_TITLE: Record<AppLocale, string> = {
  en: HOME_META_TITLE_EN,
  ar: 'Bint Saeed | دار عبايات فاخرة في أبوظبي',
  fr: 'Bint Saeed | Maison d’abayas de luxe à Abu Dhabi',
  it: 'Bint Saeed | Casa di abaya di lusso ad Abu Dhabi',
  es: 'Bint Saeed | Casa de abayas de lujo en Abu Dhabi',
  ru: 'Bint Saeed | Дом роскошных абай в Абу‑Даби',
  zh: 'Bint Saeed | 阿布扎比奢华阿巴亚品牌',
  de: 'Bint Saeed | Luxus‑Abaya‑Haus Abu Dhabi',
  nl: 'Bint Saeed | Luxe abayahuis Abu Dhabi',
  pt: 'Bint Saeed | Casa de abayas de luxo em Abu Dhabi',
}

export function getHomeDefaultTitle(locale: AppLocale): string {
  return HOME_DEFAULT_TITLE[locale]
}

const HOME_OG_TITLE: Record<AppLocale, string> = {
  en: 'Bint Saeed | Luxury Abaya House',
  ar: 'Bint Saeed | دار عبايات فاخرة — أبوظبي',
  fr: 'Bint Saeed | Abayas de luxe — Abu Dhabi',
  it: 'Bint Saeed | Abaya di lusso — Abu Dhabi',
  es: 'Bint Saeed | Abayas de lujo — Abu Dhabi',
  ru: 'Bint Saeed | Роскошные абайи — Абу‑Даби',
  zh: 'Bint Saeed | 奢华阿巴亚 · 阿布扎比',
  de: 'Bint Saeed | Luxus‑Abayas — Abu Dhabi',
  nl: 'Bint Saeed | Luxe abaya’s — Abu Dhabi',
  pt: 'Bint Saeed | Abayas de luxo — Abu Dhabi',
}

export function getHomeOgTitle(locale: AppLocale): string {
  return HOME_OG_TITLE[locale]
}
