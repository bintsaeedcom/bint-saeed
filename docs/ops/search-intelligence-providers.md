# Search Intelligence — External Provider Audit (Phase 2)

**Purpose:** Identify legitimate APIs for autocomplete / search-suggestion discovery and volume data.  
**Rule:** Do not treat “platform has an API” as “API exposes search autocomplete.”  
**Status:** Audit only — no paid subscriptions purchased for Bint Saeed.

---

## Executive summary

| Priority | Route | Cost | Recommendation |
|----------|--------|------|----------------|
| **1 (implement now)** | **Google Search Console API** | **Free** (Google Cloud + service account) | **Connect** — you already own the property |
| **2 (when budget approved)** | **DataForSEO** (Autocomplete + Keywords) | Pay-as-you-go, **$50 min deposit** | Best programmatic fit for AnswerThePublic-style expansion at scale |
| **3 (evaluation only)** | **SerpApi** Google Autocomplete | **250 free searches/mo**, then **$25/mo** for 1k | Good for prototyping; expensive at volume |
| **4 (optional later)** | **Google Ads Keyword Planner API** | API free; needs Ads account + billing profile | Volume/CPC — **not true autocomplete**; bucketed volume without ad spend |
| **5 (skip for discovery)** | **AnswerThePublic API** | **$20+/mo** (no free API) | UI product; API is Alpha on paid plans — poor value vs DataForSEO |
| **6 (owned performance only)** | **Bing Webmaster API** | Free | Query/page stats for **your site** — not third-party autocomplete |
| **7 (paid Azure)** | **Bing Autosuggest API** | Azure billing | Real suggestions — separate from Webmaster |

**Lowest-cost sensible stack for Bint Saeed:**  
**GSC API (free) + CSV fallback** today → add **DataForSEO** when you approve ~$50 deposit for autocomplete batches → optionally **SerpApi free tier** to validate UI before committing.

---

## Provider comparison table

### Google Search Console API ✅ (implement)

| Field | Detail |
|-------|--------|
| **Data available** | Queries, pages, countries, devices, dates, clicks, impressions, CTR, avg position — **your property only** |
| **API cost** | **Free** |
| **Free allowance** | Quota within Google Cloud (sufficient for weekly syncs) |
| **Search volume** | No (performance data only) |
| **Autocomplete** | No |
| **Country support** | Yes (ISO country in reports) |
| **Reliability** | Official Google — high |
| **Complexity** | Medium — service account + property access |
| **Verdict** | **First priority — not a discovery engine for the whole web, but ground truth for what Google already associates with Bint Saeed** |

---

### DataForSEO

| Field | Detail |
|-------|--------|
| **Data available** | Google Autocomplete SERP, Keywords Data (volume, CPC, competition), Labs, Trends |
| **API cost** | Pay-as-you-go; **$50 minimum deposit**; no monthly commitment |
| **Typical unit cost** | Autocomplete ~**$0.0006–$0.002 per request** (standard vs live queue) |
| **Free allowance** | Sandbox for testing (not production volume) |
| **Search volume** | **Yes** (via Keywords Data / Labs — sourced from Google Ads ecosystem) |
| **Autocomplete** | **Yes** — dedicated Google Autocomplete endpoint; supports seed + cursor expansion patterns |
| **Country support** | **170+** geo targets |
| **Reliability** | High for API-first SEO tools; rate limits apply |
| **Complexity** | Medium — REST, task queue model |
| **Verdict** | **Best paid option for programmatic “AnswerThePublic-style” discovery** if you want one vendor |

**Example cost (illustrative):**  
One seed × ~80 expansion queries (a–z + modifiers) ≈ 80 requests ≈ **$0.05–$0.16** per seed at standard rates.  
10 seed clusters × weekly ≈ **$2–7/month** at modest scale (excluding volume lookups).

---

### SerpApi

| Field | Detail |
|-------|--------|
| **Data available** | Google Autocomplete, Organic, PAA, etc. |
| **API cost** | Subscription: **$0 (250/mo)** → **$25/mo (1,000 searches)** → scales to $275/mo |
| **Free allowance** | **250 searches/month** (all engines share one pool) |
| **Search volume** | No on autocomplete endpoint |
| **Autocomplete** | **Yes** — `google_autocomplete` engine |
| **Country** | `gl` / `hl` parameters |
| **Reliability** | Good; cached searches free |
| **Complexity** | Low — single GET API |
| **Verdict** | **Good for proof-of-concept**; poor economics vs DataForSEO at hundreds of expansions per run |

