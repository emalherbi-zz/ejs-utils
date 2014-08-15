---
layout: post
title: Div Position
categories: [D]
tags: [table, columns, div, position ]
description: positions in specific div hide all div   
---

Div Position

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
