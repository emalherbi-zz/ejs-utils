/* Table CalculateUs, CalculateBr, */
var Table =
{
  calculateUs : function(idtable, posfield) {
    var vlr = 0;
    $("#"+idtable+" tbody tr > td:nth-child("+posfield+")").each(function(i, el) {
      var v = $( el ).find('input').val();

      if ( typeof v !== 'undefined' ) {       
        vlr += Number(v.replace("/./g", "").replace(",", "."));
      } else {
        var v = $( el ).find('span').text();
        if ( typeof v !== 'undefined' ) {       
          vlr += Number(v.replace("R$", "").replace("/./g", "").replace(",", "."));
        } else {
          vlr += Number(el.innerHTML.replace("R$", "").replace("/./g", "").replace(",", "."));
        }
      }
    });
    return vlr;
  },
  calculateBr : function(idtable, posfield) {
    return Money.formatBr( Table.calculateUs( idtable, posfield ) );
  }
};
