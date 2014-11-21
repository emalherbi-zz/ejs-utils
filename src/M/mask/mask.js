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
