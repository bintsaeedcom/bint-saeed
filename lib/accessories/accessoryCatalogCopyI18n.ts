import type { Accessory } from '@/data/accessories'
import type { AppLocale } from '@/lib/i18n/routing'

type AccessoryCatalogCopy = {
  name: string
  description: string
  materials: string
}

const FR_ACCESSORY_CATALOG: Record<string, AccessoryCatalogCopy> = {
  'al-ain-rosette-necklace-malachite': {
    name: 'Collier Al Ain Oasis — Malachite',
    description:
      'Collier en malachite naturelle enfilé à la main, rehaussé de perles d’hématite plaquées or et terminé par la rosette d’Al Ain signature.',
    materials: 'Perles de malachite naturelle, fermoir plaqué or 18 carats',
  },
  'al-ain-rosette-necklace-rose-quartz': {
    name: 'Collier Al Ain Oasis — Quartz rose',
    description:
      'Perles de quartz rose naturel enfilées à la main pour une ligne lumineuse et romantique avec notre fermoir signature.',
    materials: 'Perles de quartz rose naturel, fermoir plaqué or 18 carats',
  },
  'al-ain-rosette-necklace-lapis-lazuli': {
    name: 'Collier Al Ain Oasis — Lapis lazuli',
    description:
      'Collier en perles de lapis lazuli aux tons bleu royal profonds, terminé par un fermoir signature élégant.',
    materials: 'Perles de lapis lazuli naturel, fermoir plaqué or 18 carats',
  },
  'al-ain-rosette-necklace-sunstone': {
    name: 'Collier Al Ain Oasis — Pierre de soleil',
    description:
      'Collier en perles de pierre de soleil aux tons pêche-orange lumineux et fermoir signature raffiné.',
    materials: 'Perles de pierre de soleil naturelle, fermoir plaqué or 18 carats',
  },
  'al-ain-rosette-necklace-tiger-eye': {
    name: 'Collier Al Ain Oasis — Œil de tigre',
    description:
      'Collier en perles d’œil de tigre aux reflets dorés chaleureux et fermoir signature raffiné.',
    materials: 'Perles d’œil de tigre naturel, fermoir plaqué or 18 carats',
  },
  'al-ain-rosette-necklace-onyx': {
    name: 'Collier Al Ain Oasis — Onyx',
    description:
      'Perles d’onyx noir poli avec une sous-tonalité brune chaleureuse et fermoir signature raffiné.',
    materials: 'Perles d’onyx noir naturel, fermoir plaqué or 18 carats',
  },
  'al-ain-oasis-earrings-malachite': {
    name: 'Boucles d’oreilles Al Ain Oasis — Malachite',
    description:
      'Boucles d’oreilles en malachite assemblées à la main avec la rosette d’Al Ain signature sculptée dans du cornaline naturelle et des accents d’hématite plaqués or.',
    materials: 'Malachite naturelle, cornaline, hématite plaquée or 18 carats',
  },
  'al-ain-oasis-earrings-rose-quartz': {
    name: 'Boucles d’oreilles Al Ain Oasis — Quartz rose',
    description:
      'Boucles d’oreilles en quartz rose assemblées à la main avec la rosette d’Al Ain signature sculptée dans du cornaline naturelle et des accents d’hématite plaqués or.',
    materials: 'Quartz rose naturel, cornaline, hématite plaquée or 18 carats',
  },
  'al-ain-oasis-earrings-orange-jade': {
    name: 'Boucles d’oreilles Al Ain Oasis — Jade orange',
    description:
      'Boucles d’oreilles en jade orange assemblées à la main avec la rosette d’Al Ain signature sculptée dans du cornaline naturelle et des accents d’hématite plaqués or.',
    materials: 'Jade orange naturel, cornaline, hématite plaquée or 18 carats',
  },
  'al-quaa-earrings-lapis-lazuli': {
    name: 'Boucles d’oreilles Al Quaa — Lapis lazuli',
    description:
      'Boucles d’oreilles en lapis lazuli assemblées à la main avec la rosette d’Al Ain signature sculptée dans du cornaline naturelle et des accents d’hématite plaqués or.',
    materials: 'Lapis lazuli naturel, cornaline, hématite plaquée or 18 carats',
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
  'bag-strand-tassel': {
    name: 'Tresse soie à glands',
    description:
      'Tresse de sac à glands en soie luxueuse avec pièces métalliques plaquées or.',
    materials: 'Soie, pièces métalliques plaquées or 18 carats',
  },
  'bag-strand-pearl-cluster': {
    name: 'Tresse grappe de perles',
    description:
      'Tresse élégante à grappe de perles pour sublimer toute pochette ou sac.',
    materials: 'Perles d’eau douce, plaqué or 18 carats',
  },
  'bag-strand-letter': {
    name: 'Tresse monogramme lettre',
    description:
      'Tresse personnalisée à initiale. Disponible pour toutes les lettres A-Z.',
    materials: 'Vermeil or 18 carats',
  },
  'bag-strand-bint': {
    name: 'Tresse sac',
    description: 'Tresse à clip pour sacs à main et pochettes de soirée.',
    materials: 'Pièces métalliques plaquées or, émail',
  },
}

function frCopy(id: string): AccessoryCatalogCopy | undefined {
  return FR_ACCESSORY_CATALOG[id]
}

export function getLocalizedAccessoryDisplayName(
  accessory: Pick<Accessory, 'id' | 'name' | 'nameAr'>,
  locale: AppLocale = 'en',
): string {
  if (locale === 'ar') return accessory.nameAr
  if (locale === 'fr') return frCopy(accessory.id)?.name ?? accessory.name
  return accessory.name
}

export function getLocalizedAccessoryDescription(
  accessory: Pick<Accessory, 'id' | 'description' | 'descriptionAr'>,
  locale: AppLocale = 'en',
): string {
  if (locale === 'ar') return accessory.descriptionAr
  if (locale === 'fr') return frCopy(accessory.id)?.description ?? accessory.description
  return accessory.description
}

export function getLocalizedAccessoryMaterials(
  accessory: Pick<Accessory, 'id' | 'materials' | 'materialsAr'>,
  locale: AppLocale = 'en',
): string {
  if (locale === 'ar') return accessory.materialsAr
  if (locale === 'fr') return frCopy(accessory.id)?.materials ?? accessory.materials
  return accessory.materials
}
