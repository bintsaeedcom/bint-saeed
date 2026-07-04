import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { getAllOverrides, setOverride, clearOverride, type ProductOverride } from '@/lib/products/overridesStore'
import { products } from '@/data/products'
import { accessories } from '@/data/accessories'
import { getStyleSku } from '@/lib/products/sku'
import { getAccessorySku } from '@/lib/accessories/accessorySku'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const overrides = await getAllOverrides()
  const garmentRows = products.map((p) => ({
    id: p.id,
    slug: p.slug,
    sku: getStyleSku(p),
    name: p.name,
    price: p.price,
    category: p.category,
    image: p.images[0] ?? '',
    kind: 'garment' as const,
    override: overrides[p.id] ?? {},
  }))
  const accessoryRows = accessories.map((a) => ({
    id: a.id,
    slug: a.id,
    sku: getAccessorySku(a),
    name: a.name,
    price: a.price,
    category: a.category,
    image: a.images[0] ?? '',
    kind: 'accessory' as const,
    override: {},
  }))
  return NextResponse.json({
    products: [...garmentRows, ...accessoryRows],
  })
}

export async function PUT(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: { productId: string; override: ProductOverride; clear?: boolean }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.productId || !products.some((p) => p.id === body.productId)) {
    return NextResponse.json({ error: 'Unknown product' }, { status: 400 })
  }

  if (body.clear) {
    await clearOverride(body.productId)
    return NextResponse.json({ ok: true })
  }

  const patch: ProductOverride = {}
  if (body.override.name !== undefined) patch.name = body.override.name
  if (body.override.price !== undefined) patch.price = body.override.price
  if (body.override.published !== undefined) patch.published = body.override.published

  await setOverride(body.productId, patch)
  return NextResponse.json({ ok: true })
}
