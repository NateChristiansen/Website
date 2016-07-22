$(document).ready(function(){
	$('.pagenav').click(function(e) {
		e.preventDefault();
		var amt = $($(this).attr('scrolltarget')).offset().top - 150;
		$('html, body').animate({
			scrollTop: amt
		}, 1000);
	});
});