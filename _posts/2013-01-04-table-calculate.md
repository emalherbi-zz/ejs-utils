---
layout: post
title: Table Calculate Us/Br
categories: [T]
tags: [table, columns, calculate, us, br]
description: Calculate Us/Br values from table
---

Calculate Us/Br values from table

## Example

<table id="table-calculate" class="table" >
  <thead>
    <tr>
      <th>Calculate (Input)</th>
      <th>Calculate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input class="form-control" type="text" value="75"></td>
      <td>15</td>
    </tr>
    <tr>
      <td><input class="form-control" type="text" value="100"></td>
      <td>132</td>
    </tr>
  </tbody>
</table>

<form class="form-inline" role="form" >
  <button type="button" class="btn btn-default" onclick="javascript:calculate()" >Calculate</button>
</form>

<script>
function calculate() {
  var vlrUs = Table.calculateUs( 'table-calculate', 1 );
  var vlrBr = Table.calculateBr( 'table-calculate', 1 );
  alert( 'US: ' + vlrUs + ' BR: ' + vlrBr );

  var vlrUs = Table.calculateUs( 'table-calculate', 2 );
  var vlrBr = Table.calculateBr( 'table-calculate', 2 );
  alert( 'US: ' + vlrUs + ' BR: ' + vlrBr );
}
</script>

## Example <i>(code </>)</i>

#### html

{% highlight html %}
<table id="table-calculate" class="table" >
  <thead>
    <tr>
      <th>Calculate (Input)</th>
      <th>Calculate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input class="form-control" type="text" value="75"></td>
      <td>15</td>
    </tr>
    <tr>
      <td><input class="form-control" type="text" value="100"></td>
      <td>132</td>
    </tr>
  </tbody>
</table>

<form class="form-inline" role="form" >
  <button type="button" class="btn btn-default" onclick="javascript:calculate()" >Calculate</button>
</form>
{% endhighlight %}

#### js

{% highlight javascript %}
function calculate() {
  var vlrUs = Table.calculateUs( 'table-calculate', 1 );
  var vlrBr = Table.calculateBr( 'table-calculate', 1 );
  alert( 'US: ' + vlrUs + ' BR: ' + vlrBr );

  var vlrUs = Table.calculateUs( 'table-calculate', 2 );
  var vlrBr = Table.calculateBr( 'table-calculate', 2 );
  alert( 'US: ' + vlrUs + ' BR: ' + vlrBr );
}
{% endhighlight %}
