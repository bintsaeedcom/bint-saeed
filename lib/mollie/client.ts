import createMollieClient, { type MollieClient } from '@mollie/api-client'
import { getMollieApiKey } from './config'

let client: MollieClient | null = null

export function getMollieClient(): MollieClient {
  const apiKey = getMollieApiKey()
  if (!apiKey) {
    throw new Error('Mollie API key is not configured')
  }
  if (!client) {
    client = createMollieClient({ apiKey })
  }
  return client
}
