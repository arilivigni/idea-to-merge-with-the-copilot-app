{%- set all_passed = (results_table | selectattr("passed") | length) == (results_table | length) %}

{%- if all_passed %}

## Step 5 - Passed ✅

<img src="https://octodex.github.com/images/inflatocat.png" align="right" height="150px" alt="Inflatocat indicating the step passed" />

You closed the loop — a roadmap drafted in a canvas, and tracked issues ready for the next idea-to-merge run. 🎉

{%- else %}

## Step 5 · Activity 2 — Almost there

<img src="https://octodex.github.com/images/spidertocat.png" align="right" height="100px" alt="Spidertocat indicating more work remains" />

You're almost done. Open **at least two issues** from your roadmap's top items — each with a short description so it reads as real work. Here's where things stand:

{%- endif %}

| Status | Description |
| ------ | ----------- |

{%- for row in results_table %}
| {% if row.passed -%}✅ - Pass{%- else -%}❌ - Fail{%- endif %} | {{ row.description }} |
{%- endfor %}
