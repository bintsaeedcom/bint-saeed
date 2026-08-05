# Examples — Content Pack skill

## One product

User: `Content pack for park-lane-abaya`

Agent: reads brand voice + PDP sources, writes
`ops/content/batches/<today>/park-lane-abaya/*`, queues pending approval.

## With photos

User: attaches 4 images + `captions and hashtags for this strand`

Agent: fills `ASSET_NOTES.md` from the images, then platform drafts.

## Weekly

User: `Weekly content`

Agent: fills a week calendar under `batches/<today>/_week/`, drafts packs for hero + support SKUs only.
