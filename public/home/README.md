# Home page media (`/public/home`)

Structured for crawlers and a gradual WebP migration. **Do not delete legacy paths** until every reference is migrated and verified.

## Layout

```
home/
  hero/
    mobile/     # portrait / phone+tablet hero art
    desktop/    # landscape / desktop hero art
  strands-feature/
  collection-chapter/
  personalisation/
  editorial/
  backgrounds/
```

## Hero (active)

| Viewport | WebP (served) | Original kept beside |
|----------|---------------|----------------------|
| Mobile/tablet | `hero/mobile/bint-saeed-home-hero-mobile-burgundy-collection.webp` | `.jpg` same stem |
| Desktop | `hero/desktop/bint-saeed-home-hero-desktop-editorial-abayas.webp` | `.jpg` same stem |

Legacy still on disk (untouched): `/public/IMG_2821.JPG`, `/public/hero-image.JPG`, `/public/hero-bintsaeed.jpg`.

## Other home sections

Copied into `/home` (originals remain at their old public paths):

- `personalisation/bint-saeed-home-personalisation-hidden-pocket.{jpg,webp}` ← `Personalisation Page/secret pocket.JPG`
- `backgrounds/bint-saeed-home-panel-background-01.{jpg,webp}` ← `background1.JPG`
- `editorial/bint-saeed-home-editorial-abu-dhabi-gazelles.{jpg,webp}` ← `bint-saeed-abu-dhabi-gazelles-father-of-the-gazelle.jpg`
- `editorial/bint-saeed-home-editorial-manifesto-portrait.{png,webp}` ← `8E4D92A7-….PNG`

`strands-feature/` and `collection-chapter/` were already WebP under `/home`.
