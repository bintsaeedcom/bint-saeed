import type { AppLocale } from '@/lib/i18n/routing'

export type GarmentStockUi = {
  soldOut: string
  lowStock: string
}

const GARMENT_STOCK_UI: Record<AppLocale, GarmentStockUi> = {
  en: { soldOut: 'Sold out', lowStock: 'Low stock' },
  ar: { soldOut: 'نفدت الكمية', lowStock: 'كمية محدودة' },
  fr: { soldOut: 'Épuisé', lowStock: 'Dernières pièces' },
  it: { soldOut: 'Esaurito', lowStock: 'Ultimi pezzi' },
  es: { soldOut: 'Agotado', lowStock: 'Últimas unidades' },
  ru: { soldOut: 'Распродано', lowStock: 'Последние экземпляры' },
  zh: { soldOut: '已售罄', lowStock: '仅余少量' },
  de: { soldOut: 'Ausverkauft', lowStock: 'Nur noch wenige Stücke' },
  nl: { soldOut: 'Uitverkocht', lowStock: 'Nog maar enkele stuks' },
  pt: { soldOut: 'Esgotado', lowStock: 'Últimas unidades' },
  id: { soldOut: 'Habis terjual', lowStock: 'Stok terbatas' },
  ms: { soldOut: 'Habis dijual', lowStock: 'Stok terhad' },
}

export function garmentStockUi(locale: AppLocale): GarmentStockUi {
  return GARMENT_STOCK_UI[locale] ?? GARMENT_STOCK_UI.en
}
