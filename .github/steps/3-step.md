## Step 3: Build, open, and merge the pull request

The rules are set. 🛠️ Now deliver the feature the way a team really does: build it in a dedicated session, open a pull request, review it, and ship it with **agent merge** — all in one native flow in the app.

### 📖 Theory: build in a dedicated session

This is where the extra ceremony pays off. Build in the **nested session you parked in Step 1** — it already hangs off the **app issue** and branches from `main`, so it carries your Step 2 instructions. Just reopen it and prompt. The session implements the feature on its **own branch** and opens a pull request — unlike the light `main` edits in Steps 2 and 4.

- The session branches **from `main`**, so it inherits your Step 2 custom instructions.
- Before it starts, you set three controls from the dropdowns below the prompt: **where it runs** (a new working tree, your local repository, or a cloud sandbox), the **session mode**, and the **model** and reasoning effort (**Auto** lets the app pick).
- The **session mode** sets how much autonomy the agent has:
  - **Interactive** — the agent proposes changes and waits for your input.
  - **Plan** — the agent drafts a plan you approve before it executes.
  - **Autopilot** — the agent works end to end on its own.
- Each bookmark stores its **original URL** and a locally generated **short slug** (base62 of a hash/counter, for example). There is **no shortener service, redirect, or backend** — the slug is a display alias.
- Bookmarks persist with **`localStorage`**, accessed **only** behind a **`client:load`** boundary so the static build doesn't fail.
- When the work looks good, you review the diff and let **agent merge** open and merge the pull request for you — the same native action you used in Step 2, now on a real feature branch. Because only the **app PR** is open, there's no second PR to confuse it with.
- This exercise uses an **unprotected** branch, so the merge isn't blocked by required checks or reviews. (Required-check gating comes in a follow-on exercise.)
- Because the PR body uses a closing keyword, merging automatically **closes the linked app issue**.

> [!NOTE]
> **Why the nested session — not the Step 2 one?** The nested session you started in Step 1 hangs off the **app issue** and branches from the **current `main`** (which now has your Step 2 instructions), so it's already linked to the right work item with a clean tree. The build prompt still links the app issue with `Closes …/issues/2`, so no closing keyword is left to chance. Reusing the Step 2 session risks a branch that's **behind `main`** — so it may miss the client-boundary rule and fail the build gate — and mixes a docs edit with a feature build. Keep it **one session per work item**.

<!-- image: bookmarks UI showing an original URL and its short slug -->

<!-- image: pull request opened from the session -->

> [!IMPORTANT]
> Complete **Step 2 first.** If you start this session before the instructions are on `main`, the agent won't see the client-boundary rule and the build check below may fail.

#### References

