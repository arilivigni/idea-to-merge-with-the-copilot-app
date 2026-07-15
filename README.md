# Idea to Merge with the Copilot App

_Take an idea from a chat message to a merged pull request — entirely in the GitHub Copilot App — while building a small bookmarks app._

## Welcome

- **Who is this for**: Developers who want to run the full GitHub workflow — issue, session, pull request, merge, preview — without leaving the GitHub Copilot App.
- **What you'll learn**: How to turn a chat idea into a tracked issue, set repository custom instructions, build a feature in an issue-driven session, review and merge the pull request, and preview the running app in a canvas.
- **What you'll build**: A tiny **Astro** bookmarks app that saves each URL with a locally generated **short slug**, persisted in the browser with `localStorage`.
- **Prerequisites**:
  - The **GitHub Copilot App** installed and signed in
  - A GitHub Copilot subscription (Free, Pro, Pro+, Business, or Enterprise)
  - Basic familiarity with GitHub issues and pull requests
- **How long**: This exercise takes roughly **45 minutes** to complete. The Step 3 build-and-ship work is the long pole, so allow a little more on your first run.

In this exercise, you will:

1. Create a work item **issue from chat**.
2. Set project rules in **`.github/copilot-instructions.md`** on `main`.
3. Build the bookmarks app in an **issue-driven session** and open a pull request.
4. **Review and merge** the pull request, auto-closing the linked issue.
5. Preview the running app in a **browser canvas** and submit your proof.

### How to start this exercise

Simply copy the exercise to your account, then give your favorite Octocat (Mona) **about 20 seconds** to prepare the first lesson, then **refresh the page**.

[![](https://img.shields.io/badge/Copy%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/new?template_owner=arilivigni&template_name=idea-to-merge-with-the-copilot-app&owner=%40me&name=idea-to-merge-with-the-copilot-app&description=Exercise:+Idea+to+Merge+with+the+Copilot+App&visibility=public)

<details>
<summary>Having trouble? 🤷</summary><br/>

When copying the exercise, we recommend the following settings:

- For owner, choose your personal account or an organization to host the repository.

- We recommend creating a public repository, since private repositories will use Actions minutes.

If the exercise isn't ready in 20 seconds, please check the [Actions](../../actions) tab.

- Check to see if a job is running. Sometimes it simply takes a bit longer.

- If the page shows a failed job, please submit an issue. Nice, you found a bug! 🐛

</details>

## Running this exercise in the Copilot App

You can complete every step inside the app using a **three-panel** layout:

| Panel | What it shows |
| --- | --- |
| **1 · Issue** | The walkthrough issue where each step's instructions and grading feedback appear as comments. |
| **2 · Codespace editor** | The repository code — used for the light edits in Steps 2 and 5, and to watch the session in Step 3. |
| **3 · App preview** | A browser canvas on the Codespace's **public** port, rendering the running app for the Step 5 demo. |

Two commit patterns keep ceremony proportional to the change:

- **Light edit → `main`** (Steps 2 and 5): a single-file change committed straight to the default branch.
- **Feature work → issue-driven session → PR** (Step 3): the real build, delivered on its own branch and merged in Step 4.

> [!IMPORTANT]
> Do **Step 2 before starting the Step 3 session.** The build session branches from `main` and inherits the custom instructions, so the client-boundary rule must already be there.

## Resetting or retrying

- Each check re-runs automatically when you re-trigger it (edit the issue, push the file again, or reopen/update the PR).
- If a step's feedback shows a red ❌, follow the **Having trouble?** notes in that step's comment and try again — there's no penalty for retries.
- To start completely fresh, delete your copy and copy the exercise again.

---

&copy; 2026 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)
