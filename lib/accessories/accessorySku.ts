import type { Accessory } from '@/data/accessories'

/**
 * Unified accessory SKU system aligned with garment SKU discipline:
 * - Stable, deterministic, category-led, and scalable by variant code.
 * - Format: BSA-JWL-<FAMILY>-<VARIANT>-001
 */
const ACCESSORY_SKU_BY_ID: Record<string, string> = {
  // Al Ain Rosette Necklaces (ALN)
  'al-ain-rosette-necklace-malachite': 'BSA-JWL-ALN-MAL-001',
  'al-ain-rosette-necklace-lapis-lazuli': 'BSA-JWL-ALN-LAP-001',
  'al-ain-rosette-necklace-rose-quartz': 'BSA-JWL-ALN-RSQ-001',
  'al-ain-rosette-necklace-tiger-eye': 'BSA-JWL-ALN-TGE-001',
  'al-ain-rosette-necklace-onyx': 'BSA-JWL-ALN-ONX-001',
  'al-ain-rosette-necklace-sunstone': 'BSA-JWL-ALN-SUN-001',

  // Earrings (EAR)
  'earrings-pearl-drop': 'BSA-JWL-EAR-PRL-001',
  'earrings-geometric': 'BSA-JWL-EAR-GEO-001',
  'earrings-hoops': 'BSA-JWL-EAR-HOP-001',

  // Bracelets (BRC)
  'bracelet-pearl-chain': 'BSA-JWL-BRC-PRL-001',
  'bracelet-cuff-heritage': 'BSA-JWL-BRC-HRT-001',
  'bracelet-bangle-set': 'BSA-JWL-BRC-BNG-001',

  // Bag strands (BAG)
  'bag-strand-tassel': 'BSA-JWL-BAG-TAS-001',
  'bag-strand-pearl-cluster': 'BSA-JWL-BAG-PRL-001',
  'bag-strand-letter': 'BSA-JWL-BAG-LTR-001',
  'bag-strand-bint': 'BSA-JWL-BAG-BNT-001',

  // Al Ain Rosette Phone Charms (PHN)
  'al-ain-rosette-phone-charm-fuchsia-jade': 'BSA-JWL-PHN-FJA-001',
  'al-ain-rosette-phone-charm-orange-jade': 'BSA-JWL-PHN-OJA-001',
  'al-ain-rosette-phone-charm-onyx': 'BSA-JWL-PHN-ONX-001',
  'al-ain-rosette-phone-charm-tiger-eye': 'BSA-JWL-PHN-TGE-001',
  'al-ain-rosette-phone-charm-malachite': 'BSA-JWL-PHN-MAL-001',
  'al-ain-rosette-phone-charm-lapis-lazuli': 'BSA-JWL-PHN-LAP-001',
  'al-ain-rosette-phone-charm-rose-quartz': 'BSA-JWL-PHN-RSQ-001',

  // Signature strands (STR)
  'signature-strand-onyx': 'BSA-JWL-STR-ONX-001',
  'signature-strand-tiger-eye': 'BSA-JWL-STR-TGE-001',
  'signature-strand-sunstone': 'BSA-JWL-STR-SUN-001',
  'signature-strand-fuchsia-jade': 'BSA-JWL-STR-FJA-001',
  'signature-strand-blue-aventurine': 'BSA-JWL-STR-BAV-001',
  'signature-strand-rose-quartz': 'BSA-JWL-STR-RSQ-001',
  'signature-strand-malachite': 'BSA-JWL-STR-MAL-001',
  'signature-strand-lapis-lazuli': 'BSA-JWL-STR-LAP-001',
  'signature-strand-amethyst-hearts': 'BSA-JWL-STR-AMH-001',
  'signature-strand-jade-hearts': 'BSA-JWL-STR-JDH-001',
}

export function getAccessorySkuById(accessoryId: string): string | undefined {
  return ACCESSORY_SKU_BY_ID[accessoryId]
}

export function getAccessorySku(accessory: Pick<Accessory, 'id'>): string | undefined {
  return getAccessorySkuById(accessory.id)
}

