var rows = 100;
var columns = 100;

$(document).ready(function() {
	// Create a grid of divs. Each div is a 'pixel' of my sketchpad
	for (k=0; k<rows; k++) {
		for (i=0; i<columns; i++) {
			$("#sketchContainer").append("<div class=\"row\"></div>");
		}
	}

	$(".row").hover(
		function () {},
		function() {
			$(this).css("opacity", 
				Number($(this).css("opacity"))+.1);
		});
});