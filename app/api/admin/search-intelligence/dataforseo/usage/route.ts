import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import {
  dailyRequestLimit,
  isDataForSeoConfigured,
  maxRequestsPerRun,
} from '@/lib/search-intelligence/dataforseo/config'
import { getDataForSeoUsage } from '@/lib/search-intelligence/dataforseo/usage'
import { getDataForSeoProvider } from '@/lib/search-intelligence/discovery/registry'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const sessionId =
    request.nextUrl.searchParams.get('sessionId')?.trim() ||
    request.headers.get('x-si-session') ||
    'si-default'

  const connected = isDataForSeoConfigured()
  const usage = await getDataForSeoUsage(
    sessionId,
    { dailyLimit: dailyRequestLimit(), maxPerRun: maxRequestsPerRun() },
    connected,
  )

  const provider = getDataForSeoProvider().status()

  return NextResponse.json({
    provider,
    usage,
  })
}
