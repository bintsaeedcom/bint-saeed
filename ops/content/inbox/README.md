# Content inbox — drop images here

## Where to upload

Put photos/videos in a product subfolder:

```text
ops/content/inbox/<product-slug>/
```

Examples:

```text
ops/content/inbox/park-lane-abaya/IMG_01.jpg
ops/content/inbox/signature-strand-malachite/detail.png
```

Use the **shop product slug** (same as the website URL segment).

## Then in Cursor

```text
Content pack for park-lane-abaya — images are in ops/content/inbox/park-lane-abaya
```

The agent will draft platform copy, alt texts, and a rename map to `bint-saeed-…` names.

## Review output

Open **Admin → Content** (`/admin/content`) for an overview of inbox folders + finished packs + approval queues.

Optional: rename files in bulk:

```bash
node ops/content/scripts/rename-assets.mjs \
  --dir "ops/content/inbox/park-lane-abaya" \
  --slug park-lane-abaya \
  --colour black \
  --dry-run
```
