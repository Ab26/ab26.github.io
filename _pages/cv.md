---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D in Computer Science & Engineering, Indian Institute of Technology Jodhpur, 2026 (expected)
* M.Tech. in Information Technology, University of Hyderabad, 2019
* B.Tech. in Information Technology, Government Engineering College Ajmer, 2016

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
