/* Go To ID of Body With Animate */
var Scroll = {
  go : function(id) {
    $('html, body').animate({
      scrollTop : $("#" + id).offset().top
    }, 'slow');
    return true;
  }
};
