import type { KeywordRecord, TopicClusterMap, SiRecommendedAction } from '@/lib/search-intelligence/types'
import { findRelevantPages } from '@/lib/search-intelligence/siteIndex'

export function buildTopicClusters(records: KeywordRecord[]): TopicClusterMap[] {
  const byCluster = new Map<string, KeywordRecord[]>()

  for (const r of records) {
    const key = r.topicCluster || r.clusterGroup
    const list = byCluster.get(key) ?? []
    list.push(r)
    byCluster.set(key, list)
  }

  const clusters: TopicClusterMap[] = []

  for (const [clusterName, items] of byCluster) {
    const sorted = [...items].sort((a, b) => b.opportunityScore - a.opportunityScore)
    const top = sorted[0]
    const pillarCandidates = findRelevantPages(clusterName, 3)
    const pillarPage = pillarCandidates[0]
      ? { href: pillarCandidates[0].path, label: pillarCandidates[0].label }
      : null

    const supportingArticles = sorted.slice(0, 8).map((item) => ({
      keyword: item.keyword,
      href: item.existingPage,
      recommendedAction: item.recommendedAction,
    }))

    clusters.push({
      clusterName,
      pillarPage,
      supportingArticles,
      keywords: sorted.map((s) => s.keyword),
    })
  }

  return clusters.sort((a, b) => b.keywords.length - a.keywords.length)
}

export function wheelClusters(records: KeywordRecord[]): { id: string; label: string; count: number }[] {
  const counts = new Map<string, number>()
  for (const r of records) {
    const g = r.clusterGroup
    counts.set(g, (counts.get(g) ?? 0) + 1)
  }
  const labels: Record<string, string> = {
    questions: 'Questions',
    commercial: 'Commercial',
    comparisons: 'Comparisons',
    prepositions: 'Prepositions',
    geographic: 'Geographic',
    seasonal: 'Seasonal',
    heritage: 'Heritage',
    jewellery: 'Jewellery',
    alphabetical: 'A–Z',
    gsc_owned: 'GSC Owned',
    other: 'Other',
  }
  return [...counts.entries()]
    .map(([id, count]) => ({ id, label: labels[id] ?? id, count }))
    .sort((a, b) => b.count - a.count)
}

export function filterByClusterGroup(records: KeywordRecord[], groupId: string | null): KeywordRecord[] {
  if (!groupId) return records
  return records.filter((r) => r.clusterGroup === groupId)
}

export function filterBySection(
  records: KeywordRecord[],
  section:
    | 'all'
    | 'quick_wins'
    | 'new_content'
    | 'commercial'
    | 'heritage'
    | 'seasonal'
    | 'accessories',
): KeywordRecord[] {
  switch (section) {
    case 'quick_wins':
      return records.filter(
        (r) =>
          (r.provenance === 'observed' || r.hasGscEvidence) &&
          (r.impressions ?? 0) >= 20 &&
          r.ranking != null &&
          r.ranking >= 4 &&
          r.ranking <= 20,
      )
    case 'new_content':
      return records.filter(
        (r) =>
          r.contentGapStatus === 'not_covered' &&
          r.recommendedAction !== 'no_action',
      )
    case 'commercial':
      return records.filter(
        (r) => r.searchIntent === 'commercial' || r.searchIntent === 'transactional',
      )
    case 'heritage':
      return records.filter((r) => r.clusterGroup === 'heritage' || r.searchIntent === 'cultural_research')
    case 'seasonal':
      return records.filter((r) => r.clusterGroup === 'seasonal')
    case 'accessories':
      return records.filter((r) => r.clusterGroup === 'jewellery')
    default:
      return records
  }
}

export function actionLabel(action: SiRecommendedAction): string {
  const map: Record<SiRecommendedAction, string> = {
    create_journal_article: 'Create Journal Article',
    create_seo_landing_page: 'Create SEO Landing Page',
    improve_existing_page: 'Improve Existing Page',
    create_category_page: 'Create Category Page',
    improve_product_page: 'Improve Product Page',
    create_heritage_page: 'Create Heritage Page',
    create_faq: 'Create FAQ',
    create_pinterest_content: 'Create Pinterest Content',
    create_social_content: 'Create Social Content',
    seasonal_campaign: 'Seasonal Campaign',
    internal_linking_opportunity: 'Internal Linking Opportunity',
    no_action: 'No Action',
  }
  return map[action]
}
