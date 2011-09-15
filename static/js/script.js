/* Author: Michael Dory

*/
// load jquery, then set the onload event
google.load("jquery", "1.3");
google.setOnLoadCallback(function() {

	$('.blinksize').textfill({ maxFontPixels: 7000 })


	// set me some intervals
	setInterval(function() {

		$('.blink').toggle();

	}, 500);

	setInterval(function() {

		var randomnumber=Math.floor(Math.random()*999)
		changeBodyColor('#'+randomnumber);

	}, 300);

	// change the color to something
	function changeBodyColor(color) {

    $("body").css({'background-color':color})
		
	}
	

});