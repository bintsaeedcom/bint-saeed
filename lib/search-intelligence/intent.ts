import type { SiSearchIntent } from '@/lib/search-intelligence/types'

const BRAND = 'bint saeed'

export function classifySearchIntent(keyword: string): SiSearchIntent {
  const k = keyword.toLowerCase()

  if (k.includes(BRAND)) return 'navigational'

  if (
    /\b(buy|shop|price|order|bespoke|made to order|near me|online store|checkout)\b/.test(k) ||
    /\b(luxury abaya|designer abaya)\b/.test(k)
  ) {
    return 'transactional'
  }

  if (
    /\b(best|top|luxury|premium|compare|vs|alternatives|review)\b/.test(k) ||
    /\b(abaya shop|abaya brand)\b/.test(k)
  ) {
    return 'commercial'
  }

  if (
    /\b(abu dhabi|dubai|uae|saudi|riyadh|jeddah|gcc|qatar|kuwait|bahrain|oman|london|paris)\b/.test(k)
  ) {
    return 'local'
  }

  if (
    /\b(heritage|emirati|al talli|khous|sadu|unesco|craft|traditional|battoulah|culture|history)\b/.test(k)
  ) {
    return 'cultural_research'
  }

  if (/^(how|what|why|where|when|which|can|is)\b/.test(k)) {
    return 'informational'
  }

  return 'informational'
}

export function isBrandQuery(keyword: string): boolean {
  return keyword.toLowerCase().includes(BRAND)
}
