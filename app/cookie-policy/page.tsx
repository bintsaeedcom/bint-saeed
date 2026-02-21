'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function CookiePolicyPage() {
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
            Cookie Policy
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
                  1. What Are Cookies
                </h2>
                <p>
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  2. Types of Cookies We Use
                </h2>
                
                <h3 className="font-roboto font-bold text-brand-darkRed mt-4 mb-2">Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
                </p>
                <ul className={`list-disc space-y-2 mt-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li>Session management</li>
                  <li>Shopping cart functionality</li>
                  <li>Security features</li>
                  <li>Cookie consent preferences</li>
                </ul>

                <h3 className="font-roboto font-bold text-brand-darkRed mt-4 mb-2">Analytics Cookies</h3>
                <p>
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use Google Analytics to analyze website traffic.
                </p>
                <ul className={`list-disc space-y-2 mt-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li>Page views and navigation patterns</li>
                  <li>Time spent on pages</li>
                  <li>Referral sources</li>
                  <li>Device and browser information</li>
                </ul>

                <h3 className="font-roboto font-bold text-brand-darkRed mt-4 mb-2">Marketing Cookies</h3>
                <p>
                  These cookies are used to track visitors across websites to display relevant advertisements. They may be set by our advertising partners.
                </p>
                <ul className={`list-disc space-y-2 mt-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li>Social media pixels (Instagram, Pinterest, TikTok)</li>
                  <li>Retargeting cookies</li>
                  <li>Conversion tracking</li>
                </ul>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  3. Third-Party Cookies
                </h2>
                <p>We may use third-party services that set their own cookies:</p>
                <ul className={`list-disc space-y-2 mt-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li><strong>Stripe:</strong> Payment processing and fraud prevention</li>
                  <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                  <li><strong>Social Media Platforms:</strong> Social sharing and advertising features</li>
                </ul>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  4. Managing Your Cookie Preferences
                </h2>
                <p>
                  When you first visit our website, you will be presented with a cookie consent banner where you can choose to accept all cookies or only essential cookies.
                </p>
                <p className="mt-4">
                  You can also manage cookies through your browser settings:
                </p>
                <ul className={`list-disc space-y-2 mt-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                  <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
                </ul>
                <p className="mt-4">
                  Please note that disabling certain cookies may affect the functionality of our website.
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  5. Cookie Retention
                </h2>
                <p>Different cookies have different retention periods:</p>
                <ul className={`list-disc space-y-2 mt-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Remain on your device for a set period (up to 2 years)</li>
                  <li><strong>Analytics cookies:</strong> Typically 26 months</li>
                </ul>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  6. UAE Compliance
                </h2>
                <p>
                  This Cookie Policy complies with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data. We are committed to respecting your privacy and providing transparent information about our data collection practices.
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  7. Changes to This Policy
                </h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will post any updates on this page with a revised "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  8. Contact Us
                </h2>
                <p>
                  If you have questions about our use of cookies, please contact us at:
                </p>
                <p className="mt-4">
                  <strong>Bint Saeed</strong><br />
                  Email:{' '}
                  <a href="mailto:legal@bintsaeed.com" className="text-brand-clayRed hover:text-brand-dustyBlue underline">
                    legal@bintsaeed.com
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
