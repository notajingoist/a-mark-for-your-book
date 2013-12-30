var SITE = {
	init: function() {
		this.$document = $(window.document);
		this.$body = $('body');
		this.$tns = $('.animate');

		this.bindEvents();

		this.tnHovered = false;
	},

	bindEvents: function() {
		this.$tns.on('mouseenter', this.animateEnter.bind(this));
		this.$tns.on('mouseleave', this.animateLeave.bind(this));
	},

	animateEnter: function(e) {
		var $img = $(e.currentTarget);

		if (!this.tnHovered) {
			var currSrc = $img.attr('src');
			var newSrc = currSrc
				.slice(0, currSrc.length - 4)
				.concat('-2.jpg');
			$img.attr('src', newSrc);

			this.tnHovered = true;
		}

		e.preventDefault();
	},

	animateLeave: function(e) {
		var $img = $(e.currentTarget);

		if (this.tnHovered) {
			var currSrc = $img.attr('src');
			var newSrc = currSrc
				.slice(0, currSrc.length - 6)
				.concat('.jpg');
			$img.attr('src', newSrc);
		
			this.tnHovered = false;
		}

		e.preventDefault();	
	}
}

SITE.init();