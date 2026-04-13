import { headers } from 'next/headers'
import type { AppLocale } from './routing'
import { isLocalePrefix } from './routing'

export async function getServerLocale(): Promise<AppLocale> {
  const h = await headers()
  const v = h.get('x-bs-locale')
  if (v && isLocalePrefix(v)) return v
  return 'en'
}

export async function getServerPathname(): Promise<string> {
  const h = await headers()
  return h.get('x-bs-pathname') || '/'
}
