$(document).ready(function(){
	$('.pagenav').click(function(e) {
		e.preventDefault();
		var amt = $($(this).attr('scrolltarget')).offset().top - 150;
		$('html, body').animate({
			scrollTop: amt
		}, 1000);
	});
	$('.projdesc').each(function() {
		$(this).height($(this).parent(0).height() - $(this).parent(0).css('padding') * 2);
		$(this).ellipsis();
	});
});