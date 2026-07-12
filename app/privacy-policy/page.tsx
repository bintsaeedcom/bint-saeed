'use client'

import PolicyDocument from '@/components/legal/PolicyDocument'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getEnabledTrackersFromEnv } from '@/lib/analytics/trackerCatalog'
import { buildAnalyticsLine, getPrivacyPolicyContent } from '@/lib/legal/policyContentId'
import type { AppLocale } from '@/lib/i18n/routing'

export default function PrivacyPolicyPage() {
  const { t, isRTL, language } = useLanguage()
  const locale = language as AppLocale
  const activeTrackers = getEnabledTrackersFromEnv()
  const analyticsLine = buildAnalyticsLine(
    locale,
    activeTrackers.map((tracker) => tracker.title),
  )

  return (
    <PolicyDocument
      content={getPrivacyPolicyContent(locale, analyticsLine)}
      isRTL={isRTL}
      backLabel={t.shop.backToHome}
      englishPolicy="privacy"
      language={locale}
    />
  )
}
