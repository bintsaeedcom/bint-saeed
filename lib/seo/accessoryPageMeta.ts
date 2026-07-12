import type { Metadata } from 'next'
import type { Accessory } from '@/data/accessories'
import type { AppLocale } from '@/lib/i18n/routing'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'
import { BRAND_NAME, LOCALE_GEO } from '@/lib/i18n/brandProperNouns'
import { getStrandPdpContent } from '@/lib/accessories/strandPdp/resolveStrandPdpContent'
import { getPhoneCharmPdpContent } from '@/lib/accessories/phoneCharmPdpContent'
import {
  getPhoneCharmMetaDescription,
  getPhoneCharmMetaTitle,
} from '@/lib/accessories/phoneCharmPdpMetaI18n'
import {
  getBagCharmMetaDescription,
  getBagCharmMetaTitle,
} from '@/lib/accessories/bagCharmPdpMetaI18n'
import {
  getEarringMetaDescription,
  getEarringMetaTitle,
  getEarringLocalizedDisplayName,
} from '@/lib/accessories/earringPdpMetaI18n'
import {
  getNecklaceMetaDescription,
  getNecklaceMetaTitle,
  getNecklaceLocalizedDisplayName,
} from '@/lib/accessories/necklacePdpMetaI18n'
import { getNecklaceEarringPdpContent } from '@/lib/accessories/necklaceEarringPdpContent'
import {
  getLocalizedAccessoryDescription,
  getLocalizedAccessoryDisplayName,
  getLocalizedAccessoryMaterials,
} from '@/lib/accessories/accessoryCatalogCopyI18n'
import { isSignatureStrandCategory } from '@/lib/accessories/accessoryRouteAliases'

const G = LOCALE_GEO

const ACCESSORY_INTRO: Record<AppLocale, string> = {
  en: `${BRAND_NAME} — Emirati luxury accessories from ${G.en.madeIn}.`,
  ar: `${BRAND_NAME} — إكسسوارات فاخرة إماراتية من ${G.ar.madeIn}.`,
  fr: `${BRAND_NAME} — accessoires de luxe émiratis depuis ${G.fr.madeIn}.`,
  it: `${BRAND_NAME} — accessori di lusso emiratini da ${G.it.madeIn}.`,
  es: `${BRAND_NAME} — accesorios de lujo emiratí desde ${G.es.madeIn}.`,
  ru: `${BRAND_NAME} — люксовые аксессуары из ${G.ru.madeIn}.`,
  zh: `${BRAND_NAME} — 阿联酋${G.zh.city}奢华配饰。`,
  de: `${BRAND_NAME} — emiratische Luxus-Accessoires aus ${G.de.madeIn}.`,
  nl: `${BRAND_NAME} — Emiratische luxe accessoires uit ${G.nl.madeIn}.`,
  pt: `${BRAND_NAME} — acessórios de luxo emirati de ${G.pt.madeIn}.`,
  id: `${BRAND_NAME} — aksesori mewah Emirati dari ${G.id.madeIn}.`,
  ms: `${BRAND_NAME} — aksesori mewah Emirati dari ${G.id.madeIn}.`,
}

const STRAND_META_SUFFIX: Record<AppLocale, string> = {
  en: 'Signature Strands — abaya jewellery & garment jewellery. Ships worldwide.',
  ar: 'ستراندات التوقيع — مجوهرات العباءة والملابس. شحن عالمي.',
  fr: 'Signature Strands — bijoux d\'abaya et pour vêtements. Livraison mondiale.',
  it: 'Signature Strands — gioielli abaya e per capi. Spedizione mondiale.',
  es: 'Signature Strands — joyería abaya y para prendas. Envío mundial.',
  ru: 'Signature Strands — украшения для абайи и одежды. Доставка по всему миру.',
  zh: 'Signature Strands — 长袍与服装珠宝。全球配送。',
  de: 'Signature Strands — Abaya- & Kleidungsschmuck. Weltweiter Versand.',
  nl: 'Signature Strands — abaya- & kleding sieraden. Wereldwijde verzending.',
  pt: 'Signature Strands — joias abaya e para vestuário. Envio mundial.',
  id: 'Signature Strands — perhiasan abaya & pakaian. Pengiriman dunia.',
  ms: 'Signature Strands — barang kemas abaya & pakaian. Penghantaran dunia.',
}

function accessoryDisplayName(accessory: Accessory, locale: AppLocale): string {
  const strand = getStrandPdpContent(accessory.id, locale)
  if (strand?.headline) return strand.headline
  const phoneCharm = getPhoneCharmPdpContent(accessory.id, locale)
  if (phoneCharm?.headline) return phoneCharm.headline
  const earringName = getEarringLocalizedDisplayName(accessory.id, locale)
  if (earringName) return earringName
  const necklaceName = getNecklaceLocalizedDisplayName(accessory.id, locale)
  if (necklaceName) return necklaceName
  return getLocalizedAccessoryDisplayName(accessory, locale)
}

