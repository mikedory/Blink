/* Author: Michael Dory

*/
// load jquery, then set the onload event
google.load("jquery", "1.6.4");
google.setOnLoadCallback(function() {

	$('.blinksize').textfill({ maxFontPixels: 700 })


	// set me some intervals
	setInterval(function() {

		$('.blink').toggle();

	}, 500);

	setInterval(function() {

		var randomnumber=Math.floor(Math.random()*999)
		changeBodyColor('#'+randomnumber);

	}, 200);

	// change the color to something
	function changeBodyColor(color) {

    $("body").css({'background-color':color})
		
	}
	

});