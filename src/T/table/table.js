/* Table CalculateUs, CalculateBr, */
var Table =
{
  calculateUs : function(idtable, posfield) {
    var vlr = 0;
    $("#"+idtable+" tbody tr > td:nth-child("+posfield+")").each(function(i, el) {
      var v = $( el ).find('input').val();

      if ( typeof v == 'undefined' ) {
        vlr += Number(el.innerHTML.replace(".", "").replace(",", "."));
      } else {
        vlr += Number(v.replace(".", "").replace(",", "."));
      }
    });

    return vlr;
  },
  calculateBr : function(idtable, posfield) {
    return Money.formatBr( Table.calculateUs( idtable, posfield ) );
  }
};
