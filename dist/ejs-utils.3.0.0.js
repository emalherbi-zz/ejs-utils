/*!
 * ejs-utils v2.0.36 (http://emalherbi.github.io/ejs-utils/)
 * Copyright 2010-2014 emalherbi
 * Licensed under MIT (http://en.wikipedia.org/wiki/MIT_License)
 */
var Util = (function (parent, $) {
	//var ajax = parent.ajax = parent.ajax || {};
	var body = parent.body = parent.body || {};
	var zeros = parent.zeros = parent.zeros || {};

	//ajax.post = function (url, params, callback) {
	//	return $.post(url, params, callback);
	//};

	body.top = function() {
		$('html, body').animate({scrollTop:0}, 'slow');

		return true;
	}

	zeros.left = function(str, max) {
		str = String( str );
		return ( str.length < max ) ? zeros.left("0" + str, max) : str;
	};

	// ...

	return parent;
}(Util || {}, jQuery));

// TEST
// console.log( Util.zeros.left('1', '2') );
