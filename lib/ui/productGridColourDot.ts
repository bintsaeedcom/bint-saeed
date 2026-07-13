/**
 * Read-only colour chips on collection grids — gemstone / colour references,
 * not interactive swatches. Keep small, soft-edged, naturally muted.
 */
export const PRODUCT_GRID_COLOUR_DOT =
  'h-[11px] w-[11px] shrink-0 rounded-full border border-black/[0.14] shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] saturate-[0.72] brightness-[0.96]'

/** Reserved row height so chips of different counts don’t jump CTA alignment. */
export const PRODUCT_GRID_COLOUR_DOT_ROW = 'flex min-h-[11px] flex-wrap items-center gap-1.5'

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
