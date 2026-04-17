/**
 * Compose supplemental JSON-LD: GCC ClothingStores + Brand/MediaObject + merged FAQ blocks.
 * Localized copy lives in `lib/translations/seo/{locale}.ts`; keyword arrays remain in `gcc-seo`, `*-seo` helpers.
 *
 * Core layout (`rootLayoutJsonLd` + `organizationSchemaLd`) uses fixed @ids on `https://bintsaeed.com/...`.
 * Supplemental nodes use `NEXT_PUBLIC_SITE_URL` for @id; keep env aligned with production to avoid near-duplicate entities.
 */

import type { AppLocale } from '@/lib/i18n/routing'
import {
  buildGccClothingStoresJsonLd,
  buildGccGovernmentBrandJsonLd,
  buildMediaKitJsonLd,
  buildPressBrandJsonLd,
  faqPairsToQuestionNodes,
} from '@/lib/translations/seo/builders'
import { getSeoSupplementalBundle } from '@/lib/translations/seo'

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bintsaeed.com').replace(/\/$/, '')

/** @ids emitted by `buildOrganizationJsonLd` + `rootLayoutJsonLd` (canonical site, not env-dependent). */
export const CORE_ROOT_LAYOUT_JSONLD_IDS: ReadonlySet<string> = new Set([
  'https://bintsaeed.com/#organization',
  'https://bintsaeed.com/#brand',
  'https://bintsaeed.com/#website',
  'https://bintsaeed.com/#business',
  'https://bintsaeed.com/#product',
  'https://bintsaeed.com/#area-alain',
  'https://bintsaeed.com/#collection',
])

function isFaqPageNode(n: Record<string, unknown>): boolean {
  const t = n['@type']
  if (t === 'FAQPage') return true
  return Array.isArray(t) && (t as string[]).includes('FAQPage')
}

function isQuestionNode(n: Record<string, unknown>): boolean {
  const t = n['@type']
  if (t === 'Question') return true
  return Array.isArray(t) && (t as string[]).includes('Question')
}

/** Stable key for FAQ Question dedupe (EN + AR). */
function questionKey(q: Record<string, unknown>): string {
  const name = q.name
  if (typeof name === 'string') return name.trim().toLowerCase()
  return JSON.stringify(name)
}

/**
 * Drop duplicate schema nodes by `@id` when present.
 * FAQPage without `@id`: keep first only.
 * Question entities: dedupe by `name` inside FAQ merges (handled separately).
 */
export function dedupeJsonLdNodes(nodes: readonly Record<string, unknown>[]): Record<string, unknown>[] {
  const seenIds = new Set<string>()
  let faqPageKept = false
  const out: Record<string, unknown>[] = []

  for (const raw of nodes) {
    const n = raw as Record<string, unknown>
    const id = typeof n['@id'] === 'string' ? n['@id'] : null

    if (id) {
      if (seenIds.has(id)) continue
      seenIds.add(id)
      if (CORE_ROOT_LAYOUT_JSONLD_IDS.has(id)) continue
      out.push({ ...n })
      continue
    }

    if (isFaqPageNode(n)) {
      if (faqPageKept) continue
      faqPageKept = true
      out.push({ ...n })
      continue
    }

    out.push({ ...n })
  }

  return out
}

/**
 * Merge GCC + royal + competitor-education + AI (luxury-house / classic abaya) FAQ pairs
 * into **one** FAQPage — copy comes from `lib/translations/seo/{locale}.ts`.
 */
export function buildMergedSupplementalFaqJsonLd(locale: AppLocale): Record<string, unknown> {
  const bundle = getSeoSupplementalBundle(locale)

  const gccEntities = faqPairsToQuestionNodes(bundle.faqGcc)
  const royalEntities = faqPairsToQuestionNodes(bundle.faqRoyal)
  const competitorEntities = faqPairsToQuestionNodes(bundle.faqCompetitor)
  const aiLuxuryEntities = faqPairsToQuestionNodes(bundle.faqAiLuxury)
  const aiClassicEntities = faqPairsToQuestionNodes(bundle.faqAiClassic)

  const seen = new Set<string>()
  const merged: Record<string, unknown>[] = []

  for (const block of [
    ...gccEntities,
    ...royalEntities,
    ...competitorEntities,
    ...aiLuxuryEntities,
    ...aiClassicEntities,
  ]) {
    if (!isQuestionNode(block)) {
      merged.push(block)
      continue
    }
    const k = questionKey(block)
    if (seen.has(k)) continue
    seen.add(k)
    merged.push(block)
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteUrl}#faq-supplement-main`,
    mainEntity: merged,
  }
}

export type SupplementalJsonLdOptions = {
  /** When true, `/faq` uses `buildFaqPageJsonLd` only—omit merged GCC/royal FAQ to avoid duplicate FAQPage. */
  isFaqRoute: boolean
  locale: AppLocale
}

/**
 * Supplemental schemas (Boutallion-style multi-block) with dedupe: GCC city ClothingStores,
 * Brand (media / press angles), MediaObject, optional single merged FAQPage.
 */
export function buildSupplementalJsonLdList(options: SupplementalJsonLdOptions): Record<string, unknown>[] {
  const bundle = getSeoSupplementalBundle(options.locale)
  const nodes: Record<string, unknown>[] = []

  nodes.push(...buildGccClothingStoresJsonLd(siteUrl, bundle))
  nodes.push(buildGccGovernmentBrandJsonLd(siteUrl, bundle))
  nodes.push(buildPressBrandJsonLd(siteUrl, bundle))
  nodes.push(buildMediaKitJsonLd(siteUrl, bundle))

  if (!options.isFaqRoute) {
    nodes.push(buildMergedSupplementalFaqJsonLd(options.locale))
  }

  return dedupeJsonLdNodes(nodes)
}

/** Single script payload (one graph) — optional alternative to multiple `<script>` tags. */
export function buildSupplementalJsonLdGraphScriptJson(options: SupplementalJsonLdOptions): string {
  const list = buildSupplementalJsonLdList(options)
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': list,
  })
}
