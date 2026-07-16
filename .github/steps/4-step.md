## Step 4: Review and merge the pull request

The feature is ready for review. ✅ Close the loop by reviewing and merging the pull request — right from the app.

### 📖 Theory: review and merge in the app

The Copilot App can review and merge pull requests directly.

- Only **one** pull request is open — the **app PR** from Step 3. (Step 2's instructions went straight to `main`, so there's no second PR to confuse it with.)
- This exercise uses an **unprotected** branch, so the merge isn't blocked by required checks or reviews. You review, then merge. (Required-check gating comes in a follow-on exercise.)
- Because the PR body uses a closing keyword, merging automatically **closes the linked app issue**.

<!-- image: pull request review view inside the app -->

<!-- image: merged pull request with the linked issue closed -->

#### References

- [Managing pull requests with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started)

### ⌨️ Activity 1: Merge and confirm closure (graded)

1. Review the **app PR** (the only open PR) in the app.
1. Confirm the Step 3 build check is green, then **merge** the pull request.
1. Confirm the linked **app issue** is now **closed**.

<!-- image: merged PR confirming the linked issue is closed -->

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure you **merge** the PR (not just close it).
- If the app issue stays open, confirm the PR body used `Closes #<app-issue-number>`, then close the issue manually.
- Still stuck on the app itself? See [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started).

</details>
