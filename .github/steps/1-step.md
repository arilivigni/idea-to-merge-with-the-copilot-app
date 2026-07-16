## Step 1: Create an issue from chat in the Copilot App

Welcome, {{login}}! 👋 Every good change starts as an idea. In this exercise you'll take one idea — a small bookmarks app — all the way from a chat message to a merged pull request, entirely inside the **GitHub Copilot App**.

### 📖 Theory: from chat to a work item

The GitHub Copilot App gives you **quick chat** for lightweight tasks and a connected view of your repository's issues and pull requests — all without leaving the app. A great first move is to turn a rough idea into a tracked **issue** so planning and execution live in the same place.

<!-- image: app install and sign-in screen -->

<!-- image: quick chat drafting the bookmarks app issue -->

The app you'll build stores each bookmark as two things: the **original URL** and a locally generated **short slug** (a display alias — there's no shortener service or backend).

### Running this exercise in the Copilot App

You'll complete every step **inside the app**, using three surfaces:

| Surface | What it's for |
| --- | --- |
| **Chat & sessions** | Drive the work — use **quick chat** for lightweight asks, and an **issue-driven session** (which runs on its own branch) for the build in Step 3. |
| **Browser canvas** | The right side panel renders **live GitHub pages** — the README, your issue, the pull request, and the running app — with clickable links and buttons. Just ask the agent, for example: `open the main readme of this repository in a browser canvas`. |
| **Files & Changes tabs + editor canvas** | Every session has built-in **Files** and **Changes** tabs for the working tree and diff. For the light hand-edits, open a file in a **lightweight editor canvas** and save it. |

<!-- image: the app's three surfaces — chat, a browser canvas, and the Files/Changes tabs -->

Two commit patterns keep ceremony proportional to the change:

- **Light edit → `main`** (Steps 2 and 5): a single-file change made in the editor canvas and committed straight to the default branch.
- **Feature work → issue-driven session → PR** (Step 3): the real build, delivered on its own branch and merged in Step 4.

> [!IMPORTANT]
> Do **Step 2 before starting the Step 3 session.** The build session branches from `main` and inherits the custom instructions, so the client-boundary rule must already be there.

### Resetting or retrying

- Each check re-runs automatically when you re-trigger it (edit the issue, push the file again, or reopen/update the PR).
- If a step's feedback shows a red ❌, follow the **Having trouble?** notes in that step's comment and try again — there's no penalty for retries.
- To start completely fresh, delete your copy and copy the exercise again.

#### References

- [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started)
- [Managing issues and pull requests with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started)

### ⌨️ Activity 1: Install and connect

> [!NOTE]
> This activity is **app-only** and can't be graded — there's no repository signal for install or sign-in. Complete it to unlock the graded work in Activity 2.

To use the GitHub Copilot app, the first step — as you might imagine — is to install it. Versions are available for Windows, macOS, and Linux. Let's install the app, authenticate, and add your exercise repository to the app.

1. In a browser, open the landing page for the GitHub Copilot app: **https://github.com/features/ai/github-app**.

   <img width="70%" alt="GitHub Copilot app download page with platform options" src="../images/step1-app-download-page.png" />

1. Download the app for your platform and install it following the instructions provided on the landing page.

   <img width="70%" alt="Downloading and installing the GitHub Copilot app" src="../images/step1-app-download.gif" />

1. Open the app once it's installed.
1. Select **Sign in to GitHub** and follow the prompts to authenticate.
1. After authenticating, you'll be asked about connecting your repositories. Select the (`{{full_repo_name}}`) repo you just created. (You can also add it later with the **+** next to **Sessions** → **Repository URL**.)

   <!-- image: connecting the exercise repository in the app -->

1. Open a **session** on your repository, then prompt the agent to bring this exercise up in the right side panel:

   > open the main readme of this repository in a browser canvas

   The README renders as a live page you can read and click through without leaving the app.

   <!-- image: exercise README open in a browser canvas -->

1. Open **quick chat** and confirm Copilot can summarize the repository context.

### ⌨️ Activity 2: Create the app issue from chat

1. In quick chat, ask Copilot to draft an issue to build the bookmarks app. For example:

   > Draft a GitHub issue titled "Build the bookmarks app". In the body, describe an Astro app that saves each **bookmark** as its **original URL** plus a locally generated short **slug**, persisted in the browser. Then create the issue in this repository.

1. Make sure the created issue:
   - has a **title that mentions bookmarks** (for example, `Build the bookmarks app`), and
   - has a **body that names both** the **original URL** and the **short slug**.

   <!-- image: created issue with the title marker applied -->

1. Open the issue you just created in a **browser canvas** so you can keep it visible while you work through the rest of the exercise. In the app, open a browser canvas and navigate to the new issue (for example, `https://github.com/{{full_repo_name}}/issues`), then select your **Build the bookmarks app** issue.

   <!-- image: created issue open in a browser canvas -->

> [!TIP]
> If chat can't see repository context, re-check that **your copy** of the exercise repository is connected before drafting the issue.

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure the issue you created is a **new issue**, separate from this walkthrough issue.
- The title must contain the word **bookmark** (any case).
- The body must mention both a **URL** and a **slug**, and be more than a sentence long.
- Edit the issue title or body to re-run the check.
- Still stuck on the app itself? See [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started).

</details>
