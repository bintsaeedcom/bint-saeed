/**
 * Central Simplified Chinese terminology for BINT SAEED 承悦.
 * Source of truth for zh editorial, PDP, schema-adjacent copy, and alt text.
 *
 * Brand rules:
 * - Logo remains Latin BINT SAEED only.
 * - In text, prefer BINT SAEED 承悦 where editorially appropriate.
 * - 承悦 expresses “Inheritance of Joy” — not a transliteration of Bint Saeed.
 */

import { BRAND_NAME_ZH, BRAND_NAME_ZH_DISPLAY } from '@/lib/brand/chinaPresence'

export { BRAND_NAME_ZH, BRAND_NAME_ZH_DISPLAY }

/** Refined retail term — consistent across PDP, FAQ, and discovery copy. */
export const ZH_GARMENT_JEWELLERY = '服装珠宝'

/** Long-form / editorial contexts (materials, heritage). */
export const ZH_NATURAL_STONE = '天然宝石'

/** Product bullets, interchangeable strands, cuff details. */
export const ZH_NATURAL_STONE_SHORT = '天然石'

export const ZH_GEO = {
  abuDhabi: '阿布扎比',
  uae: '阿联酋',
  uaeFull: '阿拉伯联合酋长国',
  fromAbuDhabi: '来自阿布扎比',
  madeInAbuDhabi: '阿联酋阿布扎比',
} as const

/** Keep Al Talli visible; explain in prose — never replace the craft name in Chinese UI. */
export const ZH_AL_TALLI = 'Al Talli'

/** Short factual line for heritage contexts (UNESCO 2022). */
export const ZH_AL_TALLI_UNESCO_LINE =
  '2022 年，Al Talli 被联合国教科文组织列入《人类非物质文化遗产代表作名录》。'

/** Distinguish inspired design language from handmade craft on the garment. */
export const ZH_AL_TALLI_INSPIRED_DETAIL = 'Al Talli 灵感细节'

export const ZH_STONE_NAMES = {
  onyx: '黑玛瑙',
  lapisLazuli: '青金石',
  malachite: '孔雀石',
  roseQuartz: '粉晶',
  coloredJade: '彩色玉石',
} as const

const STONE_LATIN: Record<keyof typeof ZH_STONE_NAMES, string> = {
  onyx: 'Onyx',
  lapisLazuli: 'Lapis Lazuli',
  malachite: 'Malachite',
  roseQuartz: 'Rose Quartz',
  coloredJade: 'Colored Jade',
}

/** Editorial form: 黑玛瑙 Onyx — Chinese first, Latin for search clarity. */
export function zhStoneLabel(key: keyof typeof ZH_STONE_NAMES): string {
  return `${ZH_STONE_NAMES[key]} ${STONE_LATIN[key]}`
}

/** Comma-separated list of optional strand stones (approved catalogue only). */
export function zhOptionalStrandStonesList(): string {
  return [
    zhStoneLabel('coloredJade'),
    zhStoneLabel('roseQuartz'),
    zhStoneLabel('lapisLazuli'),
    zhStoneLabel('malachite'),
  ].join('、')
}

/** Grosvenor modular-jewellery hook — immediately communicates the concept. */
export const ZH_GARMENT_JEWELLERY_HOOK = '如果衣服，也有属于自己的珠宝？'

/** One-line brand positioning for metadata / schema-adjacent Chinese. */
export const ZH_BRAND_POSITIONING_LINE =
  'BINT SAEED 承悦，来自阿布扎比的当代女装品牌，以阿联酋文化与当代剪裁，呈现优雅端庄的当代着装。'
