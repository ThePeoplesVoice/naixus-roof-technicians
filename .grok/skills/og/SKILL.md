## Brand-asset pass:

- Use `/workspace/.grok/og-pending` while the pass is in flight; the marker expires after 10 minutes.
- The parent flow must never wait_tasks for this pass and must never get_task_output from it before moving on.
- Self-check the finished files with `node scripts/brand-check.mjs --root /workspace`.
- For a game or canvas app, self-check with `node scripts/brand-check.mjs --game --root /workspace`.
- For a plain utility that intentionally keeps the placeholder card, self-check with `node scripts/brand-check.mjs --placeholder-ok --root /workspace`.

## Hand-over recipes

See the references for the atomic hand-over commands.
