# Asset naming (locked)

All content assets (photos, reel stills, pin verticals) must be renamed to the house pattern before scheduling/upload.

## Pattern

```text
bint-saeed-{product-slug}-{colour-or-motif}-{angle-or-role}-{nn}.{ext}
```

Rules:

- **Always** start with `bint-saeed-`
- Lowercase kebab-case only  
- `{product-slug}` = shop slug (e.g. `park-lane-abaya`, `signature-strand-malachite`)  
- `{colour-or-motif}` when known (`black`, `navy-blue`, `malachite`, `multi`) else `studio` or omit carefully  
- `{angle-or-role}` examples: `front`, `back`, `side`, `detail`, `embroidery`, `lifestyle`, `flatlay`, `packshot`, `cover`, `pin`, `story`  
- `{nn}` = `01`, `02`, … zero-padded  
- Prefer `.webp` for web; keep `.jpg` / `.png` / `.mp4` for social if needed  

### Examples

```text
bint-saeed-park-lane-abaya-black-front-01.webp
bint-saeed-park-lane-abaya-black-detail-02.webp
bint-saeed-signature-strand-malachite-lifestyle-01.jpg
bint-saeed-al-ain-oasis-necklace-tiger-eye-packshot-01.webp
```

Matches the storefront convention used in `lib/products/imageAlt.ts` (`bint-saeed-…`).

## Every Content Pack must include `ASSETS_RENAME.md`

| Original filename | New filename | Alt text |
|-------------------|--------------|----------|
| IMG_1234.JPG | bint-saeed-…-01.jpg | … |

The agent **always** fills this table (never leave originals as `IMG_…` / `Screenshot…`).

## Free rename helper

From a folder of dumps + product slug:

```bash
node ops/content/scripts/rename-assets.mjs \
  --dir "/path/to/exports" \
  --slug park-lane-abaya \
  --colour black \
  --dry-run
```

Omit `--dry-run` to apply renames. Pair with alt list from the pack.

## Video files

```text
bint-saeed-{slug}-{colour}-{role}-{nn}.mp4
```

Roles: `reel`, `tiktok`, `short`, `story`, `pin-idea`
