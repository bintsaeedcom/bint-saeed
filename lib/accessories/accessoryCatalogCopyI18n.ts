import type { Accessory } from '@/data/accessories'
import type { AppLocale } from '@/lib/i18n/routing'
import { getEarringLocalizedDisplayName } from '@/lib/accessories/earringPdpMetaI18n'
import {
  getNecklaceLocalizedDisplayName,
  isNecklacePdpId,
} from '@/lib/accessories/necklacePdpMetaI18n'
import { getPhoneCharmLocalizedDisplayName } from '@/lib/accessories/phoneCharmPdpMetaI18n'
import { getBagCharmLocalizedDisplayName } from '@/lib/accessories/bagCharmPdpMetaI18n'
import {
  STONE_VARIANTS_I18N,
  type StoneVariantId,
} from '@/lib/accessories/strandPdp/stoneVariantsI18n'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'

type AccessoryCatalogCopy = {
  name: string
  description: string
  materials: string
}

const FR_ACCESSORY_CATALOG: Record<string, AccessoryCatalogCopy> = {
  'al-ain-oasis-necklace-malachite': {
    name: 'Collier Al Ain Oasis — Malachite',
    description:
      'Collier en malachite naturelle enfilé à la main, rehaussé de perles d’hématite plaquées or et terminé par la rosette d’Al Ain signature.',
    materials: 'Perles de malachite naturelle, fermoir plaqué or 18 carats',
  },
  'al-ain-oasis-necklace-rose-quartz': {
    name: 'Collier Al Ain Oasis — Quartz rose',
    description:
      'Perles de quartz rose naturel enfilées à la main pour une ligne lumineuse et romantique avec notre fermoir signature.',
    materials: 'Perles de quartz rose naturel, fermoir plaqué or 18 carats',
  },
  'al-ain-oasis-necklace-lapis-lazuli': {
    name: 'Collier Al Ain Oasis — Lapis lazuli',
    description:
      'Collier en perles de lapis lazuli aux tons bleu royal profonds, terminé par un fermoir signature élégant.',
    materials: 'Perles de lapis lazuli naturel, fermoir plaqué or 18 carats',
  },
  'al-ain-oasis-necklace-sunstone': {
    name: 'Collier Al Ain Oasis — Pierre de soleil',
    description:
      'Collier en perles de pierre de soleil aux tons pêche-orange lumineux et fermoir signature raffiné.',
    materials: 'Perles de pierre de soleil naturelle, fermoir plaqué or 18 carats',
  },
  'al-ain-oasis-necklace-tiger-eye': {
    name: 'Collier Al Ain Oasis — Œil de tigre',
    description:
      'Collier en perles d’œil de tigre aux reflets dorés chaleureux et fermoir signature raffiné.',
    materials: 'Perles d’œil de tigre naturel, fermoir plaqué or 18 carats',
  },
  'al-ain-oasis-necklace-onyx': {
    name: 'Collier Al Ain Oasis — Onyx',
    description:
      'Perles d’onyx noir poli avec une sous-tonalité brune chaleureuse et fermoir signature raffiné.',
    materials: 'Perles d’onyx noir naturel, fermoir plaqué or 18 carats',
  },
  'al-ain-oasis-earrings-malachite': {
    name: 'Boucles d’oreilles Al Ain Oasis — Malachite',
    description:
      'La touche finale qui rassemble le tout. Boucles d’oreilles en malachite et pierre de soleil assemblées à la main avec rosette d’Al Ain en cornaline, hématite plaquée or et zirconia brillante.',
    materials:
      'Malachite naturelle, pierre de soleil, rosette d’Al Ain en cornaline, hématite plaquée or 18 carats, zirconia dans du cuivre sans nickel plaqué or 14 carats',
  },
  'al-quaa-earrings-rose-quartz': {
    name: 'Boucles d’oreilles Al Quaa — Quartz rose',
    description:
      'La touche finale qui rassemble le tout. Boucles d’oreilles en quartz rose assemblées à la main avec rosette d’Al Ain en cornaline, hématite plaquée or et clou en zirconia rose taille poire.',
    materials:
      'Quartz rose naturel, rosette d’Al Ain en cornaline, hématite plaquée or 18 carats, clou en zirconia rose taille poire dans du laiton plaqué or 18 carats',
  },
  'al-ain-oasis-earrings-orange-jade': {
    name: 'Boucles d’oreilles Al Ain Oasis — Jade orange',
    description:
      'La touche finale qui rassemble le tout. Boucles d’oreilles en jade orange et pierre de soleil assemblées à la main avec rosette d’Al Ain en cornaline, hématite plaquée or et zirconia brillante.',
    materials:
      'Jade orange naturel, pierre de soleil, rosette d’Al Ain en cornaline, hématite plaquée or 18 carats, zirconia dans du cuivre sans nickel plaqué or 14 carats',
  },
  'al-quaa-earrings-lapis-lazuli': {
    name: 'Boucles d’oreilles Al Quaa — Lapis lazuli',
    description:
      'La touche finale qui rassemble le tout. Boucles d’oreilles en lapis lazuli assemblées à la main avec rosette d’Al Ain en cornaline, hématite plaquée or et clou en zirconia transparente taille poire.',
    materials:
      'Lapis lazuli naturel, rosette d’Al Ain en cornaline, hématite plaquée or 18 carats, clou en zirconia transparente taille poire dans du laiton plaqué or 18 carats',
  },
  'bracelet-pearl-chain': {
    name: 'Bracelet chaîne perles',
    description:
      'Bracelet chaîne délicat orné de perles d’eau douce. Taille sur mesure pour un ajustement parfait au poignet.',
    materials: 'Or plaqué 18 carats, perles d’eau douce',
  },
  'bracelet-cuff-heritage': {
    name: 'Bracelet manchette Patrimoine',
    description:
      'Manchette statement avec gravures inspirées de la broderie Al Talli. Taille ajustable.',
    materials: 'Argent sterling, vermeil or 18 carats',
  },
  'bracelet-bangle-set': {
    name: 'Lot de bracelets fins',
    description:
      'Lot de 3 bracelets fins parfaits pour se superposer. Disponibles en plusieurs tailles.',
    materials: 'Laiton plaqué or 18 carats',
  },
  'al-ain-oasis-i-bag-charm-fuchsia-jade': {
    name: 'Charm sac Al Ain Oasis I — Jade fuchsia',
    description:
      'Charm sac Al Ain Oasis I assemblé à la main en jade fuchsia naturel, conçu pour sacs à main et pochettes de soirée.',
    materials: 'Jade fuchsia naturel, rosettes d’Al Ain en cornaline sculptées à la main, hématite facettée plaquée or',
  },
  'al-ain-oasis-ii-bag-charm-fuchsia-jade': {
    name: 'Charm sac Al Ain Oasis II — Jade fuchsia',
    description:
      'Charm sac Al Ain Oasis II assemblé à la main en jade fuchsia naturel, conçu pour sacs à main et pochettes de soirée.',
    materials: 'Jade fuchsia naturel, rosettes d’Al Ain en cornaline sculptées à la main, hématite facettée plaquée or',
  },
  'signature-strand-lapis-lazuli': {
    name: 'Fils Al Ain Oasis — Lapis lazuli',
    description:
      'Lapis lazuli riche aux reflets de pyrite dorée ; un ton bijou élevé pour les abayas du soir, avec Rosettes d’Al Ain en cornaline.',
    materials: 'Lapis lazuli naturel, Rosettes d’Al Ain en cornaline, finitions plaquées or 18 carats',
  },
  'signature-strand-sunstone': {
    name: 'Fils Al Ain Oasis — Pierre de soleil',
    description:
      'Pierre de soleil lumineuse aux reflets pêche-orange, assemblée à la main avec Rosettes d’Al Ain en cornaline.',
    materials: 'Pierre de soleil naturelle, Rosettes d’Al Ain en cornaline, finitions plaquées or 18 carats',
  },
  'signature-strand-rose-quartz': {
    name: 'Fils Al Ain Oasis — Quartz rose',
    description:
      'Quartz rose doux assemblé à la main avec Rosettes d’Al Ain en cornaline pour une ligne romantique sur l’abaya.',
    materials: 'Quartz rose naturel, Rosettes d’Al Ain en cornaline, finitions plaquées or 18 carats',
  },
  'signature-strand-malachite': {
    name: 'Fils Al Ain Oasis — Malachite',
    description:
      'Malachite naturelle aux bandes vertes profondes, assemblée à la main avec Rosettes d’Al Ain en cornaline.',
    materials: 'Malachite naturelle, Rosettes d’Al Ain en cornaline, finitions plaquées or 18 carats',
  },
  'signature-strand-onyx': {
    name: 'Fils Al Ain Oasis — Onyx',
    description:
      'Onyx noir poli, assemblé à la main avec Rosettes d’Al Ain en cornaline pour une ligne nocturne sur l’abaya.',
    materials: 'Onyx naturel, Rosettes d’Al Ain en cornaline, finitions plaquées or 18 carats',
  },
  'signature-strand-tiger-eye': {
    name: 'Fils Al Ain Oasis — Œil de tigre',
    description:
      'Œil de tigre chatoyant aux tons dorés, assemblé à la main avec Rosettes d’Al Ain en cornaline.',
    materials: 'Œil de tigre naturel, Rosettes d’Al Ain en cornaline, finitions plaquées or 18 carats',
  },
  'signature-strand-fuchsia-jade': {
    name: 'Fils Al Ain Oasis — Jade fuchsia',
    description:
      'Jade fuchsia vif, assemblé à la main avec Rosettes d’Al Ain en cornaline.',
    materials: 'Jade fuchsia naturel, Rosettes d’Al Ain en cornaline, finitions plaquées or 18 carats',
  },
  'signature-strand-orange-jade': {
    name: 'Fils Al Ain Oasis — Jade orange',
    description:
      'Jade orange lumineux, assemblé à la main avec Rosettes d’Al Ain en cornaline.',
    materials: 'Jade orange naturel, Rosettes d’Al Ain en cornaline, finitions plaquées or 18 carats',
  },
  'signature-strand-blue-aventurine': {
    name: 'Fils Al Ain Oasis — Aventurine bleue',
    description:
      'Aventurine bleue douce, assemblée à la main avec Rosettes d’Al Ain en cornaline.',
    materials: 'Aventurine bleue naturelle, Rosettes d’Al Ain en cornaline, finitions plaquées or 18 carats',
  },
  'signature-strand-amethyst-hearts': {
    name: 'Fils Al Ain Oasis — Cœurs d’améthyste',
    description:
      'Cœurs d’améthyste, assemblés à la main avec Rosettes d’Al Ain en cornaline — édition limitée.',
    materials: 'Améthyste naturelle en forme de cœur, Rosettes d’Al Ain en cornaline, finitions plaquées or 18 carats',
  },
  'signature-strand-jade-hearts': {
    name: 'Fils Al Ain Oasis — Cœurs de jade',
    description:
      'Cœurs de jade, assemblés à la main avec Rosettes d’Al Ain en cornaline — édition limitée.',
    materials: 'Jade naturel en forme de cœur, Rosettes d’Al Ain en cornaline, finitions plaquées or 18 carats',
  },
  'signature-strand-jade': {
    name: 'Fils Al Ain Oasis — Jade',
    description:
      'Jade naturel, assemblé à la main avec Rosettes d’Al Ain en cornaline.',
    materials: 'Jade naturel, Rosettes d’Al Ain en cornaline, finitions plaquées or 18 carats',
  },
  'al-quaa-phone-charm-fuchsia-jade': {
    name: 'Breloque téléphone Al Quaa — Jade fuchsia',
    description:
      'Breloque téléphone assemblée à la main en jade fuchsia naturel, avec rosette d’Al Ain en cornaline.',
    materials: 'Jade fuchsia naturel, rosette d’Al Ain en cornaline, hématite facettée plaquée or',
  },
  'al-quaa-phone-charm-lapis-lazuli': {
    name: 'Breloque téléphone Al Quaa — Lapis lazuli',
    description:
      'Breloque téléphone assemblée à la main en lapis lazuli naturel, avec rosette d’Al Ain en cornaline.',
    materials: 'Lapis lazuli naturel, rosette d’Al Ain en cornaline, hématite facettée plaquée or',
  },
  'al-quaa-phone-charm-malachite': {
    name: 'Breloque téléphone Al Quaa — Malachite',
    description:
      'Breloque téléphone assemblée à la main en malachite naturelle, avec rosette d’Al Ain en cornaline.',
    materials: 'Malachite naturelle, rosette d’Al Ain en cornaline, hématite facettée plaquée or',
  },
  'al-quaa-phone-charm-onyx': {
    name: 'Breloque téléphone Al Quaa — Onyx',
    description:
      'Breloque téléphone assemblée à la main en onyx naturel, avec rosette d’Al Ain en cornaline.',
    materials: 'Onyx naturel, rosette d’Al Ain en cornaline, hématite facettée plaquée or',
  },
  'al-quaa-phone-charm-orange-jade': {
    name: 'Breloque téléphone Al Quaa — Jade orange',
    description:
      'Breloque téléphone assemblée à la main en jade orange naturel, avec rosette d’Al Ain en cornaline.',
    materials: 'Jade orange naturel, rosette d’Al Ain en cornaline, hématite facettée plaquée or',
  },
  'al-quaa-phone-charm-rose-quartz': {
    name: 'Breloque téléphone Al Quaa — Quartz rose',
    description:
      'Breloque téléphone assemblée à la main en quartz rose naturel, avec rosette d’Al Ain en cornaline.',
    materials: 'Quartz rose naturel, rosette d’Al Ain en cornaline, hématite facettée plaquée or',
  },
  'al-quaa-phone-charm-tiger-eye': {
    name: 'Breloque téléphone Al Quaa — Œil de tigre',
    description:
      'Breloque téléphone assemblée à la main en œil de tigre naturel, avec rosette d’Al Ain en cornaline.',
    materials: 'Œil de tigre naturel, rosette d’Al Ain en cornaline, hématite facettée plaquée or',
  },
}

