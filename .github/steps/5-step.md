## Step 5: Plan the next release in a canvas

You shipped v1! 🚀 Before you wrap up, use a canvas one more way — not to preview the app, but to **think**. Plan what comes next for **Mona's Bookmark Manager App** and capture it as a roadmap you can act on.

### 📖 Theory: the editor canvas as a planning surface

So far you've used canvases to **run and preview** the app — a Terminal canvas for the dev server, a browser canvas for the live UI. A canvas is also a great place to **author a durable artifact**. Open an **editor canvas** on a new Markdown file and Copilot can draft it right beside your work, where you review and refine it before it lands — the same review-before-you-commit habit from the rest of this exercise, applied to a document instead of code.

- A real project is never "done" — there's always a next feature and a known bug. A short **`ROADMAP.md`** turns that into a plan the whole team can see.
- The editor canvas keeps the draft **reviewable**: you read what Copilot proposes, tweak it, then commit — unlike a throwaway chat reply.
- Once the roadmap exists, its top items become **tracked work** — you'll turn a couple into GitHub issues, closing the loop back to where you started in Step 1.

> [!NOTE]
> This is a **light commit**: the roadmap goes **directly to `main`** — no session or pull request needed, just like the docs edit in Step 2.

<!-- image: editor canvas open beside the session with a ROADMAP.md draft -->

#### References

- [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started)
- [About issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)

### ⌨️ Activity 1: Draft the roadmap in an editor canvas (graded)

Let Copilot draft the next-release plan in an editor canvas, then commit it to `main`.

> [!TIP]
> You can reopen these step instructions anytime: in your session, reference the **Exercise: Idea to Merge with the Copilot App** issue (that's the walkthrough issue **#1** from your first session) to bring it back into the side panel.
>
> <img width="360" alt="Session panel menu listing the Exercise: Idea to Merge with the Copilot App issue to reopen it" src="../images/step1-reopen-issue.png" />

1. Start a **New session** on your repository — click **New session** in the top-right of the session panel, next to the repository name.

   <img width="420" alt="The New session button highlighted in the top-right of the session panel, next to the repository name" src="../images/new-session.png" />
1. In the new session, ask Copilot to draft the roadmap and open it in an **editor canvas** so you can review it as it writes:

   > ![Static Badge](https://img.shields.io/badge/Prompt-text?style=for-the-badge&logo=github-copilot&logoColor=white&labelColor=purple&color=purple)
   >
   > ```prompt
   > Create ROADMAP.md for Mona's Bookmark Manager App and open it in an
   > editor canvas. Include two sections as Markdown bullet lists:
   > - Planned features (for example: search/filter bookmarks, edit a
   >   bookmark, tags or folders, import/export)
   > - Known bugs and risks (for example: duplicate slugs, empty-URL
   >   validation, losing bookmarks when localStorage is cleared)
   > Keep each item to one line so it can become a GitHub issue later.
   > ```

   <!-- image: editor canvas showing the drafted ROADMAP.md -->

1. Review the draft in the canvas — add, remove, or reword items so it reflects what *you* would build next. It's your plan, not just the model's.

1. When you're happy with it, **commit `ROADMAP.md` to `main`**. When it lands, a **result table** posts to this issue: it checks that `ROADMAP.md` exists and lists **at least three** items. Watch this issue for it.

<details>
<summary>Having trouble? 🤷</summary><br/>

- The file must be named exactly `ROADMAP.md` at the repository root.
- Include **at least three** Markdown list items (lines starting with `-` or `*`) across the two sections.
- Make sure you committed to **`main`** — this is a light commit, no pull request needed.
- Still stuck on the app itself? See [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started).

</details>

### ⌨️ Activity 2: Turn the top items into issues

Close the loop: promote your best roadmap items into tracked work — the same **issue from a session** move you learned in Step 1.

1. Ask Copilot to open a couple of issues from the roadmap's top items:

   > ![Static Badge](https://img.shields.io/badge/Prompt-text?style=for-the-badge&logo=github-copilot&logoColor=white&labelColor=purple&color=purple)
   >
   > ```prompt
   > Create GitHub issues for the top two items in ROADMAP.md. Give each a
   > clear title and a short body describing the feature or bug.
   > ```

   <!-- image: a GitHub issue created from a roadmap item -->

1. Open the **Issues** tab and confirm your new issues are there, ready for a future idea-to-merge loop.

> [!TIP]
> This activity is **not graded** — Step 5 is complete once the result table for your `ROADMAP.md` is green. It's here so you leave with real, tracked next steps.

<details>
<summary>Stretch: draft release notes too ✍️</summary><br/>

Still in the editor canvas? Ask Copilot to draft a `CHANGELOG.md` summarizing what v1 shipped (the bookmarks feature from Step 3). It's a nice companion to the roadmap and reinforces the same "author a durable artifact in a canvas" habit.

</details>
