var showroomSlider = {};

$(document).ready(function(){

    showroomSlider = new Swiper('.showroom .swiper-container', {
        nextButton: '.showroom .swiper-button-next',
        prevButton: '.showroom .swiper-button-prev',
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 80,
        grabCursor: true,
        autoplay: 15000,
        autoplayDisableOnInteraction: false,
        breakpoints: {
            // when window width is <= 500px
            500: {
                slidesPerView: 1,
                slidesPerColumn: 1,
                spaceBetween: 0
            },
            // when window width is <= 768px
            768: {
                slidesPerColumn: 1,
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });

});

