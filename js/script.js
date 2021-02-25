$(function(){
  //hamburger menu click
  $('#nav_toggle').click(function(){
    $("#top-head").toggleClass('open');
    $("nav").slideToggle(500);
  });
  //menu link click
  $('nav a').click(function(){
    if(window.innerWidth <= 680){
      $("#top-head").toggleClass('open');
      $("nav").slideToggle(500);
    }
  });
});

//slide
var slider1 = new Swiper('.slider1', {
  direction: 'vertical',
  loop: true,
  spaceBetween: 0,
  centeredSlides: 4,
  slidesPerView: 10,
  calculateHeight: 0,
  speed: 2000,
    autoplay: {
        delay: 1,
  },
    setWrapperSize: true,
});

var slider2 = new Swiper('.slider2', {
  // 以下にオプションを設定
  loop: true, //最後に達したら先頭に戻る
  centeredSlides: 1,
  slidesPerView: 5,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  },

  //ページネーション表示の設定
  pagination: {
    el: '.swiper-pagination', //ページネーションの要素
    type: 'bullets', //ページネーションの種類
    clickable: true, //クリックに反応させる
  },

  //ナビゲーションボタン（矢印）表示の設定
  navigation: {
    nextEl: '.swiper-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  },

  slidesPerView: 1,
  spaceBetween: 5,
  centeredSlides: 1,
});

$(function() {
  $(".show_more").click(function() {
    var show_text = $(this)
      .parent(".text_wrapper")
      .find(".text");
    var small_height = 300; //This is initial height.
    var original_height = show_text.css({ height: "auto" }).height();

    if (show_text.hasClass("open")) {
      var offset = $(this).parent().offset().top;
      $(window).scrollTop( offset );
      /*CLOSE*/
      show_text.height(original_height).animate({ height: small_height }, 300);
      show_text.removeClass("open");
      $(this)
        .text("+　続きを読む")
        .removeClass("active");
    } else {
      /*OPEN*/
      show_text
        .height(small_height)
        .animate({ height: original_height }, 300, function() {
          show_text.height("auto");
        });
      show_text.addClass("open");
      $(this)
        .text("-　閉じる")

        .addClass("active");
    }
  });
});

$(".show_more").css({ 'color': '#62BFBE', 'font-size': '14px' });

$(window).scroll(function() {
    var scroll_len = $(window).scrollTop();
    var page_len   = $(document).height();
    var window_len = $(window).height();
    var header_margin = 200;
    var footer_margin = 800;
    if ( (scroll_len > header_margin) && (scroll_len < page_len - window_len - footer_margin) ) {
      $('#fixedBox').animate({height: 'show'}, 'slow' );
    } else {
      $('#fixedBox').animate({height: 'hide'}, 'slow' );
    }
  });
