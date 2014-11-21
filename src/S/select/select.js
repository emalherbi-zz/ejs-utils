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
