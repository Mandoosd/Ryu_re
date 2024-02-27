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


    $(window).on('scroll', function () {
        const scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if (scrollHeight > 0) {
            $('.header').addClass('on')

        } else {
            $('.header').removeClass('on')
        }
    });


    $('.png_slide .main_slide').slick({
        pauseOnHover: false,
        autoplaySpeed: 2000,
        dots: true,

    });

    $('.pizza_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
        slidesToScroll: 4,
        infinite: false,

    });
});