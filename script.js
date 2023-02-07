$(function() {
  // メインエリア表示切り替え
  $('.index-btn').click(function() {
    $('.active').removeClass('active');

    var clickedIndex = $('.index-btn').index($(this));
    $('.site-display').eq(clickedIndex).addClass('active');

    adjusted_height(); /* 高さ自動調整 */

    $('html, body').animate({
      'scrollTop': '300'
    }, 1000);
  });

  // メインエリアの高さ自動調整
  function adjusted_height() {
    var site_size = document.getElementsByClassName('active'); /* ドキュメントの高さを取得 */

    if (site_size[0].classList.contains("very-large-site")) {
      site_size[0].style.height = "3000px";
    } else if (site_size[0].classList.contains("large-site")) {
      site_size[0].style.height = "2500px";
    } else if (site_size[0].classList.contains("small-site")) {
      site_size[0].style.height = "1500px";
    } else {
      site_size[0].style.height = "2000px";
    }

    // HACK: 要素の高さを自動取得して代入する。
    // site_size[0].style.height = site_size[0].contentWindow.document.body.scrollHeight + "px";
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