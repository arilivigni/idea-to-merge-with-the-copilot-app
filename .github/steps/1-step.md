## Step 1: Create an issue from chat in the Copilot App

Welcome, {{login}}! 👋 Every good change starts as an idea. In this exercise you'll take one idea — a small bookmarks app — all the way from a chat message to a merged pull request, entirely inside the **GitHub Copilot App**.

### 📖 Theory: from chat to a work item

The GitHub Copilot App gives you **quick chat** for lightweight tasks and a connected view of your repository's issues and pull requests — all without leaving the app. A great first move is to turn a rough idea into a tracked **issue** so planning and execution live in the same place.

<!-- image: app install and sign-in screen -->

<!-- image: quick chat drafting the bookmarks app issue -->

The app you'll build stores each bookmark as two things: the **original URL** and a locally generated **short slug** (a display alias — there's no shortener service or backend).

#### References

- [Getting started with the Copilot App](https://docs.github.com/en/copilot)
- [Managing issues and pull requests with Copilot](https://docs.github.com/en/copilot)

### ⌨️ Activity 1: Install and connect (guided, not graded)

> [!NOTE]
> This activity is **app-only** and can't be graded — there's no repository signal for install or sign-in. Complete it to unlock the graded work in Activity 2.

1. Install the **GitHub Copilot App** and sign in.
1. Connect **your copy** of this exercise repository (`{{full_repo_name}}`).
1. Open **quick chat** and confirm Copilot can summarize the repository context.

<!-- image: connected repository shown in the app with quick chat open -->

### ⌨️ Activity 2: Create the app issue from chat (graded)

1. In quick chat, ask Copilot to draft an issue to build the bookmarks app. For example:

   > Draft a GitHub issue titled "Build the bookmarks app". In the body, describe an Astro app that saves each **bookmark** as its **original URL** plus a locally generated short **slug**, persisted in the browser. Then create the issue in this repository.

1. Make sure the created issue:
   - has a **title that mentions bookmarks** (for example, `Build the bookmarks app`), and
   - has a **body that names both** the **original URL** and the **short slug**.

<!-- image: created issue with the title marker applied -->

> [!TIP]
> If chat can't see repository context, re-check that **your copy** of the exercise repository is connected before drafting the issue.

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure the issue you created is a **new issue**, separate from this walkthrough issue.
- The title must contain the word **bookmark** (any case).
- The body must mention both a **URL** and a **slug**, and be more than a sentence long.
- Edit the issue title or body to re-run the check.

</details>
