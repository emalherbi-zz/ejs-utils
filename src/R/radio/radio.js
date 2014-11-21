/* return radio checked from form */
var Radio = {
  checked : function(field, form) {
    return $('input[name='+field+']:checked', '#'+form).val();
  }
};
