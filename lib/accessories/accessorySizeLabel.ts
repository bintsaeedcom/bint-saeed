import type { Accessory } from '@/data/accessories'
import type { CommerceUi } from '@/lib/i18n/commerceUi'

const UNIQUE_SIZE_CATEGORIES = new Set<Accessory['category']>([
  'necklaces',
  'earrings',
  'bracelets',
  'signature-strands',
  'bag-strands',
])

export function accessoryUsesUniqueSizeLabel(category: Accessory['category']): boolean {
  return UNIQUE_SIZE_CATEGORIES.has(category)
}

export function accessoryDisplaySize(
  category: Accessory['category'],
  ui: CommerceUi['accessories'],
): string {
  return accessoryUsesUniqueSizeLabel(category) ? ui.uniqueSize : ui.oneSize
}
