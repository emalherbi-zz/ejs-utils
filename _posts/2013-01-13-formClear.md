---
layout: post
title: Form Clear
categories: [F]
tags: [table, columns, form, clear]
description: Clear all input's form   
---

Form Clear

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
var Form = 
{
	clear : function(idform) {
		$('#'+idform).each(function() {
			this.reset();
		});	
	}
};
{% endhighlight %}
