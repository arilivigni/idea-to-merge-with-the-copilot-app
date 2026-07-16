## Step 5: Preview the running app and submit your proof

Last stop. 🎬 Show the finished app running, then submit a screenshot as your proof of completion.

### 📖 Theory: preview on a public port

You'll run the app in a Codespace and preview it in a **browser canvas** on the Codespace's **public** port. A live local URL can't be verified by Actions, so the graded proof is a committed screenshot.

- Run the app in the Codespace and expose the dev port with **`publicPort`** so the browser canvas can render its shareable GitHub URL.
- This is a **light commit**: the screenshot goes **directly to `main`** — no session or PR.

<!-- image: browser canvas previewing the running app on the public port -->

#### References

- [Forwarding ports in a codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace)

### ⌨️ Activity 1: Preview, capture, and submit (graded)

1. In the Codespace, run:

   ```bash
   npm run dev
   ```

1. Expose the dev port (4321) as **public** and open a **browser canvas** on that URL.
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
