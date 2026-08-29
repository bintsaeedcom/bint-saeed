import { randomUUID } from 'crypto'
import type { ContentBrief, KeywordRecord } from '@/lib/search-intelligence/types'
import { slugifyKeyword } from '@/lib/search-intelligence/normalize'
import { findRelevantPages } from '@/lib/search-intelligence/siteIndex'
import { actionLabel } from '@/lib/search-intelligence/clusters'

export function buildContentBrief(opportunity: KeywordRecord): ContentBrief {
  const slug = slugifyKeyword(opportunity.keyword)
  const related = findRelevantPages(opportunity.keyword, 6)
  const productLinks = related
    .filter((p) => p.path.includes('/shop') || p.path.includes('/accessories') || p.path.includes('/strands'))
    .slice(0, 4)
    .map((p) => ({ href: p.path, label: p.label }))

  const internalLinks = related
    .filter((p) => !productLinks.some((pl) => pl.href === p.path))
    .slice(0, 5)
    .map((p) => ({ href: p.path, label: p.label }))

  const title = opportunity.keyword.replace(/\b\w/g, (c) => c.toUpperCase())
  const h2s = [
    'Introduction',
    'What this means for contemporary dressing',
    'Craft and material intelligence',
    'How Bint Saeed approaches this',
    'Care, fit and ordering',
  ]

  if (opportunity.searchIntent === 'cultural_research') {
    h2s.splice(2, 0, 'Emirati heritage context')
  }

  const questions = [
    `What is ${opportunity.keyword}?`,
    `Why does ${opportunity.keyword} matter for modest luxury wardrobes?`,
    `How does Bint Saeed interpret ${opportunity.keyword}?`,
  ]

  const schema =
    opportunity.searchIntent === 'commercial' || opportunity.searchIntent === 'transactional'
      ? 'ProductCollection'
      : opportunity.searchIntent === 'cultural_research'
        ? 'Article'
        : 'FAQPage'

  return {
    id: randomUUID(),
    opportunityId: opportunity.id,
    keyword: opportunity.keyword,
    recommendedTitle: title,
    primaryKeyword: opportunity.keyword,
    secondaryKeywords: related.slice(0, 5).map((p) => p.label),
    searchIntent: opportunity.searchIntent,
    targetReader: 'Women seeking luxury modest fashion with Emirati design intelligence',
    recommendedSlug: `/${slug}`,
    metaTitle: `${title} | Bint Saeed`,
    metaDescription: `Discover ${opportunity.keyword} from Bint Saeed, Abu Dhabi luxury abaya house. ${actionLabel(opportunity.recommendedAction)}.`,
    h1: title,
    outline: h2s.map((h2) => ({ h2, h3: h2.includes('heritage') ? ['UNESCO context', 'House codes'] : undefined })),
    questionsToAnswer: questions,
    internalLinks,
    productLinks,
    suggestedSchemaType: schema,
    imageConcepts: [
      'Editorial abaya detail with natural light',
      'Craft close-up (Al Talli / stone / palm structure as relevant)',
      'Abu Dhabi atelier atmosphere — no costume staging',
    ],
    pinterestAngle: `Quiet-luxury visual board: ${opportunity.keyword} — silhouette, stone, and Gulf composure.`,
    socialAngle: `Short-form story: why ${opportunity.keyword} belongs in a contemporary Emirati wardrobe.`,
    whyItMatters: `Opportunity score ${opportunity.opportunityScore}/100. ${opportunity.scoreFactors.slice(0, 3).join('; ')}.`,
    status: 'new',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
}
