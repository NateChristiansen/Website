$(document).ready(function(){
	$('.Screen').each(function(){
		if ($(this).index() !== 0) {
			$(this).css('margin-top', $('.Screen')[$(this).index()-1])
		}
	});
});