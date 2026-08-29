import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { testDataForSeoConnection } from '@/lib/search-intelligence/dataforseo/client'
import { checkRateLimit } from '@/lib/search-intelligence/rateLimit'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = checkRateLimit('si-dfs-test-connection')
  if (!rl.ok) {
    return NextResponse.json({ error: 'Rate limit exceeded', retryAfterSec: rl.retryAfterSec }, { status: 429 })
  }

  const result = await testDataForSeoConnection()
  return NextResponse.json({
    ...result,
    endpoint: 'GET /v3/appendix/user_data',
  })
}
