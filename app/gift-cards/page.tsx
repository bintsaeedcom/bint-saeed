'use client'

import { useMemo, useState } from 'react'
import LocaleLink from '@/components/LocaleLink'
import GiftCardFace from '@/components/GiftCardFace'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useCartStore } from '@/store/cartStore'
import { showAddedToBagToast } from '@/lib/cart/addedToBagToast'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_PAGE_SHELL,
  SITE_CONTENT_TOP_PAD,
} from '@/lib/ui/editorialPageChrome'
import {
  GIFT_CARD_DENOMINATIONS_AED,
  type GiftCardDenominationAed,
  formatGiftCardAmountAed,
  giftCardFaceSrc,
} from '@/lib/giftCards/denominations'
import { getGiftCardPrice } from '@/lib/giftCards/catalogPrices'
import { formatAmountForCurrency } from '@/lib/pricing'
import { pdpCtaPrimary } from '@/lib/ui/ctaClasses'
import { commerceUi } from '@/lib/i18n/commerceUi'

export default function GiftCardsPage() {
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const { currency } = useCurrency()
  const addItem = useCartStore((s) => s.addItem)
  const [selected, setSelected] = useState<GiftCardDenominationAed>(500)
  const [sendToRecipient, setSendToRecipient] = useState(true)
  const [recipientName, setRecipientName] = useState('')
  const [recipientEmail, setRecipientEmail] = useState('')
  const [personalMessage, setPersonalMessage] = useState('')
  const [adding, setAdding] = useState(false)

  const homeLabel = language === 'ar' ? 'الرئيسية' : 'Home'
  const shopLabel = language === 'ar' ? 'تسوقي' : 'Shop'
  const title = language === 'ar' ? 'بطاقات الهدايا' : 'Gift Cards'
  const eyebrow = language === 'ar' ? 'الإهداء' : 'Gifting'
  const intro =
    language === 'ar'
      ? 'للمرأة التي تعرفينها، بحرية أن تختار لنفسها. اختاري بطاقة هدايا من بنت سعيد واتركي لها اكتشاف القطعة التي تشعرها بأنها لها.'
      : 'For the woman you know, with the freedom to choose for herself. Select a Bint Saeed Gift Card and let her discover the piece that feels like hers.'
  const selectedLabel = language === 'ar' ? 'القيمة المختارة' : 'Selected value'
  const tagline =
    language === 'ar'
      ? 'هدية اختيرت لأجلها. والخيار الأخير بين يديها.'
      : 'A gift chosen for her. The final choice left to her.'
  const chooseLabel = language === 'ar' ? 'اختاري القيمة' : 'Choose a value'
  const aedNote =
    language === 'ar'
      ? 'البطاقات مقوّمة بالدرهم الإماراتي. يظهر السعر بعملتك المختارة عند الدفع.'
      : 'Cards are denominated in AED. Prices follow your selected currency at checkout.'
  const validityNote =
    language === 'ar'
      ? 'صالحة لسنة ميلادية واحدة من تاريخ الشراء. أي رصيد غير مستخدم بعد انتهاء الصلاحية يُوجَّه للأعمال الخيرية عبر Giving Forward.'
      : 'Valid for one Gregorian year from purchase. Any unused balance after expiry is donated to charity through Giving Forward.'
  const sendLabel =
    language === 'ar' ? 'أرسلي الرمز مباشرة إلى المستلمة' : 'Send the code directly to the recipient'
  const recipientNameLabel = language === 'ar' ? 'اسم المستلمة' : 'Recipient name'
  const recipientEmailLabel = language === 'ar' ? 'بريد المستلمة' : 'Recipient email'
  const messageLabel = language === 'ar' ? 'رسالة شخصية' : 'Personal message'
  const messageHint =
    language === 'ar'
      ? 'تصل للمستلمة مع الرمز، وتظهر نسخة منها في تأكيد شرائك.'
      : 'Delivered with her code. A copy appears on your purchase confirmation.'
  const fieldClass =
    'mt-1.5 w-full border border-brand-stone/40 bg-brand-pageCanvas px-4 py-3 font-montserrat text-sm text-brand-darkRed outline-none placeholder:text-brand-clayRed/35 focus:border-brand-darkRed/40'
  const recipientRequiredNote =
    language === 'ar'
      ? 'أدخلي بريد المستلمة لإرسال الرمز.'
      : 'Enter the recipient email to send the code.'

  const selectedDisplay = useMemo(() => {
    const amount = getGiftCardPrice(selected, currency.code)
    return formatAmountForCurrency(amount, currency.code)
  }, [selected, currency.code])

  function onAddToBag() {
    if (sendToRecipient && !recipientEmail.trim()) {
      window.alert(recipientRequiredNote)
      return
    }
    setAdding(true)
    try {
      const priceAed = selected
      const name =
        language === 'ar'
          ? `بطاقة هدايا بنت سعيد · ${formatGiftCardAmountAed(selected)}`
          : `Bint Saeed Gift Card · ${formatGiftCardAmountAed(selected)}`

      addItem({
        id: `gift-card-${selected}`,
        productUrl: '/gift-cards',
        name,
        price: priceAed,
        image: giftCardFaceSrc(selected),
        size: 'digital',
        color: sendToRecipient
          ? (recipientEmail.trim().toLowerCase() || 'recipient')
          : 'self',
        quantity: 1,
        sku: `BS-GC-${selected}`,
        notes: personalMessage.trim() || undefined,
        customisationMessage: personalMessage.trim() || undefined,
        giftCard: {
          denominationAed: selected,
          sendToRecipient,
          recipientName: recipientName.trim() || undefined,
          recipientEmail: sendToRecipient ? recipientEmail.trim() : undefined,
          personalMessage: personalMessage.trim() || undefined,
        },
      })
      showAddedToBagToast(isRTL)
    } finally {
      setAdding(false)
    }
  }

  return (
    <div className={`${EDITORIAL_PAGE_SHELL} min-h-screen bg-brand-pageCanvas ${SITE_CONTENT_TOP_PAD} ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className={`${EDITORIAL_PAGE_CONTAINER} pb-20 md:pb-28`}>
        <AppPageWayfinding
          rtl={isRTL}
          className="mb-3"
          segments={[
            { label: homeLabel, href: '/home' },
            { label: shopLabel, href: '/shop' },
            { label: title },
          ]}
        />

        <header className={`mt-6 max-w-2xl md:mt-8 ${isRTL ? 'ms-auto text-right' : ''}`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-brand-dustyBlue">{eyebrow}</p>
          <h1 className="mt-3 font-rozha text-[clamp(2rem,4vw,3rem)] leading-tight text-brand-darkRed">{title}</h1>
          <p className="mt-4 font-montserrat text-sm leading-relaxed tracking-wide text-brand-clayRed/80">{intro}</p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-14">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <GiftCardFace amountAed={selected} priority className="shadow-[0_28px_64px_-28px_rgba(26,2,16,0.55)]" />
            <p className={`mt-5 font-montserrat text-[11px] uppercase tracking-[0.18em] text-brand-clayRed/70 ${isRTL ? 'text-right' : ''}`}>
              {selectedLabel}:{' '}
              <span className="text-brand-darkRed">
                {formatGiftCardAmountAed(selected)}
                {currency.code !== 'AED' ? ` · ${selectedDisplay}` : ''}
              </span>
            </p>
          </div>

          <div className={isRTL ? 'text-right' : ''}>
            <p className="font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-dustyBlue">
              {chooseLabel}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
              {GIFT_CARD_DENOMINATIONS_AED.map((amount) => {
                const active = amount === selected
                const display = formatAmountForCurrency(getGiftCardPrice(amount, currency.code), currency.code)
                return (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setSelected(amount)}
                    className={`overflow-hidden rounded-[8px] border text-left transition-all duration-300 ${
                      active
                        ? 'border-brand-darkRed/50 shadow-[0_16px_40px_-24px_rgba(26,2,16,0.45)] ring-1 ring-brand-darkRed/25'
                        : 'border-brand-stone/40 opacity-90 hover:border-brand-darkRed/30 hover:opacity-100'
                    } ${isRTL ? 'text-right' : ''}`}
                    data-cursor-hover
                    aria-pressed={active}
                  >
                    <GiftCardFace amountAed={amount} compact className="rounded-none" />
                    <span className="block bg-white px-3 py-2.5 font-montserrat text-[11px] uppercase tracking-[0.12em] text-brand-darkRed">
                      {display}
                    </span>
                  </button>
                )
              })}
            </div>

            <p className="mt-8 max-w-md font-montserrat text-[13px] leading-relaxed text-brand-clayRed/75">{tagline}</p>
            <p className="mt-3 max-w-md font-montserrat text-[11px] leading-relaxed tracking-wide text-brand-clayRed/55">{aedNote}</p>
            <p className="mt-2 max-w-md font-montserrat text-[11px] leading-relaxed tracking-wide text-brand-clayRed/55">
              {validityNote}{' '}
              <LocaleLink href="/terms" className="underline underline-offset-2 hover:text-brand-darkRed">
                {language === 'ar' ? 'الشروط' : 'Terms'}
              </LocaleLink>
            </p>

            <div className="mt-8 max-w-md space-y-4 border-t border-brand-stone/25 pt-6">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={sendToRecipient}
                  onChange={(e) => setSendToRecipient(e.target.checked)}
                  className="mt-1 accent-brand-darkRed"
                />
                <span className="font-montserrat text-[12px] leading-relaxed text-brand-darkRed">{sendLabel}</span>
              </label>

              {sendToRecipient ? (
                <div className="space-y-3">
                  <label className={`block font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-dustyBlue ${isRTL ? 'text-right' : ''}`}>
                    {recipientNameLabel}
                    <input
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      className={fieldClass}
                      autoComplete="name"
                    />
                  </label>
                  <label className={`block font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-dustyBlue ${isRTL ? 'text-right' : ''}`}>
                    {recipientEmailLabel}
                    <input
                      type="email"
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      className={fieldClass}
                      autoComplete="email"
                      required={sendToRecipient}
                    />
                  </label>
                  <label className={`block font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-dustyBlue ${isRTL ? 'text-right' : ''}`}>
                    {messageLabel}
                    <textarea
                      value={personalMessage}
                      onChange={(e) => setPersonalMessage(e.target.value.slice(0, 500))}
                      rows={4}
                      maxLength={500}
                      className={`${fieldClass} resize-y`}
                      placeholder={
                        language === 'ar'
                          ? 'اكتبي رسالتك إليها…'
                          : 'Write a few words for her…'
                      }
                    />
                    <span className="mt-1.5 block font-montserrat text-[11px] normal-case tracking-normal text-brand-clayRed/55">
                      {messageHint}
                    </span>
                  </label>
                </div>
              ) : null}
            </div>

            <div className={`mt-6 ${isRTL ? 'flex justify-end' : ''}`}>
              <button
                type="button"
                onClick={onAddToBag}
                disabled={adding}
                className={`w-full ${pdpCtaPrimary} disabled:opacity-60`}
                data-cursor-hover
                data-analytics-event="click_gift_cards_add_to_bag"
                data-analytics-section="gift-cards"
              >
                {ui.quickBuy.addToBag}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
