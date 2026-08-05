# Google Search Console → Content Pack (free link)

There is **no official “one-click auto sync”** without Google Cloud + API setup.  
This folder is the **best zero-cost automation**: weekly export → Content Pack reads it.

## One-time

1. Open [Google Search Console](https://search.google.com/search-console) for `bintsaeed.com`
2. Confirm property is the live domain

## Weekly (5 minutes)

1. GSC → **Performance**  
2. Date range: last **28 days** (or 3 months)  
3. Tab **Queries** → Export → **Download CSV**  
4. Tab **Pages** → Export → **Download CSV**  
5. Save both into this folder:

```text
ops/content/inbox/_gsc/
```

Suggested names:

```text
ops/content/inbox/_gsc/queries-2026-08-05.csv
ops/content/inbox/_gsc/pages-2026-08-05.csv
```

## Then

```bash
node ops/content/scripts/refresh-gsc-owned.mjs
```

That writes `LATEST_OWNED_DEMAND.md` in this folder. Also visible under Admin → Content → **Google Search**.

In Cursor:

```text
Content pack for park-lane-abaya — images in ops/content/inbox/park-lane-abaya — use latest GSC in inbox/_gsc
```

Or weekly:

```text
Weekly content — pull owned demand from ops/content/inbox/_gsc
```

The pack’s `KEYWORDS.md` must lead with **Owned demand (GSC)** from those files.

## Later (true API automation)

When you’re ready for Stage 2:

1. Google Cloud project  
2. Enable **Search Console API**  
3. Service account + add it as GSC user  
4. Cron job on Vercel to pull queries into `ops/content/inbox/_gsc/` or Postgres  

Until then, CSV drop is the correct “automatic enough” link.
