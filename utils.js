var CNPJ = 
{
  valida : function(cnpj) {
		var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
		digitos_iguais = 1;
		if (cnpj.length < 14 && cnpj.length < 15)
			return false;
		for (i = 0; i < cnpj.length - 1; i++)
			if (cnpj.charAt(i) != cnpj.charAt(i + 1))
			{
				digitos_iguais = 0;
				break;
			}
		if (!digitos_iguais)
		{
			tamanho = cnpj.length - 2
			numeros = cnpj.substring(0,tamanho);
			digitos = cnpj.substring(tamanho);
			soma = 0;
			pos = tamanho - 7;
			for (i = tamanho; i >= 1; i--)
			{
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
			for (i = tamanho; i >= 1; i--)
			{
				soma += numeros.charAt(tamanho - i) * pos--;
				if (pos < 2)
					pos = 9;
			}
			resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
			
			if (resultado != digitos.charAt(1))
				return false;			

			return true;
		} 
		else return false;	
	}
};

var CPF =
{
	valida : function(cpf) {
		var numeros, digitos, soma, i, resultado, digitos_iguais;
		digitos_iguais = 1;
		if (cpf.length < 11)
			return false;
		for (i = 0; i < cpf.length - 1; i++)
			if (cpf.charAt(i) != cpf.charAt(i + 1))
			{
				digitos_iguais = 0;
				break;
			}
		if (!digitos_iguais)
		{
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
		}
		else
			return false;
	}
};

var Money =
{
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
		return num.replace(/\./g, "").replace(/,/, ".");
	}
}

var Dig =
{
	only : function(v) {
		return v.replace(/\D/g, '');
	}	
};	

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
	}	
};

var Input = {
	readOnly : function(id) {
		document.getElementById( id ).readOnly = true;
		document.getElementById( id ).style.backgroundColor = "#CCC";		
		document.getElementById( id ).value = '';
	},
	enabledField : function(id) {
		document.getElementById( id ).readOnly = false;
		document.getElementById( id ).style.backgroundColor = "#FFF";		
		document.getElementById( id ).value = '';
	}
};

var Zeros = {
	left : function(str, max) {
		str = String( str );
	
		return ( str.length < max ) ? Zeros.left("0" + str, max) : str;
	}
};

var Form = 
{
	clear : function(idform) {
		$('#'+idform).each(function() {
			this.reset();
		});	
	}
};

var Table = 
{
	remove : function(idtable) {
		$('#'+idtable).remove();
	},	
	calculate : function(idtable, posfield) {
		var vlr = 0;
		$("#"+idtable+" tbody tr > td:nth-child("+posfield+")").each(function(i, el) {
			vlr += Number(el.innerHTML.replace(".", "").replace(",", "."));
		});
		
		return vlr;
	},
	calculateBr : function(idtable, posfield) {
		var vlr = 0;
		$("#"+idtable+" tbody tr > td:nth-child("+posfield+")").each(function(i, el) {
			vlr += Number(el.innerHTML.replace(".", "").replace(",", "."));
		});
		
		return Money.formatBr( vlr );
	}
};

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

var Alert = {
	show : function(id, msg) {
		if ( $('#'+id).val() == 0 ) 
		{
			alert( msg );
			$('#'+id).focus();
			return false;
		}	
		
		return true;
	}
};

var Div = {
	go : function(id) {
		$(document).scrollTop( $("#"+id).offset().top );  
		
		return true;
	}
};

