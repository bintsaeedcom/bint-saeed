'use client'

import Image from 'next/image'
import {
  type GiftCardDenominationAed,
  formatGiftCardAmountAed,
  giftCardFaceSrc,
} from '@/lib/giftCards/denominations'

type Props = {
  amountAed: GiftCardDenominationAed
  className?: string
  priority?: boolean
  /** Smaller “GIFT CARD” label for picker thumbnails. */
  compact?: boolean
}

/**
 * Gift card face — precomposed texture + centered monogram + amount.
 * “GIFT CARD” is live `font-rozha` (same display face as site titles).
 */
export default function GiftCardFace({
  amountAed,
  className = '',
  priority = false,
  compact = false,
}: Props) {
  return (
    <div className={`relative aspect-[1600/1091] overflow-hidden rounded-[10px] bg-black ${className}`}>
      <Image
        src={giftCardFaceSrc(amountAed)}
        alt={`Bint Saeed gift card — ${formatGiftCardAmountAed(amountAed)}`}
        fill
        sizes={compact ? '(max-width: 768px) 45vw, 200px' : '(max-width: 768px) 92vw, 420px'}
        className="object-cover"
        priority={priority}
      />
      <p
        className={
          compact
            ? 'pointer-events-none absolute inset-x-0 top-[11%] text-center font-rozha text-[clamp(0.55rem,2.4vw,0.85rem)] leading-none tracking-[0.06em] text-[#ecd094]'
            : 'pointer-events-none absolute inset-x-0 top-[12%] text-center font-rozha text-[clamp(1.05rem,4.6vw,2.35rem)] leading-none tracking-[0.04em] text-[#ecd094]'
        }
        aria-hidden
      >
        GIFT CARD
      </p>
    </div>
  )
}
