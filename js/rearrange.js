$( document ).ready(function() {
	$(window).resize(function(){
	if ($(window).width() <= 768){	
		$("#k2 article").insertAfter("#k2 img");
		$("#k4 article").insertAfter("#k4 img");
	}
	else{	
		$("#k2 article").insertBefore("#k2 img");
		$("#k4 article").insertBefore("#k4 img");
	}	
});
});