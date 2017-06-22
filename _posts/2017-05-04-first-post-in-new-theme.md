---
layout: post
published: true
title: 'First article in new theme'
permalink: 'first-article-in-new-theme'
image: 'post_5.png'
excerpt: |
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nam illo repellendus non quisquam, quis voluptatem asperiores enim. Consectetur reiciendis mollitia ut rem velit voluptatibus quam nesciunt natus sequi labore.
---

{% highlight liquid  %}
{% raw %}
  {% for tag in collection.all_tags %}
    <div class="b-tag">
      {{tag}}
    </div>
  {% endfor %}
{% endraw %}
{% endhighlight %} 

{% highlight css %}
  
  .b-content{ 
    width: 50%;
    margin-left: 200px;
    padding-left: 15px;
  }

{% endhighlight %}