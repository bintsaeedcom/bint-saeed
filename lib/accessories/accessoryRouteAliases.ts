import { accessories, isAccessoryShopVisible, type Accessory } from '@/data/accessories'

/** Legacy accessory product IDs → canonical URL slugs (no “charm”). */
export const LEGACY_ACCESSORY_ID_ALIASES: Record<string, string> = {
  'abaya-charm-onyx-natural-stone': 'signature-strand-onyx',
  'abaya-charm-tiger-eye-natural-stone': 'signature-strand-tiger-eye',
  'abaya-charm-orange-jade-natural-stone': 'signature-strand-orange-jade',
  'abaya-charm-fuchsia-jade-natural-stone': 'signature-strand-fuchsia-jade',
  'abaya-charm-blue-aventurine-natural-stone': 'signature-strand-blue-aventurine',
  'abaya-charm-rose-quartz-natural-stone': 'signature-strand-rose-quartz',
  'abaya-charm-malachite-natural-stone': 'signature-strand-malachite',
  'abaya-charm-lapis-lazuli-natural-stone': 'signature-strand-lapis-lazuli',
  'abaya-charm-amethyst-hearts-natural-stone': 'signature-strand-amethyst-hearts',
  'abaya-charm-jade-hearts-natural-stone': 'signature-strand-jade-hearts',
  'bag-charm-tassel': 'al-ain-oasis-i-bag-charm-fuchsia-jade',
  'bag-charm-pearl-cluster': 'al-ain-oasis-ii-bag-charm-fuchsia-jade',
  'bag-charm-letter': 'al-ain-oasis-i-bag-charm-fuchsia-jade',
  'bag-charm-bint': 'al-ain-oasis-ii-bag-charm-fuchsia-jade',
  'bag-strand-tassel': 'al-ain-oasis-i-bag-charm-fuchsia-jade',
  'bag-strand-pearl-cluster': 'al-ain-oasis-ii-bag-charm-fuchsia-jade',
  'bag-strand-letter': 'al-ain-oasis-i-bag-charm-fuchsia-jade',
  'bag-strand-bint': 'al-ain-oasis-ii-bag-charm-fuchsia-jade',
  'phone-charm-pearl-strap': 'al-quaa-phone-charm-rose-quartz',
  'phone-charm-beaded': 'al-quaa-phone-charm-fuchsia-jade',
  'phone-charm-tassel': 'al-quaa-phone-charm-onyx',
  'phone-charm-bint': 'al-quaa-phone-charm-malachite',
  'phone-strand-pearl-strap': 'al-quaa-phone-charm-rose-quartz',
  'phone-strand-beaded': 'al-quaa-phone-charm-fuchsia-jade',
  'phone-strand-tassel': 'al-quaa-phone-charm-onyx',
  'phone-strand-bint': 'al-quaa-phone-charm-malachite',
  'al-ain-rosette-phone-charm-fuchsia-jade': 'al-quaa-phone-charm-fuchsia-jade',
  'al-ain-rosette-phone-charm-orange-jade': 'al-quaa-phone-charm-orange-jade',
  'al-ain-rosette-phone-charm-onyx': 'al-quaa-phone-charm-onyx',
  'al-ain-rosette-phone-charm-tiger-eye': 'al-quaa-phone-charm-tiger-eye',
  'al-ain-rosette-phone-charm-malachite': 'al-quaa-phone-charm-malachite',
  'al-ain-rosette-phone-charm-lapis-lazuli': 'al-quaa-phone-charm-lapis-lazuli',
  'al-ain-rosette-phone-charm-rose-quartz': 'al-quaa-phone-charm-rose-quartz',
  'al-ain-rosette-necklace-malachite': 'al-ain-oasis-necklace-malachite',
  'al-ain-rosette-necklace-tiger-eye': 'al-ain-oasis-necklace-tiger-eye',
  'al-ain-rosette-necklace-onyx': 'al-ain-oasis-necklace-onyx',
  'al-ain-rosette-necklace-rose-quartz': 'al-ain-oasis-necklace-rose-quartz',
  'al-ain-rosette-necklace-sunstone': 'al-ain-oasis-necklace-sunstone',
  'al-ain-rosette-necklace-lapis-lazuli': 'al-ain-oasis-necklace-lapis-lazuli',
  'al-ain-oasis-earrings-rose-quartz': 'al-quaa-earrings-rose-quartz',
  'signature-malachite-necklace': 'al-ain-oasis-necklace-malachite',
  'signature-tiger-eye-necklace': 'al-ain-oasis-necklace-tiger-eye',
  'signature-onyx-necklace': 'al-ain-oasis-necklace-onyx',
  'signature-rose-quartz-necklace': 'al-ain-oasis-necklace-rose-quartz',
  'necklace-layered-gold': 'al-ain-oasis-necklace-sunstone',
  'necklace-statement-pendant': 'al-ain-oasis-necklace-lapis-lazuli',
  'earrings-pearl-drop': 'al-quaa-earrings-rose-quartz',
  'earrings-geometric': 'al-ain-oasis-earrings-malachite',
  'al-quaa-earrings-onyx': 'al-ain-oasis-earrings-orange-jade',
  'earrings-hoops': 'al-ain-oasis-earrings-orange-jade',
}

/** Legacy category query params → canonical type slugs. */
export const LEGACY_ACCESSORY_CATEGORY_ALIASES: Record<string, string> = {
  'abaya-charms': 'signature-strands',
  'bag-charms': 'bag-strands',
  'phone-charms': 'phone-strands',
}

export function resolveAccessoryId(id: string): string {
  return LEGACY_ACCESSORY_ID_ALIASES[id] ?? id
}

export function resolveAccessoryCategoryId(id: string): string {
  const normalized = id.toLowerCase().replace(/_/g, '-')
  return LEGACY_ACCESSORY_CATEGORY_ALIASES[normalized] ?? normalized
}

export function findAccessoryById(id: string): Accessory | undefined {
  const canonical = resolveAccessoryId(id)
  return accessories.find((a) => a.id === canonical)
}

/** Public shop / PDP lookup — excludes launch-hidden categories (e.g. bracelets). */
export function findShopAccessoryById(id: string): Accessory | undefined {
  const accessory = findAccessoryById(id)
  if (!accessory || !isAccessoryShopVisible(accessory)) return undefined
  return accessory
}

export function isSignatureStrandCategory(category: Accessory['category']): boolean {
  return category === 'signature-strands'
}
