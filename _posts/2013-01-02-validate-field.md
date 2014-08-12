---
layout: post
title: Validate Field
categories: [V]
tags: [validate, field, input, alert, message]
description: validate the field and displays a warning message if empty.
---

Validate the field and displays a warning message if empty.

<table id="table-pessoas" class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><input type="text" value="10"></td>
      <td><input type="text" value="13"></td>
      <td><input type="text" value="15"></td>
    </tr>
    <tr>
      <td>1</td>
      <td><input type="text" value="100"></td>
      <td><input type="text" value="132"></td>
      <td><input type="text" value="151"></td>
    </tr>
  </tbody>
</table>

## Example

<form class="form-inline" role="form" >
  <div class="form-group">
    <input type="email" class="form-control" id="txt-email" name="txt-email" placeholder="Enter email" >
  </div>
  <button type="button" class="btn btn-default" onclick="javascript:validate()" >Validate</button>
</form>

<script>
  function validate() {
    Validate.field('txt-email', 'Field is required!');
  }
</script>

## Example <i>(code </>)</i>

#### html

{% highlight html %}
<form class="form-inline" role="form" >
  <div class="form-group">
    <label for="txt-email" >Email</label>
    <input type="email" class="form-control" id="txt-email" name="txt-email" placeholder="Enter email" >
  </div>
  <button type="button" class="btn btn-default" onclick="javascript:validate()" >Validate</button>
</form>
{% endhighlight %}

#### js

{% highlight javascript %}
function validate() {
  Validate.field('txt-email', 'Field is required!');
}
{% endhighlight %}
