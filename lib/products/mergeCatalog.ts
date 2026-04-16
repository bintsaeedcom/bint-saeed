import { products as staticProducts, type Product } from '@/data/products'
import { resolveProductIdentifier } from '@/lib/products/links'
import type { ProductOverride } from './overridesStore'
import { getAllOverrides } from './overridesStore'

export function mergeProducts(overrides: Record<string, ProductOverride>): Product[] {
  return staticProducts
    .map((p) => {
      const o = overrides[p.id]
      if (o?.published === false) return null
      if (!o || Object.keys(o).length === 0) return p
      return {
        ...p,
        ...(o.name != null && o.name.trim() !== '' ? { name: o.name.trim() } : {}),
        ...(typeof o.price === 'number' && o.price >= 0 ? { price: o.price } : {}),
      }
    })
    .filter((p): p is Product => p != null)
}

export async function getMergedProducts(): Promise<Product[]> {
  const o = await getAllOverrides()
  return mergeProducts(o)
}

export async function getMergedProductById(id: string): Promise<Product | null> {
  const list = await getMergedProducts()
  return list.find((p) => p.id === id) ?? null
}

export async function getMergedProductByIdentifier(identifier: string): Promise<Product | null> {
  const list = await getMergedProducts()
  return resolveProductIdentifier(list, identifier)
}
