import type { Product } from '@/data/products'
import { getPdpSizeOptions, categoryNeedsLengthCmDropdown } from '@/lib/shopProductOptions'

export type ProductPdpContent = {
  productDetails: string[]
  fitAndSizeDetails: string[]
}

const V_NECK_CAFTAN_CONTENT: ProductPdpContent = {
  productDetails: [
    'Deep Maroon crepe chiffon kaftan with fluid, draped silhouette.',
    'V-neckline for a clean and elongated shape.',
    'Lightweight outer layer designed to move and flow with the body.',
    'Attached scarf detail draped from the left shoulder.',
    'Open-cut sleeves allowing subtle visibility of the arms.',
    'Can be adjusted using hidden internal ties to create a defined, cape-like shape.',
    'Internal ties can also be wrapped toward the back to softly define the waist.',
    'Layered construction with an attached inner dress for coverage.',
    'Length: 136 cm / 53.5 inches.',
    'Colour: Deep Maroon.',
    'Composition — Outer: Crepe Chiffon (100% Polyester).',
    'Composition — Inner: 100% Polyester.',
    'Care: Professional dry clean.',
    'Detail: Signature Bint Saeed gold emblem.',
    'Origin: Made in Abu Dhabi, United Arab Emirates.',
  ],
  fitAndSizeDetails: [
    'Model height: 155 cm / 61 inches.',
    'Model wears size XS.',
    'Designed for a fluid, relaxed fit.',
    'Adjustable silhouette through internal tie construction.',
  ],
}

/**
 * PDP copy source of truth.
 * Add per-product copy blocks here as you finalize each item.
 */
export const productPdpContentById: Partial<Record<string, ProductPdpContent>> = {
  'bs-002': V_NECK_CAFTAN_CONTENT,
}

export function getProductPdpContent(product: Product): ProductPdpContent {
  const configured = productPdpContentById[product.id]
  if (configured) return configured

  const sizeOptions = getPdpSizeOptions(product.category, product.sizes)
  const needsLength = categoryNeedsLengthCmDropdown(product.category)

  return {
    productDetails: [
      product.description,
      product.fabric,
      'Hand-finished in small atelier batches for quality and consistency.',
      needsLength
        ? 'Custom length can be requested after size selection; final confirmation is shared before production.'
        : 'Standard silhouette measurements are listed in the size section for quick fit reference.',
    ],
    fitAndSizeDetails:
      product.category === 'Kaftans'
        ? [
            `Available sizes: ${sizeOptions.join(', ')}`,
            'Designed for an easy, fluid fit through the body and sleeve.',
            'If you are between sizes, choose the larger size for additional ease.',
          ]
        : ([
            `Available sizes: ${sizeOptions.join(', ')}`,
            'Fits true to our chapter sizing; use the size chart to confirm your best fit.',
            'If you are between sizes, choose the larger size for a more relaxed drape.',
          ].filter(Boolean) as string[]),
  }
}
