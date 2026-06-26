import type { AppLocale } from '@/lib/i18n/routing'
import { buildAbayaSchemaAudience } from '@/lib/products/abayaSchemaPackResolve'
import { getDressSchemaAudience } from '@/lib/products/categorySchemaAudience'
import {
  getLocalizedSecondaryCatalogSchemaFacts,
  getLocalizedSecondaryCatalogSchemaFaq,
  HAMPSTEAD_SLUG,
  MARYLEBONE_SLUG,
  PARK_LANE_SLUG,
  SOHO_SLUG,
} from '@/lib/products/secondaryCatalogSchemaLocalePacks'
import { getLocalizedSecondaryCatalogExclusiveKeywords } from '@/lib/products/secondaryCatalogSchemaKeywordsI18n'

export {
  HAMPSTEAD_SLUG,
  MARYLEBONE_SLUG,
  PARK_LANE_SLUG,
  SOHO_SLUG,
} from '@/lib/products/secondaryCatalogSchemaLocalePacks'

export {
  HYDE_PARK_SET_SLUG as HYDE_PARK_SLUG,
  getHydeParkSetSchemaAudience,
  isHydeParkSetSlug,
} from '@/lib/products/hydeParkSetSchemaI18n'

const MARYLEBONE_AUDIENCE_EXT: Record<AppLocale, string> = {
  en: ', open-front abayas, layering abayas, wide-sleeve abayas, outerwear abayas, abayas to layer over dresses, travel wardrobes, and women pairing with the Covent Garden Long Dress',
  ar: ', عبايات مفتوحة، عبايات للطبقات، عبايات أكمام واسعة، عبايات خارجية، والتنسيق فوق الفساتين',
  fr: ', abayas ouvertes, abayas à superposer, abayas manches larges, outerwear, et superposition sur robes',
  it: ', abaya aperte, abaya layering, abaya maniche ampie, outerwear, e layering su abiti',
  es: ', abayas abiertas, abayas para capas, abayas de mangas amplias, outerwear, y capas sobre vestidos',
  ru: ', абайи с открытым передом, абайи для наслоения, абайи с широкими рукавами, верхняя одежда, и слои над платьями',
  zh: ', 开襟长袍、叠穿长袍、宽袖长袍、外搭长袍，以及搭配连衣裙',
  de: ', offene Abayas, Layering-Abayas, Abayas mit weiten Ärmeln, Outerwear, und Layering über Kleidern',
  nl: ', open-front abaya’s, layering abaya’s, wijde mouw abaya’s, outerwear, en layering over jurken',
  pt: ', abayas abertas, abayas para camadas, abayas de mangas largas, outerwear, e camadas sobre vestidos',
  id: ', abaya terbuka, abaya layering, abaya lengan lebar, outerwear, dan layering di atas gaun',
  ms: ', abaya terbuka, abaya layering, abaya lengan lebar, outerwear, dan layering atas gaun',
}

const PARK_LANE_AUDIENCE_EXT: Record<AppLocale, string> = {
  en: ', everyday abayas, city abayas, work abayas, commuter dressing, daily modest fashion, and women seeking refined UAE everyday elegance worldwide',
  ar: ', عبايات يومية، عبايات المدينة، عبايات العمل، وأناقة يومية راقية',
  fr: ', abayas quotidiennes, abayas urbaines, abayas bureau, et élégance quotidienne raffinée',
  it: ', abaya quotidiane, abaya città, abaya lavoro, e eleganza quotidiana raffinata',
  es: ', abayas diarias, abayas ciudad, abayas trabajo, y elegancia diaria refinada',
  ru: ', повседневные абайи, городские абайи, рабочие абайи, и изысканная ежедневная элегантность',
  zh: ', 日常长袍、都市长袍、职场长袍，以及精致日常优雅',
  de: ', Alltags-Abayas, City-Abayas, Büro-Abayas, und raffinierte Alltagseleganz',
  nl: ', everyday abaya’s, city abaya’s, werk abaya’s, en verfijnde dagelijkse elegantie',
  pt: ', abayas quotidianas, abayas cidade, abayas trabalho, e elegância diária refinada',
  id: ', abaya sehari-hari, abaya kota, abaya kerja, dan keanggunan harian halus',
  ms: ', abaya harian, abaya bandar, abaya kerja, dan keanggunan harian halus',
}

const HAMPSTEAD_AUDIENCE_EXT: Record<AppLocale, string> = {
  en: ', Al Talli dresses, structured evening dresses, heritage dresses, women pairing with the Covent Garden Abaya, and buyers searching Al Talli fashion worldwide',
  ar: ', فساتين التلي، فساتين مسائية مُهيكَلة، فساتين تراثية، والتنسيق مع عباية Covent Garden',
  fr: ', robes Al Talli, robes de soirée structurées, robes patrimoniales, et association avec l’abaya Covent Garden',
  it: ', abiti Al Talli, abiti serali strutturati, abiti heritage, e abbinamento con Covent Garden Abaya',
  es: ', vestidos Al Talli, vestidos de noche estructurados, vestidos patrimoniales, y combinación con Covent Garden Abaya',
  ru: ', платья Al Talli, структурированные вечерние платья, платья наследия, и сочетание с Covent Garden Abaya',
  zh: ', Al Talli 连衣裙、结构感晚宴裙、传承连衣裙，以及搭配 Covent Garden 长袍',
  de: ', Al-Talli-Kleider, strukturierte Abendkleider, Heritage-Kleider, und Kombination mit Covent Garden Abaya',
  nl: ', Al Talli-jurken, gestructureerde avondjurken, erfgoedjurken, en combineren met Covent Garden abaya',
  pt: ', vestidos Al Talli, vestidos de noite estruturados, vestidos património, e combinar com Covent Garden Abaya',
  id: ', gaun Al Talli, gaun malam terstruktur, gaun warisan, dan padukan dengan Covent Garden Abaya',
  ms: ', gaun Al Talli, gaun malam berstruktur, gaun warisan, dan gabung dengan Covent Garden Abaya',
}

export function isMaryleboneAbayaSlug(slug: string): boolean {
  return slug.toLowerCase() === MARYLEBONE_SLUG
}

export function isParkLaneAbayaSlug(slug: string): boolean {
  return slug.toLowerCase() === PARK_LANE_SLUG
}

export function isHampsteadDressSlug(slug: string): boolean {
  return slug.toLowerCase() === HAMPSTEAD_SLUG
}

export function getMaryleboneAbayaSchemaAudience(locale: AppLocale = 'en'): string {
  return buildAbayaSchemaAudience(locale, MARYLEBONE_AUDIENCE_EXT)
}

export function getParkLaneAbayaSchemaAudience(locale: AppLocale = 'en'): string {
  return buildAbayaSchemaAudience(locale, PARK_LANE_AUDIENCE_EXT)
}

export function getHampsteadDressSchemaAudience(locale: AppLocale = 'en'): string {
  return `${getDressSchemaAudience(locale).slice(0, -1)}${HAMPSTEAD_AUDIENCE_EXT[locale] ?? HAMPSTEAD_AUDIENCE_EXT.en}.`
}

export {
  getSohoSetSchemaAudience,
  isSohoSetSlug,
} from '@/lib/products/sohoSetSchemaI18n'

export {
  getLocalizedSecondaryCatalogSchemaFacts,
  getLocalizedSecondaryCatalogSchemaFaq,
  getLocalizedSecondaryCatalogExclusiveKeywords,
}
