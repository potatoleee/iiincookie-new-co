


// loading 動畫start
$(window).on('load',function(){
    $('.loading-overlay').addClass('active')
})
// loading 動畫end

$(document).ready(function(){


// scoll top
    $('.pagetop').on('click',function(){
        $('html,body').animate({scrollTop:0 });
 });// scoll end

//  漢堡選單 start

    $('.btn-burger').click(function(e){
        $('.nav__content__main').toggleClass('open');
        $('.nav__content__main a').toggleClass('open');
        $('.btn-burger').toggleClass('open');
    })//  漢堡選單 end

//點小圖換大圖 start
$('.sub-product img').click(function(e){
$('.main-product ').attr('src',$(this).attr('src'));
$(this).addClass('active');
$(this).parent().siblings().find('img').removeClass('active');
})


//faq

$('.faq-list_title').click(function(e){
    $(this).find('.btn-faq').toggleClass('open');
    $(this).siblings('.faq-list_p').slideToggle();
    $(this).toggleClass('text-title_color');
    $(this).parent().siblings().find('.faq-list_p').slideUp();
    $(this).parent().siblings().find('.faq-list_title').removeClass('text-title_color');
    $(this).parent().siblings().find('.btn-faq').removeClass('open');


})






})// document ready end

var swiper = new Swiper(".commentSwiper", {
 
    slidesPerView: 1,
    // 倒底會回第一張
    loop: true,
     // 有fade效果才不會整張切換
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });