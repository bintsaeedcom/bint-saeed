import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { ensureDefaultSeedCollections } from '@/lib/search-intelligence/seeds/collections'
import { listSeedCollections, saveSeedCollections } from '@/lib/search-intelligence/store'
import type { SeedCollection } from '@/lib/search-intelligence/types'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const collections = await ensureDefaultSeedCollections()
  return NextResponse.json({ collections })
}

export async function PUT(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: { collections?: SeedCollection[] }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!Array.isArray(body.collections)) {
    return NextResponse.json({ error: 'collections array required' }, { status: 400 })
  }

  const now = new Date().toISOString()
  const sanitized: SeedCollection[] = body.collections.map((c) => ({
    id: c.id || randomUUID(),
    name: String(c.name ?? '').trim() || 'Untitled',
    seeds: Array.isArray(c.seeds) ? c.seeds.map((s) => String(s).trim()).filter(Boolean) : [],
    active: c.active !== false,
    createdAt: c.createdAt || now,
    updatedAt: now,
  }))

  await saveSeedCollections(sanitized)
  return NextResponse.json({ collections: sanitized })
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  await ensureDefaultSeedCollections()
  const collections = await listSeedCollections()
  return NextResponse.json({ collections, reset: false })
}
