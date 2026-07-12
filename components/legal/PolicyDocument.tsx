'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import LocaleLink from '@/components/LocaleLink'
import EnglishPolicyVersionNotice from '@/components/legal/EnglishPolicyVersionNotice'
import type { PolicyContent, PolicySection } from '@/lib/legal/policyContentId'
import type { EnglishPolicyKey } from '@/lib/legal/englishPolicyVersionNoticeI18n'
import type { AppLocale } from '@/lib/i18n/routing'
import { OFFICIAL_EMAILS, officialMailto } from '@/lib/brand/officialEmails'
import { policySectionH2, policySectionH2Plain } from '@/lib/ui/ctaClasses'
import { SITE_CONTENT_TOP_PAD } from '@/lib/ui/editorialPageChrome'

const EMAIL_RE = /[a-zA-Z0-9._%+-]+@bintsaeed\.com/g

function renderBodyLine(line: string): ReactNode {
  if (line.includes('@bintsaeed.com')) {
    const parts = line.split(/\n/)
    return (
      <p className={parts.length > 1 ? 'mt-4' : undefined}>
        {parts.map((part, i) => {
          const emails = part.match(EMAIL_RE)
          if (!emails) return <span key={i}>{part}{i < parts.length - 1 ? <br /> : null}</span>
          const segments = part.split(EMAIL_RE)
          return (
            <span key={i}>
              {segments.map((seg, j) => (
                <span key={j}>
                  {seg}
                  {emails[j] ? (
                    <a
                      href={`mailto:${emails[j]}`}
                      className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950"
                    >
                      {emails[j]}
                    </a>
                  ) : null}
                </span>
              ))}
              {i < parts.length - 1 ? <br /> : null}
            </span>
          )
        })}
      </p>
    )
  }

  if (line.includes('\n')) {
    const [heading, ...rest] = line.split('\n')
    if (heading === 'Bint Saeed' || heading.startsWith('Bint Saeed')) {
      return (
        <p className="mt-4">
          <strong>Bint Saeed</strong>
          <br />
          {rest.map((r, idx) => (
            <span key={idx}>
              {renderInlineEmail(r)}
              {idx < rest.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
      )
    }
  }

  if (line === OFFICIAL_EMAILS.returns || line === OFFICIAL_EMAILS.support || line === OFFICIAL_EMAILS.legal || line === OFFICIAL_EMAILS.hello) {
    const key = line === OFFICIAL_EMAILS.returns ? 'returns' : line === OFFICIAL_EMAILS.support ? 'support' : line === OFFICIAL_EMAILS.legal ? 'legal' : 'hello'
    return (
      <p>
        <a
          href={officialMailto(key)}
          className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950"
        >
          {line}
        </a>
      </p>
    )
  }

  return <p>{line}</p>
}

function renderInlineEmail(text: string): ReactNode {
  const match = text.match(/^(.*?)([a-zA-Z0-9._%+-]+@bintsaeed\.com)(.*)$/)
  if (!match) return text
  const [, prefix, email, suffix] = match
  return (
    <>
      {prefix}
      <a
        href={`mailto:${email}`}
        className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950"
      >
        {email}
      </a>
      {suffix}
    </>
  )
}

function PolicySectionBlock({
  section,
  isRTL,
  variant,
}: {
  section: PolicySection
  isRTL: boolean
  variant: 'standard' | 'shipment'
}) {
  const listPad = isRTL ? 'pr-6' : 'pl-6'
  const shipmentListPad = isRTL ? 'pr-5' : 'pl-5'
  const pad = variant === 'shipment' ? shipmentListPad : listPad
  const listSpacing = variant === 'shipment' ? 'space-y-1' : 'space-y-2'
  const h2Class = variant === 'shipment' ? policySectionH2Plain : policySectionH2
  const sectionClass = variant === 'shipment' ? 'flex flex-col gap-2' : undefined

  return (
    <section className={sectionClass}>
      <h2 className={h2Class}>{section.title}</h2>
      {section.body.map((line, i) => (
        <div key={i}>{renderBodyLine(line)}</div>
      ))}
      {section.list && section.list.length > 0 ? (
        <ul className={`list-disc ${listSpacing} ${pad}`}>
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.subsections?.map((sub, i) => (
        <div key={i}>
          {sub.title ? (
            <h3 className="mb-2 mt-4 font-montserrat text-sm font-semibold text-neutral-900">{sub.title}</h3>
          ) : null}
          {sub.body?.map((line) => (
            <div key={line}>{renderBodyLine(line)}</div>
          ))}
          {sub.list.length === 1 && !sub.title && !sub.body?.length && sub.list[0].length > 80 ? (
            <p className={variant === 'standard' && i === 0 ? 'mt-3 text-sm text-neutral-600' : undefined}>{sub.list[0]}</p>
          ) : sub.list.length > 0 ? (
            <ul className={`list-disc ${listSpacing} ${pad}`}>
              {sub.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </section>
  )
}

export type PolicyDocumentProps = {
  content: PolicyContent
  isRTL: boolean
  backLabel: string
  variant?: 'standard' | 'shipment'
  sectionAfter?: Record<number, ReactNode>
  /** Canonical English policy this page corresponds to */
  englishPolicy?: EnglishPolicyKey
  language?: AppLocale
}

export default function PolicyDocument({
  content,
  isRTL,
  backLabel,
  variant = 'standard',
  sectionAfter,
  englishPolicy,
  language = 'en',
}: PolicyDocumentProps) {
  const heroAlign = isRTL ? 'text-right' : variant === 'shipment' ? 'text-left' : 'text-center'
  const bodyGap = variant === 'shipment' ? 'policy-prose flex flex-col gap-4' : 'space-y-9'
  const cardPad = variant === 'shipment' ? 'p-8 md:p-10' : 'p-8 md:p-12'
  const heroMargin = variant === 'shipment' ? 'mb-10' : 'mb-12'
  const introClass =
    variant === 'shipment'
      ? 'mt-4 max-w-3xl font-montserrat text-sm leading-relaxed tracking-wide text-neutral-600'
      : isRTL
        ? 'mt-4 max-w-2xl font-montserrat text-sm leading-relaxed tracking-wide text-neutral-600 mr-0 ml-auto'
        : 'mx-auto mt-4 max-w-2xl font-montserrat text-sm leading-relaxed tracking-wide text-neutral-600'
  const bodyLeading = variant === 'shipment' ? 'leading-[1.55]' : 'leading-relaxed'
  const summaryPad = variant === 'shipment' ? 'p-4 md:p-5' : 'p-5 md:p-6'
  const summaryTitleMb = variant === 'shipment' ? 'mb-1.5' : 'mb-2'
  const gridGap = variant === 'shipment' ? 'gap-1.5' : 'gap-2'
  const gridPad = variant === 'shipment' ? 'p-4 md:grid-cols-2 md:gap-2 md:p-5' : 'p-5 md:grid-cols-2 md:gap-3 md:p-6'
  const textAlign = isRTL ? 'text-right' : variant === 'shipment' ? 'text-left' : ''

  return (
    <div
      className={`relative min-h-screen bg-[#f6f4f1] pb-20 ${SITE_CONTENT_TOP_PAD} ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="relative mx-auto max-w-4xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <AppPageWayfinding
            rtl={isRTL}
            variant="muted"
            segments={[
              { label: content.homeBreadcrumb, href: '/home' },
              { label: content.breadcrumb },
            ]}
            backLink={{ href: '/', label: backLabel }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${heroMargin} ${heroAlign}`}
        >
          <span className="mb-3 block font-montserrat text-[10px] uppercase tracking-[0.32em] text-neutral-500">
            {content.heroLabel}
          </span>
          <h1 data-document-h1="true" className="mb-4 font-rozha text-5xl text-neutral-900 md:text-6xl">
            {content.pageTitle}
          </h1>
          <p className="font-montserrat tracking-wide text-neutral-700">{content.lastUpdated}</p>
          <p className={introClass}>{content.intro}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`rounded-sm border border-neutral-200 bg-white shadow-sm ${cardPad}`}
        >
          <div
            className={`${bodyGap} font-montserrat text-[13px] ${bodyLeading} tracking-wide text-neutral-800 ${textAlign}`}
          >
            <section className={`rounded-sm border border-neutral-200 bg-neutral-50 ${summaryPad}`}>
              <h2 className={`${summaryTitleMb} font-rozha text-xl text-neutral-900`}>
                {content.summaryTitle}
              </h2>
              {content.summaryBody.map((p) => (
                <p key={p} className={`text-sm text-neutral-600${content.summaryBody.length > 1 && p !== content.summaryBody[0] ? ' mt-2' : ''}`}>
                  {p}
                </p>
              ))}
            </section>

            {englishPolicy ? (
              <EnglishPolicyVersionNotice
                policy={englishPolicy}
                language={language}
                compact={variant === 'shipment'}
              />
            ) : null}

            <div className={`grid ${gridGap} rounded-sm border border-neutral-200 ${gridPad}`}>
              {content.sectionList.map((item) => (
                <p key={item} className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-neutral-600">
                  {item}
                </p>
              ))}
            </div>

            {content.sections.map((section, index) => (
              <div key={section.title}>
                <PolicySectionBlock section={section} isRTL={isRTL} variant={variant} />
                {sectionAfter?.[index] ?? null}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export function ShipmentPolicyLink({ label, linkLabel }: { label: string; linkLabel?: string }) {
  return (
    <p className="mt-3">
      {label}{' '}
      <LocaleLink
        href="/shipment-return-policy"
        className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950"
        data-cursor-hover
      >
        {linkLabel ?? 'Shipment & Return Policy'}
      </LocaleLink>
      .
    </p>
  )
}
