1. Keep validation local and incremental.
2. Preserve the current public brand and contact flows.
3. Prefer small, reversible edits.
4. Re-run checks after touching shared scripts.
5. Keep generated assets out of committed temp paths.
6. **Brand-asset pass**
   - Use `/workspace/.grok/og-pending` as the in-flight marker and treat it as stale after 10 minutes.
   - This pass is asynchronous; never wait_tasks for it and never get_task_output from it before continuing.
7. Final verification happens after the pass either lands its files or is explicitly reported as blocked.
