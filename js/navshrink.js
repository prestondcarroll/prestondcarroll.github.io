// Nabar styling upon scrolling

$ (window).scroll(function() {

	if($(document).scrollTop() > 200)
	{
		$('#navbarNav').addClass('shrink');
	}
	else
	{
		$('#navbarNav').removeClass('shrink');
	}
});
