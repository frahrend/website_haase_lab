---
layout: page
title: Latest news from the Haase Lab
permalink: /news
---
{% assign news = site.data.news %}
<p>
 Check out our recent news below!
</p>

<section class="card">
  <ul class="publication-list">
    {% for news in news.general %}
      <h3>{{ news.title }}</h3>
      <span class="publication-meta">{{ news.author }}, {{ news.date }}</span>
      <p>{{ news.content }}</p>
    <br><hr><br>
    {% endfor %}
  </ul>
</section>