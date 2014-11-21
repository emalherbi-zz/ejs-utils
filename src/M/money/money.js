/* format a number in Brazil or US */
var Money = {

  formatBr: function(num) {
    num = num.toString().replace(/\$|\,/g,'');

    if(isNaN(num))
      num = "0";

    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    cents = num%100;
    num = Math.floor(num/100).toString();

    if(cents<10)
      cents = "0" + cents;

    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
      num = num.substring(0,num.length-(4*i+3))+'.'+ num.substring(num.length-(4*i+3));

    return (((sign)?'':'-') + num + ',' + cents);
  },
  formatUs: function(num) {
    var n = num.replace(/\./g, "").replace(/,/, ".");
    return Math.round(n * 100) / 100;
  }
}
