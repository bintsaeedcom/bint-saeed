# External contact sources — audit (2026-07-20)

## Verdict

**Do not bulk-import “journalist email CSVs” from GitHub into the Bint Saeed PR engine.**

There is **no high-quality, rights-cleared, fashion + stylist contact database** on GitHub that is safe for a luxury house to use as-is.

## What shows up on GitHub (and why we skip it)

| Source | What it claims | Why we won’t use it |
|--------|----------------|---------------------|
| `williamhsu/pr-outreach-resources`, `Amir4iks/pr-outreach-resources` | “142K journalist contacts” ZIP | Affiliate / SEO wrappers for **paid** JournalistDB — not an open dataset we can legally mirror |
| `notnews/get-journalist-data` | Scrape Muck Rack / PressPass | ToS-violating scrapers; stale (2015); personal data risk |
| `JhonsonAyalew/media-intelligence-suite` | Scrape major publishers + email decode | Scraping Cloudflare-hidden emails — not brand-safe |
| `aiassistsecure/journey` | AI agent that finds journalists → CSV | Tooling only (no ready list); still needs human verification |
| Hugging Face `MediumAxis/media-professionals-directory-2019-2022` | ~4.5k US/Ontario media (2019–22) | Geography wrong for our core (GCC + global fashion); **outdated**; mixed consent — would need line-by-line review, not a dump |

## What we *will* use

1. **Public desks** — mastheads, `press@` / `fashion@` published on official sites, “write for us”, open calls (`ops/pr/seeds/public_desks.json`)
2. **Daily web research** via the PR skill (~50/day) with proof links
3. **Optional paid tools later** (if you subscribe): Muck Rack, Cision, JournalistDB — export CSV → import into `ops/pr/ledger/` after you approve the vendor ToS

## Import rule for any future CSV

Only accept a row if:

- Contact is a **desk / form URL** OR an email **published by the outlet**, and  
- `whyFit` + proof link exist, and  
- Human has not marked `do_not_contact`

Personal stylist DMs and private emails are **researched live**, never bulk-scraped.
