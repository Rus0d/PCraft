$(document).ready(function(){	

	var showroomSlider = new Swiper('.showroom .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 80,
        loop: true,
        centeredSlides: true,
        autoplay: 15000,
        autoplayDisableOnInteraction: false,
        breakpoints: {
            // when window width is <= 500px
            500: {
                slidesPerView: 1,
                centeredSlides: true
            },
            // when window width is <= 768px
            768: {
                slidesPerView: 2,
                centeredSlides: false
            }
        }
    });

});