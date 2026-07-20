# Prospect schema

Every researched lead is one JSON object in the daily batch file.

```ts
type PrProspect = {
  id: string // e.g. 2026-07-20-001
  researchedAt: string // ISO date
  region: 'gcc' | 'levant-na' | 'europe' | 'americas' | 'asia-pacific' | 'global-digital'
  vertical:
    | 'editorial'
    | 'stylist'
    | 'retail-buyer'
    | 'blog-substack'
    | 'digital-native'
    | 'institution'
    | 'trade'
    | 'ai-agent'
    | 'podcast-video'
    | 'agency-pr'
    | 'royal-court'
    | 'uhnw'
    | 'brand-partnership'
    | 'celebrity-stylist'
    | 'screen-costume'
  orgName: string
  personName: string | null // null if desk-only
  titleRole: string | null
  talentName?: string | null // aspirational talent — contact is always the gatekeeper
  cityCountry: string
  website: string | null
  contactEmail: string | null
  contactFormUrl: string | null
  linkedinUrl: string | null
  instagramHandle: string | null
  whyFit: string // 1–2 sentences, evidence-based
  proofLinks: string[] // articles, credits, store pages
  suggestedAngleId:
    | 'heritage-forward'
    | 'abu-dhabi-house'
    | 'codes-system'
    | 'made-to-order'
    | 'strands-jewellery'
    | 'giving-forward'
    | 'ai-knowledge'
    | 'royal-visit'
    | 'uhnw-private'
    | 'brand-collab'
  priority: 1 | 2 | 3 // 1 = send first when approved
  language: 'en' | 'ar' | 'fr' | 'it' | 'de' | 'es' | 'other'
  status:
    | 'researched'
    | 'drafted'
    | 'awaiting_approval'
    | 'approved'
    | 'sent'
    | 'replied'
    | 'nurture'
    | 'rejected'
    | 'do_not_contact'
  draftPitchId: string | null
  notes: string
  sources: string[] // URLs used while researching
}
```

## Deduping

Before adding a prospect, search `ops/pr/ledger/prospects.jsonl` for matching `contactEmail`, `instagramHandle`, or `orgName+personName`. Skip duplicates; refresh `notes` only if new proof appears.

## Ledger

Append-only file: `ops/pr/ledger/prospects.jsonl` — one JSON object per line.
