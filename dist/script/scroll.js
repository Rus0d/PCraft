$(document).ready(function() {
    
	var menuList = $(".nav-menu li"),
		menuancor = $(".menuancor");

	menuList.each(function(i){
	    menuList.eq(i).on('click', function(){
	        $('html, body').animate({scrollTop: menuancor.eq(i).offset().top}, 500);
			return false;
	    });
	});

	$('.down-arrow').on('click', function(){
		$('html, body').animate({scrollTop: $('.advantages').offset().top}, 500);
		return false;
	});

});