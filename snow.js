$(document).ready(function() {
		$(".navscroll").hide(); // hide navebar first
		// fade in .navbar
		$(function () {
			$(window).scroll(function () {
				if($(this).scrollTop() > 50) { // set distance user needs to scroll down before we start fadeIn
					$('.navscroll').fadeIn();
				}
				else {
					$('.navscroll').fadeOut();
				}
			});
	});
});


