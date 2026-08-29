/** Search Intelligence — canonical internal keyword schema */

export const SI_COUNTRIES = [
  'UAE',
  'Saudi Arabia',
  'Qatar',
  'Kuwait',
  'Bahrain',
  'Oman',
  'UK',
  'US',
  'France',
  'Italy',
  'Netherlands',
  'Global',
] as const

export type SiCountry = (typeof SI_COUNTRIES)[number]

export const SI_LANGUAGES = [
  'en',
  'ar',
  'fr',
  'de',
  'it',
  'es',
  'ru',
  'zh',
  'nl',
  'pt',
  'id',
  'ms',
] as const

export type SiLanguage = (typeof SI_LANGUAGES)[number]

export const SI_SOURCE_IDS = [
  'google',
  'bing',
  'youtube',
  'tiktok',
  'pinterest',
  'instagram',
  'google_search_console',
  'dataforseo',
  'google_trends',
  'generated',
] as const

export type SiSourceId = (typeof SI_SOURCE_IDS)[number]

/** Provenance — never mix without labelling */
export type SiProvenance = 'observed' | 'inferred' | 'generated'

/** @deprecated Use SiProvenance */
export type SiDataCategory = SiProvenance

export type SiSearchIntent =
  | 'informational'
  | 'commercial'
  | 'transactional'
  | 'navigational'
  | 'local'
  | 'cultural_research'

export type SiRecommendedAction =
  | 'create_journal_article'
  | 'create_seo_landing_page'
  | 'improve_existing_page'
  | 'create_category_page'
  | 'improve_product_page'
  | 'create_heritage_page'
  | 'create_faq'
  | 'create_pinterest_content'
  | 'create_social_content'
  | 'seasonal_campaign'
  | 'internal_linking_opportunity'
  | 'no_action'

export type SiStatus =
  | 'new'
  | 'reviewing'
  | 'approved'
  | 'planned'
  | 'writing'
  | 'published'
  | 'rejected'

export type SiClusterGroup =
  | 'questions'
  | 'commercial'
  | 'comparisons'
  | 'prepositions'
  | 'geographic'
  | 'seasonal'
  | 'heritage'
  | 'jewellery'
  | 'alphabetical'
  | 'gsc_owned'
  | 'other'

export type SourceObservation = {
  sourceId: SiSourceId
  sourceLabel: string
  observedAt: string
  rawRef?: string
  expansionPattern?: string
}

export type KeywordMetricAvailability = {
  searchVolume: boolean
  cpc: boolean
  difficulty: boolean
  trend: boolean
  ranking: boolean
  impressions: boolean
  clicks: boolean
}

export type KeywordRecord = {
  id: string
  keyword: string
  normalizedKeyword: string
  topicCluster: string
  clusterGroup: SiClusterGroup
  provenance: SiProvenance
  /** @deprecated Use provenance */
  dataCategory?: SiProvenance
  sources: SourceObservation[]
  firstSeenAt?: string
  lastSeenAt?: string
  isNewDiscovery?: boolean
  hasGscEvidence?: boolean
  hasExternalDiscovery?: boolean
  expansionPatterns?: string[]
  surfacingSeeds?: string[]
  metricsEnrichedAt?: string
  country: SiCountry
  language: SiLanguage
  searchIntent: SiSearchIntent
  searchVolume: number | null
  cpc: number | null
  difficulty: number | null
  trend: string | null
  ranking: number | null
  impressions: number | null
  clicks: number | null
  existingPage: string | null
  contentGapStatus: ContentGapStatus | null
  opportunityScore: number
  scoreFactors: string[]
  recommendedAction: SiRecommendedAction
  status: SiStatus
  seedTopic: string
  createdAt: string
  updatedAt: string
  lastCheckedAt: string
}

export type ContentGapStatus =
  | 'covered'
  | 'partially_covered'
  | 'not_covered'
  | 'competing_pages'
  | 'needs_updating'

export type MetricHistoryPoint = {
  at: string
  impressions: number | null
  clicks: number | null
  ranking: number | null
  opportunityScore: number
}

export type ContentBrief = {
  id: string
  opportunityId: string
  keyword: string
  recommendedTitle: string
  primaryKeyword: string
  secondaryKeywords: string[]
  searchIntent: SiSearchIntent
  targetReader: string
  recommendedSlug: string
  metaTitle: string
  metaDescription: string
  h1: string
  outline: { h2: string; h3?: string[] }[]
  questionsToAnswer: string[]
  internalLinks: { href: string; label: string }[]
  productLinks: { href: string; label: string }[]
  suggestedSchemaType: string
  imageConcepts: string[]
  pinterestAngle: string
  socialAngle: string
  whyItMatters: string
  status: SiStatus
  createdAt: string
  updatedAt: string
}

export type TopicClusterMap = {
  clusterName: string
  pillarPage: { href: string; label: string } | null
  supportingArticles: { keyword: string; href: string | null; recommendedAction: SiRecommendedAction }[]
  keywords: string[]
}

export type GscOpportunity = {
  id: string
  query: string
  impressions: number
  clicks: number
  ctr: number
  position: number
  category:
    | 'high_impressions_low_ctr'
    | 'position_4_20'
    | 'increasing_impressions'
    | 'ranking_without_page'
    | 'non_brand'
    | 'country_specific'
    | 'quick_win'
  existingPage: string | null
  opportunityScore: number
}

export type ProviderConnectionStatus = {
  id: SiSourceId
  label: string
  connected: boolean
  mode: 'live' | 'csv_import' | 'stub' | 'disabled'
  message: string
}

export type SearchIntelligenceRequest = {
  seedTopic: string
  country: SiCountry
  language: SiLanguage
  sources: SiSourceId[]
  discoveryDepth?: import('@/lib/search-intelligence/discovery/types').DiscoveryDepth
  refreshLiveData?: boolean
  sessionId?: string
}

export type SearchIntelligenceSummary = {
  totalOpportunities: number
  quickWins: number
  commercialKeywords: number
  contentGaps: number
  existingRankings: number
  highPriorityTopics: number
}

export type PublishNextRecommendation = {
  keyword: string
  title: string
  opportunityScore: number
  reason: string
  recommendedAction: SiRecommendedAction
}

export type SearchPulse = {
  newSearchesDiscovered: number
  risingQueries: number
  quickWins: number
  commercialOpportunities: number
  contentGaps: number
  rankingsGained: number
  rankingsLost: number
}

export type GscSyncInfo = {
  lastSynced: string | null
  rowsImported: number
  dateRange: string | null
  status: string
  source: 'api' | 'csv' | 'none'
}

export type SeedCollection = {
  id: string
  name: string
  seeds: string[]
  active: boolean
  createdAt: string
  updatedAt: string
}

export type SearchIntelligenceResponse = {
  seedTopic: string
  country: SiCountry
  language: SiLanguage
  providers: ProviderConnectionStatus[]
  summary: SearchIntelligenceSummary
  searchPulse: SearchPulse
  gscSync: GscSyncInfo
  publishNext: PublishNextRecommendation[]
  observed: KeywordRecord[]
  inferred: KeywordRecord[]
  generated: KeywordRecord[]
  all: KeywordRecord[]
  topicClusters: TopicClusterMap[]
  gscOpportunities: GscOpportunity[]
  contentGaps: {
    keyword: string
    status: ContentGapStatus
    matchedPages: string[]
    recommendedAction: SiRecommendedAction
  }[]
  searchedAt: string
}
