## Step 4: Preview the running app and capture proof with Playwright MCP

Last stop. 🎬 Run the finished app, see it live in a **browser canvas**, let Copilot verify it with the **Playwright MCP** server, and submit the captured screenshot as your proof of completion.

### 📖 Theory: preview in a canvas, verify with Playwright MCP

You'll run the app from a **Terminal canvas**, watch it live in a **browser canvas**, then let Copilot drive and screenshot it through the **Playwright MCP server** — no manual capture. A live local URL can't be reached by Actions, so the graded proof is still a committed screenshot; this time Playwright captures it for you.

- Start the dev server in a **Terminal canvas** so you can watch the process run.
- Open a **browser canvas** on the local dev URL (for example, `http://localhost:4321`) to *see* your bookmarks app running — add a link and watch its short slug appear.
- The **Playwright MCP server** gives Copilot a real browser it can navigate, type into, and screenshot. Copilot opens the app, adds a bookmark, verifies the original URL and its short slug both render, then saves the screenshot to `submission/demo-proof.png`.
- This is a **light commit**: the screenshot goes **directly to `main`** — no session or PR.

> [!NOTE]
> Run this session **locally** (choose **a new working tree** or **your local repository** as the run location) so the dev server, the browser canvas, and Playwright can all reach `http://localhost:4321`. In a cloud sandbox, use the forwarded preview URL instead.

<!-- image: the running app previewed in a browser canvas -->

> [!TIP]
> **Playwright is already set up for you.** This repository ships a `.github/mcp.json` that registers the Playwright MCP server, so the Copilot App picks it up automatically — there's nothing to install or configure. The first time Copilot uses it, approve the one-time prompt to trust the server.

#### References

- [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started)
- [Configuring MCP servers in the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/customize-github-copilot-app)
- [Playwright MCP server](https://github.com/microsoft/playwright-mcp)

### ⌨️ Activity 1: Run, preview, verify with Playwright MCP, and submit (graded)

1. In a **Terminal canvas** on your repository, install dependencies (first run only) and start the dev server. Leave it running and note the local URL (for example, `http://localhost:4321`):

   ```bash
   npm install
   npm run dev
   ```

   <!-- image: dev server running in a Terminal canvas -->

1. Open a **browser canvas** on that URL to see the app running, then add a bookmark and confirm both the **original URL** and its **short slug** display. For example, ask Copilot:

   ```text
   Open a browser canvas on http://localhost:4321 and keep it in the right side panel.
   ```

   <!-- image: bookmarks app running live in a browser canvas -->

1. Ask Copilot to verify the app with the Playwright MCP server and capture your proof. The Playwright server is already registered (see the Theory), so this works with no setup:

   ```text
   Using the Playwright MCP server, open http://localhost:4321, add the bookmark
   https://github.com/features/copilot, and confirm the page shows both the original
   URL and a generated short slug. Then save a full-page screenshot to
   submission/demo-proof.png.
   ```

   <!-- image: Playwright MCP driving the app and capturing the screenshot -->

1. Confirm `submission/demo-proof.png` shows at least one bookmark **and** its short slug.
1. **Commit and push the screenshot directly to `main`.**

<!-- image: captured proof — running app with a bookmark and its short slug -->

<details>
<summary>Having trouble? 🤷</summary><br/>

- The file must be exactly `submission/demo-proof.png`, and it must be a real capture (a tiny or empty file will fail the check).
- If Copilot doesn't see browser tools, confirm you're running the session **locally** and approve the one-time prompt to trust the **`playwright`** server registered in `.github/mcp.json`.
- If the browser canvas or Playwright can't reach the URL, make sure `npm run dev` is still running in the Terminal canvas.
- If Playwright can't find the bookmark, remember the app markup exposes stable ids (`#url` input, `#bookmark-list`) — make sure your Step 3 code renders each bookmark into `#bookmark-list`.
- Make sure you pushed to **`main`**.
- Still stuck on the app itself? See [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started).

</details>
