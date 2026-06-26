import { accessories, type Accessory } from '@/data/accessories'

/** Legacy accessory product IDs → canonical URL slugs (no “charm”). */
export const LEGACY_ACCESSORY_ID_ALIASES: Record<string, string> = {
  'abaya-charm-onyx-natural-stone': 'signature-strand-onyx',
  'abaya-charm-tiger-eye-natural-stone': 'signature-strand-tiger-eye',
  'abaya-charm-orange-jade-natural-stone': 'signature-strand-sunstone',
  'abaya-charm-fuchsia-jade-natural-stone': 'signature-strand-fuchsia-jade',
  'abaya-charm-blue-aventurine-natural-stone': 'signature-strand-blue-aventurine',
  'abaya-charm-rose-quartz-natural-stone': 'signature-strand-rose-quartz',
  'abaya-charm-malachite-natural-stone': 'signature-strand-malachite',
  'abaya-charm-lapis-lazuli-natural-stone': 'signature-strand-lapis-lazuli',
  'abaya-charm-amethyst-hearts-natural-stone': 'signature-strand-amethyst-hearts',
  'abaya-charm-jade-hearts-natural-stone': 'signature-strand-jade-hearts',
  'bag-charm-tassel': 'bag-strand-tassel',
  'bag-charm-pearl-cluster': 'bag-strand-pearl-cluster',
  'bag-charm-letter': 'bag-strand-letter',
  'bag-charm-bint': 'bag-strand-bint',
  'phone-charm-pearl-strap': 'phone-strand-pearl-strap',
  'phone-charm-beaded': 'phone-strand-beaded',
  'phone-charm-tassel': 'phone-strand-tassel',
  'phone-charm-bint': 'phone-strand-bint',
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

export function isSignatureStrandCategory(category: Accessory['category']): boolean {
  return category === 'signature-strands'
}
