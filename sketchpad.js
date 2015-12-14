var rows = 40;
var columns = 40;

$(document).ready(function() {
	// Get the dimensions of the containing div
	var padDimensions = $("#sketchContainer").css("width");
	// The value is returned to us as a string with 'px' on the end
	// and this will remove the px so we can convert the string
	// to a number
	padDimensions = padDimensions.slice(0, -2);
	padDimensions = Number(padDimensions);
	console.log(padDimensions);

	blockHeight = padDimensions/rows;
	blockWidth = padDimensions/columns;
	
	// Create a grid of divs. Each div is a 'pixel' of my sketchpad
	for (k=0; k<rows; k++) {
		for (i=0; i<columns; i++) {
			$("#sketchContainer").append("<div class=\"row\"></div>");
		}
	}

	$(".row").css("width", String(blockWidth));
	$(".row").css("height", String(blockHeight));

	$(".row").hover(
		function() {
			$(this).css("opacity", 
				Number($(this).css("opacity"))+.1);
		},
		function () {}
		);
});