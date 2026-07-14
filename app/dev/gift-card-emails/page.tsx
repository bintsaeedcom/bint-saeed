import {
  buildGiftCardBuyerEmailHtml,
  buildGiftCardRecipientEmailHtml,
  type GiftCardEmailPayload,
} from '@/lib/giftCards/giftCardEmails'
import { giftCardExpiryFrom } from '@/lib/giftCards/validity'
import { GIFT_CARD_FACE_REVISION } from '@/lib/giftCards/denominations'

export const dynamic = 'force-dynamic'

function samplePayload(origin: string): GiftCardEmailPayload {
  return {
    code: 'BS-GC-H4ND-7GOLD',
    denominationAed: 1000,
    amountPaid: 1000,
    currencyPaid: 'AED',
    purchaserName: 'Layla Al Mansoori',
    purchaserEmail: 'layla@example.com',
    recipientName: 'Noor',
    recipientEmail: 'noor@example.com',
    personalMessage:
      'For the woman you are becoming — choose whatever feels most like home. With love, Layla',
    expiresAt: giftCardExpiryFrom(new Date()),
    orderId: 'ORD-GC-DEMO',
    cardImageUrl: `${origin}/gift-cards/bint-saeed-gift-card-1000-aed-${GIFT_CARD_FACE_REVISION}.webp`,
  }
}

/**
 * Aesthetic preview of both gift-card Resend emails (buyer + recipient).
 * Dev / QA only — not linked from main nav.
 */
export default function GiftCardEmailPreviewPage({
  searchParams,
}: {
  searchParams?: { view?: string }
}) {
  const origin =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'http://localhost:3002'
  const payload = samplePayload(origin)
  const view = searchParams?.view === 'recipient' ? 'recipient' : 'buyer'
  const html =
    view === 'recipient'
      ? buildGiftCardRecipientEmailHtml(payload)
      : buildGiftCardBuyerEmailHtml(payload)

  return (
    <div className="min-h-screen bg-[#f3eee8]">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-5">
        <p className="font-montserrat text-[10px] uppercase tracking-[0.22em] text-[#8a7a70]">
          Gift card email preview · Resend templates
        </p>
        <div className="flex gap-2">
          <a
            href="/dev/gift-card-emails?view=buyer"
            className={`font-montserrat text-[10px] uppercase tracking-[0.18em] px-3 py-2 border ${
              view === 'buyer'
                ? 'border-[#1a0210] text-[#1a0210]'
                : 'border-[#e4d9cf] text-[#8a7a70]'
            }`}
          >
            Buyer confirmation
          </a>
          <a
            href="/dev/gift-card-emails?view=recipient"
            className={`font-montserrat text-[10px] uppercase tracking-[0.18em] px-3 py-2 border ${
              view === 'recipient'
                ? 'border-[#1a0210] text-[#1a0210]'
                : 'border-[#e4d9cf] text-[#8a7a70]'
            }`}
          >
            Recipient gift
          </a>
        </div>
      </div>
      <iframe
        title={view === 'recipient' ? 'Recipient gift email' : 'Buyer confirmation email'}
        srcDoc={html}
        className="mx-auto mb-10 block h-[cal(100vh-7rem)] min-h-[900px] w-full max-w-[640px] border border-[#e4d9cf] bg-white shadow-sm"
        style={{ height: 'calc(100vh - 7rem)', minHeight: 920 }}
      />
    </div>
  )
}
