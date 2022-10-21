$(document).ready(function(){

    // 햄버거버튼 누를 시
    $('.banner .header-area .hamburger').click(function(){

        $('.banner .hamburger-menu').toggleClass('active');
        $('.header-area .hamburger .txt').toggleClass('active');
        $('.header-area .hamburger a span').toggleClass('active');
        // $(this).css('z-index', '9999');

    });

    // 햄버거버튼 리스트 누를 시
    $('.hamburger-menu li').click(function(){
    
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

    });

    // 햄버거버튼 스크롤 이동
    $('.hamburger-menu .sub-menu li').click(function(){
    
        const scrollMove = $(this).attr('data-alt');

        switch (scrollMove) {

            case '1':
            $('html,body').animate({
                scrollTop: $('.section1').offset().top
            },400);
            break;

            case '2':
            $('html,body').animate({
                scrollTop: $('.section2').offset().top
            },400);
            break;

            case '3':
            $('html,body').animate({
                scrollTop: $('.section3').offset().top
            },400);
            break;

            case '4':
            $('html,body').animate({
                scrollTop: $('.section4').offset().top
            },400);
            break;

            case '5':
            $('html,body').animate({
                scrollTop: $('.section5').offset().top
            },400);
            break;
        }

    });

    // 필모 클릭시 이벤트
    
    $('.sec-1 .filmo').click(function(){

        const dataAlt = $(this).attr('data-alt');
        $(`.sec-1:nth-child(${dataAlt}) .filmo`).toggleClass('active');
        $(`.sec-1:nth-child(${dataAlt}) .img-box`).toggleClass('active');
        $(`.sec-1:nth-child(${dataAlt}) .name-box`).toggleClass('active');
        $(`.sec-1:nth-child(${dataAlt}) #canvas`).toggleClass('active');

        console.log(dataAlt);
        
    });


    
    $(window).scroll(function(){

        const sct = $(window).scrollTop();
        const sec1_sct = $('.section1').offset().top;
        const sec2_sct = $('.section2').offset().top;
        const sec3_sct = $('.section3').offset().top;
        const sec4_sct = $('.section4').offset().top;
        const sec5_sct = $('.section5').offset().top;

        $('html,body').on('mousewheel', function(e){

            const hamburger = $('.banner .hamburger-menu').hasClass('active');
            var wheel = e.originalEvent.wheelDelta;
            //스크롤값을 가져온다.
            if ( wheel > 0 && sct > 0 && !hamburger) {
    
                //스크롤 올릴때
                $('.banner .header-area').css('opacity', 0);
                // $('.section1 .header-area').css('display', 'none');
                // $('.section1 .header-area').fadeOut();
    
            } else {
    
                //스크롤 내릴때
                $('.banner .header-area').css('opacity', 1);
                // $('.section1 .header-area').css('display', 'flex');
                // $('.section1 .header-area').fadeIn();
    
            }
    
        });

        // 현재 스크롤값
        console.log(sct);

        if (sct < sec1_sct) {

            skrollr.init().destroy();
            $('.banner .header-area').css('opacity', 1);

        } else if (sct >= sec1_sct && sct < sec2_sct) {

            skrollr.init();
            $('.horizontal-container').css({

                position: 'fixed',
                top: 0,
                left: 0,

            });
            // $('.banner .header-area').css('backgroundColor', '');
            $('.banner .header-area').css('opacity', 1);
            $('.banner .header-area .hamburger').css('width', '165px');
            $('.banner .header-area .hamburger .txt').text("ARTIST");

        } else if (sct >= sec2_sct && sct < sec3_sct) {

            // $('.banner .header-area').css('backgroundColor', 'rgba(34, 34, 34, 0.8)');
            $('.banner .header-area .hamburger').css('width', '210px');
            $('.banner .header-area .hamburger .txt').text("COMPANY");

        } else if (sct >= sec3_sct && sct < sec4_sct) {

            $('.banner .header-area .hamburger').css('width', '203px');
            $('.banner .header-area .hamburger .txt').text("PRODUCT");

        } else if (sct >= sec4_sct && sct < sec5_sct) {

            $('.banner .header-area .hamburger').css('width', '189px');
            $('.banner .header-area .hamburger .txt').text("CHARITY");

        } else if (sct >= sec5_sct) {

            $('.banner .header-area .hamburger').css('width', '206px');
            $('.banner .header-area .hamburger .txt').text("AUDITION");

        } else {

            $('.banner .header-area').css('opacity', 0);

        }

        // charity 이름 스크롤이벤트
        var scrollNameTop = [];
        var scrollNameLeft = [];

        scrollNameTop[0] = -3 / 55 * sct + 4515 / 11;
        scrollNameTop[1] = -1 / 20 * sct + 470;
        scrollNameTop[2] = -7 / 120 * sct + 550;


        scrollNameLeft[0] = 3 / 55 * sct - 4020 / 11;
        scrollNameLeft[1] = -31 / 600 * sct + 444;
        scrollNameLeft[2] = 1 / 20 * sct - 427;


        function scrollCharity(index) {

            $('.content-box:nth-child(' + (index+1) + ') .name-box').css({

                top: scrollNameTop[index] + "%",
                left: scrollNameLeft[index] + "%"

            });

        }

        for(var i = 0; i < scrollNameTop.length; i++) {

            scrollCharity(i);

        }

        // audition 스크롤이벤트
        var auditionOpacity = [];
        var auditionScale = [];

        auditionOpacity[0] = -1 / 500 * sct + 116 / 5;
        auditionOpacity[1] = -1 / 500 * sct + 123 / 5;
        auditionOpacity[2] = -1 / 500 * sct + 130 / 5;
        auditionOpacity[3] = -1 / 500 * sct + 137 / 5;
        auditionOpacity[4] = -1 / 500 * sct + 144 / 5;

        auditionScale[0] = -3 / 5000 * sct + 383 / 50;
        auditionScale[1] = -3 / 5000 * sct + 404 / 50;
        auditionScale[2] = -3 / 5000 * sct + 425 / 50;
        auditionScale[3] = -3 / 5000 * sct + 446 / 50;
        auditionScale[4] = -3 / 5000 * sct + 467 / 50;

        function scrollAuditon(index) {

            $('.section5 .card-box:nth-child(' + (index+1) + ')').css({

                opacity: auditionOpacity[index],
                transform: "scale(" + auditionScale[index] + ")"

            });

        }

        for(var i = 0; i < auditionOpacity.length; i++) {

            scrollAuditon(i);

        }

    });

    $('.tab-inner .btn li').click(function(){

        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        const result = $(this).attr('data-alt');

        $('.tabs > div').removeClass('active');
        $(`#${result}`).addClass('active');

    });


});