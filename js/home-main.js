$(function() {
    mainCarousel();
    addClass();
    showVideo();
})

function mainCarousel() {
    var swiper = new Swiper('.js-swiper', {
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
    });
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
    
}