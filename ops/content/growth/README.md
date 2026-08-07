# Social growth tracking (free)

Goal: see whether Instagram, TikTok, Pinterest, X, LinkedIn, YouTube are **growing** — without paid social suites.

## How it works

1. Once a week (same day each week), open each app’s **native Insights / Analytics**
2. Copy the numbers into a new row in `ops/content/growth/weekly.csv`
3. Run (optional): `node ops/content/scripts/refresh-growth.mjs`
4. Open **Admin → Content → Growth** to see trend

I (Cursor) cannot see private Insights unless **you paste numbers** or later connect APIs (Stage 2).

## Metrics that matter (keep it light)

| Channel | Track weekly |
|---------|----------------|
| Instagram | Followers, Reach, Profile visits, Website taps |
| TikTok | Followers, Video views, Profile views |
| Pinterest | Monthly viewers (or weekly if shown), Pin impressions, Outbound clicks |
| X | Followers, Impressions (28d if only that) |
| LinkedIn | Followers (page), Post impressions if active |
| YouTube | Subscribers, Shorts views |
| Site (bonus) | Sessions or users from GA4 (optional) |

Also log: **posts shipped that week** (from Content Pack posted queue).

## Rules

- Same definitions each week (use the same Insights date range: **Last 7 days**)
- Don’t chase vanity alone — pair followers with **reach / profile visits / outbound clicks**
- Luxury pace: consistency > viral spikes

## Later (automatic)

Meta Graph API, Pinterest Analytics API, TikTok for Business API — need app review + tokens. Only worth it after 8+ weeks of manual baseline.
