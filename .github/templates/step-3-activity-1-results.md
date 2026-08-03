{%- set all_passed = (results_table | selectattr("passed") | length) == (results_table | length) %}

{%- if all_passed %}

## Step 3 · Activity 1 — Pull request opened and building ✅

<img src="https://octodex.github.com/images/inspectocat.jpg" align="right" height="120px" alt="Inspectocat reviewing the open pull request" />

Nice — your feature branch builds and the pull request links your app issue.

**Step 3 isn't complete yet.** Head to **Activity 2** and **review, then merge** the pull request. When it merges into `main`, I'll run the final Step 3 checks and unlock Step 4.

{%- else %}

## Step 3 · Activity 1 — Fail ❌

<img src="https://octodex.github.com/images/spidertocat.png" align="right" height="100px" alt="Spidertocat indicating a check failed" />

Some checks on your pull request need attention. Fix the items below, then push to your PR branch — I'll re-check automatically.

{%- endif %}

| Status | Description |
| ------ | ----------- |

{%- for row in results_table %}
| {% if row.passed -%}✅ - Pass{%- else -%}❌ - Fail{%- endif %} | {{ row.description }} |
{%- endfor %}
