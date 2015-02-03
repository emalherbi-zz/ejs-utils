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

$( document ).ready(function() {
  console.log( "ready!" );

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
});
