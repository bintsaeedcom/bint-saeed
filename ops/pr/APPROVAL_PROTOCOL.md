# Approval queue protocol

**Nothing is sent until a human marks `approved`.**

## Files

| Path | Purpose |
|------|---------|
| `ops/pr/queue/PENDING_APPROVAL.md` | Human review surface (today’s drafts) |
| `ops/pr/queue/APPROVED.md` | Cleared to send (you or a teammate sends) |
| `ops/pr/queue/REJECTED.md` | Do not send; note why |
| `ops/pr/batches/YYYY-MM-DD/prospects.json` | Day’s 50 research objects |
| `ops/pr/batches/YYYY-MM-DD/drafts/` | One markdown file per draft |
| `ops/pr/ledger/prospects.jsonl` | Master append-only ledger |

## Human review checklist

For each draft:

1. Proof line is real (opens, matches the person)  
2. No founder / personal narrative  
3. No invented claims vs `BRAND_KIT_CORPORATE.md`  
4. Contact channel is appropriate  
5. Tone is house-calm, not agency-spam  
6. CTA is clear and light  

Reply in chat or edit status:

- `APPROVE <draft-id>` — move to APPROVED.md  
- `EDIT <draft-id>: …` — agent revises, returns to pending  
- `REJECT <draft-id>: reason` — archive  

## Sending (manual until automations exist)

Preferred: your Google Workspace / domain email as **Bint Saeed Communications**.  
Log `sent` + timestamp in the prospect object and ledger after you send.

## Soft daily KPI

| Metric | Target |
|--------|--------|
| New researched prospects | ~50 |
| Drafts written | 15–25 (priority 1–2 only) |
| Submitted to approval | ≤ 20 (quality over volume) |
| Human-approved sends | whatever you clear |
| AI-directory updates filed | 3–5 |
