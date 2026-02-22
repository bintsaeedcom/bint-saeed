'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function TermsPage() {
  const { t, isRTL } = useLanguage()
  
  return (
    <div className={`min-h-screen pt-32 pb-20 relative ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Subtle background effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-stone/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-dustyBlue/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-brand-rose/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className={`inline-flex items-center gap-2 font-roboto text-sm uppercase tracking-[0.15em] text-brand-clayRed hover:text-brand-dustyBlue transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            <FiArrowLeft className={`w-4 h-4 group-hover:-translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
            {t.shop.backToHome}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-rozha text-5xl md:text-6xl text-brand-darkRed mb-4">
            Terms & Conditions
          </h1>
          <p className="font-roboto text-brand-clayRed tracking-wide">
            Last updated: January 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white border border-brand-stone/20 shadow-lg rounded-2xl p-8 md:p-12"
        >
          <div className="prose prose-lg max-w-none">
            <div className={`space-y-8 font-roboto text-brand-clayRed tracking-wide leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  1. Agreement to Terms
                </h2>
                <p>
                  By accessing and using the Bint Saeed website and services, you agree to be bound by these Terms and Conditions. These terms are governed by the laws of the United Arab Emirates.
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  2. Products and Pricing
                </h2>
                <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li>All prices are displayed in UAE Dirhams (AED) and include applicable VAT</li>
                  <li>We reserve the right to modify prices without prior notice</li>
                  <li>Product images are for illustration purposes; actual products may vary slightly</li>
                  <li>Custom orders are non-refundable once production has begun</li>
                </ul>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  3. Orders and Payment
                </h2>
                <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li>Orders are subject to availability and confirmation</li>
                  <li>Payment is processed securely through Stripe</li>
                  <li>We accept major credit cards and other payment methods as displayed at checkout</li>
                  <li>You must provide accurate billing and shipping information</li>
                  <li>We reserve the right to cancel orders in case of suspected fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  4. Shipping and Delivery
                </h2>
                <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li>Free shipping on orders over 500 AED within UAE</li>
                  <li>Express delivery: 1-2 business days (UAE)</li>
                  <li>Standard delivery: 3-5 business days (GCC)</li>
                  <li>International shipping: 7-14 business days</li>
                  <li>Delivery times are estimates and not guaranteed</li>
                  <li>International orders may be subject to customs duties and taxes</li>
                </ul>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  5. Returns and Refunds
                </h2>
                <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li>Standard items may be returned within 14 days of delivery</li>
                  <li>Items must be unworn, unwashed, and in original condition with tags attached</li>
                  <li>Custom-made items and altered pieces are final sale</li>
                  <li>Refunds will be processed within 14 business days of receiving returned items</li>
                  <li>Original shipping costs are non-refundable</li>
                  <li>Return shipping costs are the responsibility of the customer unless the item is defective</li>
                </ul>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  6. Size and Fit
                </h2>
                <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li>Please refer to our size guide before placing an order</li>
                  <li>Custom measurements may be provided for made-to-order items</li>
                  <li>We are not responsible for incorrect sizing if measurements are provided by the customer</li>
                </ul>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  7. Intellectual Property & Copyright
                </h2>
                <p className="mb-4">
                  <strong>All content on this website is the exclusive property of Bint Saeed and is protected by copyright laws of the United Arab Emirates and international copyright treaties.</strong>
                </p>
                <p className="mb-4">
                  This includes, but is not limited to:
                </p>
                <ul className={`list-disc space-y-2 mb-4 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li>All product designs, patterns, and collections</li>
                  <li>Photographs, images, and visual content</li>
                  <li>The Bint Saeed logo, brand name, and trademarks</li>
                  <li>Website design, layout, and user interface</li>
                  <li>Text, descriptions, and written content</li>
                  <li>Marketing materials and promotional content</li>
                  <li>Software, code, and technical implementations</li>
                </ul>
                <p className="mb-4 font-medium text-brand-darkRed">
                  Strictly Prohibited Without Written Permission:
                </p>
                <ul className={`list-disc space-y-2 mb-4 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li>Copying, reproducing, or duplicating any content</li>
                  <li>Downloading images for commercial or personal use</li>
                  <li>Reusing, republishing, or redistributing any materials</li>
                  <li>Creating derivative works based on our content</li>
                  <li>Using our designs as inspiration for commercial products</li>
                  <li>Scraping or harvesting content through automated means</li>
                  <li>Using any content for AI training or machine learning purposes</li>
                </ul>
                <p className="mb-4">
                  <strong>Written Permission Required:</strong> Any use of Bint Saeed content, including but not limited to reproduction, distribution, display, or transmission, requires prior written permission from Bint Saeed. Requests should be directed to{' '}
                  <a href="mailto:legal@bintsaeed.com" className="text-brand-clayRed hover:text-brand-dustyBlue underline">
                    legal@bintsaeed.com
                  </a>.
                </p>
                <p>
                  <strong>Enforcement:</strong> Bint Saeed actively monitors and enforces its intellectual property rights. Violations may result in legal action, including claims for damages and injunctive relief under UAE Federal Law No. 7 of 2002 on Copyrights and Related Rights, as amended, and applicable international treaties.
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  8. User Responsibilities
                </h2>
                <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li>You must be at least 18 years old to make purchases</li>
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>You agree not to misuse our website or services</li>
                  <li>You must provide accurate information when placing orders</li>
                </ul>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  9. Charitable Contributions
                </h2>
                <p>
                  Bint Saeed donates 10% of every order to orphanage support programmes facilitated by the Emirates Red Crescent Authority and the Zakat Fund. This contribution is included in the product price and does not affect your order total.
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  10. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by UAE law, Bint Saeed shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or products.
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  11. Governing Law and Disputes
                </h2>
                <p>
                  These terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved through the competent courts of Dubai, UAE, unless otherwise required by applicable UAE consumer protection laws.
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  12. Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on the website. Your continued use of our services constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  13. Contact Information
                </h2>
                <p>
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <p className="mt-4">
                  <strong>Bint Saeed</strong><br />
                  Legal Inquiries:{' '}
                  <a href="mailto:legal@bintsaeed.com" className="text-brand-clayRed hover:text-brand-dustyBlue underline">
                    legal@bintsaeed.com
                  </a><br />
                  General Inquiries:{' '}
                  <a href="mailto:contact@bintsaeed.com" className="text-brand-clayRed hover:text-brand-dustyBlue underline">
                    contact@bintsaeed.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
