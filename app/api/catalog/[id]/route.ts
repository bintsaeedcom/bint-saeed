import { NextResponse } from 'next/server'
import { getMergedProductById } from '@/lib/products/mergeCatalog'

export const dynamic = 'force-dynamic'

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const id = params.id
  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  }
  const product = await getMergedProductById(id)
  if (!product) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ product })
}
