{%- set all_passed = (results_table | selectattr("passed") | length) == (results_table | length) %}

{%- if all_passed %}

## Step 5 · Activity 1 — Roadmap drafted ✅

<img src="https://octodex.github.com/images/inspectocat.jpg" align="right" height="120px" alt="Inspectocat reviewing the roadmap" />

Nice — your `ROADMAP.md` is on `main` and lists real next-release work.

**Step 5 isn't complete yet.** Head to **Activity 2** and open **at least two issues** from your roadmap's top items. When your second issue is open, I'll run the final Step 5 checks and unlock the review.

{%- else %}

## Step 5 · Activity 1 — Fail ❌

<img src="https://octodex.github.com/images/spidertocat.png" align="right" height="100px" alt="Spidertocat indicating a check failed" />

Your roadmap needs a little more before it counts. Fix the items below and commit `ROADMAP.md` to `main` again — I'll re-check automatically.

{%- endif %}

| Status | Description |
| ------ | ----------- |

{%- for row in results_table %}
| {% if row.passed -%}✅ - Pass{%- else -%}❌ - Fail{%- endif %} | {{ row.description }} |
{%- endfor %}
