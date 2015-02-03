---
layout: post
title: Input
categories: [I]
tags: [table, columns, input, readonly, field]
description: input readonly , enabledField
---

Input

## Example <i>(code </>)</i>

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
