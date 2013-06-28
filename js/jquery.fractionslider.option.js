$(window).load(function(){
	"use strict";

	$('.slider').fractionSlider({
		'fullWidth': true,
		'pager': true
	});

	$('.slider-page4').fractionSlider({
		'delay' : 0,
		'fullWidth': false,
		'responsive': true,
		'timeout' : 6000,
		'speedIn' : 2000,
		'speedOut' : 2000
	});

});
