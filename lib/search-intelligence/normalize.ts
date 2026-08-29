import type { SiCountry, SiLanguage } from '@/lib/search-intelligence/types'

export function normalizeKeyword(keyword: string): string {
  return keyword
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}\s-]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function dedupeKey(keyword: string, country: SiCountry, language: SiLanguage): string {
  return `${normalizeKeyword(keyword)}|${country}|${language}`
}

export function slugifyKeyword(keyword: string): string {
  return normalizeKeyword(keyword)
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
}
