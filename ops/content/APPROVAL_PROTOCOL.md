# Approval protocol — content packs

Same spirit as PR: **nothing goes live without a human pass**.

## Statuses

| Status | Meaning |
|--------|---------|
| `awaiting_approval` | Drafted in `batches/` |
| `approved` | Safe to schedule/post |
| `rejected` | Do not use; note why |
| `posted` | Live; optional performance note |

## Human checklist before approve

- [ ] Facts match site / PDP  
- [ ] Tone is luxury-calm and **human** (not AI boilerplate)  
- [ ] Platform shapes correct (X short · TikTok title+long · Pinterest SEO · IG medium)  
- [ ] Every asset renamed `bint-saeed-…` + alt text present  
- [ ] URLs correct  
- [ ] No founder story / invented claims  
- [ ] Hashtags within platform caps  
- [ ] Images are **real house/product** assets  

## Queue files

- `queue/PENDING_APPROVAL.md` — inbox  
- `queue/APPROVED.md` — ready to schedule  
- `queue/REJECTED.md` — with reason  
- `queue/POSTED.md` — shipped log (optional one-liners)

Move or copy the line between files when status changes. Keep the batch folder as the source of full copy.
