import { ENGLISH_ROOT_KEYWORDS } from '@/lib/i18n/englishRootKeywords'
import { seoKeywords } from '@/lib/i18n/translations'
import type { AppLocale } from '@/lib/i18n/routing'
import { getGlobalSchemaKeywordExpansion } from '@/lib/seo/schemaKeywordExpansion'
import { getAbayaProductDiscoveryKeywords } from '@/lib/products/abayaProductDiscoveryI18n'

function dedupeKeywords(list: readonly string[]): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  for (const raw of list) {
    const k = raw.trim()
    if (!k) continue
    const lower = k.toLowerCase()
    if (seen.has(lower)) continue
    seen.add(lower)
    out.push(k)
  }
  return out
}

/** Arabic script (primary + supplementary blocks used in keywords). */
function isArabicScript(s: string): boolean {
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(s)
}

function isCyrillicScript(s: string): boolean {
  return /[\u0400-\u04FF]/.test(s)
}

function isCjkScript(s: string): boolean {
  return /[\u4E00-\u9FFF]/.test(s)
}

/** Latin / shared “Western” keyword lines (excludes Arabic, Cyrillic, CJK rows from the root list). */
function latinScriptKeywordsFromRoot(): string[] {
  return ENGLISH_ROOT_KEYWORDS.filter((k) => !isArabicScript(k) && !isCyrillicScript(k) && !isCjkScript(k))
}

function arabicKeywordsFromRoot(): string[] {
  return ENGLISH_ROOT_KEYWORDS.filter((k) => isArabicScript(k))
}

/**
 * Full keyword list for HTML meta `keywords` per locale.
 * English: entire programmed root list + `seoKeywords.en`.
 * Arabic: Arabic lines from root + `seoKeywords.ar`.
 * Other locales: locale pack + script-appropriate lines from root (Cyrillic/CJK/Latin buckets).
 */
export function mergedMetaKeywordsForLocale(locale: AppLocale): string[] {
  const pack = seoKeywords[locale as keyof typeof seoKeywords]
  const expansion = getGlobalSchemaKeywordExpansion(locale)
  const abayaDiscovery = getAbayaProductDiscoveryKeywords(locale)

  if (locale === 'en') {
    return dedupeKeywords([...ENGLISH_ROOT_KEYWORDS, ...(pack ?? []), ...expansion, ...abayaDiscovery])
  }

  if (locale === 'ar') {
    return dedupeKeywords([...(pack ?? []), ...arabicKeywordsFromRoot(), ...expansion, ...abayaDiscovery])
  }

  if (locale === 'ru') {
    return dedupeKeywords([
      ...(pack ?? []),
      ...ENGLISH_ROOT_KEYWORDS.filter((k) => isCyrillicScript(k)),
      ...expansion,
      ...abayaDiscovery,
    ])
  }

  if (locale === 'zh') {
    return dedupeKeywords([
      ...(pack ?? []),
      ...ENGLISH_ROOT_KEYWORDS.filter((k) => isCjkScript(k)),
      ...expansion,
      ...abayaDiscovery,
    ])
  }

  return dedupeKeywords([
    ...(pack ?? []),
    ...latinScriptKeywordsFromRoot(),
    ...expansion,
    ...abayaDiscovery,
  ])
}
