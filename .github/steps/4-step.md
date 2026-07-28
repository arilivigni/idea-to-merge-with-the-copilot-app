## Step 4: Preview the running app and capture proof with Playwright MCP

Last stop. 🎬 Run the finished app in a **Terminal canvas**, let Copilot drive it with the **Playwright MCP** server to confirm it works, and submit the captured screenshot as your proof of completion.

### 📖 Theory: preview in a Terminal canvas, verify with Playwright MCP

You'll run the app from a **Terminal canvas** in a session, then let Copilot open and drive it through the **Playwright MCP server** — no manual browser clicking, no manual screenshot. A live local URL can't be reached by Actions, so the graded proof is still a committed screenshot; this time Playwright captures it for you.

- Start the dev server in a **Terminal canvas** so you can watch it run.
- The **Playwright MCP server** gives Copilot a real browser it can navigate, type into, and screenshot. Copilot opens the local dev URL, adds a bookmark, verifies the original URL and its short slug both render, then saves the screenshot to `submission/demo-proof.png`.
- This is a **light commit**: the screenshot goes **directly to `main`** — no session or PR.

> [!NOTE]
> Run this session **locally** (choose **a new working tree** or **your local repository** as the run location) so both the dev server and Playwright can reach `http://localhost:4321`. In a cloud sandbox, point Playwright at the forwarded preview URL instead.

<!-- image: dev server running in a Terminal canvas -->

#### Set up the Playwright MCP server

Add the Playwright MCP server to your Copilot MCP configuration so Copilot can drive a browser:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

Then confirm Copilot lists a **`playwright`** server with browser tools available before you start Activity 1.

#### References

- [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started)
- [Playwright MCP server](https://github.com/microsoft/playwright-mcp)
- [Model Context Protocol](https://modelcontextprotocol.io)

### ⌨️ Activity 1: Run, verify with Playwright MCP, and submit (graded)

1. In a **Terminal canvas** on your repository, install dependencies (first run only) and start the dev server. Leave it running and note the local URL (for example, `http://localhost:4321`):

   ```bash
   npm install
   npm run dev
   ```

   <!-- image: dev server running in a Terminal canvas -->

1. Ask Copilot to drive the app with the Playwright MCP server and capture your proof. For example:

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
- If Copilot doesn't see browser tools, re-check the MCP config above and confirm the **`playwright`** server started.
- If Playwright can't reach the URL, make sure `npm run dev` is still running in the Terminal canvas and you're running the session **locally**.
- If Playwright can't find the bookmark, remember the app markup exposes stable ids (`#url` input, `#bookmark-list`) — make sure your Step 3 code renders each bookmark into `#bookmark-list`.
- Make sure you pushed to **`main`**.
- Still stuck on the app itself? See [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started).

</details>
