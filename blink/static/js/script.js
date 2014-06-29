/*
	Author: Michael Dory
*/

// load jquery, then set the onload event
google.load("jquery", "1.6.4");
google.setOnLoadCallback(function() {

	// Change this number to determine how big you want
	// the blinky text max font size to get
	$('.blinksize').textfill({ maxFontPixels: 700 })


	// Change this to set the text blink rate
	setInterval(function() {

		$('.blink').toggle();

	}, 500);

	// Change this to set the page background color change rate
	setInterval(function() {

		var randomnumber=Math.floor(Math.random()*999)
		changeBodyColor('#'+randomnumber);

	}, 200);

	// change the body's background color
	function changeBodyColor(color) {

		$("body").css({'background-color':color})

	}

});