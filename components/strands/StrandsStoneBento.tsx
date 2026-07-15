'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import type { Accessory } from '@/data/accessories'
import { getStrandCarouselAlt } from '@/lib/accessories/accessoryJsonLd'
import { PRODUCT_GRID_COLOUR_DOT, softGridColourBeadStyle } from '@/lib/ui/productGridColourDot'
import { ctaPrimary } from '@/lib/ui/ctaClasses'

/** Featured stone order for the mosaic — first id is the hero tile. */
export const STRANDS_BENTO_FEATURED_IDS = [
  'signature-strand-malachite',
  'signature-strand-onyx',
  'signature-strand-tiger-eye',
  'signature-strand-rose-quartz',
  'signature-strand-fuchsia-jade',
  'signature-strand-amethyst-hearts',
] as const

type StrandsStoneBentoProps = {
  products: Accessory[]
  isRTL: boolean
  chooseCta: string
  discoverCta: string
  limitedLabel: string
  stoneNotes: Record<string, string>
  stoneNoteFallback: string
}

function shortStoneLabel(product: Accessory, isRTL: boolean): string {
  const color = product.colors[0]
  if (color) return isRTL ? color.nameAr : color.name
  const raw = isRTL ? product.nameAr : product.name
  return raw.replace(/\s+Strands$/i, '').replace(/^Al Ain Oasis\s+/i, '').trim()
}

