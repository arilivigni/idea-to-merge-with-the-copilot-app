## Step 3: Build the app in a session and open a pull request

The rules are set. 🛠️ Now deliver the feature the way a team really does: in a dedicated, issue-driven session that opens a pull request for review.

### 📖 Theory: the issue-driven session

This is where the extra ceremony pays off. Launching a session **from the app issue** lets the agent implement the feature on its **own branch** and open a pull request — unlike the light `main` edits in Steps 2 and 5.

- The session branches **from `main`**, so it inherits your Step 2 custom instructions.
- Each bookmark stores its **original URL** and a locally generated **short slug** (base62 of a hash/counter, for example). There is **no shortener service, redirect, or backend** — the slug is a display alias.
- Bookmarks persist with **`localStorage`**, accessed **only** behind a **`client:load`** boundary so the static build doesn't fail.

<!-- image: bookmarks UI showing an original URL and its short slug -->

<!-- image: pull request opened from the session -->

> [!IMPORTANT]
> Complete **Step 2 first.** If you start this session before the instructions are on `main`, the agent won't see the client-boundary rule and the build check below may fail.

#### References

- [Agent sessions in the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started)
- [Astro components and client directives](https://docs.astro.build/en/reference/directives-reference/#client-directives)

### ⌨️ Activity 1: Build in a session, then open the PR (graded)

1. From the **app issue** you created in Step 1, **launch an issue-driven session** (open the issue in **My work**, then click **New session**). Follow the work in the conversation, and use the session's **Files** and **Changes** tabs — or a **lightweight editor canvas** — to inspect or adjust files on the session branch.

   <!-- image: issue-driven session running with the Files and Changes tabs -->
1. Prompt the agent to implement the bookmarks feature in `src/components/Bookmarks.astro`: add a bookmark, generate a short slug, and save both to **`localStorage`** from a **`client:load`** boundary (or the inline `<script>` already scaffolded). For example:

   > ![Static Badge](https://img.shields.io/badge/Prompt-text?style=for-the-badge&logo=github-copilot&logoColor=white&labelColor=purple&color=purple)
   >
   > ```prompt
   > Implement the bookmarks feature in src/components/Bookmarks.astro. Add a bookmark by its original URL, generate a short base62 slug for it, and save both to localStorage. Keep all localStorage access behind a client:load boundary (or the inline <script>) so the static Astro build never touches browser APIs.
   > ```

1. Commit and **open a pull request** whose body links the app issue with a closing keyword:

   ```text
   Closes #<app-issue-number>
   ```

<!-- image: opened pull request referencing the app issue -->

> [!TIP]
> Point `Closes #<n>` at the **app issue** (not this walkthrough issue) so merging in Step 4 closes the right one automatically.

<details>
<summary>Having trouble? 🤷</summary><br/>

- The PR body must contain a closing keyword and an issue number, e.g. `Closes #2`.
- `src/components/Bookmarks.astro` must reference **`localStorage`**.
- The app must build. If the build fails, make sure `localStorage` runs inside the client `<script>` / `client:load` boundary, never at the top of the component frontmatter.
- Still stuck on the app itself? See [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started).

</details>
