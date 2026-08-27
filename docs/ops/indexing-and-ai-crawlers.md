# Indexing & AI crawlers (free)

## How long does indexing take?

| Engine | Typical | Notes |
|--------|---------|--------|
| **Google** | Days → a few weeks for new/low-authority URLs | “Discovered – not indexed” is normal at scale |
| **Bing** | Often faster once in Bing Webmaster + IndexNow | Hours → days after IndexNow ping |
| **Yandex** | Days → weeks | Stronger for RU/CIS; IndexNow helps notify |
| **Mail.ru** | Similar to Yandex | Secondary Russian search; allow `Mail.RU_Bot` |
| **AI crawlers** (GPTBot, Claude, Perplexity…) | Variable | They read allowed URLs / `llms.txt`; not the same as “Google ranked” |

Nobody can guarantee a date. Fresh luxury sites with many locale URLs take longer.

## Already in this repo

- Sitemap: `https://www.bintsaeed.com/sitemap.xml` (EN + ar/fr/de/it/**zh** hubs)
- `robots.ts` allows Google, Bing, Yandex (+ Images/Mobile), Mail.RU_Bot, DuckDuck, Applebot, **Baiduspider**, **DeepSeekBot**, **Bytespider**, **Naver/Yeti** + AI bots
- `public/llms.txt` for AI assistants (includes Chinese name 承悦 + RedNote/WeChat)
- Soft China pages: `/rednote`, `/wechat`
- **IndexNow** (Bing + Yandex + **Naver**): see `.env.example` → `INDEXNOW_KEY`

## Enable IndexNow on Vercel (free, one-time)

1. Generate key: `openssl rand -hex 16`
2. Set on Vercel: `INDEXNOW_KEY=<that key>`
3. Optional: `INDEXNOW_WEBHOOK_SECRET=<random>` for secured publish
4. Redeploy — proof file is auto-served at `https://www.bintsaeed.com/{KEY}.txt`
5. Check: `GET https://www.bintsaeed.com/api/indexnow/status`
6. Ping sitemaps:  
   `curl -X POST https://www.bintsaeed.com/api/indexnow/publish -H "Authorization: Bearer $INDEXNOW_WEBHOOK_SECRET"`

## Manual free checklists

### Bing Webmaster Tools
1. [bing.com/webmasters](https://www.bing.com/webmasters) → Add `bintsaeed.com`
2. Verify (DNS or XML file)
3. Submit sitemap URL
4. Optional: import from Google Search Console

### Yandex Webmaster (Russia / CIS)
1. [webmaster.yandex.com](https://webmaster.yandex.com) → Add site
2. Verify + submit sitemap
3. IndexNow will also notify Yandex when configured
4. Explicit robots entries: `YandexBot`, `YandexImages`, `YandexMobileBot`, `Mail.RU_Bot`
5. Sitemap includes `/ru` hub + PDP URLs (with EN + ar/fr/de/it/zh/ru prefixes)

### Google (already likely)
Keep GSC sitemap submitted; don’t expect every multilingual URL indexed immediately.

## VPN vs “real” location (Slack)

IP city is the **VPN exit**, not the home. After deploy, Slack shows:
- Vercel edge + IP city
- VPN/proxy guess (ISP + browser clock mismatch)
- **Shop currency/language** (often the better UAE/resident signal)

True home location without consent GPS is **impossible** through a VPN.
