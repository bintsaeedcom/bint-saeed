import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { buildContentBrief } from '@/lib/search-intelligence/briefs'
import { saveBrief, listBriefs } from '@/lib/search-intelligence/store'
import type { KeywordRecord } from '@/lib/search-intelligence/types'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const briefs = await listBriefs(100)
  return NextResponse.json({ briefs })
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: { opportunity?: KeywordRecord }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.opportunity?.keyword) {
    return NextResponse.json({ error: 'opportunity required' }, { status: 400 })
  }

  const brief = buildContentBrief(body.opportunity)
  const saved = await saveBrief(brief)
  return NextResponse.json({ brief: saved })
}
