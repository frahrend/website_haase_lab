---
layout: page
title: People
permalink: /people
---
{% assign team = site.data.people.team %}
{% assign lead = team | first %}
<p>The Haase Lab blends molecular biology, computational genomics, and creative curiosity. Meet the team below!</p>

{% if lead %}
<section class="people-hero">
  <article class="person-card person-card--full">
    <div class="person-card__media">
      {% if lead.photo %}
        <img class="person-photo" src="{{ lead.photo | relative_url }}" alt="{{ lead.photo_alt | default: lead.preferred_name | default: lead.name }}">
      {% else %}
        <div class="person-photo person-photo--placeholder">Photo coming soon</div>
      {% endif %}
    </div>
    <div class="person-card__body">
      <div class="person-meta">{{ lead.role }}</div>
      <h3>{{ lead.name }}</h3>
      {% if lead.email %}
        <p><a>{{ lead.email }}</a></p>
      {% endif %}
      {% if lead.focus_areas %}
        <div class="pill-row" style="margin:0.5rem 0 1rem;">
          {% for focus in lead.focus_areas %}
            <span class="pill">{{ focus }}</span>
          {% endfor %}
        </div>
      {% endif %}
      {% if lead.education %}
        <p><strong>Previous training:</strong> {{ lead.education }}</p>
      {% endif %}
      <p><strong>Preferred name:</strong> {{ lead.preferred_name }}<br></p>
      {% if lead.pronouns %}
        <p><strong>Pronouns:</strong> {{ lead.pronouns }}</p>
      {% endif %}
      <p class="person-note">{{ lead.summary }}</p>
    </div>
  </article>
</section>
{% endif %}

{% if team.size > 1 %}
<section class="people-grid">
  {% for person in team offset:1 %}
    <article class="person-card">
      {% if person.photo %}
        <img class="person-photo" src="{{ person.photo | relative_url }}" alt="{{ person.photo_alt | default: person.preferred_name | default: person.name }}">
      {% else %}
        <div class="person-photo person-photo--placeholder">Photo coming soon</div>
      {% endif %}
      <div class="person-meta">{{ person.role }}</div>
      <h3>{{ person.name }}</h3>
      {% if person.email %}
        <p><a>{{ person.email }}</a></p>
      {% endif %}
      {% if person.focus_areas %}
        <div class="pill-row" style="margin:0.5rem 0 1rem;">
          {% for focus in person.focus_areas %}
            <span class="pill">{{ focus }}</span>
          {% endfor %}
        </div>
      {% endif %}
      {% if person.education %}
        <p><strong>Previous training:</strong> {{ person.education }}</p>
      {% endif %}
      <p><strong>Preferred name:</strong> {{ person.preferred_name }}<br>
      {% if person.pronouns %}
        <strong>Pronouns:</strong> {{ person.pronouns }}
      {% endif %}</p>
      <p class="person-note">{{ person.summary }}</p>
    </article>
  {% endfor %}
</section>
{% endif %}

<section style="margin-top:3rem;">
  <div class="section-heading">
    <span></span>
    <h2>Gallery of our lab moments</h2>
  </div>
  {% assign gallery = site.data.gallery.images %}
  <div class="gallery-grid">
    {% for image in gallery %}
      <figure>
        <img src="{{ image.src | relative_url }}" alt="{{ image.alt }}">
        <figcaption>{{ image.caption }} · {{ image.year }}</figcaption>
      </figure>
    {% endfor %}
  </div>
</section>
<br>
<section style="margin-top:3rem;">
  <div class="section-heading">
    <span></span>
    <h2>Alumni</h2>
  </div>
{% assign alumni = site.data.people.alumni %}
<p>Our alumni continue to expand RNA biology, medicine, and technology across the globe.</p>

<section class="people-grid alumni-grid">
  {% for alum in alumni %}
    <article class="person-card">
      {% if alum.photo %}
        <img class="person-photo" src="{{ alum.photo | relative_url }}" alt="{{ alum.photo_alt | default: alum.name }}">
      {% else %}
        <!--<div class="person-photo person-photo--placeholder">Photo coming soon</div>--><br>
      {% endif %}
      <h3>{{ alum.name }}</h3>
      <p class="person-note">{{ alum.note }}</p>
    </article>
  {% endfor %}
</section>

<br>
