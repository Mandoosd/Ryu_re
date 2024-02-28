$(function () {

    const SECTION = document.querySelectorAll('.section');

    const Fullpage = new fullpage('#content', {
        scrollOverflow: false, // line-height : 1 에서 스크롤 생기는 거 없애줘...
        paddingTop: '1px',
        responsiveWidth: 1201,
        onLeave: function (o, d, t) {
            console.log(d.index);
            SECTION.forEach(it => it.classList.remove('on'));
            SECTION[d.index].classList.add('on');
            if (d.index == 0) {
                document.querySelector('.header').classList.remove('on')
            } else {
                document.querySelector('.header').classList.add('on')
            }
        }
    });


    $('.m_btn').on('click', function () {
        $('.hamburger').toggleClass('is-active');
        $('.left_gnb').toggleClass('on');
    });

    $(window).on('scroll', function () {
        const scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if (scrollHeight > 0) {
            $('.header').addClass('on')

        } else {
            $('.header').removeClass('on')
        }
    });


    var swiper = new Swiper(".main_slide", {
        effect: 'fade', fadeEffect: { crossFade: true },

        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });
});