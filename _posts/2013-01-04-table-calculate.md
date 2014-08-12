---
layout: post
title: Table Calculate Us/Br
categories: [T]
tags: [table, columns, calculate, us, br]
description: Calculate Us/Br values from table
---

Calculate Us/Br values from table

## Example

<form class="form-inline" role="form" >
  <div class="form-group" >
    <input type="text" class="form-control" id="txt-zeros" name="txt-zeros" placeholder="type a number" >
  </div>
  <button type="button" class="btn btn-default" onclick="javascript:addZeros()" >Add Zeros</button>
</form>

<script>
  function addZeros() {
    $('#txt-zeros').val(
      Zeros.add_left( $('#txt-zeros').val(), '5' )
    );
  }
</script>

## Example <i>(code </>)</i>

#### html

{% highlight html %}
<form class="form-inline" role="form" >
  <div class="form-group" >
    <input type="text" class="form-control" id="txt-zeros" name="txt-zeros" placeholder="type a number" >
  </div>
  <button type="button" class="btn btn-default" onclick="javascript:addZeros()" >Add Zeros</button>
</form>
{% endhighlight %}

#### js

{% highlight javascript %}
function addZeros() {
  $('#txt-zeros').val(
    Zeros.add_left( $('#txt-zeros').val(), '5' )
  );
}
{% endhighlight %}
