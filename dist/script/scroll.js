$(document).ready(function() {
    
	var menuList = $(".nav-menu li"),
		menuancor = $(".menuancor"),
		windowHeight = $(window).height(),
		previousScrollTop = $(window).scrollTop(),
		distance = windowHeight / 2;

	menuList.each(function(i){
	    menuList.eq(i).on('click', function(){
	        $('html, body').animate({scrollTop: menuancor.eq(i).offset().top - 40}, 500);
			return false;
	    });
	});

    function navMenuChecker(){

    	var direction = 'DOWN';

    	if ((previousScrollTop-$(this).scrollTop()) < 0){
    		direction = 'DOWN';
    	}
    	else {
    		direction = 'UP';
    	}

    	for (var i = 0; i < 3; i++) {


	    	if (((direction=='DOWN') && (($(this).scrollTop()+windowHeight)>=menuancor.eq(i).offset().top+distance) && ($(this).scrollTop()<=(menuancor.eq(i).offset().top+menuancor.eq(i).height()-distance))) || 
	    		((direction=='UP') && ($(this).scrollTop()<=(menuancor.eq(i).offset().top+menuancor.eq(i).height()-distance)) && (($(this).scrollTop()+windowHeight)>=menuancor.eq(i).offset().top+distance))){
	    		menuList.eq(i).addClass('active');
	    	}
	    	else {
	    		menuList.eq(i).removeClass('active');
	    	}
	    }

    	previousScrollTop = $(this).scrollTop();

    }

    $(window).scroll(function(){

    	navMenuChecker.call(this);

	});

});