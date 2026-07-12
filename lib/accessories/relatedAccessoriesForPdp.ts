import { accessories, type Accessory } from '@/data/accessories'
import { getNecklaceEarringPdpPack } from '@/lib/accessories/necklaceEarringPdpSeo'
import { getStrandPdpPack } from '@/lib/accessories/strandPdpSeo'

/** Related accessories for PDP “pairs with” rail (mirrors JSON-LD pairing rules). */
export function relatedAccessoriesForPdp(accessory: Accessory): Accessory[] {
  const strandPack = getStrandPdpPack(accessory.id)
  if (strandPack) {
    return [strandPack.pairing.necklaceId, strandPack.pairing.earringsId]
      .map((id) => accessories.find((a) => a.id === id))
      .filter((a): a is Accessory => Boolean(a))
  }

  const pack = getNecklaceEarringPdpPack(accessory.id)
  if (!pack?.relatedAccessoryIds?.length) return []

  return pack.relatedAccessoryIds
    .map((id) => accessories.find((a) => a.id === id))
    .filter((a): a is Accessory => Boolean(a))
    .slice(0, 3)
}
