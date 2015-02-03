---
layout: post
title: Form Clear
categories: [F]
tags: [table, columns, form, clear]
description: Clear all input's form
---

Form Clear

## Example <i>(code </>)</i>

#### js

{% highlight javascript %}
var Form =
{
	clear : function(idform) {
		$('#'+idform).each(function() {
			this.reset();
		});
	}
};
{% endhighlight %}
