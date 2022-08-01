// 自行加入的JS請寫在這裡
$(function() {
    $('.radio_grp').each(function(index, el) {
        $(this).find('input').focus(function(event) {
            $(this).parent('label').siblings().removeClass('active');
            $(this).parent('label').addClass('active');
        });
        $(this).find('input').blur(function(event) {
            $(this).parent('label').siblings().removeClass('active');
            $(this).parent('label').removeClass('active');
        })
    });

    // lazyload
    //可以指定你想要的元素做lazyload
    $("img").lazyload({ effect: "fadeIn" });
    // mp_slider
    //請放置customize.js
    $('.mpSlider').slick({
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        cssEase: 'ease'
    });
    $('.event_slider').slick({
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        cssEase: 'ease'
    });
    // 廣告ad
    //customize.js
    $('.adSlider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        useHistoryApi: 'true',
        lazy: true
    });
    // 相簿內容頁面專用
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.Slider-nav',
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        focusOnSelect: true,
        infinite: true,
    });
    //不同語系
    var weblang = $('html').attr('lang');
    if (weblang.substring(0, 2) == 'zh') {
        // console.log("中文");
        $('.slick-prev').attr('title', '上一筆');
        $('.slick-next').attr('title', '下一筆');
        $('header').find('.accesskey').attr('title', '上方功能區塊');
        $('.main').find('.accesskey').attr('title', '中央內容區塊');
        $('footer').find('.accesskey').attr('title', '下方功能區塊');
        $('.search').find('.accesskey').attr('title', '關鍵字搜尋：文章關鍵字搜尋');
    } else if (weblang.substring(0, 2) == 'en') {
        // console.log("英文");
        $('.slick-prev').attr('title', 'previous');
        $('.slick-next').attr('title', 'next');
        $('header').find('.accesskey').attr('title', 'header');
        $('.main').find('.accesskey').attr('title', 'content');
        $('footer').find('.accesskey').attr('title', 'footer');
        $('.search').find('.accesskey').attr('title', 'search');
    } else if (weblang.substring(0, 2) == 'vi') {
        // console.log("越南");
        $('.slick-prev').attr('title', 'Trước');
        $('.slick-next').attr('title', 'kế tiếp');
    } else if (weblang.substring(0, 2) == 'id') {
        // console.log("印尼");
        $('.slick-prev').attr('title', 'sebelumnya');
        $('.slick-next').attr('title', 'berikutnya');
    } else if (weblang.substring(0, 2) == 'km') {
        // console.log("柬埔寨");
        $('.slick-prev').attr('title', 'មុន');
        $('.slick-next').attr('title', 'បន្ទាប់');
    } else if (weblang.substring(0, 2) == 'th') {
        // console.log("泰文");
        $('.slick-prev').attr('title', 'ก่อน');
        $('.slick-next').attr('title', 'ต่อไป');
    } else {
        // console.log("沒有判斷");
        $('.slick-prev').attr('title', 'previous');
        $('.slick-next').attr('title', 'next');
        $('.slick-prev').attr('title', '上一筆');
        $('.slick-next').attr('title', '下一筆');
        $('header').find('.accesskey').attr('title', '上方功能區塊');
        $('.main').find('.accesskey').attr('title', '中央內容區塊');
        $('footer').find('.accesskey').attr('title', '下方功能區塊');
        $('.search').find('.accesskey').attr('title', '關鍵字搜尋：文章關鍵字搜尋');
    }
});
