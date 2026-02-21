'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
                  1. Introduction
                </h2>
                <p>
                  Bint Saeed ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services, in accordance with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data and other applicable UAE laws.
                </p>
                <p>
                  For any privacy-related inquiries, please contact us at{' '}
                  <a href="mailto:legal@bintsaeed.com" className="text-brand-clayRed hover:text-brand-dustyBlue underline">
                    legal@bintsaeed.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  2. Information We Collect
                </h2>
                <h3 className="font-roboto font-bold text-brand-darkRed mt-4 mb-2">Personal Information</h3>
                <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li>Name and contact information (email address, phone number, shipping address)</li>
                  <li>Payment information (processed securely through Stripe)</li>
                  <li>Order history and preferences</li>
                  <li>Communication preferences and correspondence</li>
                  <li>Custom measurements and special requests</li>
                </ul>

                <h3 className="font-roboto font-bold text-brand-darkRed mt-4 mb-2">Automatically Collected Information</h3>
                <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li>Device information (browser type, operating system)</li>
                  <li>IP address and location data</li>
                  <li>Website usage data and browsing patterns</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  3. How We Use Your Information
                </h2>
                <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li>To process and fulfill your orders</li>
                  <li>To communicate with you about your orders and inquiries</li>
                  <li>To send marketing communications (with your consent)</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                  <li>To prevent fraud and ensure security</li>
                </ul>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  4. Data Sharing and Disclosure
                </h2>
                <p>We may share your information with:</p>
                <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li>Payment processors (Stripe) for transaction processing</li>
                  <li>Shipping and delivery partners</li>
                  <li>Marketing platforms (with your consent)</li>
                  <li>Legal authorities when required by UAE law</li>
                </ul>
                <p className="mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  5. Your Rights Under UAE Law
                </h2>
                <p>Under UAE data protection laws, you have the right to:</p>
                <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data (subject to legal retention requirements)</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Request data portability</li>
                  <li>Lodge a complaint with the UAE Data Office</li>
                </ul>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  6. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  7. Data Retention
                </h2>
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, and resolve disputes. Order information is retained for 7 years in accordance with UAE commercial law requirements.
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  8. International Data Transfers
                </h2>
                <p>
                  Your information may be transferred to and processed in countries outside the UAE. We ensure appropriate safeguards are in place to protect your data in accordance with UAE data protection requirements.
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  9. Children's Privacy
                </h2>
                <p>
                  Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  10. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="font-rozha text-2xl text-brand-darkRed mb-4">
                  11. Contact Us
                </h2>
                <p>
                  For any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="mt-4">
                  <strong>Bint Saeed</strong><br />
                  Email:{' '}
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
