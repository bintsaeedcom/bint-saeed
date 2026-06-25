'use client'

import LocaleLink from '@/components/LocaleLink'
import type { PdpIntroPart } from '@/lib/products/pdpIntroRich'

const CODE_LINK_CLASS =
  'font-semibold text-brand-darkRed underline decoration-brand-darkRed/35 underline-offset-[0.2em] transition-colors hover:text-brand-dustyBlue hover:decoration-brand-dustyBlue/50'

type Props = {
  parts: PdpIntroPart[]
  className?: string
}

export default function PdpIntroParagraph({ parts, className }: Props) {
  return (
    <p className={className}>
      {parts.map((part, index) => {
        if (part.type === 'text') {
          return <span key={`t-${index}`}>{part.value}</span>
        }
        const link = (
          <LocaleLink href={part.href} className={CODE_LINK_CLASS} data-cursor-hover>
            {part.label}
          </LocaleLink>
        )
        if (part.bold) {
          return (
            <strong key={`l-${index}`} className="font-semibold">
              {link}
            </strong>
          )
        }
        return link
      })}
    </p>
  )
}
