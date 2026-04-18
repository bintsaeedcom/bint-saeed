import type { Accessory } from '@/data/accessories'

/** Price tiers in AED (catalog `price` is stored in AED). */
export type PriceRangeId = 'all' | 'under-200' | '200-400' | '400-600' | '600-plus'

export const PRICE_RANGE_OPTIONS: {
  id: PriceRangeId
  labelEn: string
  labelAr: string
}[] = [
  { id: 'all', labelEn: 'All prices', labelAr: 'جميع الأسعار' },
  { id: 'under-200', labelEn: 'Under 200 AED', labelAr: 'أقل من ٢٠٠ د.إ' },
  { id: '200-400', labelEn: '200 – 400 AED', labelAr: '٢٠٠ – ٤٠٠ د.إ' },
  { id: '400-600', labelEn: '400 – 600 AED', labelAr: '٤٠٠ – ٦٠٠ د.إ' },
  { id: '600-plus', labelEn: '600 AED & above', labelAr: '٦٠٠ د.إ فما فوق' },
]

export function accessoryInPriceRange(a: Accessory, range: PriceRangeId): boolean {
  if (range === 'all') return true
  const p = a.price
  switch (range) {
    case 'under-200':
      return p < 200
    case '200-400':
      return p >= 200 && p < 400
    case '400-600':
      return p >= 400 && p < 600
    case '600-plus':
      return p >= 600
    default:
      return true
  }
}

/** Natural stone / material filters — matched against id, name, and materials (EN). */
export type StoneFilterId =
  | 'malachite'
  | 'onyx'
  | 'tiger-eye'
  | 'rose-quartz'
  | 'jade'
  | 'aventurine'
  | 'amethyst'
  | 'lapis'
  | 'pearl'

export const STONE_OPTIONS: {
  id: StoneFilterId
  labelEn: string
  labelAr: string
}[] = [
  { id: 'malachite', labelEn: 'Malachite', labelAr: 'الملاكيت' },
  { id: 'onyx', labelEn: 'Onyx', labelAr: 'الأونكس' },
  { id: 'tiger-eye', labelEn: 'Tiger Eye', labelAr: 'عين النمر' },
  { id: 'rose-quartz', labelEn: 'Rose Quartz', labelAr: 'الكوارتز الوردي' },
  { id: 'jade', labelEn: 'Jade', labelAr: 'اليشم' },
  { id: 'aventurine', labelEn: 'Aventurine', labelAr: 'الأفنتورين' },
  { id: 'amethyst', labelEn: 'Amethyst', labelAr: 'الجمشت' },
  { id: 'lapis', labelEn: 'Lapis Lazuli', labelAr: 'اللازورد' },
  { id: 'pearl', labelEn: 'Pearl', labelAr: 'اللؤلؤ' },
]

function accessoryHay(a: Accessory): string {
  return `${a.id} ${a.name} ${a.materials}`.toLowerCase()
}

export function accessoryMatchesStone(a: Accessory, stoneId: StoneFilterId): boolean {
  const h = accessoryHay(a)
  switch (stoneId) {
    case 'malachite':
      return h.includes('malachite')
    case 'onyx':
      return /\bonyx\b/.test(h)
    case 'tiger-eye':
      return h.includes('tiger') && h.includes('eye')
    case 'rose-quartz':
      return h.includes('rose quartz') || h.includes('rose-quartz')
    case 'jade':
      return /\bjade\b/.test(h)
    case 'aventurine':
      return h.includes('aventurine')
    case 'amethyst':
      return h.includes('amethyst')
    case 'lapis':
      return h.includes('lapis')
    case 'pearl':
      return h.includes('pearl')
    default:
      return false
  }
}

/** If `selectedStones` is empty → no stone filter. Otherwise product must match any selected stone (OR). */
export function accessoryMatchesStoneSelection(a: Accessory, selectedStones: StoneFilterId[]): boolean {
  if (selectedStones.length === 0) return true
  return selectedStones.some((id) => accessoryMatchesStone(a, id))
}

export interface AccessoryFilters {
  categoryId: string
  priceRange: PriceRangeId
  stones: StoneFilterId[]
}

export function applyAccessoryFilters(items: Accessory[], f: AccessoryFilters): Accessory[] {
  let list =
    f.categoryId === 'all' ? items : items.filter((a) => a.category === f.categoryId)

  list = list.filter((a) => accessoryInPriceRange(a, f.priceRange))
  list = list.filter((a) => accessoryMatchesStoneSelection(a, f.stones))

  return list
}
