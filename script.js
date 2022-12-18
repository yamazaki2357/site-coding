$(function() {
  // メインエリア表示切り替え
    $('.index-btn').click(function() {
    $('.active').removeClass('active');

    var clickedIndex = $('.index-btn').index($(this));
    $('.site-display').eq(clickedIndex).addClass('active');
  });

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
  });
  // PC版が押されたら
  $('.pc-size-btn').click(function() {
    $('.site-display').removeClass('small-size');
    $('.site-display').addClass('pc-size');
  });

  // もっと見るボタン
  $(".more").on("click", function() {
    $(this).toggleClass("on-click");
    $(".site-hide").slideToggle(1000);
  });
});