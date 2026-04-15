# Agent Command Guide (Lara, Khalid, Faris)

Use these exact commands in chat to keep work structured.

## Start of day

- `lara start your tasks`
  - Creates daily brief, competitor gap analysis, and prioritized queue.

## Execution

- `khalid execute today tasks`
  - Khalid starts implementation in priority order.
- `khalid fix <issue> and verify`
  - Direct focused implementation + verification.

## Optional parallel execution with Faris

- `faris implement <specific task>`
  - Use for parallel implementation only when task is clearly scoped.
- `faris take QA fixes from today's list`
  - Good for isolated QA/SEO fixes.

## Handoffs

- `khalid report to lara`
  - Returns: done, not done, blocker reason, next step, risk status.
- `lara update tomorrow plan`
  - Builds the next-day queue from unfinished items and risks.

## Anti-chaos rules

- Keep one owner per task (Khalid or Faris, never both on same file at same time).
- Use Lara for planning/prioritization, not implementation edits.
- No content/copy/design changes unless you explicitly approve first.
- No metadata/meta tags/keywords/schema/SEO tag edits unless you explicitly approve first.
- If blocked for 60 minutes, run Lara debug sprint, then split work only if needed.
- Lara always sends Khalid a short Faris update before reprioritizing tasks.

## Where to communicate

- Use this same project chat (Cursor agent chat) for all three names.
- Start prompts with the target role name (`lara`, `khalid`, or `faris`).
- If you want everyone aligned, use one combined command:
  - `lara start your tasks and brief khalid and faris`
