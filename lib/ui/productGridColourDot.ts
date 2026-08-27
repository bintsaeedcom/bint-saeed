/**
 * Read-only colour chips on collection grids — gemstone / colour references,
 * not interactive swatches. Soft bead depth (highlight + rim) vs flat fills.
 */
export const PRODUCT_GRID_COLOUR_DOT =
  'h-[10px] w-[10px] shrink-0 rounded-full border border-black/20 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.7),inset_0_-1.5px_2.5px_rgba(0,0,0,0.4),0_0.5px_1.5px_rgba(0,0,0,0.18)]'

/** On dark panels (home strands feature) — lighter rim for contrast */
export const PRODUCT_GRID_COLOUR_DOT_ON_DARK =
  `${PRODUCT_GRID_COLOUR_DOT} border-white/30 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.65),inset_0_-1.5px_2.5px_rgba(0,0,0,0.45),0_0_0_0.5px_rgba(255,255,255,0.14)]`

/** Reserved row height so chips of different counts don’t jump CTA alignment. */
export const PRODUCT_GRID_COLOUR_DOT_ROW = 'flex min-h-[10px] flex-wrap items-center gap-1.5'

/**
 * Soften neon catalog hexes toward natural stone / fabric references for grid chips only.
 * PDP selectable swatches should keep the original `hex`.
 */
export function softGridColourHex(hex: string): string {
  const raw = hex.trim()
  const map: Record<string, string> = {
    '#ea580c': '#c47a4a', // sunstone / orange jade
    '#c026d3': '#a35a8c', // fuchsia jade
    '#9333ea': '#7a5f8f', // amethyst
    '#2563eb': '#4a6fa5', // blue aventurine
    '#1e40af': '#3d5a8a', // lapis
    '#1e3a8a': '#3d5a8a',
    '#0d9488': '#3d7a6e', // bright malachite teal
    '#059669': '#4a7a68', // jade green
    '#f9a8d4': '#d4a8b8', // rose quartz neon
    '#FFD700': '#c4a35a', // gold
    '#ffd700': '#c4a35a',
    '#C0C0C0': '#b0b0b0',
    '#c0c0c0': '#b0b0b0',
  }
  return map[raw] ?? map[raw.toLowerCase()] ?? raw
}

/** Soft specular bead fill — use instead of flat `backgroundColor`. */
export function softGridColourBeadStyle(hex: string): {
  backgroundColor: string
  backgroundImage: string
} {
  const c = softGridColourHex(hex)
  return {
    backgroundColor: c,
    backgroundImage: [
      'radial-gradient(circle at 30% 24%, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.28) 18%, transparent 44%)',
      'radial-gradient(circle at 72% 80%, rgba(0,0,0,0.38) 0%, transparent 48%)',
      'linear-gradient(145deg, rgba(255,255,255,0.14) 0%, transparent 42%, rgba(0,0,0,0.12) 100%)',
    ].join(', '),
  }
}
