/**
 * Hidden meta / schema keywords for China-market discovery (Baidu, DeepSeek, RedNote search).
 * Chinese brand name 承悦 is the house proper name in zh — not a transliteration of Bint Saeed.
 */

import {
  BRAND_NAME_ZH,
  BRAND_NAME_ZH_DISPLAY,
  REDNOTE_ID,
  WECHAT_ID,
} from '@/lib/brand/chinaPresence'

/** Curated Simplified Chinese discovery terms — meta keywords + schema only. */
export const CHINA_DISCOVERY_KEYWORDS_ZH: readonly string[] = [
  BRAND_NAME_ZH,
  BRAND_NAME_ZH_DISPLAY,
  'Bint Saeed',
  '阿布扎比时装',
  '阿布扎比阿巴亚',
  '阿联酋阿巴亚',
  '阿联酋奢华阿巴亚',
  '迪拜阿巴亚',
  '奢华阿巴亚',
  '设计师阿巴亚',
  '高端端庄服饰',
  '端庄时尚',
  '阿联酋设计师品牌',
  '中东奢华品牌',
  '阿联酋工艺',
  'Al Talli',
  '阿联酋传承',
  '小红书',
  '小红书号',
  REDNOTE_ID,
  '微信',
  '微信公众号',
  WECHAT_ID,
  'RedNote',
  '小红书承悦',
  '承悦阿布扎比',
  '承悦阿巴亚',
  '斋月穿搭',
  '斋月阿巴亚',
  '开斋穿搭',
  '阿联酋旅行穿搭',
  '中东旅行穿搭',
  '天然石珠宝',
  '手袋挂饰',
  '手机挂饰',
  '订制阿巴亚',
  '阿布扎比设计师',
  'GCC阿巴亚',
  '全球配送阿巴亚',
]

export function chinaDiscoveryKeywordsForLocale(locale: string): string[] {
  if (locale === 'zh') return [...CHINA_DISCOVERY_KEYWORDS_ZH]
  return [
    BRAND_NAME_ZH_DISPLAY,
    BRAND_NAME_ZH,
    'Xiaohongshu',
    'RedNote',
    REDNOTE_ID,
    'WeChat',
    WECHAT_ID,
    'China modest fashion',
    'Abu Dhabi abaya China',
  ]
}
