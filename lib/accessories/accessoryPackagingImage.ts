import type { Accessory } from '@/data/accessories'
import { ACCESSORY_IMAGE_SIGNATURE_JEWELLERY_PACKAGING } from '@/data/accessories'
import type { AppLocale } from '@/lib/i18n/routing'
import { withBrandAlt } from '@/lib/products/imageAlt'

/** Categories that show signature jewellery packaging on the PDP gallery. */
const PACKAGING_PDP_CATEGORIES: ReadonlySet<Accessory['category']> = new Set([
  'necklaces',
  'earrings',
  'bag-strands',
  'phone-strands',
  'signature-strands',
])

export const ACCESSORY_PACKAGING_IMAGE = ACCESSORY_IMAGE_SIGNATURE_JEWELLERY_PACKAGING

export function isAccessoryPackagingImage(src: string): boolean {
  return src === ACCESSORY_PACKAGING_IMAGE || src.includes('signature-jewellery-packaging')
}

export function accessoryShowsPackagingOnPdp(accessory: Accessory): boolean {
  return PACKAGING_PDP_CATEGORIES.has(accessory.category)
}

/** Shared packaging alt — clarifies gift-box presentation for clients. */
export function getAccessoryPackagingImageAlt(locale: AppLocale = 'en'): string {
  const body =
    locale === 'ar'
      ? 'تغليف مجوهرات Bint Saeed أبوظبي التوقيعي — علب مجوهرات سوداء مطفية مع سحب قماشي'
      : 'Bint Saeed Abu Dhabi signature jewellery packaging — matte black gift boxes with drawer presentation'
  return withBrandAlt(body, locale)
}

/** Append packaging once at the end of a PDP gallery (never replaces existing shots). */
export function appendAccessoryPackagingImage(images: string[], accessory: Accessory): string[] {
  if (!accessoryShowsPackagingOnPdp(accessory)) return images
  if (images.includes(ACCESSORY_PACKAGING_IMAGE)) return images
  return [...images, ACCESSORY_PACKAGING_IMAGE]
}
