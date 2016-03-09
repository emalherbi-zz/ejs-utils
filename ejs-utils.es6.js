let Util = ((parent, $) => {

  let cmc7 = parent.cmc7 = parent.cmc7 || {};
  let cnpj = parent.cnpj = parent.cnpj || {};
  let cpf = parent.cpf = parent.cpf || {};
  let date = parent.date = parent.date || {};
  let form = parent.form = parent.form || {};
  let html = parent.html = parent.html || {};
  let input = parent.input = parent.input || {};
  let link = parent.link = parent.link || {};
  let mask = parent.mask = parent.mask || {};
  let money = parent.money = parent.money || {};
  let number = parent.number = parent.number || {};
  let string = parent.string = parent.string || {};
  let table = parent.table = parent.table || {};
  let time = parent.time = parent.time || {};

  /**
   * CMC7 validate.
   *
   * @param {string}
   * @return {boolean}
   */
  cmc7.validate = (typedValue) => {
    let mod = (dividend, divisor) => {
      return Math.round(dividend - (Math.floor(dividend/divisor)*divisor));
    }

    let modulo10 = (str) => {
      let size = str.length - 1;
      let result = 0;
      let weight = 2;

      for (let i = size; i >= 0; i--) {

        let total = str.substr(i, 1) * weight;

        if (total > 9) {
          result = result + 1 + (total - 10);
        } else {
          result = result + total;
        }
        if (weight == 1) {
          weight = 2;
        } else {
          weight = 1;
        }
      }
      let dv = 10 - mod(result, 10);
      if (dv == 10) {
        dv = 0;
      }

      return dv;
    }

    typedValue = typedValue.replace(/\D/g, '');
    typedValue = typedValue.replace(/\s/g, "");
    if (!typedValue) {
      return false;
    }

    var pieces = {
      firstPiece : typedValue.substr(0,7)
      , secondPiece : typedValue.substr(8,10)
      , thirdPiece : typedValue.substr(19,10)
    };

    var digits = {
      firstDigit : parseInt(typedValue.substr(7,1))
      , secondDigit : parseInt(typedValue.substr(18,1))
      , thirdDigit : parseInt(typedValue.substr(29,1))
    };

    var calculatedDigits = {
      firstDigit : modulo10(pieces.firstPiece)
      , secondDigit : modulo10(pieces.secondPiece)
      , thirdDigit : modulo10(pieces.thirdPiece)
    };

    if ( (calculatedDigits.secondDigit != digits.firstDigit)
      || (calculatedDigits.firstDigit != digits.secondDigit)
      || (calculatedDigits.thirdDigit != digits.thirdDigit) ) {
      return false;
    }

    return true;
  };

  /**
   * CNPJ validate.
   *
   * @param {string}
   * @return {boolean}
   */
  cnpj.validate = (cnpj) => {
    var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;

    cnpj = cnpj.replace(/\D/g, '');
    digitos_iguais = 1;

    if (cnpj.length < 14 && cnpj.length < 15)
      return false;

    for (i = 0; i < cnpj.length - 1; i++)
      if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
        digitos_iguais = 0;
        break;
      }

    if (!digitos_iguais) {

      tamanho = cnpj.length - 2
      numeros = cnpj.substring(0,tamanho);
      digitos = cnpj.substring(tamanho);
      soma = 0;
      pos = tamanho - 7;

      for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;

        if (pos < 2)
          pos = 9;
      }

      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

      if (resultado != digitos.charAt(0))
        return false;

      tamanho = tamanho + 1;
      numeros = cnpj.substring(0,tamanho);
      soma = 0;
      pos = tamanho - 7;

      for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;

        if (pos < 2)
          pos = 9;
      }

      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

      if (resultado != digitos.charAt(1))
        return false;

      return true;

    } else return false;
  }

  /**
   * CPF validate.
   *
   * @param {string}
   * @return {boolean}
   */
  cpf.validate = (cpf) => {
    var numeros, digitos, soma, i, resultado, digitos_iguais;

    cpf = cpf.replace(/\D/g, '');
    digitos_iguais = 1;

    if (cpf.length < 11)
      return false;

    for (i = 0; i < cpf.length - 1; i++)
      if (cpf.charAt(i) != cpf.charAt(i + 1)) {
        digitos_iguais = 0;
        break;
      }

    if (!digitos_iguais) {
      numeros = cpf.substring(0,9);
      digitos = cpf.substring(9);
      soma = 0;

      for (i = 10; i > 1; i--)
        soma += numeros.charAt(10 - i) * i;

      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

      if (resultado != digitos.charAt(0))
        return false;

      numeros = cpf.substring(0,10);
      soma = 0;

      for (i = 11; i > 1; i--)
        soma += numeros.charAt(11 - i) * i;

      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

      if (resultado != digitos.charAt(1))
        return false;

      return true;
    } else return false;
  }

  /**
   * Date now Br Format.
   *
   * @return {string}
   */
  date.nowBr = () => {
    var that = new Date();
    return ((that.getDate() < 10)?"0":"") + that.getDate() + "/" + (((that.getMonth()+1) < 10)?"0":"") + (that.getMonth()+1) + "/" + that.getFullYear()
  }

  /**
   * Date now SQL Format.
   *
   * @return {string}
   */
  date.nowSql = () => {
    var that = new Date();
    return that.getFullYear() + "-" + (((that.getMonth()+1) < 10)?"0":"") + (that.getMonth()+1) + "-" + ((that.getDate() < 10)?"0":"") + that.getDate();
  }

  /**
   * Date add Days Br.
   *
   * @return {string}
   */
  date.addDaysBr = (dt, param) => {
    dt = dt.split('/');

    var day   = Number(dt[0]);
    var month = Number(dt[1]);
    var year  = Number(dt[2]);

    dt = year + '-' + month + '-' + day;

    var d = date.add(dt, 'day', param);
    return d.split('-').reverse().join('/');
  }

  /**
   * Date add Days.
   *
   * @return {string}
   */
  date.addDays = (dt, param) => {
    return date.add(dt, 'day', param);
  }

  /**
   * Date add Month Br.
   *
   * @return {string}
   */
  date.addMonthBr = (dt, param) => {
    dt = dt.split('/');

    var day   = Number(dt[0]);
    var month = Number(dt[1]);
    var year  = Number(dt[2]);

    dt = year + '-' + month + '-' + day;

    var d = date.add(dt, 'month', param);
    return d.split('-').reverse().join('/');
  }

  /**
   * Date add Month.
   *
   * @return {string}
   */
  date.addMonth = (dt, param) => {
    return date.add(dt, 'month', param);
  }

  /**
   * Date add Year Br.
   *
   * @return {string}
   */
  date.addYearBr = (dt, param) => {
    dt = dt.split('/');

    var day   = Number(dt[0]);
    var month = Number(dt[1]);
    var year  = Number(dt[2]);

    dt = year + '-' + month + '-' + day;

    var d = date.add(dt, 'year', param);
    return d.split('-').reverse().join('/');
  }

  /**
   * Date add Year.
   *
   * @return {string}
   */
  date.addYear = (dt, param) => {
    return date.add(dt, 'year', param);
  }

  /**
   * Date add Day, Month or Year.
   *
   * @return {string}
   */
  date.add = (dt, type, param) => {
    dt = dt.split('-');

    var year  = Number(dt[0]);
    var month = Number(dt[1]);
    var day   = Number(dt[2]);

    dt = new Date(year, month, day);

    if (type === 'day') {
      dt.setDate(dt.getDate() + Number(param));
    }
    if (type === 'month') {
      dt.setMonth(dt.getMonth() + Number(param));
    }
    if (type === 'year') {
      dt.setFullYear(dt.getFullYear() + Number(param));
    }

    year  =  dt.getFullYear();
    month = (dt.getMonth() < 10) ? "0" + dt.getMonth() : dt.getMonth();
    day   = (dt.getDate()  < 10) ? "0" + dt.getDate()  : dt.getDate();

    month = (Number(month) == 0) ? '12' : month;
    return year + '-' + month + '-' + day;
  }

  /**
   * Date remove Day Br.
   *
   * @return {string}
   */
  date.removeDaysBr = (dt, param) => {
    dt = dt.split('/');

    var day   = Number(dt[0]);
    var month = Number(dt[1]);
    var year  = Number(dt[2]);

    dt = year + '-' + month + '-' + day;

    var d = date.remove(dt, 'day', param);
    return d.split('-').reverse().join('/');
  }

  /**
   * Date remove Day.
   *
   * @return {string}
   */
  date.removeDays = (dt, param) => {
    return date.remove(dt, 'day', param);
  }

  /**
   * Date remove Month Br.
   *
   * @return {string}
   */
  date.removeMonthBr = (dt, param) => {
    dt = dt.split('/');

    var day   = Number(dt[0]);
    var month = Number(dt[1]);
    var year  = Number(dt[2]);

    dt = year + '-' + month + '-' + day;

    var d = date.remove(dt, 'month', param);
    return d.split('-').reverse().join('/');
  }

  /**
   * Date remove Month.
   *
   * @return {string}
   */
  date.removeMonth = (dt, param) => {
    return date.remove(dt, 'month', param);
  }

  /**
   * Date remove Year.
   *
   * @return {string}
   */
  date.removeYearBr = (dt, param) => {
    dt = dt.split('/');

    var day   = Number(dt[0]);
    var month = Number(dt[1]);
    var year  = Number(dt[2]);

    dt = year + '-' + month + '-' + day;

    var d = date.remove(dt, 'year', param);
    return d.split('-').reverse().join('/');
  }

  /**
   * Date remove Year.
   *
   * @return {string}
   */
  date.removeYear = (dt, param) => {
    return date.remove(dt, 'year', param);
  }

  /**
   * Date remove Day, Month, Year.
   *
   * @return {string}
   */
  date.remove = (dt, type, param) => {
    dt = dt.split('-');

    var year  = Number(dt[0]);
    var month = Number(dt[1]);
    var day   = Number(dt[2]);

    dt = new Date(year, month, day);

    if (type === 'day') {
      dt.setDate(dt.getDate() - Number(param));
    }
    if (type === 'month') {
      dt.setMonth(dt.getMonth() - Number(param));
    }
    if (type === 'year') {
      dt.setFullYear(dt.getFullYear() - Number(param));
    }

    year  =  dt.getFullYear();
    month = (dt.getMonth() < 10) ? "0" + dt.getMonth() : dt.getMonth();
    day   = (dt.getDate()  < 10) ? "0" + dt.getDate()  : dt.getDate();

    month = (Number(month) == 0) ? '12' : month;
    return year + '-' + month + '-' + day;
  }

  /**
   * Get Years in array.
   *
   * Ex:  [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
   *
   * @param {string}
   *  => Start Year.
   * @param {string}
   *  => Finish Year.
   *
   * @return {array}
   */
  date.getYearsArray = (startYear, finishYear) => {
    var years = [];

    finishYear = finishYear || new Date().getFullYear();
    startYear  = startYear  || 1990;

    while (startYear <= finishYear) {
      years.push(startYear++);
    }

    return years;
  }

  /**
   * Form clear.
   *
   * @param {string}
   *  => ID form.
   *
   * @return {boolean}
   */
  form.clear = (idForm) => {
    $('#'+idForm).each(() => { reset(); });
  }

  /**
   * Go to Top of scroll.
   *
   * @param {string or number}
   *  => A string or number determining how long the animation will run.
   *
   * @return {boolean}
   */
  html.top = (duration='fast') => {
    return $('html, body').animate({scrollTop:0}, duration).is(':animated') ? true : false;
  }

  /**
   * Set Input enabled.
   *
   * @param {string}
   * @return {boolean}
   */
  input.enabled = (id) => {
    let doc = document.getElementById( id );

    doc.readOnly = false;
    doc.style.backgroundColor = "#FFF";
    doc.value = '';
  }

  /**
   * Set Input readOnly.
   *
   * @param {string}
   * @return {boolean}
   */
  input.readOnly = (id) => {
    let doc = document.getElementById( id );

    doc.readOnly = true;
    doc.style.backgroundColor = "#CCC";
    doc.value = '';
  }

  /**
   * Set timeout to specific link's destination.
   *
   * @param {string}
   *  => The href attribute specifies the link's destination.
   * @param {number}
   *  => The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
   *
   * @return {number}
   */
  link.timeout = (href, time) => {
    window.setTimeout(() => {window.location.href = href}, time);
  }

  /**
   * How to run the mask
   *
   *   Ex HTML: <input id="dt" value="" onkeydown="Util.mask.exec(this, Util.mask.date)" type="text" maxlength="10" >
   *
   *   Ex JS: var v = document.getElementById('dt');
   *          Util.mask.exec(v, Util.mask.date);
   *
   * @param {element, string}
   * @return {boolean}
   */
  mask.exec = (o, f) => {
    let v_obj = o;
    let v_fun = f;

    setTimeout(v_obj.value=v_fun(v_obj.value), 1);
    return true;
  }

  /**
   * Mask Date Br Format
   *
   * @param {string}
   * @return {string}
   */
  mask.dateBr = (value) => {
    return value.replace(/\D/g,"").replace(/(\d{2})(\d)/,"$1/$2").replace(/(\d{2})(\d)/,"$1/$2");
  }

  /**
   * Mask Hour
   *
   * @param {string}
   * @return {string}
   */
  mask.hour = (value) => {
    return value.replace(/\D/g,"").replace(/(\d{2})(\d)/,"$1:$2");
  }

  /**
   * Mask Telephone Br
   *
   * @param {string}
   * @return {string}
   */
  mask.telBr = (value) => {
    return value.replace(/\D/g,"").replace(/^(\d\d)(\d)/g,"($1) $2").replace(/(\d{4})(\d)/,"$1 - $2");
  }

  /**
   * Mask CEP
   *
   * @param {string}
   * @return {string}
   */
  mask.cep = (value) => {
    return value.replace(/\D/g,"").replace(/(\d{2})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1-$2");
  }

  /**
   * Mask CPF
   *
   * @param {string}
   * @return {string}
   */
  mask.cpf = (value) => {
    return value.replace(/\D/g,"").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  }

  /**
   * Mask CNPJ
   *
   * @param {string}
   * @return {string}
   */
  mask.cnpj = (value) => {
    return value.replace(/\D/g,"").replace(/^(\d{2})(\d)/,"$1.$2").replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3").replace(/\.(\d{3})(\d)/,".$1/$2").replace(/(\d{4})(\d)/,"$1-$2");
  }

  /**
   * Mask CNPJ or CPF
   *
   * @param {string}
   * @return {string}
   */
  mask.cnpjcpf = (value) => {
    if (value.length >= 14) {
      return mask.cnpj(value);
    }

    return mask.cpf(value);
  }

  /**
   * Mask Number (only number)
   *
   * @param {string}
   * @return {string}
   */
  mask.number = (value) => {
    return value.replace(/\D/g, "");
  }

  /**
   * Mask Currency
   *
   * @param {string}
   * @return {string}
   */
  mask.currency = (value) => {
    return value.replace(/\D/g,"").replace(/(\d)(\d{2})$/,"$1.$2");
  }

  /**
   * Mask Currency Br
   *
   * @param {string}
   * @return {string}
   */
  mask.currencyBr = (value) => {
    return value.replace(/\D/g,"").replace(/(\d)(\d{2})$/,"$1,$2");
  }

  /**
   * Mask Currency Br Focus Out
   *
   * @param {string}
   * @return {string}
   */
  mask.currencyBrFocusOut = (value) => {
    if ( value.indexOf(',') != -1 ) {
      value = value.split(",");
      var t = value[0].replace(/\D/g,"");
      var d = value[1].replace(/\D/g,"");
      if ( d.length == 1 ) {
        d = d + '0';
      }
      value = t + ',' + d;
    }
    else {
      value = value.replace(/\D/g,"");
      if ( value == '' ) return '';
      value = value + ',00';
    }
    return value;
  }

  /**
   * Mask CFOP
   *
   * @param {string}
   * @return {string}
   */
  mask.cfop = (value) => {
    return value.replace(/\D/g,"").replace(/(\d{1})(\d)/,"$1.$2");
  }

  /**
   * Format currency to currency Br.
   *   Ex: 100.00 => '100,00'
   *
   * @param {number}
   * @return {string}
   */
  money.formatBr = (num) => {
    num = num.toString().replace(/\$|\,/g,'');

    if (isNaN(num))
      num = "0";

    let sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    let cents = num%100;
    num = Math.floor(num/100).toString();

    if (cents<10)
      cents = "0" + cents;

    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
      num = num.substring(0,num.length-(4*i+3))+'.'+ num.substring(num.length-(4*i+3));

    return (((sign)?'':'-') + num + ',' + cents);
  }

  /**
   * Format to currency.
   *   Ex: '100,00' => 100.00
   *
   * @param {string}
   * @return {number}
   */
  money.formatUs = (num) => {
    return Math.round(num.replace(/\./g, "").replace(/,/, ".") * 100) / 100;
  }

  /**
   * Return only number from string
   *
   * @param {string}
   * @return {Number}
   */
  number.only = (str) => {
    return Number(str.replace(/\D/g, ''));
  }

  /**
   * Add {@param} on left of string.
   *
   * @param {string or number}
   * @param {number}
   *  => How many {@param} should be inserted left
   *
   * @return {string}
   */
  string.addLeft = (str, max) => {
    return (str.length < max) ? string.addLeft("0" + str, max) : str;
  }

  /**
   * Remove whitespace from both sides of a string.
   *
   * @param {string}
   * @return {string}
   */
  string.trim = (str) => {
    return str.replace(/^\s+|\s+$/g,"");
  }

  /**
   * Calculate the columns from Table in Br format.
   *
   * @param {string}
   *  => ID Table
   * @param {string}
   *  => column position
   * @return {number}
   */
  table.calculateBr = (idTable, column) => {
    return money.formatBr(table.calculateUs(idTable, column));
  }

  /**
   * Calculate the columns from Table in Us format.
   *
   * @param {string}
   *  => ID Table
   * @param {string}
   *  => column position
   * @return {number}
   */
  table.calculateUs = (idTable, column) => {
    let vlr = 0;

    $("#"+idtable+" tbody tr > td:nth-child("+column+")").each(function(i, el) {
      var v = $( el ).find('input').val();

      if ( typeof v !== 'undefined' ) {
        vlr += Number(v.replace("/./g", "").replace(",", "."));
      }
      else {
        var v = $( el ).find('span').text();

        if ( typeof v !== 'undefined' ) {
          vlr += Number(v.replace("R$", "").replace("/./g", "").replace(",", "."));
        }
        else {
          vlr += Number(el.innerHTML.replace("R$", "").replace("/./g", "").replace(",", "."));
        }
      }
    });

    return vlr;
  };

  /**
   * Time now.
   *
   * @return {string}
   */
  time.now = () => {
    var that = new Date();
    return ((that.getHours() < 10)?"0":"") + that.getHours() +":"+ ((that.getMinutes() < 10)?"0":"") + that.getMinutes() +":"+ ((that.getSeconds() < 10)?"0":"") + that.getSeconds();
  }

  return parent;

}(Util || {}, jQuery));
