import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { readContentDashboard, readContentFile } from '@/lib/content/readContentOps'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const file = request.nextUrl.searchParams.get('file')
    if (file) {
      const result = await readContentFile(file)
      if (!result.ok) {
        return NextResponse.json({ error: result.error }, { status: 400 })
      }
      return NextResponse.json({ name: result.name, text: result.text })
    }

    const data = await readContentDashboard()
    return NextResponse.json(data)
  } catch (error) {
    console.error('[admin/content]', error)
    return NextResponse.json({ error: 'Failed to load content ops' }, { status: 500 })
  }
}