export default function StrandsStoneBento({
  products,
  isRTL,
  chooseCta,
  discoverCta,
  limitedLabel,
  stoneNotes,
  stoneNoteFallback,
}: StrandsStoneBentoProps) {
  const featured = useMemo(() => {
    const byId = new Map(products.map((p) => [p.id, p]))
    return STRANDS_BENTO_FEATURED_IDS.map((id) => byId.get(id)).filter(
      (p): p is Accessory => Boolean(p),
    )
  }, [products])

  const [selectedId, setSelectedId] = useState<string>(
    () => featured[0]?.id ?? STRANDS_BENTO_FEATURED_IDS[0],
  )

  if (featured.length === 0) return null

  const hero = featured[0]
  const sideStack = featured.slice(1, 3)
  const bottomRow = featured.slice(3)

  const tileShell = (id: string) => {
    const selected = selectedId === id
    return [
      'group relative flex h-full flex-col overflow-hidden rounded-[6px] border bg-[#faf8f5] transition-all duration-300',
      selected
        ? 'z-[1] scale-[1.01] border-[#7A1C28]/55 shadow-[0_12px_36px_rgba(122,28,40,0.14)] ring-1 ring-[#7A1C28]/20'
        : 'border-[#e8ddd4] opacity-85 shadow-[0_8px_28px_rgba(26,2,16,0.06)] hover:scale-[1.01] hover:border-[#7A1C28]/25 hover:opacity-100',
    ].join(' ')
  }

  const renderTile = (product: Accessory, imageAspect: string, sizeHint: string) => {
    const color = product.colors[0]
    const selected = selectedId === product.id
    const note = stoneNotes[product.name] || stoneNoteFallback
    const displayName = isRTL ? product.nameAr : product.name

    return (
      <LocaleLink
        key={product.id}
        id={`strand-tile-${product.id}`}
        href={`/accessories/${product.id}`}
        className={tileShell(product.id)}
        data-cursor-hover
        onMouseEnter={() => setSelectedId(product.id)}
        onFocus={() => setSelectedId(product.id)}
        onClick={() => setSelectedId(product.id)}
      >
        <div className={`relative w-full shrink-0 overflow-hidden bg-[#f0eeeb] ${imageAspect}`}>
          {product.images[0] ? (
            <Image
              src={product.images[0]}
              alt={getStrandCarouselAlt(product.id)}
              fill
              sizes={sizeHint}
              className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />
          ) : null}
          {product.isLimitedEdition ? (
            <span className="absolute left-3 top-3 z-[2] rounded-full border border-[#c9a96b] bg-[#f6f0e4]/95 px-2.5 py-1 font-montserrat text-[9px] uppercase tracking-[0.1em] text-[#8a6020]">
              {limitedLabel}
            </span>
          ) : null}
        </div>
        <div className={`flex flex-1 flex-col p-4 text-start`}>
          <div className={`flex items-center gap-2 `}>
            {color ? (
              <span
                className={PRODUCT_GRID_COLOUR_DOT}
                style={softGridColourBeadStyle(color.hex)}
                aria-hidden
              />
            ) : null}
            <h3 className="font-rozha text-lg leading-tight text-[#2a1e18] md:text-xl">{displayName}</h3>
          </div>
          <p
            className={`mt-2 line-clamp-2 font-montserrat text-[12px] leading-relaxed text-[#8a7a70] transition-opacity duration-300 ${
 selected ? 'opacity-100' : 'opacity-60 md:line-clamp-1'
 }`}
          >
            {note}
          </p>
          <p className="mt-3 font-montserrat text-sm font-medium text-[#7A1C28]">
            AED {product.price.toLocaleString()}
          </p>
          <span
            className={`mt-auto inline-flex w-full pt-3 transition-opacity duration-300 ${
 selected ? 'opacity-100' : 'opacity-70'
 } ${ctaPrimary}`}
          >
            {chooseCta}
          </span>
        </div>
      </LocaleLink>
    )
  }

  return (
    <div className="mx-auto max-w-[1280px] px-4 md:px-10">
      <div
        role="listbox"
        aria-label="Stone colours"
        className={`mb-8 flex gap-1 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden `}
      >
        {featured.map((product) => {
          const color = product.colors[0]
          const selected = selectedId === product.id
          const label = shortStoneLabel(product, isRTL)
          return (
            <button
              key={`dial-${product.id}`}
              type="button"
              role="option"
              aria-selected={selected}
              onClick={() => {
                setSelectedId(product.id)
                document.getElementById(`strand-tile-${product.id}`)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest',
                })
              }}
              className={`inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-[4px] px-3 py-2 font-montserrat text-[10px] uppercase tracking-[0.14em] transition-colors ${
 selected
 ? 'bg-[#7A1C28]/10 text-[#7A1C28]'
 : 'text-[#8a7a70] hover:bg-[#7A1C28]/05 hover:text-[#1a0210]'
 } `}
              data-cursor-hover
            >
              {color ? (
                <span
                  className={`${PRODUCT_GRID_COLOUR_DOT} h-3 w-3`}
                  style={softGridColourBeadStyle(color.hex)}
                  aria-hidden
                />
              ) : null}
              {label}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-12 gap-3 md:gap-4" dir="ltr">
        <div className="col-span-12 md:col-span-7">
          {renderTile(hero, 'aspect-[4/5] md:aspect-[5/6] md:min-h-[420px]', '(max-width: 768px) 100vw, 55vw')}
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-3 md:col-span-5 md:grid-cols-1 md:gap-4">
          {sideStack.map((product) => (
            <div key={product.id} className="col-span-6 md:col-span-1">
              {renderTile(product, 'aspect-square md:aspect-[5/4]', '(max-width: 768px) 50vw, 30vw')}
            </div>
          ))}
        </div>

        {bottomRow.map((product) => (
          <div key={product.id} className="col-span-6 md:col-span-3">
            {renderTile(product, 'aspect-square md:aspect-[4/5]', '(max-width: 768px) 50vw, 25vw')}
          </div>
        ))}

        <LocaleLink
          href="/accessories?type=signature-strands"
          className="col-span-6 flex min-h-[160px] flex-col items-center justify-center gap-3 rounded-[6px] border border-[#7A1C28]/30 bg-[#1a0210] px-5 py-8 text-center transition-transform duration-300 hover:scale-[1.01] hover:border-[#7A1C28]/55 md:col-span-3 md:min-h-0"
          data-cursor-hover
        >
          <span className="font-montserrat text-[10px] uppercase tracking-[0.22em] text-[#6a8090]">
            Signature Strands
          </span>
          <span className="max-w-[12rem] font-rozha text-xl leading-tight text-[#e8d8c8] md:text-2xl">
            {discoverCta}
          </span>
          <span className="font-montserrat text-[11px] uppercase tracking-[0.16em] text-[#c9a96b]" aria-hidden>
            →
          </span>
        </LocaleLink>
      </div>
    </div>
  )
}
