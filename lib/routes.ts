/**
 * Public marketing entry. While coming-soon-only is on, social bios land on `/`.
 * After launch (`NEXT_PUBLIC_COMING_SOON_ONLY` not true), bios land on `/home`.
 */
export const COMING_SOON_PATH =
  process.env.NEXT_PUBLIC_COMING_SOON_ONLY === 'true' ? '/' : '/home'
