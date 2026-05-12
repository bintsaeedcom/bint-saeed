import { NextResponse } from 'next/server'
import { validateIndexNowKey } from '@/lib/indexnow'

export const runtime = 'nodejs'

/**
 * IndexNow key proof: `GET https://{site}/{INDEXNOW_KEY}.txt` → plain-text body = key (single line).
 * Only responds when the path matches the configured key file; other `*.txt` paths fall through to 404.
 */
export async function GET(
  _request: Request,
  context: { params: { filename: string } },
): Promise<NextResponse> {
  const { filename } = context.params
  if (!filename.endsWith('.txt')) {
    return new NextResponse('Not Found', { status: 404 })
  }

  const key = process.env.INDEXNOW_KEY ?? ''
  if (!validateIndexNowKey(key) || filename !== `${key}.txt`) {
    return new NextResponse('Not Found', { status: 404 })
  }

  return new NextResponse(key, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
