$(document).ready(function() {

	/** SCROLL TO ABOUT-SECTION **/
	$("#arrow-container").click(function() {
		$("html, body").animate({
			scrollTop: $("#about-section").offset().top
		}, 500);
  	});
	
	/** FADE IN TITLES **/
	$(window).scroll( function(){
        $('.title').each( function(i){
        var obj_pos = $(this).offset().top;
        var window_pos = $(window).scrollTop() + $(window).height();
        if( window_pos > obj_pos ){
            $(this).animate({'opacity':'1'}, 800);
        }
   		}); 
    
    });

    /** HOVER AND FADE IN INFO **/

	$("#pic1").hover(
	   function() { $('#pic1').stop().fadeOut(); },
	   function() { $('#pic1').stop().fadeIn(); }
	);

	$("#pic2").hover(
	   function() { $('#pic2').stop().fadeOut(); },
	   function() { $('#pic2').stop().fadeIn(); }
	);

	$("#pic3").hover(
	   function() { $('#pic3').stop().fadeOut(); },
	   function() { $('#pic3').stop().fadeIn(); }
	);

	$("#pic4").hover(
	   function() { $('#pic4').stop().fadeOut(); },
	   function() { $('#pic4').stop().fadeIn(); }
	);
});

