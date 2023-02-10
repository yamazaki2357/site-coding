$(function() {
  // メインエリア表示切り替え
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    // TODO:動的にactive　IDを付け替える

    var clickedIndex = $('.index-btn').index($(this));
    $('.site-display').eq(clickedIndex).addClass('active');

    adjusted_height(); /* 高さ自動調整 */

    $('html, body').animate({
      'scrollTop': '300'
    }, 1000);
  });

  // メインエリアの高さ自動調整
  function adjusted_height() {
    const site_size = document.getElementById("active").childNodes; /* ドキュメントの高さを取得 */

    site_size[1].style.height = site_size[1].contentWindow.document.body.scrollHeight + "px";
  }

  // スクロールボタン
  $('#top-btn').click(function() {
    $('html, body').animate({
      'scrollTop': '0'
    }, 300);
  });

  // サイドボタン
  // スマホ版が押されたら
  $('.small-size-btn').click(function() {
    $('.site-display').removeClass('pc-size');
    $('.site-display').addClass('small-size');

    var siteImgs = document.getElementsByClassName('site-img');
    var i = 1;

    for (let img of siteImgs) {
      img.setAttribute('src', "./img/no-image-" + i + ".png");
      i++;
    }

    adjusted_height(); /* 高さ自動調整 */
  });
  // PC版が押されたら
  $('.pc-size-btn').click(function() {
    $('.site-display').removeClass('small-size');
    $('.site-display').addClass('pc-size');

    var siteImgs = document.getElementsByClassName('site-img');
    var i = 1;

    for (let img of siteImgs) {
      img.setAttribute('src', "./img/" + i + ".png");
      i++;
    }

    adjusted_height(); /* 高さ自動調整 */
  });

  $(".site-hide").animate({
    opacity:'toggle',
    height: 'toggle'
  }, 1500);

  // もっと見るボタン
  $('#more').click(function() {
    $('.site-hide').slideToggle();
    $(this).toggleClass('on-click');
  });

  window.addEventListener('DOMContentLoaded', () => {
    const infiniteSlider = new Swiper('.infinite-slider', {
      loop: true,
      loopedSlides: 30,
      slidesPerView: 'auto',
      speed: 2000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });
  });
});