$(document).ready(function () {
    var swiper = new Swiper(".banner_list", {
        slidesPerView: 5,
        observer: true,
        observeParents: true,
        spaceBetween : 30, 
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.control .next',
            prevEl: '.control .prev',
        }
    });
    function expandImage(img) {
        img.style.width = "400px"; // 확대할 크기로 지정
        img.style.height = "auto"; // 가로 세로 비율 유지
    }
    $('.play').hide();
    $('.pause').click(function(){
        swiper.autoplay.stop();
        $('.pause').hide();
        $('.play').show();
    })
    $('.play').click(function(){
        swiper.autoplay.start();
        $('.play').hide();
        $('.pause').show();
    })
})