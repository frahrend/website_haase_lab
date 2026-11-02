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
    {% for item in pubs.graphical_abstracts %}
      {% assign pub = all_pubs | where: "graphic", item.graphic | first %}
      {% if pub %}
        <a href="{{ pub.link_label }}" target="_blank" rel="noreferrer" class="graphic-card{% if item.wide %} graphic-card--wide{% endif %}">
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

<section style="margin-top:3rem;">
  <div class="section-heading">
    <span></span>
    <h2>Software</h2>
  </div>
  {% for tool in pubs.software %}
    <p class="software-intro">
      <strong>{{ tool.name }}</strong> ({{ tool.full_name }}). {{ tool.description }}
      Read more in our <a href="{{ tool.paper }}" target="_blank" rel="noreferrer">paper</a>
      and <a href="{{ tool.protocol }}" target="_blank" rel="noreferrer">step-by-step protocol</a>.
    </p>
    <div class="grid-two">
      <a class="card software-card" href="{{ tool.github }}" target="_blank" rel="noreferrer">
        <span class="software-logo software-logo--github">
          <img src="{{ '/pics/logos/github.svg' | relative_url }}" alt="">GitHub
        </span>
        <p>Source code, documentation, and a worked example.</p>
        <span class="software-link">HaaseLab/{{ tool.name }} →</span>
      </a>
      <a class="card software-card" href="{{ tool.bioconductor }}" target="_blank" rel="noreferrer">
        <span class="software-logo">
          <img src="{{ '/pics/logos/bioconductor.svg' | relative_url }}" alt="Bioconductor">
        </span>
        <p>Install in R with <code>BiocManager::install("{{ tool.name }}")</code>.</p>
        <span class="software-link">Bioconductor package →</span>
      </a>
    </div>
  {% endfor %}
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

