'use client'

import { usePathname } from 'next/navigation'
import { stripLocaleFromPathname, localizedPath } from '@/lib/i18n/routing'

/** Current locale from the URL prefix; `/` means English. */
export function useLocaleHref() {
  const pathname = usePathname() || '/'
  const { locale } = stripLocaleFromPathname(pathname)
  return {
    locale,
    /** Absolute path within the site including `/ar`, `/fr`, … when needed. */
    localize: (path: string) => {
      const p = path.startsWith('/') ? path : `/${path}`
      return localizedPath(locale, p)
    },
  }
}
