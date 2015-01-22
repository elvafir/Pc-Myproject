(function($)
{
	$(document).ready(function() {
		var select=new Select({"inputstyle":$('input.inputstyle'),"showinfostyle":$('ul.info-content')});
		select.init();
	});
})(jQuery)