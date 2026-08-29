import { DEFAULT_SEED_COLLECTIONS } from '@/lib/search-intelligence/seeds/defaultCollections'
import type { SeedCollection } from '@/lib/search-intelligence/types'
import { listSeedCollections, saveSeedCollections } from '@/lib/search-intelligence/store'

export async function ensureDefaultSeedCollections(): Promise<SeedCollection[]> {
  const existing = await listSeedCollections()
  if (existing.length) return existing
  const now = new Date().toISOString()
  const seeded: SeedCollection[] = DEFAULT_SEED_COLLECTIONS.map((c, i) => ({
    id: `seed-${i}-${c.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: c.name,
    seeds: c.seeds,
    active: true,
    createdAt: now,
    updatedAt: now,
  }))
  await saveSeedCollections(seeded)
  return seeded
}
