---
layout: page
title: Research
permalink: /research
---
{% assign research = site.data.research %}
<section class="card">
  {{ research.goal }}
</section>

<section class="grid-two" style="margin-top:2rem;">
  <article class="card">
    <h3>Current Research</h3>
    <p>{{ research.current_research }}</p>
  </article>
  <article class="card">
    <h3>Applying our Research</h3>
    <p>{{ research.applying_research }}</p>
  </article>
</section>

<section class="card" style="margin-top:2rem;">
  <h3>Need for Further Study</h3>
  <p>{{ research.need_for_study }}</p>
</section>

<section class="card plain-language" style="margin-top:2rem;">
  <strong>Research in Plain Language</strong>
  <p>{{ research.plain_language }}</p>
</section>

