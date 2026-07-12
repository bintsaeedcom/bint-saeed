'use client'

import type { PdpIntroPart } from '@/lib/products/pdpIntroRich'

/** Plain emphasis — house-code names are not linked from PDP body copy. */
const CODE_EMPHASIS_CLASS = 'font-semibold text-brand-darkRed'

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
        return (
          <span key={`c-${index}`} className={CODE_EMPHASIS_CLASS}>
            {part.label}
          </span>
        )
      })}
    </p>
  )
}
