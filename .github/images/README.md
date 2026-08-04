# Exercise images

Screenshots referenced by the step instructions. Learner-facing steps reference these
with relative paths (`../images/<name>.png`). Where a capture doesn't exist yet, the step
files use `<!-- image: ... -->` HTML-comment placeholders so issue comments still render cleanly.

## Captured (already in the steps)

| File | Step | Shows |
| --- | --- | --- |
| `step1-app-download-page.png` | 1 | GitHub Copilot app download page with platform options |
| `step1-app-download.gif` | 1 | Downloading and installing the GitHub Copilot app |
| `step1-add-repo-url.png` | 1 | Add-project menu with **Repository URL…** highlighted |
| `step1-clone-repo-url.png` | 1 | Clone repository dialog with the exercise URL entered |
| `new-session.png` | 2·3·5 · Act 1 | The **New session** button in the top-right of the session panel, next to the repository name (shared across steps 2, 3, and 5) |
| `step1-open-issue.png` | 1 · Act 1 | Exercise issue #1 above the prompt field with a 'Click to open' callout |
| `step1-reopen-issue.png` | 1·2·3·4 · Act 1 tip | Session panel menu listing the repo and the Exercise: Idea to Merge issue to reopen it |
| `step1-new-session-panel.png` | 1 · Act 1 | **New session** button with its dropdown in the top-right of the issue side panel |
| `step2-plan-mode.png` | 2 · Act 1 | Session mode dropdown with **Plan** selected (Plan first, execute when ready) |
| `ghcp-app-autopilot.png` | 2 · Act 1 | Plan summary with **Approve and implement with autopilot (recommended)** highlighted |
| `ghcp-app-agent-merge.png` | 2·3 · Act 1; 5 · Act 1 | Session action dropdown with **Agent merge** selected (Automate your pull request lifecycle), above Create PR / Create draft PR |
| `ghcp-app-allow-agent-merge.png` | 5 · Act 1 | Session action dropdown with **Agent merge** enabled — toggle on and *Allow the agent to* list (Address reviews, Fix CI failures, Resolve conflicts, Merge pull request) |
| `ghcp-app-ready-to-merge.png` | 5 · Act 1 | Session action button showing **Ready to merge** with the Agent merge toggle — roadmap lands on `main` automatically |
| `ghcp-app-autopilot-result.png` | 2 · Act 1 | Autopilot result: pull request created via agent merge (+2 -7, PR #3, Plan complete) |
| `ghcp-app-plan.png` | 2 · Act 1 details | Session **Plan** tab for the copilot-instructions update |
| `ghcp-app-changes.png` | 2 · Act 1 details | Session **Changes** tab: copilot-instructions.md diff (TODO removed, rules added) |
| `ghcp-app-pr.png` | 2 · Act 1 details | Session **PR #3** tab: open pull request targeting `main` |
| `step3-open-issue.png` | 3 · Act 1 | The **Build the bookmarks app** issue #2 highlighted above the prompt field, ready to reference in the session |
| `step3-issue-prompt.png` | 3 · Act 1 | The build prompt in the session with issue **#2** referenced as a chip |
| `step3-reopen-issue.png` | 3 · Act 1 tip; 4 · Act 1 step 1 | Session panel menu with the **Build the bookmarks app** issue to reopen it in the side panel |
| `ghcp-app-step3-pr.png` | 3 · Act 1 details | Session **PR #4** tab: open pull request 'Implement bookmarks feature with base62 mona- slugs' that Closes #2 (+107 -21 into `main`) |
| `ghcp-app-step3-changes.png` | 3 · Act 1 details | Session **Changes** tab: Bookmarks.astro diff replacing the TODO scaffold with the mona- slug logic (+107 -21) |
| `ghcp-app-step3.png` | 3 · Act 1 | Session review of the base62 `nextSlug` helper and event wiring, with **Changes** and **PR #4** buttons |
| `ghcp-app-terminal-running-app.png` | 4 · Act 1 | Terminal canvas with the dev server running and the ⌘+Click / Ctrl+Click callout to open the local URL in a browser canvas |
| `ghcp-app-mona-bookmark-mngr-app.png` | 4 · Act 1 | Browser canvas showing Mona's Bookmark Manager App with a saved bookmark rendered as `url :: mona-` slug and a Copy button |

## Still to capture (one per remaining `<!-- image: -->` placeholder)

| Suggested file | Step · Activity | Shows |
| --- | --- | --- |
| `step1-three-surfaces.png` | 1 · Theory | The app surfaces: a session, the issue side panel, a browser canvas, and the Files/Changes tabs |
| `step1-issue-created.png` | 1 · Act 2 | Created work-item issue with the bookmarks title |
| `step1-issue-side-panel.png` | 1 · Act 2 | Created app issue open in the side panel |
| `step2-instructions-diff.png` | 2 · Act 1 | Diff of the committed `copilot-instructions.md` |
| `step2-merged-pr.png` | 2 · Act 2 | Merged `copilot-instructions.md` pull request in the app |
| `step2-instructions-on-main.png` | 2 · Act 2 | `copilot-instructions.md` on `main` with the two rules and no TODO |
| `step3-bookmarks-ui.png` | 3 · Theory | Bookmarks UI: an original URL and its short slug |
| `step3-pr-opened.png` | 3 · Theory | Pull request opened from the session |
| `step3-merged-pr.png` | 3 · Act 2 | Merged pull request in the app |
| `step3-issue-closed.png` | 3 · Act 2 | Linked app issue automatically closed |
| `step4-terminal-dev.png` | 4 · Act 1 | Dev server running in a Terminal canvas |
| `step4-browser-canvas-preview.png` | 4 · Theory & Act 1 | Bookmarks app running live in a browser canvas |
| `step4-bookmark-in-canvas.png` | 4 · Act 1 | A saved bookmark showing its original URL and short slug in the browser canvas |
| `step4-playwright-trust.png` | 4 · Act 2 | One-time prompt to trust the Playwright MCP server |
| `step5-roadmap-canvas.png` | 5 · Theory & Act 1 | Editor canvas showing the drafted `ROADMAP.md` beside the session |
| `step5-issue-from-roadmap.png` | 5 · Act 2 | A GitHub issue created from a roadmap item |
| `step4-playwright-capture.png` | 4 · Act 2 | The Playwright browser window opening to drive the app and capture the screenshot |
| `step4-proof-bookmark.png` | 4 · Act 2 | Captured proof: running app with a bookmark and its short slug |
| `step4-proof-files-tab.png` | 4 · Act 2 | demo-proof.png previewed in the session Files tab |

When you add a capture, replace the matching `<!-- image: ... -->` comment in the step file
with `<img width="NN%" alt="..." src="../images/<name>.png" />` and move its row up to
**Captured**.
