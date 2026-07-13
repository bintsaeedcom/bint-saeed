'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'

function isFormField(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true
  if (target.isContentEditable) return true
  if (target.closest('[data-allow-context-menu], [data-allow-select], [data-allow-copy]')) {
    return true
  }
  return false
}

function isImageDragTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  if (target.tagName === 'IMG') return true
  return Boolean(target.closest('picture'))
}

function isAdminPath(pathname: string | null): boolean {
  if (!pathname) return false
  const { pathname: inner } = stripLocaleFromPathname(pathname)
  return inner === '/admin' || inner.startsWith('/admin/')
}

/**
 * Deter casual copying: context menu, image drag, copy/cut shortcuts.
 * Avoid selectstart / broad drag prevention — those fight mobile scroll on iOS.
 * Not a security boundary. Admin exempt. Crawlers unaffected.
 */
export default function ContentProtection() {
  const pathname = usePathname()

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return
    if (isAdminPath(pathname)) return

    try {
      if (localStorage.getItem('bs_content_protection') === 'off') return
    } catch {
      /* ignore */
    }

    const root = document.documentElement
    root.classList.add('bs-content-lock')

    const onContextMenu = (e: MouseEvent) => {
      if (isFormField(e.target)) return
      e.preventDefault()
    }

    const onCopyOrCut = (e: ClipboardEvent) => {
      if (isFormField(e.target)) return
      e.preventDefault()
    }

    const onDragStart = (e: DragEvent) => {
      // Images only — blocking all dragstart can stall touch scrolling on some browsers
      if (isImageDragTarget(e.target)) e.preventDefault()
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (isFormField(e.target)) return
      const key = e.key.toLowerCase()
      const mod = e.ctrlKey || e.metaKey
      if (mod && (key === 'c' || key === 'x' || key === 'a' || key === 's' || key === 'u')) {
        e.preventDefault()
      }
    }

    document.addEventListener('contextmenu', onContextMenu)
    document.addEventListener('copy', onCopyOrCut, true)
    document.addEventListener('cut', onCopyOrCut, true)
    document.addEventListener('dragstart', onDragStart, true)
    document.addEventListener('keydown', onKeyDown, true)

    return () => {
      root.classList.remove('bs-content-lock')
      document.removeEventListener('contextmenu', onContextMenu)
      document.removeEventListener('copy', onCopyOrCut, true)
      document.removeEventListener('cut', onCopyOrCut, true)
      document.removeEventListener('dragstart', onDragStart, true)
      document.removeEventListener('keydown', onKeyDown, true)
    }
  }, [pathname])

  return null
}
