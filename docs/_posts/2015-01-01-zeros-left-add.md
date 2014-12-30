---
layout: post
title: Zeros Add Left
categories: [Z]
tags: [zeros, left, add, string, number]
description: Add zeros to the left of a string number
---

Add zeros to the left of a string number

## Example

<form class="form-inline" role="form" >
  <div class="form-group" >
    <input type="text" class="form-control" id="txt-zeros" name="txt-zeros" placeholder="type a number" value="999" >
  </div>
  <button type="button" class="btn btn-default" onclick="javascript:addZeros()" >Click</button>
</form>

<script>
  function addZeros() {
    $('#txt-zeros').val(
      Util.zeros.left( $('#txt-zeros').val(), '5' ) // new version ejs-utils.3.0.0
    );
  }
</script>

## Example <i>(code </>)</i>

#### html

{% highlight html %}
<form class="form-inline" role="form" >
  <div class="form-group" >
    <input type="text" class="form-control" id="txt-zeros" name="txt-zeros" placeholder="type a number" value="999" >
  </div>
  <button type="button" class="btn btn-default" onclick="javascript:addZeros()" >Click</button>
</form>
{% endhighlight %}

#### js

{% highlight javascript %}
function addZeros() {
  $('#txt-zeros').val(
    Zeros.add_left( $('#txt-zeros').val(), '5' ) // old version of ejs-utils
  );

  $('#txt-zeros').val(
    Util.zeros.left( $('#txt-zeros').val(), '5' ); // new version ejs-utils.3.0.0
  );
}
{% endhighlight %}
