## Step 2: Set the project rules in Copilot instructions

Nice — the work item exists! 🎉 Before you build, set the ground rules so the agent follows your team's conventions from the very first line of code.

### 📖 Theory: custom instructions guide every session

A `.github/copilot-instructions.md` file gives Copilot project context it applies in **every** session in this repository. Getting the rules right now pays off when the build session runs in Step 3.

Two rules matter for this app:

- **Persistence:** bookmarks are stored in the browser using **`localStorage`**.
- **Hydration:** browser-only code must run behind a **client-side boundary** so Astro's static build never touches `localStorage` during SSR. In Astro, that's the **`client:load`** directive (or an inline `<script>`).

<!-- image: editing copilot-instructions.md in the Codespace editor -->

> [!IMPORTANT]
> The custom instructions must be on `main` **before** you start the Step 3 build session, because that session branches from `main` and inherits these rules.

#### References

- [Customizing Copilot with repository instructions](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions)
- [Astro client directives](https://docs.astro.build/en/reference/directives-reference/#client-directives)

### ⌨️ Activity 1: Commit the instructions to `main` (graded)

> [!NOTE]
> This is a **light, single-file edit** — commit it **directly to `main`** from a Codespace editor. No session and no pull request are needed.

1. Open a **Codespace editor on `main`** for your copy of the repository.
1. Open `.github/copilot-instructions.md` and **replace the `TODO` placeholder** with the two project rules:
   - persistence uses browser **`localStorage`**, and
   - browser code runs behind a **`client:load`** boundary so SSR never touches `localStorage`.
1. **Commit and push directly to `main`.**

<!-- image: diff showing the committed copilot-instructions.md -->

> [!TIP]
> Be specific to this project (Astro + TypeScript + `localStorage` behind `client:load`). The client-boundary rule is exactly what keeps the Step 3 build from crashing at SSR.

<details>
<summary>Having trouble? 🤷</summary><br/>

- The file must contain the exact tokens **`localStorage`** and **`client:load`**.
- Remove the seeded **`TODO`** marker entirely — the check fails while any TODO remains.
- Make sure you pushed to **`main`**, not a branch.
- Still stuck on the app itself? See [Getting started with the Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started).

</details>
