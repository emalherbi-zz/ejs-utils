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
