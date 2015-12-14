var rows = 20;
var columns = 20;

$(document).ready(function() {
	// Get the dimensions of the containing div
	var padDimensions = $("#sketchContainer").css("width");
	console.log(padDimensions);
	// The value is returned to us as a string with 'px' on the end
	// and this will remove the px so we can convert the string
	// to a number
	padDimensions = padDimensions.slice(0, -2);
	padDimensions = Number(padDimensions);

	makeSketchPad(padDimensions, rows, columns);
	setDefaultHandler();

	$("#newPadButton").click(
		function() {
			$(".row").remove();
			rows = $(".dimBoxes").val();
			columns = rows;
			makeSketchPad(padDimensions, rows, columns);
			setHandlers();
		});

	$(".modifier").click(function() {
		setHandlers();
	});

});

function randomInt(min, max) {
	return Math.floor((Math.random()*max)+min);
}

function randomColor() {
	baseTen = randomInt(0, Math.pow(16, 6)-1);
	hex = baseTen.toString(16);
	// Add the preceding zeros if necessary
	if (hex.length != 6)
		hex = Array(7-hex.length).join("0") + hex;
	hex = "#" + hex;
	return hex.toUpperCase();
}

function setDefaultHandler() {
	$(".row").hover(function() {
		$(this).css("opacity", 1);
		$(this).css("background-color", "black");
		},
		function() {}
		);
}

function makeSketchPad(dimensions, rows, columns) {
	// Create a grid of divs. Each div is a 'pixel' of my sketchpad
	for (k=0; k<rows; k++) {
		for (i=0; i<columns; i++) {
			$("#sketchContainer").append("<div class=\"row\"></div>");
		}
	}

	blockHeight = dimensions/rows;
	blockWidth = dimensions/columns;

	// Assign the height and width of my divs according to my
	// variables
	$(".row").css("width", String(blockWidth));
	$(".row").css("height", String(blockHeight));
}

function setGradientHandler() {
		// Event handler that changes the opacity of the divs when the
	// cursor is over them. 
	// For the "gradient" type of sketching
	$(".row").hover(
		function() {
			$(this).css("opacity", 
				Number($(this).css("opacity"))+.1);
		},
		function () {}
		);
}

function setRainbowMode() {
	$(".row").hover(
		function() {
			$(this).css("background-color", randomColor());
		},
		function() {}
		);
}

function setHandlers() {
	$(".row").off();
	if ($("#gradientMode").is(":checked"))
		setGradientHandler();
	else
		setDefaultHandler();
	if ($("#rainbowMode").is(":checked"))
		setRainbowMode();
}

