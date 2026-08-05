# Platform rules (locked)

Every Content Pack draft **must** follow these formats. Do **not** reuse one caption everywhere.

Global writing standard (all platforms):

- **Human luxury house voice** — calm, specific, editorial. Not AI marketing slurry.
- **SEO-aware** — weave 1–2 natural search phrases; never keyword-stuff.
- **Claim-safe** — only facts from site/repo.
- **No** “In today’s fast-paced world…”, “Elevate your wardrobe…”, “Discover the essence…”, “Whether you’re looking for…”, emoji walls, hashtag spam.

---

## X (Twitter)

| Field | Rule |
|-------|------|
| Format | **Short caption only** |
| Length | Prefer **≤ 200 characters**; hard max **280** |
| Structure | 1 sharp line (optional 2nd short line). Product or house cue + quiet CTA if needed |
| Hashtags | **0–1** only |
| Link | Optional; many posts better without clutter — if used, one URL |
| Threads | Only if user asks; each tweet still short |

**Not for X:** long storytelling, hashtag blocks, “SEO descriptions”.

---

## Instagram

| Field | Rule |
|-------|------|
| Feed caption | **Medium**: ~50–120 words. Line breaks OK. Soft close + URL or “shop via site” |
| First line | Must work as the only line people see before “…more” |
| Hashtags | **8–12** max, end of caption or first comment note; mix brand + craft + 2–3 discovery |
| Carousel | Caption ≠ slide text; slides = sparse overlays if any |
| Stories | Ultra-short overlays (3–6 words); stickers for poll/link |
| Alt text | **Required** for every image in the pack (`ALT_TEXTS.md`) |

**Not for IG:** TikTok-length essays, Pinterest keyword-title voice in the caption body.

---

## TikTok

| Field | Rule |
|-------|------|
| **Title / cover text** | **Catchy, short** (≤ ~60 characters). Search-friendly but human. Shown on cover / first hook |
| **Description** | **Longer**: ~150–400 words allowed. Story + product + house context + CTA + URL |
| On-screen text | Separate from description — punchy (3–8 words beats) |
| Hashtags | **3–5** in description (not 30) |
| Hook | First 1–2 seconds / first line must earn the watch |

**TikTok = catchy title + long description.** Never ship TikTok with only a one-line caption.

---

## Pinterest

| Field | Rule |
|-------|------|
| **Title** | Keyword-led, scannable, luxury-clean — ≤ **100 characters**. Front-load useful terms (e.g. product type + place/code) without stuffing |
| **Description** | **2–4 sentences** + destination URL. Natural SEO phrases; readable as human copy |
| Board | Suggest board name |
| Alt text | Required per pin image |
| Aspect | Prefer vertical assets; note crop in asset file |

**Pinterest ≠ Instagram caption.** Titles are discovery labels; descriptions do the SEO work.

---

## YouTube Shorts

| Field | Rule |
|-------|------|
| Title | Catchy + searchable (≤ ~70 chars) — 3 options |
| Description | Medium-long: what / who / URL / light keywords |
| Tags | 8–12 |

---

## LinkedIn

| Field | Rule |
|-------|------|
| Length | ~80–150 words |
| Tone | Professional house update (craft, Abu Dhabi, collection) — not hard retail shout |
| Hashtags | 0–3 |

---

## Email

| Field | Rule |
|-------|------|
| Subject | 2 options, ≤ ~45 chars, no clickbait |
| Preview | ≤ ~90 chars |
| Body | Short editorial + one CTA URL |

---

## Alt text (all image platforms + web)

Required in every pack: `ALT_TEXTS.md`

- Describe **what is visible** (garment/accessory, colour, angle, setting)  
- Include **Bint Saeed** once where natural  
- No keyword stuffing; no “image of…” filler  
- Align with site style (`lib/products/imageAlt.ts` / existing alts) when renaming web assets  

---

## Cross-check before finish

- [ ] X is short  
- [ ] TikTok has **title + long description**  
- [ ] Pinterest has **SEO title + description** (not IG caption pasted)  
- [ ] Instagram has medium caption + limited hashtags + alts  
- [ ] Copy does not sound like ChatGPT boilerplate  
- [ ] Every asset has rename target + alt  
