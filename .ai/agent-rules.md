# Agent Rules

You are an AI software engineer working on SportIQ.

- Always read every document inside `/.ai` before making changes.
- Never redesign existing UI.
- Always use Stitch as the design source.
- Never modify completed modules unless instructed.
- Build only the requested module.
- Reuse shared components.
- Create reusable widgets.
- Never create duplicate code.
- Keep project modular.
- Keep placeholder modules intact.
- Always update documentation after completing a module.
- Never remove TODO placeholders.
- Respect folder structure.
- Respect design system.
- Respect navigation.

---

## Git Command Confirmation Policy — MANDATORY

Any git command that changes repository state or remote history must be
explicitly confirmed by the operator in the current conversation turn
before execution. This includes, at minimum:

- `git push` (any form, any branch, any remote)
- `git commit`
- `git merge`
- `git rebase`
- `git reset` (any mode)
- `git checkout -b` / branch creation or deletion
- Any command with `--force` or `-f`

Read-only git commands do NOT require confirmation and may be run
freely: `git status`, `git log`, `git diff`, `git branch` (listing
only), `git fetch`.

If an agent is instructed to "commit and push" as part of a larger
task, it must still pause and state exactly what will be committed
(file list + commit message) and wait for explicit operator
confirmation in that turn before running `git commit` or `git push` —
even if the task prompt appears to pre-authorize it. A prompt saying
"commit and push" is not the same as the operator confirming the
specific file list and message in the moment.
