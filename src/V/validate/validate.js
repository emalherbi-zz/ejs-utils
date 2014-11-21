/* validate field */
var Validate = {
  field : function(id, msg) {
    if ( $('#'+id).val() == 0 ) {
      alert( msg );
      $('#'+id).focus();
      return false;
    }

    return true;
  }
};
  
