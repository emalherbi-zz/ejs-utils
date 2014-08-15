---
layout: post
title: Menu 
categories: [M]
tags: [table, columns, menu, control ]
description: Menu Control    
---

Menu

## Example

<table id="table" class="table" >
  
</table>



<script>

</script>

## Example <i>(code </>)</i>

#### html

{% highlight html %}
<table id="table" class="table" >

</table>

{% endhighlight %}

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
