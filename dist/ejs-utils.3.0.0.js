"use strict";

/*!
 * ejs-utils v3.0.1 (http://emalherbi.github.io/ejs-utils/)
 * Copyright 2010-2015 emalherbi
 * Licensed under MIT (http://en.wikipedia.org/wiki/MIT_License)
 */
// 6to5 ejs-utils.ES6.js --out-file ejs-utils.ES5.js

var Util = (function (parent, $) {
  var cnpj = parent.cnpj = parent.cnpj || {};
  var cpf = parent.cpf = parent.cpf || {};
  var form = parent.form = parent.form || {};
  var html = parent.html = parent.html || {};
  var input = parent.input = parent.input || {};
  var link = parent.link = parent.link || {};
  var money = parent.money = parent.money || {};
  var number = parent.number = parent.number || {};
  var string = parent.string = parent.string || {};
  var table = parent.table = parent.table || {};

  /**
   * CNPJ validate.
   *
   * @param {string}
   * @return {boolean}
   */
  cnpj.validate = function (cnpj) {
    var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;

    cnpj = cnpj.replace(/\D/g, "");
    digitos_iguais = 1;

    if (cnpj.length < 14 && cnpj.length < 15) return false;

    for (i = 0; i < cnpj.length - 1; i++) if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
      digitos_iguais = 0;
      break;
    }

    if (!digitos_iguais) {
      tamanho = cnpj.length - 2;
      numeros = cnpj.substring(0, tamanho);
      digitos = cnpj.substring(tamanho);
      soma = 0;
      pos = tamanho - 7;

      for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;

        if (pos < 2) pos = 9;
      }

      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

      if (resultado != digitos.charAt(0)) return false;

      tamanho = tamanho + 1;
      numeros = cnpj.substring(0, tamanho);
      soma = 0;
      pos = tamanho - 7;

      for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;

        if (pos < 2) pos = 9;
      }

      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

      if (resultado != digitos.charAt(1)) return false;

      return true;
    } else return false;
  };

  /**
   * CPF validate.
   *
   * @param {string}
   * @return {boolean}
   */
  cpf.validate = function (cpf) {
    var numeros, digitos, soma, i, resultado, digitos_iguais;

    cpf = cpf.replace(/\D/g, "");
    digitos_iguais = 1;

    if (cpf.length < 11) return false;

    for (i = 0; i < cpf.length - 1; i++) if (cpf.charAt(i) != cpf.charAt(i + 1)) {
      digitos_iguais = 0;
      break;
    }

    if (!digitos_iguais) {
      numeros = cpf.substring(0, 9);
      digitos = cpf.substring(9);
      soma = 0;

      for (i = 10; i > 1; i--) soma += numeros.charAt(10 - i) * i;

      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

      if (resultado != digitos.charAt(0)) return false;

      numeros = cpf.substring(0, 10);
      soma = 0;

      for (i = 11; i > 1; i--) soma += numeros.charAt(11 - i) * i;

      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

      if (resultado != digitos.charAt(1)) return false;

      return true;
    } else return false;
  };

  /**
   * Form clear.
   *
   * @param {string}
   *  => ID form.
   *
   * @return {boolean}
   */
  form.clear = function (idForm) {
    $("#" + idForm).each(function () {
      reset();
    });
  };

  /**
   * Go to Top of scroll.
   *
   * @param {string or number}
   *  => A string or number determining how long the animation will run.
   *
   * @return {boolean}
   */
  html.top = function () {
    var duration = arguments[0] === undefined ? "fast" : arguments[0];
    return $("html, body").animate({ scrollTop: 0 }, duration).is(":animated") ? true : false;
  };

  /**
   * Set Input enabled.
   *
   * @param {string}
   * @return {boolean}
   */
  input.enabled = function (id) {
    var doc = document.getElementById(id);

    doc.readOnly = false;
    doc.style.backgroundColor = "#FFF";
    doc.value = "";
  };

  /**
   * Set Input readOnly.
   *
   * @param {string}
   * @return {boolean}
   */
  input.readOnly = function (id) {
    var doc = document.getElementById(id);

    doc.readOnly = true;
    doc.style.backgroundColor = "#CCC";
    doc.value = "";
  };

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
  link.timeout = function (href, time) {
    return window.setTimeout(function () {
      window.location.href = href;
    }, time);
  };

  /**
   * Format currency to currency Br.
   *   Ex: 100.00 => '100,00'
   *
   * @param {number}
   * @return {string}
   */
  money.formatBr = function (num) {
    num = num.toString().replace(/\$|\,/g, "");

    if (isNaN(num)) num = "0";

    var sign = num == (num = Math.abs(num));
    num = Math.floor(num * 100 + 0.50000000001);
    var cents = num % 100;
    num = Math.floor(num / 100).toString();

    if (cents < 10) cents = "0" + cents;

    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) num = num.substring(0, num.length - (4 * i + 3)) + "." + num.substring(num.length - (4 * i + 3));

    return (sign ? "" : "-") + num + "," + cents;
  };

  /**
   * Format to currency.
   *   Ex: '100,00' => 100.00
   *
   * @param {string}
   * @return {number}
   */
  money.formatUs = function (num) {
    return Math.round(num.replace(/\./g, "").replace(/,/, ".") * 100) / 100;
  };

  /**
   * Return only number from string
   *
   * @param {string}
   * @return {Number}
   */
  number.only = function (str) {
    return Number(str.replace(/\D/g, ""));
  };

  /**
   * Add {@param} on left of string.
   *
   * @param {string or number}
   * @param {number}
   *  => How many {@param} should be inserted left
   *
   * @return {string}
   */
  string.addLeft = function (str, max) {
    return str.length < max ? string.addLeft("0" + str, max) : str;
  };

  /**
   * Remove whitespace from both sides of a string.
   *
   * @param {string}
   * @return {string}
   */
  string.trim = function (str) {
    return str.replace(/^\s+|\s+$/g, "");
  };

  /**
   * Calculate the columns from Table in Br format.
   *
   * @param {string}
   *  => ID Table
   * @param {string}
   *  => column position
   * @return {number}
   */
  table.calculateBr = function (idTable, column) {
    return money.formatBr(table.calculateUs(idTable, column));
  };

  /**
   * Calculate the columns from Table in Us format.
   *
   * @param {string}
   *  => ID Table
   * @param {string}
   *  => column position
   * @return {number}
   */
  table.calculateUs = function (idTable, column) {
    var vlr = 0;

    $("#" + idtable + " tbody tr > td:nth-child(" + column + ")").each(function (i, el) {
      var v = $(el).find("input").val();

      if (typeof v !== "undefined") {
        vlr += Number(v.replace("/./g", "").replace(",", "."));
      } else {
        var v = $(el).find("span").text();

        if (typeof v !== "undefined") {
          vlr += Number(v.replace("R$", "").replace("/./g", "").replace(",", "."));
        } else {
          vlr += Number(el.innerHTML.replace("R$", "").replace("/./g", "").replace(",", "."));
        }
      }
    });

    return vlr;
  };

  return parent;
})(Util || {}, jQuery);