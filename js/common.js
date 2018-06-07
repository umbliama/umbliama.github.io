$(document).ready(function() {
	let btn = $('.top-nav_btn');
	let menu = $('.top-nav_menu');
	let btn_contact = $('.top-nav_menu>li:last-child');
	btn.on('click',function(event) {
		event.preventDefault();
		menu.slideToggle(300);
	});

});