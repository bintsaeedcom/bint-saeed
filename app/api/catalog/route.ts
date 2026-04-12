import { NextResponse } from 'next/server'
import { getMergedProducts } from '@/lib/products/mergeCatalog'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const products = await getMergedProducts()
    return NextResponse.json({ products })
  } catch (e) {
    console.error('catalog GET', e)
    return NextResponse.json({ error: 'Catalog unavailable' }, { status: 500 })
  }
}
