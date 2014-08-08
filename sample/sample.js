jQuery(document).ready(function($) {
	$('#boxset').randomFadeIn();
	$('#boxset2').randomFadeIn('slow');
	$('#boxset3').randomFadeIn(500, false);

	// select language
	$('#language button').click(function(ev) {
		$('*[class*=lang_]').hide();
		$('button[id*=lang_]').removeAttr('disabled');
		$('.' + $(ev.target).attr('id')).show();
		$(ev.target).attr('disabled', 'disabled');
	});
	$('.lang_ja').hide();
	$('#lang_en').attr('disabled', 'disabled');
});