$(function() {
  // メイン表示切り替え
  $('.profile-btn').click(function() {
    $('.import-profile-site').css('display', 'block');
  });

  $('.other').click(function() {
    $('.import-profile-site').css('display', 'none');
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
});