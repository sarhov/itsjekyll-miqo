---
---


jQuery(document).ready(function($) {
	var $slider = $('#jsSlider')
	.on('init', function(slick) {
		console.log('fired!');
		$('#jsSlider').fadeIn(3000);
	})
	.slick({
		fade: true,
		focusOnSelect: true,
		lazyLoad: 'ondemand',
		speed: 1000,
		nav: false,
		mobileFirst: true,
		slidesToShow: 1,
		dots: true
	});
});