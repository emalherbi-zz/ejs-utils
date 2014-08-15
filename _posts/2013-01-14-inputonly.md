---
layout: post
title: Input
categories: [I]
tags: [table, columns, input, readonly, field]
description: input readonly , enabledField   
---

Input

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
var Input = {
	readOnly : function(id) {
		document.getElementById( id ).readOnly = true;
		document.getElementById( id ).style.backgroundColor = "#CCC";		
		document.getElementById( id ).value = '';
	},
	enabledField : function(id) {
		document.getElementById( id ).readOnly = false;
		document.getElementById( id ).style.backgroundColor = "#FFF";		
		document.getElementById( id ).value = '';
	}
};
{% endhighlight %}
