/**
 * Selectable size chips on collection grid cards. Unlike the colour beads in
 * `productGridColourDot`, these are interactive: picking one arms the card's
 * Add to Bag.
 */

/**
 * A grid, not a wrapping flex row: two-column cards are too narrow for six chips
 * on one line, and free wrapping leaves a lone XXL orphaned under a full row.
 */
export const PRODUCT_GRID_SIZE_ROW = 'grid grid-cols-3 gap-1 sm:grid-cols-6 sm:gap-1.5'

const BASE =
  'inline-flex min-h-[30px] w-full items-center justify-center border px-1 font-montserrat text-[10px] uppercase leading-none tracking-[0.08em] transition-colors sm:text-[11px]'

export function productGridSizeChipClass(selected: boolean): string {
  return selected
    ? `${BASE} border-brand-darkRed bg-brand-darkRed text-white`
    : `${BASE} border-brand-darkRed/20 bg-transparent text-brand-darkRed/70 hover:border-brand-darkRed/55 hover:text-brand-darkRed`
}

/** Full-width card CTA — fills in once a size is chosen so the card reads as ready. */
const CTA_BASE =
  'inline-flex min-h-[40px] w-full items-center justify-center gap-2 border px-3 font-montserrat text-[10px] uppercase tracking-[0.14em] transition-colors sm:text-[11px]'

export function productGridAddToBagClass(armed: boolean): string {
  return armed
    ? `${CTA_BASE} border-brand-darkRed bg-brand-darkRed text-white hover:bg-brand-darkMagenta`
    : `${CTA_BASE} border-brand-darkRed/30 bg-transparent text-brand-darkRed hover:border-brand-darkRed/60 hover:bg-brand-darkRed/[0.04]`
}
