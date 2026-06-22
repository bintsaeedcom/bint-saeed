/** Shared PDP panel typography — keeps accordion/body copy at 11px (site `p` defaults to 15px). */

export const PDP_COPY =
  'pdp-copy font-montserrat text-[11px] font-normal tracking-wide text-brand-darkRed/75'

export const PDP_COPY_RELAXED = `${PDP_COPY} leading-[1.55]`
export const PDP_COPY_INTRO = `${PDP_COPY} leading-[1.6] whitespace-pre-line`

export const PDP_ACCORDION_TITLE =
  'font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darkRed'

export const PDP_ACCORDION_SUBTITLE =
  'font-montserrat text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-darkRed'

export const PDP_ACCORDION_PANEL = 'space-y-2 pb-5'

/** Hanging-indent bullet lists for accordion panels (Product Details, Care, Shipping, etc.). */
export const PDP_BULLET_LIST = 'pdp-bullet-list'
export const PDP_BULLET_ITEM = `pdp-bullet-item ${PDP_COPY_RELAXED}`

/** Final Product Details bullet — shown after origin line when a catalogue SKU exists. */
export function formatPdpProductCodeLine(sku: string, isRTL: boolean): string {
  return isRTL ? `رمز المنتج: ${sku}` : `Product code: ${sku}`
}

export const PDP_FAQ_QUESTION =
  'pdp-copy font-montserrat text-[11px] font-semibold tracking-wide text-brand-darkRed'

export const PDP_MTO_NOTE =
  'font-montserrat text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-dustyBlue'

export const PDP_RELATED_TITLE =
  'mb-5 font-montserrat text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-darkRed'
