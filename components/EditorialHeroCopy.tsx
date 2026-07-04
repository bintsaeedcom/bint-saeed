'use client'

import type { ReactNode } from 'react'
import {
  editorialHeroAlign,
  editorialHeroDescLight,
  editorialHeroDescOnDarkBrand,
  editorialHeroEyebrowDusty,
  editorialHeroEyebrowLight,
  editorialHeroTitleLight,
  editorialHeroTitleOnDarkBrand,
} from '@/lib/ui/editorialPageChrome'

type Variant = 'banner' | 'brand-dark'

type Props = {
  rtl: boolean
  eyebrow?: string
  title: string
  description?: string
  variant?: Variant
  titleClassName?: string
  descriptionClassName?: string
  children?: ReactNode
}

export default function EditorialHeroCopy({
  rtl,
  eyebrow,
  title,
  description,
  variant = 'banner',
  titleClassName,
  descriptionClassName,
  children,
}: Props) {
  const isBanner = variant === 'banner'

  return (
    <div className={`w-full min-w-0 max-w-full ${editorialHeroAlign(rtl)}`}>
      {eyebrow ? (
        <span className={isBanner ? editorialHeroEyebrowLight : editorialHeroEyebrowDusty}>{eyebrow}</span>
      ) : null}
      <h1
        data-document-h1="true"
        className={titleClassName ?? (isBanner ? editorialHeroTitleLight : editorialHeroTitleOnDarkBrand)}
      >
        {title}
      </h1>
      {description ? (
        <p className={descriptionClassName ?? (isBanner ? editorialHeroDescLight : editorialHeroDescOnDarkBrand)}>
          {description}
        </p>
      ) : null}
      {children}
    </div>
  )
}
