import type { DiscoveryProvider } from '@/lib/search-intelligence/discovery/types'
import { dataForSeoDiscoveryProvider } from '@/lib/search-intelligence/dataforseo/provider'

export function getDiscoveryProviders(): DiscoveryProvider[] {
  return [dataForSeoDiscoveryProvider]
}

export function getDataForSeoProvider(): DiscoveryProvider {
  return dataForSeoDiscoveryProvider
}
