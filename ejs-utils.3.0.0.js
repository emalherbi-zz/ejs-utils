/* CheckBox checked */
var CheckBox = {
	checked : function(idcheckbox) {
		return document.getElementById(idcheckbox).checked;
	}
}

/* Cmc7 validate */
var Cmc7 = {
	validate : function (typedValue) {
		typedValue = typedValue.replace(/\s/g, "");
		if(!typedValue){
			return false;
		}

		var pieces = {
			firstPiece  : typedValue.substr(0,7)
			, secondPiece : typedValue.substr(8,10)
			, thirdPiece  : typedValue.substr(19,10)
		};

		var digits = {
			firstDigit : parseInt(typedValue.substr(7,1))
			, secondDigit :  parseInt(typedValue.substr(18,1))
			, thirdDigit : parseInt(typedValue.substr(29,1))
		};

		var calculatedDigits = {
			firstDigit : this.modulo10(pieces.firstPiece)
			, secondDigit :  this.modulo10(pieces.secondPiece)
			, thirdDigit : this.modulo10(pieces.thirdPiece)
		};

		if ( (calculatedDigits.secondDigit != digits.firstDigit)
			|| (calculatedDigits.firstDigit != digits.secondDigit)
			|| (calculatedDigits.thirdDigit != digits.thirdDigit) ) {
			return false;
		}

		return true;
	},
	modulo10 : function(str) {
		var size = str.length - 1;
		var result = 0;
		var weight = 2;

		for (var i = size; i >= 0; i--) {

			total = str.substr(i, 1) * weight;

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
		var dv = 10 - this.mod(result, 10);
		if (dv == 10) {
			dv = 0;
		}
		return dv;
	},
	mod : function(dividend, divisor) {
		return Math.round(dividend - (Math.floor(dividend/divisor)*divisor));
	}
};


/* returns Date format Br or Sql and time now
* */
var Data =
{
	nowBr : function() { /* using jquery ui */
		return $.datepicker.formatDate( 'dd/mm/yy', new Date() );
	},
	nowSql : function() { /* using jquery ui */
		return $.datepicker.formatDate( 'yy-mm-dd', new Date() );
	},
	today : function() { /* using javascript */
		var that = new Date();
		return ((that.getDate() < 10)?"0":"") + that.getDate() +"/"+(((that.getMonth()+1) < 10)?"0":"") + (that.getMonth()+1) +"/"+ that.getFullYear()
	},
	timeNow : function() { /* using javascript */
		var that = new Date();
		return ((that.getHours() < 10)?"0":"") + that.getHours() +":"+ ((that.getMinutes() < 10)?"0":"") + that.getMinutes() +":"+ ((that.getSeconds() < 10)?"0":"") + that.getSeconds();
	}
};


/* positions in specific div */
/* hide all div */
var Div = {
	go : function(id) {
		$('#'+id).slideToggle('slow', function() {
			$('html, body').animate({scrollTop:$("#"+id).offset().top}, 'slow');
		});

		return true;
	},
	hideAll: function() {
		$('div[id^="div-"]').hide();
	}
};


/* mask for input fields */
var Mask =
{
	mascara : function(o,f) {
		v_obj = o
		v_fun = f
		setTimeout("Mask.execmascara()", 1)
	},
	execmascara : function() {
		v_obj.value=v_fun(v_obj.value)
	},
	mdata : function(v) {
		v=v.replace(/\D/g,"")
		v=v.replace(/(\d{2})(\d)/,"$1/$2")
		v=v.replace(/(\d{2})(\d)/,"$1/$2")
		return v
	},
	mhora : function(v) {
		v=v.replace(/\D/g,"")
		v=v.replace(/(\d{2})(\d)/,"$1:$2")
		return v
	},
	mtelefone : function(v) {
		v=v.replace(/\D/g,"")
		v=v.replace(/^(\d\d)(\d)/g,"($1) $2")
		v=v.replace(/(\d{4})(\d)/,"$1 - $2")
		return v
	},
	mcep : function(v) {
		v=v.replace(/\D/g,"")
		v=v.replace(/(\d{2})(\d)/,"$1.$2")
		v=v.replace(/(\d{3})(\d)/,"$1-$2")
		return v
	},
	mcpf : function(v) {
		v=v.replace(/\D/g,"")
		v=v.replace(/(\d{3})(\d)/,"$1.$2")
		v=v.replace(/(\d{3})(\d)/,"$1.$2")
		v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
		return v
	},
	mcnpj : function(v) {
		v=v.replace(/\D/g,"")
		v=v.replace(/^(\d{2})(\d)/,"$1.$2")
		v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
		v=v.replace(/\.(\d{3})(\d)/,".$1/$2")
		v=v.replace(/(\d{4})(\d)/,"$1-$2")
		return v
	},
	mcnpjcpf:function(v) {
		if (v.length > 14) {
			return Mask.mcnpj(v);
		} else {
			return Mask.mcpf(v);
		}
	},
	mnumeros : function(v) {
		return v.replace(/\D/g,"")
	},
	mvalor : function(v) {
		v=v.replace(/\D/g,"")
		v=v.replace(/(\d)(\d{2})$/,"$1.$2")
		return v
	},
	mvalorbr : function(v) {
		v=v.replace(/\D/g,"")
		v=v.replace(/(\d)(\d{2})$/,"$1,$2")
		return v
	},
	mfvalorbr : function(v) { /* format valor focus out */
		if ( v.indexOf(',') != -1 ) {
			v=v.split(",");
			var t = v[0].replace(/\D/g,"");
			var d = v[1].replace(/\D/g,"");
			if ( d.length == 1 ) {
				d = d + '0';
			}
			v = t + ',' + d;
		}
		else {
			v = v.replace(/\D/g,"");
			if ( v == '' ) return '';
			v = v + ',00';
		}
		return v;
	},
	mcfop : function(v) {
		v=v.replace(/\D/g,"");
		v=v.replace(/(\d{1})(\d)/,"$1.$2");
		return v;
	}
};



/* return radio checked from form */
var Radio = {
	checked : function(field, form) {
		return $('input[name='+field+']:checked', '#'+form).val();
	}
};

/* Go To ID of Body With Animate */
var Scroll = {
	go : function(id) {
		$('html, body').animate({
			scrollTop : $("#" + id).offset().top
		}, 'slow');
		return true;
	}
};

/* return a specific attribute, remove an option from select, remove all options from select */
var Select = {
	option_select_attr : function(idselect, attr) {
		return $('option:selected', $('#'+idselect)).attr( attr );
	},
	remove_selected_option : function(idselect) {
		$('#' + idselect + ' option:selected').each(function() {
			$(this).remove();
		});
	},
	remove_all_option : function(idselect) {
		$('#' + idselect + ' option').each(function() {
			$(this).remove();
		});
	}
};
