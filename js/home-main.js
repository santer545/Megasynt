$(function() {
    addingClass();
    sound();
    //mainCarousel();
    const breakpoint = window.matchMedia('(max-width:767px)');


    var mySwiper;

    const breakpointChecker = function() {


        if (breakpoint.matches === true) {


            if (mySwiper !== undefined) mySwiper.destroy(true, true);


            return;


        } else if (breakpoint.matches === false) {


            return enableSwiper();

        }

    };

    $('.js-phone').mask('(000) 000 0000');

    const enableSwiper = function() {

        mySwiper = new Swiper('.js-swiper', {
            direction: 'vertical',
            slidesPerView: 1,
            speed: 600,
            mousewheel: true,
            //freeMode: true,
            //freeModeMomentumBounce: false,
            //freeModeMinimumVelocity: 0.15,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        // mySwiper.on('slideChange', function() {
        //     if (mySwiper.realIndex == 0) {
        //         $('.swiper-pagination').addClass('hidden');
        //     } else {
        //         $('.swiper-pagination').removeClass('hidden');
        //     }
        // });



    };

    $('.js-insulation').click(function() {
        mySwiper.slideTo(3, 600, false);
    })

    $('.js-tinsul').click(function() {
        mySwiper.slideTo(4, 600, false);
    })

    $('.js-stitch').click(function() {
        mySwiper.slideTo(5, 600, false);
    })


    var carousel = new Swiper('.js-carousel', {
        slidesPerView: 5,
        speed: 600,
        mousewheel: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {

            767: {
                slidesPerView: 2,
            },

            //freeMode: true,
            //freeModeMomentumBounce: false,
            //freeModeMinimumVelocity: 0.15,

        }

    });


    breakpoint.addListener(breakpointChecker);


    breakpointChecker();
    addClass();
    showVideo();
    fadeIn();

    if ($(window).width() < 768) {
        $('.js-scroll-mobile').click(function() {
            //mySwiper.slideTo(1, 1800, false);
            $('html, body').animate({
                scrollTop: $(".swiper-slide:nth-child(2)").offset().top
            }, 600);
        })
    } else {
        $('.js-scroll').click(function() {
            console.log('!!!');
            mySwiper.slideTo(1, 600, false);
        })
    }


})

$(window).on('resize', addingClass);

// var vid = document.getElementById("video-bg");

// $(window).on('scroll', function() {
//     $('#video-bg').each(function() {
//         if ($(this).isInViewport()) {

//             vid.muted = true;
//             vid.play();
//         } else {
//             $(this).removeClass('active');
//         }
//     });
// });

function addingClass() {
    console.log($(window).width());
    if ($(window).width() < 768) {
        console.log('!!!!');
        $('.js-insulation').removeClass('js-insulation').addClass('js-insulation-mobile');
        $('.js-stitch').removeClass('js-stitch').addClass('js-stitch-mobile');


        $('.js-insulation-mobile').on('click', function() {
            $('html, body').animate({
                scrollTop: $(".swiper-slide:nth-child(4)").offset().top
            }, 600);
        });

        $('.js-stitch-mobile').on('click', function() {
            $('html, body').animate({
                scrollTop: $(".swiper-slide:nth-child(5)").offset().top
            }, 600);
        })

        $('.js-scroll').addClass('js-scroll-mobile').removeClass('js-scroll');

    } else {
        $('.js-insulation').removeClass('js-insulation-mobile').addClass('js-insulation');
        $('.js-stitch').removeClass('js-stitch-mobile').addClass('js-stitch');
        $('.js-scroll-mobile').addClass('js-scroll').removeClass('js-scroll-mobile');

    }
}

function sound() {
    var vid = document.getElementById("video-bg");
    //vid.muted = true;
    //vid.play();
    $('.js-sound').click(function() {
        vid.muted = false;
        $(this).css('display', 'none');
        $('.js-sound-off').css('display', 'block');
    })

    $('.js-sound-off').click(function() {
        vid.muted = true;

        $(this).css('display', 'none');
        $('.js-sound').css('display', 'block');
    })
}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

function mainCarousel() {
    var mySwiper = new Swiper('.js-swiper', {
        direction: 'vertical',
        slidesPerView: 1,
        speed: 1800,
        mousewheel: true,
        //freeMode: true,
        //freeModeMomentumBounce: false,
        //freeModeMinimumVelocity: 0.15,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            767: {
                freeMode: true,
                freeModeMomentumBounce: false,
                freeModeMinimumVelocity: 0.15,
            }
        }
    });

    $('.js-insulation').click(function() {
        mySwiper.slideTo(3, 1800, false);
    })

    $('.js-stitch').click(function() {
        mySwiper.slideTo(4, 1800, false);
    })

}







function addClass() {
    $('.main-text__wrapper > span').addClass('active');
}


function showVideo() {
    var vid1 = document.getElementById("video-1");
    var vid2 = document.getElementById("video-2");

    $('.js-video').click(function() {
        $(this).closest('.video-section').find('.video-box').addClass('active');
        $(this).closest('.video-section').find('video')[0].play();
    })

    $('.js-close').click(function() {
        $(this).closest('.video-section').find('.video-box').removeClass('active');
        $(this).closest('.video-section').find('video')[0].pause();
    })


    $('.slide-video').on('click', function() {
        $(this).addClass('active');
        $('.play').addClass('hidden');
        var videoBg = document.getElementById("video-bg");
        //videoBg.controls = false;
        if(videoBg.paused) {
            videoBg.play();
        } else {
            videoBg.pause();
        }
        
    })

}

function fadeIn() {
    $('.js-top-fade').addClass('active');
}