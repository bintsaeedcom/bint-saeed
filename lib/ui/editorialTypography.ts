/** Shared editorial typography — section leads, subheads, and long-form body. */

/** Primary section title after eyebrow labels (THE ORIGIN, THE WOMAN, etc.) */
export const editorialSectionH2 =
  'font-rozha text-[clamp(2rem,4vw,3.75rem)] leading-[1.02] tracking-[0.01em]'

/** In-section subhead below grids or feature blocks */
export const editorialSubheadH3 =
  'font-rozha text-[clamp(1.45rem,2.75vw,2rem)] leading-[1.15] tracking-[0.01em]'

/** Reflective lead paragraph — Rozha italic, body-scale (not a section title) */
export const editorialReflectiveLeadOnLight =
  'font-rozha text-[clamp(1.125rem,2.1vw,1.45rem)] font-normal italic leading-[1.55] tracking-[0.005em] text-[#1a0210]/78'

export const editorialReflectiveLeadOnDark =
  'font-rozha text-[clamp(1.125rem,2.1vw,1.45rem)] font-normal italic leading-[1.55] tracking-[0.005em] text-[#e8ddd4]/78'

/** Long-form body copy — regular weight only; italic via <em> where needed */
export const editorialBodyBase =
  'font-montserrat text-[15px] font-normal leading-[1.9] tracking-wide [&_em]:italic'

export const editorialBodyOnLight = `${editorialBodyBase} text-[#1a0210]/72`
export const editorialBodyOnDark = `${editorialBodyBase} text-[#e8ddd4]/72`

/** Extra breathing room below last block in sticky editorial sections */
export const editorialSectionFooterPad = 'pb-16 md:pb-24'
