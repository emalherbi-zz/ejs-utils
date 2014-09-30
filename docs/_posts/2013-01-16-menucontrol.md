---
layout: post
title: Menu
categories: [M]
tags: [table, columns, menu, control ]
description: Menu Control
---

Menu

## Example <i>(code </>)</i>

#### js

{% highlight javascript %}
var Menu =
{
	hideAll: function() {
		$('div[id^="div-"]').hide();
	},
	show: function(id) {
		$('#div-'+id).show('slow');
	},
	init: function(id) {
		Menu.hideAll();
		Menu.show(id);
	},
	menuTitle: function(id, text) {
		$('#'+id).text(text);
	}
}
{% endhighlight %}
