$('.accordion').on('click', function() {
	if ($(this).next().hasClass('opened')) {
		return
	}
	$('.panel.opened')
		.slideUp()
		.removeClass('opened');
	$(this)
		.next()
		.slideDown()
		.addClass('opened');
});