'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentProps } from 'react'
import { stripLocaleFromPathname, localizedPath } from '@/lib/i18n/routing'

function localizeHref(pathname: string | null, target: string): string {
  if (!target.startsWith('/') || target.startsWith('//')) return target
  if (/^(https?:|mailto:|tel:)/i.test(target)) return target
  const { locale } = stripLocaleFromPathname(pathname || '/')
  const [path, query] = target.split('?')
  const withPrefix = localizedPath(locale, path)
  return query != null && query.length > 0 ? `${withPrefix}?${query}` : withPrefix
}

type Props = ComponentProps<typeof Link>

/**
 * Like `next/link` but keeps the active locale prefix (`/ar`, `/fr`, …).
 * English (`/`) has no prefix.
 */
export default function LocaleLink({ href, children, ...rest }: Props) {
  const pathname = usePathname()
  if (typeof href === 'string') {
    return (
      <Link href={localizeHref(pathname, href)} {...rest}>
        {children}
      </Link>
    )
  }
  if (href.pathname != null) {
    const nextPath = localizeHref(pathname, href.pathname)
    return (
      <Link href={{ ...href, pathname: nextPath }} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  )
}
