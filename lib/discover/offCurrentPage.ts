import { stripLocaleFromPathname } from '@/lib/i18n/routing'

/** Pathname without locale prefix or query, always starting with `/`. */
export function barePathname(pathname: string | null | undefined): string {
  if (!pathname) return '/'
  const { pathname: stripped } = stripLocaleFromPathname(pathname)
  return stripped.split('?')[0] || '/'
}

/** True when href would leave the user on the same primary section they are already browsing. */
export function isCurrentSectionHref(
  currentPathname: string | null | undefined,
  href: string,
): boolean {
  const current = barePathname(currentPathname)
  const target = barePathname(href)
  if (target === '/') return current === '/' || current === '/home'
  if (current === target) return true
  // Same section family: /shop/[id], /accessories/[id], etc.
  if (current.startsWith(`${target}/`)) return true
  return false
}

export function filterOffCurrentPage<T extends { href: string }>(
  items: readonly T[],
  currentPathname: string | null | undefined,
): T[] {
  return items.filter((item) => !isCurrentSectionHref(currentPathname, item.href))
}
