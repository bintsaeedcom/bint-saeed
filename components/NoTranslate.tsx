import type { HTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
  as?: 'span' | 'div'
} & Omit<HTMLAttributes<HTMLElement>, 'children'>

/**
 * Protects brand / already-localized UI from browser page translate (Chrome MT).
 * Use for proper nouns like Strands, Marylebone, Bint Saeed, and for chrome
 * that is already in the active locale (e.g. Back → Terug).
 */
export default function NoTranslate({ children, as: Tag = 'span', className = '', ...rest }: Props) {
  return (
    <Tag
      translate="no"
      className={className ? `notranslate ${className}` : 'notranslate'}
      {...rest}
    >
      {children}
    </Tag>
  )
}
