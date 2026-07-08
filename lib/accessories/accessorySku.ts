import type { Accessory } from '@/data/accessories'
import { accessories as staticAccessories } from '@/data/accessories'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import { buildVariantSku } from '@/lib/products/sku'

/**
 * Accessory reference codes aligned with garment SKU discipline:
 * - Parent style: BS-BG-### (bag charms) · BS-PH-### (phone charms)
 * - Colour variant: BS-BG-001-BLK (bag charms with colour picker)
 * - Other jewellery families keep stable BSA-JWL-* style codes (one code per product).
 */
const JEWELLERY_STYLE_SKU_BY_ID: Record<string, string> = {
  // Al Ain Oasis Necklaces (ALN)
  'al-ain-rosette-necklace-malachite': 'BSA-JWL-ALN-MAL-001',
  'al-ain-rosette-necklace-lapis-lazuli': 'BSA-JWL-ALN-LAP-001',
  'al-ain-rosette-necklace-rose-quartz': 'BSA-JWL-ALN-RSQ-001',
  'al-ain-rosette-necklace-tiger-eye': 'BSA-JWL-ALN-TGE-001',
  'al-ain-rosette-necklace-onyx': 'BSA-JWL-ALN-ONX-001',
  'al-ain-rosette-necklace-sunstone': 'BSA-JWL-ALN-SUN-001',

  // Al Ain Oasis Earrings (EAR-OAS)
  'al-ain-oasis-earrings-malachite': 'BSA-JWL-EAR-MAL-001',
  'al-ain-oasis-earrings-rose-quartz': 'BSA-JWL-EAR-RSQ-001',
  // Additional earrings
  'al-ain-oasis-earrings-orange-jade': 'BSA-JWL-EAR-OJD-001',
  'al-quaa-earrings-lapis-lazuli': 'BSA-JWL-EAR-LAP-001',

  // Bracelets (BRC)
  'bracelet-pearl-chain': 'BSA-JWL-BRC-PRL-001',
  'bracelet-cuff-heritage': 'BSA-JWL-BRC-HRT-001',
  'bracelet-bangle-set': 'BSA-JWL-BRC-BNG-001',

  // Signature strands (STR)
  'signature-strand-onyx': 'BSA-JWL-STR-ONX-001',
  'signature-strand-tiger-eye': 'BSA-JWL-STR-TGE-001',
  'signature-strand-sunstone': 'BSA-JWL-STR-SUN-001',
  'signature-strand-fuchsia-jade': 'BSA-JWL-STR-FJA-001',
  'signature-strand-orange-jade': 'BSA-JWL-STR-OJA-001',
  'signature-strand-blue-aventurine': 'BSA-JWL-STR-BAV-001',
  'signature-strand-rose-quartz': 'BSA-JWL-STR-RSQ-001',
  'signature-strand-malachite': 'BSA-JWL-STR-MAL-001',
  'signature-strand-lapis-lazuli': 'BSA-JWL-STR-LAP-001',
  'signature-strand-amethyst-hearts': 'BSA-JWL-STR-AMH-001',
  'signature-strand-jade-hearts': 'BSA-JWL-STR-JDH-001',
}

/** Bag charm parent style codes — colour suffix appended when selected (BS-BG-001-BLK). */
const BAG_CHARM_STYLE_SKU_BY_ID: Record<string, string> = {
  'bag-strand-tassel': 'BS-BG-001',
  'bag-strand-pearl-cluster': 'BS-BG-002',
  'bag-strand-letter': 'BS-BG-003',
  'bag-strand-bint': 'BS-BG-004',
}

/** Phone charm parent style codes — one stone per product, no colour suffix. */
const PHONE_CHARM_STYLE_SKU_BY_ID: Record<string, string> = {
  // Al Quaa Phone Charms (BS-PH)
  'al-quaa-phone-charm-fuchsia-jade': 'BS-PH-001',
  'al-quaa-phone-charm-orange-jade': 'BS-PH-002',
  'al-quaa-phone-charm-onyx': 'BS-PH-003',
  'al-quaa-phone-charm-tiger-eye': 'BS-PH-004',
  'al-quaa-phone-charm-malachite': 'BS-PH-005',
  'al-quaa-phone-charm-lapis-lazuli': 'BS-PH-006',
  'al-quaa-phone-charm-rose-quartz': 'BS-PH-007',
}

function bagCharmStyleSku(accessoryId: string): string | undefined {
  return BAG_CHARM_STYLE_SKU_BY_ID[accessoryId]
}

function phoneCharmStyleSku(accessoryId: string): string | undefined {
  return PHONE_CHARM_STYLE_SKU_BY_ID[resolveAccessoryId(accessoryId)]
}

function jewelleryStyleSku(accessoryId: string): string | undefined {
  return JEWELLERY_STYLE_SKU_BY_ID[accessoryId]
}

export function getAccessoryStyleSku(
  accessory: Pick<Accessory, 'id' | 'category'>,
): string | undefined {
  if (accessory.category === 'bag-strands') return bagCharmStyleSku(accessory.id)
  if (accessory.category === 'phone-strands') return phoneCharmStyleSku(accessory.id)
  return jewelleryStyleSku(accessory.id)
}

/**
 * Full catalogue reference for PDP, cart, and checkout.
 * Bag charms append a 3-letter colour suffix when a colour is selected.
 */
export function resolveAccessorySku(
  accessory: Pick<Accessory, 'id' | 'category'>,
  colorName?: string,
): string | undefined {
  if (accessory.category === 'bag-strands') {
    const styleSku = bagCharmStyleSku(accessory.id)
    if (!styleSku) return undefined
    return buildVariantSku(styleSku, colorName)
  }
  if (accessory.category === 'phone-strands') {
    return phoneCharmStyleSku(accessory.id)
  }
  return jewelleryStyleSku(accessory.id)
}

export function getAccessorySkuById(accessoryId: string): string | undefined {
  const accessory = staticAccessories.find((item) => item.id === resolveAccessoryId(accessoryId))
  if (!accessory) return undefined
  return getAccessoryStyleSku(accessory)
}

export function getAccessorySku(accessory: Pick<Accessory, 'id' | 'category'>): string | undefined {
  return getAccessoryStyleSku(accessory)
}

export function resolveAccessorySkuFromSelection(
  accessory: Pick<Accessory, 'id' | 'category' | 'colors'>,
  selectedColorLabel?: string,
): string | undefined {
  const colorName = selectedColorLabel
    ? accessory.colors.find(
        (color) => color.name === selectedColorLabel || color.nameAr === selectedColorLabel,
      )?.name ?? selectedColorLabel
    : accessory.colors[0]?.name
  return resolveAccessorySku(accessory, colorName)
}

export function resolveSkuByAccessoryId(
  accessoryId: string,
  catalog: readonly Accessory[] = staticAccessories,
  colorName?: string,
): string | undefined {
  const accessory = catalog.find((item) => item.id === resolveAccessoryId(accessoryId))
  if (!accessory) return undefined
  return resolveAccessorySkuFromSelection(accessory, colorName)
}
