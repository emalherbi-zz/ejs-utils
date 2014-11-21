/* Zeros add left in input */
var Zeros = {
  add_left : function(str, max) {
    str = String( str );

    return ( str.length < max ) ? Zeros.add_left("0" + str, max) : str;
  }
};
