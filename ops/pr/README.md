# Bint Saeed PR Engine (ops)

Corporate outreach system for promoting **Emirati heritage through contemporary fashion** worldwide.

## What this is

A Cursor-native PR engine: research → score → draft → **your approval** → you send.  
It covers journalists, stylists, buyers, blogs, institutions, trade desks, and **AI/brand directories**.

## Quick start (Agent mode)

Say:

```text
Run Bint Saeed PR daily: research ~50 worldwide prospects, draft priority pitches, put them in the approval queue. Corporate angle only — no founder story. Use ops/pr.
```

Or invoke the skill: **bint-saeed-pr-outreach**.

## Folder map

```
ops/pr/
  README.md
  BRAND_KIT_CORPORATE.md
  CHANNEL_MATRIX.md
  SOURCES_AND_SEEDS.md      ← GitHub audit + import rules
  seeds/public_desks.json   ← public desk starters (no scraped emails)
  ...
```

## Rules that never bend

1. Approve-before-send  
2. Website/repo facts only  
3. No founder angle  
4. Deduplicate against the ledger  
5. ~50 research / day; draft only the best  
6. **No GitHub “journalist email dump” imports** — see `SOURCES_AND_SEEDS.md`