---

### Google Ads Keyword Planner API

| Field | Detail |
|-------|--------|
| **Data available** | Keyword **ideas** from seeds/URLs, historical metrics (avg monthly searches, competition, CPC ranges) |
| **API cost** | **No per-call fee** |
| **Requirements** | Google Ads manager account, **developer token**, OAuth, **billing profile on account** |
| **Search volume** | **Yes** — but often **bucketed** (“1K–10K”) without active ad spend |
| **Autocomplete** | **No** — idea generation ≠ live autocomplete suggestions |
| **Country** | Geo target constants (UAE, KSA, etc.) |
| **Reliability** | Official — strict rate limits (~1 req/s per customer ID) |
| **Complexity** | **High** — Ads API onboarding |
| **Verdict** | Useful for **volume/CPC layer** after discovery; not a substitute for autocomplete |

---

### AnswerThePublic API

| Field | Detail |
|-------|--------|
| **Data available** | Questions, prepositions, comparisons, alphabeticals, volume/CPC on paid tiers |
| **API cost** | **Included in paid plans only** — Starter **~$20/mo** (100 searches/mo), Growth **~$99/mo** |
| **Free allowance** | **No API on free plan** |
| **Search volume** | Yes (on reports) |
| **Autocomplete** | Similar concept (curated expansion) — **not raw Google autocomplete** |
| **Country** | Region/language per search |
| **Reliability** | Alpha API — evolving |
| **Complexity** | Low-medium |
| **Verdict** | **Skip** — paying for UI brand when DataForSEO/SerpApi are more flexible for engineering |

*Note:* Unofficial “Answer The Public” listings on RapidAPI are third-party scrapers — not endorsed here.

---

### Bing Webmaster Tools API

| Field | Detail |
|-------|--------|
| **Data available** | **Your site’s** query/page clicks, impressions, avg position; keyword research (`GetKeywordStats`, `GetRelatedKeywords`) |
| **API cost** | **Free** with API key from Bing Webmaster |
| **Autocomplete** | **No** on Webmaster API |
| **Search volume** | Limited keyword research impressions (weekly trends) |
| **Verdict** | **Worth adding later** for Bing performance crossover (like GSC); not global discovery |

---

### Bing Autosuggest API (Azure Cognitive Services)

| Field | Detail |
|-------|--------|
| **Data available** | Query suggestions as user types |
| **API cost** | Azure **pay-per-transaction** (free tier historically limited; check current Azure pricing) |
| **Autocomplete** | **Yes** |
| **Verdict** | Secondary discovery source for Bing suggestions — **paid Azure resource required** |

---

### Stubs in our codebase — honest assessment

| Provider ID | Can supply discovery/autocomplete? | Notes |
|-------------|-----------------------------------|--------|
| `google` | **No official public autocomplete API** | Use DataForSEO/SerpApi or Ads Keyword Ideas (different product) |
| `bing` | **Only via Azure Autosuggest** (paid) | Webmaster API ≠ autocomplete |
| `youtube` | **No** keyword autocomplete API for SEO | YouTube Data API is for videos/channels |
| `tiktok` | **No** official public autocomplete API | Research APIs are unofficial / ToS risk |
| `pinterest` | **No** public suggestion API for SEO | Marketing API is ads/catalog focused |
| `instagram` | **No** search suggestion API | Graph API is social graph / media |
| `google_trends` | **Related queries** (not autocomplete) | Unofficial scraping fragile; DataForSEO has Trends endpoint (paid) |
| `google_search_console` | **Owned performance only** | ✅ Live via API + CSV |
| `generated` | N/A | Internal templates only — must stay labelled **Generated** |

---

## Recommended lowest-cost combination

1. **Now (free):** GSC API + CSV fallback + sitemap content mapping + inferred intent/clustering.  
2. **When you approve ~$50:** DataForSEO autocomplete batching for seed collections (cache aggressively).  
3. **Optional:** SerpApi free 250/mo to validate expansion patterns before DataForSEO deposit.  
4. **Later:** Bing Webmaster for second performance channel; Google Ads API only if you want volume/CPC on shortlisted terms.

---

## What we are NOT doing without approval

- Purchasing DataForSEO, SerpApi paid plans, AnswerThePublic, or Azure Bing resources  
- Scraping `google.com/complete/search` (ToS / blocking risk)  
- Fabricating autocomplete, volume, CPC, or trends

---

*Last updated: Phase 2 audit — August 2026*
