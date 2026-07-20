import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { readPrDashboard } from '@/lib/pr/readPrOps'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await readPrDashboard()
    return NextResponse.json(data)
  } catch (error) {
    console.error('[admin/pr]', error)
    return NextResponse.json({ error: 'Failed to load PR ops' }, { status: 500 })
  }
}
