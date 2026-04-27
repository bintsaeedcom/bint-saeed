'use client'

import LocaleLink from '@/components/LocaleLink'
import { FiX } from 'react-icons/fi'
import SubscribeForm from './SubscribeForm'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { useEffect, useState } from 'react'
import { validateSubscriberEmail } from '@/lib/validateSubscriberEmail'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t, isRTL } = useLanguage()
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false)
  const [quickEmail, setQuickEmail] = useState('')
  const [quickEmailError, setQuickEmailError] = useState('')

  useEffect(() => {
    if (!isSubscribeOpen) return
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsSubscribeOpen(false)
    }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [isSubscribeOpen])

  const openSubscribeModal = () => {
    const check = validateSubscriberEmail(quickEmail)
    if (quickEmail.trim() && !check.valid) {
      setQuickEmailError(check.message)
      return
    }
    setQuickEmailError('')
    setIsSubscribeOpen(true)
  }

  const footerLinks = {
    shop: [
      { label: t.footer.newArrivals, href: '/shop' },
      { label: t.footer.collection, href: '/shop' },
      { label: t.footer.accessories, href: '/accessories' },
    ],
    about: [
      { label: t.footer.ourStory, href: '/about' },
      { label: t.footer.craftsmanship, href: '/craftsmanship' },
      { label: t.footer.careers, href: '/careers' },
    ],
    help: [
      { label: t.footer.contactUs, href: '/contact' },
      { label: t.footer.shippingReturns, href: '/shipment-return-policy' },
      { label: t.footer.sizeGuide, href: '/size-guide' },
      { label: t.footer.faq, href: '/faq' },
    ],
  }

  return (
    <footer className="section-full w-full overflow-hidden">
      <section className="section-full bg-[#6a8090] px-10 py-[60px] text-center max-md:px-4">
        <div className="section-inner">
          <div className="mx-auto max-w-2xl">
            <p className="mb-2 font-montserrat text-[10px] uppercase tracking-[0.34em] text-[#0e1e30]/70">
              {isRTL ? 'القائمة البريدية' : 'Email List'}
            </p>
            <h3 className="font-rozha text-2xl text-[#e8d8c8] md:text-3xl">
              {isRTL ? 'اشتركي للحصول على الإصدارات الجديدة أولاً' : 'Be first to know about new drops'}
            </h3>
            <p className="mt-2 font-montserrat text-sm tracking-wide text-[#dce6f0]/85">
              {isRTL
                ? 'اشتركي لتصلكم الإصدارات الجديدة، الدعوات الخاصة، وتحديثات العلامة.'
                : 'Subscribe for new collection launches, private invites, and brand updates.'}
            </p>
          </div>
          <div className="mx-auto mt-6 flex max-w-[520px] flex-col items-center gap-3 md:flex-row">
            <div className="w-full">
              <input
                type="email"
                value={quickEmail}
                onChange={(e) => {
                  setQuickEmail(e.target.value)
                  if (quickEmailError) setQuickEmailError('')
                }}
                placeholder={isRTL ? 'البريد الإلكتروني' : 'Email Address'}
                className="h-11 w-full rounded-[3px] border border-[#5a7080] bg-[#dce6f0] px-4 font-montserrat text-[13px] tracking-wide text-[#0e1e30] placeholder-[#0e1e30]/50 focus:outline-none"
              />
              {quickEmailError ? (
                <p className="mt-1 text-left text-xs font-montserrat tracking-wide text-[#1a0210]">{quickEmailError}</p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={openSubscribeModal}
              className="h-11 shrink-0 rounded-[3px] bg-[#1a0210] px-6 font-montserrat text-[12px] uppercase tracking-[0.08em] text-[#e8d8c8]"
              data-cursor-hover
            >
              {isRTL ? 'اشتراك' : 'Subscribe'}
            </button>
          </div>
        </div>
      </section>

      <div className="section-full bg-[#1a0210] px-10 pb-0 pt-[60px] max-md:px-4 max-md:pt-10">
        <div className={`section-inner grid grid-cols-4 gap-8 max-md:grid-cols-1 ${isRTL ? 'text-right' : ''}`}>
          <div>
            <p className="mb-3 font-rozha text-[16px] text-[#e8d8c8]">Bint Saeed</p>
            <p className="font-montserrat text-[12px] leading-[1.8] text-[#4a2030]">{t.footer.brandDescription}</p>
            <p className="mt-2 font-montserrat text-[12px] leading-[1.8] text-[#4a2030]">Abu Dhabi, United Arab Emirates</p>
            <p className="mt-3 font-montserrat text-[11px] text-[#3a1828]">
              {isRTL ? 'يتم تخصيص 20 درهم من كل قطعة للأعمال الخيرية' : '20 AED from each piece is dedicated to charity'}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.15em] text-[#4a2030]">{t.footer.shop}</h4>
            <ul>
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <LocaleLink
                    href={link.href}
                    className="font-montserrat text-[13px] leading-[2] text-[#5a3040] transition-colors duration-200 hover:text-[#e8d8c8]"
                    data-cursor-hover
                    data-analytics-event={link.href === '/shop' ? 'click_footer_collection' : undefined}
                    data-analytics-section="footer-shop-links"
                  >
                    {link.label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.15em] text-[#4a2030]">{t.footer.about}</h4>
            <ul>
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <LocaleLink
                    href={link.href}
                    className="font-montserrat text-[13px] leading-[2] text-[#5a3040] transition-colors duration-200 hover:text-[#e8d8c8]"
                    data-cursor-hover
                  >
                    {link.label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.15em] text-[#4a2030]">{t.footer.help}</h4>
            <ul>
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <LocaleLink
                    href={link.href}
                    className="font-montserrat text-[13px] leading-[2] text-[#5a3040] transition-colors duration-200 hover:text-[#e8d8c8]"
                    data-cursor-hover
                  >
                    {link.label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="section-full bg-[#722030] px-10 py-4 max-md:px-4">
        <div className={`section-inner flex items-center justify-between gap-3 max-md:flex-col ${isRTL ? 'max-md:text-right' : ''}`}>
          <p className="font-montserrat text-[11px] text-[#e8d8c8]">© {currentYear} Bint Saeed. {t.footer.allRightsReserved}</p>
          <div className="flex items-center gap-3 font-montserrat text-[11px] text-[rgba(232,216,200,0.6)]">
            <LocaleLink href="/privacy-policy" className="transition-colors hover:text-[#e8d8c8]" data-cursor-hover>
              {t.footer.privacy}
            </LocaleLink>
            <span>·</span>
            <LocaleLink href="/terms" className="transition-colors hover:text-[#e8d8c8]" data-cursor-hover>
              {t.footer.terms}
            </LocaleLink>
            <span>·</span>
            <LocaleLink href="/cookie-policy" className="transition-colors hover:text-[#e8d8c8]" data-cursor-hover>
              {t.footer.cookies}
            </LocaleLink>
          </div>
        </div>
      </div>

      {isSubscribeOpen ? (
        <div className="fixed inset-0 z-[120]">
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            onClick={() => setIsSubscribeOpen(false)}
            aria-label={isRTL ? 'إغلاق نافذة الاشتراك' : 'Close subscribe modal'}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-[740px] overflow-y-auto bg-[#f6f3ef] p-6 shadow-[-24px_0_70px_rgba(8,2,8,0.35)] md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-montserrat text-2xl uppercase tracking-[0.14em] text-brand-darkRed">
                {isRTL ? 'النشرة البريدية' : 'Newsletter'}
              </h3>
              <button
                type="button"
                onClick={() => setIsSubscribeOpen(false)}
                className="rounded-full border border-brand-darkRed/15 p-2 text-brand-darkRed/75 transition-colors hover:bg-brand-darkRed/5 hover:text-brand-darkRed"
                data-cursor-hover
                aria-label={isRTL ? 'إغلاق' : 'Close'}
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>
            <p className="mb-6 font-montserrat text-sm leading-relaxed tracking-wide text-brand-darkRed/75">
              {isRTL
                ? 'يرجى إدخال البيانات التالية للاشتراك في القائمة البريدية.'
                : 'Please provide the information below to subscribe to our newsletter.'}
            </p>
            <SubscribeForm variant="dark" initialEmail={quickEmail} />
          </div>
        </div>
      ) : null}
    </footer>
  )
}
