---
layout: post
title: Div Position
categories: [D]
tags: [table, columns, div, position ]
description: positions in specific div hide all div
---

Div Position

## Example <i>(code </>)</i>

#### js

{% highlight javascript %}
var Div = {
	go : function(id) {
		$('#'+id).slideToggle('slow', function() {
    			$('html, body').animate({scrollTop:$("#"+id).offset().top}, 'slow');
		});

		return true;
	},
	hideAll: function() {
		$('div[id^="div-"]').hide();
	}
};
{% endhighlight %}
