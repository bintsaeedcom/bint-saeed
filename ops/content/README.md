# Bint Saeed — Content Ops (free)

Posting made easier **without paid apps or API spend**. Cursor drafts; you approve; you schedule with free native tools.

## Quick start

1. **Upload images** — either:
   - **Desktop (easiest, private):** `/Users/sunain/Desktop/bint-saeed-content-inbox/<product-slug>/`
   - Or in-repo: `ops/content/inbox/<product-slug>/`
2. In Cursor: *“Content pack for [slug] — images are in [full path]”*
3. Review in **Admin → Content** (`/admin/content`) or under `ops/content/batches/…`
4. Approve in `ops/content/queue/`
5. Publish using `SCHEDULING_PLAYBOOK.md`

### Where images go (Desktop — recommended)

```text
/Users/sunain/Desktop/bint-saeed-content-inbox/park-lane-abaya/photo-01.jpg
```

These stay on your Mac — **not** uploaded to the public website.

### Or in-repo inbox

```text
ops/content/inbox/park-lane-abaya/photo-01.jpg
```

Dashboard (overzicht): `/admin/content`  
GSC link: drop CSVs in `ops/content/inbox/_gsc/` (see README there)  
Distribution priority: `DISTRIBUTION_MATRIX.md`

## What’s here

| File | Use |
|------|-----|
| `BRAND_VOICE.md` | Tone + hard claim rules + anti-AI voice |
| `PLATFORM_RULES.md` | **X / IG / TikTok / Pinterest shapes** (locked) |
| `ASSET_NAMING.md` | `bint-saeed-…` rename rules + script |
| `KEYWORD_TRENDS_AUDIT.md` | Free Google + Pinterest/TikTok/IG discovery audit |
| `DISTRIBUTION_MATRIX.md` | High-value channel priority + Stage 1–3 automation |
| `growth/` | Weekly social scorecard + trends (native Insights) |
| `CHANNEL_MATRIX.md` | What to post where (weekly mix) |
| `WEEKLY_CALENDAR.md` | Blank + example week |
| `PACK_TEMPLATE.md` | Expected draft shape |
| `SCHEDULING_PLAYBOOK.md` | Free tools: Meta, Pinterest, TikTok, etc. |
| `APPROVAL_PROTOCOL.md` | Approve / reject flow |
| `scripts/rename-assets.mjs` | Bulk-rename dumps to `bint-saeed-…` |
| `batches/` | Dated content packs |
| `queue/` | Pending / approved / rejected |

## Skill

Project skill: `.cursor/skills/bint-saeed-content-pack/SKILL.md`

## Cost

**$0** beyond Cursor (and your time). No OpenAI key required for this loop.