function frCopy(id: string): AccessoryCatalogCopy | undefined {
  return FR_ACCESSORY_CATALOG[id]
}

function withoutColouredJadeQualifier(label: string): string {
  return label
    .replace(/\bColou?red\s+/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

function isStoneVariantId(id: string): id is StoneVariantId {
  return Object.prototype.hasOwnProperty.call(STONE_VARIANTS_I18N, id)
}

function strandCopy(
  id: string,
  locale: AppLocale,
): { name: string; description?: string; materials?: string } | undefined {
  const canonical = resolveAccessoryId(id)
  if (!isStoneVariantId(canonical)) return undefined
  const pack = STONE_VARIANTS_I18N[canonical][locale] ?? STONE_VARIANTS_I18N[canonical].en
  return {
    name: pack.strandLabel,
    description: pack.introP1,
    materials: `${pack.materialStone}, Al Ain Rosette, 18K gold-plated finish`,
  }
}

export function getLocalizedAccessoryDisplayName(
  accessory: Pick<Accessory, 'id' | 'name' | 'nameAr'>,
  locale: AppLocale = 'en',
): string {
  const canonical = resolveAccessoryId(accessory.id)

  const earringName = getEarringLocalizedDisplayName(canonical, locale)
  if (earringName) return withoutColouredJadeQualifier(earringName)

  if (isNecklacePdpId(canonical)) {
    return withoutColouredJadeQualifier(
      getNecklaceLocalizedDisplayName(canonical, locale) ?? accessory.name,
    )
  }

  const phoneName = getPhoneCharmLocalizedDisplayName(canonical, locale)
  if (phoneName) return withoutColouredJadeQualifier(phoneName)

  const bagName = getBagCharmLocalizedDisplayName(canonical, locale)
  if (bagName) return withoutColouredJadeQualifier(bagName)

  const strand = strandCopy(canonical, locale)
  if (strand?.name) return withoutColouredJadeQualifier(strand.name)

  if (locale === 'ar') return withoutColouredJadeQualifier(accessory.nameAr)
  if (locale === 'fr') {
    return withoutColouredJadeQualifier(frCopy(canonical)?.name ?? accessory.name)
  }
  return withoutColouredJadeQualifier(accessory.name)
}

export function getLocalizedAccessoryDescription(
  accessory: Pick<Accessory, 'id' | 'description' | 'descriptionAr'>,
  locale: AppLocale = 'en',
): string {
  const canonical = resolveAccessoryId(accessory.id)
  if (locale === 'ar') return accessory.descriptionAr
  if (locale === 'fr') return frCopy(canonical)?.description ?? accessory.description

  const strand = strandCopy(canonical, locale)
  if (strand?.description && locale !== 'en') return strand.description

  return accessory.description
}

export function getLocalizedAccessoryMaterials(
  accessory: Pick<Accessory, 'id' | 'materials' | 'materialsAr'>,
  locale: AppLocale = 'en',
): string {
  const canonical = resolveAccessoryId(accessory.id)
  if (locale === 'ar') return accessory.materialsAr
  if (locale === 'fr') return frCopy(canonical)?.materials ?? accessory.materials

  if (isStoneVariantId(canonical) && locale !== 'en') {
    const pack = STONE_VARIANTS_I18N[canonical][locale] ?? STONE_VARIANTS_I18N[canonical].en
    const finish: Record<AppLocale, string> = {
      en: 'Al Ain Rosette, 18K gold-plated finish',
      ar: 'روزيت العين، تشطيب مطلي ذهب 18 قيراط',
      fr: 'Rosette d’Al Ain, finitions plaquées or 18 carats',
      it: 'Al Ain Rosette, finiture placcate oro 18K',
      es: 'Al Ain Rosette, acabados bañados en oro 18K',
      de: 'Al Ain Rosette, 18K goldplattierte Verarbeitung',
      nl: 'Al Ain Rosette, 18K goud verguld afwerking',
      pt: 'Al Ain Rosette, acabamentos banhados a ouro 18K',
      ru: 'Al Ain Rosette, отделка с покрытием золотом 18K',
      zh: 'Al Ain Rosette，18K 镀金饰面',
      id: 'Al Ain Rosette, finishing berlapis emas 18K',
      ms: 'Al Ain Rosette, kemasan bersalut emas 18K',
    }
    return `${pack.materialStone}, ${finish[locale] ?? finish.en}`
  }

  return accessory.materials
}
