## Step 1: Create an issue from a session in the Copilot App

Welcome, {{login}}! 👋 Every good change starts as an idea. In this exercise you'll take one idea — a small bookmarks app — all the way from a session to a merged pull request, entirely inside the **GitHub Copilot App**.

### 📖 Theory: from a session to a work item

The GitHub Copilot App gives you **agent sessions** that run against your checked-out repository, plus a connected view of its issues and pull requests — all without leaving the app. A great first move is to turn a rough idea into a tracked **issue** so planning and execution live in the same place.

The app you'll build stores each bookmark as two things: the **original URL** and a locally generated **short slug** (a display alias — there's no shortener service or backend).

### Running this exercise in the Copilot App

You'll complete every step **inside the app**, using these surfaces:

| Surface | What it's for |
| --- | --- |
| **Sessions** | Drive the work — start a **New session** on your checked-out repository, and use an **issue-driven session** (which runs on its own branch) for the build in Step 3. |
| **Issue side panel** | Opens a repository **issue** — this walkthrough (**#1**) and the app issue you'll create — pinned beside your session so instructions and graded feedback stay in view. Ask the agent to `open issue #1 in the side panel`. |
| **Browser canvas** | The right side panel renders **live pages** — the README, the pull request, and the running app — with clickable links and buttons. Ask the agent, for example: `open the main readme of this repository in a browser canvas`. |
| **Terminal canvas** | Runs commands you can watch, like the dev server in Step 4 (`npm run dev`). |
| **Files & Changes tabs + editor canvas** | Every session has built-in **Files** and **Changes** tabs for the working tree and diff. For the light hand-edits, open a file in a **lightweight editor canvas** and save it. |

<!-- image: the app's surfaces — a session, the issue side panel, a browser canvas, and the Files/Changes tabs -->

Three shipping patterns keep ceremony proportional to the change:

- **Light commit → `main`** (Step 4): a single file — your proof screenshot — committed straight to the default branch, no pull request.
- **Agent merge** (Step 2): a light edit made in a session, then shipped through a pull request the app opens and merges for you automatically.
- **Feature work → issue-driven session → PR** (Step 3): the real build, delivered on its own branch and merged in Step 3.

> [!IMPORTANT]
> Do **Step 2 before starting the Step 3 session.** The build session branches from `main` and inherits the custom instructions, so the client-boundary rule must already be there.

### Resetting or retrying

- Each check re-runs automatically when you re-trigger it (edit the issue, push the file again, or reopen/update the PR).
- If a step's feedback shows a red ❌, follow the **Having trouble?** notes in that step's comment and try again — there's no penalty for retries.
- To start completely fresh, delete your copy and copy the exercise again.

#### References

- [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started)
- [Managing issues and pull requests with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests)

### ⌨️ Activity 1: Install and connect

> [!NOTE]
> This activity is **app-only** and can't be graded — there's no repository signal for install or sign-in. Complete it to unlock the graded work in Activity 2.

To use the GitHub Copilot app, the first step — as you might imagine — is to install it. Versions are available for Windows, macOS, and Linux. Let's install the app, authenticate, and add your exercise repository to the app.

1. In a browser, open the landing page for the GitHub Copilot app: **https://github.com/features/ai/github-app**. *(This download page is the only step outside the app — everything after install happens inside the Copilot App.)*

   <img width="520" alt="GitHub Copilot app download page with platform options" src="../images/step1-app-download-page.png" />

1. Download the app for your platform and install it following the instructions provided on the landing page.

   <img width="480" alt="Downloading and installing the GitHub Copilot app" src="../images/step1-app-download.gif" />

1. Open the app once it's installed.
1. Select **Sign in to GitHub** and follow the prompts to authenticate.
1. After authenticating, add your exercise repository. Click the **+** next to **Sessions**, then choose **Repository URL…**.

   <img width="320" alt="Add project menu in the Copilot App with Repository URL highlighted" src="../images/step1-add-repo-url.png" />

1. Paste the clone URL for the (`{{full_repo_name}}`) repo you just created, pick your GitHub account, and select **Clone**.

   <img width="420" alt="Clone repository dialog with the exercise repository URL entered" src="../images/step1-clone-repo-url.png" />

1. Start a **New session** on your checked-out repository. Reference the exercise issue with `#`, then prompt the agent to open it in the side panel and wait for you:

   > ![Static Badge](https://img.shields.io/badge/Prompt-text?style=for-the-badge&logo=github-copilot&logoColor=white&labelColor=purple&color=purple)
   >
   > ```prompt
   > Open up issue #1 in the side panel and stop
   > Don't plan or use autopilot wait for further instructions from the user
   > ```

   The exercise issue (**#1**) opens in the app's **issue side panel**, so the
   step instructions and graded feedback stay pinned next to your session as
   you work — no separate sign-in needed.

   <img width="520" alt="Exercise issue #1 opened in the app's side panel, listed under 'Relevant from session' in the session panel menu" src="../images/step1-open-issue-side-panel.png" />

   <details>
   <summary>How to reference the issue and keep the agent waiting 👀</summary><br/>

   Type <code>#</code> in the prompt to reference the exercise issue by name:

   <img width="360" alt="Typing # in the prompt shows the exercise issue in the reference picker" src="../images/step1-open-issue-reference.png" />

   Your prompt then shows the issue as a chip:

   <img width="440" alt="The prompt with the exercise issue referenced as a #1 chip" src="../images/step1-open-issue-prompt.png" />

   If the agent offers a plan, choose **Exit plan mode and I will prompt myself** so it stops and waits for your next instruction instead of running ahead:

   <img width="420" alt="Plan summary with 'Exit plan mode and I will prompt myself' selected" src="../images/step1-exit-plan-mode.png" />

   </details>

1. In the session, confirm Copilot can see the repository context (for example, ask it to summarize the README).

### ⌨️ Activity 2: Create the app issue from a session

1. In your session, ask Copilot to draft an issue to build the bookmarks app. For example:

   > ![Static Badge](https://img.shields.io/badge/Prompt-text?style=for-the-badge&logo=github-copilot&logoColor=white&labelColor=purple&color=purple)
   >
   > ```prompt
   > Draft a GitHub issue and create it in this repository.
   > - Title: "Build the bookmarks app"
   > - Describe an Astro app that saves each bookmark as:
   >   - its original URL, and
   >   - a locally generated short slug
   > - Bookmarks are persisted in the browser
   >
   > Once created, open this new issue in the side panel so I can read and
   > click through it. Do not plan or implement or work on this issue at
   > this time.
   > ```

1. Make sure the created issue:
   - has a **title that mentions bookmarks** (for example, `Build the bookmarks app`), and
   - has a **body that names both** the **original URL** and the **short slug**.

   <!-- image: created app issue open in the side panel -->

> [!TIP]
> If the session can't see repository context, re-check that **your copy** of the exercise repository is connected before drafting the issue.

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure the issue you created is a **new issue**, separate from this walkthrough issue.
- The title must contain the word **bookmark** (any case).
- The body must mention both a **URL** and a **slug**, and be more than a sentence long.
- Edit the issue title or body to re-run the check.
- Still stuck on the app itself? See [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started).

</details>
