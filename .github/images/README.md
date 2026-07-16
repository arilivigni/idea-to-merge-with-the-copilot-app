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

## Still to capture (one per remaining `<!-- image: -->` placeholder)

| Suggested file | Step · Activity | Shows |
| --- | --- | --- |
| `step1-three-surfaces.png` | 1 · Theory | The app's three surfaces: a session, a browser canvas, and the Files/Changes tabs |
| `step1-readme-browser-canvas.png` | 1 · Act 1 | Exercise README open in a browser canvas |
| `step1-issue-created.png` | 1 · Act 2 | Created work-item issue with the bookmarks title |
| `step1-issue-browser-canvas.png` | 1 · Act 2 | Created issue open in a browser canvas |
| `step2-edit-instructions.png` | 2 · Act 1 | Editing `copilot-instructions.md` in an editor canvas |
| `step2-instructions-diff.png` | 2 · Act 1 | Diff of the committed `copilot-instructions.md` |
| `step3-bookmarks-ui.png` | 3 · Theory | Bookmarks UI: an original URL and its short slug |
| `step3-pr-opened.png` | 3 · Theory | Pull request opened from the session |
| `step3-session-controls.png` | 3 · Act 1 | Session mode, model, and run-location dropdowns below the prompt |
| `step3-session-files-changes.png` | 3 · Act 1 | Issue-driven session running with the Files and Changes tabs |
| `step3-pr-references-issue.png` | 3 · Act 1 | Opened pull request referencing the app issue |
| `step3-pr-review.png` | 3 · Act 2 | Pull request review view inside the app |
| `step3-merged-issue-closed.png` | 3 · Act 2 | Merged PR confirming the linked issue is closed |
| `step4-canvas-preview.png` | 4 · Theory | Browser canvas previewing the running app |
| `step4-terminal-dev.png` | 4 · Act 1 | `npm run dev` running in the session Terminal |
| `step4-canvas-bookmark.png` | 4 · Act 1 | Canvas showing the running app with a bookmark and its short slug |

When you add a capture, replace the matching `<!-- image: ... -->` comment in the step file
with `<img width="NN%" alt="..." src="../images/<name>.png" />` and move its row up to
**Captured**.
