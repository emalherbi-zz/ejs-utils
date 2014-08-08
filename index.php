<!DOCTYPE html>
<html>
	<head>
		<title>Web Utils</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="HTML5, CSS3, JavaScript and other front-end stuff.">

		<meta property="og:site_name" content="Ivan Hoinacki">
		<meta property="og:type" content="Home">
		<meta property="og:description" content="Simplified functions using jquery">

		<!-- Css main -->
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/slate.css">
		<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Italiana&amp;subset=latin">

		<!-- Js main -->
		<script src="js/jquery.min.js"></script>
		<script src="js/main.js"></script>
		<script src="js/utils.js"></script>

	</head>
	<body>
		<section id="top">
			<div id="menu">
				<a id="toggle" href="#" ><i class="icon-menu"></i></a>
				<ul>
					<li>
						<a id="areadme" href="#">Readme</a>
					</li>
					<li>
						<a id="aAlert" href="#">Alert</a>
					</li>
					<li>
						<a id="aScroll"  href="#">Scroll</a>
					</li>
					<li>
						<a id="aBody"  href="#">Body</a>
					</li>
					<li>
						<a id="aCheckBox" href="#">CheckBox</a>
					</li>
					<li>
						<a id="aCNPJ"  href="#">CNPJ</a>
					</li>
					<li>
						<a id="aCPF"  href="#">CPF</a>
					</li>
					<li>
						<a id="aDig"  href="#">Dig</a>
					</li>
					<li>
						<a id="aData"  href="#">Data</a>
					</li>
					<li>
						<a id="aDiv"  href="#">Div</a>
					</li>
					<li>
						<a id="aForm"  href="#">Form</a>
					</li>
					<li>
						<a id="aInput"  href="#">Input</a>
					</li>
					<li>
						<a id="aMask"  href="#">Mask</a>
					</li>
					<li>
						<a id="aMenu"  href="#">Menu</a>
					</li>
					<li>
						<a id="aMoney"  href="#">Money</a>
					</li>
					<li>
						<a id="aRadio"  href="#">Radio</a>
					</li>
					<li>
						<a id="aSelect"  href="#">Select</a>
					</li>
					<li>
						<a id="aTimeout"  href="#">Timeout</a>
					</li>
					<li>
						<a id="aTable"  href="#">Table</a>
					</li>
					<li>
						<a id="aTableGoogle"  href="#">TableGoogle</a>
					</li>
					<li>
						<a id="aTrim"  href="#">Trim</a>
					</li>
					<li>
						<a id="aZeros"  href="#">Zeros</a>
					</li>
				</ul>
			</div>
			<div id="heading">
				<div id="logo">
					Utils Js
				</div>
				<div id="tagline">
					@emalherbi  -  @ihoinacki
				</div>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="readme">Readme</h1>
				<p>
					<h3> Necessário a utilização do Jquery e JqueryUi. </h3>
				</p>
				<p>
					Projects Utils

					Com esse plugin é possível realizar
				</p>
				<p>
					Alerta
					- Msg de Alerta com Foco no Componente.
				</p>
				<p>
					Topo da Página
					- Subir ao topo da página.
				</p>
				<p>
					Checkbox
					- Selecionar o Checkbox.
				</p>
				<p>
					CNPJ
					- Validar CNPJ.
				</p>
				<p>
					CPF
					- Validar CPF.
				</p>
				<p>
					Dígitos
					- Remover máscara (se existir) e pegar somente dígitos do campo.
				</p>
				<p>
					Div
					- Posicionar o Scroll em um elemento especifico do HTML.
				</p>
				<p>
					Formulário
					- Limpar os campos do formulário.
				</p>
				<p>
					Input
					- Deixar o campo somente Leitura ou Editável.
				</p>
				<p>
					Dinheiro
					- Formatar o valor em formato US ou BR.
				</p>
				<p>
					Máscara
					- Inserir máscara para os campos de: Data, Hora, Telefone, CEP, CPF, CNPJ, Somente Números, Valor Us, Valor Br.
				</p>
				<p>
					Radio
					- Retorna o item do campo do tipo Radio checado.
				</p>
				<p>
					Select
					- Pegar o valor do atributo do item selecionado.
					- Remover a opção selecionada do Select.
					- Remover todas opções do Select.
				</p>
				<p>
					Recarregar Página
					- Recarregar a página após um período de tempo estipulado.
				</p>
				<p>
					Tabela
					- Remover tabela.
					- Totalizar a tabela (formatos US e BR).
					- Pega os valores da tabela e retorna array.
					- Conta os itens do tipo radio de uma coluna especifica da tabela.
				</p>
				<p>
					Tabela Google
					- Insere botão Edit na tabela Google usando bootstrap
					- Insere botão Delete na tabela Google usando bootstrap
				</p>
				<p>
					Limpa
					- Remove espaços a esquerda e a direita de um valor.
				</p>
				<p>
					Zeros
					- Adicionar zeros a esquerda de um valor.

				</p>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Alert">Alert Show</h1>
				<pre>
					<code class="lang-js">
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
					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Scroll">Scroll</h1>
				<p>
					Go To ID of Body With Animate
				</p>
				<pre>
					<code class="lang-js">
var Scroll = {
	go : function(id) {
		$('html, body').animate({
			scrollTop : $("#" + id).offset().top
		}, 'slow');
		return true;
	}
};

					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Body">Body</h1>
				<p>
					Go To the Top of Body With Animate
				</p>
				<pre>
					<code class="lang-js">
	var Body = {
		top : function() {
			$('html, body').animate({scrollTop:0}, 'slow');		
			
			return true;
		}
	};
					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="CheckBox">CheckBox</h1>
				<p>
					CheckBox checked
				</p>
				<pre>
					<code class="lang-js">
