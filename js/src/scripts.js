var SITE = {
	init: function() {
		this.$document = $(window.document);
		this.$body = $('body');

		this.bindEvents();
	},

	bindEvents: function() {
		//this.$body.on('click', this.blah.bind(this));
	},

	blah: function() {
	}
}

SITE.init();