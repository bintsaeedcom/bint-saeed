import type { NextRequest } from 'next/server'

export type ReadJsonObjectResult =
  | { ok: true; body: Record<string, unknown> }
  | { ok: false; status: number; error: string }

/**
 * Safely read a JSON object from a request body without throwing.
 * Returns 400 for empty, malformed, or non-object payloads (expected for bots/probes).
 */
export async function readJsonObject(request: NextRequest): Promise<ReadJsonObjectResult> {
  let text = ''
  try {
    text = await request.text()
  } catch {
    return { ok: false, status: 400, error: 'Invalid request.' }
  }

  const trimmed = text.trim()
  if (!trimmed) {
    return { ok: false, status: 400, error: 'Request body required.' }
  }

  try {
    const parsed: unknown = JSON.parse(trimmed)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return { ok: false, status: 400, error: 'Invalid request.' }
    }
    return { ok: true, body: parsed as Record<string, unknown> }
  } catch {
    return { ok: false, status: 400, error: 'Invalid JSON.' }
  }
}