var CheckBox = {
	checked : function(idcheckbox) {
		return document.getElementById(idcheckbox).checked;	
	}
}
					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="CNPJ">Cnpj</h1>
				<p>
					CNPJ Validate
				</p>
				<pre>
					<code class="lang-js">
var CNPJ = 
{
  validate : function(cnpj) {
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
					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="CPF">Cpf</h1>
				<p>
					CPF Validate
				</p>
				<pre>
					<code class="lang-js">
var CPF =
{
	validate : function(cpf) {
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
					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Dig">Dig</h1>
				<p>
					returns only the input digits
				</p>
				<pre>
					<code class="lang-js">
var Dig =
{
	only : function(v) {
		return v.replace(/\D/g, '');
	}	
};
					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Data">Data</h1>
				<p>
					returns Date format Br or Sql and time now
				</p>
				<pre>
					<code class="lang-js">
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

					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Div">Div</h1>
				<p>
					positions in specific div hide all div
				</p>
				<pre>
					<code class="lang-js">
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

					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Form">Form</h1>
				<p>
					Form clea
				</p>
				<pre>
					<code class="lang-js">
var Form = 
{
	clear : function(idform) {
		$('#'+idform).each(function() {
			this.reset();
		});	
	}
};

					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Input">Input</h1>
				<p>
					input readonly , enabledField
				</p>
				<pre>
					<code class="lang-js">
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

					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Mask">Mask</h1>
				<p>
					mask for input fields
				</p>
				<pre>
					<code class="lang-js">
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

					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Menu">Menu</h1>
				<p>
					Menu Controll
				</p>
				<pre>
					<code class="lang-js">
var Menu =
{
	hideAll: function() {
		$('div[id^="div-"]').hide();
	},
	show: function(id) {
		$('#div-'+id).show('slow');
	},
	init: function(id) {
		Menu.hideAll();
		Menu.show(id);
	},
	menuTitle: function(id, text) {
		$('#'+id).text(text);
	}
}

					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Money">Money</h1>
				<p>
					format a number in Brazil or US
				</p>
				<pre>
					<code class="lang-js">
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


					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Radio">Radio</h1>
				<p>
					return radio checked from form
				</p>
				<pre>
					<code class="lang-js">
var Radio = {
	checked : function(field, form) {
		return $('input[name='+field+']:checked', '#'+form).val();
	}
};

					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Select">Select</h1>
				<p>
					return a specific attribute, remove an option from select, remove all options from select
				</p>
				<pre>
					<code class="lang-js">
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


					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Timeout">Timeout</h1>
				<p>
					set html Timeout
				</p>
				<pre>
					<code class="lang-js">
var Timeout = {
	set_html : function(href, time) {
		window.setTimeout(function() { window.location.href = href; }, time);
	}
};

					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Table">Table</h1>
				<p>
					Table Remove, CalculateUs, CalculateBr,
					Get Fields For Table and Result ArrayCollection
					return columns count radio checked
				</p>
				<pre>
					<code class="lang-js">
var Table = 
{
	remove : function(idtable) {
		$('#'+idtable).remove();
	},	
	calculateUs : function(idtable, posfield) {
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
	},
	getFieldsResultArray : function(idtable) {
		var dados = new Array();
		
		$('#' + idtable + ' tbody tr').each(function(i, el) {
	    	var obj = new Array();
		    
		    $( $(el).children() ).each(function(ii, ell) {
		        var val = $( $(ell).children() ).val();
		        obj[ii] = val;
		    }); 
		    
			dados[i] = obj;
		});
	
		return dados;
	},
	columns_count_radio_checked : function(idtable, posfield) {
		var count = 0;
		$("#"+idtable+" tbody tr > td:nth-child("+posfield+") input").each(function(i, el) {
			if ( $(el).attr('checked') == 'checked' ) {
				count++;
			}
		});
		
		return count;
	}	
};


					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="TableGoogle">TableGoogle</h1>
				<p>
					insert btn edit and delete in table google with bootstrap
				</p>
				<pre>
					<code class="lang-js">
var TableGoogle = {	
	btn_edit_str : function (func) {
	    var btn_edit = '<\button type="button" class="btn btn-small btn-warning" onclick="'+func+'" >';
		btn_edit += '<\i class="icon-pencil icon-white"></i>Editar';
		btn_edit += '</button>'; 	  
		return btn_edit; 
	}, 
	btn_delete_str : function (func) {
		var btn_del = '<\button type="button" class="btn btn-small btn-danger" onclick="'+func+'" >';
		btn_del += '<\i class="icon-remove icon-white"></i>Deletar';
		btn_del += '</button>';   
		return btn_del; 
	}
};

					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Trim">Trim</h1>
				<p>
					returns trim element
				</p>
				<pre>
					<code class="lang-js">
var Trim = {
	run : function(str) {
		str.replace(/^\s+|\s+$/g,"");
	}
};


					</code>
				</pre>
			</div>
		</section>
		<section>
			<div class="content">
				<h1 id="Zeros">Zeros</h1>
				<p>
					Zeros add left in input
				</p>
				<pre>
					<code class="lang-js">
var Zeros = {
	add_left : function(str, max) {
		str = String( str );
	
		return ( str.length < max ) ? Zeros.left("0" + str, max) : str;
	}
};


					</code>
				</pre>
			</div>
		</section>
	</body>
</html>