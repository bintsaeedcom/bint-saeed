/**
 * Selectable size chips on collection grid cards. Unlike the colour beads in
 * `productGridColourDot`, these are interactive: picking one arms the card's
 * Add to Bag.
 */

/**
 * Sizes stay closed until the card's CTA asks for them, so they read as one quiet
 * line of type on a single row. Bordered boxes wrapped onto two rows in a
 * two-column grid and dominated the card.
 */
export const PRODUCT_GRID_SIZE_ROW =
  'flex flex-nowrap items-center gap-x-2.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-x-3.5'

const BASE =
  'inline-flex min-h-[32px] min-w-[24px] shrink-0 items-center justify-center border-b px-0.5 font-montserrat text-[11px] uppercase leading-none tracking-[0.1em] transition-colors'

export function productGridSizeChipClass(selected: boolean): string {
  return selected
    ? `${BASE} border-brand-darkRed text-brand-darkRed`
    : `${BASE} border-transparent text-brand-darkRed/50 hover:border-brand-darkRed/40 hover:text-brand-darkRed`
}

/** Full-width card CTA — fills in once a size is chosen so the card reads as ready. */
const CTA_BASE =
  'inline-flex min-h-[40px] w-full items-center justify-center gap-2 border px-3 font-montserrat text-[10px] uppercase tracking-[0.14em] transition-colors sm:text-[11px]'

export function productGridAddToBagClass(armed: boolean): string {
  return armed
    ? `${CTA_BASE} border-brand-darkRed bg-brand-darkRed text-white hover:bg-brand-darkMagenta`
    : `${CTA_BASE} border-brand-darkRed/30 bg-transparent text-brand-darkRed hover:border-brand-darkRed/60 hover:bg-brand-darkRed/[0.04]`
}
