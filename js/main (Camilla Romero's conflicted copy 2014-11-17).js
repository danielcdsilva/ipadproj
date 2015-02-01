$(document).ready(function() {
	$('#link1').click(function(e) {
		e.preventDefault()
		$($(this).attr('href')).fadeToggle(250);
	});
});