/* set html Timeout */
var Timeout = {
  set_html : function(href, time) {
    window.setTimeout(function() { window.location.href = href; }, time);
  }
};
