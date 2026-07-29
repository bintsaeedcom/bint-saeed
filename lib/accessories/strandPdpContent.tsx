import type { ReactNode } from 'react'
import type { AppLocale } from '@/lib/i18n/routing'
import type { PdpAccordionSectionConfig } from '@/components/pdp/PdpAccordion'
import { PdpShippingReturnsBullets } from '@/lib/pdp/PdpShippingReturnsBullets'
import {
  PDP_BULLET_ITEM,
  PDP_BULLET_LIST,
  PDP_COPY_RELAXED,
  PDP_FAQ_QUESTION,
} from '@/lib/pdp/pdpTypography'
import {
  getStrandPdpContent as resolveStrandPdpContent,
  getStrandPdpSectionTitles,
} from '@/lib/accessories/strandPdp/resolveStrandPdpContent'

export type { StrandPdpContent, StrandPdpFaqItem } from '@/lib/accessories/strandPdp/types'

export function getStrandPdpContent(accessoryId: string, locale: AppLocale = 'en') {
  return resolveStrandPdpContent(accessoryId, locale)
}

const SIGNATURE_STRANDS_CATEGORY_LABEL: Record<AppLocale, string> = {
  en: 'Signature Strands',
  ar: 'ستراندات التوقيع',
  fr: 'Signature Strands',
  it: 'Signature Strands',
  es: 'Signature Strands',
  ru: 'Signature Strands',
  zh: 'Signature Strands',
  de: 'Signature Strands',
  nl: 'Signature Strands',
  pt: 'Signature Strands',
  id: 'Signature Strands',
  ms: 'Signature Strands',
}

export function signatureStrandsCategoryLabel(locale: AppLocale): string {
  return SIGNATURE_STRANDS_CATEGORY_LABEL[locale]
}

type BuildStrandPdpAccordionOptions = {
  content: NonNullable<ReturnType<typeof getStrandPdpContent>>
  productDetailsTitle: string
  materialsTitle: string
  careTitle: string
  faqTitle: string
  shippingTitle: string
  stoneOriginTitle: string
  naturalStoneTitle: string
  isRTL: boolean
}

function proseBlock(text: string, isRTL: boolean): ReactNode {
  return <p className={`${PDP_COPY_RELAXED} text-start`}>{text}</p>
}

export function buildStrandPdpAccordionSections({
  content,
  productDetailsTitle,
  materialsTitle,
  careTitle,
  faqTitle,
  shippingTitle,
  stoneOriginTitle,
  naturalStoneTitle,
  isRTL,
}: BuildStrandPdpAccordionOptions): PdpAccordionSectionConfig[] {
  const textAlign = 'text-start'

  return [
    {
      id: 'product-details',
      title: productDetailsTitle,
      titleTag: 'h2',
      children: (
        <ul className={PDP_BULLET_LIST}>
          {content.productDetails.map((item) => (
            <li key={item} className={PDP_BULLET_ITEM}>
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'materials',
      title: materialsTitle,
      children: (
        <ul className={PDP_BULLET_LIST}>
          {content.materials.map((item) => (
            <li key={item} className={PDP_BULLET_ITEM}>
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'stone-origin',
      title: stoneOriginTitle,
      children: proseBlock(content.stoneOrigin, isRTL),
    },
    {
      id: 'natural-stone',
      title: naturalStoneTitle,
      children: proseBlock(content.naturalStone, isRTL),
    },
    {
      id: 'care',
      title: careTitle,
      children: (
        <ul className={PDP_BULLET_LIST}>
          {content.care.map((item) => (
            <li key={item} className={PDP_BULLET_ITEM}>
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'faq',
      title: faqTitle,
      panelClassName: 'space-y-4 pb-5',
      children: content.faq.map((item) => (
        <div key={item.question} className={textAlign}>
          <p className={PDP_FAQ_QUESTION}>{item.question}</p>
          <p className={`mt-1 ${PDP_COPY_RELAXED}`}>{item.answer}</p>
        </div>
      )),
    },
    {
      id: 'shipping',
      title: shippingTitle,
      bordered: false,
      children: <PdpShippingReturnsBullets isRTL={isRTL} productKind="jewellery" />,
    },
  ]
}

export function strandPdpIntroBlock(
  content: NonNullable<ReturnType<typeof getStrandPdpContent>>,
  isRTL: boolean,
): ReactNode {
  return (
    <div className="text-start">
      <p className="mb-3 font-rozha text-[1.35rem] leading-snug text-brand-darkRed md:text-[1.5rem]">
        {content.headline}
      </p>
      <div className="space-y-3">
        {content.introParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className={`${PDP_COPY_RELAXED} pdp-copy--intro`}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

export { getStrandPdpSectionTitles }