- [Working with agent sessions in the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions)
- [Astro components and client directives](https://docs.astro.build/en/reference/directives-reference/#client-directives)

### ⌨️ Activity 1: Build the feature and ship it with agent merge (graded)

> [!TIP]
> You can reopen these step instructions anytime: in your session, reference the **Exercise: Idea to Merge with the Copilot App** issue (that's the walkthrough issue **#1** from your first session) to bring it back into the side panel.
>
> <img width="360" alt="Session panel menu listing the Exercise: Idea to Merge with the Copilot App issue to reopen it" src="../images/step1-reopen-issue.png" />

1. Go to the nested session created in Step 1.

   <img width="360" alt="Session menu showing the nested Build the bookmarks app session under the exercise issue" src="../images/step3-nested-session.png" />
1. Set the session controls from the dropdowns below the prompt field:
   - **Run location:** choose **a new working tree** (or your local repository) so the work lands on its own branch.
   - **Session mode:** pick **Plan** to review the agent's approach first, or **Interactive** to work step by step. Avoid **Autopilot** for this exercise so you can see each change.
   - **Model:** leave it on **Auto** unless you have a preference.

   <!-- image: session mode, model, and run-location dropdowns below the prompt -->

   Follow the work in the conversation, and use the session's **Files** and **Changes** tabs — or a **lightweight editor canvas** — to inspect or adjust files on the session branch.

   <!-- image: session running with the Files and Changes tabs -->
1. In one prompt, have the agent build the feature, **open the pull request**, walk you through the changes, and **ship it with agent merge** — the native Copilot App flow. The prompt already links your **Build the bookmarks app** issue (issue **#2**):

   > ![Static Badge](https://img.shields.io/badge/Prompt-text?style=for-the-badge&logo=github-copilot&logoColor=white&labelColor=purple&color=purple)
   >
   > ```prompt
   > Implement the bookmarks feature in src/components/Bookmarks.astro:
   > - Add a bookmark by its original URL
   > - Generate a short base62 slug for each bookmark
   > - Save both the URL and the slug to localStorage
   > - Keep all localStorage access behind a client:load boundary
   >   (or the inline <script>) so the static Astro build never
   >   touches browser APIs
   >
   > Then ship it the native way:
   > - Open a pull request with a body that includes
   >   "Closes https://github.com/{{full_repo_name}}/issues/2"
   > - Walk me through the diff so I can review the changes
   >
   > Don't automatically create a pull request
   > Provide helpful tips about agent merge
   > ```

1. **Review the diff, then let agent merge land it.** Watch the changes in the session's **Changes** tab (or a browser canvas on the PR), then confirm **Agent merge** from the session's action dropdown so the app merges the pull request into `main`. Because the PR body uses a closing keyword, merging **closes the linked app issue** automatically.

   <!-- image: opened pull request referencing the app issue -->

   <img width="380" alt="Session action dropdown with Agent merge selected to automate the pull request lifecycle" src="../images/step3-agent-merge-dropdown.png" />

> [!TIP]
> Point `Closes #<n>` at the **app issue** (not this walkthrough issue) so the merge closes the right one automatically.

> [!TIP]
> Inside the prompt field you can reference an issue with **`#`**, pull a file into context with **`@`**, and run slash commands with **`/`** — handy for steering the agent as it builds.

<details>
<summary>Having trouble? 🤷</summary><br/>

- The PR body must contain a closing keyword and an issue number, e.g. `Closes #2`.
- `src/components/Bookmarks.astro` must reference **`localStorage`**.
- The app must build. If the build fails, make sure `localStorage` runs inside the client `<script>` / `client:load` boundary, never at the top of the component frontmatter.
- If **Agent merge** doesn't appear, open the session's action dropdown (top of the session) and select it — the same control you used in Step 2.
- Still stuck on the app itself? See [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started).

</details>


### ⌨️ Activity 2: Confirm the merge landed

Agent merge handled the merge in Activity 1 — now confirm it landed. Watch this issue for **two result tables**: the **build** check when the pull request opened, and the **merge** check once agent merge completed. The merge check also **re-builds `main`**, so the exercise only advances when the shipped app still builds.

1. Confirm the pull request is **merged into `main`** (open the PR in a browser canvas, or check the **app PR** view).

   <!-- image: merged bookmarks pull request in the app's pull request view -->

1. Confirm the linked **app issue** is now **closed** — the closing keyword did this automatically.

   <!-- image: linked app issue (Build the bookmarks app) automatically closed -->

<details>
<summary>Having trouble? 🤷</summary><br/>

- If the merge check hasn't posted, make sure agent merge actually **merged** the PR (not just opened it).
- The exercise won't advance if the merged app fails to build. If the build row is red, fix the code on `main` (usually a `localStorage` call outside the `client:load` / `<script>` boundary) and push the fix.
- If the app issue stays open, confirm the PR body used `Closes https://github.com/{{full_repo_name}}/issues/2` (your **Build the bookmarks app** issue) — not the walkthrough issue — then close it manually if needed.
- Still stuck on the app itself? See [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started).

</details>
