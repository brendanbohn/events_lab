console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$('form').click(function(e) {
		e.preventDefault();
	});

  $("#time").text( Date.now() );

});
