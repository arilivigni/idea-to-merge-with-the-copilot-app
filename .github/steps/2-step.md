## Step 2: Set the project rules in Copilot instructions

Nice — the work item exists! 🎉 Before you build, set the ground rules so the agent follows your team's conventions from the very first line of code.

### 📖 Theory: custom instructions guide every session

A `.github/copilot-instructions.md` file gives Copilot project context it applies in **every** session in this repository. Getting the rules right now pays off when the build session runs in Step 3.

Two rules matter for this app:

- **Persistence:** bookmarks are stored in the browser using **`localStorage`**.
- **Hydration:** browser-only code must run behind a **client-side boundary** so Astro's static build never touches `localStorage` during SSR. In Astro, that's the **`client:load`** directive (or an inline `<script>`).

Even a light, single-file change is a chance to try **agent merge** — the app's action that **automates the whole pull request lifecycle**. Instead of committing straight to `main`, you make the edit in a session and let agent merge open a pull request and merge it to `main` for you. It's a gentle warm-up for the manual review-and-merge you'll do in Step 3.

> [!IMPORTANT]
> The custom instructions must be on `main` **before** you start the Step 3 build session, because that session branches from `main` and inherits these rules.

#### References

- [Customizing Copilot with repository instructions](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions)
- [Astro client directives](https://docs.astro.build/en/reference/directives-reference/#client-directives)

### ⌨️ Activity 1: Set the rules and ship them with agent merge (graded)

> [!NOTE]
> This is a **light, single-file edit** made in a session — you'll open the file in a **lightweight editor canvas**, then use **agent merge** to open and merge the pull request to `main` for you.

1. In a session on your repository, open `.github/copilot-instructions.md` in a **lightweight editor canvas**. Open the session's **+** menu and choose **Files** (or **Markdown editor**), or just ask the agent to open the file.

   <img width="70%" alt="Session add-panel menu showing Files, Markdown editor, and other surfaces" src="../images/step2-add-panel-menu.png" />

1. **Replace the `TODO` placeholder** with the two project rules. Copy and paste this into the editor:

   ```text
   - persistence uses browser localStorage, and
   - browser code runs behind a client:load boundary so SSR never touches localStorage.
   ```

1. **Ship the change with agent merge.** Open the session's action dropdown (top of the session), choose **Agent merge**, and confirm. The app opens a pull request for your edit and **merges it to `main` automatically**.

   <img width="60%" alt="Session action dropdown with Agent merge selected to automate the pull request lifecycle" src="../images/step2-agent-merge-dropdown.png" />

<!-- image: diff showing the committed copilot-instructions.md -->

> [!TIP]
> Be specific to this project (Astro + TypeScript + `localStorage` behind `client:load`). The client-boundary rule is exactly what keeps the Step 3 build from crashing at SSR.

<details>
<summary>Having trouble? 🤷</summary><br/>

- The file must contain the exact tokens **`localStorage`** and **`client:load`**.
- Remove the seeded **`TODO`** marker entirely — the check fails while any TODO remains.
- Agent merge lands the change on **`main`** for you — if the check didn't run, confirm the agent-merge pull request actually **merged** (not left open).
- Still stuck on the app itself? See [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started).

</details>
