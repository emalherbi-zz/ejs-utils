/* Form clear */
var Form =
{
  clear : function(idform) {
    $('#'+idform).each(function() {
      this.reset();
    });
  }
};