export function buildAccessoryPageTitle(accessory: Accessory, locale: AppLocale): string {
  const phoneTitle = getPhoneCharmMetaTitle(accessory.id, locale)
  if (phoneTitle) return phoneTitle
  const bagTitle = getBagCharmMetaTitle(accessory.id, locale)
  if (bagTitle) return bagTitle
  const earringTitle = getEarringMetaTitle(accessory.id, locale)
  if (earringTitle) return earringTitle
  const necklaceTitle = getNecklaceMetaTitle(accessory.id, locale)
  if (necklaceTitle) return necklaceTitle
  return `${accessoryDisplayName(accessory, locale)} | ${BRAND_NAME}`
}

export function buildAccessoryMetaDescription(accessory: Accessory, locale: AppLocale): string {
  const strand = getStrandPdpContent(accessory.id, locale)
  if (strand) {
    const lead = strand.introParagraphs[0] ?? ''
    const merged = [ACCESSORY_INTRO[locale], lead, STRAND_META_SUFFIX[locale]].join(' ')
    return clipMetaDescription(merged.replace(/\s+/g, ' ').trim(), 200)
  }

  const phoneCharmMeta = getPhoneCharmMetaDescription(accessory.id, locale)
  if (phoneCharmMeta) return phoneCharmMeta

  const bagCharmMeta = getBagCharmMetaDescription(accessory.id, locale)
  if (bagCharmMeta) return bagCharmMeta

  const earringMeta = getEarringMetaDescription(accessory.id, locale)
  if (earringMeta) return earringMeta

  const necklaceMeta = getNecklaceMetaDescription(accessory.id, locale)
  if (necklaceMeta) return necklaceMeta

  const phoneCharm = getPhoneCharmPdpContent(accessory.id, locale)
  if (phoneCharm) {
    const lead = phoneCharm.introParagraphs[0] ?? ''
    const merged = [ACCESSORY_INTRO[locale], lead, phoneCharm.headline].join(' ')
    return clipMetaDescription(merged.replace(/\s+/g, ' ').trim(), 200)
  }

  const necklaceEarring = getNecklaceEarringPdpContent(accessory.id, locale)
  if (necklaceEarring) {
    const lead = necklaceEarring.introParagraphs[0] ?? ''
    const merged = [ACCESSORY_INTRO[locale], lead, accessoryDisplayName(accessory, locale)].join(' ')
    return clipMetaDescription(merged.replace(/\s+/g, ' ').trim(), 200)
  }

  const description = getLocalizedAccessoryDescription(accessory, locale)
  const materials = getLocalizedAccessoryMaterials(accessory, locale)
  const categoryHint = isSignatureStrandCategory(accessory.category)
    ? STRAND_META_SUFFIX[locale]
    : ''
  const merged = [ACCESSORY_INTRO[locale], accessoryDisplayName(accessory, locale), description, materials, categoryHint]
    .filter(Boolean)
    .join(' ')
  return clipMetaDescription(merged.replace(/\s+/g, ' ').trim(), 200)
}

const NOT_FOUND: Record<AppLocale, { title: string; description: string }> = {
  en: {
    title: 'Accessory not found | Bint Saeed',
    description: 'This accessory is not available in the current Bint Saeed collection.',
  },
  ar: {
    title: 'الإكسسوار غير متوفر | Bint Saeed',
    description: 'هذا الإكسسوار غير متاح حالياً في مجموعة بِنت سعيد.',
  },
  fr: {
    title: 'Accessoire introuvable | Bint Saeed',
    description: 'Cet accessoire n’est pas disponible dans la collection actuelle Bint Saeed.',
  },
  it: {
    title: 'Accessorio non trovato | Bint Saeed',
    description: 'Questo accessorio non è disponibile nella collezione Bint Saeed attuale.',
  },
  es: {
    title: 'Accesorio no encontrado | Bint Saeed',
    description: 'Este accesorio no está disponible en la colección actual de Bint Saeed.',
  },
  ru: {
    title: 'Аксессуар не найден | Bint Saeed',
    description: 'Этот аксессуар недоступен в текущей коллекции Bint Saeed.',
  },
  zh: {
    title: '未找到配饰 | Bint Saeed',
    description: '该配饰暂不在当前 Bint Saeed 系列中。',
  },
  de: {
    title: 'Accessoire nicht gefunden | Bint Saeed',
    description: 'Dieses Accessoire ist in der aktuellen Bint Saeed‑Kollektion nicht verfügbar.',
  },
  nl: {
    title: 'Accessoire niet gevonden | Bint Saeed',
    description: 'Dit accessoire is niet beschikbaar in de huidige Bint Saeed‑collectie.',
  },
  pt: {
    title: 'Acessório não encontrado | Bint Saeed',
    description: 'Este acessório não está disponível na coleção atual da Bint Saeed.',
  },
  id: {
    title: 'Aksesori tidak ditemukan | Bint Saeed',
    description: 'Aksesori ini tidak tersedia dalam koleksi Bint Saeed saat ini.',
  },
  ms: {
    title: 'Aksesori tidak dijumpai | Bint Saeed',
    description: 'Aksesori ini tidak tersedia dalam koleksi Bint Saeed pada masa ini.',
  },
}

export function accessoryNotFoundMetadata(locale: AppLocale): Metadata {
  const m = NOT_FOUND[locale]
  return {
    title: m.title,
    description: m.description,
    robots: { index: false, follow: false },
  }
}
