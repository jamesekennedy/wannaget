$(window).load(function(){
	"use strict";

	var speedOpacity = 2000;
	$('body').animate({
		opacity: 1
	}, speedOpacity, function() {});
});

$(document).ready(function(){
	"use strict";

	(function($) {

		$.fn.visible = function(partial) {

			var $t            = $(this),
				$w            = $(window),
				viewTop       = $w.scrollTop(),
				viewBottom    = viewTop + $w.height(),
				_top          = $t.offset().top,
				_bottom       = _top + $t.height(),
				compareTop    = partial === true ? _bottom : _top,
				compareBottom = partial === true ? _top : _bottom;

			return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

		};

	})(jQuery);

	var win = $(window);

	var setVisibleBlock = function() {
		var allMods = $(".header, .big-features .box, .flexslider-quotes, .box-features, .screens .gallery, .subscribe-wrap, .footer");
		allMods.each(function(i, el) {
			var $el = $(el);
			if ($el.visible(true)) {
				$el.addClass("come-in");
			}
		});
	};

	setVisibleBlock();

	/* --------- Options Rate-paralax ------------ */

	var opacityRate = 1.2;
	var speedRate = 4;
	var backgroundSpeedRate = 1;



	var header = $('.header');
	var promoEffect = $('.container.promo-effect');
	var promo = $('.promo');

	var lastScrollTop = 0;

	win.scroll(function() {
		if (header.length) {
		   promoEffect.css('opacity', (1 - $(document).scrollTop() * opacityRate / header.offset().top));
		}
		promoEffect.css('top', (-1) * $(document).scrollTop() / speedRate);
		promo.css('background-position', "0px " + $(document).scrollTop() * backgroundSpeedRate + "px");

		var scrollTop = $(this).scrollTop();

		if (scrollTop > lastScrollTop) {
			setVisibleBlock();
		}

		lastScrollTop = scrollTop;

	});

});