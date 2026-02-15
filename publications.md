---
layout: page
title: Publications
permalink: /publications
---
{% assign pubs = site.data.publications %}
<p>
 Check out our recent work below!
</p>


<section style="margin-top:3rem;">
  <div class="section-heading">
    <span></span>
    <h2>Graphical Abstracts</h2>
  </div>
  <div class="gallery-grid">
    {% assign all_pubs = pubs.featured | concat: pubs.additional %}
    {% for pub in all_pubs %}
      {% if pub.graphic %}
        <a href="{{ pub.link_label }}" target="_blank" rel="noreferrer" class="graphic-card">
          <figure>
            <img src="{{ pub.graphic | relative_url }}" alt="Graphical abstract for {{ pub.title }}">
            <figcaption>{{ pub.title | truncate: 100 }}</figcaption>
          </figure>
        </a>
      {% endif %}
    {% endfor %}
  </div>
</section>
<br>

<div class="section-heading">
    <span></span>
    <h2>Select Publications</h2>
</div>
<section class="card" style="margin-top:2rem;">
  <ul class="publication-list">
    {% for paper in pubs.featured %}
      <li>
        <strong><a href="{{ paper.link_label }}" target="_blank" rel="noreferrer">{{ paper.title }}</a></strong><br>
        <span class="publication-meta">{{ paper.authors }} {{ paper.citation }}</span>
      </li>
    {% endfor %}
  </ul>
</section>

<section style="margin-top:2rem;">
  <h2>Additional Publications</h2>
  <ul class="publication-list">
    {% for paper in pubs.additional %}
      <li>
        <strong><a href="{{ paper.link_label }}" target="_blank" rel="noreferrer">{{ paper.title }}</a></strong><br>
        <span class="publication-meta">{{ paper.authors }} {{ paper.citation }}</span>
      </li>
    {% endfor %}
  </ul>
</section>

