/* Go To ID of Body With Animate */
var Scroll = {
  go : function( id ) {
    $('html, body').animate({ scrollTop : $("#" + id).offset().top }, 'slow');
    return true;
  }
};

/* CMC7 */

var CMC7 = {
  test : function() {
    var cmc7 = $('#cmc7');
    var v = Util.cmc7.validate( cmc7.val() );
    if ( v == true ) {
      cmc7.closest('.form-group').removeClass('has-error').addClass('has-success');
    } else {
      cmc7.closest('.form-group').removeClass('has-success').addClass('has-error');
    }
  }
}

/* CNPJ */

var CNPJ = {
  test : function() {
    var cnpj = $('#cnpj');
    var v = Util.cnpj.validate( cnpj.val() );
    if ( v == true ) {
      cnpj.closest('.form-group').removeClass('has-error').addClass('has-success');
    } else {
      cnpj.closest('.form-group').removeClass('has-success').addClass('has-error');
    }
  }
}

/* CPF */

var CPF = {
  test : function() {
    var cpf = $('#cpf');
    var v = Util.cpf.validate( cpf.val() );
    if ( v == true ) {
      cpf.closest('.form-group').removeClass('has-error').addClass('has-success');
    } else {
      cpf.closest('.form-group').removeClass('has-success').addClass('has-error');
    }
  }
}

/* DATE */

var DateBr = {
  test : function() {
    var dateBr = $('#dateBr');
    var v = Util.date.nowBr();
    dateBr.val( v );
  }
}
var DateSql = {
  test : function() {
    var dateSql = $('#dateSql');
    var v = Util.date.nowSql();
    dateSql.val( v );
  }
}

/* MASK */

var MaskDateBr = {
  test : function() {
    var mask = $('#maskDateBr');
    if ( mask.val().length <= 0 )
      mask.val( '01052015' );
    var v = Util.mask.dateBr( mask.val() );
    mask.val( v );
  }
}

var MaskHour = {
  test : function() {
    var mask = $('#maskHour');
    if ( mask.val().length <= 0 )
      mask.val( '1320' );
    var v = Util.mask.hour( mask.val() );
    mask.val( v );
  }
}

var MaskTelBr = {
  test : function() {
    var mask = $('#maskTelBr');
    if ( mask.val().length <= 0 )
      mask.val( '4299140801' );
    var v = Util.mask.telBr( mask.val() );
    mask.val( v );
  }
}

var MaskCEP = {
  test : function() {
    var mask = $('#maskCEP');
    if ( mask.val().length <= 0 )
      mask.val( '95701320' );
    var v = Util.mask.cep( mask.val() );
    mask.val( v );
  }
}

var MaskCPF = {
  test : function() {
    var mask = $('#maskCPF');
    if ( mask.val().length <= 0 )
      mask.val( '29727693172' );
    var v = Util.mask.cpf( mask.val() );
    mask.val( v );
  }
}

var MaskCNPJ = {
  test : function() {
    var mask = $('#maskCNPJ');
    if ( mask.val().length <= 0 )
      mask.val( '62173620000180' );
    var v = Util.mask.cnpj( mask.val() );
    mask.val( v );
  }
}

var MaskNumber = {
  test : function() {
    var mask = $('#maskNumber');
    if ( mask.val().length <= 0 )
      mask.val( '100^%u&.12' );
    var v = Util.mask.number( mask.val() );
    mask.val( v );
  }
}

var MaskCurrency = {
  test : function() {
    var mask = $('#maskCurrency');
    if ( mask.val().length <= 0 )
      mask.val( '10000' );
    var v = Util.mask.currency( mask.val() );
    mask.val( v );
  }
}

var MaskCurrencyBr = {
  test : function() {
    var mask = $('#maskCurrencyBr');
    if ( mask.val().length <= 0 )
      mask.val( '10000' );
    var v = Util.mask.currencyBr( mask.val() );
    mask.val( v );
  }
}

var MaskCurrencyBrFocusOut = {
  test : function() {
    var mask = $('#maskCurrencyBrFocusOut');
    if ( mask.val().length <= 0 )
      mask.val( '10000' );
    var v = Util.mask.currencyBrFocusOut( mask.val() );
    mask.val( v );
  }
}

var MaskCFOP = {
  test : function() {
    var mask = $('#maskCFOP');
    if ( mask.val().length <= 0 )
      mask.val( '6111' );
    var v = Util.mask.cfop( mask.val() );
    mask.val( v );
  }
}


$( document ).ready(function() {
  console.log( "ready!" );

  hljs.initHighlightingOnLoad();

  CMC7.test();
  $('#cmc7').focusout(function() {
    CMC7.test();
  });
  CNPJ.test();
  $('#cnpj').focusout(function() {
    CNPJ.test();
  });
  CPF.test();
  $('#cpf').focusout(function() {
    CPF.test();
  });

  DateBr.test();
  $('#btnDateBr').click(function() {
    DateBr.test();
  });
  DateSql.test();
  $('#btnDateSql').click(function() {
    DateSql.test();
  });

  MaskDateBr.test();
  $('#maskDateBr').focusout(function() {
    MaskDateBr.test();
  });
  MaskHour.test();
  $('#maskHour').focusout(function() {
    MaskHour.test();
  });
  MaskTelBr.test();
  $('#maskTelBr').focusout(function() {
    MaskTelBr.test();
  });
  MaskCEP.test();
  $('#maskCEP').focusout(function() {
    MaskCEP.test();
  });
  MaskCPF.test();
  $('#maskCPF').focusout(function() {
    MaskCPF.test();
  });
  MaskCNPJ.test();
  $('#maskCNPJ').focusout(function() {
    MaskCNPJ.test();
  });
  MaskNumber.test();
  $('#maskNumber').focusout(function() {
    MaskNumber.test();
  });
  MaskCurrency.test();
  $('#maskCurrency').focusout(function() {
    MaskCurrency.test();
  });
  MaskCurrencyBr.test();
  $('#maskCurrencyBr').focusout(function() {
    MaskCurrencyBr.test();
  });
  MaskCurrencyBrFocusOut.test();
  $('#maskCurrencyBrFocusOut').focusout(function() {
    MaskCurrencyBrFocusOut.test();
  });
  MaskCFOP.test();
  $('#maskCFOP').focusout(function() {
    MaskCFOP.test();
  });
});
