/*
* name: LinkIt
* author: Bao Khanh Tran
* version: 0.1.0
* license: MIT
*/

// When in the plugin you don't need to use $(this), just do this.
$.fn.linkIt = function(options) {

	// Default Settings
	// putting the options in whatever field, how tricky
	var settings = $.extend({
		href : null, 
		text: null,
		target: '_self'
	}, options);

	// Validation
	if (settings.href == null) {
		console.log("You need to input a link.");
		return this;
	}

	return this.each(function() {
		var object = $(this);

		if (settings.text == null) {
			settings.text = object.text();
		}

		console.log(settings.href);
		object.wrap('<a href="' + settings.href + '" target="' + settings.target + '"></a>').text(settings.text);
	});

}