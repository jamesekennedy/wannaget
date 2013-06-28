$(document).ready(function(){
	"use strict";

	var $menu = $(".header");
	var $promo = $(".promo");

	$(window).scroll(function(){
		if ( $(this).scrollTop() > $promo.height() && $menu.hasClass("default") ){
			$menu.removeClass("default").addClass("fixed");
		} else if($(this).scrollTop() <= $promo.height() && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
		}
	});
});