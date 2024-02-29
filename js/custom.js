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


    $('.header>.m_btn').on('click', function () {
        $('.hamburger').toggleClass('is-active');
        $('.left_gnb').toggleClass('on');
    });




    $('.left_gnb .m_btn').on('click', function () {
        // 클릭된 버튼의 인덱스를 가져옵니다.
        var index = $(this).index() + 1;

        // 현재 클릭된 버튼이 이미 on 클래스를 가지고 있다면
        if ($(this).hasClass('on')) {
            // 해당 버튼의 on 클래스를 제거합니다.
            $(this).removeClass('on');
            // 해당하는 sub 요소에서도 on 클래스를 제거합니다.
            $('.left_gnb .sub.sub0' + index).removeClass('on');
        } else {
            // 클릭된 버튼의 부모 요소인 m_btn_wrap으로부터 on 클래스를 모두 제거합니다.
            $('.m_btn').removeClass('on');

            // 현재 클릭된 버튼에만 on 클래스를 추가합니다.
            $(this).addClass('on');

            // 모든 sub 요소에서 on 클래스를 제거합니다.
            $('.left_gnb .sub').removeClass('on');

            // 현재 클릭된 버튼과 같은 순서의 sub 요소에만 on 클래스를 토글합니다.
            $('.left_gnb .sub.sub0' + index).toggleClass('on');
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