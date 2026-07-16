## Step 5: Preview the running app and submit your proof

Last stop. 🎬 Show the finished app running, then submit a screenshot as your proof of completion.

### 📖 Theory: preview the running app in a browser canvas

You'll run the app from a session's **Terminal** and preview it in a **browser canvas** — all in the app. A live local URL can't be verified by Actions, so the graded proof is a committed screenshot.

- Start the dev server in the session **Terminal**, then open a **browser canvas** on the local dev URL to see the app running.
- This is a **light commit**: the screenshot goes **directly to `main`** — no session or PR.

> [!NOTE]
> Run this session **locally** (choose **a new working tree** or **your local repository** as the run location) so the dev server is reachable at `http://localhost:4321`. If you use a cloud sandbox, the app runs remotely and you'd need its forwarded preview URL instead.

<!-- image: browser canvas previewing the running app -->

#### References

- [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started)

### ⌨️ Activity 1: Preview, capture, and submit (graded)

1. In a session **Terminal** on your repository, install dependencies (first run only) and start the dev server:

   ```bash
   npm install
   npm run dev
   ```

   <!-- image: npm run dev running in the session Terminal -->

1. Open a **browser canvas** on the local dev URL (for example, `http://localhost:4321`).
1. Add a bookmark and confirm both the **original URL** and its **short slug** display.
1. Capture a screenshot of the running app showing at least one bookmark **and** its slug, and save it as **`submission/demo-proof.png`**.
1. **Commit and push the screenshot directly to `main`.**

<!-- image: canvas showing the running app with a bookmark and its short slug -->

<details>
<summary>Having trouble? 🤷</summary><br/>

- The file must be exactly `submission/demo-proof.png`.
- It must be a real screenshot (a tiny or empty file will fail the check).
- Make sure you pushed to **`main`**.
- Still stuck on the app itself? See [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started).

</details>
