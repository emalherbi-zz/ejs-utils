/* CheckBox checked */
var CheckBox = {
	checked : function(idcheckbox) {
		return document.getElementById(idcheckbox).checked;
	}
}

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

/* return radio checked from form */
var Radio = {
	checked : function(field, form) {
		return $('input[name='+field+']:checked', '#'+form).val();
	}
};

/* Go To ID of Body With Animate */
var Scroll = {
	go : function(id) {
		$('html, body').animate({
			scrollTop : $("#" + id).offset().top
		}, 'slow');
		return true;
	}
};

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
