Ajax_Class = function() {};

Ajax_Class.prototype = {
	init: function() {
		var self = this,
			xhrLoadingState = false;

		//Verify that this file is loading
		self.loaded();

		//Set up ajax defaults
		$.ajaxSetup({});
	},

	loaded: function() {
		console.log("Ajax_Class.js loaded.")
	}
}